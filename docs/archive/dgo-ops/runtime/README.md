# DGO Targets

Two pure client-side ES-module web applications powering NITDA's Digital Operations platform.

---

## What's in this repo

| App | Entry point | Description |
|-----|------------|-------------|
| **DGO R11.6 Runtime** | `index.html` | Obsidian Harmonized Design System runtime — full platform shell with routing, RBAC, state, module boundaries, accessibility, and theming. |
| **ECM Activity Hub Portal** | `ECM_ActivityHub_Portal/htdocs/index.html` | Executive SPA — correspondence, approvals, meetings, briefs, decisions, tasks, and AI-assisted operations. |

Both apps are zero-build: no bundler, no transpilation, no server-side rendering. They require a real HTTP server (not `file://`) because browsers block ES-module imports across origins.

---

## Run locally

```bash
git clone https://github.com/dgoeaa/DGO_Targets.git
cd DGO_Targets
npm install
npm start
```

Then open:
- Root runtime: <http://localhost:8080/>
- ECM portal: <http://localhost:8080/ECM_ActivityHub_Portal/htdocs/>

To serve only the portal on port 8080:

```bash
npm run serve:portal
```

---

## Run in Codespaces

1. On GitHub, click **Code → Codespaces → Create codespace on main**.
2. Codespaces will automatically run `npm install` and start the server on port 8080.
3. GitHub forwards port 8080 and opens a preview — no manual steps needed.

Both apps are accessible at the forwarded URL with the same subpaths as local.

---

## Run tests

```bash
npm test          # Playwright smoke suite (requires Node >= 20)
npm run test:links  # HTML link / asset checker
```

Tests use [Playwright](https://playwright.dev/) and boot the static server automatically. On the first run Playwright downloads Chromium:

```bash
npx playwright install --with-deps chromium
```

### What the smoke suite checks

For each app:
- HTTP 200 on page load
- Zero uncaught JS errors (catches broken ES-module imports)
- Zero same-origin 4xx/5xx responses (the optional, git-ignored `config.local.js` files are allowed to 404)
- Zero console errors (external CDN / API failures are allow-listed)
- `#app` is mounted with content after `networkidle`
- Critical same-origin assets resolve with 200
- Accessibility: skip-to-main link exists and `#main` is a valid target (root app)

---

## Deploy to GitHub Pages

> **Private repository caveat**: GitHub Pages on a *private* repo requires GitHub Pro, Team, or Enterprise. On a Free plan you must either make the repository public, or push the built output to a separate public repository.

Deployment is **opt-in**, because `actions/configure-pages` fails the whole workflow on every push while Pages is not configured for the repository. To turn it on:

1. **Settings → Pages → Build and deployment → Source: “GitHub Actions”.**
2. **Settings → Secrets and variables → Actions → Variables**: add a repository variable `ENABLE_PAGES` with the value `true`.

Until `ENABLE_PAGES` is set, the jobs in `.github/workflows/pages.yml` are skipped on pushes to `main` instead of failing. A manual **Run workflow** always deploys, and `configure-pages` runs with `enablement: true` so it creates the Pages site itself when the plan allows it.

Once enabled, the workflow deploys on every push to `main`, after smoke tests pass. Both apps are served from the same artifact:

| URL | App |
|-----|-----|
| `https://dgoeaa.github.io/DGO_Targets/` | Root runtime |
| `https://dgoeaa.github.io/DGO_Targets/ECM_ActivityHub_Portal/htdocs/` | ECM portal |

All asset paths use explicit relative (`./`) references so both apps work at `/` (local / Codespaces) and at `/DGO_Targets/` (Pages) without a hardcoded `<base href>`.

---

## Configuration

### Root runtime (Power Automate endpoints)

The root runtime reads endpoint URLs from `window.DGO_CONFIG.endpoints` (set before the ES-module graph loads). To supply real URLs:

1. Copy `config/config.example.js` to `config/config.local.js` and populate the `endpoints` object.
2. See `config/config.example.js` for the full key list and documentation.

`config/config.local.js` is git-ignored and therefore absent in CI and on a fresh clone. `index.html` loads it with `onerror="void 0"`, so a 404 for it is expected and harmless — the smoke suite and the link checker both allow it.

> **Security notice**: The Power Automate SAS-signed URLs that were previously hardcoded in `config/endpoints.config.js` have been removed. They remain in Git history and **must be rotated / regenerated in Power Automate** before any continued use — a SAS signature is effectively a credential.

### ECM Activity Hub Portal

The portal reads its backend URL from `window.DGO_CONFIG.API_URL`. Copy `ECM_ActivityHub_Portal/htdocs/config.example.js` to `ECM_ActivityHub_Portal/htdocs/config.local.js` and set the value there; see the example file for documentation. Like the root runtime's copy, `config.local.js` is git-ignored and optional, so a 404 for it is expected on a fresh clone.

The `powerAutomateClient.js` file contains **no hardcoded secrets** — it is a generic fetch wrapper. All URL configuration flows through `js/core/config.js` and the `DGO_CONFIG` override.

---

## Troubleshooting

### "Failed to load module" / CORS error when opening `index.html` directly

ES modules (`<script type="module">`) are blocked by CORS when opened as `file://` URLs. You must serve the files over HTTP:

```bash
npm start          # uses http-server on port 8080
# or
python3 -m http.server 8080
```

### Fonts / Tailwind / Lucide icons missing

These assets load from external CDNs (Google Fonts, `cdn.tailwindcss.com`, `unpkg.com`). They will be absent in offline environments or behind strict firewalls. The apps degrade gracefully — fallback system fonts are defined, icon placeholders are shown, and no JS error is thrown.

### Large JSON files in the repo

Some large `*.state.json` files are committed for historical reasons. Future state exports are git-ignored (see `.gitignore`). These files have no effect on the running apps.

---

## Repo structure

```
.
├── index.html                          Root runtime entry
├── assets/                             Shared SVG assets
├── config/                             Platform configuration modules
│   ├── config.example.js               Document endpoint key structure
│   ├── config.local.js                 Edit with your rotated endpoint URLs
│   └── endpoints.config.js             Reads from window.DGO_CONFIG.endpoints
├── core/                               Boot, router, state, services
├── modules/                            Route modules (lazy-loaded)
├── shared/                             Shell, components, design-system adapter
├── styles/                             CSS @layer cascade
│   └── dgo-design-system/              Self-hosted design tokens + fonts
├── ECM_ActivityHub_Portal/
│   └── htdocs/                         ECM portal (separate app)
│       ├── index.html
│       ├── config.example.js
│       ├── config.local.js
│       ├── powerAutomateClient.js
│       └── js/
├── tests/
│   └── smoke.spec.js                   Playwright smoke tests
├── .devcontainer/devcontainer.json     Codespaces one-click setup
├── .github/
│   └── workflows/
│       ├── ci.yml                      CI: smoke tests + link check
│       └── pages.yml                   GitHub Pages deployment
├── package.json
└── playwright.config.js
```
