# Runbook 03: Event Carriers and Scheduled Processor

> **Superseded by consolidation.** These steps now live in
> [`NOTIFICATION-TENANT-RUNBOOK.md`](../../../NOTIFICATION-TENANT-RUNBOOK.md), which is the only
> document that carries them. This file is kept as the record of what was delivered on
> 2026-09-05. Do not execute from here — it will drift from the runbook and nothing checks it.


## Immediate carriers
Implement RN-001, RN-008, RN-009, RN-010, RN-011, RN-021, RN-024, RN-037 and RN-038 first.

## Lifecycle carriers
Implement RN-002, RN-003, RN-004, RN-005, RN-017, RN-018, RN-019, RN-020 and RN-036.

## Scheduled processor
Use `deployment/notification-processor/processor-spec.json`. Do not build until recurrence, retry and claim decisions are approved.

The processor must claim an eligible row, re-read authoritative state, validate recipient and mandatory tokens, check idempotency, send through the approved Outlook connection, record the attempt, schedule retry or permanent failure, alert the administrator when required, and write an audit event.
