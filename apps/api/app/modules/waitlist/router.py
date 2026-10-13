from fastapi import APIRouter, Depends, Request, status
from sqlalchemy.orm import Session

from app.core.config import Settings, get_settings
from app.core.db import get_db
from app.core.rate_limit import client_ip, write_rate_limit
from app.core.security import hash_ip, is_honeypot_tripped
from app.modules.waitlist import service
from app.modules.waitlist.schemas import WaitlistIn, WaitlistOut

router = APIRouter(prefix="/v1/waitlist", tags=["waitlist"])


@router.post(
    "",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=WaitlistOut,
    dependencies=[Depends(write_rate_limit)],
)
def join_waitlist(
    body: WaitlistIn,
    request: Request,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
) -> WaitlistOut:
    if not is_honeypot_tripped(body.website):
        service.join(db, body, hash_ip(client_ip(request), settings.ip_hash_salt))
    return WaitlistOut(message="You're on the list. We'll email you when it's ready.")
