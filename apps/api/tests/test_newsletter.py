from datetime import timedelta

from sqlalchemy import func, select

from app.core.db import utcnow
from app.core.security import hash_token
from app.modules.newsletter.models import NewsletterSubscriber

SUB = "/v1/newsletter/subscribe"


def subscribe(client, **overrides):
    body = {
        "email": "Reader@Example.COM ",
        "consent": True,
        "topics": ["weekly", "regional"],
        "state": "tx",
        "source": "homepage",
    }
    body.update(overrides)
    return client.post(SUB, json=body)


def test_subscribe_creates_pending_with_hashed_token(client, sender, db):
    r = subscribe(client)
    assert r.status_code == 202
    assert "confirmation email" in r.json()["message"]

    sub = db.scalar(select(NewsletterSubscriber))
    assert sub.email == "reader@example.com"  # normalized
    assert sub.status == "pending"
    assert sub.topics == ["weekly", "regional"]
    assert sub.state == "TX"
    assert sub.consent_text_version
    assert sub.consent_at is not None
    assert sub.consent_ip_hash and len(sub.consent_ip_hash) == 64
    assert sub.consent_ip_hash != "testclient"

    token = sender.last_link("/newsletter/confirm")
    assert sub.confirm_token_hash == hash_token(token)
    assert token not in (sub.confirm_token_hash, sub.unsubscribe_token_hash)
    assert sender.sent[-1].to == "reader@example.com"
    assert "https://billix.test/newsletter/unsubscribe?token=" in sender.sent[-1].text


def test_no_enumeration_same_response_for_new_pending_active(client, sender):
    first = subscribe(client)
    again_pending = subscribe(client)
    client.post("/v1/newsletter/confirm", json={"token": sender.last_link("/newsletter/confirm")})
    again_active = subscribe(client)
    other = subscribe(client, email="someone-else@example.com")
    bodies = {r.text for r in (first, again_pending, again_active, other)}
    codes = {r.status_code for r in (first, again_pending, again_active, other)}
    assert codes == {202}
    assert len(bodies) == 1


def test_resubscribe_pending_rotates_confirm_token(client, sender, db):
    subscribe(client)
    t1 = sender.last_link("/newsletter/confirm")
    subscribe(client)
    t2 = sender.last_link("/newsletter/confirm")
    assert t1 != t2
    assert db.scalar(select(func.count()).select_from(NewsletterSubscriber)) == 1
    assert client.post("/v1/newsletter/confirm", json={"token": t1}).status_code == 400
    assert client.post("/v1/newsletter/confirm", json={"token": t2}).status_code == 200


def test_confirm_flow_single_use(client, sender, db):
    subscribe(client)
    token = sender.last_link("/newsletter/confirm")
    r = client.post("/v1/newsletter/confirm", json={"token": token})
    assert r.status_code == 200
    assert r.json()["status"] == "active"
    sub = db.scalar(select(NewsletterSubscriber))
    db.refresh(sub)
    assert sub.status == "active"
    assert sub.confirmed_at is not None
    assert sub.confirm_token_hash is None
    assert sender.sent[-1].subject.startswith("Welcome")

    again = client.post("/v1/newsletter/confirm", json={"token": token})
    assert again.status_code == 400
    assert again.json()["error"]["code"] == "invalid_token"


def test_confirm_expired_token(client, sender, db):
    subscribe(client)
    token = sender.last_link("/newsletter/confirm")
    sub = db.scalar(select(NewsletterSubscriber))
    sub.confirm_token_expires_at = utcnow() - timedelta(minutes=1)
    db.commit()
    r = client.post("/v1/newsletter/confirm", json={"token": token})
    assert r.status_code == 400
    assert r.json()["error"]["code"] == "invalid_token"


def test_invalid_tokens(client):
    bogus = "x" * 43
    for path in ("/v1/newsletter/confirm", "/v1/newsletter/unsubscribe"):
        r = client.post(path, json={"token": bogus})
        assert r.status_code == 400
        assert r.json() == {
            "error": {"code": "invalid_token", "message": "This link is invalid or has expired."}
        }
    r = client.get("/v1/newsletter/preferences", params={"token": bogus})
    assert r.status_code == 400
    r = client.post("/v1/newsletter/confirm", json={"token": "short"})
    assert r.status_code == 422


