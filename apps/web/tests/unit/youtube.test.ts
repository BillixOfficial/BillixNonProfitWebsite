import { describe, expect, it } from 'vitest'
import { cleanTitle, parseFeed } from '@/lib/youtube'
import { getVideos } from '@/lib/content'

describe('YouTube channel feed', () => {
  const xml = `<feed><title>Billix</title>
 <entry>
  <yt:videoId>ZBQNmNmB2mU</yt:videoId>
  <title>What Happens Before Your Power Gets Shut Off #electricbill #winter #shorts</title>
  <link rel="alternate" href="https://www.youtube.com/shorts/ZBQNmNmB2mU"/>
  <published>2026-10-14T18:47:00+00:00</published>
 </entry>
 <entry>
  <yt:videoId>S09o4xGDq78</yt:videoId>
  <title>Why Does Delivering Electricity Cost So Much?! ⚡#shorts</title>
  <link rel="alternate" href="https://www.youtube.com/watch?v=S09o4xGDq78"/>
  <published>2026-10-13T01:27:40+00:00</published>
 </entry>
 <entry><title>Missing an id</title></entry>
</feed>`

  it('reads each upload and skips incomplete entries', () => {
    expect(parseFeed(xml)).toEqual([
      { id: 'ZBQNmNmB2mU', title: 'What Happens Before Your Power Gets Shut Off', url: 'https://www.youtube.com/shorts/ZBQNmNmB2mU', isShort: true, publishedAt: '2026-10-14T18:47:00+00:00' },
      { id: 'S09o4xGDq78', title: 'Why Does Delivering Electricity Cost So Much?', url: 'https://www.youtube.com/watch?v=S09o4xGDq78', isShort: false, publishedAt: '2026-10-13T01:27:40+00:00' },
    ])
  })

  it('drops hashtags, emoji and XML escapes from titles', () => {
    expect(cleanTitle('Electric Bill Explained #electricbill  #energycosts')).toBe('Electric Bill Explained')
    expect(parseFeed(xml.replace('Shut Off #', 'Shut Off &amp; Back On #'))[0].title).toBe('What Happens Before Your Power Gets Shut Off & Back On')
  })
})

describe('published videos', () => {
  it('have a unique, well-formed YouTube id and an upload date', () => {
    const published = getVideos().filter((v) => v.youtubeId)
    for (const v of published) {
      expect(v.youtubeId, v.slug).toMatch(/^[\w-]{11}$/)
      expect(v.uploadedAt, v.slug).toMatch(/^\d{4}-\d{2}-\d{2}T/)
    }
    expect(new Set(published.map((v) => v.youtubeId)).size).toBe(published.length)
  })
})
