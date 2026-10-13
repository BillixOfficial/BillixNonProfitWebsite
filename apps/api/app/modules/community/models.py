from sqlalchemy import Boolean, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.core.db import TimestampedBase, check_in, str_enum

CATEGORIES = (
    "electricity",
    "heating-cooling",
    "water-sewer",
    "internet-phone",
    "housing",
    "insurance",
    "transportation",
    "home-services",
    "banking-debt",
    "healthcare-family",
    "subscriptions",
    "government-fees",
)
MODERATION_STATUSES = ("pending", "approved", "rejected")


def _category():
    return str_enum(*CATEGORIES, length=32)


def _moderation():
    return str_enum(*MODERATION_STATUSES, length=16)


def _checks() -> tuple:
    return (check_in("category", CATEGORIES), check_in("moderation_status", MODERATION_STATUSES))


class CommunityQuestion(TimestampedBase):
    __tablename__ = "community_questions"
    __table_args__ = _checks()

    name: Mapped[str | None] = mapped_column(String(120))
    email: Mapped[str | None] = mapped_column(String(254))
    state: Mapped[str | None] = mapped_column(String(2))
    category: Mapped[str] = mapped_column(_category(), index=True)
    question: Mapped[str] = mapped_column(Text)
    consent_to_publish: Mapped[bool] = mapped_column(Boolean, default=False)
    moderation_status: Mapped[str] = mapped_column(_moderation(), default="pending", index=True)
    ip_hash: Mapped[str | None] = mapped_column(String(64))


class VideoIdea(TimestampedBase):
    __tablename__ = "community_video_ideas"
    __table_args__ = _checks()

    name: Mapped[str | None] = mapped_column(String(120))
    email: Mapped[str | None] = mapped_column(String(254))
    category: Mapped[str] = mapped_column(_category(), index=True)
    idea: Mapped[str] = mapped_column(Text)
    moderation_status: Mapped[str] = mapped_column(_moderation(), default="pending", index=True)
    ip_hash: Mapped[str | None] = mapped_column(String(64))
