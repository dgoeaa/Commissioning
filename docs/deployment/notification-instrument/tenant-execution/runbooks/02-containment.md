# Runbook 02: Release 0 Containment

> **Superseded by consolidation.** These steps now live in
> [`NOTIFICATION-TENANT-RUNBOOK.md`](../../../NOTIFICATION-TENANT-RUNBOOK.md), which is the only
> document that carries them. This file is kept as the record of what was delivered on
> 2026-09-05. Do not execute from here — it will drift from the runbook and nothing checks it.


1. Correct citizen verification `To` to the validated requesting address.
2. Correct officer OTP `To` to the authenticated requesting officer.
3. Remove all fixed personal-recipient dependencies from required notifications.
4. Remove the empty-recipient and empty-subject mail action.
5. Preserve the deployed single-assignment notification until its replacement passes RN-009 acceptance.
6. Preserve upload and writeback run visibility until structured telemetry passes RN-025 acceptance.
7. Identify one authoritative generate and one authoritative confirm flow for each verification domain.
8. Keep superseded flows disabled but rollback-ready until endpoint routing is proven.
9. Execute recipient, invalid-recipient, connector-failure and duplicate-event tests.
