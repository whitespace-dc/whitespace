import { getCollection } from 'astro:content';

// Chain-position resolver for the "Developing File" markers: an article with `updates`
// is the Nth report in its chain, where N = 1 + the ancestors reachable through
// `updates` pointers. A dangling pointer (the ancestor was superseded and its file
// deleted) still counts as one hop — the story IS a follow-up even when its parent is
// gone. Memoized per build; the collection is immutable once the build starts.
let indexById: Map<string, number> | null = null;

export async function chainIndex(id: string): Promise<number> {
  if (!indexById) {
    const posts = await getCollection('news');
    const updatesOf = new Map(posts.map((p) => [p.id, p.data.updates]));
    indexById = new Map();
    for (const p of posts) {
      let n = 1;
      const seen = new Set([p.id]);
      let cur = p.data.updates;
      while (cur && !seen.has(cur)) {
        seen.add(cur);
        n++;
        cur = updatesOf.get(cur);
      }
      indexById.set(p.id, n);
    }
  }
  return indexById.get(id) ?? 1;
}
