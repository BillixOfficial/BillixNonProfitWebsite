import type { Metadata } from 'next'
import { categoryIndex } from '@/content/category-index'
import { CategoryCard } from '@/components/content/cards'
import { AliceFace } from '@/components/brand/alice'
import { PageHeader, Section, SectionHeading } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Explore Bills',
  description: 'Guides to the 12 kinds of household bills: how each one works, common charges, why costs rise and how to review them.',
  alternates: { canonical: '/categories' },
}

export default function CategoriesPage() {
  const utilities = categoryIndex.filter((c) => c.group === 'utilities')
  const household = categoryIndex.filter((c) => c.group === 'household')
  return (
    <>
      <PageHeader title="Pick a bill. We&rsquo;ll walk you through it." lede="Each guide covers how the bill works, the charges you&rsquo;ll see, why costs change, and practical ways to review it, with sources." aside={<AliceFace mood="reading-bill" size={260} />} />
      <Section>
        <SectionHeading title="The bills that arrive every month" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {utilities.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
        <SectionHeading className="mt-16" title="Housing, insurance, debt and more" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {household.map((c) => <CategoryCard key={c.slug} c={c} />)}
        </div>
      </Section>
    </>
  )
}
