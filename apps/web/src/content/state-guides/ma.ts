import type { StateGuide } from '../types'

export const ma: StateGuide = {
  code: 'MA',
  lastReviewed: '2026-10-15',
  intro:
    'Most Massachusetts households can choose who supplies their electricity and natural gas, while the local utility keeps delivering it[^3][^6]. The Department of Public Utilities oversees the investor-owned electric, gas and water companies[^1].',
  regulator: {
    name: 'Massachusetts Department of Public Utilities (DPU)',
    url: 'https://www.mass.gov/orgs/department-of-public-utilities',
    complaintUrl: 'https://www.mass.gov/how-to/file-a-complaint-involving-a-gas-electric-or-water-company',
    text: "The DPU oversees investor-owned electric, natural gas and water companies in Massachusetts[^1]. Phone, internet and cable companies are regulated by the separate Department of Telecommunications and Cable[^14]. **Contact your company first.** If that doesn't fix the problem, file a complaint with the DPU Consumer Division online, by phone or by mail; if your service has been shut off or is about to be, call (617) 737-2836 or toll-free (877) 886-5066[^2].",
  },
  electricity: {
    market: 'choice',
    text: "Unless a municipal light plant serves your town, you can choose basic service from your electric company (Eversource, National Grid or Unitil), a municipal aggregation program if your town offers one, or a product from a competitive supplier[^3][^4]. Residential basic service is a 6-month fixed price, bought through competitive solicitations twice a year that the DPU reviews[^4]. The DPU licenses competitive suppliers but does not regulate their prices; fixed-price products may carry an early termination fee, and variable prices often change monthly[^5]. After you agree to switch, you have 3 business days from receiving the supplier's terms to cancel at no charge[^3]. See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).",
    shopping: { name: 'Energy Switch Massachusetts', url: 'https://www.energyswitchma.gov/' },
  },
  gas: {
    text: "The DPU regulates the state's investor-owned gas companies[^1]. **You can buy your gas supply from a licensed competitive supplier or retail agent**, and your gas company still delivers the gas, reads your meter and handles emergencies[^6]. Compare offers with your gas company's supply rate (the Gas Adjustment Factor), which changes May 1 and November 1; the DPU does not post or regulate supplier prices, and not every supplier serves every area[^6]. Ask about contract length, fixed or variable pricing, and early termination fees before you switch[^6].",
    shopping: null,
  },
  water: {
    text: 'The DPU regulates privately owned (investor-owned) water companies, and you can bring a complaint about one to the DPU Consumer Division[^7][^2]. If a city, town or local water district provides your water, contact that local provider about rates and billing.',
  },
  shutoff: {
    text: "If you have a financial hardship, your electric or gas company cannot shut off your service from **November 15 to March 15** when you need it to heat your home, or at any time when someone in your home is seriously ill, you have an infant under 12 months, or all adults are 65 or older and a minor child lives with you[^3]. Financial hardship means you can't pay an overdue bill and meet the income limit for the Home Energy Assistance Program, so tell your utility right away[^3]. A serious illness must be certified in writing by a registered physician or the local board of health[^8]. Service also can't be shut off without the DPU's written approval if everyone in your household is 65 or older[^3].",
  },
  help: [
    {
      name: 'Home Energy Assistance Program (HEAP)',
      url: 'https://www.mass.gov/info-details/learn-about-home-energy-assistance-heap',
      summary:
        "Massachusetts' LIHEAP program, run by the Executive Office of Housing and Livable Communities, helps pay part of winter heating costs for any fuel type. Household income can't exceed 60% of state median income. Applications open October 1 for the November 1 to April 30 season, and you must apply each year; eligible households also get automatic discounts from investor-owned electric and gas companies[^10].",
    },
    {
      name: 'Utility discount rates and arrearage management',
      url: 'https://www.mass.gov/info-details/help-paying-your-utility-bill',
      summary:
        'Income-eligible electric and gas customers can get a discount rate. As of October 2026, the DPU says discounts will be tiered by household income and size starting November 1, 2026, with final amounts pending DPU approval. Arrearage management programs forgive part of a past-due balance (at least $300 and 60 days overdue) each time you make your monthly payment[^9].',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://www.mass.gov/info-details/weatherization-assistance-program-wap',
      summary:
        'Free air sealing, insulation and heating system checks for households eligible for HEAP, done by local agencies at no cost to residents. Homeowners and tenants with their landlord’s permission can apply[^11].',
    },
  ],
  consumer: {
    name: "Massachusetts Attorney General's Office Consumer Advocacy & Response Division",
    url: 'https://www.mass.gov/how-to/file-a-consumer-complaint',
    summary:
      "The Attorney General's Office takes consumer complaints about businesses, including utility bill disputes and shutoffs by unregulated utilities. Its Consumer Hotline is (617) 727-8400[^12].",
  },
  rebates: [
    {
      name: 'Mass Save',
      url: 'https://www.masssave.com/',
      summary:
        "The statewide energy efficiency program run by the state's electric and gas utilities and Cape Light Compact, offering home energy assessments, rebates and incentives[^13]. The DPU points consumers to Mass Save for energy audits[^14].",
    },
  ],
  sources: [
    { title: 'Department of Public Utilities (DPU)', publisher: 'Massachusetts Department of Public Utilities', url: 'https://www.mass.gov/orgs/department-of-public-utilities', accessed: '2026-10-15' },
    { title: 'File a complaint involving a gas, electric, or water company', publisher: 'Massachusetts Department of Public Utilities, Consumer Division', url: 'https://www.mass.gov/how-to/file-a-complaint-involving-a-gas-electric-or-water-company', accessed: '2026-10-15' },
    { title: 'Know your rights as a utility consumer', publisher: 'Massachusetts Department of Public Utilities, Consumer Division', url: 'https://www.mass.gov/info-details/know-your-rights-as-a-utility-consumer', accessed: '2026-10-15' },
    { title: 'Basic service information and rates', publisher: 'Massachusetts Department of Public Utilities', url: 'https://www.mass.gov/info-details/basic-service-information-and-rates', accessed: '2026-10-15' },
    { title: 'Competitive electric supply product overview', publisher: 'Massachusetts Department of Public Utilities', url: 'https://www.mass.gov/info-details/competitive-electric-supply-product-overview', accessed: '2026-10-15' },
    { title: 'Competitive supply for natural gas', publisher: 'Massachusetts Department of Public Utilities, Gas Division', url: 'https://www.mass.gov/info-details/competitive-supply-for-natural-gas', accessed: '2026-10-15' },
    { title: 'Water Distribution Companies', publisher: 'Massachusetts Department of Public Utilities', url: 'https://www.mass.gov/water-distribution-companies', accessed: '2026-10-15' },
    { title: 'General Laws Chapter 164, Section 124A', publisher: 'Massachusetts General Court', url: 'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXXII/Chapter164/Section124A', accessed: '2026-10-15' },
    { title: 'Help paying your utility bill', publisher: 'Massachusetts Department of Public Utilities, Consumer Division', url: 'https://www.mass.gov/info-details/help-paying-your-utility-bill', accessed: '2026-10-15' },
    { title: 'Learn about Home Energy Assistance - HEAP', publisher: 'Massachusetts Executive Office of Housing and Livable Communities', url: 'https://www.mass.gov/info-details/learn-about-home-energy-assistance-heap', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program (WAP)', publisher: 'Massachusetts Executive Office of Housing and Livable Communities', url: 'https://www.mass.gov/info-details/weatherization-assistance-program-wap', accessed: '2026-10-15' },
    { title: 'File a consumer complaint', publisher: 'Massachusetts Office of the Attorney General', url: 'https://www.mass.gov/how-to/file-a-consumer-complaint', accessed: '2026-10-15' },
    { title: 'Mass Save home page', publisher: 'Mass Save (utility sponsors: Berkshire Gas, Cape Light Compact, Eversource, Liberty, National Grid, Unitil)', url: 'https://www.masssave.com/', accessed: '2026-10-15' },
    { title: 'DPU Consumer Information', publisher: 'Massachusetts Department of Public Utilities, Consumer Division', url: 'https://www.mass.gov/dpu-consumer-information', accessed: '2026-10-15' },
  ],
}
