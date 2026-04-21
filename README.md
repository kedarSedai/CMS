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

2. **Project → Settings → Build & Development Settings**  
   - **Framework Preset**: **Next.js** (or Auto).  
   - **Build Command**: **default** (empty) — Vercel runs `next build` via the Next preset.  
   - **Install Command**: **default** (empty) — Vercel runs `npm install` in `frontend/`.  
   - **Output Directory**: **empty** — do not set `public` or `.next` manually.

3. **Do not commit a `frontend/vercel.json`** that overrides install/build unless you know you need it. Custom commands can finish “successfully” but skip Vercel’s Next.js output wiring and cause **`404 NOT_FOUND`** on every route.

4. **Do not** keep an old **`vercel.json` at the repo root** that points at the wrong folder.

Commit: **`frontend/package-lock.json`**, **`frontend/package.json`**, and everything under **`frontend/src`**, **`frontend/public`**, **`frontend/next.config.mjs`**, etc.

### Build works but site shows `404: NOT_FOUND` (Vercel)

1. **Confirm Root Directory is `frontend` and Framework is Next.js** (see above). Wrong preset deploys as a static site and `/` won’t hit the Next handler.

2. **Git → Production Branch** (e.g. `main`) must be what you push to. Under **Deployments**, the deployment for **Production** should be **Ready** (not only a Preview on another branch).

3. **Deployment Protection** (Settings → Deployment Protection): try **turning protection off** temporarily. Some setups only allow access after login; misconfiguration can look like a dead site.

4. Open the URL from the **Deployments** list (“Visit” on the latest deployment) to rule out a wrong or stale **`.vercel.app`** alias.

### `next: command not found` (exit 127)

1. Root Directory **`frontend`**.  
2. Commit **`frontend/package-lock.json`**: `git ls-files frontend/package-lock.json` should print one line.  
3. Clear custom Install / Build overrides in Vercel.  
4. `package.json` uses **`node ./node_modules/next/dist/bin/next build`** so `PATH` does not need the `next` shim.
