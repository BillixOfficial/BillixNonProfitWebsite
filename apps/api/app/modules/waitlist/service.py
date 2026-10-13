import logging

from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.db import utcnow
from app.modules.waitlist.models import WaitlistEntry
from app.modules.waitlist.schemas import WaitlistIn

log = logging.getLogger("app.waitlist")


def join(db: Session, data: WaitlistIn, ip_hash: str | None) -> None:
    """Idempotent per (email, list): repeat joins only refresh platform."""
    stmt = select(WaitlistEntry).where(
        WaitlistEntry.email == data.email, WaitlistEntry.list == data.list
    )
    entry = db.scalar(stmt)
    if entry is None:
        db.add(
            WaitlistEntry(
                email=data.email,
                list=data.list,
                platform=data.platform,
                consent_at=utcnow(),
                ip_hash=ip_hash,
            )
        )
        try:
            db.commit()
        except IntegrityError:  # concurrent duplicate insert; already on the list
            db.rollback()
        log.info("waitlist_joined", extra={"list": data.list})
        return
    if data.platform and entry.platform != data.platform:
        entry.platform = data.platform
        db.commit()
