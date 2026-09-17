# EXECUTION BRIEF R-3 — Terminal Closing Pass

> **This document carries no commands, and is historical.** It is round R-3 of the mobile-shell remediation workstream, closed 2026-08-11. It is kept as a
> record of what was decided and why; nothing in it is a live instruction. The steps for this
> estate live in [`PORTAL-TENANT-RUNBOOK.md`](../deployment/PORTAL-TENANT-RUNBOOK.md) and
> [`GOVERNANCE-TENANT-RUNBOOK.md`](../deployment/governance/GOVERNANCE-TENANT-RUNBOOK.md),
> which are the only two documents in this repository that carry a step.


**Target runtime:** `dgoeaa/ECM_DOCS_DEV`, branch `main`
**Baseline of record:** commit `12dde14807dae168033d09baf617782ecfb1c53b` (snapshot 2026-08-10T23:26:29Z)
**Predecessors:** `handoff/EXEC-DIRECTIVE-mobile-shell.md` (R-1), `handoff/EXEC-BRIEF-R2-remediation.md` (R-2)
**Scope:** close the five items R-2 left open. Nothing else.
**Authority:** closed and terminal. On completion the mobile shell workstream is finished — no deferred items, no partials, no pending.

---

## 0. STANDING

R-2 (`12dde148`) closed R-D1, R-D2, R-D3, R-D5 and G-6. That work is **ratified permanently** — do not revert, do not re-open, do not re-litigate:

| Ratified | Detail |
|---|---|
| `.kpis` is `display:flex` | Verified in-browser, not by cascade reading. The flex fallback (`flex-wrap:nowrap` + `flex:0 0 64%`) is what carries R-D1. `div[data-strip]` is inert for it and stays as a no-op guard for `.cc-kpi-band`. |
| Tier overlap resolved additively | `@media(max-height:640px){--dgo-shell-ministry-h:0px}` placed after the tier, winning by source order. No reorder, no `!important`. |
| `!important` removal | Conflicting rule named (line ~583, specificity 0-1-0), source order decides. Verified 320/390/640px. |
| `.dgo-toolbar` / `.rt-toolbar` inert today | Disclosed honestly. `.dgo-toolbar` has no live renderer; `.rt-toolbar`'s intentional scroll is preserved by a 0-2-1 route-scoped rule. |
| `showGuide()` closes notify + more | Real G-6 gap, correctly found and fixed. |

