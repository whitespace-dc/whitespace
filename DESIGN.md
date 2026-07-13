# Whitespace — design contract

The aesthetic in ten lines. Change this file first; components follow it, never the reverse.

- **Direction:** quiet editorial broadsheet — cream paper, ink text, serif headlines. Restraint over decoration; no filled pills, no decorative dots, no gradients.
- **Palette (the whole palette — tokens in `tailwind.config.cjs`):** `paper #faf7f0` (page ground) · `accent #1e3a5f` navy (interactive/hover) · `gold #b08d57` (masthead metallic only) · Tailwind `stone` scale for all text/borders. Never hardcode these hex values in components; the only allowed literals are `theme-color` meta, the Pagefind CSS vars, and the console egg.
- **Type roles:** serif (Georgia stack) = headlines + article prose · sans (system stack) = UI chrome · mono 11px UPPERCASE tracking-wider = the "eyebrow" metadata voice (EN only — CJK never gets uppercase/tracking; zh labels use size + muted color instead, see `CategoryTag.astro`).
- **Bilingual rule:** every reader-facing string ships EN + zh-Hant (Taiwan terminology) via `Bi.astro` / `data-en`/`data-zh`; `html.lang` must always match the active language.
- **Contrast floor:** body/metadata text ≥ 4.5:1 on its background. `stone-500` is the floor on **white** surfaces only (4.80:1); on `paper` it measures 4.48:1 — use `stone-600` there.
- **Touch targets:** primary controls ≥ 44px (`min-h-[44px]`); dense nav chips may go to 40px, never below.
- **Motion:** functional only, guarded by `prefers-reduced-motion`; the batik egg is the one indulgence.
- **A11y invariants (do not regress):** skip link, `:focus-visible` outlines, native `<dialog>`, `inert` on hidden controls, `aria-current` for active nav, state controls expose state (`aria-label` swaps on the language toggle).
- **Light-only** by choice. If dark mode is ever wanted: introduce semantic tokens (`--color-bg` etc.) first, theme at that layer — never `dark:` utilities sprinkled per component.
