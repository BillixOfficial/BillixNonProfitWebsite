from datetime import datetime

from sqlalchemy import DateTime, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column

from app.core.db import TimestampedBase, check_in, str_enum

LISTS = ("app", "shop")
PLATFORMS = ("ios", "android", "both")


class WaitlistEntry(TimestampedBase):
    __tablename__ = "waitlist_entries"
    __table_args__ = (
        UniqueConstraint("email", "list", name="uq_waitlist_entries_email_list"),
        check_in("list", LISTS),
        check_in("platform", PLATFORMS),
    )

    email: Mapped[str] = mapped_column(String(254), index=True)
    list: Mapped[str] = mapped_column(str_enum(*LISTS, length=16))
    platform: Mapped[str | None] = mapped_column(str_enum(*PLATFORMS, length=16))
    consent_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
    ip_hash: Mapped[str | None] = mapped_column(String(64))
