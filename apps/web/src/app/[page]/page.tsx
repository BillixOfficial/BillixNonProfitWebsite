import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getInfoPage, infoPages } from '@/content/pages'
import { Blocks } from '@/components/content/rich-text'
import { AliceFace } from '@/components/brand/alice'
import { ButtonLink, PageHeader, Section } from '@/components/ui/primitives'

export function generateStaticParams() {
  return infoPages.map((p) => ({ page: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/[page]'>): Promise<Metadata> {
  const { page } = await params
  const p = getInfoPage(page)
  return p ? { title: p.title, description: p.description, alternates: { canonical: `/${p.slug}` } } : {}
}

export default async function InfoPageRoute({ params }: PageProps<'/[page]'>) {
  const { page } = await params
  const p = getInfoPage(page)
  if (!p) notFound()
  return (
    <>
      <PageHeader title={p.title} lede={p.lede} aside={p.mood ? <AliceFace mood={p.mood} size={250} /> : undefined} />
      <Section>
        <div className="prose-billix max-w-3xl">
          {p.sections.map((s) => (
            <section key={s.id} aria-labelledby={s.id} className="mb-12">
              <h2 id={s.id} className="mb-4 text-[clamp(1.45rem,2.4vw,1.85rem)] font-semibold text-teal-deep">{s.heading}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
        </div>
        {p.cta && <ButtonLink href={p.cta.href} arrow>{p.cta.label}</ButtonLink>}
      </Section>
    </>
  )
}
