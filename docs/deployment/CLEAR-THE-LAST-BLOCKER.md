# Commission the estate

**Assumes nothing.** Every command says where to type it and what you should see back. If a
step's output does not match, stop there and read that step's "if it doesn't" — do not continue.

> **On an Android phone?** Read
> [CLEAR-THE-LAST-BLOCKER-TERMUX.md](./CLEAR-THE-LAST-BLOCKER-TERMUX.md) instead. It replaces this
> document rather than supplementing it — the whole job runs in Termux, with no `npm install` and
> no laptop.

Time: about twenty minutes, most of it in Power Automate.

---

## What changed, and why this is now much shorter

`docs/reference/endpoint-register.json` is exported from the tenant. It names, for all 25
endpoint keys, the workflow each one calls and that workflow's **complete trigger URL with only
the signature removed** — host, routing segment, workflow id, path, every other parameter.

Two consequences, and both shorten the job:

1. **The ids in this repository were wrong.** Reconciled against the register, **25 of 25 keys
   pointed at a different workflow.** Not one agreed. Anything you may have read here before
   about which flow serves which key is superseded; `npm run reconcile` regenerates it.
2. **You no longer paste URLs.** `npm run values:template` writes every URL out in full, each
   line ending at a bare `sig=`. You paste the 43-character signature and nothing else. The
   commonest failure in commissioning — a URL truncated on copy, which stays valid-looking and
   surfaces as a 401 days later — is now impossible, because there is nothing left to truncate.

**`npm run recover` is retired** and refuses to run. It scraped URLs out of this repository's
reference corpus; those signatures were revoked by the rotation, and the workflows behind them
are superseded. It produced a config that looked complete and answered 401 on every call.

---

## §0 · Two things people get wrong before starting

### 0.1 There is one values file, and it does not exist yet

| | What it is | Who creates it | Where |
|---|---|---|---|
| `~/dgo-values.txt` | **The values file.** 25 `KEY=URL` lines. | **`npm run values:template`** writes it, pre-filled. You add the signatures. | Your home folder, outside the repository. Deleted at the end. |
| `config/config.local.js` | Internal platform config | `npm run setup` writes it | Inside the repository. Git-ignored. |
| `document-portal/config.local.js` | Public portal config | `npm run setup` writes it | Inside the repository. Git-ignored. |

One file is generated for you and completed by you. `setup` reads it and writes the other two.
You never edit those two by hand.

`~` means your home folder — `/home/yourname`, `/Users/yourname`, or `C:\Users\yourname` under
Git Bash.

### 0.2 Do this on your own machine, not in a Claude session

A signature is a bearer credential: anyone holding it can invoke the flow.

- **Never paste one into a chat, a ticket, an email, or a notes app.** All keep it permanently,
  and deleting the message revokes nothing. Only regenerating the trigger does.
- **Not inside a Claude Code container.** It is discarded when the session ends, and
  `config.local.js` is git-ignored, so nothing wired there survives or can be committed.

The right machine is the workstation you will run `npm run package` from.

---

## §1 · Get a terminal

