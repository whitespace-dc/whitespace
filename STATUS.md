# Whitespace — STATUS

## Pickup
- 2026-04-29: MVP confirmed live — last commit `311c0b8` (13 posts + category index pages + zh-Hant Taiwan conversion) on 2026-04-28; deployed to https://whitespace-dc.github.io/whitespace/
- Open: WHITES~3.md spec finalized → execution captured in `REVAMP-PLAN.md`
- Next: Phase 0 (repo hygiene — pnpm lockfile, lint/typecheck/commitlint) is the cheapest first win
- Blocker: none

## Stack snapshot
- Astro 6.1.8 · Tailwind v3 · TypeScript · npm (lockfile not yet pnpm)
- Deploy: GitHub Actions → `gh-pages` branch; Node 22
- i18n: dual-DOM toggle (legacy) — spec target is Astro native i18n routing
- Search: none yet — spec target is Pagefind
- Testing: none yet — spec target is Vitest + Playwright + axe + Lighthouse CI

## Open threads
- Decide whether to upgrade Tailwind v3 → v4 in Phase 0 or batch with design tokens in Phase 1
- Confirm whether `whitespace-dc` org is a separate GitHub org or a fork target — affects deploy keys when migrating to VPS
- Content ingest pipeline (Phase 9a) needs design — RSS sources, scrape allowlist, daily token budget per category, PR-not-merge contract
- Decide whether to register a domain via Cloudflare Registrar (~$10/yr) now, or stay on `*.github.io` until Phase 9b triggers
