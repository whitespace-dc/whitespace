export interface Category {
  slug: string;
  en: string;
  zh: string;
  /** Tailwind chip classes (bg + text + border). Full strings so the JIT
   *  compiler keeps them — never build class names by interpolation. */
  chip: string;
}

// zh field uses Traditional Chinese (zh-Hant, Taiwan terminology)
// per project memory project_whitespace.md (Tantyo's team is Taiwan-context).
// 8-category model (whitespace-agent decisions/2026-06-10-category-taxonomy-and-ranking.md).
// Merged from the old 12: racks→compute, modular→mep, site-selection→market, standards→regulatory.
export const CATEGORIES: Category[] = [
  { slug: 'compute', en: 'Compute', zh: '算力', chip: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { slug: 'networking', en: 'Networking', zh: '網路', chip: 'bg-sky-50 text-sky-700 border-sky-200' },
  { slug: 'power', en: 'Power', zh: '電力', chip: 'bg-amber-50 text-amber-700 border-amber-200' },
  { slug: 'cooling', en: 'Cooling', zh: '冷卻', chip: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { slug: 'mep', en: 'MEP', zh: '機電', chip: 'bg-violet-50 text-violet-700 border-violet-200' },
  { slug: 'software-ops', en: 'Software & Ops', zh: '軟體運維', chip: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { slug: 'market', en: 'Market', zh: '市場', chip: 'bg-rose-50 text-rose-700 border-rose-200' },
  { slug: 'regulatory', en: 'Regulatory', zh: '監管', chip: 'bg-slate-100 text-slate-700 border-slate-300' },
];
