from fastapi import APIRouter, BackgroundTasks, Depends, Query, Request, status
from sqlalchemy.orm import Session

from app.core.config import Settings, get_settings
from app.core.db import get_db
from app.core.email import EmailSender, get_email_sender
from app.core.rate_limit import client_ip, token_rate_limit, write_rate_limit
from app.core.security import hash_ip, is_honeypot_tripped
from app.modules.newsletter import service
from app.modules.newsletter.schemas import (
    AcceptedOut,
    PreferencesIn,
    PreferencesOut,
    StatusOut,
    SubscribeIn,
    TokenIn,
)

router = APIRouter(prefix="/v1/newsletter", tags=["newsletter"])

SUBSCRIBE_MESSAGE = (
    "Thanks! If this address can receive The Billix Brief, a confirmation "
    "email is on its way. Click the link inside to finish subscribing."
)
TokenQuery = Query(min_length=16, max_length=256)


@router.post(
    "/subscribe",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=AcceptedOut,
    dependencies=[Depends(write_rate_limit)],
)
def subscribe(
    body: SubscribeIn,
    request: Request,
    background: BackgroundTasks,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
    sender: EmailSender = Depends(get_email_sender),
) -> AcceptedOut:
    if not is_honeypot_tripped(body.website):
        msg = service.subscribe(
            db, settings, body, hash_ip(client_ip(request), settings.ip_hash_salt)
        )
        if msg is not None:
            background.add_task(sender.send, msg)
    return AcceptedOut(message=SUBSCRIBE_MESSAGE)


@router.post("/confirm", response_model=StatusOut, dependencies=[Depends(token_rate_limit)])
def confirm(
    body: TokenIn,
    background: BackgroundTasks,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
    sender: EmailSender = Depends(get_email_sender),
) -> StatusOut:
    _sub, welcome = service.confirm(db, settings, body.token)
    background.add_task(sender.send, welcome)
    return StatusOut(status="active", message="You're subscribed to The Billix Brief.")


@router.post("/unsubscribe", response_model=StatusOut, dependencies=[Depends(token_rate_limit)])
def unsubscribe(
    body: TokenIn, db: Session = Depends(get_db), settings: Settings = Depends(get_settings)
) -> StatusOut:
    service.unsubscribe(db, settings, body.token)
    return StatusOut(
        status="unsubscribed", message="You've been unsubscribed. You won't receive further emails."
    )


def _prefs_out(sub) -> PreferencesOut:
    return PreferencesOut(
        email=service.mask_email(sub.email),
        status=sub.status,
        topics=sub.topics or [],
        state=sub.state,
    )


@router.get("/preferences", response_model=PreferencesOut, dependencies=[Depends(token_rate_limit)])
def get_preferences(token: str = TokenQuery, db: Session = Depends(get_db)) -> PreferencesOut:
    return _prefs_out(service.get_by_manage_token(db, token))


@router.put("/preferences", response_model=PreferencesOut, dependencies=[Depends(token_rate_limit)])
def put_preferences(
    body: PreferencesIn, token: str = TokenQuery, db: Session = Depends(get_db)
) -> PreferencesOut:
    sub = service.get_by_manage_token(db, token)
    return _prefs_out(service.update_preferences(db, sub, body))
