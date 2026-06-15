# Whitespace — Project Brief & Build Spec

> **Handoff document.** This was produced in a Cowork brainstorming session with the user (Tantyo) on his work laptop. It is intended to be loaded as context into Claude Code running in WSL on his home laptop, so Claude Code can take over the build with full scope. Read this entire file before asking questions; most "obvious" questions have already been answered below. The "Open Questions" section at the end lists what still needs Tantyo's input.

---

## 0. How Claude Code should use this document

1. Read the whole file first. Do not start scaffolding code based on partial reading.
2. Honor the user's working rules in §3 throughout the build.
3. The user is mostly running Whitespace from one of two machines:
   - **Home laptop WSL** — where you (Claude Code) will live and do the building.
   - **Hetzner CX33 VPS** — where the production agent will eventually run 24/7. (Same VPS hosts his personal AI; resource-share considerations in §33.)
4. The user's other 10 teammates are mostly non-technical and only ever interact with the website.
5. There are unresolved questions in §36. Don't guess on those — ask Tantyo before committing to a decision.
6. Tantyo's working rules require you to identify information gaps before acting and re-check work 2-3 times before delivering. Adopt these.

---

## 1. Executive summary

**Whitespace** is an internal news aggregator + knowledge base for an 11-person data center planning team that covers GPU, networking, power, cooling, MEP, modular DC, racks, site/civil, software/operations, market, regulatory, and standards news.

Each weekday morning, an automated agent fetches ~10 news items per category from a curated source list, dedupes, scores trust, runs an authenticity / fabrication check, translates between English ⇄ Chinese, and auto-publishes to a static website hosted on GitHub Pages. Teammates can take down posts after publication if they spot a problem; takedown reasons feed the agent's learning loop. Teammates can also submit content (PDFs, PPTs, URLs, or written posts), which becomes bilingual KB articles. A weekly synthesis job distills news into durable Obsidian-backed knowledge entries. A daily email digest summarizes each morning's published items for the team.

Stack: GitHub repo (storage + audit trail) + GitHub Pages (hosting) + GitHub OAuth (auth) + Astro (static site generator) + Pagefind (search) + Python agent + Claude Code in headless mode (LLM orchestration) + Obsidian on Tantyo's home laptop (KB editing) + Hetzner CX33 (24/7 runtime).

Project name "Whitespace" — the data center industry term for the active equipment area where IT gear lives, doubling as "blank canvas of knowledge."

---

## 2. The user and the team

- **Tantyo** (`tantyo.intan@gmail.com`) — project owner. Technically capable, will run/maintain the agent. Currently brainstorming via Claude Cowork on work laptop; intends to build via Claude Code in WSL on home laptop; intends to deploy on a Hetzner CX33 VPS that he is renting for personal AI use.
- **Team size: 11** — includes Tantyo. The other 10 are described as "mostly non-technical." They will only interact with the website (read posts, click takedown, submit docs/URLs/posts, switch language).
- **Domain focus**: data center planning — GPU, rack size, modular DC, MEP, cabling, structural feasibility, cooling, etc.
- **Languages**: English and Chinese, both first-class. Japanese sources may be ingested but only displayed as EN/CN translations.

---

## 3. User-defined working rules

The user explicitly set these rules at the start of the conversation. Both Cowork and Claude Code should follow them.

1. **Read first, identify information gaps, ask about them.** Before producing answers — and especially before building anything — re-read the user's request, list what's ambiguous or unspecified, and ask the user. After receiving answers, re-analyze whether the prompt is now fully understood.
2. **Re-check 2-3 times before delivering.** Especially before building. Validate accuracy, completeness, and that the deliverable actually answers the user's request before sending it.

These rules govern the entire collaboration, not just one turn.

---

## 4. Project goal in plain language

Build an internal-only website that serves Tantyo's data center planning team as both:

- **A daily news aggregator** — 10 trusted news items per category, auto-fetched, auto-scored for trust and authenticity, auto-translated EN/CN, auto-published. Past news visible forever with filter + search.
- **A knowledge base** — durable, evergreen articles on data center topics, partly hand-written / uploaded by the team and partly synthesized weekly from the news firehose. Backed by an Obsidian vault on Tantyo's home laptop, mirrored as a section of the website.

Cybersecurity is a first-class concern. Misinformation prevention is a first-class concern. Bilingual completeness is a first-class concern.

---

## 5. Chronological recap of design decisions

This is the sequence in which design decisions were made during the brainstorm. Order matters — later decisions sometimes overrode earlier ones.

### Turn 1 — Tantyo's initial concept
- Internal team news aggregator + KB for data center planning.
- Hosted as a GitHub-based website.
- ~10 most important news items daily per field (GPU, MEP, cooling, etc.). Field list open to discussion.
- Connected to Obsidian for a rich KB; KB also represented on the website intuitively.
- Teammates can upload PDFs / docs; system extracts text + images and creates a bilingual post per upload, with the original PDF attached as the source.
- Bilingual EN/CN: every CN file translates to EN and vice versa.
- Rigorous review before publishing — trust/reliability scoring, source attribution (possibly multiple), opinion vs. information tag.
- Cybersecurity is top of mind.
- Concept brainstorm stage; Cowork should propose ideas.

### Turn 2 — Cowork asked 4 clarifying questions

### Turn 3 — Tantyo's first round of answers
- **Sensitivity**: Internal-only. No highly confidential client files for now. *Reserve room for future confidential mode in which content tagged confidential is NEVER sent to Anthropic's API.*
- **Hosting**: Website always accessible on GitHub. Daily news fetching only happens when his computer is on (this constraint later changed when CX33 entered the picture — see Turn 11).
- **Curation**: Fully automated, but humans can remove items. AI must **learn from human interactions** so future fetching improves.
- **Translation**: Machine translation, with a user-editable **glossary of preferred technical terms** (e.g., "PUE", "rack-scale").
- **Team profile**: Mostly non-technical.

### Turn 4 — Cowork proposed full architecture (most of which still stands)

### Turn 5 — Tantyo's refinements
1. **No pre-publish review.** Replace review queue with a **takedown button on already-published posts**. Takedown captures a reason (irrelevant / fake / etc.).
2. **Implement rigorous AI-content / deepfake detection.** AI-summarized content from a real outlet is fine; fabricated/deepfake content must be flagged or auto-removed.
3. Teammates only use the website. Tantyo himself is fine with raw git / CLI / technical machinery on the agent side (later via Claude Code).
4. **No Cloudflare.** Build everything on GitHub.
5. **Submit doc** (web upload form) is the way new content gets created by teammates.

### Turn 6 — Cowork confirmed approach and asked smaller questions

