# Whitespace — DC Intel · Frontend Revamp Spec

**Document type:** Implementation specification for Claude Code
**Target audience:** Claude Code as implementer; the human owner reviews acceptance criteria
**Project state:** Existing Astro v6.1.8 site at https://whitespace-dc.github.io/whitespace/ to be upgraded in place

> Source: this spec was produced by a senior-frontend-engineer review run via Claude in Chrome over three messages. It has been cleaned of message-app autolinking artifacts (filenames, dotted identifiers like `z.coerce.date`, the corrupted i18n table row, etc.) and reformatted with proper code fences and tables. Internal cross-references (e.g. "see §3.1") all resolve within this single file.

**Constraints (non-negotiable):**

- No paid third-party services. Only OSS, self-hosted, or perpetually-free tiers.
- Hosting: GitHub Pages today → VPS (user-owned) later. Migration must be smooth.
- Audience: 15 internal readers (data center engineers, designers, PMs).
- Content: bilingual EN ↔ zh-Hant, full parity. ~5 articles × 12 categories per day at peak (~1,800/yr). Must scale to 5K+ articles in 3 yrs.
- Privacy: zero analytics, zero tracking, zero third-party fonts/CDNs/scripts.
- Authoring: Claude Code writes Markdown. Human reviews & commits.

---

## 0. North Star

The site should feel like it was built by a senior frontend engineer with 20 years of dedication: calm, dense, fast, accessible, technically rigorous, free of trend-chasing, and trustworthy at a glance. References for tone: Stratechery (editorial calm), Linear (polished interactions), Fly.io (engineer density), SemiAnalysis (domain authority). It is dark-primary because readers stare at it for long sessions.

The single highest-priority outcome: **trustworthy feel + easier digestion of information**. Every decision below ladders up to that.

---

## 1. Architecture

### 1.1 Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Astro v5+ (already on v6.x) | Already in place, ideal for content-heavy multilingual SSG, zero JS by default |
| Styling | Tailwind CSS v4 + CSS custom properties for tokens | Already in place; v4 brings native CSS variables, OKLCH, container queries |
| Content | Astro Content Collections with Zod schemas | Type-safe frontmatter, build-time validation, refuses to build malformed content |
| Search | Pagefind (OSS, static, Rust-compiled WASM) | Zero infra, scales to 10K+ docs, builds index at deploy time, ~50KB on first search |
| Images | `astro:assets` + sharp (built into Astro) | Responsive, lazy, AVIF/WebP, proper aspect ratios, no CLS |
| i18n | Astro native i18n routing (en default, zh-Hant) | Replaces current dual-DOM toggle; gives proper hreflang and clean URLs |
| Markdown | MDX for deep-dive articles, plain Markdown for briefs | MDX only where charts/embeds needed; keep briefs simple |
| Code highlighting | Shiki (built into Astro) | Build-time, themeable, no runtime cost |
| Icons | Iconify via astro-icon (Lucide set) | Tree-shaken, inlined, no JS, no font request |
| Charts (future) | Charts as static SVG generated at build time from frontmatter or sidecar JSON. Library: Observable Plot invoked in a build script, output to SVG. | No runtime charting library shipped. |
| Forms (future) | None for now. When auth arrives, server-side handled by Caddy/auth layer. | |
| Build | GitHub Actions → GH Pages (today) / rsync to VPS (later) | |
| Linting | ESLint, Prettier, Stylelint, `@axe-core/cli` in CI for a11y | |
| Testing | Vitest for utilities, Playwright smoke + a11y tests for key pages | |
| Type system | TypeScript strict mode | |

**Explicitly rejected:**

- ❌ Any client-side framework runtime (React/Vue/Svelte islands) unless absolutely required. The whole site should ship < 20KB of JS.
- ❌ Web fonts. System font stack only (see §3.2). No Google Fonts request, no FOUT, no privacy leak, no CLS.
- ❌ Any analytics. Server logs only when on VPS.
- ❌ Service worker for now. Revisit only if we measure real benefit.

### 1.2 Directory layout

```
whitespace/
├─ .github/workflows/
│  ├─ ci.yml                    # lint, typecheck, build, axe, playwright
│  └─ deploy.yml                # build + deploy to gh-pages OR rsync to VPS
├─ public/
│  ├─ favicon.svg               # the dot-grid icon, see §3.6
│  ├─ favicon-32.png
│  ├─ favicon-180.png
│  ├─ og-default.png            # 1200×630 fallback OG card, generated once
│  └─ robots.txt
├─ src/
│  ├─ content/
│  │  ├─ config.ts              # Zod schemas
│  │  ├─ articles/
│  │  │  ├─ en/
│  │  │  │  └─ networking/
│  │  │  │     └─ 2025-10-29-arista-r4-800g.md
│  │  │  └─ zh-Hant/
│  │  │     └─ networking/
│  │  │        └─ 2025-10-29-arista-r4-800g.md
│  │  ├─ vendors/               # one md per vendor (NVIDIA, Arista, …)
│  │  └─ taxonomy/
│  │     ├─ categories.ts       # canonical list of 12 categories, both langs
│  │     └─ tags.ts
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ SiteHeader.astro
│  │  │  ├─ SiteFooter.astro
│  │  │  ├─ SkipLink.astro
│  │  │  ├─ CategoryNav.astro
│  │  │  └─ LangSwitch.astro
│  │  ├─ article/
│  │  │  ├─ ArticleCard.astro
│  │  │  ├─ ArticleMeta.astro
│  │  │  ├─ TrustBadge.astro
│  │  │  ├─ VendorChip.astro
│  │  │  ├─ TagList.astro
│  │  │  ├─ SourceList.astro
│  │  │  ├─ ArticleHeader.astro
│  │  │  ├─ ArticleBody.astro
│  │  │  ├─ ArticleFooter.astro
│  │  │  ├─ Prose.astro             # styled wrapper for MDX content
│  │  │  └─ ReadingProgress.astro
│  │  ├─ navigation/
│  │  │  ├─ PrevNextArticles.astro
│  │  │  └─ Breadcrumbs.astro
│  │  ├─ search/
│  │  │  ├─ SearchDialog.astro      # ⌘K trigger
│  │  │  └─ search.client.ts        # 8KB Pagefind init, only loaded on open
│  │  ├─ filters/
│  │  │  ├─ FilterBar.astro
│  │  │  ├─ TrustFilter.astro
│  │  │  ├─ DateRange.astro
│  │  │  └─ SortControl.astro
│  │  └─ primitives/
│  │     ├─ Tooltip.astro            # accessible popover (keyboard + touch)
│  │     ├─ Pill.astro
│  │     ├─ Kbd.astro
│  │     ├─ TimeStamp.astro          # <time datetime=…> with relative+absolute
│  │     └─ ThemeToggle.astro        # honored, persisted in localStorage
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  ├─ HomeLayout.astro
│  │  ├─ CategoryLayout.astro
│  │  ├─ ArticleBriefLayout.astro
│  │  └─ ArticleDeepDiveLayout.astro
│  ├─ pages/
│  │  ├─ index.astro               # redirects to /en/
│  │  ├─ en/
│  │  │  ├─ index.astro            # Latest
│  │  │  ├─ category/[slug]/index.astro       # paginated
│  │  │  ├─ category/[slug]/[page].astro
│  │  │  ├─ vendor/[slug].astro
│  │  │  ├─ tag/[slug].astro
│  │  │  ├─ archive/index.astro                # full chronological index
│  │  │  ├─ search.astro
│  │  │  ├─ news/[category]/[slug].astro       # article detail
│  │  │  ├─ about.astro
│  │  │  └─ 404.astro
│  │  ├─ zh-Hant/                  # mirror of /en/
│  │  ├─ rss/
│  │  │  ├─ all.xml.ts
│  │  │  └─ [category].xml.ts
│  │  └─ sitemap-index.xml.ts
│  ├─ styles/
│  │  ├─ tokens.css                # all design tokens as CSS custom properties
│  │  ├─ reset.css                 # tiny custom reset, not normalize.css
│  │  ├─ typography.css
│  │  ├─ prose.css                 # body-copy rules for MDX/Markdown
│  │  └─ global.css                # imports above + tailwind layers
│  ├─ lib/
│  │  ├─ i18n.ts                   # locale helpers, hreflang map
│  │  ├─ dates.ts                  # Intl.DateTimeFormat helpers
│  │  ├─ slug.ts
│  │  ├─ trust.ts                  # 1–5 → label, color, description
│  │  ├─ pagination.ts
│  │  └─ search.ts
│  ├─ middleware.ts                # locale detection / redirects
│  └─ env.d.ts
├─ scripts/
│  ├─ generate-og.ts               # build-time OG image generator (satori, OSS)
│  ├─ build-pagefind.sh            # post-build: pagefind --site dist
│  └─ check-translation-parity.ts  # CI: every en/* must have a zh-Hant/* twin
├─ tests/
│  ├─ a11y.spec.ts                 # axe + playwright
│  ├─ smoke.spec.ts
│  └─ visual.spec.ts               # optional, screenshot-diff a few key pages
├─ astro.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

### 1.3 Hosting & deploy

**Phase 1 (today, public, GH Pages):** GitHub Actions builds on push to `main`, runs CI (lint + typecheck + axe + playwright + parity check + build), then publishes `dist/` to `gh-pages` branch. Pagefind index built post-build and committed alongside.

**Phase 2 (later, VPS):**

- Caddy as reverse proxy + automatic HTTPS.
- Static `dist/` rsynced via SSH from the same Action; only credential is a deploy key.
- Caddy `basic_auth` or a forward-auth integration with a tiny self-hosted auth service (e.g., Caddy + caddy-security or Authelia OSS) gates the site behind email allow-list.
- No code change in the Astro app between phases.

### 1.4 URL structure

```
/                                        → 302 → /en/  (or zh-Hant per Accept-Language)
/en/                                     → Latest
/en/category/networking/                 → page 1
/en/category/networking/2/               → page 2
/en/news/networking/2025-10-29-arista-r4-800g/
/en/vendor/arista/
/en/tag/800g-ethernet/
/en/search/?q=…
/en/archive/
/en/about/
/zh-Hant/…                               → mirror, same slugs
/rss/all.xml
/rss/networking.xml
/sitemap-index.xml
```

Old URLs from the MVP get permanent 301s via a small `_redirects`-equivalent (handled in Caddy on VPS; on GH Pages, rendered HTML redirect pages for the few that exist today).

---

## 2. Content model

### 2.1 Frontmatter schema (Zod, in `src/content/config.ts`)

```ts
import { defineCollection, z } from 'astro:content';

