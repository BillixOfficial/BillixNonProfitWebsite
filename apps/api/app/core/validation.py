"""Shared Pydantic field types and normalizers."""

from typing import Annotated, Literal

from pydantic import AfterValidator, BaseModel, ConfigDict, EmailStr, Field, StringConstraints

US_STATES = frozenset(
    [
        "AL",
        "AK",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "FL",
        "GA",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
        "DC",
        "PR",
    ]
)

Category = Literal[
    "electricity",
    "heating-cooling",
    "water-sewer",
    "internet-phone",
    "housing",
    "insurance",
    "transportation",
    "home-services",
    "banking-debt",
    "healthcare-family",
    "subscriptions",
    "government-fees",
]


def _lower_email(v: str) -> str:
    return v.strip().lower()


def _state(v: str) -> str:
    v = v.strip().upper()
    if v not in US_STATES:
        raise ValueError("must be a 2-letter US state code")
    return v


Email = Annotated[EmailStr, Field(max_length=254), AfterValidator(_lower_email)]
StateCode = Annotated[str, StringConstraints(min_length=2, max_length=2), AfterValidator(_state)]
Honeypot = Annotated[str | None, Field(default=None, max_length=500)]
ShortName = Annotated[str, StringConstraints(strip_whitespace=True, min_length=1, max_length=120)]


class StrictModel(BaseModel):
    model_config = ConfigDict(extra="forbid", str_strip_whitespace=True)
