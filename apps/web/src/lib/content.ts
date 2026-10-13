/**
 * Content access layer. Pages read content only through these functions, so the
 * Phase 1 file-based content can later be served from the API/database instead.
 */
import { categories } from '@/content/categories'
import { articles as guideArticles } from '@/content/articles'
import { updates } from '@/content/updates'
import { glossary } from '@/content/glossary'
import { videos } from '@/content/videos'
import { tools } from '@/content/tools'
import { products } from '@/content/products'
import type { Article, ArticleBlock, CategorySlug, ToolSlug } from '@/content/types'
import { toPlainText } from './inline'

const byDateDesc = (a: Article, b: Article) => b.publishedAt.localeCompare(a.publishedAt)

export const getCategories = () => categories
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)

export const getAllArticles = () => [...guideArticles, ...updates].sort(byDateDesc)
export const getGuides = () => [...guideArticles].sort(byDateDesc)
export const getUpdates = () => [...updates].sort(byDateDesc)
export const getArticle = (slug: string) => getAllArticles().find((a) => a.slug === slug)
export const getArticlesByCategory = (slug: CategorySlug) => getAllArticles().filter((a) => a.category === slug)

export const getGlossary = () => [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }))
export const getTerm = (slug: string) => glossary.find((t) => t.slug === slug)

export const getVideos = () => videos
export const getVideo = (slug: string) => videos.find((v) => v.slug === slug)
export const getVideosByCategory = (slug: CategorySlug) => videos.filter((v) => v.category === slug)

export const getTools = () => tools
export const getToolsBySlugs = (slugs: ToolSlug[]) =>
  slugs.map((s) => tools.find((t) => t.slug === s)).filter((t) => t !== undefined)

export const getProductsByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.status !== 'draft' && p.categories?.includes(slug))

function blockText(b: ArticleBlock): string {
  switch (b.type) {
    case 'p':
    case 'callout':
      return toPlainText(b.text)
    case 'list':
      return b.items.map(toPlainText).join(' ')
    case 'table':
      return [...b.headers, ...b.rows.flat()].join(' ')
  }
}

export function articlePlainText(a: Article): string {
  return a.sections.map((s) => `${s.heading} ${s.blocks.map(blockText).join(' ')}`).join(' ')
}

/** Reading time at ~225 words per minute, minimum one minute. */
export function readingMinutes(a: Article): number {
  const words = articlePlainText(a).split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 225))
}

export const authors = {
  'billix-editorial': {
    name: 'Billix Editorial Team',
    bio: 'Researched and written by the Billix editorial team, and checked against the primary sources listed below each article.',
  },
} as const
