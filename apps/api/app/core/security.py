"""Hashing helpers: tokens, IP addresses, honeypot."""

import hashlib
import hmac
import secrets


def new_token() -> str:
    """URL-safe random token (256 bits). Only its hash is ever stored."""
    return secrets.token_urlsafe(32)


def hash_token(token: str) -> str:
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


def hash_ip(ip: str | None, salt: str) -> str | None:
    if not ip:
        return None
    return hmac.new(salt.encode("utf-8"), ip.encode("utf-8"), hashlib.sha256).hexdigest()


def email_fingerprint(email: str, salt: str) -> str:
    """Short, non-reversible identifier safe to put in logs instead of an email."""
    return hmac.new(salt.encode(), email.encode(), hashlib.sha256).hexdigest()[:12]


def is_honeypot_tripped(value: str | None) -> bool:
    return bool(value and value.strip())
