import uuid

from fastapi import APIRouter, Depends, Request, status
from sqlalchemy.orm import Session

from app.core.config import Settings, get_settings
from app.core.db import get_db
from app.core.rate_limit import client_ip, write_rate_limit
from app.core.security import hash_ip, is_honeypot_tripped
from app.modules.community import service
from app.modules.community.schemas import QuestionIn, SubmissionOut, VideoIdeaIn

router = APIRouter(prefix="/v1/community", tags=["community"])

QUESTION_THANKS = "Thanks! Your question is in our review queue."
IDEA_THANKS = "Thanks! Your video idea is in our review queue."


@router.post(
    "/questions",
    status_code=status.HTTP_201_CREATED,
    response_model=SubmissionOut,
    dependencies=[Depends(write_rate_limit)],
)
def submit_question(
    body: QuestionIn,
    request: Request,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
) -> SubmissionOut:
    if is_honeypot_tripped(body.website):
        return SubmissionOut(id=uuid.uuid4(), moderation_status="pending", message=QUESTION_THANKS)
    row = service.create_question(db, body, hash_ip(client_ip(request), settings.ip_hash_salt))
    return SubmissionOut(id=row.id, moderation_status="pending", message=QUESTION_THANKS)


@router.post(
    "/video-ideas",
    status_code=status.HTTP_201_CREATED,
    response_model=SubmissionOut,
    dependencies=[Depends(write_rate_limit)],
)
def submit_video_idea(
    body: VideoIdeaIn,
    request: Request,
    db: Session = Depends(get_db),
    settings: Settings = Depends(get_settings),
) -> SubmissionOut:
    if is_honeypot_tripped(body.website):
        return SubmissionOut(id=uuid.uuid4(), moderation_status="pending", message=IDEA_THANKS)
    row = service.create_video_idea(db, body, hash_ip(client_ip(request), settings.ip_hash_salt))
    return SubmissionOut(id=row.id, moderation_status="pending", message=IDEA_THANKS)
