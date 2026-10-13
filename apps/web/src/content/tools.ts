import type { CategorySlug, ToolSlug } from './types'

export interface ToolEntry {
  slug: ToolSlug
  name: string
  description: string
  group: 'Electricity' | 'Heating & Cooling' | 'Water' | 'Housing' | 'Everyday'
  category: CategorySlug
  /** 'available' only when the calculator is built, tested and live. */
  status: 'available' | 'planned'
  href?: string
}

export const tools: ToolEntry[] = [
  // Electricity
  { slug: 'electricity-cost', name: 'Electricity Cost Calculator', description: 'Estimate a monthly electric bill from your usage, rate and fixed charges, or price out a single appliance.', group: 'Electricity', category: 'electricity', status: 'available', href: '/tools/electricity-cost' },
  { slug: 'appliance-cost', name: 'Appliance Electricity Cost', description: 'What one appliance costs to run per day, month and year.', group: 'Electricity', category: 'electricity', status: 'available', href: '/tools/electricity-cost#appliance' },
  { slug: 'ac-cost', name: 'Air Conditioner Operating Cost', description: 'Estimate cooling costs from size, efficiency and hours of use.', group: 'Electricity', category: 'electricity', status: 'planned' },
  { slug: 'ev-charging', name: 'EV Charging Cost', description: 'Home charging cost per mile and per month.', group: 'Electricity', category: 'transportation', status: 'planned' },
  { slug: 'solar-payback', name: 'Solar Payback Estimator', description: 'Simple payback from system cost, production and your rate.', group: 'Electricity', category: 'electricity', status: 'planned' },
  // Heating
  { slug: 'heating-comparison', name: 'Heating Cost Comparison', description: 'Oil vs. gas vs. heat pump vs. propane on the same unit of heat.', group: 'Heating & Cooling', category: 'heating-cooling', status: 'planned' },
  { slug: 'heat-pump-cost', name: 'Heat Pump Operating Cost', description: 'Seasonal heating cost from efficiency and your electric rate.', group: 'Heating & Cooling', category: 'heating-cooling', status: 'planned' },
  // Water
  { slug: 'water-usage', name: 'Water Usage Calculator', description: 'Gallons used by showers, laundry, dishes and more.', group: 'Water', category: 'water-sewer', status: 'planned' },
  { slug: 'water-bill', name: 'Water Bill Estimator', description: 'Estimate water and sewer charges from your local rate structure.', group: 'Water', category: 'water-sewer', status: 'planned' },
  { slug: 'leak-cost', name: 'Leak Cost Calculator', description: 'What a dripping faucet or running toilet adds to your bill.', group: 'Water', category: 'water-sewer', status: 'planned' },
  // Housing
  { slug: 'mortgage', name: 'Mortgage Calculator', description: 'Principal, interest, taxes and insurance in one monthly number.', group: 'Housing', category: 'housing', status: 'planned' },
  { slug: 'property-tax', name: 'Property Tax Estimator', description: 'Turn an assessed value and local rate into an annual bill.', group: 'Housing', category: 'housing', status: 'planned' },
  { slug: 'rent-vs-buy', name: 'Rent vs. Buy', description: 'Compare the full monthly and long-term costs of each.', group: 'Housing', category: 'housing', status: 'planned' },
  // Everyday
  { slug: 'internet-plans', name: 'Internet Plan Comparison', description: 'Compare plans on true monthly cost after promos and fees.', group: 'Everyday', category: 'internet-phone', status: 'planned' },
  { slug: 'subscription-tracker', name: 'Subscription Cost Tracker', description: 'Add up what your subscriptions cost per month and per year.', group: 'Everyday', category: 'subscriptions', status: 'planned' },
  { slug: 'car-loan', name: 'Car Loan Calculator', description: 'Monthly payment and total interest for an auto loan.', group: 'Everyday', category: 'transportation', status: 'planned' },
  { slug: 'credit-card-interest', name: 'Credit Card Interest Calculator', description: 'How long a balance takes to pay off and what it costs.', group: 'Everyday', category: 'banking-debt', status: 'planned' },
  { slug: 'household-planner', name: 'Household Expense Planner', description: 'Lay out every recurring bill and see your monthly total.', group: 'Everyday', category: 'subscriptions', status: 'planned' },
]

export const toolBySlug = (slug: ToolSlug) => tools.find((t) => t.slug === slug)
