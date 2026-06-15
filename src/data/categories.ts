export interface Category {
  slug: string;
  en: string;
  zh: string;
  /** Tailwind dot colour — the category's hue as a small marker, not a filled pill.
   *  Full strings so the JIT compiler keeps them — never build class names by interpolation. */
  dot: string;
}

// zh field uses Traditional Chinese (zh-Hant, Taiwan terminology)
// per project memory project_whitespace.md (Tantyo's team is Taiwan-context).
// 8-category model (whitespace-agent decisions/2026-06-10-category-taxonomy-and-ranking.md).
// Merged from the old 12: racks→compute, modular→mep, site-selection→market, standards→regulatory.
export const CATEGORIES: Category[] = [
  { slug: 'compute', en: 'Compute', zh: '算力', dot: 'bg-indigo-500' },
  { slug: 'networking', en: 'Networking', zh: '網路', dot: 'bg-sky-500' },
  { slug: 'power', en: 'Power', zh: '電力', dot: 'bg-amber-500' },
  { slug: 'cooling', en: 'Cooling', zh: '冷卻', dot: 'bg-cyan-500' },
  { slug: 'mep', en: 'MEP', zh: '機電', dot: 'bg-violet-500' },
  { slug: 'software-ops', en: 'Software & Ops', zh: '軟體運維', dot: 'bg-emerald-500' },
  { slug: 'market', en: 'Market', zh: '市場', dot: 'bg-rose-500' },
  { slug: 'regulatory', en: 'Regulatory', zh: '監管', dot: 'bg-slate-400' },
];
