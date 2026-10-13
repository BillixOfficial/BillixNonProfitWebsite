from sqlalchemy import String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.core.db import TimestampedBase, check_in, str_enum

CONTACT_TOPICS = ("general", "press", "partnerships", "business", "support", "correction")
CONTACT_STATUSES = ("new", "in_progress", "closed")


class ContactMessage(TimestampedBase):
    __tablename__ = "contact_messages"
    __table_args__ = (check_in("topic", CONTACT_TOPICS), check_in("status", CONTACT_STATUSES))

    reference: Mapped[str] = mapped_column(String(16), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(254))
    topic: Mapped[str] = mapped_column(str_enum(*CONTACT_TOPICS, length=16))
    message: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(
        str_enum(*CONTACT_STATUSES, length=16),
        default="new",
    )
    ip_hash: Mapped[str | None] = mapped_column(String(64))
