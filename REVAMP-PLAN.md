# Whitespace — Revamp Plan

**Authority:** `Reference/WHITES~3.md` is the binding spec. This file is the execution plan: what to do, in what order, with what we already have.
**Pulse:** `STATUS.md`.
**Updated:** 2026-04-29.

---

## What we have today (post-MVP, 2026-04-28)

| Area | Current | Spec target | Gap |
|---|---|---|---|
| Framework | Astro 6.1.8 | Astro v5+ | ✅ already there |
| Styling | Tailwind v3.4 | Tailwind v4 + OKLCH tokens | upgrade + token system |
| Content | Single `news` collection, dual fields (`title_en`/`title_zh`) | Mirrored per-locale files (`articles/en/...` + `articles/zh-Hant/...`) | schema migration + 13 articles to split |
| i18n | Dual-DOM toggle (legacy) | Astro native i18n routing (`/en/`, `/zh-Hant/`) | full replacement |
| Search | `pagefind@1.5.2` in deps, not wired | Pagefind dialog + ⌘K | implement UI + index step |
| Pages | `index`, `category/`, `news/` | + `/vendor/`, `/tag/`, `/archive/`, `/search/`, `/about/`, `/404` | 6 new page types |
| Components | minimal | 20 contracts in §4 | full library |
| CI | deploy.yml only (Node 22 → gh-pages) | + lint, typecheck, axe, Lighthouse, parity, smoke | add `ci.yml` |
| Tests | none | Vitest + Playwright + axe | from zero |
| Tokens | Tailwind defaults | OKLCH, dark-primary, AAA contrast | from zero |
| Tooling | npm | pnpm + commitlint + husky/lefthook + ESLint + Prettier + Stylelint | from zero |

13 articles in `src/content/news/` to migrate. Internal-use modal exists (spec swaps it for a dismissible `<dialog>`).

---

## Phase order (mapped to spec §10)

Each phase is independently shippable. Cap each at the day-estimate; if it overruns, descope rather than delay.

### Phase 0 — Repo hygiene + security baseline · ¾ day · *do this first*
**Goal:** make the repo defensible without changing user-visible behavior.
- Switch `npm` → `pnpm`; commit `pnpm-lock.yaml`, drop `package-lock.json`.
- Add ESLint (`astro-eslint-parser` + Astro plugin), Prettier (`prettier-plugin-astro`), Stylelint.
- Add `tsconfig.json` strict mode if not already; ensure `astro check` is green.
- Add commitlint + lefthook (Husky alternative; lighter, no Node hooks).
- Create `.github/workflows/ci.yml`: install → lint → typecheck → build. Gate PRs on it.
- Add `LICENSE` (suggest "All rights reserved — internal use" matching `package.json` "UNLICENSED").

**Security baseline (new):**
- Audit `whitespace-dc` GitHub org membership: `gh api orgs/whitespace-dc/members` — confirm only intended writers have push.
- Enable Dependabot security updates + Dependabot version updates (weekly).
- Add `actions/dependency-review-action` to PR workflow.
- Apply the-system's 7-day rule: no packages published <7d ago. Document in `CONTRIBUTING.md`.
- Add a CI grep step for sensitive markers (`TODO-CONFIDENTIAL`, customer codenames once known) — fail PR on hit.
- Confirm `rel="noopener noreferrer nofollow"` on every external link in `Prose` (already noopener+noreferrer per spec; add nofollow).

**Done when:** `pnpm install && pnpm lint && pnpm typecheck && pnpm build` is clean; CI runs on PR; Dependabot enabled; org membership verified; no user-visible change.

**Risk:** lockfile churn could break the existing GH Pages deploy if Node version drifts. Pin Node 22 in CI explicitly.

---

### Phase 1 — Design tokens + base layout · 1 day
**Goal:** shift visual identity to the OKLCH token system; everything visible afterward derives from it.
- Tailwind v3 → v4 (CSS variables-first, OKLCH-friendly).
- Create `src/styles/{tokens.css, reset.css, typography.css, prose.css, global.css}` per §3.1–3.2.
- Add inline pre-paint theme script per §6.4.
- Build `BaseLayout.astro` with skip link, sticky `<header>`, `<main id="main">`, `<footer>`.
- Replace existing layout with new shell (keep current pages rendering; they look different but still work).
- Build primitives: `ThemeToggle`, `SkipLink`, `Pill`, `Kbd`.

