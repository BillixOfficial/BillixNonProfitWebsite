from sqlalchemy import func, select

from app.modules.community.models import CommunityQuestion, VideoIdea
from app.modules.contact.models import ContactMessage
from app.modules.waitlist.models import WaitlistEntry


def count(db, model):
    return db.scalar(select(func.count()).select_from(model))


# --- waitlist -------------------------------------------------------------


def test_waitlist_idempotent(client, db):
    body = {"email": " Fan@Example.com", "list": "app", "platform": "ios", "consent": True}
    r1 = client.post("/v1/waitlist", json=body)
    r2 = client.post("/v1/waitlist", json={**body, "platform": "both"})
    assert r1.status_code == r2.status_code == 202
    assert r1.json() == r2.json()
    assert count(db, WaitlistEntry) == 1
    entry = db.scalar(select(WaitlistEntry))
    assert entry.email == "fan@example.com"
    assert entry.platform == "both"
    assert entry.ip_hash and len(entry.ip_hash) == 64

    client.post("/v1/waitlist", json={**body, "list": "shop"})
    assert count(db, WaitlistEntry) == 2


def test_waitlist_validation(client, db):
    r = client.post(
        "/v1/waitlist",
        json={"email": "a@example.com", "list": "store", "platform": "windows", "consent": False},
    )
    assert r.status_code == 422
    assert set(r.json()["error"]["fields"]) >= {"list", "platform", "consent"}
    assert count(db, WaitlistEntry) == 0


def test_waitlist_honeypot(client, db):
    r = client.post(
        "/v1/waitlist",
        json={"email": "a@example.com", "list": "app", "consent": True, "website": "x"},
    )
    assert r.status_code == 202
    assert count(db, WaitlistEntry) == 0


# --- contact --------------------------------------------------------------

CONTACT = {
    "name": "  Pat Doe ",
    "email": "Pat@Example.com",
    "topic": "press",
    "message": "Hello, I'd like to talk about your water bill explainer.",
}


def test_contact_happy_path_notifies_inbox(client, db, sender):
    r = client.post("/v1/contact", json=CONTACT)
    assert r.status_code == 201
    ref = r.json()["reference"]
    assert ref.startswith("BLX-") and len(ref) == 12
    row = db.scalar(select(ContactMessage))
    assert row.reference == ref
    assert row.name == "Pat Doe"
    assert row.email == "pat@example.com"
    assert row.status == "new"
    assert len(sender.sent) == 1
    msg = sender.sent[0]
    assert msg.to == "inbox@billix.test"
    assert msg.reply_to == "pat@example.com"
    assert ref in msg.subject


def test_contact_validation(client, db):
    r = client.post("/v1/contact", json={**CONTACT, "topic": "sales", "message": "short"})
    assert r.status_code == 422
    assert set(r.json()["error"]["fields"]) == {"topic", "message"}
    r = client.post("/v1/contact", json={**CONTACT, "message": "x" * 5001})
    assert r.status_code == 422
    r = client.post("/v1/contact", json={**CONTACT, "name": "   "})
    assert "name" in r.json()["error"]["fields"]
    assert count(db, ContactMessage) == 0


def test_contact_honeypot(client, db, sender):
    r = client.post("/v1/contact", json={**CONTACT, "website": "bot"})
    assert r.status_code == 201
    assert r.json()["reference"].startswith("BLX-")
    assert count(db, ContactMessage) == 0
    assert sender.sent == []


# --- community ------------------------------------------------------------

QUESTION = {
    "category": "water-sewer",
    "question": "Why did my sewer charge double this month?",
    "consent_to_publish": True,
    "state": "oh",
}


def test_question_happy_path(client, db):
    r = client.post("/v1/community/questions", json=QUESTION)
    assert r.status_code == 201
    assert r.json()["moderation_status"] == "pending"
    row = db.scalar(select(CommunityQuestion))
    assert str(row.id) == r.json()["id"]
    assert row.moderation_status == "pending"
    assert row.state == "OH"
    assert row.email is None


def test_question_validation(client, db):
    r = client.post(
        "/v1/community/questions", json={**QUESTION, "category": "gas", "question": "too short"}
    )
    assert r.status_code == 422
    assert set(r.json()["error"]["fields"]) == {"category", "question"}
    r = client.post(
        "/v1/community/questions",
        json={k: v for k, v in QUESTION.items() if k != "consent_to_publish"},
    )
    assert "consent_to_publish" in r.json()["error"]["fields"]
    assert count(db, CommunityQuestion) == 0


def test_video_idea_happy_path_and_honeypot(client, db):
    body = {
        "name": "Sam",
        "email": "SAM@example.com",
        "category": "subscriptions",
        "idea": "Explain how free trials quietly convert to paid plans.",
    }
    r = client.post("/v1/community/video-ideas", json=body)
    assert r.status_code == 201
    row = db.scalar(select(VideoIdea))
    assert row.email == "sam@example.com"
    assert row.moderation_status == "pending"

    r = client.post("/v1/community/video-ideas", json={**body, "website": "spam"})
    assert r.status_code == 201
    assert count(db, VideoIdea) == 1


def test_video_idea_validation(client):
    r = client.post(
        "/v1/community/video-ideas",
        json={"category": "electricity", "idea": "x" * 2001, "email": "nope"},
    )
    assert r.status_code == 422
    assert set(r.json()["error"]["fields"]) == {"idea", "email"}
