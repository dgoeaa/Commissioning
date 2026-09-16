# Runbook 01: Baseline and Connections

> **Superseded by consolidation.** These steps now live in
> [`NOTIFICATION-TENANT-RUNBOOK.md`](../../../NOTIFICATION-TENANT-RUNBOOK.md), which is the only
> document that carries them. This file is kept as the record of what was delivered on
> 2026-09-05. Do not execute from here — it will drift from the runbook and nothing checks it.


1. Export the current enabled-flow inventory from the target environment.
2. Record each flow ID, owner, trigger type, solution, connection references and enabled state.
3. Map every configured client endpoint to exactly one active workflow ID using a unique non-destructive correlation ID.
4. Record duplicate, orphaned and unknown active flows. Do not disable them yet.
5. Inspect the Office 365 Outlook connection.
6. Confirm the authenticated account equals the approved service mailbox.
7. Confirm send-as or send-on-behalf permissions through controlled internal and external messages.
8. Test a rejecting mailbox and record the message trace or non-delivery reference.
9. Complete `connection-verification.json` and `tenant-inventory.json`.
10. Run the tenant evidence validator.
