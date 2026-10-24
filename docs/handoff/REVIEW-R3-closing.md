# REVIEW — R-3 closing pass

**Reviewed:** snapshot `internalplatform.r3closing.snapshot.json`, commit `36454da4e81b11237a5ceaba403bbc6dc67cf897`, generated 2026-08-11T01:38:33Z
**Baseline compared against:** `12dde14807dae168033d09baf617782ecfb1c53b` (R-2)
**Method:** file-level diff of the two snapshots, then the runtime extracted and measured in a real browser. The app's own boot did not complete in the review sandbox (15s boot timeout — data/auth gate, not a code defect introduced here), so the shell was measured through a harness that loads the real `styles/index.css` cascade and reproduces `shared/shell.js`'s topbar markup verbatim, including the new wrapper.

**Verdict: the code side of R-3 passes.** Every measurable claim I could test holds. What remains unverified is the paperwork — §6 of the brief — which the snapshot cannot carry.

---

## 1. Rule compliance

| Rule | Result |
|---|---|
| 1 — two files only | **Pass.** `styles/app.css` and `shared/shell.js` changed. 163 files in the snapshot, no additions, no deletions, no third file touched. The R-2 exception stayed revoked: `core/ui.js`, `modules/home.js`, `modules/response-tracking.js` are byte-identical to `12dde148`. |
| 2, 3 — design system and config frozen | **Pass.** No file under `styles/dgo-design-system/**` or `config/**` differs. |
| 4 — additive CSS | **Pass.** One existing rule modified (`min-height:36px` added at app.css:1301), which is rule 4's named exception for R3-D2. Everything else is appended. |
| 5 — no new `!important` | **Pass.** Zero `!important` in any added declaration. |
| 6 — no token invention | **Pass with a note.** No new custom property. `--dgo-control-target-min` is re-declared, not invented — but R3-D4 did not name it, so this is a derived mechanism. The source comment justifies it; the report must too (§6 item 8). |
| 8 — verified-absent selectors | **Pass.** R3-D1's absent `.dgo-topbar__controls` was not silently skipped this time — it was created deliberately under the escape hatch 3.3 offers, with the reason stated in source. |

---

## 2. Directive by directive

### R3-D1 — bound the topbar · **closes O-1**

`shell.js` wraps the seven trailing controls in `.dgo-topbar__controls`; `app.css:1390-1416` sizes it (gap parity at 12/8/6px) and, at ≤640px, makes it a single nowrap scroll row.

Measured, longest label (`My Work / Departmental Work`), harness:

| Viewport | Density | Topbar height | Token | Clipped controls | Controls row overflows |
|---|---|---|---|---|---|
| 320px | comfortable | **106.0px** | 106px | 0 | no (194px content, 250px available) |
| 320px | compact | **106.0px** | 106px | 0 | no (190px) |
| 390px | comfortable | **106.0px** | 106px | 0 | no |
| 390px | compact | **106.0px** | 106px | 0 | no |

Exactly at the token, never over. Two rows at both widths: hamburger + title, then search + controls. G-4 passes; the token needs no change, so 3.5's `calc()` enumeration is moot in practice — but the report should still say so explicitly.

The choice of the wrapper over `overflow-x` on `.dgo-topbar` is correct and the stated reason is the true one: `.dgo-topbar` carries `overflow:hidden !important` at app.css:528, which a non-`!important` rule cannot beat, and rule 5 forbids a second one.

The wrapper never actually needed to scroll in any tested state — reachability under compression is therefore designed-in but not exercised. Not a defect; worth knowing the fallback is untested in the field.

### R3-D2 — field floor · **closes O-2**

`min-height:36px` restored alongside `max-height:44px` at app.css:1301. Measured at 320/390px: text input 44.0px, select 40.0px (comfortable) / 36.0px (compact), textarea likewise. All inside 36–44px inclusive. G-9 items 1 and 7 hold: the three real `input[type=checkbox]` sites in the codebase measure 16×16 unchanged — the floor does not stretch them.

### R3-D3 — popover exclusion · **closes O-3**

Persona now has a real panel (`personaPanelHtml()`), a toggle, a focus trap with Escape, and accurate `aria-expanded` on both edges. `openMoreMenu`, `openNotifications` and `showGuide` all call `closePersonaPanel()`; `openPersonaPanel()` closes notifications and the overflow menu. The four-way matrix is complete in code. Rendering verified: the panel anchors under the persona button, identity row reads correctly.