**Done when:** dark + light themes both render with no flash; tokens live only in `tokens.css`; focus ring visible on every focusable element; axe shows 0 critical/serious on home.

**Risk:** Tailwind v4 migration drops some v3 class names. Run `pnpm build` after the upgrade and grep for typography/color classes that no longer exist.

---

### Phase 2 — Content collections + i18n routing · 2–3 days
**Goal:** kill the dual-DOM toggle; move to mirrored per-locale files.

> **Cost note:** spec calls the migration "mechanical" — it isn't. Current schema is dual-field-in-one-file (`title_en` + `title_zh`); spec wants 26 separate files (13 articles × 2 locales) each requiring new fields (`mode`, `lang`, `translationOf`, `generatedBy`, `sourceModel`, expanded `sources.kind` enum) and human review of zh-Hant text. Budget 2-3 days, not 1-2.
- Rewrite `src/content.config.ts` per spec §2.1 (single `article` collection per locale, with `lang`, `translationOf`, `mode`, `tags`, expanded `sources.kind` enum, `generatedBy`, etc.).
- Migrate 13 existing `src/content/news/*.md` → `src/content/articles/{en,zh-Hant}/{category}/{slug}.md`. Mechanical split: take dual fields, produce two files. Slug = `YYYY-MM-DD-<kebab>` matching the spec regex.
- Configure `astro.config.mjs` i18n: `defaultLocale: 'en'`, `locales: ['en','zh-Hant']`, `routing: 'prefix-other-locales'`.
- Mirror `src/pages/` into `src/pages/en/` and `src/pages/zh-Hant/`.
- Build `src/lib/i18n.ts` (hreflang + path-mirroring helpers).
- Add `scripts/check-translation-parity.ts` and wire into CI.
- Add `src/content/taxonomy/categories.ts` (12 canonical categories with EN + zh-Hant labels).

**Done when:** `/en/` and `/zh-Hant/` both render; `<html lang>` is correct; `LangSwitch` preserves deep paths; parity script blocks merge on a deliberately-broken commit.

**Risk:** existing 13 articles' frontmatter doesn't have everything the new schema requires (e.g. `generatedBy`, `mode`, `translationOf`). Default sensible values during migration; don't block on perfect provenance for legacy posts.

---

### Phase 3 — Article + listing components · 1–2 days
**Goal:** the component library that powers Home, Category, and brief Article detail.
- `ArticleCard` (with `lead`, `pinned`, `default` variants) + stretched-link pattern.
- `ArticleMeta`, `TrustBadge` (with bar microvisual + tooltip rationale), `VendorChip`, `TagList`, `TimeStamp`, `SourceList`.
- `ArticleHeader`, `ArticleBody`, `ArticleFooter`, `Prose`.
- `Breadcrumbs`, `PrevNextArticles`.
- Implement Home (§5.1), Category (§5.2 with pagination via `getStaticPaths().paginate`), Article Brief (§5.3).
- Density toggle (Comfortable / Compact) wired to `localStorage`.

**Done when:** Home + at least one Category page + one Article Brief render at all 5 widths (360/768/1024/1280/1920); `pnpm build` ≤ 8 KB JS gzipped on Home; trust rationale reachable via keyboard.

**Risk:** stretched-link + nested clickable chips is fiddly. Test keyboard tab order early; if confusing, drop nested chips' independent links rather than ship a confusing card.

---

### Phase 4 — Deep-dive + reading affordances · ½–1 day
**Goal:** long-form mode with TOC and reading progress.
- `ArticleDeepDiveLayout` with sticky right-rail TOC at ≥ 1024px.
- `ReadingProgress` (~30 lines vanilla JS, IntersectionObserver, only on detail pages).
- Lede paragraph styling (`--fs-20`).
- Verify `Prose` rules for tables, code blocks, blockquotes, footnotes.