**One process failure is on the record and must not recur.** R-D4 named `.dgo-topbar__controls`. That element does not exist — every control is a direct child of `.dgo-topbar`. Rule 8 required halt-and-report. Instead the directive was silently skipped, with no comment in source and no entry in the report. This is the second time a directive vanished this way (R-1's D-4 was the first). §1.9 of this brief makes the consequence explicit.

---

## 1. OPERATING RULES — binding

1. **Two files only:** `styles/app.css`, `shared/shell.js`. No new files. The R-2 rule-1 exception (`core/ui.js`, `modules/home.js`, `modules/response-tracking.js`) is **spent and revoked** — those files are frozen again.
2. **`styles/dgo-design-system/**` frozen.** No exceptions.
3. **`config/**` frozen.** No exceptions.
4. **Additive CSS.** Do not delete or reorder existing rules. One exception, explicit: R3-D2 restores a dropped declaration.
5. **No `!important` may be added.** If a rule cannot win, report the specificity conflict and resolve by source order or selector specificity.
6. **No token invention.** New custom properties only where a directive names them.
7. **Desktop is a measured surface, not a frozen one.** R-2 shipped two unconditional desktop declarations (`.dgo-route-title{flex:1 1 0%;min-width:200px}`, `.dgo-topbar__spacer{flex:0 0 0}`). They are almost certainly correct — they are the F-2 fix — but they were shipped against a rule that said no desktop change, and never evidenced. R3-D5 closes that with measurement, not assertion.
8. **Verified-absent selectors.** Every selector this brief names has been confirmed present at `12dde148` **except** where a directive explicitly says to derive it. If a named selector is absent, **halt and report**.
9. **A skipped directive is a failed brief.** If a directive cannot be executed as written, the required action is: stop, report the blocker, propose the substitution, and wait. Silently omitting a directive — with or without good reason — fails the entire brief regardless of the other directives' quality. There is no partial pass.
10. **Report, don't extend.** Defects found outside this brief go in the §5 report unfixed.
11. **Five commits, in order, not squashed.** Message: `fix(shell): R3-D<n> <one line>`.

---

## 2. OPEN ITEMS

| ID | Item | Severity | Directive |
|---|---|---|---|
| O-1 | R-D4 unimplemented: topbar height unbounded, controls can clip | **Critical** | R3-D1 |
| O-2 | `min-height:36px` on fields silently dropped; only the ceiling shipped | Bug | R3-D2 |
| O-3 | Persona not wired into popover mutual exclusion | Bug | R3-D3 |
| O-4 | `.dgo-btn{min-height:40px}` absent; touch targets unverified | Bug | R3-D4 |
| O-5 | G-1 desktop no-op never evidenced; R-2 changed desktop unconditionally | Evidence | R3-D5 |

---

## 3. DIRECTIVES

### R3-D1 — Bound the topbar (closes O-1, critical)

**Objective.** The topbar cannot clip a control at any viewport width, at any route-label length, in either density, and `--dgo-shell-topbar-h` arithmetic stays intact.

**Ground truth.** There is no control-cluster element. At `12dde148` the direct children of `.dgo-topbar` are, in order: nav toggle, `.dgo-route-title`, `.dgo-topbar__spacer`, search trigger, guide, sync, `…` (`data-more-open`), density, theme, notify, persona. `--dgo-shell-topbar-h` is fixed at `106px` and feeds `calc()` in `.dgo-shell-grid` and `.dgo-notify-panel` (ratified V-2 — it must remain a fixed length; do not restore `auto`).

**3.1 Derive the selector.** Enumerate `.dgo-topbar`'s direct children at `12dde148` and confirm the list above. Report any discrepancy before proceeding.

**3.2 Cap wrapping to one control row.** The topbar currently carries `flex-wrap:wrap`, which permits unbounded growth past the fixed 106px. In the `@media(max-width:640px)` tier, constrain the control run so it cannot occupy more than one row:

```css
@media (max-width:640px){
  .dgo-topbar>.dgo-iconbtn,.dgo-topbar>[data-more-open]{flex:0 0 auto}
}
```

Substitute `.dgo-iconbtn` with the actual class the control buttons carry if it differs. **Do not** set `flex-wrap:nowrap` on `.dgo-topbar` itself — the title must still wrap to its own line (that is the ratified F-2 fix).

**3.3 Guarantee reachability under compression.** If the control run cannot fit one row at 320px, it must scroll rather than clip. Add to the same tier a horizontal scroll on the control run. Since there is no wrapper element, achieve this **without adding markup**: either constrain via `.dgo-topbar{overflow-x:auto}` combined with `flex-wrap:wrap` retained for the title row, or introduce a single wrapper `<div class="dgo-topbar__controls">` in `shell.js` around the seven trailing controls. **Choose one, state which and why in the commit body.** If you introduce the wrapper, it must not change control order, must not alter any control's existing classes or attributes, and must carry no ARIA role.

**3.4 Measure.** At 320px and 390px, both densities, longest route label (`My Work / Departmental Work`), capture the rendered `.dgo-topbar` height. Report both numbers.

**3.5 Reconcile the token.** If either measurement exceeds `106px`, raise `--dgo-shell-topbar-h` to the measured value **and** enumerate every `calc()` consumer of it, confirming each still resolves correctly. Report the new value and the consumer list. If both measurements are ≤106px, state that and leave the token unchanged.

**Deliverable.** Measured heights at 320/390px × 2 densities. The chosen approach from 3.3 with justification. Every `calc()` consumer enumerated. Zero clipped controls at 320px.

---

### R3-D2 — Restore the field floor (closes O-2)

**Objective.** Fields have both a floor and a ceiling, as R-1 specified.

**4.1** R-1 D-1 specified `min-height:36px;max-height:44px` on `.dgo-input,.dgo-select__field,input,select`. At `12dde148` only `max-height:44px` is present. Restore `min-height:36px` to the same rule.

**4.2** If the floor was dropped deliberately — because an existing rule already establishes it, or because 36px broke a specific control — **do not restore it**. Instead report: which rule supplies the floor, or which control broke, with evidence. Either outcome closes O-2. An unexplained absence does not.

**4.3** Verify against the F-7 case (search field on My Work at 390px): rendered height between 36px and 44px inclusive.

**Deliverable.** Either the restored declaration plus a measured field height, or a documented reason the floor is unnecessary.

---

### R3-D3 — Complete popover exclusion (closes O-3)

**Objective.** Exactly one of {notifications, persona, guide, overflow menu} is open at any moment, in every direction.

**5.1** R-2's G-6 fix wired `showGuide()` → closes notify + more. Persona has no visible close path in either direction. Wire the full matrix: opening any one of the four closes the other three.

**5.2** Test **all twelve ordered pairs**, not four. The regression only manifests in sequence — open A, then B, verify A closed and its `aria-expanded` is `false`.

**5.3** Persona's trigger must carry accurate `aria-expanded` in both states, matching the pattern the other three already use.

**Deliverable.** A 4×4 matrix, twelve cells, each stating the closed-state result and the `aria-expanded` value of the surface that was displaced.

---

### R3-D4 — Touch targets (closes O-4)

**Objective.** No interactive control in the mobile shell is under 40px on its smallest axis.

**6.1** R-1 D-1 specified `.dgo-btn{min-height:40px}` in the ≤640px tier. It is absent at `12dde148`. Add it, or report the rule that already satisfies it.

**6.2** Audit every interactive control rendered by the shell at 390px: nav toggle, all seven topbar controls, overflow-menu rows, notification-panel rows, persona-panel rows, sidebar nav items, and every `.dgo-btn` in a toolbar. Report the smallest measured target and its selector.

**6.3** Anything under 40px must be raised in `app.css` within the ≤640px tier. Do not alter desktop sizing.

**Deliverable.** A table of every control class with its measured height at 390px. The minimum, named. Zero entries under 40px.

---

### R3-D5 — Evidence the desktop delta (closes O-5)

**Objective.** The desktop change R-2 shipped is measured and justified, or reverted.

**7.1** `.dgo-route-title{flex:1 1 0%;min-width:200px}` and `.dgo-topbar__spacer{flex:0 0 0}` are unconditional — they apply at every width. R-2's rule 7 stated no desktop-affecting change was authorised. The declarations are very likely correct (they are the F-2 fix, and R-1 ratified `flex:1 1 0%` on the title), but they were never evidenced.

**7.2** Capture every route at **1440×900 and 1920×1080**, both densities, all three themes, at `7ef5e894` (pre-R-2) and at `12dde148`. The only permitted difference is the topbar route title, which stops ellipsising and may shift the spacer's width to zero.

**7.3** Any other pixel delta must be reported with the route, viewport, theme and a description. Then judged: intended consequence of the F-2 fix, or regression. Regressions are fixed in this pass.

**7.4** State explicitly whether `min-width:200px` on `.dgo-route-title` can force horizontal overflow at 320px. If it can, gate it above 640px.

**Deliverable.** Capture set at both viewports. A list of every delta with a verdict. A yes/no on the 320px overflow question with measurement.

---

## 4. NON-NEGOTIABLE EXCLUSIONS

Considered and excluded. Touching any fails the brief.

- **Information architecture.** The runtime shows 24 sidebar routes; the design file shows 9. **Unresolved, and this brief does not resolve it.** Do not change the sidebar.
- Status vocabulary, priority scale, RBAC grants, any `config/**` file.
- Sprite symbols; workspace icon reassignment.
- Refreshing `styles/dgo-design-system/` from any source.
- Administration empty-card layout; per-screen mobile layouts for My Work and the ERP–ECM charter.
- The dead `grid-template-columns` rules targeting `.kpis` (R-2 found these; `.kpis` is flex). Real defect, upstream, **report only**.
- The dead status-token declarations in `tokens.theme-hc.css` (R-2 found these). Design-system defect, frozen file, **report only**.

---

## 5. VERIFICATION GATES

Mandatory. No gate may be marked "not verified." A gate failing twice is a halt condition.

**G-1 — desktop delta accounted.** R3-D5's capture set complete, every delta listed with a verdict. Not "no change" — *accounted*.

**G-2 — no dead zones.** Reachability matrix at 390×844, 640×360, 600×480, 641×360, 320×568, 1440×900. Every control reachable in every cell.

**G-3 — boundary integrity.** 641px matches 1440px. 640px is fully mobile. No third state.

**G-4 — topbar bounded.** At 320px and 390px, both densities, longest label: rendered height ≤ `--dgo-shell-topbar-h`, zero clipped controls.

**G-5 — content integrity at 390×844.** Command Center, Intake, My Work, Tracking, ERP–ECM Charter, Administration, Diagnostics: no card shears, no chip row cuts mid-word, no field outside 36–44px, no heading clips, KPI rows scroll with the next card partly visible.

**G-6 — popover exclusion.** All twelve ordered pairs from R3-D3.

**G-7 — touch targets.** R3-D4's table. Minimum ≥40px.

**G-8 — accessibility.** Overflow menu and persona: accessible name on every control, Tab reaches trigger, Enter opens, Escape closes, focus returns to trigger, `aria-expanded` accurate. Menu label contrast ≥4.5:1 against `--dgo-color-surface-raised` in all three themes.

**G-9 — regression watchlist.** Individual result for each:
1. `max-height:44px` on `input,select` — audit every form incl. table filter rows and modals.
2. `textarea{min-height:76px}` — Log New Memo, comment fields.
3. `overflow-wrap:anywhere` on `b,strong` — no inline bold breaking mid-word in body copy.
4. R-D1 `data-strip` sites — no unintended container converted.
5. `.dgo-row{flex-wrap:wrap}` — if used for table rows anywhere, wrapping corrupts them.
6. R3-D1's wrapper or `overflow-x` choice — no regression at 320/390/640/1440px.
7. R3-D2's restored floor — no control forced taller than intended.

---

## 6. REQUIRED REPORT

Every item. An omission is an incomplete brief.

1. Diff of both files. Confirmation no third file changed and the R-2 exception stayed revoked.
2. **R3-D1:** enumerated `.dgo-topbar` children; approach chosen under 3.3 with justification; measured heights (320/390px × 2 densities); token value; every `calc()` consumer.
3. **R3-D2:** restored declaration and measured field height, **or** the documented reason the floor is unnecessary.
4. **R3-D3:** the twelve-cell matrix.
5. **R3-D4:** the control table, with the minimum named.
6. **R3-D5:** capture set, every delta with a verdict, the 320px overflow answer.
7. Every gate G-1…G-9, individually, with its result. No blanket statements.
8. Any selector derived or substituted, with justification.
9. Any defect found outside this brief — recorded, **not fixed**.
10. Confirmation that §4 exclusions were untouched.
11. **Explicit statement, per directive, that it was executed.** If any was not, §1.9 applies and the brief has failed — say so plainly rather than reporting the rest as success.

---

## 7. DEFINITION OF DONE

O-1…O-5 closed. Five commits. All nine gates pass. The §6 report complete, including item 11.

At that point the mobile shell workstream is **terminal**. The only surviving open question is the **9-vs-24 information architecture disagreement** — a product decision, not an engineering defect, excluded by §4 and owned by the product decision-maker, not by any implementer.
