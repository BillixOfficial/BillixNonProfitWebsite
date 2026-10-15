import type { StateGuide } from '../types'

export const wy: StateGuide = {
  code: 'WY',
  lastReviewed: '2026-10-15',
  intro:
    'The Wyoming Public Service Commission (PSC) regulates monopoly utilities, including investor-owned electric companies, natural gas utilities, and a small number of private water companies.[^1] In some Wyoming communities you can also choose your natural gas supplier through the Choice Gas Program.[^5][^6]',
  regulator: {
    name: 'Wyoming Public Service Commission (PSC)',
    url: 'https://psc.wyo.gov/',
    complaintUrl: 'https://psc.wyo.gov/home/file-a-complaint',
    text:
      'The PSC regulates investor-owned electric utilities, natural gas utilities, and some private water utilities, and it has limited jurisdiction over retail rural electric cooperatives.[^1][^3] It does **not** regulate or take complaints about utility service that cities provide inside city limits.[^2] You can file a complaint online, by email, or by mail; the PSC asks the utility to respond and works with you until the issue is resolved or understood. If you disagree with the outcome, you can request a formal hearing in writing.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The PSC was created to regulate monopoly public utilities, including the investor-owned electric companies that serve Wyoming.[^1] The PSC hears rate cases and approves rates and tariffs for the investor-owned electric utilities, reviews requests to pass through wholesale power cost increases, and mediates customer complaints.[^3] Its authority also extends to rural electric co-ops and to municipal utilities that serve customers outside city limits.[^3]',
    shopping: null,
  },
  gas: {
    text:
      'The PSC approves rates and tariffs for natural gas utilities and reviews their requests to pass on wholesale gas cost increases.[^4] Eligible customers of Black Hills Energy in Wyoming can pick a gas commodity supplier during an annual enrollment period under the Choice Gas Program, according to the utility.[^6] If you do not choose, you roll over with the same supplier and rate type at a new rate set by the supplier, and the PSC\'s historical results show that **rollover customers typically paid more** than customers who made an active choice.[^5]',
    shopping: {
      name: 'Historical Choice Gas Program Results (Wyoming PSC)',
      url: 'https://psc.wyo.gov/home/choice-gas-program',
    },
  },
  water: {
    text:
      'The PSC regulates a small number of private water utilities, approving their rates and mediating complaints.[^7] Most Wyoming water service comes from cities and water and improvement districts, which the PSC does not regulate; their rates are set locally.[^7]',
  },
  shutoff: {
    text:
      'Under PSC rules, a utility must give residential customers at least seven calendar days\' notice before disconnecting for nonpayment.[^8] If a health care provider certifies in writing before the shutoff date that someone\'s health or safety would be seriously endangered, the utility must extend the date by 15 days.[^8] From November 1 through April 30, the utility must try to reach you in person or by phone before disconnecting.[^8] Utilities may not disconnect for nonpayment from December 24 through January 2, on a legal holiday or the day before, or when the temperature is forecast to drop **below 32°F in the next 48 hours** or conditions are otherwise especially dangerous to health, for the customers the rule protects, including residential customers.[^8]',
  },
  help: [
    {
      name: 'Low Income Energy Assistance Program (LIEAP)',
      url: 'https://dfs.wyo.gov/assistance-programs/home-utilities-energy-assistance/low-income-energy-assistance-program-lieap/',
      summary:
        'Wyoming\'s LIHEAP program, run by the Department of Family Services. It helps pay part of winter heating bills for any fuel type and offers crisis help for shutoff notices, broken furnaces, or running out of fuel. Household income must be at or below 60 percent of the state median. Apply online during the heating season (October 1, 2026, through April 30, 2027, for the 2026-27 season), or call (800) 246-4221; a new application is needed every heating season.[^9]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://dfs.wyo.gov/assistance-programs/home-utilities-energy-assistance/weatherization-assistance-program-wap-2/',
      summary:
        'Free efficiency improvements, such as insulation, air sealing, and heating system safety checks, for homeowners and renters with income up to 200 percent of the federal poverty level. Applications are accepted year-round, and approved LIEAP applicants are considered automatically.[^10]',
    },
  ],
  consumer: {
    name: 'Wyoming Attorney General, Consumer Protection and Antitrust Unit',
    url: 'https://ag.wyo.gov/law-office-division/consumer-protection-and-antitrust-unit',
    summary:
      'Enforces the Wyoming Consumer Protection Act and accepts written consumer complaints, which it may forward to the business for a response. It cannot act as your private attorney.[^11]',
  },
  rebates: [],
  sources: [
    { title: 'About Us', publisher: 'Wyoming Public Service Commission', url: 'https://psc.wyo.gov/about-us', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Wyoming Public Service Commission', url: 'https://psc.wyo.gov/home/file-a-complaint', accessed: '2026-10-15' },
    { title: 'Electric', publisher: 'Wyoming Public Service Commission', url: 'https://psc.wyo.gov/electric', accessed: '2026-10-15' },
    { title: 'Gas', publisher: 'Wyoming Public Service Commission', url: 'https://psc.wyo.gov/gas', accessed: '2026-10-15' },
    { title: 'Historical Choice Gas Program Results', publisher: 'Wyoming Public Service Commission', url: 'https://psc.wyo.gov/home/choice-gas-program', accessed: '2026-10-15' },
    { title: 'Choice Gas Program', publisher: 'Black Hills Energy (utility)', url: 'https://blackhillsenergy.com/services/choice-gas-program', accessed: '2026-10-15', note: 'Utility page; used only to identify which utility runs the Wyoming Choice Gas Program.' },
    { title: 'Water', publisher: 'Wyoming Public Service Commission', url: 'https://psc.wyo.gov/water', accessed: '2026-10-15' },
    { title: 'Public Service Commission Rules, Chapter 3 (Electric, Gas, Water and Pipeline Utilities), Section 9', publisher: 'Wyoming Secretary of State, Administrative Rules', url: 'https://rules.wyo.gov/Search.aspx?mode=1', accessed: '2026-10-15', note: 'Search under Public Service Commission (023), Public Service Commission Rules, Chapter 3.' },
    { title: 'Low Income Energy Assistance Program (LIEAP)', publisher: 'Wyoming Department of Family Services', url: 'https://dfs.wyo.gov/assistance-programs/home-utilities-energy-assistance/low-income-energy-assistance-program-lieap/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program (WAP)', publisher: 'Wyoming Department of Family Services', url: 'https://dfs.wyo.gov/assistance-programs/home-utilities-energy-assistance/weatherization-assistance-program-wap-2/', accessed: '2026-10-15' },
    { title: 'Consumer Protection and Antitrust Unit', publisher: 'Wyoming Attorney General', url: 'https://ag.wyo.gov/law-office-division/consumer-protection-and-antitrust-unit', accessed: '2026-10-15' },
  ],
}
