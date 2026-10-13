import logging

from fastapi.testclient import TestClient

from app.core.config import get_settings
from app.core.rate_limit import InMemorySlidingWindowLimiter
from app.main import create_app


def test_health(client):
    assert client.get("/healthz").json() == {"status": "ok"}
    r = client.get("/readyz")
    assert r.status_code == 200
    assert r.json()["database"] == "ok"


def test_rate_limit_writes_shared_bucket(client):
    body = {"email": "a@example.com", "list": "app", "consent": True}
    codes = [client.post("/v1/waitlist", json=body).status_code for _ in range(5)]
    assert codes == [202] * 5
    r = client.post("/v1/waitlist", json=body)
    assert r.status_code == 429
    assert r.json()["error"]["code"] == "rate_limited"
    assert r.headers["retry-after"] == "60"
    # Same IP bucket applies to other write endpoints
    r = client.post("/v1/newsletter/subscribe", json={"email": "b@example.com", "consent": True})
    assert r.status_code == 429
    # Reads are not limited by the write bucket
    assert client.get("/healthz").status_code == 200


def test_rate_limit_token_endpoints(client):
    codes = [
        client.post("/v1/newsletter/confirm", json={"token": "y" * 40}).status_code
        for _ in range(21)
    ]
    assert codes[:20] == [400] * 20
    assert codes[20] == 429


def test_sliding_window_expires(monkeypatch):
    import app.core.rate_limit as rl

    now = [1000.0]
    monkeypatch.setattr(rl.time, "monotonic", lambda: now[0])
    lim = InMemorySlidingWindowLimiter()
    assert all(lim.hit("k", 2, 60) for _ in range(2))
    assert not lim.hit("k", 2, 60)
    now[0] += 30
    assert not lim.hit("k", 2, 60)
    now[0] += 31
    assert lim.hit("k", 2, 60)
    assert lim.hit("other", 2, 60)


def test_cors_allows_configured_origin_only(client):
    ok = client.options(
        "/v1/waitlist",
        headers={"Origin": "http://localhost:3000", "Access-Control-Request-Method": "POST"},
    )
    assert ok.headers.get("access-control-allow-origin") == "http://localhost:3000"
    bad = client.options(
        "/v1/waitlist",
        headers={"Origin": "https://evil.example", "Access-Control-Request-Method": "POST"},
    )
    assert "access-control-allow-origin" not in bad.headers


def test_unknown_route_error_shape(client):
    r = client.get("/nope")
    assert r.status_code == 404
    assert r.json()["error"]["code"] == "not_found"


def test_docs_toggle(monkeypatch):
    monkeypatch.setenv("ENVIRONMENT", "development")
    get_settings.cache_clear()
    assert TestClient(create_app()).get("/docs").status_code == 200

    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.setenv("DATABASE_URL", "postgresql+psycopg://u@localhost/x")
    get_settings.cache_clear()
    assert TestClient(create_app()).get("/docs").status_code == 404
    assert TestClient(create_app()).get("/openapi.json").status_code == 404

    monkeypatch.setenv("DOCS_ENABLED", "true")
    get_settings.cache_clear()
    assert TestClient(create_app()).get("/docs").status_code == 200
    get_settings.cache_clear()


def test_production_refuses_default_secrets(monkeypatch):
    import pytest

    monkeypatch.setenv("ENVIRONMENT", "production")
    monkeypatch.setenv("IP_HASH_SALT", "dev-only-insecure-salt")
    get_settings.cache_clear()
    with pytest.raises(RuntimeError, match="IP_HASH_SALT"):
        create_app()
    get_settings.cache_clear()


def test_logs_do_not_contain_raw_email(client, caplog):
    with caplog.at_level(logging.INFO):
        client.post(
            "/v1/newsletter/subscribe", json={"email": "secret.person@example.com", "consent": True}
        )
        client.post(
            "/v1/contact",
            json={
                "name": "A",
                "email": "secret.person@example.com",
                "topic": "general",
                "message": "hello there friend",
            },
        )
    blob = "\n".join(f"{r.getMessage()} {r.__dict__}" for r in caplog.records)
    assert "secret.person" not in blob


def test_console_sender_logs_link_but_not_addresses(caplog):
    from app.core.email import ConsoleEmailSender, EmailMessage

    with caplog.at_level(logging.INFO, logger="app.email"):
        ConsoleEmailSender().send(
            EmailMessage(
                to="who@example.com",
                subject="Confirm",
                text="From: Pat <pat@example.com>\nhttps://billix.test/newsletter/confirm?token=abc",
            )
        )
    blob = "\n".join(str(r.__dict__) for r in caplog.records)
    assert "example.com" not in blob
    assert "newsletter/confirm?token=abc" in blob


def test_alembic_migration_matches_models(tmp_path, monkeypatch):
    from pathlib import Path

    from alembic import command
    from alembic.config import Config

    root = Path(__file__).resolve().parents[1]
    cfg = Config(str(root / "alembic.ini"))
    cfg.set_main_option("sqlalchemy.url", f"sqlite:///{tmp_path / 'm.db'}")
    command.upgrade(cfg, "head")
    command.check(cfg)  # raises if models and migrations have drifted
    command.downgrade(cfg, "base")