### Turn 7 — Tantyo's 21-point response (this is where most concrete decisions were made)
1. Will create a **dedicated Gmail account** and have Claude Code subscribe to data-center-related newsletters from that inbox. The agent ingests newsletters as another news source.
2. Past news handling — Cowork to recommend.
3. Obsidian storage limit — Cowork to clarify.
4. Storage location — Cowork to specify.
5. Reaffirmed: no popup approval. Pass screening = auto-publish.
6. Likely only **1 Obsidian user (Tantyo)**. Automate KB updates so other teammates don't need Obsidian. Free Obsidian account is fine.
7. **EN/CN toggle must persist as a sticky top bar** while scrolling.
8. **Japanese news may be added**, but display only EN+CN (translate JP source).
9. Re-evaluate the need for a Review UI (with no popup approval, it's likely unneeded).
10. **No local LLM** required. (Confidential mode deferred indefinitely.)
11. Subscription plan: Claude **Max 5x for build month**, downgrade to **Pro** for ongoing tweaks. Cowork was asked to re-analyze feasibility.
12. **Team size = 11.**
13. Considered **WSL** for the local agent (later replaced by CX33 in Turn 11).
14. Cowork to deliver a comprehensive **trustable sources list with trust scores** for review.
15. Add a **daily email digest**.
16. Admin / role system — does it require account registry? Cowork explained GitHub orgs + teams handle this with no extra system.
17. **Takedowns must cascade to the Obsidian KB** — if a news item is taken down, any KB entry citing it must be regenerated or removed.
18. Cowork brainstorming for now; build later in Claude Code.
19. **Submit doc has 3 modes**: file upload (PDF/PPT/similar), URL paste, write own post.
20. Auto-block recap = **URL only** (no folder, no UI).
21. Cowork to propose project name options.

### Turn 8 — Cowork answered all 21, gave name candidates, gave starter source list

### Turn 9 — Tantyo's tightening pass
1. **News fetched only when laptop opens at office mornings.** Use Claude Code (not API) — saves API subscription cost. Weekend handling needs design.
2. **Accept sources score ≥3.** Tiered strictness: maybe score-5 sources don't need full authenticity check.
3. **Email digest = news recap only.** No takedowns or auto-blocked URLs in the digest.
4. **Project name = Whitespace.**
5. Past news visible forever + filter + search.

### Turn 10 — Cowork
- Confirmed Pro plan may be tight at runtime; recommended staying on Max longer.
- Recommended skipping weekends; Monday catches up.
- Proposed strictness tiers: Score 5 (skip authenticity, audit 1-in-30); Score 4 (light); Score 3 (full); <3 (drop).
- Daily digest trimmed to news recap only.
- Locked in name "Whitespace."
- Past news forever, default 30-day filter, search via Pagefind.

### Turn 11 — Tantyo introduced Hetzner CX33
- Renting a **Hetzner CX33** VPS for personal AI use, with Claude Code embedded.
- Considering using the same VPS to power Whitespace (24/7 runtime instead of laptop-on-only).
- Asked for Cowork's take.

### Turn 12 — Cowork
- Strongly recommended yes. Major benefits: true 24/7 runtime, weekends just work, multi-run-per-day possible, more reliable Gmail polling, simpler architecture (WSL local agent goes away).
- Concerns flagged: shared Claude Code subscription capacity → strengthens case for staying on Max; resource isolation between personal AI and Whitespace via separate Linux users; security hardening (SSH key-only, ufw, fail2ban, unattended-upgrades); Hetzner Cloud Backups recommended; single point of failure; pick Hetzner region close to Tantyo for SSH latency.
- Asked 3 final questions (still unresolved): personal AI workload, region, systemd-vs-cron.

### Turn 13 — Tantyo asked for this brief.

---

## 6. Architecture overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Hetzner CX33 (Linux VPS)                     │
│                                                                      │
│  ┌──────────────────────┐        ┌──────────────────────────────┐  │
│  │ user: whitespace     │        │ user: <tantyo personal>      │  │
│  │  /opt/whitespace/    │        │  /home/<tantyo>/...          │  │
│  │  - agent (Python)    │        │  - personal AI (Claude Code) │  │
│  │  - SQLite cache      │        │  - other personal stuff      │  │
│  │  - systemd timer     │        │                              │  │
│  │  - Claude Code SDK   │        │                              │  │
│  │   (headless mode)    │        │                              │  │
│  └──────────────────────┘        └──────────────────────────────┘  │
│              │                                                       │
└──────────────┼───────────────────────────────────────────────────────┘
               │ git pull/push, Gmail IMAP, RSS, web fetch, Claude Code API
               ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  GitHub (private repo: whitespace)                   │
│  /content/news/  /content/kb/  /content/uploads/                     │
│  /submissions/   /takedowns/   /feedback/                            │
│  /agent/  /site/  glossary.yml  sources.yml                          │
└─────────────────────────────────────────────────────────────────────┘
       │                          │                          ▲
       │ on push, GitHub Action   │                          │
       ▼                          ▼                          │
┌──────────────────────┐  ┌────────────────────┐  ┌──────────────────┐
│ GitHub Pages         │  │ Tantyo's home laptop│  │ Web form (browser)│
│ (Astro static build) │  │ (Obsidian + Git plugin │  │ uploads via       │
│ behind GitHub OAuth  │  │  pointed at /content/kb/)│ │ GitHub OAuth     │
│ org-membership gate  │  │ — only Tantyo uses    │  │ token to repo     │
└──────────────────────┘  └────────────────────┘  └──────────────────┘
       │
       ▼
   11 teammates browse the site, click takedown, switch EN/中文,
   submit docs/URLs/posts, receive daily email digest.
```

Key architectural principles:

- **The repo is the source of truth.** Everything (posts, KB, submissions, takedowns, feedback, glossary, sources, agent code, site code) lives in one private GitHub repo. Git provides version history, rollback, and audit trail for free.
- **The website is static.** Astro builds markdown into HTML at push time. No server, no database in production.
- **Auth is GitHub-native.** OAuth + organization/team membership check. No separate user database, no Cloudflare, no Auth0.
- **The agent runs on the CX33 24/7.** No dependency on Tantyo's laptops being open.
- **Obsidian is single-user.** Tantyo has the only Obsidian instance; the vault is a clone of the repo's `/content/kb/` folder. Other teammates view the same content via the website's KB section.
- **Web form writes to repo via GitHub API** using the logged-in user's OAuth token. No backend server needed for submissions, takedowns, or glossary edits.

---

## 7. Hosting and storage

- **Hosting**: GitHub Pages from a **private repo**.
  - Option A — GitHub Pro / Team plan ($4-21/user/mo) enables Pages on private repos with access restricted to repo collaborators. Cleanest auth.
  - Option B — Public Pages + a JS-based GitHub OAuth gate that checks org membership at page load and fetches content from the private repo via the user's GitHub token. Free, fully GitHub-native. **Recommended starting choice.**
- **Repo storage**: A single private GitHub repo. Soft cap 5 GB. Git LFS for files >10 MB (typical case: large PDF uploads).
- **Capacity math**: 10 news/day × 12 categories × 365 days = ~44k markdown files/year × ~5 KB each = ~220 MB/year. Five years comfortably under 1 GB even with PDFs. Not a concern.
- **Search**: Pagefind (static, generated at build time). Multilingual including Chinese segmentation.
- **No external storage** (no S3, no R2, no Supabase). Repo + Pages only.

---

## 8. Authentication and access control

- **Identity provider: GitHub.** All 11 teammates have GitHub accounts.
- **Setup**: create a GitHub Organization (e.g., `whitespace-team`). All teammates added as org members. A subset added to a `admins` Team for elevated actions.
- **Reader access**: site checks GitHub OAuth → org membership before rendering content.
- **Admin actions** that require Team membership:
  - Editing `sources.yml` directly (without PR)
  - Editing `glossary.yml` directly
  - Permanently blocklisting a domain
  - Approving or rejecting a flagged submission
- **Audit trail**: every action that mutates the repo (takedowns, submissions, glossary edits) is a Git commit signed with the actor's GitHub identity. Free audit trail forever.

---

## 9. Repo file structure

```
whitespace/
├── README.md                     # repo-level readme (build & deploy instructions)
├── .github/
│   └── workflows/
│       ├── build-site.yml        # Astro build + Pages deploy on push to main
│       └── lfs-check.yml         # check for accidental large files
├── agent/                        # Python agent (runs on CX33)
│   ├── pyproject.toml
│   ├── src/
│   │   ├── main.py               # entrypoint, called by systemd timer
│   │   ├── fetch/
│   │   │   ├── rss.py            # RSS / Atom feed fetcher
│   │   │   ├── web.py            # HTML page fetcher (with robots.txt respect)
│   │   │   ├── gmail.py          # IMAP poller for newsletters
│   │   │   └── github.py         # poll /submissions/ folder
│   │   ├── pipeline/
│   │   │   ├── dedup.py          # cosine similarity over embeddings
│   │   │   ├── categorize.py     # LLM-based category assignment
│   │   │   ├── trust.py          # trust scoring (rubric in §11)
│   │   │   ├── authenticity.py   # fabrication detection (§12), tiered (§13)
│   │   │   ├── translate.py      # bilingual translation, glossary-aware (§16)
│   │   │   └── publish.py        # write markdown to /content/news/, commit
│   │   ├── extract/
│   │   │   ├── pdf.py            # PyMuPDF + Unstructured.io
│   │   │   ├── pptx.py           # python-pptx
│   │   │   └── docx.py
│   │   ├── synthesis/
│   │   │   └── weekly.py         # weekly KB synthesis job
│   │   ├── takedown/
│   │   │   ├── process.py        # process /takedowns/*.json
│   │   │   └── cascade.py        # KB cascade logic (§22)
│   │   ├── llm/
│   │   │   └── claude_code.py    # wrapper around Claude Code SDK headless calls
│   │   ├── digest/
│   │   │   └── email.py          # build + send daily digest via Gmail SMTP
│   │   └── feedback/
│   │       └── learn.py          # incorporate takedown patterns into next-run prompts
│   ├── prompts/                  # versioned prompt templates
│   │   ├── categorize.md
│   │   ├── trust_score.md
│   │   ├── authenticity.md
│   │   ├── translate.md
│   │   ├── kb_synthesis.md
│   │   └── extract_pdf.md
│   ├── config.yaml               # runtime config (run times, cap per category, etc.)
│   ├── tests/
│   └── data/                     # local SQLite cache (gitignored)
├── site/                         # Astro static site
│   ├── package.json
│   ├── astro.config.mjs
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.astro
│   │   │   ├── [lang]/
│   │   │   │   ├── news/[category]/[slug].astro
│   │   │   │   ├── kb/[category]/[slug].astro
│   │   │   │   └── submit.astro
│   │   ├── components/
│   │   │   ├── TopBar.astro      # sticky bar with EN/中文 toggle (§18)
│   │   │   ├── PostCard.astro
│   │   │   ├── TakedownButton.astro
│   │   │   ├── SubmitForm.astro
│   │   │   └── Search.astro      # Pagefind integration
│   │   └── lib/
│   │       ├── auth.ts           # GitHub OAuth + org check
│   │       ├── github-api.ts     # repo writes (submissions, takedowns)
│   │       └── i18n.ts
├── content/
│   ├── news/
│   │   └── {category}/{yyyy-mm-dd}-{slug}.md
│   ├── kb/                       # ← Obsidian vault root on Tantyo's laptop
│   │   └── {category}/{topic}.md
│   └── uploads/
│       └── {yyyy-mm}/{filename}.pdf
├── submissions/                  # inbox from web form (agent watches this)
│   └── {timestamp}-{id}.json
├── takedowns/                    # one file per takedown
│   └── {post-id}.json
├── feedback/                     # agent learning state
│   ├── takedowns.jsonl
│   ├── auto-blocked.jsonl
│   ├── approved.jsonl
│   └── source-stats.json
├── glossary.yml                  # bilingual technical glossary (§16)
└── sources.yml                   # source list with trust scores (§27)
```

---

## 10. Categories and taxonomy

### Primary categories (one per post)

1. **Compute** — GPU, CPU, accelerators, SmartNICs.
2. **Networking & cabling** — switches, optics, fabrics, structured cabling.
3. **Power** — PDU, UPS, generators, on-site generation, grid interconnect.
4. **Cooling** — liquid, immersion, air, free cooling, CDU.
5. **Mechanical & MEP integration**.
6. **Site & civil** — structural feasibility, geotech, site selection.
7. **Modular & prefab DC**.
8. **Racks & physical infrastructure** — density, weight, pathways, cabinets, flooring.
9. **Software & operations** — DCIM, BMS, monitoring, automation.
10. **Industry & market** — hyperscaler capex, regional buildouts, M&A.
11. **Regulatory & sustainability** — carbon, water, permitting, local regs.
12. **Standards & research** — Open Compute, IEEE, ASHRAE, TIA.

### Cross-cutting tags (multiple per post)

- `type`: `information` / `opinion` / `analysis`
- `region`: `global` / `US` / `EU` / `China` / `APAC` / `MENA` / `Japan` / `Korea`
- `vendor`: NVIDIA, Vertiv, Schneider, etc. (free-form list)
- `sensitivity`: `public` / `internal` / `confidential` (third value reserved; no routing logic in MVP)

---

## 11. Trust scoring rubric

Each published post carries a trust score 1-5 with brief reasoning visible to readers.

**Source type baseline**:
- Vendor primary / standards body / regulator → starts at 5.
- Specialized trade press with named editors → starts at 4.
- General trade press → starts at 3.
- Forum, anonymous source, social media post → starts at 1-2.

**Modifiers**:
- Article links to a primary source we can independently verify: +0 (it's expected at score 4+) / +1 (if score 3 or lower).
- Speculative claim about future events: −1.
- Multi-source corroboration (≥2 independent reputable sources reporting the same): +1, capped at 5.

**Output**: an integer 1-5 plus a one-sentence justification stored in the post's frontmatter. Editors / readers can sanity-check the agent's reasoning at a glance.

---

## 12. Authenticity / fabrication detection module

This is what defends against deepfake / fabricated news. Reliable AI-text classifiers do not exist — false positive rate is too high — so the strategy is **provenance and corroboration**, not text classification.

The module produces an authenticity score 1-5 alongside the trust score.

### Sub-checks

1. **Domain provenance**
   - Curated allowlist (sources.yml score ≥4) → high confidence.
   - Otherwise: WHOIS for domain registration date (newly registered = suspicious); presence of About / Editorial / Contact pages; verifiability of the byline author's web presence.
2. **Cross-source corroboration**
   - Web search for the core claim. ≥2 independent reputable sources confirming → high. Zero independent sources → "single-source unverified."
3. **Primary-source traceback**
   - Does the article cite a primary source (vendor announcement, regulatory filing, paper)? Does that link resolve and match the article's claims?
4. **Image authenticity** (when images are present and material to the claim)
   - C2PA Content Credentials check (cryptographic provenance from cameras / Adobe).
   - Reverse image search via Bing / Google APIs to find the original context.
   - EXIF inconsistency flags.
5. **Internal consistency**
   - Claude Code reads the article and checks: physical plausibility of cited specs, consistency of dates / vendor names / product names with reality, verifiability of any quoted persons.

### Action thresholds

- Authenticity 4-5 → publish normally.
- Authenticity 3 → publish with a small "Authenticity unverified — single source" banner.
- Authenticity 1-2 → **auto-quarantine, never published**. URL logged to `feedback/auto-blocked.jsonl` and surfaced briefly in the next morning's email digest as a one-line URL list (per Turn 9 point 3, the digest does NOT include auto-blocks anymore — this was overridden later; auto-blocks live only in `feedback/auto-blocked.jsonl`).

---

## 13. Tiered strictness by source score (decided in Turn 10)

To save tokens and reduce noise, authenticity check intensity scales with source score:

| Source score in `sources.yml` | Treatment |
|---|---|
| **5** (vendor primary, standards body, regulator) | Trust by default. Skip authenticity check. Categorize → translate → publish. **Random sampling audit**: every 30th post from a score-5 source still runs the full authenticity check; if it fails, source flagged for review. |
| **4** (specialist trade press, established analyst) | Light authenticity: domain reputation lookup only. Skip cross-source corroboration unless the article cites a primary that can be quickly verified. |
| **3** (general trade press, mixed) | Full authenticity stack: domain + corroboration + primary-source traceback + internal consistency. |
| **<3** | **Dropped at fetch time.** Never reaches the rest of the pipeline. |

This tiering should reduce daily LLM workload roughly in half compared to full-strictness across all sources.

---

## 14. Daily run pipeline

The agent runs on the Hetzner CX33 daily (not just weekdays — the laptop-on constraint is gone because the VPS is 24/7). Suggested schedule: one run at ~07:00 local Tantyo time.

Optional second run for breaking news / Asia-Pacific morning coverage at ~01:00 UTC. Default: single morning run.

### Steps per run

1. **Update repo state**: `git pull` to get latest takedowns, submissions, glossary changes.
2. **Process new takedowns** (`/takedowns/*.json` since last run). Soft-delete posts. Run KB cascade (§22).
3. **Process new submissions** (`/submissions/*.json` since last run). Route to PDF/PPT/URL/post handler. Generate KB entries.
4. **Fetch candidate news**:
   - RSS feeds from sources.yml.
   - Web pages for sources without RSS.
   - Gmail IMAP poll for newsletters (dedicated account, app password, read-only). Parse newsletter HTML into individual story candidates.
5. **Filter by source score**: drop sources with score <3. (Per Turn 9.)
6. **Dedupe**: cosine similarity over embeddings against today's candidates and the past 30 days of published posts.
7. **Categorize**: LLM-assisted assignment to one primary category + tags.
8. **Trust score**: rubric §11. Stored in frontmatter.
9. **Authenticity check**: tiered per §13.
10. **Apply caps**: at most 10 published items per category per day. Rank candidates by trust × recency × novelty; take top 10.
11. **Translate**: each post stored with `body_en` and `body_zh`. JP-source posts translated to both. Glossary applied during translation.
12. **Publish**: write markdown to `/content/news/{category}/{date}-{slug}.md`. Commit + push. GitHub Actions builds and deploys.
13. **Send daily email digest**: news recap only (per Turn 9 point 3). Subject: `[Whitespace] yyyy-mm-dd — N items, M KB updates`.
14. **Update agent state**: write to `feedback/source-stats.json` (counts per source, takedown rate, etc.).

### Weekly synthesis (every Sunday after the morning run)

For each category, the agent reads the past 7 days of published posts + cross-source patterns, identifies 1-3 themes, and generates / updates KB entries in `/content/kb/{category}/`. Each KB entry's frontmatter records the source news IDs (used for cascade in §22).

---

## 15. Weekend / holiday handling

Now that Whitespace runs on the CX33 24/7, the originally proposed "skip weekends, Monday catches up" logic is unnecessary. Default: **run every day, including weekends and holidays**. Volume cap (10/category) prevents weekend over-publish.

If Tantyo wants quieter weekends later, easy config flag in `agent/config.yaml`: `weekend_run: false`.

---

## 16. Translation system + glossary

- **Engine**: Claude Code in headless mode (single subscription, no separate API bill).
- **Direction**: bidirectional EN ⇄ CN. JP → EN → CN (or direct JP → CN if Claude handles it well; benchmark during build).
- **Glossary**: `glossary.yml` at repo root. Format:

```yaml
- en: "PUE"
  zh: "PUE"
  notes: "Industry-standard term, do not translate."
- en: "rack-scale"
  zh: "机架级"
  notes: "Per NVIDIA usage; do NOT translate as 整机柜."
- en: "direct-to-chip cooling"
  zh: "直接芯片冷却"
- en: "whitespace"
  zh: "白空间"
  notes: "DC industry term for active equipment area; also the project name."
```

- The translator prompt always loads the glossary and is instructed to use these mappings exactly.
- **Glossary editing UI** on the website (admin-only): add/edit/remove entries, commits via GitHub API.
- New glossary entries trigger re-translation of the **last 30 days** of posts so existing content stays consistent with the new term.

---

## 17. Language strategy (EN, CN, JP)

- **Display**: only English and Chinese. Sticky top bar toggle (§18).
- **Source ingestion**: English, Chinese, **and Japanese**. JP sources are translated into both EN and CN; the JP original URL is preserved as the `source` field but never displayed as a body language.
- **Future expansion**: Korean, German, etc. easy to add — same pipeline, just add to source ingestion list.

---

## 18. Bilingual UI behavior

- **Top bar**: `position: sticky; top: 0; z-index: 50;` containing logo, search box, category nav, EN/中文 toggle, and a small "today" indicator (e.g., "47 new today"). Stays visible on scroll.
- **Toggle persistence**: clicking EN or 中文 stores the choice in `localStorage` and updates the URL prefix (`/en/...` ↔ `/zh/...`). Persists across sessions.
- **Mobile**: same sticky bar, collapses category nav into a hamburger menu.
- **Astro i18n**: native i18n routing handles the `/en/` and `/zh/` prefixes.

---

## 19. Submit-doc workflow (3 modes)

The website's `/submit` page has three tabs.

### Mode A — Upload file
- Accepts: `.pdf`, `.pptx`, `.docx`, `.md`, `.txt`. Max ~50 MB (Git LFS handles bigger).
- The browser uses the logged-in user's GitHub OAuth token to PUT the file into `/content/uploads/{yyyy-mm}/{filename}` and a JSON descriptor into `/submissions/`.
- The agent picks up the submission on its next run, extracts text + images (§20), generates a bilingual KB post, links the original file as the source.

### Mode B — Submit URL
- User pastes a URL + optional comment ("worth posting as KB entry").
- The agent fetches the URL, runs authenticity + extraction, generates a KB post citing the URL.

### Mode C — Write a post
- Markdown editor in the browser (e.g., SimpleMDE / EasyMDE). Title, category, body.
- Saves directly as a submission with `type: "post"`. Author byline = submitter's GitHub identity.
- The agent translates EN ⇄ CN, applies glossary, publishes.

All three drop into `/submissions/` as a JSON descriptor. The agent's `submission` handler dispatches by `type`.

---

## 20. PDF/PPT extraction → bilingual KB post

When a teammate uploads a file (Mode A), the agent:

1. Extracts text via PyMuPDF (PDF) / python-pptx (PPTX) / python-docx (DOCX). Layout, headings, tables via Unstructured.io.
2. Extracts images and figures with caption text. Saves them next to the post (`/content/uploads/{yyyy-mm}/figures/{post-id}-fig-N.png`).
3. Calls Claude Code to produce a structured KB article: TL;DR, what it is, key technical facts, diagrams (with captions referenced), "How this connects to existing KB" (which finds related notes via embedding similarity).
4. Translates the article using the glossary.
5. Stores the original file in the repo (Git LFS for >10 MB) and links it as the canonical source.
6. Tags the post: `source: team-upload`, `uploaded-by: <github-handle>`, `sensitivity: internal` by default.
7. Publishes to `/content/kb/{category}/{topic}.md`. No review queue — auto-publish.

---

## 21. KB synthesis (weekly)

Sunday after the morning run, the agent runs `synthesis/weekly.py` which:

1. Reads the past 7 days of news posts per category.
2. Calls Claude Code: "Identify 1-3 themes that recur or matter long-term across these N news items. For each theme, draft or update a KB entry."
3. For each theme, either creates a new file in `/content/kb/{category}/` or updates an existing file. Updates record the source news IDs in frontmatter.
4. Commits with message `synthesis: weekly KB update YYYY-MM-DD (N entries)`.
5. Tantyo can refine in Obsidian afterward; his edits are committed back via the Obsidian Git plugin.

---

## 22. Takedown system + cascade to KB

### On the website

Each published post displays a "Report / Take down" button visible to logged-in teammates. Clicking opens a modal:

- Reason (single-select): `Irrelevant`, `Factually wrong`, `Duplicate`, `Low-quality source`, `Suspected fabrication`, `Other`.
- Free-text comment (optional).
- Submit.

The browser uses the user's GitHub OAuth token to write `/takedowns/{post-id}.json`:

```json
{
  "post_id": "compute/2026-04-21-nvidia-rubin-spec",
  "taken_down_by": "tantyo",
  "reason": "factually_wrong",
  "free_text": "Specs cited don't match the actual press release.",
  "timestamp": "2026-04-22T10:14:00Z"
}
```

### Effects

The post is **soft-deleted**: the markdown file gains `frontmatter.takedown: <takedown-id>`. The site filters takedown posts out of all listings. The original content is preserved in Git history (recoverable if takedown was a mistake).

The takedown is appended to `feedback/takedowns.jsonl` for the agent's learning loop.

### KB cascade

The agent's takedown processor runs on each daily run (or immediately via webhook if configured later):

1. For the taken-down post, find every KB entry whose frontmatter `sources` array contains this post ID.
2. For each affected KB entry:
   - If multiple sources remain after dropping the taken-down one → **regenerate** the KB entry without the bad source.
   - If the taken-down post was the only source → **soft-delete the KB entry too**.
3. Commit changes with message `cascade: takedown of <post-id> propagated to N KB entries`.
4. Obsidian on Tantyo's laptop pulls these changes on next open.

### Permissions

Per Turn 8, default: any teammate can take down any post. The takedown is logged with their GitHub identity. Repeat or wrongful takedowns become a social conversation, not a system rule. (Tantyo can later enforce two-person confirmation if abuse becomes an issue.)

---

## 23. Auto-blocking suspected fabrications

Per §12 and §13: items with authenticity score 1-2 are auto-quarantined and never published. The URL is appended to `feedback/auto-blocked.jsonl`:

```json
{"url": "https://suspicious.example/article", "reason": "single-source, no corroboration; domain registered 7 days ago", "timestamp": "2026-04-27T07:14:00Z"}
```

No quarantine folder, no UI, no email surfacing (per Turn 9 point 3). The data is used solely for the agent's pattern matching: a domain auto-blocked ≥5 times in 30 days gets permanently blocklisted in `feedback/source-stats.json`.

---

## 24. Daily email digest

- **When**: after the morning run completes.
- **From**: the dedicated Gmail account (e.g., `dc-research@…` — name TBD).
- **To**: all 11 teammates.
- **Transport**: Gmail SMTP (app password, the dedicated account).
- **Subject**: `[Whitespace] YYYY-MM-DD — N items, M KB updates`.
- **Body**: bilingual HTML, recipient's preferred language (defaulted to EN, switchable on the website). Sections:
  - "Today's news" grouped by category, each item: headline + 1-2-line summary + link.
  - "KB updates today" — any new or changed KB entries.
- **Excluded** (per Turn 9): takedowns, auto-blocks, agent diagnostics. Just the news recap.

---

## 25. AI feedback / learning loop

Not RLHF, just structured prompt engineering:

1. **Negative examples**: every takedown logs to `feedback/takedowns.jsonl` with the post's title, source, reason, and a Claude-generated embedding of the article body. The next morning's run includes the last ~100 takedowns in the agent's prompt as "patterns to avoid."
2. **Source statistics**: `feedback/source-stats.json` accumulates per-source counts (fetched, published, taken down, auto-blocked). Sources accumulating takedowns get downweighted in ranking; those exceeding a threshold (e.g., 5 takedowns in 30 days) get auto-quarantined; further accumulation → permanent blocklist.
3. **Embedding pre-filter**: new candidate articles are checked against the embeddings of recently rejected/taken-down items. Cosine similarity >0.9 → drop before LLM categorization (saves tokens).
4. **Positive corpus**: approved (i.e., not taken down) posts also build a positive embedding store. Used for novelty scoring (a candidate too similar to recently approved posts is a duplicate, not "new news").

Over weeks, this approximates a personal editor without any model fine-tuning.

---

## 26. Newsletter ingestion via dedicated Gmail

- **Account**: a dedicated Gmail (Tantyo to create; suggested name `dc-research@…` or similar).
- **Subscriptions**: see §27 for the list of newsletters worth subscribing to (marked 📧).
- **Reading**: agent uses **IMAP with an app password**, read-only scope. Simpler and more reliable than the Gmail API for this use case.
- **Hygiene**:
  - 2FA enabled on the account.
  - App password generated specifically for the agent.
  - Inbox rules auto-archive newsletters after read.
  - Filter rules tag promotional vs. editorial content so the agent skips marketing blasts.
- **Ingestion**: the agent parses newsletter HTML and extracts each individual story as a candidate. Each candidate inherits the newsletter's source score (e.g., DCD Briefing → 4) plus per-article modifiers.

---

## 27. Trustable sources list with trust scores

This list was generated in Turn 8 and lightly refined since. **Tantyo will mark this up before it becomes `sources.yml`.** Treat as authoritative starter, not final.

📧 = also worth subscribing to as newsletter via the dedicated Gmail.

### Compute (GPU / CPU / accelerators)
| Source | Score | Notes |
|---|---|---|
| NVIDIA Newsroom (`nvidianews.nvidia.com`) | 5 | Primary vendor source |
| NVIDIA Developer Blog | 5 | Technical primary |
| AMD / Intel / Cerebras / Groq / SambaNova / Tenstorrent / Rebellions newsrooms | 5 | Vendor primary |
| ServeTheHome (`servethehome.com`) | 4 | Specialist, technical, well-cited |
| The Next Platform 📧 | 4 | Specialist, deep analysis |
| SemiAnalysis 📧 (paid tier optional) | 4 | Strong track record on supply/capex |
| HPCwire 📧 | 4 | HPC-focused, reliable |
| AnandTech archives | 4 | Defunct but archived gold |
| Reuters / Bloomberg tech desks | 4 | Reliable for market moves |
| Tom's Hardware | 3 | Consumer-skewed, mixed for DC |
| WCCFTech / VideoCardz | 2 | Leaks, often unverified — *will be dropped per source-≥3 rule* |

### Networking & cabling
| Source | Score | Notes |
|---|---|---|
| Cisco / Arista / Juniper / Broadcom newsrooms | 5 | Vendor primary |
| IEEE 802 standards | 5 | Canonical |
| Open Compute Project (`opencompute.org`) 📧 | 5 | Standards body |
| LightCounting reports | 4 | Paid analyst, optical-specific |
| Lightwave Online | 4 | Optical-networking trade press |
| Network World | 3 | General trade press |
| Optical Connections | 3 | Niche trade press |

### Power
| Source | Score | Notes |
|---|---|---|
| Schneider Electric Newsroom + Energy University 📧 | 5 | Vendor primary, strong technical |
| Vertiv 📧 | 5 | Vendor primary |
| Eaton / ABB / Generac / Bloom Energy | 5 | Vendor primary |
| US EIA (`eia.gov`) | 5 | US energy data |
| NEC / IEC / IEEE code updates | 5 | Canonical standards |
| Utility regulators (FERC, ERCOT, PJM, CAISO press) | 5 | Primary regulatory |
| RMI (`rmi.org`) | 4 | Energy think-tank |

### Cooling
| Source | Score | Notes |
|---|---|---|
| Vertiv / Stulz / Munters | 5 | Vendor primary |
| Asetek / CoolIT / Submer / GRC / LiquidStack / Iceotope / Castrol Liquid | 5 | Vendor primary, liquid/immersion specialists |
| ASHRAE TC 9.9 publications | 5 | Canonical thermal guidelines |
| Data Center Knowledge cooling section | 4 | Trade press |
| Mission Critical Magazine | 4 | Trade press |

### Mechanical / MEP
| Source | Score | Notes |
|---|---|---|
| ASHRAE | 5 | Canonical |
| Engineered Systems Magazine | 4 | MEP trade press |
| Consulting-Specifying Engineer | 4 | MEP trade press |
| HPAC Engineering | 4 | HVAC focus |

### Site / civil / modular
| Source | Score | Notes |
|---|---|---|
| 7x24 Exchange | 4 | Industry org |
| Datacenter Hawk 📧 | 4 | Site / market intelligence |
| Vertiv SmartMod / Schneider Pre-Built Modular / EdgeConneX | 5 | Vendor primary modular |
| Rosendin / Holder / DPR / Turner press | 4 | DC contractors |
| iMasons (`imasons.org`) 📧 | 5 | Industry org |

### Software & operations / DCIM
| Source | Score | Notes |
|---|---|---|
| Schneider EcoStruxure / Vertiv Trellis | 5 | Vendor primary |
| Sunbird / Cormant / Nlyte | 5 | Vendor primary |
| DCD (`datacenterdynamics.com`) 📧 | 4 | Trade press, broad |
| The Register | 4 | Technical, well-sourced |

### Industry / market / capex
| Source | Score | Notes |
|---|---|---|
| Synergy Research Group | 5 | Market data |
| Dell'Oro Group | 5 | Market data |
| IDC / Gartner | 5 | Market data (paywalled) |
| DataCenterFrontier 📧 | 4 | US-focused, very reliable |
| Data Center Knowledge 📧 | 4 | Broad coverage |
| Reuters / Bloomberg / FT | 4 | Verify primary source |
| The Information | 4 | Paywalled, often first |
| TechCrunch | 3 | Mixed quality |
| Mordor Intelligence / market-research aggregators | 3 | Mixed |

### Regulatory & sustainability
| Source | Score | Notes |
|---|---|---|
| EU Code of Conduct for DC Energy Efficiency | 5 | Primary regulatory |
| EPA Energy Star / DOE | 5 | US regulatory |
| Uptime Institute 📧 | 5 | Industry authority |
| iMasons Climate Accord | 5 | Industry consortium |
| ITU-T / IEC | 5 | International standards |

### Standards & research
| Source | Score | Notes |
|---|---|---|
| Open Compute Project 📧 | 5 | Open hardware standards |
| TIA-942 | 5 | DC infrastructure standard |
| IEEE | 5 | Canonical |
| ASHRAE TC 9.9 | 5 | Thermal canonical |

### China-specific
| Source | Score | Notes |
|---|---|---|
| 中国信通院 CAICT (`caict.ac.cn`) | 5 | Government research institute, authoritative |
| 阿里云 / 腾讯云 / 华为云 / 百度智能云 newsrooms | 5 | Vendor primary |
| 中科曙光 / 浪潮信息 / 联想 ISG | 5 | Vendor primary, domestic OEMs |
| 中国IDC圈 (`idcquan.com`) | 4 | Domestic trade press |
| C114 通信网 | 4 | Telecom + DC trade press |
| 36氪 tech section | 3 | General tech, mixed depth |
| 新华社 tech section | 4 | Official, reliable for policy |
| 数据中心建设 (微信公众号) | 3 | Verify per-article |

### Japan-specific (display in EN+CN only)
| Source | Score | Notes |
|---|---|---|
| 日経クロステック (`xtech.nikkei.com`) | 5 | Authoritative tech business |
| ITmedia エンタープライズ | 4 | Tech trade press |
| Data Center Café (`data-center-cafe.com`) | 4 | DC-specific |
| ASCII.jp / Cloud Watch | 3 | General tech, mixed |

### Newsletters worth subscribing to (📧 above + the following)
DCD Briefing, DataCenterFrontier daily, Uptime Institute Briefings, OCP newsletter, SemiAnalysis (free tier OK to start), HPCwire weekly, The Next Platform, iMasons, Datacenter Hawk, Vertiv / Schneider / Eaton vendor newsletters, Open Compute Project announcements.

---

## 28. Cybersecurity practices

### Account / identity
- GitHub: 2FA mandatory for all 11 teammates. Org owner is Tantyo.
- Dedicated Gmail (newsletter inbox): 2FA, app password for the agent only, IMAP read-only scope.
- Hetzner Cloud account: 2FA, separate password manager entry.

### CX33 hardening
- SSH **key-only** (disable password auth in `sshd_config`).
- SSH on a **non-default port** (e.g., 50022).
- `ufw`: deny inbound except SSH; allow all outbound.
- `fail2ban` for SSH brute-force.
- `unattended-upgrades` for automatic security patches.
- **No public-facing services.** The website is on GitHub Pages, not on this VPS. The agent only makes outbound connections (Git, GitHub API, RSS, IMAP, web fetch, Claude Code).
- **Separate Linux users** for Whitespace and personal AI: `useradd whitespace`, `useradd <tantyo>`. Whitespace's home directory permissions exclude personal user. Each has its own Claude Code config dir.
- Optional: systemd `MemoryMax` and `CPUQuota` per user to prevent starvation.

### Repo
- Dependabot enabled.
- Pinned dependency versions.
- Pre-commit hooks (e.g., gitleaks) to prevent committing secrets.
- API keys / credentials stored in **systemd-creds** or `~/.config/whitespace/.env` (chmod 600), never in repo.

### Backup
- **Hetzner Cloud Backups** enabled (~20% of CX33 cost, ~€2.60/mo). Recommended.
- The repo itself is the canonical state, so most data is already backed up via GitHub.

### Audit trail
- Every mutation (publish, takedown, glossary edit, submission) is a Git commit signed with the actor's identity. Free, comprehensive, immutable history.

---

## 29. Future-proof: confidential mode (deferred)

Tantyo asked at Turn 3 to leave room for a future "confidential mode" in which content tagged confidential is **never sent to Anthropic's API**. Per Turn 7 point 10, no local LLM is required for now. So:

- **Now**: keep the `sensitivity` field in every post / KB entry's frontmatter. Default value: `internal`. No routing logic.
- **Later, if/when needed**: introduce a router that checks `sensitivity` and, if `confidential`, calls a local model (Ollama + Qwen 2.5 or similar). Make the router enforced by a unit test so it can't regress. Encrypt `/content/confidential/` with `git-crypt`. Use a Cloudflare Access group or GitHub team for confidential viewers.

Cost of preserving the field today: ~zero. Cost of bolting it on later if not preserved: meaningful refactor.

---

## 30. Cost estimate

| Item | Monthly | Annual |
|---|---|---|
| Hetzner CX33 | ~€13 (~$14) | ~$170 |
| Hetzner Cloud Backups | ~€2.60 (~$3) | ~$36 |
| Domain (optional, e.g., `whitespace.team`) | ~$1 | ~$15 |
| Claude subscription — Max 5x (recommended ongoing) | ~$100 | ~$1,200 |
| Claude subscription — Pro alternative | ~$20 | ~$240 |
| GitHub Pro (only if going with private Pages route) | ~$4 / Tantyo | ~$50 |
| **Total at steady state, Max plan** | **~$120-150/mo** | ~$1,500/yr |
| **Total at steady state, Pro plan (if it sustains)** | **~$40-60/mo** | ~$500/yr |

Notes:
- Personal AI on the same CX33 is included in the Hetzner cost (shared instance).
- Claude Max recommended for the first 2-3 months while real usage is measured. Downgrade only if you observe sustained headroom.
- API-pay-as-you-go is **not** in this plan because runtime uses Claude Code, not the API.
- Web search APIs (used in authenticity corroboration) — Bing free tier covers ~1k queries/mo, likely sufficient. If volume grows, ~$5-15/mo.

---

## 31. Tech stack (consolidated)

| Layer | Choice | Rationale |
|---|---|---|
| Static site generator | **Astro** | Content-first, fast, MDX support, easy theming, native i18n |
| Hosting | **GitHub Pages** | GitHub-native, free for public, available for private with Pro |
| Auth | **GitHub OAuth + org/team membership** | No external dependency, free, audit trail built-in |
| Search | **Pagefind** | Static, multilingual including Chinese, no server |
| Content storage | **GitHub repo (private)** | Versioned, audited, free for 11 users |
| Large files | **Git LFS** | Standard for repo-attached PDFs / media |
| Knowledge base editor | **Obsidian + Obsidian Git plugin** (Tantyo only) | Free, file-system-based, perfect for git-backed vaults |
| Agent runtime | **Python 3.11+** on Hetzner CX33, scheduled via **systemd timer** | Standard, low-overhead, log-friendly |
| LLM orchestration | **Claude Code in headless mode** (`claude -p` or SDK) | One subscription for build + runtime, no API bill |
| Translation | **Claude Code** primary, glossary-aware. DeepL as optional fallback | Quality + cost balance |
| PDF / PPT extraction | **PyMuPDF** (PDF text + images) + **Unstructured.io** (layout) + **python-pptx** + **python-docx** | Best-in-class open source for each format |
| Embeddings (dedup, learning loop) | **OpenAI text-embedding-3-small** OR Voyage AI | Cheap; or use Claude's built-in embedding capability if available |
| Cache / state | **SQLite** local on CX33 | Simple, fast, no server |
| Email digest | **Gmail SMTP** from dedicated account | Free, reliable, no third-party email service |
| Newsletter ingestion | **IMAP** from dedicated Gmail (app password, read-only) | Simpler than Gmail API for read-only |
| Web form (submit doc) | Astro page with vanilla JS using GitHub OAuth token to write to repo via REST API | No backend needed |

---

## 32. Frontmatter / data schemas

### News post

```yaml
---
id: "compute/2026-04-21-nvidia-rubin-spec"
title_en: "NVIDIA announces Rubin GPU specs"
title_zh: "英伟达公布Rubin GPU规格"
date: 2026-04-21T07:00:00Z
category: compute
region: [global, US]
vendor: [NVIDIA]
tags: [type/information]
sensitivity: internal
sources:
  - { url: "https://nvidianews.nvidia.com/...", title: "...", date: "2026-04-20", trust: 5, type: primary }
  - { url: "https://servethehome.com/...", title: "...", date: "2026-04-20", trust: 4, type: corroborating }
trust:
  score: 5
  reasoning: "Primary vendor announcement, corroborated by ServeTheHome."
authenticity:
  score: 5
  reasoning: "Score-5 source, skipped per tier rules. (Or: full check passed in 1-in-30 audit.)"
type: information
lang_original: en
kb_entries: ["compute/rubin-architecture"]
takedown: null   # populated as takedown-id if soft-deleted
---

# {body_en — markdown}
---
zh
# {body_zh — markdown}
```

(Or use two files: `…-en.md` and `…-zh.md`. Decide during build.)

### KB entry

```yaml
---
id: "compute/rubin-architecture"
title_en: "NVIDIA Rubin architecture"
title_zh: "英伟达Rubin架构"
category: compute
sources:
  - "compute/2026-04-21-nvidia-rubin-spec"
  - "compute/2026-04-22-rubin-corroboration-tweet"
tags: [vendor/nvidia, generation/rubin]
last_synthesized: 2026-04-27T08:00:00Z
related: ["compute/blackwell-architecture", "cooling/rubin-cdu-required"]
takedown: null
---

# {body_en}
---zh
# {body_zh}
```

### Takedown

```json
{
  "post_id": "compute/2026-04-21-nvidia-rubin-spec",
  "taken_down_by": "tantyo",
  "reason": "factually_wrong",
  "free_text": "Specs cited don't match the actual press release.",
  "timestamp": "2026-04-22T10:14:00Z"
}
```

### Submission

```json
{
  "id": "2026-04-25-001",
  "type": "file",
  "submitted_by": "<github-handle>",
  "files": ["content/uploads/2026-04/asetek-cdu-spec.pdf"],
  "url": null,
  "body": null,
  "comment": "Asetek's new CDU spec, please add to KB.",
  "timestamp": "2026-04-25T09:32:00Z",
  "status": "pending"
}
```

### Glossary entry

```yaml
- en: "PUE"
  zh: "PUE"
  notes: "Industry-standard term, do not translate."
  added_by: "tantyo"
  added_at: 2026-04-27
```

### Source (in `sources.yml`)

```yaml
- name: "NVIDIA Newsroom"
  url: "https://nvidianews.nvidia.com/rss"
  fetch: rss
  category_hints: [compute]
  language: en
  trust_score: 5
  notes: "Vendor primary."
```

---

## 33. Hetzner CX33: integrating with personal AI

### Co-existence rules

- Two separate Linux users: `whitespace` and `<tantyo>`. Each has its own Claude Code config (`~/.config/claude/`), its own keys, its own crontab / systemd timers.
- Whitespace files live in `/opt/whitespace/`, owned by user `whitespace`, mode 750. Personal AI does not have read access.
- Optional resource ceilings via systemd:

```ini
# /etc/systemd/system/whitespace-agent.service
[Service]
User=whitespace
Group=whitespace
MemoryMax=4G
CPUQuota=200%   # max 2 cores
WorkingDirectory=/opt/whitespace
ExecStart=/opt/whitespace/.venv/bin/python -m agent.main
```

### Shared Claude Code subscription

- One Claude Code subscription powers both. Max 5x recommended for the first 2-3 months of two-workload operation.
- If on Pro: schedule Whitespace's morning run at a time when personal AI is unlikely to be active (e.g., 06:00 local).

### Resource sizing on CX33 (4 vCPU / 16 GB / 80 GB)

- Whitespace's daily run is mostly I/O bound. Peak memory ~1-2 GB during PDF extraction / embedding work.
- Personal AI workload is unknown — Tantyo to confirm. If it's lightweight (occasional Claude Code sessions), CX33 is fine. If it includes local model inference or heavy indexing, consider CX42 (8 vCPU / 32 GB) to future-proof.

### Region pick

Hetzner regions: Falkenstein / Nuremberg (DE), Helsinki (FI), Ashburn / Hillsboro (US). Pick by SSH latency to Tantyo's location, not by news source proximity (fetching is batch).

### Networking

- Inbound: SSH only (non-default port).
- Outbound: Git/HTTPS (GitHub), IMAP 993 (Gmail), HTTPS (RSS, web fetch, Claude Code), SMTP 465/587 (Gmail outbound for digest).
- No webhook receivers in MVP (poll repo every 5 minutes for `/submissions/` and `/takedowns/`). Webhooks can be added later if real-time UX matters.

---

## 34. Where Whitespace runs (laptops vs. server)

| Component | Runs where | Notes |
|---|---|---|
| Static website | GitHub Pages (built by GitHub Actions) | Always live |
| Repo | GitHub | Source of truth |
| Daily agent | **Hetzner CX33**, user `whitespace`, systemd timer | 24/7 |
| Obsidian | **Tantyo's home laptop**, vault = local clone of `/content/kb/` | Single user; Obsidian Git plugin auto-pulls/pushes |
| Claude Code (build phase) | **Tantyo's home laptop, WSL (Ubuntu)** | This is where you, the receiving Claude Code, will live |
| Claude Code (runtime) | Hetzner CX33 (headless, called by agent) | Same Anthropic subscription, different machine |
| Web form interactions | Browser → GitHub API directly | No backend |
| Email digest sending | Hetzner CX33, after morning run | Gmail SMTP |

The work-laptop where Cowork is currently running plays no role at runtime — it was just the brainstorming surface.

---

## 35. Phased build roadmap

Suggested phasing for Claude Code on home-laptop WSL. Each phase delivers something testable.

### Phase 0 — Setup (Day 1)
- Create GitHub Organization `whitespace-team`. Add Tantyo as owner. Create `admins` team with Tantyo.
- Create private repo `whitespace`. Initialize with the file structure in §9.
- Create dedicated Gmail account. Enable 2FA. Generate app password (do not commit).
- Provision Hetzner CX33 (Tantyo: select region per §33). Harden per §28. Create users `whitespace` and `<tantyo>`.

### Phase 1 — Static site shell (Days 2-4)
- Astro project in `/site/`. Top bar with EN/中文 toggle (§18), Pagefind search, category nav.
- GitHub Pages deploy via GitHub Actions on push to `main`.
- GitHub OAuth gate (Option B): sign-in with GitHub, check org membership, render content.
- Seed `/content/news/` with 2-3 hand-written EN/CN posts to validate rendering.

### Phase 2 — Daily news agent (Days 5-10)
- Python project in `/agent/`. systemd timer scheduling.
- Implement fetchers (RSS + web). Source list seeded from §27 (Tantyo to mark up first).
- Dedup + categorize + trust score.
- Tiered authenticity check (§13).
- Translation with glossary.
- Auto-publish to `/content/news/`, commit, push.
- Daily email digest via Gmail SMTP.
- **Smoke test**: 3 days of real runs with daily review by Tantyo.

### Phase 3 — KB + Obsidian (Days 11-13)
- `/content/kb/` rendering on the website.
- Tantyo installs Obsidian on home laptop, points at the cloned repo's `/content/kb/`. Obsidian Git plugin configured.
- Weekly synthesis job (§21).

### Phase 4 — Submit doc + extraction (Days 14-18)
- `/submit` page on the website with three modes (§19).
- Browser writes submissions to repo via OAuth token.
- Agent's submission handler: PDF / PPTX / DOCX extraction → bilingual KB post (§20).
- URL submissions go through the same fetch + authenticity + extract path.
- Custom-post mode: markdown editor with translate-on-publish.

### Phase 5 — Takedown + cascade + learning (Days 19-22)
- Takedown button + modal on every post.
- `/takedowns/` writes via OAuth token.
- Takedown processor + KB cascade (§22).
- Feedback learning loop (§25).

### Phase 6 — Polish & operate (Days 23-30)
- Newsletter subscriptions in the dedicated Gmail. IMAP poller in agent.
- Glossary editor UI (admin-only).
- Admin actions for editing `sources.yml`.
- Documentation in `README.md` for Tantyo's reference.
- Onboard the 10 teammates: invite to GitHub org, share site URL, walkthrough.

Total estimated effort: ~3-4 weeks of evenings/weekends with Claude Code on Max 5x.

---

## 36. Open questions (still TBD before / during build)

These were unanswered as of the end of the brainstorm. Claude Code should ask Tantyo before deciding any of them.

1. **Personal AI workload on CX33**. What does Tantyo's personal AI do? Light Claude Code use, or heavy local processing (model inference, big indexing, always-on agents)? Affects whether CX33 is enough or whether CX42 is wiser. Affects resource ceilings.
2. **Hetzner region**. Falkenstein, Nuremberg, Helsinki, Ashburn, or Hillsboro? Pick by SSH latency to Tantyo's primary work location.
3. **`systemd timer` vs `cron`**. Cowork recommended `systemd timer`. Tantyo to confirm preference.
4. **Auth route**. Private Pages with GitHub Pro ($4-21/user/mo) or public Pages + JS OAuth gate (free)? Cowork recommended starting with the latter. Tantyo to confirm.
5. **Source list final**. Tantyo to mark up §27 — strike sources he doesn't trust, raise/lower scores, add China/Japan sources he specifically respects.
6. **Project URL / domain**. `whitespace.gh.io`, `whitespace.<custom-domain>`, or other? Tantyo to decide before Phase 1.
7. **Dedicated Gmail name**. e.g., `whitespace.intel@gmail.com`, `dc-research@…`? Tantyo to create.
8. **Frontmatter approach**: single bilingual file (`body_en` + `body_zh`) or two parallel files (`-en.md` + `-zh.md`)? Cowork left this open. Single-file is simpler for the agent; two-file is simpler for Obsidian's link graph. Recommend single-file.
9. **Daily digest send time**. Right after morning run completes? Or fixed 09:00 local time?
10. **Takedown abuse policy**. Default in Cowork's recommendation: any teammate can take down anything; logged with name; abuse handled socially. Tantyo to confirm or impose two-person rule.
11. **Web search API choice for authenticity corroboration**. Bing Search, Google Custom Search, or DuckDuckGo API. Bing free tier likely sufficient at this volume.

---

## 37. Glossary of project-specific terms (for Claude Code)

- **Whitespace**: this project. Also a data center industry term for the active equipment area.
- **Cowork**: the brainstorming-mode Claude desktop tool where this conversation took place.
- **Authenticity check**: the fabrication-detection module (§12), distinct from the trust score. Trust = is the source legitimate? Authenticity = is this specific article real or fabricated?
- **Cascade takedown**: when a news post is taken down, KB entries citing it are regenerated or removed (§22).
- **Score-5 source**: a primary vendor source, standards body, or regulator. Skipped from authenticity check by default with a 1-in-30 audit (§13).
- **Sticky top bar**: the always-visible navigation bar with the EN/中文 toggle (§18).
- **Submit doc**: the three-mode content submission form (§19).
- **Synthesis**: the weekly KB-generation job that distills news into KB entries (§21).
- **Daily digest**: the automated email summary (§24).
- **Confidential mode**: a deferred future mode where content tagged confidential is never sent to external APIs (§29).

---

## End of brief

Tantyo's working rules apply to your engagement too:

1. Read this whole document. Identify gaps. Ask before guessing.
2. Re-check 2-3 times before delivering.

Welcome to Whitespace. Build it well.
