import type { StateGuide } from '../types'

export const sc: StateGuide = {
  code: 'SC',
  lastReviewed: '2026-10-15',
  intro:
    'In South Carolina, the Public Service Commission (PSC) approves retail rates for four investor-owned electric utilities, while electric cooperatives, Santee Cooper and city-owned systems set their own.[^1] Most homes cannot switch electric providers because the state assigns service areas, and the Office of Regulatory Staff (ORS) represents consumers and handles complaints about regulated utilities.[^1][^2]',
  regulator: {
    name: 'Public Service Commission of South Carolina (PSC)',
    url: 'https://psc.sc.gov/',
    complaintUrl: 'https://ors.sc.gov/consumers/resolve-dispute',
    text:
      'The PSC approves retail rates for investor-owned electric utilities and regulated natural gas, water and wastewater companies, while the Office of Regulatory Staff (ORS) represents consumers before the PSC.[^1][^3][^4] The ORS has limited authority over municipal systems and electric cooperatives, and no authority over municipal or propane gas systems except for safety.[^3][^4] **Contact your utility first.** If you are not satisfied, file an informal complaint with ORS Consumer Services at 1-800-922-1531 or 803-737-5230; ORS says it will contact you within 30 days after it starts investigating.[^2] If that does not resolve it, you can file a formal complaint with the PSC.[^5]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The PSC approves the retail rates of Dominion Energy South Carolina, Duke Energy Carolinas, Duke Energy Progress and Lockhart Power, based on each utility’s cost of serving each customer class.[^1] It does not approve rates for electric cooperatives, Santee Cooper or municipal electric systems.[^1] **You generally cannot switch providers:** state law lets the PSC assign an electric supplier to service areas outside city limits, and customers in an assigned area must use that supplier, with limited exceptions near territory borders.[^1] To understand your charges, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The ORS represents the public interest in the regulation of the state’s investor-owned natural gas utilities, Piedmont Natural Gas and Dominion Energy South Carolina, before the PSC.[^4] Except for safety, the ORS has no authority over municipal gas systems, Natural Gas Authorities or propane systems, so contact those providers or your local government directly.[^4]',
    shopping: null,
  },
  water: {
    text:
      'The ORS represents the public interest in the regulation of rates and services of privately owned water and wastewater utilities.[^6] It has no regulatory responsibility for publicly owned providers such as counties, water and sewer districts and municipalities, or for member-owned cooperatives, so contact those providers or their governing board about rates.[^6] See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'For PSC-regulated electric utilities, you can avoid a late payment fee by paying within 25 days of the billing date, and the utility must give you written notice before disconnecting for nonpayment.[^5] PSC rules require at least 10 days’ notice and a second notice a few days before disconnection.[^1] **From December through March, a medical certificate signed by your licensed healthcare provider defers disconnection; it is valid for 30 days and can be renewed up to three times.**[^1][^5] Each utility must have written procedures for shutoffs during extremely hot or cold weather, and they vary by utility.[^1] If you cannot pay, you can ask for a deferred payment plan of up to six months.[^5]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://oeo.sc.gov/managedsites/prd/oeo/liheap.html',
      summary:
        'Administered by the South Carolina Office of Economic Opportunity through local Community Action Agencies. LIHEAP helps households at or below 60 percent of the state median income with heating and cooling costs, subject to available funding; you must show a need at the time you apply, such as an energy bill due. Apply through your local Community Action Agency.[^7]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://oeo.sc.gov/managedsites/prd/oeo/weatherization.html',
      summary:
        'Also run by the Office of Economic Opportunity, WAP helps income-eligible households make their homes more energy efficient. Preference goes to people 60 and older, households with a member with a disability and households with children under 18.[^8]',
    },
  ],
  consumer: {
    name: 'South Carolina Department of Consumer Affairs (SCDCA)',
    url: 'https://consumer.sc.gov/consumer-resources/consumer-complaints',
    summary:
      'SCDCA processes and mediates written consumer complaints, and it refers complaints that belong to another agency. Contact the business first, then file online or on a paper form.[^9]',
  },
  rebates: [
    {
      name: 'South Carolina Home Energy Rebates',
      url: 'https://energy.sc.gov/programs/funding/home-energy-rebate-programs',
      summary:
        'The South Carolina Energy Office plans two rebate programs, Home Electrification and Appliance Rebates (HEAR) and Home Efficiency Rebates (HOMES). **As of October 2026, these rebates are not yet available;** the Energy Office says this page will post eligibility and application details as they come out.[^10]',
    },
  ],
  sources: [
    { title: 'Frequently Asked Questions for Residential Electric Consumers (2022 update)', publisher: 'Public Service Commission of South Carolina', url: 'https://psc.sc.gov/sites/psc/files/Documents/FAQ%20for%20Electric%20Customers/2022%20Updated%20Frequently%20Asked%20Questions%20for%20Residential%20Electric%20Consumers.pdf', accessed: '2026-10-15' },
    { title: 'Resolve a Dispute', publisher: 'South Carolina Office of Regulatory Staff', url: 'https://ors.sc.gov/consumers/resolve-dispute', accessed: '2026-10-15' },
    { title: 'Electric', publisher: 'South Carolina Office of Regulatory Staff', url: 'https://ors.sc.gov/consumers/electric-natural-gas/electric', accessed: '2026-10-15' },
    { title: 'Natural Gas', publisher: 'South Carolina Office of Regulatory Staff', url: 'https://ors.sc.gov/consumers/electric-natural-gas/natural-gas', accessed: '2026-10-15' },
    { title: 'Electric Bill of Rights', publisher: 'South Carolina Office of Regulatory Staff and Public Service Commission', url: 'https://ors.sc.gov/consumers/electric-natural-gas/electric/electric-bill-rights', accessed: '2026-10-15' },
    { title: 'Water & Wastewater', publisher: 'South Carolina Office of Regulatory Staff', url: 'https://ors.sc.gov/consumers/water-wastewater', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance Program (LIHEAP)', publisher: 'South Carolina Office of Economic Opportunity', url: 'https://oeo.sc.gov/managedsites/prd/oeo/liheap.html', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'South Carolina Office of Economic Opportunity', url: 'https://oeo.sc.gov/managedsites/prd/oeo/weatherization.html', accessed: '2026-10-15' },
    { title: 'Consumer Complaints', publisher: 'South Carolina Department of Consumer Affairs', url: 'https://consumer.sc.gov/consumer-resources/consumer-complaints', accessed: '2026-10-15' },
    { title: 'South Carolina Home Energy Rebates', publisher: 'South Carolina Energy Office', url: 'https://energy.sc.gov/programs/funding/home-energy-rebate-programs', accessed: '2026-10-15' },
  ],
}
