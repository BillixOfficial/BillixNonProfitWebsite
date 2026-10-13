from typing import Literal

from pydantic import Field

from app.core.validation import Email, Honeypot, StrictModel


class WaitlistIn(StrictModel):
    email: Email
    list: Literal["app", "shop"]
    platform: Literal["ios", "android", "both"] | None = None
    consent: Literal[True] = Field(description="Must be true: explicit opt-in.")
    website: Honeypot = None


class WaitlistOut(StrictModel):
    message: str
