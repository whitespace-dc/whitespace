export interface Category {
  slug: string;
  en: string;
  zh: string;
}

// zh field uses Traditional Chinese (zh-Hant, Taiwan terminology)
// per project memory project_whitespace.md (Tantyo's team is Taiwan-context).
export const CATEGORIES: Category[] = [
  { slug: 'compute', en: 'Compute', zh: '算力' },
  { slug: 'networking', en: 'Networking', zh: '網路' },
  { slug: 'power', en: 'Power', zh: '電力' },
  { slug: 'cooling', en: 'Cooling', zh: '冷卻' },
  { slug: 'mep', en: 'MEP', zh: '機電' },
  { slug: 'site', en: 'Site & Civil', zh: '場地' },
  { slug: 'modular', en: 'Modular', zh: '模組化' },
  { slug: 'racks', en: 'Racks', zh: '機櫃' },
  { slug: 'software', en: 'Software & Ops', zh: '軟體運維' },
  { slug: 'industry', en: 'Industry', zh: '產業' },
  { slug: 'regulatory', en: 'Regulatory', zh: '監管' },
  { slug: 'standards', en: 'Standards', zh: '標準' },
];
