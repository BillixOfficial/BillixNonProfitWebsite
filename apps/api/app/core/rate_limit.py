"""Per-key sliding-window rate limiting behind a small interface."""

import threading
import time
from collections import defaultdict, deque
from typing import Protocol

from fastapi import Request

from app.core.config import get_settings
from app.core.errors import ApiError


class RateLimiter(Protocol):
    def hit(self, key: str, limit: int, window_seconds: float) -> bool:
        """Record a hit; return True if allowed, False if over the limit."""
        ...

    def reset(self) -> None: ...


class InMemorySlidingWindowLimiter:
    """Single-process limiter. Swap for a Redis-backed one when running >1 worker."""

    def __init__(self) -> None:
        self._hits: dict[str, deque[float]] = defaultdict(deque)
        self._lock = threading.Lock()

    def hit(self, key: str, limit: int, window_seconds: float) -> bool:
        now = time.monotonic()
        with self._lock:
            q = self._hits[key]
            while q and q[0] <= now - window_seconds:
                q.popleft()
            if len(q) >= limit:
                return False
            q.append(now)
            return True

    def reset(self) -> None:
        with self._lock:
            self._hits.clear()


_limiter: RateLimiter = InMemorySlidingWindowLimiter()


def get_limiter() -> RateLimiter:
    return _limiter


def client_ip(request: Request) -> str:
    if get_settings().trust_proxy_headers:
        fwd = request.headers.get("x-forwarded-for")
        if fwd:
            return fwd.split(",")[0].strip()
    return request.client.host if request.client else "unknown"


def _limit(bucket: str, limit: int, window: int, request: Request) -> None:
    if not get_limiter().hit(f"{bucket}:{client_ip(request)}", limit, window):
        raise ApiError(429, "rate_limited", "Too many requests. Please try again in a minute.")


def write_rate_limit(request: Request) -> None:
    """Dependency for public form submissions (one shared bucket per IP)."""
    s = get_settings()
    _limit("write", s.rate_limit_writes, s.rate_limit_window_seconds, request)


def token_rate_limit(request: Request) -> None:
    """Dependency for token-bearing endpoints (confirm/unsubscribe/preferences)."""
    s = get_settings()
    _limit("token", s.rate_limit_tokens, s.rate_limit_window_seconds, request)
