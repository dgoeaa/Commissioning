# EXECUTION BRIEF R-2 — Mobile Shell Remediation, Closing Pass

> **This document carries no commands, and is historical.** It is round R-2 of the mobile-shell remediation workstream, closed 2026-08-11. It is kept as a
> record of what was decided and why; nothing in it is a live instruction. The steps for this
> estate live in [`PORTAL-TENANT-RUNBOOK.md`](../deployment/PORTAL-TENANT-RUNBOOK.md) and
> [`GOVERNANCE-TENANT-RUNBOOK.md`](../deployment/governance/GOVERNANCE-TENANT-RUNBOOK.md),
> which are the only two documents in this repository that carry a step.


**Target runtime:** `dgoeaa/ECM_DOCS_DEV`, branch `main`
**Baseline of record:** commit `7ef5e894cd5670193805d4ccecb0be1fb6664d85` (snapshot generated 2026-08-10T20:51:39Z)
**Predecessor:** `handoff/EXEC-DIRECTIVE-mobile-shell.md` (directives D-1…D-6, implemented at `7ef5e894`)
**Scope:** close every open defect from the R-1 assessment. Two files. No new files.
**Authority:** this brief is closed and terminal. On completion there are **no deferred items, no partial provisions, nothing pending.**

---

## 0. WHAT THIS BRIEF EXISTS TO CLOSE

R-1 (`7ef5e894`) implemented D-1…D-6. Three deviations in it were correct and are **ratified permanently** (§1). Six items were left open. This brief closes all six and nothing else.

**Ratified — do not revert, do not re-litigate:**

| # | Deviation from R-1 | Why it stands |
|---|---|---|
| V-1 | Breakpoint 620px → **640px** | A pre-existing `!important` rule hides `[data-guide]`,`[data-sync]`,`button[data-density]` at `max-width:640px`. A 620px tier leaves 621–640px with those controls hidden and no overflow trigger. |
| V-2 | `--tb-h:auto` → fixed `--dgo-shell-ministry-h:40px` / `--dgo-shell-topbar-h:106px` | Both tokens feed `calc()` in `.dgo-shell-grid` and `.dgo-notify-panel`. `auto` breaks the grid. |
| V-3 | `.dgo-input__field` → **`.dgo-input`** | `.dgo-input__field` does not exist at this commit. Correct application of the R-1 §1c selector audit. |

**Open — this brief closes each:**

| ID | Defect | Severity | Directive |
|---|---|---|---|
| R-1 | D-4 never implemented; no `data-strip` in repo; KPI rows still shear | **Critical** | R-D1 |
| R-2 | Short-landscape dead zone: three controls unreachable at 640×360 | **Critical** | R-D2 |
| R-3 | Undocumented `flex-wrap:wrap !important` on `.dgo-topbar` | Bug | R-D3 |
| R-4 | `--dgo-shell-topbar-h:106px` fixed while content is wrap-dependent | Bug | R-D4 |
| R-5 | `max-height:44px` field cap absent in short landscape | Bug | R-D2 |
| R-6 | `.dgo-toolbar` / `.rt-toolbar` declare no `flex-wrap` | Bug | R-D5 |
| R-7 | HC chip tokens shipped inside a shell commit, contrary to R-1 §5 | Process | R-D6 |

---

## 1. OPERATING RULES — binding

1. **Two files only:** `styles/app.css`, `shared/shell.js`. A diff touching a third file fails the brief. No new files.
2. **`styles/dgo-design-system/**` is frozen.** No exceptions. Corrections to design-system values are expressed as overrides in `app.css`.
3. **`config/**` is frozen.** Routes, RBAC, status vocabulary, priority scales are governance artifacts.
4. **Additive CSS.** Do not delete or reorder existing rules. Two exceptions, both explicit: R-D2 rewrites one media-query condition, R-D3 removes one `!important`.
5. **No token invention.** New custom properties only where a directive names them.
6. **No `!important` may be added.** One existing one is removed (R-D3). If a rule cannot win without it, **stop and report the specificity conflict** — do not escalate.
7. **Desktop (≥641px) is a regression surface.** Every change in this brief is a no-op above 640px. There is no desktop-affecting change in R-2 — unlike R-1, which had one authorised. Any desktop pixel delta fails G-1.
8. **Substitution discipline.** Every selector this brief names has been verified present at `7ef5e894`. If any is absent, **stop and report** — do not silently substitute, and do not silently skip. R-1 skipped D-4 rather than substituting, which is how R-1 shipped a live defect.
9. **Report, don't extend.** If you find a defect outside this brief, record it in the §6 report. Do not fix it. R-7 exists because R-1 fixed something worthwhile in the wrong commit.
10. **Six commits, in order, not squashed.** Message: `fix(shell): R-D<n> <one line>`.
11. **Halt conditions.** Stop and report if: a named selector is absent; a gate in §5 fails twice; a change cannot be made without `!important`; removing the `!important` in R-D3 breaks wrapping.