| System | How |
|---|---|
| **Windows** | Install **Git for Windows** (<https://git-scm.com/download/win>), then Start → `Git Bash`. Not PowerShell or CMD. |
| **macOS** | ⌘+Space → `Terminal`. |
| **Linux** | Ctrl+Alt+T. |

```bash
git --version
node --version
```

Expected: any `git version 2.x`, and Node **22 or higher**.

**If it doesn't:** install Git from <https://git-scm.com/downloads> or Node 22 LTS from
<https://nodejs.org>, close the terminal, open a new one, check again. Node 20 and below fail
with a syntax error, not a version message.

---

## §2 · Get the repository

```bash
cd ~
git clone https://github.com/dgoeaa/Commissioning.git commissioning
cd ~/commissioning
git checkout digital-servant-commissioning
```

Already have it? `cd ~/commissioning && git checkout digital-servant-commissioning && git pull`

Confirm:

```bash
pwd
git branch --show-current
```

Expected: a path ending in `commissioning`, and `digital-servant-commissioning`.

**Every remaining command is typed in this terminal, in this folder.**

**You do not need `npm install`.** Everything here runs on Node's own built-in libraries —
verified on a clean clone with no `node_modules`. You need it only to serve the site or run the
test suites.

**Confirm the ids are reconciled:**

```bash
npm run reconcile
```

Expected: `25 keys`, `20 distinct workflows`, `25/25 carry a complete URL template`, and
`✅ wrote docs/reference/endpoint-workflow-ids.json`. If it reports keys moving to different
workflows, that is the register correcting the repository — expected, not an error.

---

## §3 · Generate the values file

```bash
umask 077
npm run values:template ~/dgo-values.txt
```

`umask 077` makes it readable by your account alone. Expected:

```
✅ wrote /home/you/dgo-values.txt
   25 keys — 18 internal, 7 portal
   25 arrive with the URL already complete; add the signature after each 'sig='.
```

Open it:

| | Command |
|---|---|
| Simplest | `nano ~/dgo-values.txt` |
| VS Code | `code ~/dgo-values.txt` |
| macOS | `open -e ~/dgo-values.txt` |
| Git Bash | `notepad ~/dgo-values.txt` |

Each endpoint appears under a heading naming its flow and workflow id, and its line already ends
`&sig=`. **Your only edit is to type the signature immediately after that `=`.** Do not touch the
rest of the line — the host, routing segment and workflow id are already correct and reconciled
against the tenant.

Where a heading says `2 keys, ONE url`, both lines take the **same** signature.

---

## §4 · Copy 25 signatures out of Power Automate

> **There is a faster route, and it is deliberately not written here.** The same harvest runs as a
> single devtools-console paste that reads every trigger URL from the API the portal itself calls
> and writes the values file complete — twenty visits become one. It needs the same permission as
> the visits below and no more: own or co-own each flow, no tenant admin, no app registration. It
> regenerates nothing.
>
> **§3.2 of [`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md) owns that step.** Go there for
> it. This document does not restate it, because one document owns each executable instruction and
> `npm run test:singlesource` fails the build when two carry the same one — a precedence rule is
> not a single source of truth, it is a tie-breaker for a conflict that should not be possible.
> On a phone, §4a of [`CLEAR-THE-LAST-BLOCKER-TERMUX.md`](./CLEAR-THE-LAST-BLOCKER-TERMUX.md) is
> the same harvest as a bookmark.
>
> Come back here at **§5** with the file, either way. The manual route below always works and needs
> nothing but a browser, which is why it is the one written out in full.

Sign in to Power Automate with an account that can **edit** flows in environment
`Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1`.

For each heading in the values file:

1. Open the flow by the workflow id in the heading:
   `https://make.powerautomate.com/environments/Default-ca6a4b3f-9123-49bc-bcb9-27085ebbf1a1/flows/<id>/details`
2. **Edit** → click **When an HTTP request is received** to expand it.
3. Find **HTTP POST URL** (newer builds label it **HTTP URL**).
4. Copy **only the part after `sig=`** — the last parameter, 43 characters, to the end of the
   string.
5. Paste it at the end of the matching line in `~/dgo-values.txt`. Directly — not via a ticket,
   chat, or note.
6. **Do not press Regenerate.** For these 25 keys the rotation is behind you. Regenerating now
   revokes the URL a deployed surface is using and means coming back to copy a new one.

Twenty flows serve the 25 keys, so this is twenty visits, not twenty-five.

**That claim has a scope.** `npm run rotation` reports ROTATED because all 25 keys resolve to
workflows other than the ones the published signatures belong to; it states plainly that it
cannot establish the same for a flow outside the 25. The 39-flow worklist is §3 of
[`PORTAL-TENANT-RUNBOOK.md`](./PORTAL-TENANT-RUNBOOK.md), which is why that document treats the
rotation as work still to do.

---

## §5 · Check before writing anything

```bash
npm run check:values -- ~/dgo-values.txt
```

Prints **no URL, no host and no signature** — only shapes — so its output is safe to show anyone.

Expected:

```
✅ 25 value(s), all with a complete 43-character signature.
```

**43 is exact, not approximate.** A signature is base64url of an HMAC-SHA256: 32 bytes, 43
characters unpadded. Any other number is a defect in the paste.

| What you see | What it means |
|---|---|
| `the URL is complete but its signature is blank` | That key has not been filled in yet. |
| `sig is N characters, not 43` — N smaller | Truncated on copy. |
| `sig is N characters, not 43` — N larger | Something extra got pasted after it. |
| `no sig= parameter` | The line was overwritten with a truncated URL. Regenerate the template and redo that key. |
| `NOT A URL` | A smart quote, a space around the `=`, or a wrapped line. |

---

## §6 · Write both config files

```bash
npm run setup -- --values ~/dgo-values.txt --force
```

The standalone `--` is not a typo: it tells npm the flags belong to the script.

**`--force` is required** — `setup` will not overwrite an existing `config.local.js` without it,
and refuses outright (exit 2) rather than silently discarding your values.

**`--recover` is not used and is retired.** The values file carries all 25 keys, so there is
nothing for a fallback to supply.

Expected:

```
  Internal runtime  (config/config.local.js)
    18/18 endpoints wired
  Public portal     (document-portal/config.local.js)
    7/7 endpoints wired
  ✅ wrote config/config.local.js
  ✅ wrote document-portal/config.local.js
```

---

## §7 · Confirm

```bash
npm run check:config
npm run check:config:portal
```

Both must end **`READY. Every key is present, well-formed, and points at the flow it should.`**

That last clause is the reconciliation doing its job: each URL's workflow id is checked against
the register. `points at the WRONG FLOW` means a signature went on the wrong line.

```bash
npm run commission
```

Expected:

```
  No automated blocker for pilot usage.
```

Warnings and manuals remain and are meant to. The five manuals need a person, not a script.

---

## §8 · Afterwards

**Delete the values file** once §6 of `PORTAL-TENANT-RUNBOOK.md` confirms the endpoints answer:

```bash
shred -u ~/dgo-values.txt     # Linux
rm -P ~/dgo-values.txt        # macOS
rm ~/dgo-values.txt           # Git Bash
```

**Check nothing was staged.** The config files are git-ignored, so this prints nothing:

```bash
git status --porcelain | grep -i config.local
```

If it prints anything, stop and do not commit.

---

## §8a · Is your terminal transcript safe to paste?

**Every command in this runbook is safe.** Measured: a canary signature was wired into a real
config and every command's output searched for it.

**Safe** — `npm run reconcile`, `values:template`, `check:values`, `setup`, `check:config`,
`check:config:portal`, `commission`, `verify:endpoints`, and `git status` / `diff` / `log` (the
config files are git-ignored, so they appear in no diff).

**Not safe** — `cat ~/dgo-values.txt`, the editor's screen while the file is open, and your shell
history if you ever typed a signature as part of a command.

**`verify:endpoints` and third-party text.** It prints the first 160 characters of any non-JSON
response so a gateway 403 is diagnosable. That body is written by whatever answered — a proxy, a
WAF — and echoing the request line back is what those do by default; the request line is the
signed URL. Since 2026-09-04 that snippet is redacted at the point of capture, and
`npm run test:verification` fails if the redaction is removed. On an older checkout, treat its
output as unsafe to paste.

**If you have already pasted a signature somewhere.** Deleting the message does nothing — the
credential is not in the message, it *is* the message. Regenerate that flow's trigger in Power
Automate, then redo §4 and §6 for that key.
