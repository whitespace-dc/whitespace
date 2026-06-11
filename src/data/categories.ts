export interface Category {
  slug: string;
  en: string;
  zh: string;
}

// zh field uses Traditional Chinese (zh-Hant, Taiwan terminology)
// per project memory project_whitespace.md (Tantyo's team is Taiwan-context).
// 8-category model (whitespace-agent decisions/2026-06-10-category-taxonomy-and-ranking.md).
// Merged from the old 12: racks→compute, modular→mep, site-selection→market, standards→regulatory.
export const CATEGORIES: Category[] = [
  { slug: 'compute', en: 'Compute', zh: '算力' },
  { slug: 'networking', en: 'Networking', zh: '網路' },
  { slug: 'power', en: 'Power', zh: '電力' },
  { slug: 'cooling', en: 'Cooling', zh: '冷卻' },
  { slug: 'mep', en: 'MEP', zh: '機電' },
  { slug: 'software-ops', en: 'Software & Ops', zh: '軟體運維' },
  { slug: 'market', en: 'Market', zh: '市場' },
  { slug: 'regulatory', en: 'Regulatory', zh: '監管' },
];
