# Whitespace — Addendum: Submission Processing & File-Upload Security

> **Read this alongside `WHITES~2.md`.** That document is the authoritative project brief produced earlier in the same Cowork session. This addendum captures additional decisions made after the brief was written, on the topics of (a) when to process file submissions and (b) how to defend against virus-laden uploads. Everything here either refines or extends sections of the main brief — pointers in §6.

---

## 0. Context for Claude Code

Tantyo asked two follow-up questions after the main brief:

1. Whether restricting file uploads to working hours saves tokens, OR whether scheduling deferred processing during off-hours is better. He explicitly said: **don't lock in exact times — keep the concept in store, decide actual schedule when working in Claude Code on his TUF home laptop WSL.**
2. What security measures defend against teammates unknowingly uploading files containing viruses, AND what the cons / tradeoffs are for each measure.

The user's working rules from the main brief still apply: identify gaps before acting, re-check 2-3 times before delivering.

---

## 1. Submission processing schedule (concept stored, exact times TBD)

### The misconception worth surfacing

Tantyo asked whether restricting **when colleagues can upload** would save tokens. It would not. Tokens are consumed by **processing**, not by receiving. A PDF sitting in `/submissions/` costs zero tokens. The cost happens when the agent runs extraction + bilingual generation. Whether the file arrived at 10:00 or 22:00, the same processing must happen eventually, and the same tokens get spent.

### The two distinct goals

**(A) Saving total tokens** — only achievable through engineering choices, not scheduling. The actual levers:
- Use Haiku for cheap operations (categorize, dedup, glossary apply, basic translate). Reserve Sonnet for synthesis and authenticity reasoning. Roughly 70% cost reduction on most subtasks.
- Pre-filter aggressively at fetch time so fewer items reach the LLM at all.
- Cache embeddings + already-seen URLs in the SQLite cache so dedup is local, not LLM-mediated.
- Batch by category — one prompt processes all of a category's candidates at once instead of N separate prompts.
- The score-5 audit-only path already in §13 of the main brief.

**(B) Spreading load to avoid rate-limit collisions** — what Tantyo's second framing actually achieves.

Claude Code subscriptions have rolling per-window caps (Pro and Max both meter usage in 5-hour windows). If the morning news run + a flurry of submissions all land in the same 5h bucket, the cap can be hit and things fail mid-pipeline. Deferring submission processing to off-hours **does not change total token cost** but distributes it across multiple windows so no single window saturates.

### Decision (concept only — exact times deferred to Claude Code phase)

- Web form accepts uploads **24/7**. Files go into `/submissions/` immediately. Do **not** restrict upload windows — colleagues should be able to upload when a file is in front of them.
- Agent processing happens on a **separate schedule** from the morning news fetch.
- Conceptual schedule (placeholder values — Tantyo to finalize in Claude Code):
  - Morning news fetch + publish + email digest: ~07:00 local.
  - Submission processing pass: off-peak, e.g., ~02:00 local.
  - Optional mid-day pass for time-sensitive uploads if queue is full.
- The schedule lives in `agent/config.yaml` and is trivially adjustable.

This **updates §14 of the main brief** by separating the news-fetch run from the submission-processing run. The morning run no longer touches `/submissions/` — that becomes a job for the deferred pass.

---

## 2. File-upload security — eight defensive layers

This is the answer to "what if a teammate unknowingly uploads a virus." Layered defense; each layer addresses a different attack vector. Cons listed honestly per layer.

### Layer 1 — ClamAV virus scanning

**What it does.** Free open-source antivirus on Linux. Scans files on submission receipt before any other processing. Infected files are never extracted, get quarantined to `/var/quarantine/whitespace/` (root-owned, mode 700), and Tantyo is notified by email. Install: `apt install clamav clamav-daemon`. Update definitions daily via `freshclam`.

**Cons.**

