"""Import every module's models so Base.metadata is complete (used by Alembic)."""

from app.core.db import Base
from app.modules.community.models import CommunityQuestion, VideoIdea
from app.modules.contact.models import ContactMessage
from app.modules.newsletter.models import NewsletterSubscriber
from app.modules.waitlist.models import WaitlistEntry

__all__ = [
    "Base",
    "CommunityQuestion",
    "ContactMessage",
    "NewsletterSubscriber",
    "VideoIdea",
    "WaitlistEntry",
]
