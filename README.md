# Ilma Rehman — Portfolio

A retro desktop / windowed-OS themed portfolio. React (Vite) frontend, FastAPI backend for the contact form.

```
portfolio/
├── frontend/    React (Vite) app
└── backend/     FastAPI contact-form API
```

## 1. Frontend — local setup

```bash
cd frontend
npm install
npm run dev
```

Opens at http://localhost:5173

Before deploying:
- Add your real photo as `frontend/public/profile-photo.jpg`
- Add your resume as `frontend/public/resume.pdf`
- Edit `frontend/src/data/projects.js`, `experience.js`, `education.js`, `credentials.js` to update content any time — each is a plain array of objects, no JSX needed
- Edit `frontend/src/components/About.jsx` for your bio/stats
- Fill in anything marked `[Add ...]` — dates, school names, CGPA, certifications

## 2. Backend — local setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env             # then fill in your SMTP details
uvicorn main:app --reload --port 8000
```

Runs at http://localhost:8000. Docs at http://localhost:8000/docs

### Gmail SMTP setup (easiest option)
1. Turn on 2-Step Verification on your Google account.
2. Create an "app password": https://myaccount.google.com/apppasswords
3. Use that 16-character password as `SMTP_PASS` in `.env` (not your normal Gmail password).

## 3. Connecting frontend to backend

`frontend/src/components/Contact.jsx` reads `VITE_API_URL` (falls back to
`http://localhost:8000` for local dev). Set it in a `frontend/.env` file, or
as an environment variable in your hosting provider, once the backend is deployed.

## 4. Deploying

**Frontend** — any static host works well with Vite:
- Vercel: `vercel` (auto-detects Vite)
- Netlify: `netlify deploy` (build command `npm run build`, publish dir `dist`)

**Backend** — any Python host works:
- Render.com: New Web Service → build `pip install -r requirements.txt`,
  start `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Railway, Fly.io, or a VPS work the same way

After deploying the backend, set `ALLOWED_ORIGINS` (backend) to your deployed
frontend URL, and `VITE_API_URL` (frontend) to your deployed backend URL, then
redeploy the frontend.

## 5. Customizing the look

All design tokens (colors, fonts) live at the top of `frontend/src/index.css`
as CSS variables — change the palette in one place. Sections are split into
components under `frontend/src/components/` so you can reorder, add, or
remove windows freely.