---

## 2. VERIFIED FACTS — the ground truth this brief rests on

Established by reading `7ef5e894`. Do not re-derive; do not assume otherwise.

- `--kpi` **does not exist** in this runtime. R-1's D-4 was written against a design-file token. The real KPI containers are **`.kpis`** and **`.cc-kpi-band`**.
- `.kpis` and `.cc-kpi-band` currently resolve to `repeat(2,minmax(0,1fr))` at `max-width:640px`. At 390px that is the shear condition. This is the live F-4 defect.
- `app.css` line ~958 carries `[data-guide],[data-sync],button[data-density]{display:none!important}` inside a bare `@media(max-width:640px)` block with **no height condition**.
- The R-1 tier is gated `@media(max-width:640px) and (min-height:641px)`. The intersection of these two facts is defect R-2.
- `.toolbar`, `.action-row`, `.form-row` already declare `flex-wrap:wrap` at 640px. `.dgo-toolbar` and `.rt-toolbar` do not.
- `createFocusTrap` (`core/focus-trap.js`) assigns `container._releaseTrap` internally. R-1's D-6 focus handling is **correct**. No action.
- `.dgo-more-menu` and `.dgo-notify-panel` both use `z-index:1200`. Correct given mutual exclusion. No action.
- Measured topbar content at 390px: two-line title + one control row ≈ 97px. The 106px token holds for one control row only.

---

## 3. DIRECTIVES

### R-D1 — KPI strips (closes R-1, the critical omission)

**Objective.** No KPI or metric row shears its content at any viewport width, in any theme, at either density.

**3.1** Add a bare `data-strip` attribute to every element carrying class `kpis` or `cc-kpi-band`, wherever emitted — `shared/shell.js` and any module that renders one. **Enumerate every site before editing and record the count in the §6 report.** Mark nothing else: `data-strip` changes flow direction and will corrupt a grid not intended to scroll.

**3.2** Append to `app.css`, inside the existing `@media(max-width:640px)` tier established by R-D2:

```css
[data-strip]{overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding-bottom:2px}
[data-strip]::-webkit-scrollbar{display:none}
[data-strip]>*{flex:0 0 auto}
div[data-strip]{grid-auto-flow:column;grid-template-columns:none;grid-auto-columns:minmax(150px,64%)}
```

**3.3** The `64%` is deliberate: it leaves the next card partly visible so the scroll affordance is discoverable. Do not round to 100%. Do not substitute `auto-fit`.

**3.4** Both `.kpis` and `.cc-kpi-band` must be verified to be `display:grid` at ≤640px. If either is `display:flex`, the `div[data-strip]` rule will not apply to it — in that case add the flex equivalent (`flex-wrap:nowrap` plus a `flex-basis` on children) rather than converting the container's display type.

**Deliverable.** Every KPI row on Command Center, Intake, My Work, Tracking, Diagnostics scrolls horizontally at 390px with no clipped glyph. Count of marked sites, reported.

---

### R-D2 — Close the short-landscape dead zone (closes R-2 and R-5, critical)

**Objective.** Every topbar control is reachable at every viewport, with zero unreachable states.

**Root cause.** The R-1 tier is gated `and (min-height:641px)`. The `!important` hide rule is not height-gated. Their difference is the dead zone: at 640×360 or 600×480, guide/sync/density are hidden and `--tb-more:none`, so the `…` trigger never renders.

**4.1** Locate the R-1 block `@media(max-width:640px) and (min-height:641px)`. **Remove the `and (min-height:641px)` condition.** The tier becomes `@media(max-width:640px)`, matching the hide rule exactly. The overflow trigger now appears wherever the controls are hidden. This is the single change that closes R-2.

