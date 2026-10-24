# Runbook 04: Cutover, Rollback and Hypercare

> **Superseded by consolidation.** These steps now live in
> [`NOTIFICATION-TENANT-RUNBOOK.md`](../../../NOTIFICATION-TENANT-RUNBOOK.md), which is the only
> document that carries them. This file is kept as the record of what was delivered on
> 2026-09-05. Do not execute from here — it will drift from the runbook and nothing checks it.


## Cutover
1. Freeze related configuration changes.
2. Export and hash old flow definitions.
3. Deploy in dependency order.
4. Bind approved connections and environment variables.
5. Execute smoke and recipient tests after each flow.
6. Reconcile in-flight queue rows and delivery receipts.
7. Route endpoints only after the new flow passes.
8. Disable superseded flows without deleting them.

## Rollback
1. Restore the prior endpoint routing or enabled flow.
2. Disable the failed replacement.
3. Reconcile events processed during the cutover window.
4. Cancel or supersede duplicate queue rows.
5. Confirm no duplicate mail was delivered.
6. Record duration, operator and evidence.

## Hypercare
Establish named business and technical owners, message-trace access, daily failure review, emergency recipient correction, rollback authority, and an agreed exit criterion.
