import type { MetadataRoute } from 'next'
import { siteUrl } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  // Non-production deployments must not be indexed.
  const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
  return {
    rules: isProd
      ? [{ userAgent: '*', allow: '/', disallow: ['/search', '/cart', '/account', '/newsletter/confirm', '/newsletter/unsubscribe', '/newsletter/preferences'] }]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: siteUrl('/sitemap.xml'),
  }
}
