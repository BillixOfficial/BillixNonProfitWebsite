from typing import Annotated, Literal

from pydantic import AfterValidator, Field, StringConstraints

from app.core.validation import Email, Honeypot, StateCode, StrictModel

Topic = Literal["weekly", "monthly-review", "regional"]
Token = Annotated[str, StringConstraints(strip_whitespace=True, min_length=16, max_length=256)]


def _dedupe(v: list[str]) -> list[str]:
    return list(dict.fromkeys(v))


Topics = Annotated[list[Topic], Field(max_length=3), AfterValidator(_dedupe)]


class SubscribeIn(StrictModel):
    email: Email
    consent: Literal[True] = Field(description="Must be true: explicit opt-in.")
    topics: Topics | None = None
    state: StateCode | None = None
    source: Annotated[str, StringConstraints(max_length=100)] | None = None
    website: Honeypot = None


class TokenIn(StrictModel):
    token: Token


class PreferencesIn(StrictModel):
    topics: Topics
    state: StateCode | None = None


class AcceptedOut(StrictModel):
    message: str


class StatusOut(StrictModel):
    status: Literal["pending", "active", "unsubscribed"]
    message: str


class PreferencesOut(StrictModel):
    email: str = Field(description="Masked email, e.g. j***@example.com")
    status: Literal["pending", "active", "unsubscribed"]
    topics: list[Topic]
    state: str | None
