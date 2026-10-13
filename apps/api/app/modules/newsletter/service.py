"""Newsletter (The Billix Brief) double opt-in flow."""

import base64
import hashlib
import hmac
import logging
from datetime import UTC, datetime, timedelta

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import Settings
from app.core.db import utcnow
from app.core.email import EmailMessage
from app.core.errors import ApiError
from app.core.security import email_fingerprint, hash_token, new_token
from app.modules.newsletter.models import NewsletterSubscriber
from app.modules.newsletter.schemas import PreferencesIn, SubscribeIn

log = logging.getLogger("app.newsletter")

DEFAULT_TOPICS = ["weekly"]
INVALID_TOKEN = ApiError(400, "invalid_token", "This link is invalid or has expired.")


def _aware(dt: datetime) -> datetime:
    # SQLite returns naive datetimes; treat them as UTC.
    return dt if dt.tzinfo else dt.replace(tzinfo=UTC)


def derive_token(settings: Settings, purpose: str, sub: NewsletterSubscriber) -> str:
    msg = f"{purpose}:{sub.id}:{sub.token_version}".encode()
    digest = hmac.new(settings.token_secret.encode(), msg, hashlib.sha256).digest()
    return base64.urlsafe_b64encode(digest).rstrip(b"=").decode()


def _ensure_long_lived_tokens(settings: Settings, sub: NewsletterSubscriber) -> tuple[str, str]:
    unsub = derive_token(settings, "unsubscribe", sub)
    manage = derive_token(settings, "manage", sub)
    sub.unsubscribe_token_hash = hash_token(unsub)
    sub.manage_token_hash = hash_token(manage)
    return unsub, manage


def _links(settings: Settings, unsub: str, manage: str) -> str:
    return (
        f"Manage your preferences: {settings.site_url}/newsletter/preferences?token={manage}\n"
        f"Unsubscribe: {settings.site_url}/newsletter/unsubscribe?token={unsub}\n"
    )


def subscribe(
    db: Session, settings: Settings, data: SubscribeIn, ip_hash: str | None
) -> EmailMessage | None:
    """Create or refresh a subscriber. Returns the email to send (if any).

    The HTTP response is identical in every branch to avoid account enumeration.
    """
    now = utcnow()
    sub = db.scalar(select(NewsletterSubscriber).where(NewsletterSubscriber.email == data.email))
    fp = email_fingerprint(data.email, settings.ip_hash_salt)

    if sub is not None and sub.status == "active":
        unsub, manage = _ensure_long_lived_tokens(settings, sub)
        db.commit()
        log.info("newsletter_subscribe_existing_active", extra={"email_fp": fp})
        return EmailMessage(
            to=sub.email,
            subject="You're already subscribed to The Billix Brief",
            text=(
                "Someone (hopefully you) tried to subscribe this address to The Billix Brief. "
                "You're already on the list, so nothing changed.\n\n"
                + _links(settings, unsub, manage)
            ),
            tags={"kind": "newsletter_already_subscribed"},
        )

    if sub is None:
        sub = NewsletterSubscriber(email=data.email)
        db.add(sub)

    confirm = new_token()
    sub.status = "pending"
    sub.topics = data.topics or DEFAULT_TOPICS
    sub.state = data.state
    sub.source = data.source
    sub.consent_text_version = settings.newsletter_consent_version
    sub.consent_at = now
    sub.consent_ip_hash = ip_hash
    sub.confirm_token_hash = hash_token(confirm)
    sub.confirm_token_expires_at = now + timedelta(hours=settings.confirm_token_ttl_hours)
    sub.unsubscribed_at = None
    db.flush()  # assigns id for token derivation
    unsub, _manage = _ensure_long_lived_tokens(settings, sub)
    db.commit()
    log.info("newsletter_subscribe_pending", extra={"email_fp": fp})

    confirm_url = f"{settings.site_url}/newsletter/confirm?token={confirm}"
    return EmailMessage(
        to=sub.email,
        subject="Confirm your subscription to The Billix Brief",
        text=(
            f"Confirm your subscription: {confirm_url}\n\n"
            f"This link expires in {settings.confirm_token_ttl_hours} hours. If you didn't "
            "sign up, ignore this email and you won't hear from us.\n\n"
            f"Unsubscribe: {settings.site_url}/newsletter/unsubscribe?token={unsub}\n"
        ),
        tags={"kind": "newsletter_confirm"},
    )


def confirm(
    db: Session, settings: Settings, token: str
) -> tuple[NewsletterSubscriber, EmailMessage]:
    sub = db.scalar(
        select(NewsletterSubscriber).where(
            NewsletterSubscriber.confirm_token_hash == hash_token(token)
        )
    )
    if sub is None or sub.status != "pending":
        raise INVALID_TOKEN
    if sub.confirm_token_expires_at is None or _aware(sub.confirm_token_expires_at) < utcnow():
        raise INVALID_TOKEN
    sub.status = "active"
    sub.confirmed_at = utcnow()
    sub.confirm_token_hash = None  # single use
    sub.confirm_token_expires_at = None
    unsub, manage = _ensure_long_lived_tokens(settings, sub)
    db.commit()
    log.info(
        "newsletter_confirmed",
        extra={"email_fp": email_fingerprint(sub.email, settings.ip_hash_salt)},
    )
    welcome = EmailMessage(
        to=sub.email,
        subject="Welcome to The Billix Brief",
        text="You're in. Expect plain-English bill explainers in your inbox.\n\n"
        + _links(settings, unsub, manage),
        tags={"kind": "newsletter_welcome"},
    )
    return sub, welcome


def unsubscribe(db: Session, settings: Settings, token: str) -> NewsletterSubscriber:
    sub = db.scalar(
        select(NewsletterSubscriber).where(
            NewsletterSubscriber.unsubscribe_token_hash == hash_token(token)
        )
    )
    if sub is None:
        raise INVALID_TOKEN
    if sub.status != "unsubscribed":
        sub.status = "unsubscribed"
        sub.unsubscribed_at = utcnow()
        sub.confirm_token_hash = None
        sub.confirm_token_expires_at = None
        db.commit()
        log.info(
            "newsletter_unsubscribed",
            extra={"email_fp": email_fingerprint(sub.email, settings.ip_hash_salt)},
        )
    return sub


def get_by_manage_token(db: Session, token: str) -> NewsletterSubscriber:
    sub = db.scalar(
        select(NewsletterSubscriber).where(
            NewsletterSubscriber.manage_token_hash == hash_token(token)
        )
    )
    if sub is None:
        raise INVALID_TOKEN
    return sub


def update_preferences(
    db: Session, sub: NewsletterSubscriber, data: PreferencesIn
) -> NewsletterSubscriber:
    if sub.status == "unsubscribed":
        raise ApiError(
            409, "unsubscribed", "This address is unsubscribed. Subscribe again to set preferences."
        )
    sub.topics = data.topics
    sub.state = data.state
    db.commit()
    return sub


def mask_email(email: str) -> str:
    local, _, domain = email.partition("@")
    return f"{local[:1]}***@{domain}"
