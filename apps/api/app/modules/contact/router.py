from fastapi import APIRouter, BackgroundTasks, Depends, Request, status
from sqlalchemy.orm import Session

from app.core.config import Settings, get_settings
from app.core.db import get_db
from app.core.email import EmailSender, get_email_sender
from app.core.rate_limit import client_ip, write_rate_limit
from app.core.security import hash_ip, is_honeypot_tripped
from app.modules.contact import service
from app.modules.contact.schemas import ContactIn, ContactOut

router = APIRouter(prefix="/v1/contact", tags=["contact"])

THANKS = "Thanks for reaching out. We read every message and reply within a few business days."


@router.post(
    "",
    status_code=status.HTTP_201_CREATED,
    response_model=ContactOut,
    dependencies=[Depends(write_rate_limit)],
)
def create_contact(
    body: ContactIn,
    request: Request,
    background: BackgroundTasks,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
    sender: EmailSender = Depends(get_email_sender),
) -> ContactOut:
    if is_honeypot_tripped(body.website):
        return ContactOut(reference=service.new_reference(), message=THANKS)
    msg, notify = service.create(
        db, settings, body, hash_ip(client_ip(request), settings.ip_hash_salt)
    )
    if notify is not None:
        background.add_task(sender.send, notify)
    return ContactOut(reference=msg.reference, message=THANKS)
