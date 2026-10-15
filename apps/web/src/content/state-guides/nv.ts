import type { StateGuide } from '../types'

export const nv: StateGuide = {
  code: 'NV',
  lastReviewed: '2026-10-15',
  intro:
    'The Public Utilities Commission of Nevada regulates about 400 investor-owned utilities, including electric and gas companies, and sets their rates.[^1][^4] Only very large users can buy power from another provider, so for homes the key protections are the rate cases and the state\'s Consumers Bill of Rights.[^5][^6]',
  regulator: {
    name: 'Public Utilities Commission of Nevada (PUCN)',
    url: 'https://www.puc.nv.gov/',
    complaintUrl: 'https://www.puc.nv.gov/consumers/consumer-complaints-with-a-utility/',
    text:
      'The PUCN regulates about 400 investor-owned utilities providing electric, natural gas, phone, water and wastewater service, and sets just and reasonable rates.[^1][^4] It does not regulate co-ops, general improvement districts or government-owned utilities, and cannot take complaints from their customers.[^3] **Contact your utility first** and ask for a supervisor if needed.[^2] If you are still unhappy, the PUCN\'s Consumer Complaint Resolution Division takes informal complaints by phone or online, usually handled in 3 to 5 business days, and you can then file a formal written complaint.[^2]',
  },
  electricity: {
    market: 'partial',
    text:
      '**Households in Nevada cannot choose their electricity supplier**: only "eligible customers," meaning businesses and government entities with an average annual load of 1 megawatt or more, can buy electricity from a provider other than their utility.[^5] You buy power from your local utility at rates the PUCN sets in rate cases.[^1] Electric and gas utilities must offer equal payment plans for budgeting and payment plans for past-due bills.[^6] Co-op and city utility customers should contact their utility directly, since the PUCN does not regulate them.[^3] See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PUCN regulates investor-owned natural gas utilities, along with some propane systems and gas and electric "master meter" service at mobile home parks.[^4] The same Consumers Bill of Rights protections on deposits, payment plans and shutoffs apply to regulated gas and electric service.[^6]',
    shopping: null,
  },
  water: {
    text:
      'The PUCN regulates investor-owned water and wastewater utilities.[^4] It does not regulate general improvement districts or government-owned water systems, so contact your city or district about those rates.[^3] A regulated water utility cannot shut off service for nonpayment unless it has first offered you a deferred payment program.[^6] See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A regulated utility must send written notice at least 10 days before shutting off service; if you don\'t respond, it must send a second notice that reaches you at least 48 hours before.[^7] It cannot shut off service on a weekend, a holiday or the day before one, or for nonpayment when you owe $50 or less ($100 or less in some cases).[^7] **Shutoffs for nonpayment must be postponed when the National Weather Service forecasts extreme heat or cold for your area**; the exact temperature thresholds depend on your utility territory and household.[^7] A statement from a licensed physician, public health official or advanced practice registered nurse that a shutoff would be especially dangerous to someone\'s health, plus your statement that you can\'t pay in full, postpones disconnection for 30 days, renewable once for another 30.[^7]',
  },
  help: [
    {
      name: 'Energy Assistance Program (EAP)',
      url: 'https://www.dss.nv.gov/programs/energy/',
      summary:
        'Nevada\'s Division of Social Services helps qualifying low-income households with home energy costs, funded by the federal LIHEAP grant and the state\'s Universal Energy Charge. Applications are accepted July 1 through June 30 until funds run out, and the yearly benefit is usually paid directly to your energy provider.[^8]',
    },
    {
      name: 'Utility and nonprofit assistance programs',
      url: 'https://www.puc.nv.gov/consumers/consumer-assistance/',
      summary:
        'The PUCN lists other help, including Project REACH for customers 62 and older (run by United Way of Southern Nevada), the SAFE fund in northern Nevada, Southwest Gas\'s Energy Share, and third-party notice programs that send a copy of shutoff notices to someone you choose.[^9]',
    },
    {
      name: 'Nevada Weatherization Assistance Program',
      url: 'https://housing.nv.gov/programs/weatherization/',
      summary:
        'The Nevada Housing Division funds nonprofit agencies that provide no-cost weatherization, such as HVAC, refrigerator and water heater repairs or upgrades, for households at or below 200% of the federal poverty level.[^10]',
    },
  ],
  consumer: {
    name: 'Nevada Attorney General, Bureau of Consumer Protection',
    url: 'https://ag.nv.gov/About/Consumer_Protection/Bureau_of_Consumer_Protection/',
    summary:
      'The Bureau takes complaints about scams and deceptive practices; its hotline is (888) 434-9989.[^11] It also represents utility customers in PUCN rate proceedings.[^9] It warns that fake utility callers may demand gift cards or wire transfers, while real utilities send several notices before a shutoff.[^11]',
  },
  rebates: [
    {
      name: 'Home Energy Retrofit Opportunities for Seniors (HEROS)',
      url: 'https://www.energy.nv.gov/programs/home-energy-retrofit-opportunities-for-seniors/',
      summary:
        'The Governor\'s Office of Energy and the Nevada Housing Division offer no-cost energy efficiency upgrades to income-qualified seniors (at or below 200% of federal poverty guidelines) who own their homes. Apply through one of the approved service provider agencies.[^12]',
    },
  ],
  sources: [
    { title: 'Who is the PUCN?', publisher: 'Public Utilities Commission of Nevada', url: 'https://www.puc.nv.gov/about/', accessed: '2026-10-15' },
    { title: 'Consumer Complaints with a Utility', publisher: 'Public Utilities Commission of Nevada', url: 'https://www.puc.nv.gov/consumers/consumer-complaints-with-a-utility/', accessed: '2026-10-15' },
    { title: 'FAQs', publisher: 'Public Utilities Commission of Nevada', url: 'https://www.puc.nv.gov/consumers/faqs/', accessed: '2026-10-15' },
    { title: 'Utilities', publisher: 'Public Utilities Commission of Nevada', url: 'https://www.puc.nv.gov/utilities/', accessed: '2026-10-15' },
    { title: 'NRS Chapter 704B, Energy Supply Transactions (NRS 704B.080, Eligible customer defined)', publisher: 'Nevada Legislature', url: 'https://www.leg.state.nv.us/NRS/NRS-704B.html', accessed: '2026-10-15' },
    { title: 'Consumers Bill of Rights (fact sheet)', publisher: 'Public Utilities Commission of Nevada', url: 'https://www.puc.nv.gov/siteassets/consumers/fact-sheets/utility-regulation-fact-sheets/fact_sheet_cbr.pdf', accessed: '2026-10-15' },
    { title: 'NAC Chapter 704 (NAC 704.360, 704.370, 704.375)', publisher: 'Nevada Legislature', url: 'https://www.leg.state.nv.us/NAC/NAC-704.html', accessed: '2026-10-15' },
    { title: 'Energy Assistance Program', publisher: 'Nevada Division of Social Services', url: 'https://www.dss.nv.gov/programs/energy/', accessed: '2026-10-15' },
    { title: 'Financial Help', publisher: 'Public Utilities Commission of Nevada', url: 'https://www.puc.nv.gov/consumers/consumer-assistance/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance', publisher: 'Nevada Housing Division', url: 'https://housing.nv.gov/programs/weatherization/', accessed: '2026-10-15' },
    { title: 'Bureau of Consumer Protection', publisher: 'Office of the Nevada Attorney General', url: 'https://ag.nv.gov/About/Consumer_Protection/Bureau_of_Consumer_Protection/', accessed: '2026-10-15' },
    { title: 'Home Energy Retrofit Opportunities for Seniors (HEROS)', publisher: 'Nevada Governor\'s Office of Energy', url: 'https://www.energy.nv.gov/programs/home-energy-retrofit-opportunities-for-seniors/', accessed: '2026-10-15' },
  ],
}
