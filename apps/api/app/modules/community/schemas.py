import uuid
from typing import Annotated, Literal

from pydantic import StringConstraints

from app.core.validation import Category, Email, Honeypot, ShortName, StateCode, StrictModel

LongText = Annotated[str, StringConstraints(strip_whitespace=True, min_length=10, max_length=2000)]


class QuestionIn(StrictModel):
    name: ShortName | None = None
    email: Email | None = None
    state: StateCode | None = None
    category: Category
    question: LongText
    consent_to_publish: bool
    website: Honeypot = None


class VideoIdeaIn(StrictModel):
    name: ShortName | None = None
    email: Email | None = None
    category: Category
    idea: LongText
    website: Honeypot = None


class SubmissionOut(StrictModel):
    id: uuid.UUID
    moderation_status: Literal["pending"]
    message: str
