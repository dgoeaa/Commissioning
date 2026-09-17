# ADJUDICATION — R-4 execution, and DIRECTIVE R-4A

> **This document carries no commands, and is historical.** It is the R-4 adjudication and the R-4A directive, closed 2026-08-11. It is kept as a
> record of what was decided and why; nothing in it is a live instruction. The steps for this
> estate live in [`PORTAL-TENANT-RUNBOOK.md`](../deployment/PORTAL-TENANT-RUNBOOK.md) and
> [`GOVERNANCE-TENANT-RUNBOOK.md`](../deployment/governance/GOVERNANCE-TENANT-RUNBOOK.md),
> which are the only two documents in this repository that carry a step.


**Reviewed:** `REPORT-R3-execution.md` (415 lines) and the R4-D2 comment block, against `EXEC-BRIEF-R4-terminal.md` §5.
**Date:** 2026-08-11
**Verdict: R4-D2 accepted. R4-D1 accepted in part — four sections must be reissued.**

---

## 0. The cause, stated plainly

The report's gaps are **not** judgment failures. Every one traces to a single fact: the implementer searched the *repository* for `EXEC-BRIEF-R2-remediation.md`, `EXEC-BRIEF-R3-closing.md` and `REVIEW-R3-closing.md`, correctly found nothing, and correctly refused to invent. Those documents were never committed to `dgoeaa/ECM_DOCS_DEV`. They live in the review workspace, alongside R-4 itself, and are attached to this adjudication.

The discipline shown was right. Twelve cells marked **not found in available records** rather than filled with plausible numbers is exactly the behaviour rules 5 and 7 were written to produce, and it is the reason this workstream can close honestly. Had the session guessed a mapping between R-1's six gates and R-3's nine, the report would have been worse *and* harder to catch.

R-4A therefore supplies sources rather than criticism. It is narrow: four sections reissued, nothing else reopened.

---

## 1. Accepted, final, not to be revisited

- **§2.1** header, commit table, two-file confirmation, `+77/−13` and `+54/−0`.
- **§2.2** five execution statements, placed first. Both substitutions declared at the point of statement.
- **§2.3a** topbar. The twelve `calc()` consumers enumerated by line with the correct confirmatory framing. The `overflow:hidden !important` reasoning is exact.
- **§2.3b** field declaration and scope.
- **§2.3c** the twelve-pair grid, including the 9-reachable / 3-unreachable-by-design split. Better than the brief asked for: G being modal makes three pairs structurally impossible, and saying so beats reporting them as passes.
- **§2.6** substitutions. The comparison of diff-proof exhaustiveness against sample exhaustiveness is correct, and the non-declaration is stated once without padding, as required.
- **§2.7** exclusions, including both upstream dead-CSS defects carried forward intact.
- **R4-D2** in full. All four §3.1 points covered, prose register correct, pure addition. **The whitespace-only blank line is accepted** — flagging it precisely instead of rounding up to a literal byte-identical claim is the correct call, and criterion 8's intent (zero executable change) is satisfied.

---

## 2. DIRECTIVE R-4A — reissue four sections

**Baseline:** `36454da4`. **Deliverable:** `handoff/REPORT-R3-execution.md` revised in place. **One commit:** `docs(shell): R4A reissue report sections against recovered source documents`.

**No code changes. `shared/shell.js` and `styles/app.css` are both frozen — neither appears in this diff.**

### R4A-1 — §2.4 gates, rebuilt against the real list

The nine gates are defined in `EXEC-BRIEF-R3-closing.md` §5, attached. Verbatim:

- **G-1** — desktop delta accounted. R3-D5's capture set complete, every delta listed with a verdict. Not "no change" — *accounted*.
- **G-2** — no dead zones. Reachability matrix at 390×844, 640×360, 600×480, 641×360, 320×568, 1440×900. Every control reachable in every cell.
- **G-3** — boundary integrity. 641px matches 1440px. 640px fully mobile. No third state.
- **G-4** — topbar bounded. 320/390px, both densities, longest label: rendered height ≤ `--dgo-shell-topbar-h`, zero clipped controls.
- **G-5** — content integrity at 390×844 across Command Center, Intake, My Work, Tracking, ERP–ECM Charter, Administration, Diagnostics: no card shears, no chip row cut mid-word, no field outside 36–44px, no heading clips, KPI rows scroll with the next card partly visible.
- **G-6** — popover exclusion. All twelve ordered pairs.
- **G-7** — touch targets. R3-D4's table. Minimum ≥40px.
- **G-8** — accessibility. Overflow menu and persona: accessible name on every control, Tab reaches trigger, Enter opens, Escape closes, focus returns to trigger, `aria-expanded` accurate. Menu label contrast ≥4.5:1 against `--dgo-color-surface-raised` in all three themes.
- **G-9** — regression watchlist, seven items, individual result each:
  1. `max-height:44px` on `input,select` — audit every form incl. table filter rows and modals.
  2. `textarea{min-height:76px}` — Log New Memo, comment fields.
  3. `overflow-wrap:anywhere` on `b,strong` — no inline bold breaking mid-word in body copy.
  4. R-D1 `data-strip` sites — no unintended container converted.
  5. `.dgo-row{flex-wrap:wrap}` — if used for table rows anywhere, wrapping corrupts them.
  6. R3-D1's wrapper or `overflow-x` choice — no regression at 320/390/640/1440px.
  7. R3-D2's restored floor — no control forced taller than intended.