- **Memory footprint.** The `clamd` daemon idles at ~1.5-2 GB RAM with definitions loaded. On the 16 GB CX33 shared with personal AI, this is meaningful. **Mitigation**: use on-demand `clamscan` instead of `clamd` daemon. Slower per scan (~3-5s startup) but zero idle footprint. At ~12-22 uploads/week, on-demand wins.
- **Signature-based detection** catches well-known malware but is roughly 50-70% effective against modern threats. Defense against dumb attacks, not sophisticated ones.
- **Daily definition updates** pull ~150-200 MB of bandwidth and occasionally fail silently — needs monitoring.
- **False positives** on innocent files (heuristics flagging benign macros). Manual-override path required.
- **ClamAV itself has had CVEs** (parser bugs in its own code). Rare but a security tool that becomes an attack vector is the worst outcome. Keep it updated.

### Layer 2 — Magic byte / file-type validation

**What it does.** Don't trust the `.pdf` extension. Use `python-magic` (libmagic wrapper) to verify the actual file signature matches what the upload form claimed. A `.pdf` whose magic bytes are PE32 executable gets rejected immediately. Same for PPTX/DOCX (must match Office Open XML signatures).

**Cons.**

- **Polyglot files** exist — a file simultaneously valid as PDF and HTML, for example. Magic byte check looks at file start and might pass while malicious content lives later. Single-check fooled; defense-in-depth still catches it.
- **Some legitimate files have unusual headers** (older Office variants, non-standard PDF generators) and trip the validator. Low frequency; needs an exception path.
- **libmagic occasionally lags** behind new file formats. Update annually.

### Layer 3 — oletools for Office documents (PPTX/DOCX/RTF)

**What it does.** Office files can carry macros, embedded OLE objects, external relationships. Use the `oletools` Python package: `olevba` flags suspicious macros, `oleid` flags embedded executables, `rtfobj` for RTF. Files with active macros or embedded executables → quarantine. Optionally strip macros before extraction even if "safe" (defense in depth).

**Cons. This is the highest-friction layer for normal use.**

- **Many corporate decks legitimately contain macros** (auto-formatting, data lookups, dynamic content). Strict `oletools` rules will quarantine a meaningful fraction of submitted PPTX/DOCX files. Empirically expect 5-15% false positives in corporate workflows.
- **Newer attacks bypass it.** Formula injection (`=cmd|...` in Excel cells), template injection, external relationship abuse — these don't use traditional VBA macros and slip past `olevba`.
- **Stripping macros breaks live functionality.** Auto-updating charts and dynamic content lose their behavior. Team needs to know that this is happening.
- **Maintenance.** `oletools` is actively developed but needs ~quarterly updates to keep up with new Office attack patterns.

### Layer 4 — Sandboxed extraction

**What it does.** Even after scanning, parser CVEs exist (PDF and Office parsers have a long history of exploit chains). Run extraction in a confined environment so a parser exploit can't damage the host.

Two implementation options:
- **`systemd-run --scope`** with `ProtectSystem=strict`, `ProtectHome=yes`, `PrivateNetwork=yes`, `NoNewPrivileges=yes`, `PrivateTmp=yes`. No Docker needed. **Recommended.**
- **Docker** with `--network=none`, no host filesystem mount except read-only input + write-only output, runs as non-root, CPU/memory limits.

**Cons.**

- **Complexity tax.** ~100 lines of wrapper code plus environment setup. Debugging extraction failures becomes harder because errors propagate through the sandbox boundary.
- **Performance overhead** ~10-20% per extraction. Negligible at this volume.
- **OOM kills on legitimate large files.** A 500-page PDF with high-res images can need >2 GB during extraction. If `MemoryMax=1G`, the legit file fails.
- **Docker option specifically** adds ~80 MB idle daemon footprint, ~500 MB image storage, and image-update churn. systemd-run avoids these.
- **Configuration drift risk.** If a debug session relaxes `PrivateNetwork=yes` and forgets to restore, the sandbox is silently weaker.

### Layer 5 — Network isolation during extraction

