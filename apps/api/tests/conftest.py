import os

os.environ.update(
    {
        "ENVIRONMENT": "test",
        "DATABASE_URL": "sqlite://",
        "SITE_URL": "https://billix.test",
        "CORS_ORIGINS": "http://localhost:3000,https://billix.test",
        "EMAIL_PROVIDER": "console",
        "CONTACT_INBOX": "inbox@billix.test",
        "IP_HASH_SALT": "test-salt",
        "TOKEN_SECRET": "test-token-secret",
    }
)

import re
from collections.abc import Iterator

import pytest
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session, sessionmaker
from sqlalchemy.pool import StaticPool

from app.core import db as db_module
from app.core.config import get_settings
from app.core.email import EmailMessage, get_email_sender
from app.core.rate_limit import get_limiter
from app.main import create_app
from app.models import Base


class CapturingSender:
    def __init__(self) -> None:
        self.sent: list[EmailMessage] = []

    def send(self, message: EmailMessage) -> None:
        self.sent.append(message)

    def last_link(self, path: str) -> str:
        for msg in reversed(self.sent):
            m = re.search(rf"https://billix\.test{re.escape(path)}\?token=([\w\-]+)", msg.text)
            if m:
                return m.group(1)
        raise AssertionError(f"no {path} link in sent emails")


@pytest.fixture
def engine():
    # One shared in-memory DB across threads (TestClient runs handlers in a threadpool).
    engine = db_module.create_engine(
        "sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool
    )
    Base.metadata.create_all(engine)
    yield engine
    engine.dispose()


@pytest.fixture
def session_factory(engine) -> sessionmaker[Session]:
    return sessionmaker(bind=engine, expire_on_commit=False)


@pytest.fixture
def sender() -> CapturingSender:
    return CapturingSender()


@pytest.fixture
def client(engine, session_factory, sender) -> Iterator[TestClient]:
    get_settings.cache_clear()
    get_limiter().reset()
    db_module._engine = engine
    db_module._SessionLocal = session_factory
    app = create_app()

    def _db() -> Iterator[Session]:
        s = session_factory()
        try:
            yield s
        finally:
            s.close()

    app.dependency_overrides[db_module.get_db] = _db
    app.dependency_overrides[get_email_sender] = lambda: sender
    with TestClient(app) as c:
        yield c
    get_limiter().reset()


@pytest.fixture
def db(session_factory) -> Iterator[Session]:
    s = session_factory()
    yield s
    s.close()
