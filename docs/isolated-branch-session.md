# Running a Claude session locked to one branch

Three layers, weakest to strongest. Use all three — the first two describe what
Claude *should* do; only the third controls what it *can* do.

## 1. Session creation — the repo boundary

The repository boundary is set when the session is created. Nothing inside a
repo can widen or narrow it.

- Create the environment with **only** `dgoeaa/Commissioning` in its allowed
  repositories. A repo that is not attached cannot be read, searched, or cloned:
  the request is refused before Claude sees a result.
- Start the session **from the branch you want worked on**, so the container's
  clone lands with that branch checked out.
- Start a **new session per branch**. A session carries its own transcript, and
  starting fresh is the only reliable way to guarantee no earlier conversation
  leaks in. Nothing added to a repo can make a running session unsee what it has
  already read.

## 2. `CLAUDE.md` — the stated rule

`CLAUDE.md` is loaded into context automatically and states the scope in plain
terms. This is instruction, not enforcement; a model can drift past it. It earns
its place by making denials *comprehensible* — Claude understands why the hook
refused instead of trying to route around an inexplicable error.

## 3. `.claude/hooks/branch_lock.py` — the enforcement

A `PreToolUse` hook runs before **every** tool call and denies out-of-scope ones.
The model gets no vote.

| Attempt | Result |
|---|---|
| `git checkout main`, `git switch -c new` | denied |
| `git merge` / `rebase` / `cherry-pick` from another branch | denied |
| `git log main`, `git show main:file`, `git diff main` | denied |
| a bare SHA | allowed only if it is an ancestor of `HEAD` |
| bare `git fetch`, or `--all` / `--mirror` / `--tags` / `--prune` | denied — use `git fetch origin <branch>` |
| `git push` to any ref but the locked branch | denied |
| `git clone`, `git remote`, `git worktree`, `git submodule` | denied |
| `git -C /elsewhere`, `--git-dir=`, `--work-tree=` | denied |
| `gh`, `hub`, `glab`, `svn`, `hg` | denied |
| `Read`/`Edit`/`Write`/`Grep`/`Glob` outside the working tree | denied |
| reading `.git/` internals directly | denied |
| `mcp__github__*` against another owner/repo, or `ref`/`base`/`head` on another branch | denied |
| `WebFetch`/`WebSearch`/`curl`/`wget`/`ssh`/`rsync` | denied unless `allow_web: true` |
| `base64 -d \| sh` and other obfuscated execution | denied |
| writing to `.claude/branch-lock.json`, `.claude/settings.json`, `.claude/hooks/**` | denied |
| running `scripts/lock-branch.sh` from inside a session | denied |

`SessionStart` and `UserPromptSubmit` hooks re-state the scope every turn, and
`SessionStart` warns loudly if the checked-out branch is not the locked one.

### What is guarded, and what is not

The guard protects the **mechanism** — the lock file, the hook, and
`settings.json`. It deliberately does **not** protect `CLAUDE.md`: that file is
advisory, a session rewriting it changes nothing about what is permitted, and a
repo needs an editable `CLAUDE.md`.

The guard also scans heredoc bodies and script files handed to an interpreter,
because `python3 -c "…"` and `python3 script.py` are the obvious ways to write a
file without naming it on the command line.

### Changing the scope

A session cannot loosen its own leash. To change the scope, either:

```bash
scripts/lock-branch.sh my/feature-branch     # run OUTSIDE a Claude session
```

or set `BRANCH_LOCK_ALLOW_GUARD_EDITS=1` in the environment's variables — which
only someone with access to the environment config can do.

```json
{
  "repo": "dgoeaa/Commissioning",
  "branch": "my/feature-branch",
  "allow_web": false,
  "allow_subagents": true,
  "extra_read_roots": []
}
```

`extra_read_roots` is an explicit allow-list for a path outside the tree (a
dataset mount, say). Leave it empty for a strict lock.

### Verifying the lock is live — do this before trusting it

Project hooks are read at session start, so a session that was already running
when the hook landed is **not** protected. In a fresh session:

1. Run `/hooks` and confirm `branch_lock.py` is listed for `PreToolUse`.
2. Probe it: ask Claude to run `git log main --oneline -1`. It must come back
   denied with a `BRANCH LOCK:` reason.

If the probe succeeds instead of failing, the hook is not active. Do not assume
it is working because the file exists.

Hook registration happens at session start. If `.claude/settings.json` is
removed or replaced mid-session, hooks stay unregistered for the rest of that
session even after the file comes back — so a session that rebuilt the guard is
not itself protected by it. (A correctly-started session cannot get into that
state: deleting the guard, including by `rm -rf .claude`, is denied.)

### The test matrix

`scripts/test_branch_lock.py` drives the hook directly with synthetic
`PreToolUse` payloads and asserts deny/allow across ~46 cases — branch
switching, cross-branch reads, refspecs, `gh`, paths outside the tree, guard
self-protection, GitHub MCP owner/repo/ref checks, and the false-positive cases
that matter (`2>&1`, heredoc bodies, editing `CLAUDE.md`).

```bash
python3 scripts/test_branch_lock.py      # expect "0 problem(s)"
```

Run it **outside** a locked session. From inside one it is denied — the script
necessarily names guard paths, and the hook cannot tell a test from an attack.

## What this does not do

- It constrains **tool calls in one session**. It does not constrain a human, CI,
  another session, or anything running outside Claude Code.
- It is a **drift guard, not a sandbox**. It reliably stops the accidental and
  casual scope escape that makes a session wander onto another branch. It is not
  a security boundary against deliberate evasion: any interpreter can assemble a
  path from fragments at runtime, and no command-line scan can catch that. The
  real boundaries are the repo scope set at session creation, and the fact that
  every guard file is committed — so any change to the leash shows up in the
  branch diff you review.
- A user-level `~/.claude/CLAUDE.md` is loaded by the harness before hooks run.
  Keep it free of other-project content, or it leaks into every session.
- Subagents inherit these hooks, but they also inherit whatever prompt they are
  given. Set `"allow_subagents": false` for the tightest surface.
- Fully strict means you cannot pull the base branch in either. Integrating
  `main` is a deliberate unlock. That is the trade-off, by design.

## Known rough edges

- `git stash`, `git bisect`, and `git tag` take subcommand words that look like
  refs; they are allowed through unless the argument looks like a SHA. Tighten
  `GIT_REF_ARGS` handling if you rely on them heavily.
- The absolute-path check allow-lists system prefixes (`/usr`, `/etc`, `/proc`,
  …) so ordinary tooling works. A file placed under one of those by other means
  is readable.