**What it does.** The extraction subprocess has zero internet access. The main agent fetches URLs and writes files; the extraction child only sees the file and produces text + image outputs. This single rule defeats most exfiltration paths even if a parser is exploited.

**Cons.**

- **Some legitimate files break.** PDFs with linked external resources (ICC profiles, external fonts, remote images), PPTX with linked OneDrive/SharePoint media — these will render incompletely or fail. Extracted KB post may be missing those elements.
- **Diagnostics get harder.** Cannot ship traces or logs to a remote endpoint from inside the sandbox.
- **Subtle output differences.** A "no-network" extraction may produce slightly different markdown than a "with-network" one.

For most uploads (internal vendor PDFs, tech specs, conference decks), none of this matters. For files with cloud-linked media, expect minor degradation.

### Layer 6 — Non-root execution + minimal capabilities

**What it does.** Already established in §28 of the main brief. Agent runs as `whitespace` Linux user with no sudo, no SSH keys, no access to personal-AI files. Worst case from a parser exploit: `whitespace` user is compromised. Blast radius = agent's own files. Hetzner snapshot + Git history = full recovery.

**Cons.**

- **Permissions footguns.** Wrong file ownership and the agent fails on next run with cryptic errors. Backup/restore must use `rsync -a`, not `cp`.
- **Cross-user collaboration is harder.** If personal AI legitimately needs to read a Whitespace file, you'd add it to the `whitespace` group or use ACLs. Friction by design.
- **Onboarding documentation must be precise** about permissions.

### Layer 7 — Logging and audit

**What it does.** Every upload logged to `feedback/uploads.jsonl` with: GitHub identity of uploader, timestamp, original filename, SHA-256 hash, virus-scan result, type-validation result, extraction status. Rotated monthly. Stored on CX33 (gitignored to avoid leaking metadata to public history if repo ever changes visibility).

**Cons.**

- **Privacy double-edge.** Logs useful for incident response are also a record of who uploaded what and when. Becomes sensitive itself if confidential mode is later enabled.
- **Logs become a target.** A compromised log = forensic trail destroyed. Need separate retention with restricted permissions.
- **Disk usage is trivial here** (~1 MB/year at this volume) — not a real con.
- **Log rotation and pruning** is a small ongoing chore.

### Layer 8 — SHA-256 in post frontmatter

**What it does.** When the original PDF/PPTX is committed to `/content/uploads/`, store its SHA-256 in the post's frontmatter. Anyone downloading the original from the website can verify it hasn't been tampered with in transit.

**Cons.**

- **Frontmatter clutter** — minor.
- **File-replacement workflow** complications. When an uploader replaces a file with a corrected version, the hash changes; need a defined update path.
- **Theatrical security** in practice. Most teammates will never actually verify a hash. So you pay setup cost for protection nobody uses unless an incident forces them to.

---

## 3. Cumulative cons (the part that actually matters)

- **Code complexity.** All eight layers together add ~300-500 lines of Python plus systemd unit configuration. Manageable but real.
- **Failure modes multiply.** With eight layers, "submission processing failed" can mean any of: virus scan timed out, magic byte mismatch, oletools quarantine, sandbox OOM, network isolation broke a remote-resource fetch, permission error, log disk full, or an actual virus. Diagnostic noise increases. Need a single dashboard / log view that surfaces the actual cause so debugging stays sane.
- **False-positive rate on Office files.** Layer 3 will quarantine some percentage of legitimate corporate PPTX/DOCX. Tantyo will need a clean manual-override workflow, and the team needs to know that "uploaded but not appearing on the site for a few hours" sometimes means "Tantyo is reviewing it."
- **Maintenance overhead.** Roughly 4-8 hours/year keeping ClamAV definitions, oletools, libmagic, and the sandbox config up to date.
- **Single-point-of-failure shifts.** Layer redundancy is good against attackers, but each layer is its own potential bug. Trade "single guard, single failure point" for "many guards, many possible jams."

---

## 4. Recommended v1 vs v2 split

