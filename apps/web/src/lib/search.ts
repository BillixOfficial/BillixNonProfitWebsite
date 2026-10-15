/**
 * Site search over all published content. Phase 1 runs in-process over the
 * file-based content (no external service); swap `buildIndex` for a database or
 * search-engine query later without changing callers.
 */
import { getAllArticles, getCategories, getGlossary, getTools, getVideos, articlePlainText } from './content'
import { products, formatPrice } from '@/content/products'
import { states } from '@/content/states'
import { features } from '@/config/site'
import { toPlainText } from './inline'

export type SearchType = 'article' | 'update' | 'category' | 'glossary' | 'tool' | 'video' | 'product' | 'state'

export interface SearchDoc {
  type: SearchType
  title: string
  description: string
  href: string
  body: string
}

export const typeLabels: Record<SearchType, string> = {
  article: 'Article',
  update: 'Bill update',
  category: 'Bill category',
  glossary: 'Glossary',
  tool: 'Tool',
  video: 'Video',
  product: 'Shop',
  state: 'State guide',
}

let cached: SearchDoc[] | null = null

export function buildIndex(): SearchDoc[] {
  if (cached) return cached
  const docs: SearchDoc[] = []
  for (const a of getAllArticles()) {
    docs.push({
      type: a.kind === 'update' ? 'update' : 'article',
      title: a.title,
      description: a.description,
      href: `/learn/${a.slug}`,
      body: `${a.keyTakeaways.join(' ')} ${articlePlainText(a)}`,
    })
  }
  for (const c of getCategories()) {
    docs.push({
      type: 'category',
      title: c.name,
      description: c.tagline,
      href: `/categories/${c.slug}`,
      body: [
        ...c.intro,
        c.howItWorks.summary,
        ...c.commonCharges.map((x) => `${x.name} ${x.description}`),
        ...c.faqs.map((f) => `${f.q} ${f.a}`),
        ...c.whyCostsRise.map((x) => `${x.title} ${x.body}`),
      ]
        .map(toPlainText)
        .join(' '),
    })
  }
  for (const t of getGlossary()) {
    docs.push({
      type: 'glossary',
      title: t.aka ? `${t.term} (${t.aka})` : t.term,
      description: toPlainText(t.definition),
      href: `/glossary#${t.slug}`,
      body: t.example ? toPlainText(t.example) : '',
    })
  }
  for (const t of getTools()) {
    docs.push({
      type: 'tool',
      title: t.name,
      description: t.status === 'available' ? t.description : `${t.description} (Planned)`,
      href: t.href ?? '/tools',
      body: t.group,
    })
  }
  for (const v of getVideos()) {
    docs.push({
      type: 'video',
      title: v.title,
      description: v.description,
      href: `/videos/${v.slug}`,
      body: (v.chapters ?? []).map((c) => c.label).join(' ') + ' ' + (v.transcript ?? ''),
    })
  }
  for (const p of features.shopOpen ? products : []) {
    if (p.status === 'draft') continue
    docs.push({
      type: 'product',
      title: p.name,
      description: `${p.description} ${formatPrice(p.priceCents)} (coming soon)`,
      href: `/shop/${p.slug}`,
      body: p.format,
    })
  }
  for (const s of states) {
    docs.push({ type: 'state', title: `${s.name} bills`, description: `Bill resources for ${s.name}.`, href: `/states/${s.slug}`, body: s.code })
  }
  cached = docs
  return docs
}

const STOP = new Set(['a', 'an', 'the', 'is', 'my', 'of', 'to', 'and', 'or', 'for', 'in', 'on', 'what', 'why', 'how', 'do', 'does', 'i', 'it', 'so', 'me', 'are', 'can', 'your', 'you'])

export function normalize(word: string): string {
  let w = word.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '')
  if (w.length > 4 && w.endsWith('ies')) w = w.slice(0, -3) + 'y'
  else if (w.length > 3 && w.endsWith('es') && !w.endsWith('ses')) w = w.slice(0, -1)
  else if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) w = w.slice(0, -1)
  return w
}

export function queryTerms(q: string): string[] {
  return q
    .split(/\s+/)
    .map(normalize)
    .filter((w) => w.length > 1 && !STOP.has(w))
}

function countMatches(haystackWords: string[], term: string): number {
  let n = 0
  for (const w of haystackWords) if (w === term || (term.length >= 4 && w.startsWith(term))) n++
  return n
}

const words = (s: string) => s.split(/\s+/).map(normalize).filter(Boolean)

export interface SearchHit extends SearchDoc {
  score: number
}

export function search(q: string, opts: { limit?: number; docs?: SearchDoc[] } = {}): SearchHit[] {
  const terms = queryTerms(q.slice(0, 200))
  if (terms.length === 0) return []
  const docs = opts.docs ?? buildIndex()
  const phrase = q.trim().toLowerCase()
  const hits: SearchHit[] = []
  for (const d of docs) {
    const tw = words(d.title)
    const dw = words(d.description)
    const bw = words(d.body)
    let score = 0
    let matched = 0
    for (const t of terms) {
      const s = countMatches(tw, t) * 8 + countMatches(dw, t) * 3 + Math.min(countMatches(bw, t), 6)
      if (s > 0) matched++
      score += s
    }
    if (matched === 0) continue
    // Prefer documents that match every term, and exact phrases.
    score *= matched / terms.length
    if (phrase.length > 3 && d.title.toLowerCase().includes(phrase)) score += 20
    if (d.type === 'glossary' && tw.some((w) => terms.includes(w))) score += 6
    hits.push({ ...d, score })
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, opts.limit ?? 40)
}
