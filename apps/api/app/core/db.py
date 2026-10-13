"""Database engine, session factory and declarative base."""

import os
import uuid
from collections.abc import Iterator
from datetime import UTC, datetime

from sqlalchemy import CheckConstraint, DateTime, Engine, Enum, MetaData, create_engine, text
from sqlalchemy.orm import DeclarativeBase, Mapped, Session, mapped_column, sessionmaker
from sqlalchemy.pool import NullPool
from sqlalchemy.types import Uuid


def utcnow() -> datetime:
    return datetime.now(UTC)


NAMING_CONVENTION = {
    "ix": "ix_%(table_name)s_%(column_0_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s",
}


class Base(DeclarativeBase):
    metadata = MetaData(naming_convention=NAMING_CONVENTION)


def str_enum(*values: str, length: int = 32) -> Enum:
    """Portable string enum (VARCHAR). The CHECK constraint is added via `check_in`."""
    return Enum(
        *values, native_enum=False, create_constraint=False, validate_strings=True, length=length
    )


def check_in(column: str, values: tuple[str, ...]) -> CheckConstraint:
    allowed = ", ".join(f"'{v}'" for v in values)
    return CheckConstraint(f"{column} IN ({allowed})", name=f"{column}_valid")


class TimestampedBase(Base):
    """Abstract base: every table has a UUID id, created_at and updated_at."""

    __abstract__ = True

    id: Mapped[uuid.UUID] = mapped_column(Uuid, primary_key=True, default=uuid.uuid4)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utcnow, nullable=False
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=utcnow, onupdate=utcnow, nullable=False
    )


_engine: Engine | None = None
_SessionLocal: sessionmaker[Session] | None = None


def make_engine(url: str) -> Engine:
    kwargs: dict = {"pool_pre_ping": True}
    if url.startswith("sqlite"):
        kwargs["connect_args"] = {"check_same_thread": False}
    elif url.startswith("postgresql"):
        # Works behind PgBouncer / Supabase's transaction pooler, which can't keep
        # server-side prepared statements between transactions.
        kwargs["connect_args"] = {"prepare_threshold": None}
        if os.environ.get("VERCEL"):
            # Serverless: each instance is short-lived, so let the pooler do the pooling.
            kwargs["poolclass"] = NullPool
    return create_engine(url, **kwargs)


def init_engine(url: str) -> Engine:
    global _engine, _SessionLocal
    _engine = make_engine(url)
    _SessionLocal = sessionmaker(bind=_engine, expire_on_commit=False)
    return _engine


def _ensure_initialized() -> tuple[Engine, sessionmaker[Session]]:
    if _engine is None or _SessionLocal is None:
        from app.core.config import get_settings

        init_engine(get_settings().database_url)
    if _engine is None or _SessionLocal is None:  # pragma: no cover
        raise RuntimeError("database engine failed to initialize")
    return _engine, _SessionLocal


def get_engine() -> Engine:
    return _ensure_initialized()[0]


def get_db() -> Iterator[Session]:
    db = _ensure_initialized()[1]()
    try:
        yield db
    finally:
        db.close()


def ping() -> bool:
    try:
        with get_engine().connect() as conn:
            conn.execute(text("SELECT 1"))
        return True
    except Exception:
        return False
