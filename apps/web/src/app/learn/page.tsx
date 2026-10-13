import type { Metadata } from 'next'
import Link from 'next/link'
import { BookA, MapPinned, Newspaper, PlayCircle } from 'lucide-react'
import { getAllArticles } from '@/lib/content'
import { categoryIndex } from '@/content/category-index'
import { ArticleCard } from '@/components/content/cards'
import { ArticleBrowser } from '@/components/content/article-browser'
import { AliceFace } from '@/components/brand/alice'
import { PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Learn',
  description: 'Plain-English guides to household bills, with sources, dates and where each one applies.',
  alternates: { canonical: '/learn' },
}

export default function LearnPage() {
  const articles = getAllArticles()
  return (
    <>
      <PageHeader title="Guides that make your bills make sense" lede="Every article lists its sources, its publication and review dates, and where it applies." aside={<AliceFace mood="book" size={270} />}>
        <div className="flex flex-wrap gap-2">
          {[
            { href: '/videos', label: 'Videos', I: PlayCircle },
            { href: '/updates', label: 'Bill updates', I: Newspaper },
            { href: '/glossary', label: 'Glossary', I: BookA },
            { href: '/states', label: 'By state', I: MapPinned },
          ].map(({ href, label, I }) => (
            <Link key={href} href={href} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-teal-deep hover:border-teal">
              <I className="size-4 text-teal" aria-hidden />{label}
            </Link>
          ))}
        </div>
      </PageHeader>
      <Section>
        <ArticleBrowser
          categories={categoryIndex}
          items={articles.map((a) => ({ key: a.slug, category: a.category, text: `${a.title} ${a.description}`, node: <ArticleCard a={a} /> }))}
        />
      </Section>
    </>
  )
}
