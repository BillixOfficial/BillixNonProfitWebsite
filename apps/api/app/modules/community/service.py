import logging

from sqlalchemy.orm import Session

from app.modules.community.models import CommunityQuestion, VideoIdea
from app.modules.community.schemas import QuestionIn, VideoIdeaIn

log = logging.getLogger("app.community")


def create_question(db: Session, data: QuestionIn, ip_hash: str | None) -> CommunityQuestion:
    row = CommunityQuestion(
        name=data.name,
        email=data.email,
        state=data.state,
        category=data.category,
        question=data.question,
        consent_to_publish=data.consent_to_publish,
        moderation_status="pending",
        ip_hash=ip_hash,
    )
    db.add(row)
    db.commit()
    log.info("community_question_created", extra={"category": row.category})
    return row


def create_video_idea(db: Session, data: VideoIdeaIn, ip_hash: str | None) -> VideoIdea:
    row = VideoIdea(
        name=data.name,
        email=data.email,
        category=data.category,
        idea=data.idea,
        moderation_status="pending",
        ip_hash=ip_hash,
    )
    db.add(row)
    db.commit()
    log.info("community_video_idea_created", extra={"category": row.category})
    return row
