# Cutover, steps D to F — guided

Continues [CUTOVER-A-to-C.md](CUTOVER-A-to-C.md). Do not start D until C5 named **c5e314c7**.

---

## D · Upload the package

**D1. Back up what is on the host first.** Using your hosting file manager or FTP client, download
the current `config/config.local.js` from `activityweb.page.gd` and keep it somewhere outside the
repository. If a configuration exists on the host that is not in your values file, uploading
destroys it and it is not recoverable from here.

**D2.** Upload the whole of `dist\dgo-internal-platform\` over what is there. Replace, do not merge:
a stale file left behind is a file the platform may still load.

**D3.** Open `https://activityweb.page.gd` and press **Ctrl+F5**. An ordinary reload can serve you
the previous configuration from cache and every test below would then be testing the old one.

**D4.** Confirm the browser has the new configuration. F12 → Console:

```js
window.DGO_CONFIG.endpoints.OTP_VERIFY.match(/workflows\/([0-9a-f]{32})/)[1]
```

It must print `c5e314c768b54bdc89350954ef6a256d`. If it prints something else, or throws, the upload
or the hard reload did not take. Repeat D2 and D3.

---

## E · The four tests

The cutover tests are **§9.0 of
[`PORTAL-TENANT-RUNBOOK.md`](../../PORTAL-TENANT-RUNBOOK.md)**, which is the only document that
carries the step. What the four tests prove, and why they must be run from the platform rather
than from an HTTP client, is below.

**Run it from the platform, not from an HTTP client.** Two things need proving and only a browser on
the platform proves both: the flow's logic, and the origin header you replaced in step A. From an
HTTP client CORS is never exercised, so a wrong origin would go unnoticed until a real user hit it.
The script reads the endpoint out of `window.DGO_CONFIG`, so the trigger URL is never pasted
anywhere, and a run that works is itself proof the deployed configuration carries the new flow.

**It stops before calling anything if the cutover is not in place** — no configuration, an empty
`OTP_VERIFY`, or a URL still pointing at the old flow each halt it with the reason. That was tested
in both directions before it shipped: against a simulated hardened flow it passes 1, 2 and 4;
against a simulated defective one it fails 1 and 4.

| | What it does | Required |
| --- | --- | --- |
| 1 | issues a code for **A**, then verifies it claiming to be **B** | **must not verify** — this succeeded before the hardening |
| 2 | verifies the same code as **A** | **must verify** |
| 3 | a verify call carrying an address and a wrong code | **no mail may arrive anywhere** |
| 4 | six wrong guesses for **B** | the fifth or sixth returns **429** |

**Where to read A's code.** The script pauses and asks you for it. It is **not** mailed to A —
`Case_Generate` sends to the literal `dgsregistry@nitda.gov.ng`. Read it there, or open
`OTP_Transactions` (list `9421d473-8906-43b7-a41f-a213046683c1`) and take the newest row whose
`Title` is A. That row also shows `Attempts`, the counter this cutover added.

**Test 3 is not scored, deliberately.** No browser can see the tenant's outbound mail, so the script
performs the call and tells you which two mailboxes to check rather than grading itself on a
question it cannot ask.

**If the first call returns nothing readable**, that is a CORS refusal. The script says so and
prints this page's origin. Reopen `IP_OTP_VERIFY` → `Scope_Global` → `Response` and confirm
`Access-Control-Allow-Origin` matches that string exactly. Fix the header; do not roll back.

**If test 1 passes and test 2 fails**, the identity is not the problem — the row is. `Case_Generate`
writes `item/Title` from `identifier` with no fallback while the verify lookup resolves identity
through a four-way coalesce, so a differently-named field writes an empty `Title` that verify can
never match. Send me the `OTP_Transactions` row.

---

## F · Turn the old flow off

**Not before E passes.** Until the new flow is proven, the old one is your only working path.

**F1.** Before turning it off, copy the old flow's trigger URL — you need it for F4 and it cannot be
read once the flow is off. `make.powerautomate.com` → **My flows** → **Web - OTP Verify**
(`3e201620-f1e8-4c17-a90a-4d95b94a24c2`) → the **When an HTTP request is received** trigger → copy
the HTTP POST URL. Keep it in the console you are about to use, nowhere else.

**F2.** On the flow's detail page, click **Turn off**.

**F3. Off, not deleted.** Deleting destroys the run history — the only record of what that flow did
while it was reachable — and makes the cutover unreversible. Turning it off is one click to undo.

**F4.** Prove it. In the console:

```js
await fetch('<the old URL from F1>', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ action: 'verify', identifier: 'x@example.com', otp_code: '000000' })
}).then(r => r.status).catch(e => 'blocked: ' + e.message)
```

A turned-off flow answers **404**. If it answers **200**, or anything that looks like a result, it
is still running: the authentication bypass and the open mail relay are still reachable by anyone
holding that URL, and the cutover is not finished.

**F5.** Tell me the four test verdicts and the F4 status code. ITEM-43 closes on those, and the
trigger-auth audit returns from 40 anonymous triggers to 39.

---

## What is still open afterwards

**ITEM-44.** The platform cannot drive either OTP path: it sends `action: "otpGenerate"` nested
under `payload`; the flows switch on `"generate"` and read `identifier` at the top level. That is why
these tests speak the flow's protocol directly. The cutover does not cause it and does not fix it.

**Rotation.** 72 signed trigger URLs are published across the estate and 39 of 59 triggers are
anonymous. This cutover replaced one flow; it did not close the front door.
