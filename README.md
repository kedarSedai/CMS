# Rising MVPs

- **`frontend/`** — Next.js app (`package.json` name `ryan`).
- **`backend/`** — Placeholder for a future API (see `backend/README.md`).

## Local dev

```bash
cd frontend && npm install && npm run dev
```

Or from repo root: `npm install --prefix frontend` then `npm run dev --prefix frontend`.

## Vercel (`github.com/.../CMS`)

This repo includes **`vercel.json`** so every deploy runs:

1. `npm install --prefix ./frontend` — installs `next` and the rest into `frontend/node_modules`
2. `npm run build --prefix ./frontend` — runs `next build` in `frontend/`

Leave the Vercel **Root Directory** as the **repository root** (the folder that contains `vercel.json`).

In the Vercel project **Settings → Build & Development Settings**, clear any custom **Install Command** / **Build Command** overrides so the dashboard does not ignore `vercel.json`. Use the defaults from the repo unless you know you need an override.

Commit and push: `vercel.json`, `package.json`, `frontend/package-lock.json`, and the `frontend/` app.