def test_unsubscribe_flow_and_resubscribe(client, sender, db):
    subscribe(client)
    client.post("/v1/newsletter/confirm", json={"token": sender.last_link("/newsletter/confirm")})
    unsub = sender.last_link("/newsletter/unsubscribe")
    r = client.post("/v1/newsletter/unsubscribe", json={"token": unsub})
    assert r.status_code == 200
    assert r.json()["status"] == "unsubscribed"
    sub = db.scalar(select(NewsletterSubscriber))
    db.refresh(sub)
    assert sub.status == "unsubscribed"
    assert sub.unsubscribed_at is not None
    # Idempotent, long-lived
    assert client.post("/v1/newsletter/unsubscribe", json={"token": unsub}).status_code == 200

    # Re-subscribing requires a fresh double opt-in
    assert subscribe(client).status_code == 202
    db.refresh(sub)
    assert sub.status == "pending"
    assert sub.unsubscribed_at is None


def test_unsubscribe_link_in_confirm_email_works_before_confirming(client, sender, db):
    subscribe(client)
    unsub = sender.last_link("/newsletter/unsubscribe")
    assert client.post("/v1/newsletter/unsubscribe", json={"token": unsub}).status_code == 200
    sub = db.scalar(select(NewsletterSubscriber))
    db.refresh(sub)
    assert sub.status == "unsubscribed"
    assert sub.confirm_token_hash is None


def test_preferences_get_and_put(client, sender):
    subscribe(client)
    client.post("/v1/newsletter/confirm", json={"token": sender.last_link("/newsletter/confirm")})
    manage = sender.last_link("/newsletter/preferences")

    r = client.get("/v1/newsletter/preferences", params={"token": manage})
    assert r.status_code == 200
    assert r.json() == {
        "email": "r***@example.com",
        "status": "active",
        "topics": ["weekly", "regional"],
        "state": "TX",
    }

    r = client.put(
        "/v1/newsletter/preferences",
        params={"token": manage},
        json={"topics": ["monthly-review", "monthly-review"], "state": "ca"},
    )
    assert r.status_code == 200
    assert r.json()["topics"] == ["monthly-review"]
    assert r.json()["state"] == "CA"

    r = client.put(
        "/v1/newsletter/preferences", params={"token": manage}, json={"topics": ["daily"]}
    )
    assert r.status_code == 422
    assert "topics.0" in r.json()["error"]["fields"]


def test_preferences_rejected_after_unsubscribe(client, sender):
    subscribe(client)
    client.post("/v1/newsletter/confirm", json={"token": sender.last_link("/newsletter/confirm")})
    manage = sender.last_link("/newsletter/preferences")
    client.post(
        "/v1/newsletter/unsubscribe", json={"token": sender.last_link("/newsletter/unsubscribe")}
    )
    r = client.put(
        "/v1/newsletter/preferences", params={"token": manage}, json={"topics": ["weekly"]}
    )
    assert r.status_code == 409


def test_subscribe_validation_errors(client, db):
    r = client.post(
        SUB,
        json={
            "email": "not-an-email",
            "consent": False,
            "state": "ZZ",
            "topics": ["daily"],
            "extra": 1,
        },
    )
    assert r.status_code == 422
    err = r.json()["error"]
    assert err["code"] == "validation_error"
    for f in ("email", "consent", "state", "topics.0", "extra"):
        assert f in err["fields"], f
    r = client.post(SUB, json={"email": "a@example.com"})
    assert "consent" in r.json()["error"]["fields"]
    assert db.scalar(select(func.count()).select_from(NewsletterSubscriber)) == 0


def test_subscribe_honeypot_pretends_success(client, sender, db):
    r = subscribe(client, website="http://spam.example")
    assert r.status_code == 202
    assert r.json()["message"] == subscribe(client, email="x@example.com").json()["message"]
    assert db.scalar(select(func.count()).select_from(NewsletterSubscriber)) == 1
    assert all(m.to != "reader@example.com" for m in sender.sent)