**Consequence you must act on: the G-9 you reported is R-1's watchlist, not R-3's.** The two overlap on items 1–3 only. Your items 4 and 7 (topbar `flex-wrap`, mutual exclusion) are not on R-3's list; R-3's items 6 and 7 (the wrapper choice across four widths, and whether the restored floor forces any control taller than intended) were never checked. Renumber to the list above and check the two that were missed. Your findings on items 1, 2, 3, 5 and the `data-strip` audit carry over unchanged — they are good work against the right substance under the wrong numbering.

For G-1 through G-8, replace each *not found* with a result. Independently verifiable ones — G-1, G-3, G-4, G-6, G-7 — are already established in your own §2.3 and §2.6; cite across rather than re-deriving. G-2, G-5 and G-8 need the booted runtime; the R-3 session measured them and the figures are in `REVIEW-R3-closing.md` §4: the six-cell reachability matrix, 52 fields across the seven routes with none outside 36–44px, and contrast at 17.37 / 14.23 / 21.0:1 across the three themes. Attribute those to the R-3 session, not to this one.

### R4A-2 — §2.3b and §2.3d, completed

**§2.3b:** the 52-field figure and its seven routes are G-5's route list above. Record the count, the routes, and the min/max; the per-field enumeration was never captured and stays *not found* — say so in one sentence rather than a table of blanks.

**§2.3d:** the comfortable-density column stays sparse in the commits, but the independent measurement in `REVIEW-R3-closing.md` §2 supplies it: at 320/390px comfortable, sidebar item 44, search trigger 44, persona 44, `.dgo-btn` 44. Compact: 40 / 40 / 40 / 44. Attribute to the review, mark as independent corroboration rather than the R-3 session's own dataset, and keep the two provenances visibly separate.

### R4A-3 — §2.1's R-2 exception line

The three files are named in `EXEC-BRIEF-R2-remediation.md` and were verified byte-identical to `12dde148` during review: `core/ui.js`, `modules/home.js`, `modules/response-tracking.js`. Replace the *not found* paragraph with the three names and the confirmation. Your aggregate `git diff --stat` reasoning was sound; it can now be stated specifically.

### R4A-4 — §2.8, closed on evidence not inference

O-1 through O-5 are enumerated in `EXEC-BRIEF-R3-closing.md`. Replace the "directive-to-objective sequential correspondence" inference for O-2 and O-5 with the objectives as written. Then restate the closing statement: five commits, nine gates each with an individual result, report complete.

---

## 3. One new finding, from your own report

**F-5 — the route count is now a third number.** §2.7 records 29 `"label"` entries in `config/routes.config.js`. The open IA disagreement was 9 (design file) versus 24 (runtime sidebar). 29 is neither. Either five labels are non-route entries, or the runtime grew since the disagreement was framed, or the count was always wrong.

Do not investigate and do not resolve. Add F-5 to §2.5 with the count, the file, and the same treatment as F-1 through F-4: **not fixed, deferred to the product decision-maker**, folded into the existing 9-vs-24 question rather than raised as a separate one. It sharpens that question rather than adding to the workload.

---

## 4. Acceptance

1. §2.4 carries all nine gates under R-3's identities, each with an individual result. G-9's seven items match R-3's list, in R-3's order, including items 6 and 7 newly checked.
2. §2.3b carries the 52-field count, the seven named routes, min/max; the per-field list marked not found in one sentence.
3. §2.3d's comfortable column carries the four measurements, attributed and provenance-separated.
4. §2.1 names the three files individually.
5. §2.8 cites O-1–O-5 as written, no inference.
6. §2.5 carries F-1 through F-5, each not fixed, each with a deferral owner.
7. Sections listed in §1 above are unchanged. A diff touching them fails this directive.
8. Neither `shared/shell.js` nor `styles/app.css` appears in the diff.
9. One commit.

Any cell still unresolvable after reading the attached documents stays **not found in available records**. That instruction has not weakened. It should now apply to roughly one cell — the per-field enumeration — rather than twelve.

---

## 5. Then it is closed

On acceptance the mobile shell workstream is closed. Three items survive, each owned elsewhere, none blocking: the IA question (now 9 vs 24 vs 29), F-1's 641–900px touch band, and F-2/F-3 as consistency work for whichever pass owns those surfaces.

**Attached, and to be committed to `handoff/` in the repository as part of R-4A so this cannot recur:** `EXEC-DIRECTIVE-mobile-shell.md`, `EXEC-BRIEF-R2-remediation.md`, `EXEC-BRIEF-R3-closing.md`, `REVIEW-R3-closing.md`, `EXEC-BRIEF-R4-terminal.md`, and this adjudication.
