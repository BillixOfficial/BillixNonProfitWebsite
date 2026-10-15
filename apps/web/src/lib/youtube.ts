import { cacheLife } from 'next/cache'

/**
 * Latest uploads from the Billix YouTube channel, read from its public feed (the
 * 15 most recent videos). Cached for about an hour, so a new upload shows up on
 * /videos without a code change. Videos with their own page in content/videos.ts
 * are matched by youtubeId; everything else links out to YouTube.
 */
export const CHANNEL_ID = 'UCt9vN1jnKS5UJuqqlhlUixQ'
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`

export interface ChannelUpload {
  id: string
  title: string
  url: string
  isShort: boolean
  publishedAt: string
}

const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }
const decode = (s: string) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e: string) =>
    e[0] === '#' ? String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : (entities[e] ?? m),
  )

/** YouTube titles carry hashtags and emoji for search; the site shows the plain title. */
export const cleanTitle = (title: string) =>
  title
    .replace(/#[\p{L}\p{N}_]+/gu, '')
    .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, '')
    .replace(/([?!.])[?!]+/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()

const tag = (xml: string, name: string) => xml.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1]

export function parseFeed(xml: string): ChannelUpload[] {
  return xml
    .split('<entry>')
    .slice(1)
    .flatMap((entry) => {
      const id = tag(entry, 'yt:videoId')
      const title = tag(entry, 'title')
      const publishedAt = tag(entry, 'published')
      const url = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1]
      if (!id || !title || !publishedAt || !url) return []
      return [{ id, title: cleanTitle(decode(title)), url: decode(url), isShort: url.includes('/shorts/'), publishedAt }]
    })
}

export async function getChannelUploads(): Promise<ChannelUpload[]> {
  'use cache'
  let uploads: ChannelUpload[] | null = null
  try {
    const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(8000) })
    if (res.ok) uploads = parseFeed(await res.text())
  } catch {
    // Handled below: the page still renders its own videos if YouTube is unreachable.
  }
  // Retry a failed read within minutes instead of hiding new uploads for an hour.
  if (uploads) cacheLife('hours')
  else cacheLife('minutes')
  return uploads ?? []
}
