import type { MetadataRoute } from 'next'
import { features, siteUrl } from '@/config/site'
import { getAllArticles, getCategories, getVideos } from '@/lib/content'
import { states } from '@/content/states'
import { infoPages } from '@/content/pages'
import { legalPages } from '@/content/legal'
import { collections } from '@/content/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/categories', '/learn', '/videos', '/updates', '/glossary', '/tools', '/tools/electricity-cost', '/compare', '/compare/electricity-plans', '/shop', '/community', '/community/guidelines', '/app', '/social', '/states', '/ask-alice', '/newsletter', '/meet-alice', '/contact', '/business', '/bill-of-the-month']
  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({ url: siteUrl(p) }))
  for (const c of getCategories()) entries.push({ url: siteUrl(`/categories/${c.slug}`), lastModified: c.lastReviewed })
  for (const a of getAllArticles()) entries.push({ url: siteUrl(`/learn/${a.slug}`), lastModified: a.reviewedAt })
  for (const v of getVideos()) entries.push({ url: siteUrl(`/videos/${v.slug}`) })
  for (const s of states) if (s.guidePublished) entries.push({ url: siteUrl(`/states/${s.slug}`) })
  for (const p of infoPages) entries.push({ url: siteUrl(`/${p.slug}`) })
  for (const p of legalPages) entries.push({ url: siteUrl(`/legal/${p.slug}`), lastModified: p.updated })
  if (features.shopOpen) for (const c of collections) entries.push({ url: siteUrl(`/shop/collections/${c.slug}`) })
  return entries
}