const article = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // identity
    slug: z.string().regex(/^\d{4}-\d{2}-\d{2}-[a-z0-9-]+$/),
    title: z.string().min(8).max(140),
    summary: z.string().min(40).max(280),       // shown on cards
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),

    // taxonomy
    category: z.enum([
      'compute','networking','power','cooling','mep','site',
      'modular','racks','software','industry','regulatory','standards'
    ]),
    tags: z.array(z.string()).max(8).default([]),
    vendors: z.array(z.string()).default([]),   // refs vendor collection

    // editorial trust (the most important signal)
    trust: z.object({
      score: z.number().int().min(1).max(5),
      rationale: z.string().min(10).max(240),
    }),

    // sources
    sources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      kind: z.enum(['primary','corroborating','analyst','trade-press']),
      trust: z.number().int().min(1).max(5),
    })).min(1),

    // mode
    mode: z.enum(['brief','deep-dive']).default('brief'),
    readingTimeMin: z.number().int().optional(), // computed if absent

    // assets (future)
    cover: image().optional(),
    coverAlt: z.string().optional(),
    ogImage: image().optional(),

    // generation provenance (zero-tracking but useful for audit)
    generatedBy: z.enum(['claude-code','human','hybrid']).default('claude-code'),
    sourceModel: z.string().optional(),         // free text e.g. "claude-opus-4.7"

    // i18n bookkeeping
    lang: z.enum(['en','zh-Hant']),
    translationOf: z.string().optional(),       // slug of canonical sibling

    // misc
    draft: z.boolean().default(false),
    pinned: z.boolean().default(false),
  }),
});

const vendor = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    nameLocal: z.record(z.string()).optional(), // {"zh-Hant": "輝達"}
    website: z.string().url().optional(),
    category: z.array(z.string()),
    description: z.string().max(280).optional(),
  }),
});

export const collections = { article, vendor };
```

### 2.2 Translation parity rule

CI script (`scripts/check-translation-parity.ts`) must fail the build if any article exists in `en/` without a matching slug in `zh-Hant/` (and vice versa) unless the file's frontmatter explicitly declares `translationOf` pointing the other way, or `pinned: true` with explicit override. This forces bilingual parity by design.

### 2.3 Authoring workflow optimized for Claude Code

1. Claude Code reads its source articles (web).
2. Writes two Markdown files: `src/content/articles/en/{category}/{slug}.md` and `src/content/articles/zh-Hant/{category}/{slug}.md`.
3. Commits with conventional commit message `content(networking): add arista r4 800g`.
4. CI validates schema + parity + axe + builds.
5. Human reviews PR, merges, GH Action deploys.

Markdown template Claude Code uses (English example):

```markdown
---
slug: 2025-10-29-arista-r4-800g
title: "Arista launches R4 Series 800G platforms for AI data center interconnects"
summary: >-
  Arista released the modular 7800R4 with up to 576 ports plus the new HyperPort 3.2 Tbps single-port interface for inter-DC scale. Two 7280R4 fixed-form switches ship now; HyperPort linecards arrive Q1 2026.
publishedAt: 2025-10-29
category: networking
tags: [800g-ethernet, ai-fabric, hyperport, optics]
vendors: [arista]
trust:
  score: 5
  rationale: Vendor primary press release corroborated by SDxCentral and DCNN.
sources:
  - title: Arista Networks Unveils Next Generation Data and AI Centers
    url: https://investors.arista.com/...
    kind: primary
    trust: 5
  - title: Arista unveils 800G platforms to power AI data center interconnects
    url: https://www.sdxcentral.com/...
    kind: corroborating
    trust: 4
mode: brief
generatedBy: claude-code
sourceModel: claude-opus-4.7
lang: en
---

Arista Networks released the R4 series on October 29, 2025 — the modular 7800R4 chassis providing up to 576 ports plus the new HyperPort 3.2 Tbps single-port interface for inter-data-center scaling.

Two 7280R4 fixed-form switches ship immediately; 7020R4 variants and HyperPort linecards arrive in Q1 2026. Dell'Oro projects 800 G port shipments will outpace 400 G by late 2026.
```

**Hard rules for Claude Code when writing content:**

- Never embed hard newlines mid-paragraph in the body. Let the renderer wrap.
- `summary` is a single sentence, no line breaks, used in cards and OG image.
- Trust rationale must reference the actual sources by name where possible.
- `slug` must match the filename and be ISO-date-prefixed.
- For `deep-dive` mode, body must include at least one H2; first H2 marks the "fold" for index excerpts.

---

## 3. Design system

### 3.1 Color (dark-primary, OKLCH, AAA on body where possible)

All tokens live in `src/styles/tokens.css` as CSS custom properties on `:root` (dark) and `[data-theme="light"]`. We use OKLCH so contrast and tonal stepping are perceptually uniform.

```css
:root {
  /* dark theme — primary */
  --bg-0:         oklch(0.18 0.012 250);   /* page */
  --bg-1:         oklch(0.21 0.014 250);   /* card */
  --bg-2:         oklch(0.24 0.016 250);   /* hovered card */
  --bg-inset:     oklch(0.15 0.010 250);   /* deeper recesses */
  --line:         oklch(0.30 0.014 250 / 0.6);
  --line-strong:  oklch(0.40 0.016 250);
  --text-0:       oklch(0.96 0.005 250);   /* headlines */
  --text-1:       oklch(0.88 0.006 250);   /* body */
  --text-2:       oklch(0.72 0.010 250);   /* meta */
  --text-3:       oklch(0.58 0.014 250);   /* tertiary */
  --accent:       oklch(0.78 0.130 200);   /* calm cyan, not neon */
  --accent-ink:   oklch(0.20 0.014 200);
  --accent-quiet: oklch(0.78 0.130 200 / 0.14);

  /* trust scale — semantic, not rainbow */
  --trust-5:      oklch(0.82 0.110 150);   /* primary source — calm green */
  --trust-4:      oklch(0.82 0.090 170);
  --trust-3:      oklch(0.82 0.090 90);    /* amber */
  --trust-2:      oklch(0.78 0.110 50);
  --trust-1:      oklch(0.72 0.140 25);    /* deep alert orange — never red */

  --focus:        oklch(0.85 0.150 220);
  --selection:    oklch(0.78 0.130 200 / 0.30);

  /* radii, shadow, motion */
  --radius-1: 4px;
  --radius-2: 8px;
  --radius-3: 12px;
  --shadow-1: 0 1px 0 oklch(0 0 0 / 0.3), 0 0 0 0.5px var(--line);
  --shadow-2: 0 6px 24px -8px oklch(0 0 0 / 0.5);
  --ease:     cubic-bezier(0.2, 0.6, 0.2, 1);
  --dur-1:    120ms;
  --dur-2:    200ms;
  --dur-3:    320ms;
}

