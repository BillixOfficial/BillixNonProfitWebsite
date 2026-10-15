import type { StateGuide } from '../types'

export const hi: StateGuide = {
  code: 'HI',
  lastReviewed: '2026-10-15',
  intro:
    'Hawaii had the **highest average retail electricity price of any state** in 2024, and petroleum is its primary energy source for power.[^1] The Hawaii Public Utilities Commission (PUC) regulates the state\'s electric, gas, and private water and sewer utilities, including Hawaiian Electric.[^2][^3]',
  regulator: {
    name: 'Hawaii Public Utilities Commission (PUC)',
    url: 'https://puc.hawaii.gov/',
    complaintUrl: 'https://puc.hawaii.gov/faq/',
    text:
      'The PUC regulates all chartered, franchised, certificated, and registered public utility companies that provide electricity, gas, telecommunications, and private water and sewage service in the state.[^2] It does **not** regulate county water departments, such as the Honolulu Board of Water Supply; take those complaints to your mayor\'s office.[^3] If your utility cannot resolve your problem, you can file an informal complaint with the PUC, and if you still believe the utility broke a rule or law, a formal complaint (with a $30 filing fee).[^3] The state Division of Consumer Advocacy represents consumers as a whole in every PUC proceeding.[^3][^6]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Public utilities typically operate without competition, so the state regulates them as natural monopolies; the PUC oversees and approves their rates.[^6][^3] The PUC approves Hawaiian Electric\'s tariffs and its rate programs, such as time-of-use rates and rooftop solar programs.[^3] Kauai Island Utility Cooperative (KIUC) customers have their own programs for solar and other customer-sited energy that are not set in the PUC\'s Hawaiian Electric dockets.[^3] To see what drives your bill, read [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'Utility gas service in Hawaii is regulated by the PUC, which oversees and approves gas utility rates.[^2][^3] If you cannot resolve a billing or service dispute with your gas utility, you can file an informal complaint with the PUC.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The PUC regulates 38 privately owned water and sewage treatment utilities serving suburban, rural, and resort areas, mostly on the neighbor islands.[^4] It does **not** regulate water and wastewater service from city and county governments, whose rates are set locally.[^4][^3]',
  },
  shutoff: {
    text:
      'Under PUC rules, you must get reasonable written notice before electric or gas service is shut off, and at least 15 days to pay a bill after it is issued; you can dispute a bill with the utility within that time.[^5] The shutoff notice must state the reason, the earliest shutoff date, and what you can do to avoid it, and service may not be cut on Saturdays, Sundays, or utility holidays.[^5] Utilities must give **special consideration to elderly customers (62 or older) and customers with disabilities**, and must send the PUC a written report and investigation at least five days before shutting off their service.[^5]',
  },
  help: [
    {
      name: 'Hawaii Home Energy Assistance Program (H-HEAP)',
      url: 'https://humanservices.hawaii.gov/bessd/liheap/',
      summary:
        'Hawaii\'s LIHEAP program, from the Department of Human Services, makes a one-time payment toward an electric or gas bill. Energy Crisis Intervention (ECI) helps households with a disconnection notice and takes applications year-round, though monthly approvals are limited; Energy Credit (EC) applications are accepted only June 1 to June 30. Apply through the Community Action Agency that serves your island, not at a DHS office.[^7]',
    },
    {
      name: 'Green Energy Money $aver (GEM$) On-Bill Program',
      url: 'https://gems.hawaii.gov/',
      summary:
        'A Hawaii Green Infrastructure Authority program that offers financing for rooftop solar and solar hot water to low- and moderate-income Hawaiian Electric customers, according to the PUC.[^3]',
    },
  ],
  consumer: {
    name: 'Hawaii Department of Commerce and Consumer Affairs, Office of Consumer Protection',
    url: 'https://cca.hawaii.gov/ocp/',
    summary:
      'Investigates and prosecutes unfair or deceptive trade practices in consumer transactions and educates the public. To file a complaint about a merchant or business, call the DCCA Consumer Resource Center.[^8]',
  },
  rebates: [
    {
      name: 'Hawaii Energy',
      url: 'https://hawaiienergy.com/',
      summary:
        'The PUC oversees a Public Benefits Fee that funds energy efficiency programs run by an independent administrator on Oahu, Maui, Molokai, Lanai, and Hawaii Island.[^2] The PUC lists Hawaii Energy as offering rebates to Hawaiian Electric customers for energy-saving measures, including solar water heating.[^3]',
    },
  ],
  sources: [
    { title: 'Hawaii Electricity Profile 2024', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/electricity/state/hawaii/', accessed: '2026-10-15' },
    { title: 'Introduction', publisher: 'Hawaii Public Utilities Commission', url: 'https://puc.hawaii.gov/about/introduction/', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions', publisher: 'Hawaii Public Utilities Commission', url: 'https://puc.hawaii.gov/faq/', accessed: '2026-10-15' },
    { title: 'Water/Wastewater', publisher: 'Hawaii Public Utilities Commission', url: 'https://puc.hawaii.gov/waterwastewater/', accessed: '2026-10-15' },
    { title: 'Hawaii Administrative Rules Chapter 6-60, Standards for Electric and Gas Utility Service (section 6-60-8)', publisher: 'Hawaii Public Utilities Commission', url: 'https://puc.hawaii.gov/wp-content/uploads/2013/04/Chapter-6-60.pdf', accessed: '2026-10-15' },
    { title: 'Division of Consumer Advocacy', publisher: 'Hawaii Department of Commerce and Consumer Affairs', url: 'https://cca.hawaii.gov/dca/', accessed: '2026-10-15' },
    { title: 'Hawaii Home Energy Assistance Program (H-HEAP)', publisher: 'Hawaii Department of Human Services, Benefit, Employment and Support Services Division', url: 'https://humanservices.hawaii.gov/bessd/liheap/', accessed: '2026-10-15' },
    { title: 'Office of Consumer Protection', publisher: 'Hawaii Department of Commerce and Consumer Affairs', url: 'https://cca.hawaii.gov/ocp/', accessed: '2026-10-15' },
  ],
}
