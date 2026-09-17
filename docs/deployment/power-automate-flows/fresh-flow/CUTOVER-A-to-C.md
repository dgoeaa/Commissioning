# Cutover, steps A to C — guided

Everything you need is here. Nothing is assumed and nothing is abbreviated. Steps D to F (testing
and turning the old flow off) are in [CUTOVER.md](CUTOVER.md); do not start them until C is clean.

## Preliminaries

**What this is doing.** `IP_OTP_VERIFY` is built and hardened but nothing calls it. The platform
still calls `Web - OTP Verify`, which lets a code issued to one person verify a session claimed for
anyone, and mails a code to any address that asks. A to C makes the hardened flow reachable and
points the platform at it.

**Have these to hand.**

| | |
| --- | --- |
| New flow | `IP_OTP_VERIFY` — `c5e314c7-68b5-4bdc-8935-0954ef6a256d` |
| Old flow | `Web - OTP Verify` — `3e201620-f1e8-4c17-a90a-4d95b94a24c2` |
| Environment | `Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1` |
| Origin | `https://activityweb.page.gd` — confirmed 2026-09-04 from `location.origin` |
| Values file | `%USERPROFILE%\dgo-values.txt` |

**Two things that will go wrong if you do them.**

- Do **not** create a fresh values file containing only the OTP line. `npm run setup` rewrites the
  internal *and* portal configurations from whatever that file holds, so a one-line file blanks the
  portal's seven keys as well. Add a line to the file you already have.
- Do **not** put the new trigger URL anywhere except the values file. It carries a `sig=` token;
  holding it is authorisation to invoke the flow.

**No PowerShell needed.** Step C is Node. `cmd.exe` or Git Bash is fine.

---

## A · Replace the placeholder origin

The flow answers with `Access-Control-Allow-Origin: https://your-host`. That is a literal that was
never filled in. A browser refuses any response whose allowed origin does not match the page that
asked, so until this is changed the platform can call the hardened flow and read nothing back.

**A1.** Go to `https://make.powerautomate.com` and sign in.

**A2.** Top right, check the environment selector reads the environment above. If it does not, click
it and pick that one. A flow you cannot find is almost always the wrong environment.

**A3.** Left sidebar → **My flows**. Find **IP_OTP_VERIFY** in the list.

**A4.** Click its name, then **Edit** (pencil icon, top of the page).

**A5.** The designer opens. You will see the trigger at the top, then twelve **Initialize variable**
actions, then a large collapsed container called **Scope_Global**. Click **Scope_Global** to expand
it.

**A6.** Inside it are five children: `Switch`, `Scope_Finalize_Response_State`, **`Response`**,
`Set_variable_varData` and `Compose__Standard_Response_Revised`. Click **`Response`**.

**A7.** The card opens showing **Status Code**, **Headers** and **Body**. The Headers grid holds
exactly four rows. Confirm you see all four — if you do not, you are on a different card:

```
Access-Control-Allow-Origin     https://your-host
Access-Control-Allow-Methods    GET, POST, OPTIONS
Access-Control-Allow-Headers    Content-Type, X-DGO-Trigger, X-Correlation-ID
Content-Type                    application/json
```

**A8.** In the value box beside `Access-Control-Allow-Origin`, select `https://your-host` and replace
it with exactly:

```
https://activityweb.page.gd
```

No trailing slash. No path. `https`, not `http`. Change nothing else — the other three rows stay as
they are.

**A9.** Click **Save** at the top. Wait for the confirmation. If the designer refuses with a
validation error, do not force it: send me the message.

**A10.** Confirm it stuck. Reload the page, reopen `Scope_Global` → `Response`, and read the header
back. The designer sometimes keeps an unsaved edit in view.

---

## B · Copy the new trigger URL

**B1.** Still in the designer, scroll to the very top card, **When an HTTP request is received**, and
click it.

**B2.** The first field is **HTTP POST URL**, holding a long URL ending in
`...&sig=` followed by about forty characters. Click the **copy** icon at its right.

*If the field is empty or reads "URL will be generated after save":* the flow has not been saved
since the trigger was created. Save it, reload, and come back.

**B3.** It is now on your clipboard. Go straight to C3 and paste it there. Do not paste it into a
chat window, an email, or a document on the way.

---

## C · Point the platform at it

**C1.** Open `cmd.exe` (Start → type `cmd`). Go to the repository — this is the folder you have run
`npm test` in before:

```
cd %USERPROFILE%\Commissioning
```

If that is not where it is, find it: `dir /s /b %USERPROFILE%\package.json` and use the folder that
contains this project's `package.json`.

**C2.** Take the latest work, which includes the register fix that makes C5 pass:

```
git checkout digital-servant-commissioning
git pull origin digital-servant-commissioning
```

**C3.** Open your existing values file:

```
notepad %USERPROFILE%\dgo-values.txt
```

Find the line beginning `DGO_ENDPOINT_OTP_VERIFY=`. If it exists, replace everything after the `=`
with the URL from B2. If it does not exist, add one line at the end:

```
DGO_ENDPOINT_OTP_VERIFY=<paste the URL here>
```

No spaces around the `=`, no quotes, all on one line. **Leave every other line alone.** Save and
close.

**C4.** Write both configurations from it:

```
npm run setup -- --values %USERPROFILE%\dgo-values.txt
```

It prints how many endpoints are wired on each surface and ends with `✅ wrote config/config.local.js`
and `✅ wrote document-portal/config.local.js`. Most internal keys will still be unwired — that is
CFG-1 and it is expected, because the rest of the URLs are the ones rotation has yet to regenerate.

**C5.** Build the deployable package and check what it actually points at:

```
npm run package
npm run check:package
```

`check:package` reads the built configuration and, for each key, names the flow that key really
reaches. This is the step that catches a well-formed URL pasted under the wrong key, which is
invisible afterwards.

**What you must see for OTP_VERIFY:** the id `c5e314c7…`.

- If it names **c5e314c7** — correct. Go to D in [CUTOVER.md](CUTOVER.md).
- If it says **points at the WRONG FLOW … 3e201620** or **43879c51** — the values file did not take,
  or the old URL is still on that line. Stop. Fix C3 and repeat from C4. Testing now would test the
  flow you are replacing.
- If it says **no id on record** — stop and send me the line. That should not happen: the register
  was updated to expect the new flow on 2026-09-04, and this reading would mean it did not pull.

**C6.** Confirm nothing else moved:

```
npm run check:config
```

Every key that was wired before must still be wired. If something that used to be wired is now
empty, you edited more than one line in C3 — restore the file and repeat from C3.

---

Steps D, E and F — upload, the four tests, and turning off the old flow — are in
[CUTOVER.md](CUTOVER.md). **The job is not done until the old flow is off**, because until then the
bypass and the mail relay are still reachable by anyone holding the old URL.
