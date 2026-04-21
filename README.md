# Rising MVPs

- **`frontend/`** — Next.js app (`package.json` name `ryan`).
- **`backend/`** — Placeholder for a future API (see `backend/README.md`).

## Local dev

```bash
cd frontend && npm install && npm run dev
```

Or from repo root: `npm install --prefix frontend` then `npm run dev --prefix frontend`.

## Vercel

Vercel must use the folder that contains **`next`** in `package.json` — that is **`frontend/`**, not the monorepo root.

### Required settings

1. **Project → Settings → General → Root Directory**  
   Set to: **`frontend`**  
   (So install/build run against `frontend/package.json`, where `"next"` is listed.)

2. **Project → Settings → Build & Development Settings**  
   - **Framework Preset**: **Next.js** (or leave on Auto after root dir is correct).  
   - **Build Command**: leave **default** (`next build` / `npm run build`).  
   - **Install Command**: leave **default** (`npm install` / `yarn` / `pnpm` per lockfile).  
   - **Output Directory**: leave **empty** (do not use `public`).

3. **Remove any root `vercel.json`** from this repo if you still have an old copy that sets `installCommand` / `buildCommand` / `framework` from the repo root — with Root Directory `frontend`, those paths would be wrong.

Commit and push: `frontend/package-lock.json` (if present), `frontend/package.json`, and the rest of the app under `frontend/`.
