"""Outbound email behind an `EmailSender` protocol.

- ConsoleEmailSender: development default; logs subject + body (which includes links) to stdout.
- ResendEmailSender: posts to the Resend HTTP API with httpx. Written against Resend's documented
  `POST /emails` endpoint but NOT exercised against the live service in this repo's tests.
"""

import logging
import re
from dataclasses import dataclass, field
from typing import Protocol

import httpx

from app.core.config import Settings, get_settings

log = logging.getLogger("app.email")

_EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+(\.[\w-]+)+")


def redact_emails(text: str) -> str:
    return _EMAIL_RE.sub("[email]", text)


@dataclass
class EmailMessage:
    to: str
    subject: str
    text: str
    html: str | None = None
    reply_to: str | None = None
    tags: dict[str, str] = field(default_factory=dict)


class EmailSender(Protocol):
    def send(self, message: EmailMessage) -> None: ...


class ConsoleEmailSender:
    def send(self, message: EmailMessage) -> None:
        # Dev only. Recipient and any addresses in the body are redacted; the links
        # (confirm / unsubscribe / preferences) are what developers need to click.
        log.info(
            "email_console",
            extra={
                "subject": redact_emails(message.subject),
                "body": redact_emails(message.text),
                "tags": message.tags,
            },
        )


class ResendEmailSender:
    endpoint = "https://api.resend.com/emails"

    def __init__(
        self, api_key: str, sender: str, timeout: float = 10.0, client: httpx.Client | None = None
    ) -> None:
        self._api_key = api_key
        self._from = sender
        self._client = client or httpx.Client(timeout=timeout)

    def send(self, message: EmailMessage) -> None:
        payload: dict = {
            "from": self._from,
            "to": [message.to],
            "subject": message.subject,
            "text": message.text,
        }
        if message.html:
            payload["html"] = message.html
        if message.reply_to:
            payload["reply_to"] = message.reply_to
        if message.tags:
            payload["tags"] = [{"name": k, "value": v} for k, v in message.tags.items()]
        try:
            resp = self._client.post(
                self.endpoint,
                json=payload,
                headers={"Authorization": f"Bearer {self._api_key}"},
            )
            resp.raise_for_status()
            log.info("email_sent", extra={"provider": "resend", "subject": message.subject})
        except httpx.HTTPError as exc:
            # Never fail the user-facing request because the provider hiccupped.
            log.error(
                "email_send_failed", extra={"provider": "resend", "error_type": type(exc).__name__}
            )


def build_email_sender(settings: Settings) -> EmailSender:
    if settings.email_provider == "resend":
        if not settings.resend_api_key:
            raise RuntimeError("EMAIL_PROVIDER=resend requires RESEND_API_KEY")
        return ResendEmailSender(settings.resend_api_key, settings.email_from)
    return ConsoleEmailSender()


_sender: EmailSender | None = None


def get_email_sender() -> EmailSender:
    """FastAPI dependency (override in tests)."""
    global _sender
    if _sender is None:
        _sender = build_email_sender(get_settings())
    return _sender
