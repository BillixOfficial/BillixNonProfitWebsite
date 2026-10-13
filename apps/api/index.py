"""Vercel entrypoint: exposes the FastAPI app (see app/main.py)."""

from app.main import app

__all__ = ["app"]
