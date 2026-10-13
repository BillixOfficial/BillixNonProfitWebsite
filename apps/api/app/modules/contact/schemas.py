from typing import Annotated, Literal

from pydantic import StringConstraints

from app.core.validation import Email, Honeypot, ShortName, StrictModel


class ContactIn(StrictModel):
    name: ShortName
    email: Email
    topic: Literal["general", "press", "partnerships", "business", "support", "correction"]
    message: Annotated[
        str, StringConstraints(strip_whitespace=True, min_length=10, max_length=5000)
    ]
    website: Honeypot = None


class ContactOut(StrictModel):
    reference: str
    message: str
