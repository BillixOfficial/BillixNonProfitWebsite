import type { Metadata } from 'next'
import { getVideos } from '@/lib/content'
import { categoryIndex } from '@/content/category-index'
import { VideoCard } from '@/components/content/cards'
import { ArticleBrowser } from '@/components/content/article-browser'
import { AliceFace } from '@/components/brand/alice'
import { activeSocialLinks } from '@/config/site'
import { ButtonLink, Callout, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Videos with Alice',
  description: 'Alice explains household bills in short videos and Shorts: electric bills, heating fuel, water rates and more.',
  alternates: { canonical: '/videos' },
}

export default function VideosPage() {
  const videos = getVideos()
  const youtube = activeSocialLinks.find((s) => s.platform === 'youtube')
  const anyPublished = videos.some((v) => v.youtubeId)
  return (
    <>
      <PageHeader
        title="Watch Alice explain your bills"
        lede="Long videos that read a bill line by line, and Shorts for the one-minute version. Sources are listed on every video."
        aside={<AliceFace mood="mic" size={260} />}
      >
        {youtube && <ButtonLink href={youtube.url} target="_blank" rel="noopener noreferrer">Subscribe on YouTube</ButtonLink>}
      </PageHeader>
      <Section>
        {!anyPublished && (
          <Callout tone="note" title="Premiering soon">These videos are finished and will play here as soon as they&rsquo;re live on the Billix YouTube channel.</Callout>
        )}
        <ArticleBrowser
          categories={categoryIndex}
          items={videos.map((v) => ({ key: v.slug, category: v.category, text: `${v.title} ${v.description} ${v.kind}`, node: <VideoCard v={v} /> }))}
        />
      </Section>
    </>
  )
}