**4.2** The `min-height:641px` guard existed to avoid colliding with `@media(max-height:640px)`. That collision must now be handled by **scoping, not by exclusion**. Inspect the `max-height:640px` block and identify precisely which properties it owns. For each property owned by both tiers, the short-landscape tier must win by source order — place the `max-height:640px` block **after** the `max-width:640px` tier. Do not resolve this with `!important` (rule 6).

**4.3** `max-height:44px` on fields must apply at ≤640px **regardless of viewport height** (closes R-5). Confirm it now sits in the ungated tier.

**4.4** Enumerate every property the two tiers both declare and record the list in §6. If any pair cannot be resolved by source order, **halt and report** — do not guess.

**Deliverable.** A table in §6: viewport × control, for 390×844, 640×360, 600×480, 641×360, 1440×900. Every cell reads reachable. Search field ≤44px in all five.

---

### R-D3 — Remove the `!important` (closes R-3)

**Objective.** No undocumented specificity escalation in the shell.

**5.1** Locate `flex-wrap:wrap !important` on `.dgo-topbar` (added by R-1, ~line 1280). Remove `!important`.

**5.2** Re-test wrapping at 390px. If it still wraps, the escalation was unnecessary — ship the removal and note it.

**5.3** If wrapping breaks, find the rule that wins and report **its selector, line and specificity**. Resolve by raising this rule's specificity or by source order — not by restoring `!important`. If neither works, **halt and report the conflict** (rule 11).

**Deliverable.** Zero `!important` declarations added by R-1 or R-2 remain in `app.css`. Stated either as "escalation was unnecessary" or as the named conflicting rule and the specificity fix applied.

---

### R-D4 — Bound the topbar height (closes R-4)

**Objective.** The topbar cannot clip its controls at any content length, and `.dgo-shell-grid` arithmetic stays intact.

**Constraint.** `--dgo-shell-topbar-h` feeds `calc()` in `.dgo-shell-grid` and `.dgo-notify-panel` (fact V-2). It **must remain a fixed length.** Do not restore `auto`.

**6.1** Cap control wrapping to one row, so the 106px measurement remains true. Add to the ≤640px tier:

```css
.dgo-topbar__controls{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}
.dgo-topbar__controls::-webkit-scrollbar{display:none}
```

Verify the control cluster's real class name at `7ef5e894` before writing. If it is not `.dgo-topbar__controls`, use the actual name and report the substitution (rule 8).

**6.2** Verify against the longest route label at 320px width — the narrowest supported viewport — that the topbar renders at ≤106px with no clipped control. Report the measured height.

**6.3** If measurement exceeds 106px, raise the token to the measured value **and** re-verify every `calc()` consumer. Report both the new value and each consumer checked.

**Deliverable.** Measured topbar height at 320px and 390px, both ≤ the token value. Every `calc()` consumer of the token enumerated and confirmed.

---

### R-D5 — Toolbar wrapping (closes R-6)

**Objective.** No toolbar renders as a ragged multi-row pile or clips a control.

**7.1** Add `flex-wrap:wrap` to `.dgo-toolbar` and `.rt-toolbar` in the ≤640px tier. Verify both class names exist at `7ef5e894` first.

**7.2** Do not add rules for `.toolbar`, `.action-row`, `.form-row` — they already wrap (fact §2). Duplicating them violates rule 4.

**7.3** Confirm `.dgo-btn{min-height:40px}` is present in the tier and applies to both toolbars' children.

**Deliverable.** Every toolbar surface at 390px wraps as whole controls, no control under 40px tall, no partial glyph.

---

### R-D6 — Isolate the HC chip token work (closes R-7)

**Objective.** The HC contrast fix stands on its own commit with its own evidence. Nothing is reverted.

**Position.** The R-1 HC work is **substantively correct and stays**: the audit found `tokens.theme-hc.css` declares status tokens no consumer reads, so HC silently inherited light-theme values. The override was correctly placed in `app.css` rather than the frozen design system. Only its packaging was wrong — it shipped inside a shell commit that explicitly deferred it.

**8.1** Extract every HC status/chip token override introduced by R-1 into a separate commit: `fix(theme): correct HC status chip tokens unread by any consumer`.

**8.2** In that commit's body, record: each token corrected, its old and new value, the measured contrast ratio against its background in **all three themes**, and the consumer set audited.

**8.3** Do not alter the values. Do not extend the fix to tokens outside the status/chip set.

**8.4** Record in §6 that `tokens.theme-hc.css` contains dead declarations. That is an upstream design-system defect, out of scope here, and must be raised separately.

