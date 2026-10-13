"""Application settings loaded from environment variables (and an optional .env file)."""

from functools import lru_cache
from typing import Annotated, Literal

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, NoDecode, SettingsConfigDict

DEV_SALT = "dev-only-insecure-salt"
DEV_TOKEN_SECRET = "dev-only-insecure-token-secret"  # noqa: S105


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    environment: Literal["development", "test", "staging", "production"] = "development"
    database_url: str = "postgresql+psycopg://localhost:5432/billix_dev"
    site_url: str = "http://localhost:3000"
    cors_origins: Annotated[list[str], NoDecode] = Field(
        default_factory=lambda: ["http://localhost:3000"]
    )

    email_provider: Literal["console", "resend"] = "console"
    resend_api_key: str | None = None
    email_from: str = "The Billix Brief <brief@localhost>"
    contact_inbox: str | None = None

    ip_hash_salt: str = DEV_SALT
    # Secret used to derive (and re-derive) long-lived unsubscribe / manage tokens.
    token_secret: str = DEV_TOKEN_SECRET
    docs_enabled: bool | None = None
    log_level: str = "INFO"

    # Rate limiting (sliding window, per IP, write endpoints)
    rate_limit_writes: int = 5
    rate_limit_tokens: int = 20
    rate_limit_window_seconds: int = 60
    trust_proxy_headers: bool = False

    # Versioned consent copy shown next to the newsletter form.
    newsletter_consent_version: str = "2026-10-v1"
    confirm_token_ttl_hours: int = 48

    @field_validator("cors_origins", mode="before")
    @classmethod
    def _split_origins(cls, v: object) -> object:
        if isinstance(v, str):
            return [o.strip().rstrip("/") for o in v.split(",") if o.strip()]
        return v

    @field_validator("site_url")
    @classmethod
    def _strip_slash(cls, v: str) -> str:
        return v.rstrip("/")

    def assert_production_safe(self) -> None:
        if not self.is_production:
            return
        problems = []
        if self.ip_hash_salt == DEV_SALT:
            problems.append("IP_HASH_SALT")
        if self.token_secret == DEV_TOKEN_SECRET:
            problems.append("TOKEN_SECRET")
        if self.database_url.startswith("sqlite"):
            problems.append("DATABASE_URL (sqlite)")
        if problems:
            raise RuntimeError("Insecure production settings: " + ", ".join(problems))

    @property
    def is_production(self) -> bool:
        return self.environment == "production"

    @property
    def docs_on(self) -> bool:
        if self.docs_enabled is not None:
            return self.docs_enabled
        return not self.is_production


@lru_cache
def get_settings() -> Settings:
    return Settings()
