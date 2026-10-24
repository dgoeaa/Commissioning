# ADJUDICATION — repository audit execution

**Date:** 2026-08-11
**Reviewed:** `claude/internal-platform-audit-qz97c4` at `4411b28`, against `REVIEW-repo-consolidation-audit.md`.
**Verdict: accepted except §2, which was not performed. One directive remains, and it is narrow.**

---

## 1. Accepted

The consolidation, the boot diagnosis, the `.gitignore`, the health checks, and the deferred findings left visible rather than invented. Two items exceed what was asked:

**The `.cc-source-list` measurements.** Longest label needs 296px; tracks give 266px at 1440, 226px at 1280, 177px at 1024. That converts "it truncates" into a defect that cannot be argued with, and it names why four rounds of mobile gates missed it — the tier that breaks is the one nobody looked at. Verified at seven widths after the fix.

**The credential provenance.** Establishing that `endpoints.config.js` had been deliberately stripped to `ROTATE_ME` placeholders, and that the ZIP's bundle then reintroduced live URLs, is the difference between a leak and a regression. Zero real credentials anywhere else in history. That is the finding that tells the owner which process failed.

**The `tests/` finding, second reading.** You reported it twice and the second framing is materially worse news than the first: `styles/index.css` documents a cascade governed by an `override-overlap` budget ratchet in `tests/static/css-contract.mjs`, which has never existed. So the accepted-debt story that file tells is unenforced — the budget can be exceeded silently and nothing objects. Recorded as **F-7**, deferred, not to be fixed here.

The two blocked items are genuinely blocked. 403 on branch deletion and no API surface for the default branch are permission facts, not judgment. Correctly reported with SHAs recorded for restorability.

---

## 2. Not performed: the artifact restoration

§2 of the review directed you to restore the two deleted artifacts or extract the ZIP's contents as files, because `EXEC-DIRECTIVE-mobile-shell.md` names `Root Platform - DGO Digital Operations.dc.html` — inside that ZIP — as **source of truth for values**. You identified that yourself before the first deletion.

Neither happened. The ZIP is still deleted, and `internalplatform.snapshot.json` was deleted as well.

The snapshot deletion I accept: it is a serialized duplicate of a tree git already versions, 163 files, none unique, and it is recoverable. Fine.

The ZIP is not fine, and the credential finding has changed the right remedy rather than removing the requirement. Restoring it wholesale would re-publish three live SAS URLs, so §2's first option is now off the table. The second option is the only one left:

### DIRECTIVE — extract one file

Extract **only** `Root Platform - DGO Digital Operations.dc.html` from the ZIP at `27f7e27` and commit it to the repository as a file. Not the bundle, not `_ds/`, not the rest of the archive. One file, the one the directive designates authoritative.

Confirm before committing that the extracted file contains no SAS URL, no signature, and no environment identifier. If it does, stop and report — do not commit and do not strip it silently.

Then leave the ZIP deleted. Its only irreplaceable content will be in the tree, and its dangerous content stays out.

One commit: `chore: restore the source-of-truth design component as a file`.

---

## 3. Still owned by the decision-maker, in priority order

1. **Regenerate the three Power Automate flows** — submission `1ff7714c…`, tracking `ca0bafc1…`, support `3fc71cc2…`. The blob remains reachable at `27f7e27`; deletion did not remediate. This is the only action that closes the exposure and nothing else on this list matters until it is done.
2. **Repoint the default branch** to `claude/internal-platform-audit-qz97c4` and name it `main`. The current default is 15 commits stale and there is no `main` — correctly not created, since your instructions restrict you to your designated branch.
3. **Delete the four retired branches.** All verified fully contained.
4. **History rewrite: still declined** pending a stated compliance need. After rotation the blob is inert, and a rewrite would break every commit sha cited across `handoff/`.

---

## 4. Standing

Closed: consolidation, desktop truncation fix, `.gitignore`, health checks, credential discovery and scoping.

Open: the one-file extraction above. Then, for the owner: rotate, repoint, delete.

Findings surviving with named owners: the IA question (9 / 24 / 29), F-1 touch band, F-2/F-3 consistency, F-6 checkbox floor, and now **F-7** — the `css-contract.mjs` ratchet that governs a documented budget and does not exist.
