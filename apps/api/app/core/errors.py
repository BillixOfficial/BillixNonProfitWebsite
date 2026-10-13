"""Consistent error envelope: {"error": {"code", "message", "fields"?}}."""

import logging

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

log = logging.getLogger("app.errors")


class ApiError(Exception):
    def __init__(
        self, status_code: int, code: str, message: str, fields: dict[str, str] | None = None
    ) -> None:
        self.status_code = status_code
        self.code = code
        self.message = message
        self.fields = fields


def error_body(code: str, message: str, fields: dict[str, str] | None = None) -> dict:
    err: dict = {"code": code, "message": message}
    if fields:
        err["fields"] = fields
    return {"error": err}


def register_error_handlers(app: FastAPI) -> None:
    @app.exception_handler(ApiError)
    async def _api_error(_: Request, exc: ApiError) -> JSONResponse:
        headers = {"Retry-After": "60"} if exc.status_code == 429 else None
        return JSONResponse(
            error_body(exc.code, exc.message, exc.fields),
            status_code=exc.status_code,
            headers=headers,
        )

    @app.exception_handler(RequestValidationError)
    async def _validation(_: Request, exc: RequestValidationError) -> JSONResponse:
        fields: dict[str, str] = {}
        for e in exc.errors():
            loc = [str(p) for p in e.get("loc", ()) if p not in ("body", "query")]
            key = ".".join(loc) or "body"
            fields.setdefault(key, e.get("msg", "Invalid value"))
        return JSONResponse(
            error_body("validation_error", "Some fields are invalid.", fields), status_code=422
        )

    @app.exception_handler(StarletteHTTPException)
    async def _http(_: Request, exc: StarletteHTTPException) -> JSONResponse:
        code = {404: "not_found", 405: "method_not_allowed"}.get(exc.status_code, "http_error")
        return JSONResponse(error_body(code, str(exc.detail)), status_code=exc.status_code)

    @app.exception_handler(Exception)
    async def _unhandled(_: Request, exc: Exception) -> JSONResponse:
        log.exception("unhandled_error", extra={"error_type": type(exc).__name__})
        return JSONResponse(error_body("internal_error", "Something went wrong."), status_code=500)
