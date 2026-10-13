from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.core.db import ping
from app.core.errors import error_body

router = APIRouter(tags=["health"])


@router.get("/healthz")
def healthz() -> dict:
    return {"status": "ok"}


@router.get("/readyz")
def readyz() -> JSONResponse:
    if ping():
        return JSONResponse({"status": "ready", "database": "ok"})
    return JSONResponse(error_body("not_ready", "Database unavailable."), status_code=503)
