import type { StateGuide } from '../types'

export const nm: StateGuide = {
  code: 'NM',
  lastReviewed: '2026-10-15',
  intro:
    'In New Mexico, the Public Regulation Commission oversees electric companies, electric co-ops, natural gas and for-profit water utilities, with the aim of fair, just and reasonable rates.[^1][^3] City-owned utilities are outside its reach, so who you call about a bill depends on who serves you.[^4]',
  regulator: {
    name: 'New Mexico Public Regulation Commission (NMPRC)',
    url: 'https://www.prc.nm.gov/',
    complaintUrl: 'https://www.prc.nm.gov/consumer-relations/file-a-complaint/',
    text:
      'The NMPRC has jurisdiction over natural gas, propane, investor-owned water and sewer, and electric companies and electric cooperatives, plus some phone companies.[^3] Its Consumer Relations Division does not handle complaints about municipally owned utilities or Mutual Domestic Water Associations.[^4] **Talk to your utility first.** If that doesn\'t solve it, submit an informal complaint and the commission will mediate with the company; if you are still unsatisfied, you can file a formal complaint for a $25 fee.[^2] You can also call the Consumer Relations Division at 888-427-5772.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Electric companies and electric co-ops in New Mexico charge rates under tariffs approved by the NMPRC, which you can look up through its Find Your Utility directory.[^2][^3] City-owned electric systems are not under the commission\'s complaint process, so contact your city about those.[^4] Electric and gas utilities must offer a budget payment plan that spreads your bills into 12 equal monthly payments if you are current on your account.[^4] See [budget billing](/glossary#budget-billing) and [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The NMPRC regulates natural gas and propane utilities, and the same residential customer service rule covers gas and electric utilities.[^3][^5] It also enforces state and federal pipeline safety rules for oil and natural gas pipelines.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The NMPRC regulates investor-owned (for-profit) water and sewer companies.[^3][^4] It does not handle complaints about municipally owned utilities or Mutual Domestic Water Associations, so contact your city or association about those rates.[^4] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Gas, electric and electric co-op utilities must send a written notice in English and Spanish at least 15 days before shutting off residential service.[^5] From November 15 through March 15, a utility may not disconnect you for nonpayment if it is notified that you qualify for LIHEAP and you either had no past-due balance on November 15 or are keeping up with a settlement or installment agreement.[^5] **If someone in your home is seriously ill**, the utility may not shut off service once it has received a signed medical certification form and a financial certification form.[^5] If service is already off and you send both forms, the utility must restore it within 12 hours.[^5]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.hca.nm.gov/lookingforassistance/low_income_home_energy_assistance_program/',
      summary:
        'The New Mexico Health Care Authority helps eligible households with heating and cooling costs. Apply through the YesNM portal or your nearest ISD office; crisis help can move faster if you have a disconnect notice, your service is off, or you are almost out of wood, propane or other bulk fuel.[^6]',
    },
    {
      name: 'NM Energy$mart Weatherization Program',
      url: 'https://housingnm.org/individuals-and-families/home-rehabilitation-and-weatherization/energymart-weatherization-assistance',
      summary:
        'Housing New Mexico (the New Mexico Mortgage Finance Authority) runs the state\'s Weatherization Assistance Program, providing energy-saving retrofits at no charge to eligible homeowners and renters through local service providers.[^7]',
    },
  ],
  consumer: {
    name: 'New Mexico Department of Justice, Consumer Protection Bureau',
    url: 'https://nmdoj.gov/about-the-office/consumer-affairs/',
    summary:
      'The Consumer Protection Bureau receives complaints and investigates unfair and deceptive practices. A separate Utilities Unit represents ratepayers in utility rate cases.[^8]',
  },
  rebates: [
    {
      name: 'Clean Energy New Mexico home rebates',
      url: 'https://clean.energy.nm.gov/',
      summary:
        'New Mexico\'s Energy Conservation and Management Division lists rebates and tax incentives for home upgrades, including up to $1,750 for an ENERGY STAR heat pump water heater and up to $6,500 for electric panel or wiring upgrades. Check the site for current eligibility.[^9]',
    },
  ],
  sources: [
    { title: 'New Mexico Public Regulation Commission home page', publisher: 'New Mexico Public Regulation Commission', url: 'https://www.prc.nm.gov/', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'New Mexico Public Regulation Commission', url: 'https://www.prc.nm.gov/consumer-relations/file-a-complaint/', accessed: '2026-10-15' },
    { title: 'Jurisdiction List', publisher: 'New Mexico Public Regulation Commission', url: 'https://www.prc.nm.gov/consumer-relations/faqs/jurisdiction-list/', accessed: '2026-10-15' },
    { title: 'Consumer Relations FAQs', publisher: 'New Mexico Public Regulation Commission', url: 'https://www.prc.nm.gov/consumer-relations/faqs/', accessed: '2026-10-15' },
    { title: '17.5.410 NMAC, Residential Customer Service by Gas, Electric and Rural Electric Cooperative Utilities', publisher: 'New Mexico State Records Center and Archives', url: 'https://www.srca.nm.gov/parts/title17/17.005.0410.html', accessed: '2026-10-15', note: 'Linked from the NMPRC File a Complaint page as Rule 410.' },
    { title: 'Low Income Home Energy Assistance Program', publisher: 'New Mexico Health Care Authority', url: 'https://www.hca.nm.gov/lookingforassistance/low_income_home_energy_assistance_program/', accessed: '2026-10-15' },
    { title: 'Energy$mart Weatherization Program', publisher: 'Housing New Mexico (New Mexico Mortgage Finance Authority)', url: 'https://housingnm.org/individuals-and-families/home-rehabilitation-and-weatherization/energymart-weatherization-assistance', accessed: '2026-10-15' },
    { title: 'Consumer Affairs', publisher: 'New Mexico Department of Justice', url: 'https://nmdoj.gov/about-the-office/consumer-affairs/', accessed: '2026-10-15' },
    { title: 'Clean Energy New Mexico', publisher: 'New Mexico Energy, Minerals and Natural Resources Department, Energy Conservation and Management Division', url: 'https://clean.energy.nm.gov/', accessed: '2026-10-15' },
  ],
}