[data-theme="light"] {
  --bg-0:         oklch(0.99 0.003 250);
  --bg-1:         oklch(0.97 0.004 250);
  --bg-2:         oklch(0.95 0.005 250);
  --bg-inset:     oklch(1.00 0 0);
  --line:         oklch(0.88 0.005 250);
  --line-strong:  oklch(0.78 0.006 250);
  --text-0:       oklch(0.18 0.014 250);
  --text-1:       oklch(0.28 0.012 250);
  --text-2:       oklch(0.45 0.010 250);
  --text-3:       oklch(0.58 0.010 250);
  --accent:       oklch(0.50 0.130 220);
  --accent-ink:   oklch(0.99 0.003 220);
  --accent-quiet: oklch(0.50 0.130 220 / 0.10);
  --trust-5:      oklch(0.45 0.110 150);
  --trust-4:      oklch(0.50 0.090 170);
  --trust-3:      oklch(0.55 0.090 90);
  --trust-2:      oklch(0.55 0.110 50);
  --trust-1:      oklch(0.50 0.140 25);
  --focus:        oklch(0.50 0.150 220);
  --selection:    oklch(0.50 0.130 220 / 0.18);
}
```

**Contrast contract (must verify in CI with pa11y or axe):**

- `--text-1` on `--bg-0`: ≥ 7:1 (AAA).
- `--text-2` on `--bg-0`: ≥ 4.5:1 (AA).
- `--accent` on `--bg-0`: ≥ 4.5:1.
- Trust pills: pill bg = trust at 14% alpha, pill text = trust color, both yielding ≥ 4.5:1 on the underlying card.
- Focus ring: ≥ 3:1 against any background it can land on.

Theme is initialized in a tiny inline script (see §6.4) before paint, no flash.

### 3.2 Typography

System stack only:

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI",
             "Helvetica Neue", "PingFang TC", "Microsoft JhengHei",
             "Noto Sans TC", sans-serif;
--font-serif: ui-serif, "Charter", "Iowan Old Style", "Source Serif Pro",
              "PingFang TC", "Songti TC", serif;
--font-mono: ui-monospace, "SF Mono", "JetBrains Mono", "Cascadia Mono",
             Menlo, Consolas, monospace;
```

