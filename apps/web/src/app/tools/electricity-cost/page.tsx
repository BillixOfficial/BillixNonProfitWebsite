import type { Metadata } from 'next'
import Link from 'next/link'
import { ElectricityCalculator } from '@/components/calculators/electricity-calculator'
import { AliceFace, AliceNote } from '@/components/brand/alice'
import { MetaLine, PageHeader, Section } from '@/components/ui/primitives'
import { SourceList } from '@/components/content/rich-text'

export const metadata: Metadata = {
  title: 'Electricity Cost Calculator',
  description: 'Estimate your monthly electric bill from usage, supply and delivery rates and fixed charges, or find what one appliance costs to run.',
  alternates: { canonical: '/tools/electricity-cost' },
}

export default function ElectricityCostPage() {
  return (
    <>
      <PageHeader title="Electricity Cost Calculator" lede="Rebuild your electric bill from its parts, or price out a single appliance. Uses the numbers from your own bill." aside={<AliceFace mood="determined" size={260} />}>
        <MetaLine items={['Free', 'No sign-up', 'Nothing is saved or sent']} />
      </PageHeader>
      <Section>
        <ElectricityCalculator />
      </Section>
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-teal-deep">How the math works</h2>
            <div className="prose-billix mt-4 space-y-4">
              <p><strong>Monthly bill</strong> = usage &times; (supply rate + delivery rate) + fixed charge, then taxes and percentage fees are applied to that subtotal.</p>
              <p><strong>All-in cost per kWh</strong> = the estimated total &divide; kWh used. It includes fixed charges, so it&rsquo;s higher when you use less.</p>
              <p><strong>Appliance energy</strong> = watts &times; hours per day &times; number of units &divide; 1,000 = kWh per day of use. Yearly kWh = that &times; (days per week &divide; 7) &times; 365. Monthly = yearly &divide; 12.</p>
              <p>1 kilowatt-hour (<Link href="/glossary#kwh">kWh</Link>) is 1,000 watts used for one hour.</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-teal-deep">Assumptions and limits</h2>
            <ul className="prose-billix mt-4 list-disc space-y-2 pl-5 marker:text-teal">
              <li>It&rsquo;s an estimate. Your real bill can differ because of tiered or time-of-use rates, demand charges, minimum bills, riders, credits and rounding.</li>
              <li>Taxes are applied to the whole subtotal. Some places tax only part of the bill, or charge flat fees instead.</li>
              <li>Appliances that cycle on and off (fridges, AC, heaters) rarely draw their full rated watts all the time, so label wattage usually overstates their cost.</li>
              <li>Yearly appliance figures assume the same use every week of the year.</li>
              <li>We never fill in a rate for you. Use the rates printed on your bill.</li>
            </ul>
            <AliceNote className="mt-8">Your bill doesn&rsquo;t split supply and delivery? Divide the bill total by the kWh used. That&rsquo;s your all-in rate, and you can type it in as the supply rate.</AliceNote>
          </div>
        </div>
        <SourceList
          title="Learn more"
          citePrefix="calc-src"
          sources={[
            { title: 'Electricity explained: Factors affecting electricity prices', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php', accessed: '2026-10-13' },
          ]}
        />
      </Section>
    </>
  )
}
