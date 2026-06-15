// Country-scale region GROUPS for the country filter (second nav axis alongside
// categories). Articles carry country-scale region[] tokens (backfilled by the agent's
// scripts/backfill-region.ts); this file maps those countries up to the 6 display groups
// Tantyo defined + an "Others" catch-all. region[] never shows finer than country; the
// grouping happens here, at display time.

export interface RegionGroup {
  slug: string;
  en: string;
  zh: string; // Traditional Chinese (zh-Hant, Taiwan terminology) — cf. data/categories.ts
  /** Country tokens (as they appear in region[]) that belong to this group. Empty for
   *  'others' — it is the catch-all for any token mapping to no named group. */
  countries: string[];
  /** Tailwind dot colour — the group's hue as a small marker, not a filled pill. Full
   *  string so the JIT compiler keeps it — never interpolate. cf. data/categories.ts. */
  dot: string;
}

// HK grouped under China per Tantyo (2026-06-14). Korea/India/Australia/NZ/"global" and
// any unmapped token fall to Others. Order = reading priority (flat list, no geo sections).
export const REGION_GROUPS: RegionGroup[] = [
  {
    slug: 'sea',
    en: 'South East Asia',
    zh: '東南亞',
    countries: ['Indonesia', 'Malaysia', 'Singapore', 'Thailand', 'Philippines', 'Vietnam'],
    dot: 'bg-emerald-500',
  },
  { slug: 'taiwan', en: 'Taiwan', zh: '台灣', countries: ['Taiwan'], dot: 'bg-red-500' },
  { slug: 'japan', en: 'Japan', zh: '日本', countries: ['Japan'], dot: 'bg-pink-500' },
  { slug: 'china', en: 'China', zh: '中國', countries: ['China', 'Hong Kong'], dot: 'bg-amber-500' },
  { slug: 'america', en: 'America', zh: '美洲', countries: ['United States', 'Canada', 'Brazil'], dot: 'bg-blue-500' },
  {
    slug: 'europe',
    en: 'Europe',
    zh: '歐洲',
    countries: [
      'United Kingdom', 'Ireland', 'Germany', 'France', 'Netherlands', 'Spain', 'Italy',
      'Sweden', 'Norway', 'Finland', 'Denmark', 'Poland', 'Switzerland', 'Belgium', 'Austria', 'Portugal',
    ],
    dot: 'bg-violet-500',
  },
  { slug: 'others', en: 'Others', zh: '其他', countries: [], dot: 'bg-stone-400' },
];

// country token (lowercased) -> named group slug. Tokens absent here resolve to 'others'.
const TOKEN_TO_GROUP = new Map<string, string>(
  REGION_GROUPS.flatMap((g) => g.countries.map((c) => [c.toLowerCase(), g.slug] as const)),
);

// The display group slugs an article belongs to, from its region[] tokens. A token with
// no named group maps to 'others' (so an article tagged only [Korea] still surfaces).
// Deduped; an article tagging both Indonesia + United States cross-lists under sea + america.
export function regionGroupsFor(tokens: string[]): string[] {
  const slugs = new Set<string>();
  for (const t of tokens) slugs.add(TOKEN_TO_GROUP.get(t.trim().toLowerCase()) ?? 'others');
  return [...slugs];
}

// Whether a token is a recognized country (vs a pseudo-token like "global"). Used to keep
// card labels country-scale — pseudo-tokens still route to a group but never show on the UI.
export const isNamedCountry = (t: string): boolean => TOKEN_TO_GROUP.has(t.trim().toLowerCase());

// Country-scale dateline labels for a card: named countries only (pseudo-tokens like
// "global" dropped), capped at 2 + "+N" so the dateline stays a glance, never a list.
export function dateline(tokens: string[]): { shown: string[]; extra: number } {
  const countries = tokens.filter(isNamedCountry);
  return { shown: countries.slice(0, 2), extra: Math.max(0, countries.length - 2) };
}