- UI / cards / nav / metadata → `--font-sans`.
- Long-form deep-dive article body → `--font-serif` for reading comfort. Briefs stay in sans (they're skimmed, not read).
- Code / data tables / port counts / model numbers → `--font-mono`, `font-feature-settings: "tnum","ss01"`.

Type scale (modular, 1.200 ratio, fluid via clamp):

| Token | Size | Use |
|---|---|---|
| `--fs-12` | 12px → 12.5px | meta, kbd |
| `--fs-13` | 13px → 13.5px | nav, footer, pill text |
| `--fs-14` | 14px → 14.5px | secondary copy, captions |
| `--fs-15` | 15px → 15.5px | card body, list items |
| `--fs-16` | 16px → 17px | brief article body |
| `--fs-18` | 18px → 19.5px | deep-dive article body |
| `--fs-20` | 20px → 22px | small headings (h3) |
| `--fs-22` | 22px → 24px | card title (h2) |
| `--fs-28` | 28px → 32px | category title (h1) |
| `--fs-36` | 36px → 44px | article title (h1) |
| `--fs-48` | 48px → 60px | hero, only on home above fold |

Line-height: 1.65 for serif body; 1.5 for sans body; 1.2 for headings. Letter-spacing: −0.01em on h1/h2; 0 elsewhere. Numbers everywhere use `font-variant-numeric: tabular-nums`.

Reading measure: prose `max-width: 68ch`. Cards stay flush with their card width — but body text inside cards uses normal soft-wrapping (not `whitespace-pre-line`).

### 3.3 Spacing & layout

8-pt grid: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96 (Tailwind v4 already exposes these). Container widths:

- Reading column (article body): `min(68ch, 100% - 32px)`
- Index column (cards): `min(72rem, 100% - 32px)`
- App-shell width (header/footer): `min(80rem, 100% - 32px)`

Vertical rhythm: paragraph `margin-block` = 1em; H2 `margin-top` = 2em; H3 = 1.5em.

**Density:** there are two density modes, **Comfortable** (default) and **Compact**. Compact reduces card vertical padding by 25% and line-height by 0.05. Toggle in user prefs (`localStorage`), affects only listing pages.

### 3.4 Motion

- Durations: 120 / 200 / 320ms only.
- Easing: one curve, `cubic-bezier(0.2, 0.6, 0.2, 1)` ("ease-out-quart-ish").
- Respect `prefers-reduced-motion: reduce` — disables all non-essential motion, including the article transitions in §3.5.
- No parallax. No bounce. No spring. No ambient animation. The site never moves unless the user did something.

### 3.5 Page transitions (Linear-inspired)

Use Astro View Transitions API (built-in, free, progressive enhancement, native browser API where available, JS-polyfilled fallback).

- Cross-fade body content (200ms).
- Shared-element transition on the article card → article header (title morph from card to detail header).
- Persist the header and nav (no flicker).
- Disabled when `prefers-reduced-motion: reduce`.

### 3.6 Iconography & favicon

Lucide icon set via astro-icon, inlined as SVG, never as font.

Favicon: a 4×4 grid of dots (referencing data center rack tiles), accent-colored on a dark square. Provided as `favicon.svg` (mask-icon) + 32px and 180px PNG fallbacks. The SVG should respect `prefers-color-scheme` via media queries inside the SVG.

### 3.7 Focus system

A single global focus style that works on every focusable element:

```css
:where(a, button, input, textarea, select, summary, [tabindex]):focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
  border-radius: var(--radius-1);
}
```

No `outline: none` anywhere. No custom focus ring per component.

### 3.8 Selection & hover

- Selection: `::selection { background: var(--selection); color: var(--text-0); }`
- Hover on cards: `--bg-1` → `--bg-2` (no scale, no shadow expansion).
- Hover on links: subtle underline appears (text-decoration-thickness 1px → 2px, decoration-color shifts from accent at 50% to 100%).

---

## 4. Components (contracts)

Every component listed has: purpose · props · slots · states · a11y · keyboard. Claude Code should treat the contract as binding.

### 4.1 `SiteHeader`

- **Purpose:** brand, primary nav, search trigger, theme toggle, language switch.
- **Layout:** sticky top, height 56px desktop / 52px mobile. Backdrop: `backdrop-filter: blur(8px) saturate(140%)` over `--bg-0 / 0.85`. 1px bottom border (`--line`).
- **Children (in order):** brand link → primary `CategoryNav` (collapses on mobile) → spacer → search trigger button → `ThemeToggle` → `LangSwitch`.
- **Props:** `currentPath: string`, `locale: 'en' | 'zh-Hant'`.
- **States:** `scrolled` (shadow-1 appears after 8px scroll), `searchOpen` (search trigger visually pressed).
- **A11y:** wrapped in `<header role="banner">`. Brand link has `aria-label="Whitespace — DC Intel home"`. Search trigger has `aria-haspopup="dialog"` and `aria-keyshortcuts="Meta+K Control+K /"`. The header itself has `aria-label="Site header"`.
- **Keyboard:** `/`, `Cmd+K`, or `Ctrl+K` opens search from anywhere (except inside input fields). `g h` jumps home, `g a` opens archive (vim-style; explained in `/about`).
- **Mobile:** below 768px, the category nav becomes a horizontally scrollable strip with `scroll-snap-type: x mandatory` and edge fade masks. There is no hamburger drawer — engineers prefer one-tap to category over two-tap into a menu, and a strip surfaces all 12 categories without modal hide.

### 4.2 `CategoryNav`

- **Purpose:** primary navigation across the 12 fixed categories.
- **Props:** `currentPath`, `locale`. Categories come from `src/content/taxonomy/categories.ts` (single source of truth, both languages).
- **States:** active (`aria-current="page"`), hover, focus. Active style: text becomes `--text-0`, an underline of `--accent` 2px appears, no background change. Hover: `--bg-2` background pill.
- **A11y:** rendered as `<nav aria-label="Categories"><ul role="list">…</ul></nav>`. Each item is `<li><a aria-current={isActive ? 'page' : undefined}>…</a></li>`.

### 4.3 `LangSwitch`

- **Purpose:** swap between `/en/...` and `/zh-Hant/...` while preserving deep path.
- **Behavior:** server-rendered as a real `<a>` link to the mirrored path of the current page; if no mirror exists, falls back to the locale root with a brief inline note ("translation pending"). Persisted preference written to `localStorage.lang` so subsequent root visits respect it. The `<html lang>` and `dir` attributes are always correct because they are rendered, not toggled.
- **A11y:** label is the target language ("中文" when on en, "English" when on zh-Hant), with `aria-label="Switch to Traditional Chinese" / "Switch to English"`. `hreflang` set on the link.

### 4.4 `ThemeToggle`

- **States:** `system` (default), `dark`, `light`. Cycles in that order on click.
- **Persistence:** `localStorage.theme = 'system'|'dark'|'light'`. Applied via tiny inline pre-paint script (§6.4). `data-theme` on `<html>`.
- **A11y:** `<button aria-label="Theme: dark (click to switch)">` updated on each toggle. Icon transitions are crossfades, not rotations (less motion).

### 4.5 `SearchDialog` (⌘K)

- **Purpose:** site-wide search with keyboard-first UX.
- **Implementation:** Pagefind index built post-build. Component is a `<dialog>` element (native, with focus trap + ESC built in). Pagefind's UI is not used; we render results ourselves so they match the design system.
- **Props:** none; controlled by global keybind.
- **Behavior:**
  - Open: focus moves to input, body scroll locked, backdrop `--bg-inset / 0.6` with blur.
  - Typing: debounced 80ms. Calls `pagefind.search(q)` and displays up to 20 results grouped by category.
  - Each result shows: category pill, headline, dimmed excerpt with `<mark>` highlights, date, trust badge.
  - Arrow keys navigate; Enter opens; ESC closes; Tab stays trapped inside dialog.
  - Empty state shows recent (last 10 articles) and recommended categories.
  - Errors (offline, no index): show graceful inline message with link to `/archive`.
- **A11y:** `<dialog aria-labelledby="search-title" aria-modal="true">`. Listbox semantics for results: `role="listbox"`, each `role="option"` with `aria-selected`. Live region announces result count.
- **Performance:** Pagefind chunks load on first open only. The trigger button is just HTML — no JS until the user opens.

### 4.6 `FilterBar` + `TrustFilter` + `DateRange` + `SortControl`

- **Where shown:** category pages and `/archive`.
- **Filters:** trust score (multi-select: 1–5), vendor (multi, autocomplete), tag (multi), date range (presets: 7d / 30d / 90d / 1y / all + custom).
- **Sort:** newest (default), oldest, trust desc, trust asc.
- **State strategy:** all filter state lives in URL search params (`?trust=4,5&vendor=arista&since=2025-09-01`). The page re-renders client-side by filtering an already-loaded JSON manifest of that category's articles (one `category-{slug}.json` artifact per category, generated at build time). This means:
  - Shareable URLs.
  - Deep links work without JS (server returns the unfiltered list with a non-blocking notice "filters require JS").
  - Total client JS for the filter system is < 6KB gzipped.
- **A11y:** every control has a visible `<label>`. Filter chips (active filters) are buttons with `aria-pressed`. Clearing a filter removes the chip and announces via live region: "Filter removed: trust ≥ 4. 124 results."
- **Keyboard:** `f` focuses the first filter; `r` resets all filters; `s` cycles sort.

### 4.7 `ArticleCard`

- **Purpose:** one article's listing presentation. Used on home, category, search, vendor, tag, archive.
- **Props:**

```ts
{
  article: ArticleEntry;     // typed via getCollection
  locale: 'en'|'zh-Hant';
  showCategory?: boolean;    // false on category page
  density?: 'comfortable'|'compact';
  variant?: 'default'|'pinned'|'lead'; // lead = first card on home, larger
}
```

- **Anatomy (top to bottom):**
  1. Meta row: `CategoryPill` (if shown) · `TimeStamp` · `TrustBadge` · `VendorChip`s.
  2. Headline (h2 or h3 depending on context, see §5 for which).
  3. Summary paragraph (no `whitespace-pre-line`, no hard wraps in source).
  4. Footer row: tag list (max 3 visible, "+N" overflow), reading time, mode pill ("Brief" / "Deep dive").
- **Behavior:**
  - Stretched-link pattern: `<article class="card">` is `position: relative`; the headline `<a>` has `::after { position: absolute; inset: 0 }` so the entire card is clickable, but inner links (vendor chip, tag chips) remain independently clickable via `position: relative; z-index: 1`.
  - Card hover: bg `--bg-1` → `--bg-2`, border `--line` → `--line-strong`. No transform, no shadow growth.
- **A11y:** `<article aria-labelledby="card-{slug}">`. The headline has `id="card-{slug}"`. Meta row uses `<div role="group" aria-label="Article metadata">`. Stretched link is the only path to the article from the card; no duplicate "Read more" link.
- **Lead variant:** spans full grid width, body summary uses `--fs-18`, optional cover image at top (when `cover` exists in frontmatter). Used for the most recent or pinned story on home.

### 4.8 `ArticleMeta`

- **Purpose:** the meta row used both in cards and on article detail pages, identical contract.
- **Composition:** `[ Category? · TimeStamp · TrustBadge · VendorChip[] ]` separated by a 1×1 dot character `·` rendered as `aria-hidden`.

### 4.9 `TrustBadge`

- **Purpose:** the most important editorial signal. Must be unambiguous, accessible, and not red (red implies "wrong" not "weak").
- **Visual:** small pill, label = "Trust 5/5" (en) / "可信 5/5" (zh-Hant), background = `--trust-{score}` at 14% alpha, text = `--trust-{score}`. A 4-tick filled-bar microvisual sits before the label (5 tiny rects, the trust score number filled). On `:hover` and `:focus-within`, the rationale appears in a `Tooltip`.
- **A11y:** the badge is itself a `<button type="button" aria-describedby="trust-pop-{id}">` (yes, button — to make the rationale keyboard-reachable). Tooltip uses Popover API (native, progressively enhanced; falls back to inline `<details>` on browsers without it). Screen readers get: "Trust 5 of 5. Vendor primary press release corroborated by SDxCentral, DCNN."

### 4.10 `VendorChip`

- **Purpose:** identify vendor(s) referenced. Click navigates to `/vendor/{slug}`.
- **Visual:** quiet pill, sans 13px, `--text-2` text, `--bg-2` background, `--line` border. On hover: `--accent-quiet` background.
- **A11y:** `<a aria-label="Vendor: NVIDIA — see all NVIDIA articles">NVIDIA</a>`.

### 4.11 `TagList`

- **Purpose:** comma-less tag display. Up to 3 visible on cards, all on detail page.
- **Behavior:** overflow renders "+N" pill that links to article detail (where all tags are visible).

### 4.12 `TimeStamp`

- **Purpose:** rendered date, accurate and localized.
- **Behavior:** `<time datetime={ISO}>` showing absolute date in the locale's preferred format on detail pages and on archive; on cards, shows relative time when < 7 days ("3 days ago" / "3 天前"), absolute otherwise. Uses `Intl.DateTimeFormat` and `Intl.RelativeTimeFormat`. No client-side hydration: rendered at build time using site's "as of build" timestamp; for relative times we render absolute and decorate with relative as a `title` only if > build time relevance is needed. (Practical rule: if `now - publishedAt < 7d` at build time, render relative; else absolute.) This preserves zero-JS for cards.

### 4.13 `SourceList`

- **Purpose:** transparent provenance on article detail pages.
- **Visual:** numbered list under "Sources / 來源" heading. Each item: title (link, opens in new tab with `rel="noopener noreferrer"`), kind pill (primary/corroborating/analyst/trade-press), trust score microbadge.
- **A11y:** `<ol>` with descriptive heading. External link icon next to title with `aria-label="Opens in new tab"`. Kind pills are `<span>`, not interactive.

### 4.14 `Prose`

- **Purpose:** styled wrapper for all rendered Markdown/MDX. The single source of truth for body typography.
- **Rules (in `prose.css`):**
  - Body: `--fs-18` serif for deep-dive, `--fs-16` sans for brief.
  - `max-width: 68ch`. Headings flush left of column.
  - `h2` gets a hairline `::before` rule above it for visual grouping in deep dives only.
  - `blockquote`: 3px left border in `--accent`, italic, `--text-1`.
  - `pre/code`: `--bg-inset` background, mono font, `--fs-14`, scroll on overflow, no wrap. `code` inline gets a 2px-radius pill background.
  - Tables: zebra rows via `--bg-1` on `tr:nth-child(even)`, sticky header on long tables, `tabular-nums`.
  - Footnotes (rehype-plugin): superscript anchors that scroll-snap with offset to clear the sticky header.
  - First paragraph of deep-dive gets a slightly larger `--fs-20` lede treatment.

### 4.15 `ReadingProgress`

- **Purpose:** thin progress bar at top of article detail pages only.
- **Visual:** 2px height, `--accent`, fixed top, beneath header.
- **Implementation:** ~30 lines of vanilla JS using IntersectionObserver on the article body to compute % read; not loaded on listing pages. Disabled when `prefers-reduced-motion: reduce`.
- **A11y:** decorative; `aria-hidden="true"`. Real reading time is in the meta row.

### 4.16 `PrevNextArticles`

- **Purpose:** at the foot of every article: previous and next within the same category, by date.
- **Visual:** two columns, each a mini-card with arrow + label ("Previous in Networking") and the headline.
- **A11y:** `<nav aria-label="Adjacent articles">`.

### 4.17 `Breadcrumbs`

- **Purpose:** orient on detail pages. Home › Networking › Article title.
- **A11y:** `<nav aria-label="Breadcrumb"><ol>…</ol></nav>`. `Schema.org BreadcrumbList` JSON-LD emitted in head.

### 4.18 `Tooltip` (primitive)

- **Implementation:** wraps native HTML Popover API. Trigger is any focusable element with `popovertarget`. Falls back to `<details>` inline disclosure for browsers lacking Popover support (we will not polyfill; graceful degrade is sufficient given browser matrix).
- **Behavior:** opens on hover (with 100ms intent delay) AND on focus AND on tap. Closes on Escape, blur, or outside click.
- **Constraint:** never put information critical to comprehension only inside a tooltip; tooltips are enrichment.

### 4.19 `Pill`, `Kbd`

Self-explanatory primitives. `Kbd` uses `<kbd>` and styles platform-specific keys via `Intl.locale` + UA hint (Cmd vs Ctrl).

### 4.20 `SkipLink`

First focusable element. Visually hidden until focused. Jumps to `#main`. Wording: "Skip to content" / "略過導覽".

---

## 5. Pages

Each page below: purpose · URL · layout · data · empty/error · seo · perf notes.

### 5.1 Home `/en/` and `/zh-Hant/`

- **Purpose:** the daily glance. The single most-visited page. Optimized for "what's new across all 12 categories" in one scroll.
- **Layout (desktop ≥ 1024px):**
  - 12-col CSS grid.
  - Row 1: `Lead ArticleCard` spanning 12 cols (most recent or pinned).
  - Row 2: 3 cards × 4 cols each — the next 3 across categories.
  - Row 3 onward: 2-col grid of standard cards.
  - Right rail (≥ 1280px): a sticky "By category" mini-index showing the freshest item in each of the 12 categories with date and trust microbadge. Click jumps to that category page. This is the single most useful affordance for engineers tracking a beat.
- **Layout (mobile):** single-column stack of cards, lead card uncollapsed, no rail.
- **Top of page meta strip:** "Latest" h1 (sr-only on listing if visually clear), build timestamp ("Updated 2026-04-29 09:14 UTC"), feed link, archive link.
- **Data:** all articles in current locale, sorted by `publishedAt` desc. First 30 rendered SSR; remainder accessible via "Load more" (anchor link to `/archive`, no infinite scroll). Pinned articles always float to the top of their natural row.
- **SEO:** `<title>` = "Whitespace — DC Intel" / "Whitespace — 資料中心情報"; description from a curated string in i18n bundle; canonical = locale root; hreflang alternates emitted.
- **Perf:** zero JS required for first paint. View Transitions JS loads after `requestIdleCallback`. Search trigger is HTML; Pagefind only on open.

### 5.2 Category `/en/category/{slug}/` (paginated)

- **Purpose:** the beat page. Filters and sort live here.
- **Layout:**
  - Page header: localized category name as h1, post count, short category description (1 sentence, in `categories.ts`), RSS link `<link rel="alternate" type="application/rss+xml">` in head and visible as small icon.
  - `FilterBar` directly under header.
  - Cards listing.
  - Pagination footer: "Page 2 of 14" + Prev / Next + jump-to-page select.
- **Pagination:** 20 per page in comfortable density, 40 per page in compact density. Honored via Astro's `getStaticPaths` paginate.
- **Empty state:** if filters yield zero results, show "No matches. Try fewer filters" + a "Clear filters" button.
- **Perf:** static HTML; filter JS loads only on first interaction.

### 5.3 Article detail (Brief) `/en/news/{category}/{slug}/`

- **Purpose:** the canonical news read.
- **Layout:**
  - `Breadcrumbs`.
  - `ArticleHeader`: category pill, h1 title, meta row (date, updatedAt if any, trust, vendor chips), tags below.
  - `ArticleBody` via `Prose`. Rendering rules in §4.14. Briefs are 60–250 words.
  - `SourceList`.
  - `ArticleFooter`: provenance line ("Generated by Claude Code · Reviewed YYYY-MM-DD") + permalink + "Report issue" link (mailto for now, GitHub issue when on VPS).
  - `PrevNextArticles`.
- **No comments, no share buttons** — internal site, zero tracking.
- **SEO:** Article schema JSON-LD with `author`, `datePublished`, `inLanguage`, `isAccessibleForFree`, `publisher` (Whitespace DC Intel). hreflang to sibling locale.

### 5.4 Article detail (Deep dive) `/en/news/{category}/{slug}/`

- Same URL pattern; layout differs because `mode: deep-dive`.
- Adds: `ReadingProgress`, lede paragraph treatment, in-page TOC (h2 + h3 only) sticky on right rail at ≥ 1024px, "Back to top" affordance after 80% scroll.
- **TOC behavior:** built from rendered headings at compile time, so zero-JS for the visible state; the active-section highlight is enhanced by a small IntersectionObserver script (~1KB) when JS is available.

### 5.5 Vendor `/en/vendor/{slug}/`

- Vendor name (h1, with native-language alternate), short description, all articles mentioning the vendor as cards. Uses `FilterBar` minus the vendor filter (already implied).
- Counts per category as small chip strip at top: "Networking 23 · Compute 8 · …" — clickable to scoped filter.

### 5.6 Tag `/en/tag/{slug}/`

Same shape as vendor, scoped by tag.

### 5.7 Archive `/en/archive/`

- Full chronological index. Two layouts toggle:
  - **Calendar view:** months grouped, each shows a dense list `[date · category · headline · trust]`.
  - **Table view:** sortable columns: date, category, headline, vendor, trust. Same data, different shape.
- This page is where power users live.

### 5.8 Search `/en/search/?q=...`

- Server-renders with empty results region; client hydrates Pagefind, runs query from `?q`, populates. Useful for shared search URLs.
- Identical UI to the `SearchDialog` results region.

### 5.9 About `/en/about/`

- One page. Explains: what Whitespace is, who it's for, editorial trust scale (definitions of 1–5 with examples), keyboard shortcuts, how content is generated, how to read source citations, how to report issues, license note.
- This page is part of the "trustworthy feel" — it's the only marketing the site has.

### 5.10 404 `/en/404.html`

Localized message, search input, top categories list, last 5 articles. Never a dead-end.

### 5.11 RSS `/rss/all.xml` and `/rss/{category}.xml`

- Generated by Astro's `@astrojs/rss`. Title, summary, link, pubDate, category. One feed per category + one all-feed. Only English by default; if `lang=zh-Hant` query is added, return zh-Hant feed (or expose `/rss/zh-Hant/...` mirror — pick the latter, simpler).

### 5.12 Sitemap `/sitemap-index.xml`

Generated by `@astrojs/sitemap`. Excludes search and 404. Includes hreflang annotations.

### 5.13 Internal-notice

The current "Internal Use Only" modal is removed. Replaced by:

- A subtle banner above the footer on every page: "Internal — Whitespace DC team. Public mirror; do not share customer-confidential context in articles."
- A one-time `<dialog>` (native element) shown on first ever visit per device (cookieless, `localStorage.iw_seen=1`), dismissible via "I understand". This dialog uses `<dialog>` not `<div role="dialog">`, with native focus trap and ESC.

---

## 6. Accessibility & performance budgets

### 6.1 WCAG target: 2.1 AA, with selected AAA wins

- Body text contrast 7:1 (AAA), per §3.1.
- Focus visible everywhere; outline-offset 2px; never removed.
- Every interactive element reachable by keyboard, in logical tab order.
- All form controls have `<label>` (visible or sr-only) + `id` association. No placeholder-as-label.
- All images have meaningful `alt` (or `alt=""` if decorative); covers must have `coverAlt` in frontmatter (Zod refines: if `cover` set, `coverAlt` required).
- All icons have either accessible name (`aria-label`) or `aria-hidden="true"` if decorative beside text.
- All interactive controls have minimum 24×24 hit target (AA 2.5.8); we exceed to 32×32.
- `prefers-reduced-motion: reduce` removes view transitions, reading progress animation, and any non-essential motion.
- Live regions (`aria-live="polite"`) used for filter result counts and search result counts. Never `aria-live="assertive"`.
- Language: `<html lang>` correct per page; mid-page foreign-language quotes wrapped in `<span lang>`.
- Skip link present.
- Heading order strict: one `<h1>` per page, no level skips.

### 6.2 Performance budgets (CI-enforced)

- HTML doc: ≤ 25KB gzipped per page.
- CSS total: ≤ 30KB gzipped, single file, late-load not needed.
- JS shipped on home/category: ≤ 8KB gzipped (theme init + view-transition controller + density toggle).
- JS for search dialog: ≤ 12KB gzipped on open (Pagefind core lazy-loads chunks).
- Images: every image generated as AVIF + WebP fallback via `astro:assets`; max 1.5× device DPR; never larger than 1280px wide for body images, 2400px for OG.
- Web Vitals targets at p75 on mid-tier mobile / 4G: LCP ≤ 1.5s · INP ≤ 200ms · CLS ≤ 0.05 · TTFB ≤ 300ms (CDN/GH Pages-realistic).
- No Cumulative Layout Shift sources allowed: every image has explicit width/height or aspect-ratio; web-fonts banned (we use system stack); ads banned; banners reserve space.
- CI runs Lighthouse CI on home, category/networking, and one article detail. Budget violations fail the build.

### 6.3 Browser/device matrix

- Last 2 stable versions of Chrome, Edge, Firefox, Safari (desktop + iOS + iPadOS).
- Android Chrome last 2 stable.
- No IE. No legacy Edge. No Samsung Internet special-casing (works fine via Chromium).
- View Transitions API: progressively enhanced; non-supporting browsers see instant page change with no penalty.
- Popover API: graceful degrade to `<details>` for tooltips.
- Container queries: required (all targets support).

### 6.4 Theme init script (inline, runs before paint)

```html
<script>
  (function () {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.dataset.theme = t;
    } else {
      // 'system' — respect OS
      var mql = window.matchMedia('(prefers-color-scheme: light)');
      document.documentElement.dataset.theme = mql.matches ? 'light' : 'dark';
    }
  })();
</script>
```

This is the only inline script. It must run synchronously in `<head>` before body parsing; that is acceptable because it is < 200 bytes and prevents flash.

---

## 7. SEO, RSS, sitemap, metadata

- `<title>` per page: localized, descriptive, ends with " — Whitespace".
- `<meta name="description">` per page from Zod `summary` (article) or i18n bundle (index/category).
- Canonical link present on every page.
- `<link rel="alternate" hreflang="en" />` and `hreflang="zh-Hant"` and `hreflang="x-default"` on every page that has a counterpart.
- Open Graph: `og:title`, `og:description`, `og:type` (article or website), `og:url`, `og:image` (1200×630 generated at build time per article via `satori` + Astro's image pipeline; falls back to `og-default.png`).
- Twitter Card: `summary_large_image`. (Even though zero tracking, OG images are honored by Slack/Teams unfurl, which the team uses internally.)
- JSON-LD: `Article` schema on detail pages; `BreadcrumbList` on detail and category; `WebSite` with `SearchAction` on home (uses `/en/search/?q={query}`).
- `robots.txt`: `User-agent: * / Allow: /` for now (public). When auth lands: `Disallow: /` + remove sitemap from crawl.
- RSS feeds carry full summary, source list as `<source>` entries, GUID = canonical URL.

---

## 8. Testing

### 8.1 Unit (Vitest)

- `lib/dates.ts` (relative-time edge cases, locale switches).
- `lib/trust.ts` (label, color, contrast assertions).
- `lib/pagination.ts`.
- Schema parity script logic.

### 8.2 Integration / smoke (Playwright)

- Boot site, navigate: home → category → article → next → search dialog → search result.
- Open `<dialog>` (search), confirm focus trap, ESC closes, body scroll restored.
- Theme toggle persists across reload.
- Lang switch preserves deep path, updates `<html lang>` and hreflang.
- Filter URL params reflect into UI on direct deep-link.
- Reduced-motion media query disables view transitions.

### 8.3 Accessibility (Playwright + `@axe-core/playwright`)

- Run axe on: home, category page, article brief, article deep dive, search results, archive, 404, about.
- Zero violations of impact `serious` or `critical`. Allow `moderate` only with documented justification in the test file.

### 8.4 Visual regression (optional)

- Playwright screenshot snapshots of home (dark + light), one article (both modes), and search dialog. Threshold 0.1%. Runs only on PRs touching `src/styles/**` or design components.

---

## 9. CI / CD

### 9.1 `.github/workflows/ci.yml` — runs on every PR and push to non-main branches

Steps in order:

1. Checkout with full history (needed for git log provenance display in footer if used).
2. Setup pnpm (lockfile is `pnpm-lock.yaml`); use `actions/setup-node@v4` with Node LTS, cache pnpm store.
3. Install with `pnpm install --frozen-lockfile`.
4. Lint — `pnpm lint` runs ESLint, Prettier check, Stylelint.
5. Typecheck — `pnpm typecheck` runs `astro check` (covers `.astro` + `.ts` + content schema validation).
6. Translation parity — `pnpm parity` runs `scripts/check-translation-parity.ts`. Fails if mismatch.
7. Build — `pnpm build`.
8. Pagefind index — `pnpm pagefind` (post-build step, indexes `dist/`).
9. Lighthouse CI — `pnpm lhci` runs against the built site served by `http-server`. Asserts the perf budget in §6.2.
10. Axe — `pnpm test:a11y` runs Playwright + axe on the built site.
11. Smoke — `pnpm test:smoke` runs Playwright basic flow.
12. Upload `dist/` artifact for inspection.

All steps must pass for PR merge. CI runs in ≤ 4 minutes (the site is small).

### 9.2 `.github/workflows/deploy.yml` — runs on push to main

Two jobs, gated on environment:

**Job A: `deploy-gh-pages`** (active in Phase 1)

- Same checkout/install/build/pagefind as CI.
- `actions/upload-pages-artifact@v3` uploads `dist/`.
- `actions/deploy-pages@v4` publishes.

**Job B: `deploy-vps`** (commented out today; uncommented in Phase 2)

- Same build steps.
- `webfactory/ssh-agent@v0.9.0` to load SSH deploy key (from a single GitHub Secret).
- `rsync -az --delete dist/ user@host:/srv/whitespace/`.
- Optional `ssh user@host "caddy reload --config /etc/caddy/Caddyfile"` if Caddy reload is needed.

The same Action file holds both jobs guarded by an environment variable `DEPLOY_TARGET=gh-pages|vps`. Switching is one-line.

### 9.3 Branch policy

- `main` is protected. Direct pushes blocked. PRs require all CI green.
- Content branches: `content/{category}/{slug}` — Claude Code creates a PR per article (or a batched daily PR per category if you prefer; configurable via the authoring command Claude Code runs).
- Code branches: `feat/...`, `fix/...`, `chore/...`. Conventional Commits enforced by commitlint.

### 9.4 Local development

```bash
pnpm dev              # astro dev, port 4321
pnpm build            # astro build
pnpm preview          # serves dist
pnpm pagefind         # rebuild search index against dist
pnpm parity           # parity check
pnpm lint             # all linters
pnpm fix              # eslint --fix && prettier --write
pnpm test             # vitest
pnpm test:smoke       # playwright smoke
pnpm test:a11y        # axe
pnpm lhci             # local lighthouse-ci against preview
```

---

## 10. Migration phases

This is the executable plan. Each phase is independently shippable; nothing gets stuck in long-running branches.

### Phase 0 — Repo hygiene & guardrails (½ day)

- Add pnpm, lockfile, scripts.
- Add ESLint/Prettier/Stylelint configs (Astro-aware).
- Add TypeScript strict mode, `astro check` in CI.
- Add commitlint + husky (or lefthook).
- Set up CI workflow file (without deploy yet).
- Add LICENSE (your choice; suggest "All rights reserved — internal use" for an internal project, or a permissive license if desired).

Result: zero behavior change, but the repo is now defensible.

### Phase 1 — Design tokens + base layout (1 day)

- Create `src/styles/{tokens.css,reset.css,typography.css,prose.css,global.css}` per §3.
- Build `BaseLayout.astro` with skip link, real `<header>`, `<main id="main">`, `<footer>`. Use sticky header.
- Implement `ThemeToggle` + inline pre-paint script.
- Build `SiteHeader`, `CategoryNav`, `LangSwitch`, `SiteFooter`.
- Replace the existing dual-DOM language toggle with the new locale-routed approach. Keep current DOM intact temporarily (we'll migrate content next).

### Phase 2 — Content collections + i18n routing (1–2 days)

- Define `src/content/config.ts` with the schemas in §2.1.
- Migrate the existing 15 articles into `src/content/articles/{lang}/{category}/...md`. (Claude Code can do this mechanically.)
- Build `src/content/taxonomy/categories.ts` with the 12 canonical categories (en + zh-Hant labels + slugs + 1-sentence descriptions).
- Configure `astro.config.mjs` i18n with `defaultLocale: 'en'`, `locales: ['en','zh-Hant']`, `routing: 'prefix-other-locales'` (en at root or at `/en/`; pick `/en/` for clarity).
- Create `src/pages/en/` and `src/pages/zh-Hant/` mirrors.
- Implement `lib/i18n.ts` for hreflang + path mirroring.
- Add `scripts/check-translation-parity.ts`.

### Phase 3 — Article + listing components (1–2 days)

- Build `ArticleCard`, `ArticleMeta`, `TrustBadge`, `VendorChip`, `TagList`, `TimeStamp`, `SourceList`, `ArticleHeader`, `ArticleBody`, `Prose`.
- Implement Home (§5.1), Category (§5.2), and Article Brief (§5.3) layouts.
- Wire pagination via `getStaticPaths().paginate`.
- Implement breadcrumbs and prev/next.
- Add density toggle.

### Phase 4 — Deep-dive + reading affordances (½–1 day)

- Build `ArticleDeepDiveLayout` with sticky TOC, reading progress, lede styling.
- Add the right-rail TOC component, with IntersectionObserver enhancement.
- Verify Prose styles for tables, code blocks, quotes, footnotes.

### Phase 5 — Search (½–1 day)

- Add Pagefind to build pipeline.
- Build `SearchDialog` + `search.client.ts` (lazy).
- Implement `/search` page.
- Add ⌘K / `/` keybind.

### Phase 6 — Filters + archive + vendor + tag pages (1–2 days)

- Build `FilterBar`, `TrustFilter`, `DateRange`, `SortControl`.
- Generate per-category JSON manifests at build time.
- Build `/archive` (calendar + table views).
- Build `/vendor/{slug}` and `/tag/{slug}`.

### Phase 7 — RSS, sitemap, OG, JSON-LD, 404, About (½ day)

- Add `@astrojs/rss`, generate per-category and all feeds.
- Add `@astrojs/sitemap`.
- Build OG image generator with `satori` (OSS, runs at build time only).
- Add JSON-LD per page type.
- Build `/about` (English + Traditional Chinese, hand-written by you, not Claude Code).
- Build localized `/404`.

### Phase 8 — A11y, perf, polish (1 day)

- Run axe end-to-end; fix anything serious/critical.
- Run Lighthouse CI; tune until green.
- Implement `prefers-reduced-motion` paths.
- Implement Astro View Transitions (Linear-style).
- Visual QA at 360px, 768px, 1024px, 1280px, 1920px.

### Phase 9 — VPS migration prep (½ day, when you're ready)

- Document Caddyfile (auth-free first, then auth-gated config commented in).
- Write deploy-to-VPS GitHub Action (initially gated off).
- Document email allow-list flow for when auth is enabled (Authelia or Caddy basic_auth; Authelia is more flexible long-term).
- DNS plan, TLS plan (Caddy auto-issues via Let's Encrypt — free).

**Total greenfield estimate:** ~7–10 working days for a single experienced engineer + Claude Code pair, not counting content migration which is mechanical.

---

## 11. Acceptance criteria (binding)

A milestone is "done" only when every box in its row is checked.

| Milestone | Functional | Visual / UX | A11y | Perf | Tests |
|---|---|---|---|---|---|
| **Phase 1** | Theme toggle persists; system theme respected; no flash on reload | Tokens render correctly in dark + light; focus ring visible everywhere | Skip link reaches `#main`; landmarks present | First paint < 1s on local dev | Vitest passes; axe on home shows 0 critical/serious |
| **Phase 2** | Both locales render; lang switch preserves deep path | `<html lang>` correct; serif loads for deep-dive only | hreflang correct; `lang` attribute on quoted spans | No CLS regressions | Parity script blocks merge on mismatch |
| **Phase 3** | Cards link via stretched-link; vendor/tag chips remain independently clickable; pagination works | No `whitespace-pre-line` artifacts; cards uniform; trust badge legible at 320px | Keyboard reaches every card with one tab; trust rationale reachable via keyboard | Home ships ≤ 8KB JS; LCP < 1.5s on local lighthouse | Smoke flow green |
| **Phase 4** | TOC scroll-spy works; reading progress accurate ±2% | Lede styling visible; tables don't overflow; code blocks scroll within column | h2/h3 hierarchy strict; reading progress `aria-hidden` | No animation when reduced-motion | Visual snapshot of one deep-dive committed |
| **Phase 5** | Search returns results; ESC closes; focus trap works; deep `/search?q=` works | Match highlighting visible; empty state useful | Listbox semantics; live region announces count | Search bundle ≤ 12KB on open; first results < 100ms | Smoke covers ⌘K open + arrow nav |
| **Phase 6** | Filter URL is shareable; clear-filters works; sort persists across pagination | Active filter chips obvious; "0 results" empty state helpful | All filters labelled; live region announces count change | Filter manifest per category < 80KB | Smoke covers filter combine + share URL |
| **Phase 7** | RSS validates (W3C feed validator); sitemap valid; OG image renders for an article; JSON-LD valid (Google Rich Results test) | OG card shows headline + trust + category clearly | About page covers a11y notes | OG image build doesn't increase site weight | RSS/sitemap snapshot tests |
| **Phase 8** | View transitions smooth in supporting browsers, no penalty in others | Visual QA at 5 widths; dark + light both pass | Axe 0 critical/serious across all 8 page types | LHCI passes budget on home, category, article | Visual regressions in CI |
| **Phase 9** | VPS deploy works; Caddy serves under TLS | Site identical on VPS and GH Pages | Auth (when enabled) preserves `Set-Cookie: SameSite=Lax; Secure; HttpOnly` | TTFB ≤ 200ms on VPS | Manual smoke from internal team |

---

## 12. Self-test checklist (Claude Code runs after each phase)

Claude Code should mechanically tick these before opening a PR. Anything unticked = revise before pushing.

**Build & types**

- [ ] `pnpm typecheck` clean.
- [ ] `pnpm lint` clean.
- [ ] `pnpm build` clean; no orphan warnings.
- [ ] `pnpm parity` clean.

**Routing & content**

- [ ] Every category has at least one article in each locale, or is documented as empty in `categories.ts`.
- [ ] Every article slug matches `^\d{4}-\d{2}-\d{2}-[a-z0-9-]+$`.
- [ ] Every article in `en/` has a `zh-Hant/` twin (or explicit override).
- [ ] No 404s when crawling internal links from home (a small build-time crawler script is acceptable).

**Visual / interaction**

- [ ] Open home at 360, 768, 1024, 1280, 1920 widths — no horizontal scroll, nav strip scrolls horizontally on mobile, lead card collapses correctly.
- [ ] Hover state on cards, vendor chips, tag chips, links is distinct from focus.
- [ ] Article body text wraps naturally; no premature line breaks from source content (`whitespace-pre-line` is forbidden; CI grep-fails on it).
- [ ] Trust badge tooltip opens on hover, focus, and tap; closes on ESC.
- [ ] Theme toggle cycles system → dark → light → system without flash.
- [ ] Lang switch on a deep article goes to the mirror article, not the locale root.

**Accessibility**

- [ ] Tab order matches visual order on every page type.
- [ ] Skip link reaches `#main`.
- [ ] Search dialog focus trap works; ESC closes; focus returns to trigger.
- [ ] No element relies on color alone (trust badge has the bar microvisual + text label).
- [ ] All images have `alt`; decorative images have `alt=""`.
- [ ] Live regions announce filter count and search count changes.
- [ ] `prefers-reduced-motion` disables transitions and reading-progress animation.
- [ ] Axe finds 0 serious/critical issues on every page type.

**Performance**

- [ ] No web font requests in DevTools Network tab.
- [ ] Home ships ≤ 8KB JS gzipped.
- [ ] LCP element on home is the lead card headline (not an image, unless cover present).
- [ ] CLS = 0 on initial paint of home, category, article.
- [ ] Lighthouse CI passes the budget.

**SEO / metadata**

- [ ] Every page has unique `<title>` and meta description.
- [ ] Canonical present.
- [ ] Hreflang alternates present where mirror exists.
- [ ] OG image renders for a sample article (run `scripts/generate-og.ts` and inspect).
- [ ] RSS validates.
- [ ] Sitemap validates.

**Privacy**

- [ ] Network tab shows zero third-party requests on any page.
- [ ] No analytics scripts.
- [ ] No localStorage keys other than `theme`, `lang`, `density`, `iw_seen`.

---

## Appendix A — i18n strings table

Single source of truth in `src/lib/i18n.ts`. Claude Code must not hard-code visible strings anywhere else.

| Key | en | zh-Hant |
|---|---|---|
| `site.name` | Whitespace | Whitespace |
| `site.tagline` | DC Intel | 資料中心情報 |
| `site.about` | Curated data center intelligence — compute, networking, power, cooling and beyond. | 精選資料中心情報 — 涵蓋運算、網路、電力、冷卻等領域。 |
| `nav.label` | Categories | 類別 |
| `nav.home` | Latest | 最新 |
| `nav.archive` | Archive | 封存 |
| `nav.search` | Search | 搜尋 |
| `nav.about` | About | 關於 |
| `home.lead` | Latest | 最新 |
| `home.byCategory` | By category | 依類別 |
| `home.updated` | Updated {timestamp} | 更新於 {timestamp} |
| `category.posts` | {count} posts | 共 {count} 篇 |
| `category.noResults` | No matches. Try fewer filters. | 無符合結果。請減少篩選條件。 |
| `category.clearFilters` | Clear filters | 清除篩選 |
| `article.sources` | Sources | 來源 |
| `article.tags` | Tags | 標籤 |
| `article.vendors` | Vendors | 廠商 |
| `article.published` | Published {date} | 發布於 {date} |
| `article.updated` | Updated {date} | 更新於 {date} |
| `article.readingTime` | {minutes} min read | 約 {minutes} 分鐘 |
| `article.brief` | Brief | 簡訊 |
| `article.deepDive` | Deep dive | 深度分析 |
| `article.previous` | Previous in {category} | 上一篇·{category} |
| `article.next` | Next in {category} | 下一篇·{category} |
| `article.reportIssue` | Report an issue | 回報問題 |
| `article.generatedBy.claude-code` | Generated by Claude Code | 由 Claude Code 產生 |
| `article.generatedBy.human` | Written by team | 由團隊撰寫 |
| `article.generatedBy.hybrid` | Drafted by Claude Code, edited by team | Claude Code 起草，團隊編輯 |
| `trust.label` | Trust {score}/5 | 可信 {score}/5 |
| `trust.5` | Primary source | 一手來源 |
| `trust.4` | Strong corroboration | 多源佐證 |
| `trust.3` | Reasonable confidence | 合理可信 |
| `trust.2` | Single weak source | 單一弱來源 |
| `trust.1` | Speculative | 推測性 |
| `source.kind.primary` | Primary | 一手 |
| `source.kind.corroborating` | Corroborating | 佐證 |
| `source.kind.analyst` | Analyst | 分析師 |
| `source.kind.trade-press` | Trade press | 行業媒體 |
| `search.placeholder` | Search articles, vendors, tags | 搜尋文章、廠商、標籤 |
| `search.results` | {count} results | {count} 筆結果 |
| `search.empty` | No results. Try a different query. | 無結果，請更換關鍵字。 |
| `search.shortcut` | Press / or ⌘K | 按 / 或 ⌘K |
| `filter.trust` | Trust | 可信度 |
| `filter.vendor` | Vendor | 廠商 |
| `filter.tag` | Tag | 標籤 |
| `filter.dateRange` | Date | 日期 |
| `sort.newest` | Newest | 最新 |
| `sort.oldest` | Oldest | 最舊 |
| `sort.trustDesc` | Highest trust | 可信度高至低 |
| `sort.trustAsc` | Lowest trust | 可信度低至高 |
| `theme.system` | Theme: system | 主題：系統 |
| `theme.dark` | Theme: dark | 主題：深色 |
| `theme.light` | Theme: light | 主題：淺色 |
| `lang.switchTo.en` | Switch to English | 切換為英文 |
| `lang.switchTo.zh-Hant` | Switch to Traditional Chinese | 切換為繁體中文 |
| `notice.internal.title` | Internal Use Only | 僅限內部使用 |
| `notice.internal.body` | Whitespace is intended for the internal data center planning team. Articles aggregate public reporting; do not include customer-confidential context. | Whitespace 為資料中心規劃團隊內部使用。文章彙整公開資料，請勿加入客戶機密資訊。 |
| `notice.internal.dismiss` | I understand | 我已了解 |
| `breadcrumb.home` | Home | 首頁 |
| `404.title` | Page not found | 找不到頁面 |
| `404.body` | The page may have moved or never existed. Try search or jump to a category. | 此頁面可能已搬移或不存在，請嘗試搜尋或前往類別。 |
| `error.search.unavailable` | Search index is loading. Try again in a moment. | 搜尋索引載入中，請稍後再試。 |

(You can hand-tune the zh-Hant phrasing — these are translator-quality drafts. Claude Code can also propose revisions; the table is the binding contract for keys, not the exact prose.)

---

## Appendix B — Keyboard shortcuts

| Shortcut | Action | Context |
|---|---|---|
| `/` or `⌘K` / `Ctrl+K` | Open search | Anywhere except inside text inputs |
| `Esc` | Close search / dialog | When dialog open |
| `↑` `↓` | Navigate search results | Search dialog |
| `Enter` | Open selected result | Search dialog |
| `g h` | Go home | Anywhere |
| `g a` | Go archive | Anywhere |
| `g s` | Go search page | Anywhere |
| `[` `]` | Prev / next article | On article detail |
| `t` | Toggle theme | Anywhere |
| `l` | Toggle language | Anywhere |
| `f` | Focus first filter | On category page |
| `r` | Reset filters | On category page |
| `s` | Cycle sort | On category page |
| `?` | Show shortcuts overlay | Anywhere |

A `?` overlay (a `<dialog>`) lists this table — discoverability matters; engineers love shortcuts but won't memorize what they can't see.

---

## Appendix C — Notes on rationale (why these choices)

These are written so a thoughtful reviewer can challenge the decisions later.

1. **Astro stays.** Switching framework is unjustified cost; Astro v5/v6 already gives Content Collections, Image, View Transitions, i18n. The current site uses ~2% of what Astro offers; we just need to use the rest.
2. **No client framework runtime.** A 15-user content site has no SPA needs. Every JS byte we ship is a future regression.
3. **Pagefind for search.** Self-hosted, indexed at build, scales to 10K+ articles, and unlike Algolia/Fuse needs zero infrastructure and zero cost.
4. **System fonts only.** Web fonts cost CLS, privacy (Google Fonts), and bytes. CJK web fonts cost megabytes. System fonts on modern OSes (PingFang TC, Microsoft JhengHei, Noto Sans TC) are already excellent for traditional Chinese.
5. **Dark-first OKLCH.** OKLCH gives perceptually uniform tonal steps; dark-first respects long-session reading; AAA contrast on body is achievable without screaming.
6. **Trust pill is editorial differentiation.** Every news aggregator has dates and headlines. The trust score with a rationale is the signal that justifies this site's existence; we treat it as the most important affordance.
7. **No comments, no shares, no analytics.** Internal site, zero tracking, zero spam vectors, zero distractions.
8. **i18n routing instead of dual-DOM.** Halves the HTML weight, fixes hreflang, makes CDN caching trivial, gives proper `<html lang>`.
9. **GH Pages now, VPS later, same artifact.** No code change between deploy targets; only the workflow file changes. This is the cheapest possible path to your stated future state.
10. **Authoring rules in §2.3** prevent the body-text bug we caught in the audit (hard newlines + `whitespace-pre-line`). The schema and CI also prevent regressions.

---

## End-of-spec notes (from the reviewer)

**What was delivered across the three review messages:**

- Message 1 (sections 0–4.0): north star, architecture (stack, directory layout, hosting, URLs), content model (Zod schema, parity rule, authoring workflow), design system (color, type, spacing, motion, page transitions, icons, focus, selection).
- Message 2 (sections 4.1–8.4): all 20 component contracts, all 13 page templates, accessibility and performance budgets, browser matrix, theme init script, SEO/RSS/sitemap, testing strategy.
- Message 3 (sections 9–Appendix C): CI/CD workflows, branch policy, local dev commands, 9-phase migration plan with day estimates, acceptance criteria matrix, self-test checklist, full i18n strings table, keyboard shortcuts table, design rationale notes.

Concatenation note for Claude Code: this single file is self-consistent — every reference (e.g., "see §3.1", "per §6.4", "as §2.3 forbids") resolves within the document.

**Two minor flags worth calling out:**

1. In §3.1 the term "AAA on body where possible" is used — verify the actual contrast in CI; one or two of the OKLCH values may need a 0.01–0.02 nudge to reach 7:1 on a specific surface. The CI step specified will catch that.
2. In §5.13 the current modal is replaced rather than kept. If you want to keep it as-is for now (it does work), that's fine — but the spec defines the upgrade path.

If anything across the three messages feels incomplete or contradictory when read end-to-end, send the section number for clarification.
