import type { Metadata } from 'next'
import { PlanComparison } from '@/components/calculators/plan-comparison'
import { Callout, PageHeader, Section } from '@/components/ui/primitives'

export const metadata: Metadata = {
  title: 'Compare Electricity Plans',
  description: 'Compare two electricity supply plans side by side using your own usage, rates and monthly fees.',
  alternates: { canonical: '/compare/electricity-plans' },
}

export default function ComparePlansPage() {
  return (
    <>
      <PageHeader title="Compare two electricity plans" lede="Enter the rate and monthly fee from each offer. We show the monthly and yearly cost at your usage, and the usage where they break even." />
      <Section>
        <PlanComparison />
        <div className="mt-10 max-w-3xl">
          <Callout tone="warning" title="Before you switch">
            This compares the energy price only. Delivery charges from your utility usually stay the same whichever supplier you pick. Read the contract for the term length, whether the rate is fixed or variable, what happens when the term ends, and any early termination fee. Choosing a supplier is only possible in some states.
          </Callout>
        </div>
      </Section>
    </>
  )
}
