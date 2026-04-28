export interface Category {
  slug: string;
  en: string;
  zh: string;
}

export const CATEGORIES: Category[] = [
  { slug: 'compute', en: 'Compute', zh: '算力' },
  { slug: 'networking', en: 'Networking', zh: '网络' },
  { slug: 'power', en: 'Power', zh: '电力' },
  { slug: 'cooling', en: 'Cooling', zh: '冷却' },
  { slug: 'mep', en: 'MEP', zh: '机电' },
  { slug: 'site', en: 'Site & Civil', zh: '场地' },
  { slug: 'modular', en: 'Modular', zh: '模块化' },
  { slug: 'racks', en: 'Racks', zh: '机柜' },
  { slug: 'software', en: 'Software & Ops', zh: '软件运维' },
  { slug: 'industry', en: 'Industry', zh: '产业' },
  { slug: 'regulatory', en: 'Regulatory', zh: '监管' },
  { slug: 'standards', en: 'Standards', zh: '标准' },
];
