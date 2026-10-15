import type { Source, StateCode, StateGuide } from './types'
import { stateGuides } from './state-guides'

export interface StateEntry {
  code: StateCode
  name: string
  slug: string
  /** True once a researched guide exists in ./state-guides. */
  guidePublished: boolean
  guide: StateGuide | null
}

const list: [StateCode, string][] = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'],
  ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District of Columbia'],
  ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'],
  ['IN', 'Indiana'], ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'],
  ['ME', 'Maine'], ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'],
  ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'],
  ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'], ['OK', 'Oklahoma'], ['OR', 'Oregon'],
  ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'], ['SC', 'South Carolina'], ['SD', 'South Dakota'],
  ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'],
  ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
]

export const states: StateEntry[] = list.map(([code, name]) => ({
  code,
  name,
  slug: name.toLowerCase().replace(/[^a-z]+/g, '-'),
  guidePublished: stateGuides.has(code),
  guide: stateGuides.get(code) ?? null,
}))

export const stateBySlug = (slug: string) => states.find((s) => s.slug === slug)

/**
 * National resources that apply in every state. These are verified starting points
 * until each state guide is researched; we never fill state pages with guesses.
 */
export const nationalStateResources: (Source & { summary: string })[] = [
  {
    title: 'State Utility Commissions',
    publisher: 'National Association of Regulatory Utility Commissioners (NARUC)',
    url: 'https://www.naruc.org/main-navigation-tree/about/our-mission-2/regulatory-commissions/',
    accessed: '2026-10-13',
    summary: 'Find the state commission that oversees investor-owned electric, gas, water and telephone utilities, and where to file a complaint.',
  },
  {
    title: 'Low Income Home Energy Assistance Program (LIHEAP)',
    publisher: 'U.S. Department of Health & Human Services, Administration for Children & Families',
    url: 'https://www.acf.hhs.gov/ocs/low-income-home-energy-assistance-program-liheap',
    accessed: '2026-10-13',
    summary: 'Federally funded help with heating and cooling bills, run by each state. Eligibility and timing vary.',
  },
  {
    title: '211 — Local help for bills and essentials',
    publisher: '211 (United Way)',
    url: 'https://www.211.org/',
    accessed: '2026-10-13',
    summary: 'Free, confidential referrals to local programs for utility, rent and other bill assistance.',
  },
  {
    title: 'Submit a complaint about a financial product',
    publisher: 'Consumer Financial Protection Bureau',
    url: 'https://www.consumerfinance.gov/complaint/',
    accessed: '2026-10-13',
    summary: 'For problems with mortgages, credit cards, bank accounts, loans and debt collection.',
  },
  {
    title: 'File a consumer complaint with the FCC',
    publisher: 'Federal Communications Commission',
    url: 'https://consumercomplaints.fcc.gov/hc/en-us',
    accessed: '2026-10-13',
    summary: 'For billing and service problems with phone, internet and TV providers.',
  },
]
