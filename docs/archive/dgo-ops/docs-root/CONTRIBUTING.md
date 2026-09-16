# Contributing to DGO Targets

Thank you for contributing! This document explains the branch → PR → CI → merge → auto-deploy workflow.

---

## Development workflow

### 1. Clone and set up

```bash
git clone https://github.com/dgoeaa/DGO_Targets.git
cd DGO_Targets
npm install
npx playwright install --with-deps chromium
```

### 2. Create a feature branch

```bash
git checkout -b your-username/short-description
```

### 3. Run the dev server locally

```bash
npm start
# Root runtime:  http://localhost:8080/
# ECM portal:    http://localhost:8080/ECM_ActivityHub_Portal/htdocs/
```

### 4. Make your changes

Both apps are zero-build. Edit HTML/CSS/JS files and refresh the browser — no rebuild step.

### 5. Run tests before pushing

```bash
npm test            # Playwright smoke tests (must pass)
npm run test:links  # Link / asset check
```

### 6. Open a pull request

- Push your branch and open a PR against `main`.
- CI runs automatically (`.github/workflows/ci.yml`):
  - Smoke tests (Playwright)
  - HTML link / asset checker
- All checks must be green before merge.
- A failing test upload is available as a GitHub Actions artifact.

### 7. Merge and deploy

- After approval and green CI, merge to `main`.
- The Pages workflow (`.github/workflows/pages.yml`) runs automatically:
  1. Re-runs the smoke tests as a gate.
  2. Deploys to GitHub Pages if tests pass.

---

## Code style

- No build step, no bundler, no transpilation.
- Keep ES-module imports relative (`./` or `../`). Do not use absolute paths (`/`).
- Do not add dependencies without discussion — the goal is zero runtime dependencies.
- All JS/CSS changes must leave the smoke test suite green.

---

## Adding tests

Tests live in `tests/smoke.spec.js`. Add new assertions to the relevant `test.describe` block:

```js
test('my new assertion', async ({ page }) => {
  await page.goto('/?skipWelcome=1', { waitUntil: 'networkidle' });
  // ... your assertions
});
```

Use `?skipWelcome=1` when the root app's welcome overlay would block the shell from rendering.

---

## Secrets and configuration

**Never commit real Power Automate SAS URLs or API keys.** See `config/config.example.js` and `ECM_ActivityHub_Portal/htdocs/config.example.js` for the configuration pattern. Local config goes in `config/config.local.js` (already tracked with safe empty defaults — do not add real URLs there).

---

## Reporting issues

Open a GitHub Issue describing:
1. What you expected to happen.
2. What actually happened.
3. Steps to reproduce (including browser, OS, and `node --version`).