**Deliverable.** A standalone commit with a full contrast table. Zero HC token changes remaining in any shell commit.

---

## 4. NON-NEGOTIABLE EXCLUSIONS

Each was considered and excluded. Touching any of these fails the brief.

- **Information architecture.** The runtime shows 24 sidebar routes; the design file shows 9. **That disagreement is unresolved and this brief does not resolve it.** Do not reduce the sidebar. Do not add routes.
- Status vocabulary, priority scale, RBAC grants, any `config/**` file.
- The 19 sprite symbols absent from the design file; workspace icon reassignment.
- Refreshing `styles/dgo-design-system/` from any source.
- Administration empty-card layout, per-screen mobile layouts for My Work and the ERP–ECM charter. These are real defects, separately scoped, and **not** open items of this brief.

---

## 5. VERIFICATION GATES

Every gate is mandatory. A gate that fails twice is a halt condition. No gate may be marked "not verified."

**G-1 — desktop no-op.** Screenshot every route at 1440×900 before and after. **Zero pixel difference.** R-2 authorises no desktop change.

**G-2 — no dead zones.** The reachability matrix from R-D2's deliverable, all five viewports, every cell reachable. Specifically 640×360 and 600×480, the R-2 failure cases.

**G-3 — boundary integrity.** At 641px the shell matches 1440px. At 640px the tier is fully active. No third state.

**G-4 — content integrity at 390×844.** Command Center, Intake, My Work, Tracking, ERP–ECM Charter, Administration, Diagnostics: no card shears, no chip row cuts mid-word, no field over 44px, no heading clips, KPI rows scroll with the next card partly visible.

**G-5 — accessibility.** Overflow menu: every control ≥40px, accessible name present, Tab reaches trigger, Enter opens, Escape closes, focus returns, `aria-expanded` accurate both states. Menu label contrast ≥4.5:1 against `--dgo-color-surface-raised` in all three themes.

**G-6 — popover exclusion.** Open each of notifications, persona, guide, overflow menu **in every pairwise sequence**. Exactly one open at any time. R-1 wired `openMoreMenu` → `closeNotifications`; persona and guide were not visibly wired. Verify all four directions and fix any gap in `shell.js`.

**G-7 — regression watchlist.** Report a result for each, individually:
1. `max-height:44px` on `input,select` is broad — audit every form, including table filter rows and modals. Scope down if anything clips.
2. `textarea{min-height:76px}` — verify Log New Memo and comment fields.
3. `overflow-wrap:anywhere` on `b,strong` — confirm no inline bold breaks mid-word inside body copy.
4. `data-strip` count from R-D1 — confirm no unintended grid converted.
5. `.dgo-row{flex-wrap:wrap}` — if `.dgo-row` is used for table rows anywhere, wrapping corrupts them.
6. Removal of `!important` (R-D3) — confirm no wrapping regression at 320/390/640px.
7. Ungating the tier (R-D2) — confirm no short-landscape regression on desktop browsers resized to 1440×400.

---

## 6. REQUIRED REPORT — deliverable, not optional

Report all of the following. An omission is an incomplete brief.

1. Diff of both files. Confirmation that no third file changed.
2. **R-D1:** every site marked `data-strip`, with file and count. Display type confirmed for `.kpis` and `.cc-kpi-band`.
3. **R-D2:** the reachability matrix (5 viewports × every control). The enumerated property overlap between the two tiers and how each was resolved.
4. **R-D3:** whether the escalation was necessary. If it was, the conflicting rule's selector, line and specificity, and the fix applied.
5. **R-D4:** measured topbar height at 320px and 390px. Control-cluster class name confirmed or substituted. Every `calc()` consumer of `--dgo-shell-topbar-h` enumerated.
6. **R-D5:** both class names confirmed present.
7. **R-D6:** the standalone commit hash and its contrast table.
8. Every G-1…G-7 gate, with its result. Individually, no blanket statements.
9. Any selector substituted under rule 8, with justification.
10. Any defect found outside this brief, recorded and **not fixed** (rule 9).
11. Confirmation that §4 exclusions were not touched.

---

## 7. DEFINITION OF DONE

All seven of R-1…R-7 closed. Seven commits (six directives plus R-D6's extraction). All seven gates pass. The §6 report is complete. Zero items deferred, zero partial, zero pending.

The only open question that survives this brief is the **9-vs-24 information architecture disagreement**, which is a product decision, not an engineering defect, and is explicitly excluded by §4.
