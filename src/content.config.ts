import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title_en: z.string(),
    title_zh: z.string(),
    summary_en: z.string(),
    summary_zh: z.string(),
    // Full long-form article body per language (markdown). Optional so the
    // summary-only seed posts still validate; the article template renders the
    // body when present and falls back to the summary when absent.
    body_en: z.string().optional(),
    body_zh: z.string().optional(),
    date: z.coerce.date(),
    category: z.enum([
      'compute',
      'networking',
      'power',
      'cooling',
      'mep',
      'site-selection',
      'modular',
      'racks',
      'software-ops',
      'market',
      'regulatory',
      'standards',
    ]),
    region: z.array(z.string()).default([]),
    vendor: z.array(z.string()).default([]),
    trust: z.object({
      score: z.number().int().min(1).max(5),
      reasoning: z.string(),
    }),
    sources: z
      .array(
        z.object({
          url: z.string().url(),
          title: z.string(),
          trust: z.number().int().min(1).max(5),
          type: z.enum(['primary', 'corroborating']),
        }),
      )
      .min(1),
  }),
});

export const collections = { news };
