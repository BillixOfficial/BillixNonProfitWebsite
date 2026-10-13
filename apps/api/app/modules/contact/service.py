import logging
import secrets

from sqlalchemy.orm import Session

from app.core.config import Settings
from app.core.email import EmailMessage
from app.modules.contact.models import ContactMessage
from app.modules.contact.schemas import ContactIn

log = logging.getLogger("app.contact")

_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"  # no 0/O/1/I


def new_reference() -> str:
    return "BLX-" + "".join(secrets.choice(_ALPHABET) for _ in range(8))


def create(
    db: Session, settings: Settings, data: ContactIn, ip_hash: str | None
) -> tuple[ContactMessage, EmailMessage | None]:
    msg = ContactMessage(
        reference=new_reference(),
        name=data.name,
        email=data.email,
        topic=data.topic,
        message=data.message,
        ip_hash=ip_hash,
    )
    db.add(msg)
    db.commit()
    log.info("contact_created", extra={"reference": msg.reference, "topic": msg.topic})

    if not settings.contact_inbox:
        log.warning("contact_inbox_not_configured", extra={"reference": msg.reference})
        return msg, None
    notify = EmailMessage(
        to=settings.contact_inbox,
        subject=f"[Billix contact · {data.topic}] {msg.reference}",
        text=(
            f"Reference: {msg.reference}\nTopic: {data.topic}\nFrom: {data.name} "
            f"<{data.email}>\n\n{data.message}\n"
        ),
        reply_to=data.email,
        tags={"kind": "contact_notification"},
    )
    return msg, notify