For 11 trusted internal users with low upload volume, the cost-benefit profile favors a phased rollout.

### Whitespace v1 (ship with these)

- **Layer 1 — ClamAV in on-demand mode** (no daemon; saves RAM). Covers known malware.
- **Layer 2 — Magic byte validation.** Cheap, high value.
- **Layer 6 — Non-root agent.** Already in main brief §28; just confirm it's enforced.
- **Layer 7 — Logging and audit.** Forensic trail for the bad-day scenario.

These four cover the realistic threat model for trusted internal users.

### Whitespace v2 (add once v1 is stable)

- **Layer 3 — oletools** for Office files. Defer until you have observability to triage false positives, plus a manual-override workflow built.
- **Layer 4 — Sandboxed extraction** via `systemd-run`. Adds resilience against parser CVEs.
- **Layer 5 — Network isolation during extraction.** Pairs with Layer 4. Together they're insurance against unknown parser exploits.

### Optional / nice-to-have

- **Layer 8 — SHA-256 in frontmatter.** Add only if a teammate ever asks for it. Zero protection at-rest in repo, modest UX clutter.

This phasing gives Tantyo working defenses on day one without paying the full complexity tax up front, then layers in deeper protection once the system has real users and real failure data to learn from.

---

## 5. Manual-override workflow (must exist for v2 layers)

Critical detail for Layer 3 specifically: when `oletools` quarantines a file, there must be a fast path for Tantyo to:

1. Receive an email notification: "Submission `<id>` from `<user>` quarantined: macro detected by olevba (rule: VBA Auto_Open)."
2. View the file (in a separate viewer, ideally a sandboxed PDF/Office reader on his home laptop).
3. Confirm it's safe.
4. Run a single command (e.g., `whitespace approve-submission <id>`) that re-queues the file for processing with the oletools check skipped for this specific submission.
5. The override decision is logged.

Without this workflow, Layer 3 turns into "Tantyo fixes oletools false positives by hand-editing files," which scales badly and erodes the security model.

---

## 6. How this addendum updates the main brief

- **§14 (daily run pipeline)** — split into two scheduled passes: morning news fetch (existing) and off-hours submission processing (new). Exact times still TBD, set in `agent/config.yaml`.
- **§19 (submit-doc workflow)** — no UX change. Uploads still 24/7. The addendum only changes when the agent processes them.
- **§28 (cybersecurity practices)** — extend with the eight-layer file-upload defense model above. The new model supersedes any prior single-layer mention.
- **§35 (phased build roadmap)** — Phase 4 (submit doc + extraction, Days 14-18) now includes Layers 1, 2, 6, 7. Layers 3, 4, 5 move to a new Phase 4.5 or get deferred to post-v1 polish.

---

## 7. Open questions raised by this addendum

These are *additional* to the eleven open questions already listed in §36 of the main brief.

12. **Exact submission processing schedule.** Tantyo to decide in Claude Code. Default suggestion: 02:00 local for primary processing; optional 12:00 mid-day pass.
13. **v1 vs v2 layer prioritization.** Confirm the split above (Layers 1, 2, 6, 7 in v1; Layers 3, 4, 5 in v2; Layer 8 optional). Or override.
14. **Manual-override workflow form.** CLI command on the CX33 (`whitespace approve-submission <id>`)? Email-reply trigger? Web admin page? Pick one before Layer 3 ships.
15. **Quarantine retention policy.** How long do quarantined files stay in `/var/quarantine/whitespace/`? Default suggestion: 30 days, then auto-delete with logged hash retained.
16. **ClamAV mode.** Confirm on-demand `clamscan` (recommended) vs `clamd` daemon. Tantyo to decide based on whether personal AI has RAM headroom.

---

## End of addendum

When working in Claude Code, read both files in order:
1. `whitespace-project-brief.md` — full project brief.
2. `whitespace-addendum-submission-and-security.md` — this file.

Tantyo's working rules apply throughout: identify gaps, ask before guessing, re-check 2-3 times before delivering.
