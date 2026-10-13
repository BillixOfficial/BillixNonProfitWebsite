import type { CategorySlug } from './types'

/** Lightweight category list for navigation and cards. Full guides live in ./categories. */
export interface CategoryMeta {
  slug: CategorySlug
  name: string
  shortName: string
  blurb: string
  /** Utilities are the channel's lead topics. */
  group: 'utilities' | 'household'
}

export const categoryIndex: CategoryMeta[] = [
  { slug: 'electricity', name: 'Electricity & Power', shortName: 'Electricity', blurb: 'Usage, supply vs. delivery, and the fixed charges on every bill.', group: 'utilities' },
  { slug: 'heating-cooling', name: 'Heating, Cooling & Fuel', shortName: 'Heating & Cooling', blurb: 'Natural gas, heating oil, propane, heat pumps and air conditioning.', group: 'utilities' },
  { slug: 'water-sewer', name: 'Water, Sewer & Waste', shortName: 'Water & Sewer', blurb: 'Water, sewer, stormwater and trash charges, and why they keep rising.', group: 'utilities' },
  { slug: 'internet-phone', name: 'Internet, Phone & TV', shortName: 'Internet & Phone', blurb: 'Promotional rates, equipment fees, data caps and bundles.', group: 'utilities' },
  { slug: 'housing', name: 'Mortgage, Taxes & Housing', shortName: 'Housing', blurb: 'Mortgages, escrow, property taxes, HOA dues and rent.', group: 'household' },
  { slug: 'insurance', name: 'Home, Renters & Auto Insurance', shortName: 'Insurance', blurb: 'Premiums, deductibles, coverage limits and renewals.', group: 'household' },
  { slug: 'transportation', name: 'Transportation & Vehicles', shortName: 'Transportation', blurb: 'Car payments, fuel, registration, tolls and upkeep.', group: 'household' },
  { slug: 'home-services', name: 'Home Maintenance & Service Contracts', shortName: 'Home Services', blurb: 'Warranties, service plans and the upkeep every home needs.', group: 'household' },
  { slug: 'banking-debt', name: 'Banking, Loans & Debt', shortName: 'Banking & Debt', blurb: 'Bank fees, interest, credit cards and loan statements.', group: 'household' },
  { slug: 'healthcare-family', name: 'Healthcare & Family', shortName: 'Healthcare & Family', blurb: 'Premiums, deductibles, medical bills and family costs.', group: 'household' },
  { slug: 'subscriptions', name: 'Subscriptions & Memberships', shortName: 'Subscriptions', blurb: 'Streaming, apps, gyms, free trials and auto-renewals.', group: 'household' },
  { slug: 'government-fees', name: 'Government & Municipal Fees', shortName: 'Government Fees', blurb: 'Local taxes on bills, registrations, permits and assessments.', group: 'household' },
]

export const categoryMeta = (slug: CategorySlug) => categoryIndex.find((c) => c.slug === slug)!
