import type { StateGuide } from '../types'

export const ks: StateGuide = {
  code: 'KS',
  lastReviewed: '2026-10-15',
  intro:
    'In Kansas, the Kansas Corporation Commission sets rates for investor-owned utilities such as Evergy, Liberty, Atmos Energy, Black Hills and Kansas Gas Service.[^2][^5] Most electric cooperatives and city-owned utilities set their own rates, so who protects you depends on which kind of utility serves your home.[^1][^2]',
  regulator: {
    name: 'Kansas Corporation Commission (KCC)',
    url: 'https://www.kcc.ks.gov/',
    complaintUrl: 'https://kcc-connect.kcc.ks.gov/s/file-a-complaint',
    text:
      'The KCC’s Utilities Division sets and regulates rates for public utilities, including electricity and natural gas.[^1] The KCC does not regulate most electric cooperatives, water cooperatives or municipalities, and it does not regulate wireless phones, cable or the internet.[^1] **Contact your utility first.** If that does not resolve the issue, the KCC’s Office of Public Affairs and Consumer Protection can help: file a complaint online or call (800) 662-0027.[^3][^4]',
  },
  electricity: {
    market: 'regulated',
    text:
      'The KCC regulates the investor-owned electric utilities Evergy and Liberty Utilities (Empire District).[^2] Each electric public utility holds a certified retail electric service area, which the KCC describes as an exclusive territory, so your address determines your provider.[^6] A regulated utility must get KCC approval to change its rates, and the KCC usually has 240 days to decide a rate case.[^5] The Citizens’ Utility Ratepayer Board (CURB) represents residential and small business customers in those cases.[^5][^14] Co-ops and city utilities generally fall outside KCC jurisdiction and set their own rates.[^2]',
    shopping: null,
  },
  gas: {
    text:
      'The KCC regulates the rates of the main gas utilities, including Atmos Energy, Black Hills and Kansas Gas Service, as well as a few smaller gas companies.[^2] Its Utilities Division also runs the state pipeline safety program.[^1] The state does not run a gas shopping website, so contact your gas utility with questions about your rate.',
    shopping: null,
  },
  water: {
    text:
      'Only a handful of water companies fall under the KCC, such as Suburban Water Company and Barton Hills Water District.[^2] The KCC does not regulate water cooperatives or municipalities, so most Kansas water and sewer rates are set by your city council or local water district.[^1] Learn more in our [water and sewer guide](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'A KCC-regulated electric, gas or water utility must give you 10 days’ written notice before disconnecting service.[^8] If a shutoff would be especially dangerous to someone’s health, and you cannot pay in full, the utility must either allow reasonable installments or postpone the shutoff at least 21 days.[^8] Under the **Cold Weather Rule** (November 1 through March 31), the utility cannot disconnect you when the temperature is forecast to drop below 35°F, or into the mid 30s or colder, within the next 48 hours.[^7][^8] To stay connected, or to get reconnected at any temperature, pay 1/12 of the overdue amount plus 1/12 of your current bill, any disconnection and reconnection fees and any deposit owed, then the rest in equal payments over 11 months.[^7] During this period, the utility must also try to call you or contact you in person the day before a shutoff.[^7]',
  },
  help: [
    {
      name: 'Low Income Energy Assistance Program (LIEAP)',
      url: 'https://www.dcf.ks.gov/services/ees/Pages/EnergyAssistance.aspx',
      summary:
        'Run by the Kansas Department for Children and Families, LIEAP pays a one-time yearly benefit toward winter heating costs, whether you heat with electricity, natural gas, propane or another fuel.[^9] Household income cannot exceed 150% of the federal poverty level, and you apply during the yearly application period online or through a DCF Service Center; check the page for the next application period.[^9]',
    },
    {
      name: 'Weatherization Assistance',
      url: 'https://kshousingcorp.org/housing-partners/community-solutions/#weatherization',
      summary:
        'Kansas Housing Resources Corporation runs this free program for income-eligible homeowners and renters, starting with a home energy audit.[^10] Households that receive LIEAP, SSI or TANF automatically meet the income test.[^10]',
    },
    {
      name: 'Utility and Weatherization Related Assistance Programs (KCC resource guide)',
      url: 'https://www.kcc.ks.gov/public-affairs-and-consumer-protection/utility-weatherization-related-assistance-programs',
      summary:
        'The KCC’s statewide resource guide lists local organizations, by region, that help pay utility bills or make homes more energy efficient.[^11]',
    },
  ],
  consumer: {
    name: 'Kansas Attorney General Consumer Protection Division',
    url: 'https://www.ag.ks.gov/divisions/public-protection/consumer-protection',
    summary:
      'The Consumer Protection Division investigates scams and mediates and prosecutes violations of the Kansas Consumer Protection Act and the No-Call Act.[^12] It cannot give private legal advice, and not every dispute falls under its authority.[^12]',
  },
  rebates: [
    {
      name: 'Kansas Energy Office',
      url: 'https://www.kcc.ks.gov/kansas-energy-office',
      summary:
        'The Kansas Energy Office, a division of the KCC, runs the state’s efficiency programs.[^13] As of October 2026, it says the Kansas Energy Rebate Program for the federal home energy rebates is reviewing updated U.S. Department of Energy guidance and will post status updates; you can sign up for notices.[^13]',
    },
  ],
  sources: [
    { title: "The Commission's Role", publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/about-us/the-commissions-s-role', accessed: '2026-10-15' },
    { title: 'Jurisdictional Utilities', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/about-us/jurisdiction', accessed: '2026-10-15' },
    { title: 'Consumer Information', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/consumer-information', accessed: '2026-10-15' },
    { title: 'Public Affairs and Consumer Protection FAQs', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/public-affairs-and-consumer-protection/public-affairs-and-consumer-protection-faqs', accessed: '2026-10-15' },
    { title: 'How Rates Are Set', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/electric/how-rates-are-set', accessed: '2026-10-15' },
    { title: 'Original Retail Electric Service Area (RESA) Certifications', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/electric/original-resa-certifications', accessed: '2026-10-15' },
    { title: 'Cold Weather Rule', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/consumer-information/cold-weather-rule', accessed: '2026-10-15' },
    { title: 'Electric, Natural Gas and Water Billing Standards (effective January 20, 2012)', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/images/PDFs/pi/billing_2012.pdf', accessed: '2026-10-15' },
    { title: 'Low Income Energy Assistance Program (LIEAP)', publisher: 'Kansas Department for Children and Families', url: 'https://www.dcf.ks.gov/services/ees/Pages/EnergyAssistance.aspx', accessed: '2026-10-15' },
    { title: 'Community Solutions: Weatherization Assistance', publisher: 'Kansas Housing Resources Corporation', url: 'https://kshousingcorp.org/housing-partners/community-solutions/#weatherization', accessed: '2026-10-15' },
    { title: 'Utility & Weatherization Related Assistance Programs', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/public-affairs-and-consumer-protection/utility-weatherization-related-assistance-programs', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Kansas Attorney General', url: 'https://www.ag.ks.gov/divisions/public-protection/consumer-protection', accessed: '2026-10-15', note: 'Site blocks scripted requests; verified in a browser.' },
    { title: 'Kansas Energy Office', publisher: 'Kansas Corporation Commission', url: 'https://www.kcc.ks.gov/kansas-energy-office', accessed: '2026-10-15' },
    { title: "Citizens' Utility Ratepayer Board (CURB)", publisher: "Citizens' Utility Ratepayer Board", url: 'https://curb.kansas.gov/', accessed: '2026-10-15' },
  ],
}