### R3-D4 — touch targets · **closes O-4, partially**

`[data-density="compact"]{--dgo-control-target-min:40px}` inside the ≤640px tier. The mechanism works — `app.css` sits in the `overrides` layer, `tokens.enhanced.css` in `tokens`, so the override wins on layer order regardless of specificity. Measured at 320/390px compact: every control 40px or above (sidebar item 40, search trigger 40, persona 40, `.dgo-btn` 44). Comfortable: 44 throughout. Minimum ≥ 40px in both densities.

### R3-D5 — desktop delta evidence

Nothing to review in code — this directive produces evidence, not a diff, and I have measured what I can:

**The 320px overflow question (7.4) answers no.** With `min-width:200px` live, at 320px the title box renders 240px wide inside 250px of available row, `scrollWidth` equals `clientWidth` (320), and the document does not overflow horizontally. The gate is unnecessary.

The 1440/1920 capture set at both commits is still owed.

---

## 3. Findings

Report-only, in the brief's own spirit — none of these are fixed here.

**F-1 · The touch floor still fails between 641 and 900px, in compact.** R3-D4's override is scoped to ≤640px per rule 6.3. But the drawer layout runs to 900px (`NAV_DRAWER_MAX`), and that band is tablets — touch devices. Measured at 1440px compact: sidebar items 36px, search trigger 36px. The implementer disclosed this honestly rather than exceeding scope, which is the right call. It means O-4 is closed for the mobile shell and open for the tablet band. That is a product decision, not an oversight.

**F-2 · Persona has no click-outside dismissal.** The overflow menu gets one (`document` click listener); the persona panel and notifications do not. Escape and the explicit Close row work. Inconsistent, not broken.

**F-3 · Persona panel content goes stale.** `personaPanelHtml()` runs once at render. `refreshIdentityAndNav()` updates `[data-name]`/`[data-role]` in the sidebar but neither the persona button nor the new panel, so a profile change leaves both showing the old identity. The button had this bug already; the panel inherits it.

**F-4 · Focus returns to a displaced trigger.** `closePersonaPanel()` and `closeMoreMenu()` unconditionally `trigger.focus()`, including when they are being closed *because another surface is opening*. The incoming panel's `requestAnimationFrame` focus wins, so nothing is visibly wrong today — but the ordering is load-bearing and undocumented. Pre-existing pattern, now on a fourth surface.

---

## 4. What I could not verify — and how it resolved

All four were artifact limits, not gaps. The implementer supplied each on 2026-08-11:

1. **Commit granularity — resolved.** Five unsquashed commits, one per directive: `a6e2288` (D1), `bc96dca` (D2), `4596105` (D3), `d6b47d5` (D4), `36454da` (D5). A file-tree snapshot carries only HEAD; rule 11 is satisfied.
2. **Gates G-2, G-5, G-8 — resolved.** Measured live in a booted runtime (the welcome/OTP gate has an on-screen Escape-to-skip path my sandbox did not find): six-cell reachability matrix, all twelve popover pairs with `aria-expanded` read from the DOM, 52 fields across seven routes with none outside 36–44px, contrast 17.37 / 14.23 / 21.0:1 across the three themes.
3. **The 640px boundary (G-3) — resolved.** Tested at literal integer viewports: 640×360 fully mobile (106px topbar, overflow menu present), 641×360 fully desktop (64px topbar, guide direct). My 640.47px reading was a harness scaling artifact, as suspected.
4. **R3-D5 capture set — substituted, and the substitution is sound.** Not the full route × density × theme × viewport matrix. Instead: a diff proof over `7ef5e894..12dde148` showing every changed line is either a comment or gated by `max-width:640px` / `max-height:640px`, neither reachable at 900 or 1080px height, corroborated by pixel-identical screenshots on three routes × two viewports. That covers all 24 routes where a sample would cover three, so it is the stronger claim. The process point stands: §6 item 8 required the substitution to be declared as one, and it was not. Acknowledged by the implementer.

**Longest-label note.** My harness used `My Work / Departmental Work`, which is not in `routes.config.js` — a synthetic worst case. The implementer measured the real longest label, `DGCEO Correspondence & Decision Hub`. Both return 106px; the two readings corroborate rather than conflict.

**Outstanding for the record:** the §6 report exists only as chat text. It should land as a file in `handoff/` so the workstream closes against an artifact rather than a transcript.
