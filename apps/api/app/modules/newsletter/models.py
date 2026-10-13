from datetime import datetime

from sqlalchemy import JSON, DateTime, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.db import TimestampedBase, check_in, str_enum

SUBSCRIBER_STATUSES = ("pending", "active", "unsubscribed")


class NewsletterSubscriber(TimestampedBase):
    __tablename__ = "newsletter_subscribers"
    __table_args__ = (check_in("status", SUBSCRIBER_STATUSES),)

    email: Mapped[str] = mapped_column(String(254), unique=True, index=True)
    status: Mapped[str] = mapped_column(
        str_enum(*SUBSCRIBER_STATUSES, length=16),
        default="pending",
    )
    topics: Mapped[list[str]] = mapped_column(JSON, default=list)
    state: Mapped[str | None] = mapped_column(String(2))
    source: Mapped[str | None] = mapped_column(String(100))

    consent_text_version: Mapped[str] = mapped_column(String(40))
    consent_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    consent_ip_hash: Mapped[str | None] = mapped_column(String(64))

    # Single-use confirmation token: only sha256(token) is stored.
    confirm_token_hash: Mapped[str | None] = mapped_column(String(64), unique=True, index=True)
    confirm_token_expires_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    confirmed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    # Long-lived tokens (derived via HMAC so they can be re-issued in every email);
    # only sha256(token) is stored for lookup. Bump token_version to revoke both.
    token_version: Mapped[int] = mapped_column(Integer, default=1)
    unsubscribe_token_hash: Mapped[str | None] = mapped_column(String(64), unique=True, index=True)
    manage_token_hash: Mapped[str | None] = mapped_column(String(64), unique=True, index=True)
    unsubscribed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
