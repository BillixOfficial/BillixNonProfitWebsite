import type { StateGuide } from '../types'

export const wa: StateGuide = {
  code: 'WA',
  lastReviewed: '2026-10-15',
  intro:
    'In Washington, who protects you depends on who serves you: the Utilities and Transportation Commission (UTC) oversees investor-owned companies like Puget Sound Energy, Avista, and PacifiCorp, while city utilities, Public Utility Districts, and co-ops answer to local boards.[^1] Low-income households can get help through LIHEAP and through bill assistance programs run by the utilities themselves.[^4][^5]',
  regulator: {
    name: 'Washington Utilities and Transportation Commission (UTC)',
    url: 'https://www.utc.wa.gov/',
    complaintUrl: 'https://www.utc.wa.gov/FileComplaint',
    text:
      'The UTC regulates only privately held or investor-owned companies, including electric, natural gas, and some water companies.[^2][^1] It oversees their rates and charges, billing accuracy, and service quality.[^1] It does **not** regulate municipal utilities, Public Utility Districts, or cooperatives; take those disputes to the utility directly.[^1][^2] For a UTC-regulated company, try to resolve the problem with the company first, including asking for a supervisor, then file an informal complaint with the UTC.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Rates and charges for the three investor-owned electric companies, Puget Sound Energy, Avista, and PacifiCorp, are reviewed and set by the UTC.[^1][^3][^6] Rates for city-owned utilities, PUDs, and co-ops such as Seattle City Light and Snohomish PUD are not set by the UTC.[^1] State law requires electric utilities to offer a voluntary green power option, which lets you buy blocks of renewable energy from your existing utility for an added fee.[^6]',
    shopping: null,
  },
  gas: {
    text:
      'The UTC regulates the rates and service of the investor-owned natural gas companies: Puget Sound Energy, Avista, Northwest Natural Gas, and Cascade Natural Gas.[^1] It does not regulate municipally owned gas utilities.[^1]',
    shopping: null,
  },
  water: {
    text:
      'The UTC regulates privately owned water companies that serve more than 100 customers or bill customers more than $557 per year.[^7] It does **not** regulate the rates or service of city, town, or county water systems, Public Utility Districts, cooperatives, or homeowners\' associations; those rates are set locally.[^7] For water quality or pressure problems, contact the Department of Health Drinking Water Section.[^7]',
  },
  shutoff: {
    text:
      'Regulated utilities may not disconnect you on weekends, legal holidays, or any day they cannot restore service on the same or next day, and they must send at least one written notice first.[^3] UTC-regulated electric and water companies cannot shut off residential service for nonpayment during heat alerts issued by the National Weather Service.[^7] If someone in your home has a medical emergency, the utility must delay disconnection for five business days so you can submit a medical certificate, pay at least 10 percent of the past-due balance (electric and gas), and arrange to pay the rest.[^3][^5] Under the **Winter Low-Income Payment Program**, low-income customers who pay 7 percent of monthly household income can keep their heat on from November 15 through March 15.[^5]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.commerce.wa.gov/community-opportunities/liheap/',
      summary:
        'Run by the Washington State Department of Commerce through community action agencies. It usually pays a one-time grant directly to your energy provider for any heating fuel, now includes cooling help, and may repair or replace an unsafe heating or cooling system. Income limits are set at 150 percent of the federal poverty level, and you apply once per October-to-September program year by booking an appointment with your local agency.[^4]',
    },
    {
      name: 'Utility bill assistance programs (UTC list)',
      url: 'https://www.utc.wa.gov/consumers/energy-service/energy-assistance-programs',
      summary:
        'The UTC lists assistance offered by the regulated utilities, such as Pacific Power\'s Low-income Bill Assistance Program (LIBA) discount, NW Natural\'s Gas Residential Energy Assistance Tariff (GREAT), and PSE payment plans of up to 18 months. Budget billing, which spreads costs evenly over the year, has no income limit.[^5]',
    },
    {
      name: 'Weatherization Program',
      url: 'https://www.commerce.wa.gov/weatherization/',
      summary:
        'Free energy efficiency repairs, such as insulation and air sealing, for homeowners and renters with incomes up to 200 percent of the federal poverty level, 60 percent of state median income, or 80 percent of area median income. Apply through your local weatherization agency.[^8]',
    },
  ],
  consumer: {
    name: 'Washington State Office of the Attorney General, Consumer Protection Division',
    url: 'https://www.atg.wa.gov/consumer-protection',
    summary:
      'Enforces the Consumer Protection Act and offers an informal complaint resolution service through its Consumer Resource Center. Its attorneys cannot represent individual consumers.[^9]',
  },
  rebates: [
    {
      name: 'State Home Electrification and Appliance Rebates Program (HEAR)',
      url: 'https://www.commerce.wa.gov/energy/clean-buildings/energy-incentives/hear/',
      summary:
        'Commerce funds local administrators that offer rebates on heat pumps, induction cooking, heat pump dryers, and related electrical upgrades for households at or below 150 percent of area median income. Not every administrator offers every rebate, so check with the one in your area.[^10]',
    },
  ],
  sources: [
    { title: 'When To Call The Commission', publisher: 'Washington Utilities and Transportation Commission', url: 'https://www.utc.wa.gov/whentocallcommission', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Washington Utilities and Transportation Commission', url: 'https://www.utc.wa.gov/FileComplaint', accessed: '2026-10-15' },
    { title: 'Energy Consumer Rights', publisher: 'Washington Utilities and Transportation Commission', url: 'https://www.utc.wa.gov/consumers/energy-service/energy-consumer-rights', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance Program (LIHEAP)', publisher: 'Washington State Department of Commerce', url: 'https://www.commerce.wa.gov/community-opportunities/liheap/', accessed: '2026-10-15' },
    { title: 'Energy Assistance Programs', publisher: 'Washington Utilities and Transportation Commission', url: 'https://www.utc.wa.gov/consumers/energy-service/energy-assistance-programs', accessed: '2026-10-15' },
    { title: 'Green Power Programs in Washington', publisher: 'Washington Utilities and Transportation Commission', url: 'https://www.utc.wa.gov/regulated-industries/utilities/energy/conservation-and-renewable-energy-overview/green-power-programs-washington', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions about Water Service', publisher: 'Washington Utilities and Transportation Commission', url: 'https://www.utc.wa.gov/get-help-utility-or-transportation-service/water/water-company-service-faq', accessed: '2026-10-15' },
    { title: 'Weatherization', publisher: 'Washington State Department of Commerce', url: 'https://www.commerce.wa.gov/weatherization/', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Washington State Office of the Attorney General', url: 'https://www.atg.wa.gov/consumer-protection', accessed: '2026-10-15' },
    { title: 'State Home Electrification and Appliance Rebates Program (HEAR)', publisher: 'Washington State Department of Commerce', url: 'https://www.commerce.wa.gov/energy/clean-buildings/energy-incentives/hear/', accessed: '2026-10-15' },
  ],
}