**Done when:** at least one article in `mode: deep-dive` renders with active-section TOC highlight; `prefers-reduced-motion: reduce` disables the progress animation.

---

### Phase 5 — Search · ½–1 day
**Goal:** Pagefind-powered ⌘K dialog.
- Wire `pagefind` (already in deps) post-build via `scripts/build-pagefind.sh`.
- Build `SearchDialog` using native `<dialog>` element, render results ourselves (don't use Pagefind UI).
- `search.client.ts`: lazy-load Pagefind chunks on dialog open.
- ⌘K / `Ctrl+K` / `/` keybinds (skip while in input fields).
- `/en/search/?q=…` server-renders with empty results, hydrates from query param.

**Done when:** ESC closes; arrow keys navigate; focus trap holds; bundle ≤ 12 KB gzipped on first open.

**Risk:** Pagefind index size grows with content. At 13 articles it's tiny; at 1,800/yr (peak per spec) revisit chunking.

---

### Phase 6 — Filters, archive, vendor, tag · 1–2 days
**Goal:** power-user surfaces.
- `FilterBar` + `TrustFilter` + `DateRange` + `SortControl`. URL-param state. Per-category JSON manifest at build time (`category-{slug}.json`).
- `/archive` with calendar + table toggles.
- `/vendor/{slug}` and `/tag/{slug}`.

**Done when:** filter URL is shareable, deep-links work without JS (degrade gracefully with a "filters require JS" notice), archive renders both views.

---

### Phase 7 — RSS, sitemap, OG, JSON-LD, 404, About · ½ day
**Goal:** surfaces that aren't pages but are required.
- `@astrojs/rss` per category + all-feed + zh-Hant mirror.
- `@astrojs/sitemap` with hreflang.
- `scripts/generate-og.ts` using `satori` (build-time only).
- JSON-LD: `Article`, `BreadcrumbList`, `WebSite + SearchAction`.
- `/404` (localized, with search input + recent articles).
- `/about` (hand-written by Tantyo, both locales — the only page Claude Code shouldn't ghost-write).

---

### Phase 8 — A11y, perf, polish · 1 day
**Goal:** verify the spec's budgets in CI.
- Add `@axe-core/playwright` to CI; run on all 8 page types; fail PR on serious/critical.
- Lighthouse CI with budget assertions per §6.2.
- Astro View Transitions (built-in) — cross-fade body, shared-element on card→header.
- Visual QA at 5 widths, dark + light.

**Done when:** every box in the §11 acceptance matrix is checked for Phases 1–8.

---

### Phase 9 — VPS infrastructure · split into 9a + 9b

> **Re-framed:** the spec treated VPS as a serving migration. In practice, two separate workloads need VPS, on different timelines. Static serving stays on GH Pages until a real trigger appears.

#### Phase 9a — Ingest pipeline on VPS · 3-5 days · BUILD QUEUED 2026-05-29

> **Phase 2 trigger fired 2026-05-29** (CXIT team operational need). Build target ratified per `~/.claude/projects/-home-tantyo-projects-the-system/memory/project_whitespace.md` §"Phase 2 trigger fired 2026-05-29 (CXIT team need)". This section now mirrors the locked-in architecture; treat the memory file as canonical, this section as execution plan.

**Pipeline (per project_whitespace.md §Phase 2):**

```
IMAP newsletters (moriwhitespace@gmail.com)
  → Haiku: categorize → 12 categories
  → Sonnet: score 1-5 (drop <3)
  → Haiku: translate EN ↔ zh-Hant (Taiwan terminology per project_whitespace.md glossary)
  → Haiku/Sonnet: summarize per WHITES~3.md §2.3
  → Haiku: dedup vs last 30 days
  → volume cap (5/cat/day) + floor (1/cat/day, KB backfill mode)
  → Markdown commit to whitespace-dc/whitespace repo (branch + PR, never direct main)
  → GitHub Actions deploys after Tantyo merges
```

**Volume strategy (replaces earlier "5/cat" cap from §10 reference):**
- **Cap:** 5 news per category per day
- **Floor:** at least 1 per category per day. If fresh-news count < 1 for a category, agent scrapes vendor archives / trade press historical at same score-3+ threshold. Surfaces as KB entries (UI distinction TBD), not "today's news"
- **Principle:** quality > forced freshness. Don't pad low-tier; do surface backfill historical to hit the floor

**Schedule:** **22:00 UTC = 06:00 Taipei** (news ready when Tantyo wakes; avoids overlap with Mori's interactive Telegram sessions). Convention per [[feedback_cron_timezone]] — write cron in UTC, comment Taipei.

**Repo placement (CRITICAL):** Agent code lives in **separate private repo `whitespace-dc/whitespace-agent`** — NOT in the public site repo. Cleaner lifecycle, secrets never pollute public repo, deploy keys scoped per-purpose. Mirrors the pattern from Mori (the-system repo separate from personal-vault repo).

**Model routing** (per project_whitespace.md Token strategy; Max subscription budget):
- **Haiku** — categorize, translate EN↔zh-Hant, dedup, glossary application, source-stat tally, metadata extraction
- **Sonnet** — score-3 authenticity check (domain + corroboration + primary-source traceback + internal consistency), trust-score reasoning, weekly KB synthesis, edge cases where Haiku output ambiguous
- **Opus** — NEVER in daily runtime. Reserved for architecture/debug only at build time

Estimated cost: ~13M tokens/month at peak (Mori news pipeline + interactive ~5-10M/month; combined ~18-25M/month fits Max with headroom). Hard daily token budget per category — agent halts when hit.

**VPS Linux user separation:**
Three-user model from project_whitespace.md: `system`, `whitespace`, `tantyo`. Currently only `mori` exists. Create `whitespace` user with own home dir mode 700/750, own systemd timer (NOT user service since timer needs `sleep` resilience), own ssh-agent, own .env. Whitespace breach contained to whitespace user; Mori untouched.

**Failure alerts:** Telegram via existing VPS-Mori daemon (C1 architecture). Whitespace agent on failure shells `echo "alert" | claude --print` against Mori's daemon socket (reuses existing transport, lands on phone). No new monitoring infra.

**Quality gate:** PR-not-merge contract — agent commits to a feature branch, opens PR with summary, Tantyo skims via Telegram (links surface in failure alerts and 06:30 Taipei daily summary), merges if approved. Pattern mirrors `decisions/2026-05-26-vault-write-protocol.md` confidence matrix.

**Secrets** (env vars on VPS in `/home/whitespace/agent/.env`, NEVER in repo, mode 0600):
- Gmail IMAP app password (`moriwhitespace@gmail.com` — generated 2026-05-31, stored in Bitwarden)
- Anthropic API key (Max subscription)
- GitHub PAT (least-privilege scope: contents:write + pull-requests:write on whitespace-dc/whitespace only; no admin, no other repos)

**Prereqs (status 2026-05-31):**
- ✓ Gmail IMAP app password (generated + smoke-tested 2026-05-31, in Bitwarden)
- ⏳ `whitespace-dc/whitespace-agent` private repo bootstrap (Tantyo's click in GitHub UI)
- ⏳ `whitespace` Linux user creation on CX33 (Mori paste-once after repo exists)
- ⏳ Anthropic API key provisioning (already have Max subscription; need API access if using Anthropic API not just claude CLI)
- ⏳ GitHub PAT generation (Tantyo's click in GitHub UI, scoped)

**Done when:** one full daily run produces 1-5 article PRs per category, all CI checks green, Telegram alert fires on any subtask failure, Tantyo can merge via Telegram review by 06:30 Taipei.

**Risk:** Claude API spend at peak (mitigated by per-category daily token cap + Haiku routing for high-volume). IMAP rate limits if newsletter volume spikes (mitigated by incremental fetch with last-checked timestamp). PR backlog if Tantyo skips review for days (mitigated by stale-PR auto-close after 7 days with alert).

#### Phase 9b — Static serving migration · ½ day · *defer until trigger fires*
Triggers (any one):
- Auth needed (private content, internal-only access)
- GH Pages quotas bite (build minutes or bandwidth)
- Custom domain on a tier GH doesn't support
- Content becomes confidential and can no longer live in a public repo

When triggered:
- Caddy on CX33 with auto-TLS via Let's Encrypt.
- **Cloudflare Tunnel** (free) so VPS keeps zero open inbound ports — `cloudflared` runs outbound-only, traffic flows through CF.
- **Caddy `basic_auth` + IP allowlist** is enough for 15 readers — skip Authelia (heavyweight, needs identity backend you don't have).
- Caddy injects security headers: `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`. HSTS preload-ready after stable.
- `rsync -az --delete dist/ user@host:/srv/whitespace/` from a `deploy.yml` Job B, gated on `DEPLOY_TARGET=vps`.
- When auth lands: gate Pagefind index path behind the same auth — the search JSON leaks article excerpts otherwise.

**Don't execute until a trigger fires.** GH Pages handles 15-reader scale fine.

---

## Architecture today vs. tomorrow

```
Today (and through Phase 8):
  ─────────────────────────────────────────────
  [GitHub repo] ──CI──▶ [GH Pages]
                          │
                          └─▶ 15 readers

After Phase 9a (content production scaling):
  ─────────────────────────────────────────────
  [VPS: ingest cron]  ──PR──▶ [GitHub repo] ──CI──▶ [GH Pages]
   (Claude API +              (review + merge)        │
    scrape, hourly)                                   └─▶ readers

After Phase 9b (only if triggered: auth/private/quota):
  ─────────────────────────────────────────────
  [VPS: ingest + Caddy]  ◀─CF Tunnel─▶  [Cloudflare] ──▶ readers (gated)
   GitHub repo = audit trail only,
   no longer the publish path
```

VPS justification ladder:
1. **Mori (the-system)** — VPS is required. Already in plan.
2. **Whitespace ingest** — VPS is required when daily article production starts (Phase 9a).
3. **Whitespace serving** — VPS is *optional*, deferred (Phase 9b, trigger-gated).

CX33 is sized for #1 + #2 simultaneously; #3 is also fine on the same box.

---

## Today's first action

Phase 0, Step 1: switch to pnpm.

```bash
cd /home/tantyo/projects/whitespace
rm -f package-lock.json
corepack enable
corepack prepare pnpm@latest --activate
pnpm import          # converts package-lock.json's resolution to pnpm-lock.yaml (do BEFORE rm)
# OR clean install:
pnpm install
pnpm build           # confirm green
```

(Use `pnpm import` *before* deleting the npm lockfile if you want to preserve exact versions; otherwise `pnpm install` will resolve fresh from `package.json`.)

After that: open `.github/workflows/ci.yml` (new file) and stub install + build + typecheck.

---

## Risks held across the plan

1. **Tailwind v3 → v4 migration** in Phase 1 may break custom utilities. Time-box at 2 hours; if blocked, defer to a Phase 1a and ship Phase 1 on v3 with the token CSS as plain custom properties.
2. **Per-locale content split** in Phase 2 needs human review of each translation — don't auto-merge the migration PR.
3. **GH Pages CI minutes** — current quota is generous, but adding Lighthouse CI + Playwright + axe pushes builds to ~3-4 min. If quotas bite, run heavy checks only on PRs touching `src/styles/**` or `src/components/**`.
4. **Spec drift** — keep `WHITES~3.md` immutable; if a phase reveals a real conflict, update this `REVAMP-PLAN.md` not the spec, and note the deviation in `STATUS.md`.

---

## Out of scope for now

Per spec §1.1 explicit rejections — do not introduce React/Vue/Svelte islands, web fonts, analytics, service worker, ad slots, comments, share buttons, or third-party CDNs. If a phase tempts you to reach for one of these, stop and re-read §1.1.

## Out of scope for *this* plan

Content production (Claude Code writing articles) is governed by spec §2.3, not this plan. The plan covers infrastructure + UI; daily article ingest will land on top of the new content schema in Phase 2.
