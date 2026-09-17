# Patching `Web - OTP Verify` — all of it

Five defects, one flow, one sequence. Every command is Windows PowerShell, pasted as written.
Nothing is left open by this document except the one thing that cannot be closed without breaking
the public portal, which is named at the end.

| | Defect | Effect | Closed by |
|---|---|---|---|
| 1 | The code lookup ignored the caller's identity | **Authentication bypass** — a code issued to one person verified anyone | filter binds `Title` |
| 2 | Caller input interpolated raw into the OData filter | **Injection** — a crafted code rewrites the query and strips fix 1 back off | both values escaped |
| 3 | The identity was computed *after* the lookup that needs it | fix 1 would have **failed at runtime** on every call | chain reordered |
| 4 | No attempt cap | unlimited guessing against six digits | `Attempts`, refuse at 5 |
| 5 | `Scope_VERIFY_Complete_No_Trigger` ran on every request | **open mail relay** on the agency's Office 365 connection | scope removed |

Defects 2 and 3 were found while building the patch — 3 by a reference-order check that now runs
on every build and refuses to write a definition where an action reads an output that has not been
produced yet.

**Result: 65 actions before, 59 after. Trigger byte-identical, so the flow keeps its URL, id,
owners, connections and run history.**

---

## Run it in this order

### 1 · The column — done, 2026-09-03

`OTP_Transactions.Attempts` had to exist **before** the flow is saved. Not "or the flow
misbehaves": the designer validates every `item/<Column>` against the connector's operation
definition **at save time** and refuses the whole flow with
`WorkflowOperationParametersExtraParameter`. Save the flow first and you get a rejected save and
the defective flow still live.

It was created on 2026-09-03 by the sanctioned provisioner —
[`2026-09-03-provisioning-apply-run.json`](../sharepoint/evidence/2026-09-03-provisioning-apply-run.json)
records the run: one column created, 102 already present, 0 failed. **Nothing to do here.**

### 2 · Apply the definition — from the browser

`scripts/apply-otp-verify-patch.browser.js` sends the identical PATCH the PowerShell route sends,
from the browser you are already signed in to. No module install, no `Add-PowerAppsAccount`, no
git checkout, no Windows shell.

1. Sign in to `https://make.powerautomate.com` and open **My flows**.
2. `F12` → Console. Paste the whole file. Enter.
3. It asks you to click **My flows** in the left nav so it can borrow the page's own token — it
   reads the `Authorization` header off a request the page itself makes to
   `api.flow.microsoft.com`, so the token is the right one at the right audience by construction,
   and it reuses the exact hostname it saw rather than assuming the global one.
4. It reads the flow and reports what it would change. **`DRY_RUN` is `true`: nothing is written.**
5. Set `DRY_RUN = false` on the line near the top, paste again, click again.

It writes the current definition to `window.otpBefore` before it sends anything — that is the
rollback; `copy(JSON.stringify(window.otpBefore))` puts it on the clipboard. It stops **before**
writing if the live trigger is not the one the patch was built against, because sending then would
mint a new URL and the portal holds the current one. After the write it re-reads the flow from the
tenant and checks the result there rather than trusting the response: seventeen top-level actions,
`Scope_VERIFY_Complete_No_Trigger` gone, `Condition_Attempt_Cap` and `Title eq` present, trigger
unchanged.

It never prints a trigger URL. Those carry a `sig=` bearer token; every value it prints is a count,
a name or a boolean, and a redaction guard refuses any string carrying one.
`node tests/otp-verify-browser-patch.test.mjs` runs the whole script against a stubbed
ProcessSimple API that serves a `sig=`-bearing trigger URL on every read, and asserts none of it
reaches the console. Remove the guard and that test fails — it has been checked both ways.

### 3 · The PowerShell route — unchanged, if you prefer it

Same PATCH, same result. Use it if the browser route is blocked.

```powershell
Install-Module -Name Microsoft.PowerApps.PowerShell -Scope CurrentUser -Force -AllowClobber
Add-PowerAppsAccount

cd $HOME\Commissioning
git fetch origin digital-servant-commissioning
git checkout digital-servant-commissioning
git pull origin digital-servant-commissioning

# dry run — sends nothing, writes your rollback to *.before.json
.\scripts\update-flow-definition.ps1 `
  -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 `
  -FlowId 3e201620-f1e8-4c17-a90a-4d95b94a24c2 `
  -DefinitionPath .\docs\deployment\power-automate-flows\otp-verify-patched-definition.json

# apply
.\scripts\update-flow-definition.ps1 `
  -EnvironmentName Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1 `
  -FlowId 3e201620-f1e8-4c17-a90a-4d95b94a24c2 `
  -DefinitionPath .\docs\deployment\power-automate-flows\otp-verify-patched-definition.json `
  -Apply
```

A malformed definition is refused outright by the service. It does not half-apply.

### 4 · Why not export the package, edit it and import it back

Because it does not work here. Legacy package import refuses to **update** an existing flow and
offers only "save as a new flow". A new flow is a new trigger URL, and the portal's config holds
the old one, so that offer has to be declined. Both routes above PATCH the flow in place instead,
which is what the designer itself does when you press Save.

### 5 · Rollback

Browser route: `window.otpBefore` holds the definition as it was, and the script prints the
one-line PATCH that puts it back. PowerShell route: re-run the script against
`otp-verify-patched-definition.before.json` with `-Apply`.

## Test it — this flow has never been executed

Four calls, two mailboxes you control.

1. Generate for **A**, then verify that code claiming to be **B** → must **fail**. It succeeded before.
2. Generate for **A**, verify as **A** → must **succeed**.
3. `action: verify` with an address in the body and no valid code → **no mail may arrive**. One did before.
4. Six wrong guesses for **A** → the sixth returns **429, "Too many attempts."**

If test 2 fails, the identity your portal sends does not match what `Create_item_OTP_Record` wrote
to `Title`. Roll back with step 6 and send me the request body — that is a mapping question, not a
patch defect.

---

## The one thing this does not close, and why

**The trigger stays `triggerAuthenticationType: All`.** Anyone with the URL reaches this flow.
It cannot move to `Tenant` because the document portal is public: citizens who are not in the
tenant have to be able to request and confirm a code. Closing it would take the portal down.

That is a decision, not an oversight: this flow is deliberately anonymous, so the identity layer
inside it has to be the control — which is what the five fixes above are for.

Estate-wide, rotation is still the first action: 72 signed trigger URLs are published, 39 of 59
triggers are anonymous, and every URL ships to every browser that loads the frontend.
