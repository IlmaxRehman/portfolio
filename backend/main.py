import os
import smtplib
from email.mime.text import MIMEText

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, constr

app = FastAPI(title="Ilma Rehman Portfolio API")

# ---- CORS ----
# Add your deployed frontend URL(s) here, and/or set ALLOWED_ORIGINS as a
# comma-separated env var in production (e.g. "https://ilmarehman.dev").
default_origins = ["http://localhost:5173", "http://127.0.0.1:5173"]
extra_origins = os.getenv("ALLOWED_ORIGINS", "")
origins = default_origins + [o.strip() for o in extra_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactMessage(BaseModel):
    name: constr(min_length=1, max_length=100)
    email: EmailStr
    message: constr(min_length=1, max_length=3000)


@app.get("/")
def health_check():
    return {"status": "ok"}


@app.post("/api/contact")
def send_contact_message(payload: ContactMessage):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    to_email = os.getenv("TO_EMAIL", smtp_user)

    if not all([smtp_host, smtp_user, smtp_pass, to_email]):
        raise HTTPException(
            status_code=500,
            detail="Email is not configured on the server. Set SMTP_HOST, SMTP_USER, SMTP_PASS, TO_EMAIL.",
        )

    body = (
        f"New portfolio contact message\n\n"
        f"Name: {payload.name}\n"
        f"Email: {payload.email}\n\n"
        f"Message:\n{payload.message}"
    )
    msg = MIMEText(body)
    msg["Subject"] = f"Portfolio contact from {payload.name}"
    msg["From"] = smtp_user
    msg["To"] = to_email
    msg["Reply-To"] = payload.email

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, [to_email], msg.as_string())
    except Exception as exc:
        raise HTTPException(status_code=502, detail=f"Failed to send email: {exc}") from exc

    return {"status": "sent"}
