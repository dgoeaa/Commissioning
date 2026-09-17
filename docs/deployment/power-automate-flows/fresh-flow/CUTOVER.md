# Cutover — ITEM-43

`IP_OTP_VERIFY` (`c5e314c7-68b5-4bdc-8935-0954ef6a256d`) is built and hardened. The deployed
configuration still names `3e201620-f1e8-4c17-a90a-4d95b94a24c2`, which carries all five defects
and is still answering. **Until this is finished the hardening is deployed and unused.**

Five steps. Step 1 must come first: repointing before it would take the platform down.

---

## 1 · Replace the placeholder origin on the new flow

The new flow's response carries `Access-Control-Allow-Origin: https://your-host`. That is a
literal placeholder. A browser refuses a response whose allowed origin does not match the page
asking, so the platform would call the hardened flow and be unable to read a single answer.

**First, read the origin from the platform itself rather than trusting this document.** Open
`https://activityweb.page.gd`, press F12, Console, and run:

```js
location.origin
```

Copy exactly what it prints — scheme included, no trailing slash. The estate records
`https://activityweb.page.gd` in `ALLOWED_ORIGIN_1`, and that record has never been confirmed
against the running page.

Then in Power Automate: open **IP_OTP_VERIFY** → **Edit** → the **Response** action inside
`Scope_Global` → the `Access-Control-Allow-Origin` header → replace `https://your-host` with what
the console printed → **Save**.

> A literal, not the Flow Configuration resolver the other endpoints use. The resolver falls back
> to the first row in the list when the caller's origin is not listed, reads at most 20 rows, and
> proceeds with an empty list if the read fails — so it can hand back a header that is wrong
> rather than refusing. One endpoint mid-cutover is the wrong place to take that on. The resolver
> across all 19 contracts carrying this placeholder is ITEM-8, and stays a separate decision.

## 2 · Copy the new trigger URL

In the same flow, open the **When an HTTP request is received** trigger and copy the **HTTP POST
URL**.

It carries a `sig=` bearer token: holding it is authorisation to invoke the flow. It goes into the
values file in step 3 and nowhere else — not into chat, not into a document, not into a commit.

## 3 · Repoint the platform

Node, not PowerShell — `cmd.exe` or Git Bash is fine.

Edit `%USERPROFILE%\dgo-values.txt` and set that one line:

```
DGO_ENDPOINT_OTP_VERIFY=<the URL from step 2>
```

Then, from the repository:

```
npm run setup -- --values %USERPROFILE%\dgo-values.txt
npm run package
npm run check:package
```

`check:package` reads the built configuration and names the flow each key actually reaches. It must
report `OTP_VERIFY` against **c5e314c7**, not 3e201620. If it still says 3e201620, the values file
was not picked up — nothing has changed yet, and step 4 would test the old flow.

Then upload `dist/dgo-internal-platform/` to `activityweb.page.gd`, replacing what is there, and
hard-reload the platform (Ctrl+F5) so the browser does not serve you the old configuration.

## 4 · Prove it — NOT through the platform

**Read this before testing.** The platform cannot exercise either OTP path today. It sends
`action: "otpGenerate"` / `"otpVerify"` with everything nested under `payload`; both flows switch on
`"generate"` / `"verify"` and read `identifier` and `otp_code` at the top level. Nothing matches, so
the Switch falls through and the flow answers 500. That is ITEM-44, it is **not** caused by this
cutover — the old flow has the same case values — and it fails loudly rather than silently.

So the four tests are direct calls in the flow's own protocol. Any HTTP client; the bodies are below.
Two identities you control, written here as `a@example.gov.ng` and `b@example.gov.ng`.

**Where the code arrives.** Not in the requester's inbox. `Case_Generate` mails to the literal
`dgsregistry@nitda.gov.ng`. Either read it there, or read the row directly in `OTP_Transactions`
(list `9421d473-8906-43b7-a41f-a213046683c1`), newest first — `Title` is the identity, `OTP_Code`
the code, `Attempts` the counter this cutover added.

| | Body | Required result |
| --- | --- | --- |
| 1 | `{"action":"generate","identifier":"a@example.gov.ng"}` then `{"action":"verify","identifier":"b@example.gov.ng","otp_code":"<A's code>"}` | **fails** — this succeeded before the hardening |
| 2 | `{"action":"generate","identifier":"a@example.gov.ng"}` then `{"action":"verify","identifier":"a@example.gov.ng","otp_code":"<A's code>"}` | **succeeds** |
| 3 | `{"action":"verify","identifier":"a@example.gov.ng","otp_code":"000000"}` | **no mail arrives at any address** — one did before |
| 4 | test 3 repeated six times | the sixth returns **429** |

Test 2 is the one that proves the cutover rather than the hardening: it must reach `Case_Verify` on
the new flow. Check the run history on `IP_OTP_VERIFY` to confirm the call landed there and not on
the old flow.

A CORS error only appears when calling from a browser page; from an HTTP client it will not, so step
1's origin fix is verified separately — load the platform and watch for a CORS error in the console
once ITEM-44 is settled.

## 5 · Turn the old flow off — and not delete it

Power Automate → **Web - OTP Verify** (`3e201620-f1e8-4c17-a90a-4d95b94a24c2`) → **Turn off**.

**Off, not deleted.** Deleting destroys the run history and makes the cutover unreversible; turning
it off stops it answering and can be undone in one click.

Confirm it is actually off by calling the **old** URL once. It must refuse. If it still answers,
the bypass and the mail relay are still reachable by anyone holding that URL and the cutover is not
finished.

---

## When this is done

ITEM-43 closes. The trigger-auth audit returns from 40 anonymous triggers to 39.

Two things remain open on the new flow, both recorded rather than papered over: its trigger carries
no request JSON schema — `triggerBody()` reads the body regardless, so it is a contract gap, not a
failure — and the estate-wide rotation of 72 published signed URLs is untouched by any of this.
