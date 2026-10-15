import type { StateGuide } from '../types'

export const nd: StateGuide = {
  code: 'ND',
  lastReviewed: '2026-10-15',
  intro:
    'In North Dakota, the Public Service Commission sets rates for three investor-owned electric utilities and four investor-owned gas utilities, while rural electric cooperatives and city utilities set their own.[^1] North Dakota has no winter shutoff ban, so the notice, medical and payment-plan protections below matter most.[^2]',
  regulator: {
    name: 'North Dakota Public Service Commission (PSC)',
    url: 'https://www.psc.nd.gov/',
    complaintUrl: 'https://www.psc.nd.gov/sites/www/files/documents/jurisdiction/electric_gas/con_info/PUD-3-Informal-Complaint.pdf',
    text:
      'The PSC is an elected, three-member commission with authority over electric and gas utilities, telecommunications, energy facility siting, pipeline safety and other areas.[^4] It regulates the rates, terms and conditions of investor-owned electric and gas utilities, but not rural electric cooperatives or city utilities.[^1] **Take the issue to the company first.** If that does not resolve it, file an informal complaint by calling 701-328-2400 or sending a letter or email to ndpsc@nd.gov; the PSC usually finishes its review in two to four weeks.[^3]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The PSC regulates the rates, terms and conditions of retail electric service from the three investor-owned utilities: Montana-Dakota Utilities, Northern States Power (Xcel Energy) and Otter Tail Power.[^1] It has no authority over the rates or terms of rural electric cooperatives or municipal utilities.[^1] The PSC also resolves territorial disputes between investor-owned utilities and cooperatives.[^1] For help with the charges on your bill, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PSC regulates retail natural gas service from four investor-owned utilities: Montana-Dakota Utilities, Great Plains Natural Gas, Northern States Power (Xcel Energy) and Dakota Natural Gas.[^1] Its inspectors also check that gas pipelines meet safety standards.[^5] There is no state gas shopping website; contact your gas utility with rate questions.',
    shopping: null,
  },
  water: {
    text:
      'Water and sewer service is not among the industries the PSC regulates.[^4] If you have a question about water or sewer rates, contact your city or the water system that serves you.',
  },
  shutoff: {
    text:
      'Investor-owned electric and gas utilities must give you written notice at least **10 days** before a shutoff; customers who are 65 or older or have a disability must get the notice by personal delivery.[^2] Shutoffs are not allowed on weekends, Fridays, state holidays, the day before a state holiday, or after noon on any day.[^2] If you tell the utility during the 10-day notice period that a dangerous health condition exists, or that you are 65 or older or have a disability, the shutoff can be postponed up to 30 days.[^2] You can also work out a monthly payment plan for the past-due amount.[^2] **The rules do not ban winter shutoffs**, and cooperatives and city utilities do not have to follow them, though they may have similar policies.[^2]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.hhs.nd.gov/applyforhelp/liheap',
      summary:
        'Run by North Dakota Health and Human Services, LIHEAP helps pay for natural gas, electricity, propane, fuel oil, wood and other heating fuels, and can also cover weatherization, furnace repair and emergencies.[^6] Applications are accepted year-round; if you have a shut-off notice, contact the Customer Support Center at 1-866-614-6005.[^6]',
    },
    {
      name: 'Low-Income Weatherization Assistance',
      url: 'https://www.commerce.nd.gov/community-services/low-income-programs/weatherization-assistance',
      summary:
        'The North Dakota Department of Commerce program provides weatherization, such as insulation, weather stripping and furnace work, through eight local Community Action Agencies.[^7] Households with income up to 200% of the poverty level qualify, and LIHEAP clients are automatically eligible.[^7]',
    },
  ],
  consumer: {
    name: 'North Dakota Attorney General Consumer Protection Division',
    url: 'https://attorneygeneral.nd.gov/consumer-resources/consumer-complaints/',
    summary:
      'The Consumer Protection Division takes complaints from North Dakota residents and tries to mediate a resolution when the complaint falls within its authority.[^8] It does not act on anonymous complaints.[^8]',
  },
  rebates: [
    {
      name: 'Home Energy Rebate Programs (North Dakota Department of Commerce)',
      url: 'https://www.commerce.nd.gov/community-services/energy-efficiency-program/home-energy-rebates-program',
      summary:
        'North Dakota was allocated $37.2 million for HOMES and $37.1 million for HEAR rebates, but as of October 2026 the state says neither program has launched and **no rebates are currently available** while it waits for final federal approval.[^9] Commerce warns that any offers about these rebates right now are likely scams.[^9]',
    },
  ],
  sources: [
    { title: 'Electric & Gas', publisher: 'North Dakota Public Service Commission', url: 'https://www.psc.nd.gov/jurisdictions/electric-gas', accessed: '2026-10-15' },
    { title: 'Protection from Electric and Natural Gas Disconnections', publisher: 'North Dakota Public Service Commission', url: 'https://www.psc.nd.gov/sites/www/files/documents/jurisdiction/electric_gas/con_info/PUD-E1-Protect-From-Disconnections.pdf', accessed: '2026-10-15' },
    { title: 'Filing An Informal Complaint', publisher: 'North Dakota Public Service Commission', url: 'https://www.psc.nd.gov/sites/www/files/documents/jurisdiction/electric_gas/con_info/PUD-3-Informal-Complaint.pdf', accessed: '2026-10-15' },
    { title: 'The Commission', publisher: 'North Dakota Public Service Commission', url: 'https://www.psc.nd.gov/commission', accessed: '2026-10-15' },
    { title: 'A Day in Your Life: The North Dakota Public Service Commission', publisher: 'North Dakota Public Service Commission', url: 'https://www.psc.nd.gov/sites/www/files/documents/commission/A-Day-in-Your-Life_Updated%20May%202024.pdf', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'North Dakota Health and Human Services', url: 'https://www.hhs.nd.gov/applyforhelp/liheap', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance', publisher: 'North Dakota Department of Commerce', url: 'https://www.commerce.nd.gov/community-services/low-income-programs/weatherization-assistance', accessed: '2026-10-15' },
    { title: 'Consumer Complaints', publisher: 'North Dakota Attorney General', url: 'https://attorneygeneral.nd.gov/consumer-resources/consumer-complaints/', accessed: '2026-10-15' },
    { title: 'Home Energy Rebates Program', publisher: 'North Dakota Department of Commerce', url: 'https://www.commerce.nd.gov/community-services/energy-efficiency-program/home-energy-rebates-program', accessed: '2026-10-15' },
  ],
}
