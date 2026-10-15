import type { StateGuide } from '../types'

export const co: StateGuide = {
  code: 'CO',
  lastReviewed: '2026-10-15',
  intro:
    'Depending on where you live in Colorado, your electricity comes from an investor-owned utility, a co-op or a city utility, and only the investor-owned companies have their rates set by the state.[^5] Colorado\'s rules also limit shutoffs in both cold and hot weather.[^3]',
  regulator: {
    name: 'Colorado Public Utilities Commission (PUC)',
    url: 'https://puc.colorado.gov/',
    complaintUrl: 'https://puc.colorado.gov/about-the-puc/contact-the-puc',
    text:
      'The PUC\'s mission is to regulate utilities so Coloradans receive safe, reliable and reasonably priced services.[^1] Part of the Department of Regulatory Agencies, it has rate, safety and service authority over some electric, gas, water, telephone and transportation companies.[^3] It fully regulates investor-owned electric and gas utilities, but has only some reporting requirements for city utilities and electric co-ops.[^4] **Try to solve the problem with your utility first.** If you can\'t, you have the right to file an informal or formal complaint with the PUC.[^3] Consumer Assistance is at 303-894-2070, or 800-456-0858 outside Denver.[^2]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Colorado has two investor-owned electric utilities, Black Hills Energy and Public Service Company of Colorado (Xcel Energy), and the PUC regulates them.[^5] The state\'s 28 city utilities and 22 rural electric co-ops are not regulated by the PUC.[^5] Regulated utilities must provide service at rates the PUC approves and give you a copy of their rates within 10 days if you ask.[^3] If you are having trouble paying, you can ask your utility about an installment plan or [budget billing](/glossary#budget-billing).[^3]',
    shopping: null,
  },
  gas: {
    text:
      'The PUC regulates four investor-owned gas utilities: Atmos Energy, Black Hills Gas Distribution, Colorado Natural Gas and Public Service Company of Colorado (Xcel Energy).[^5] The state\'s 11 city-owned gas utilities are not regulated by the PUC.[^5] The same customer rights for bills, deposits and shutoffs apply to regulated gas and electric service.[^3]',
    shopping: null,
  },
  water: {
    text:
      'The PUC approves rates for investor-owned water companies, but most water systems are outside its oversight: it does not regulate city systems, water districts, or water and sanitation districts.[^6] Contact your city or district about those rates. See [water and sewer bills](/categories/water-sewer).',
  },
  shutoff: {
    text:
      'Regulated utilities must send a late-payment notice, then a written final shutoff notice at least 12 business days before the shutoff date, and try to reach you in person or by phone at least 24 hours before.[^3] **They cannot shut off gas or electric service on a day when the National Weather Service forecasts 32°F or lower in the next 24 hours, or electric service when it forecasts 95°F or higher.**[^3] They also cannot disconnect for a balance under $50, outside 8 a.m. to 4 p.m., or over weekends and holidays.[^3] A medical certificate stating that a shutoff would be especially dangerous to someone in your home delays disconnection for 90 days, once in any 12 months.[^3]',
  },
  help: [
    {
      name: 'Colorado Low-income Energy Assistance Program (LEAP)',
      url: 'https://cdhs.colorado.gov/leap',
      summary:
        'The Colorado Department of Human Services helps pay part of winter heating costs and can repair or replace a broken heating system for households with income up to 60% of the state median income. Applications are accepted November 1 through April 30.[^7] LEAP enrollment also prevents disconnection of service.[^9]',
    },
    {
      name: 'Percentage of Income Payment Plan (PIPP)',
      url: 'https://puc.colorado.gov/energy-pipp',
      summary:
        'Limits electric or gas bills to 6% of yearly income for income-qualified customers of Xcel Energy, Black Hills Energy, Atmos Energy and Colorado Natural Gas. Start by applying to LEAP, Energy Outreach Colorado or the Weatherization Assistance Program; your utility makes the final decision.[^8]',
    },
    {
      name: 'Energy Outreach Colorado bill assistance',
      url: 'https://puc.colorado.gov/affordability',
      summary:
        'Energy Outreach Colorado, a nonprofit listed by the PUC, offers emergency help with past-due energy bills year-round for income-qualified renters and homeowners who are past due or low on fuel. Call 1-866-432-8435 to find an agency.[^9]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://energyoffice.colorado.gov/weatherization-assistance-program',
      summary:
        'The Colorado Energy Office provides no-cost weatherization, such as insulation and air sealing, for income-qualified homeowners and renters through local providers. Households may be placed on a waiting list.[^10]',
    },
  ],
  consumer: {
    name: 'Colorado Attorney General, Consumer Protection Section',
    url: 'https://coag.gov/file-complaint/',
    summary:
      'The Consumer Protection Section takes consumer complaints, investigates fraud and enforces the Colorado Consumer Protection Act.[^11] It does not give legal advice or represent individuals.[^12]',
  },
  rebates: [
    {
      name: 'Colorado Home Energy Rebate Program',
      url: 'https://energyoffice.colorado.gov/home-energy-rebates',
      summary:
        'The Colorado Energy Office issues rebates through registered contractors for efficient electric appliances and whole-home efficiency upgrades. **As of October 2026, the single-family appliance rebates (HEAR) are closed**; the Energy Office says rebates for small multifamily buildings, and Home Efficiency Rebates (HER) for manufactured/mobile homes and large multifamily buildings, are being launched in stages, so check the site for current status.[^13]',
    },
  ],
  sources: [
    { title: 'Colorado Public Utilities Commission home page', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/', accessed: '2026-10-15' },
    { title: 'Contact the PUC', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/about-the-puc/contact-the-puc', accessed: '2026-10-15' },
    { title: 'Your Rights As An Electric Or Natural Gas Utility Customer', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/puc-home/energy-and-water/electric-regulation-in-colorado/know-your-rights', accessed: '2026-10-15' },
    { title: 'Electric - Consumer Info', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/aboutelectric', accessed: '2026-10-15' },
    { title: 'Energy Utility Service Territories', publisher: 'Colorado Energy Office', url: 'https://energyoffice.colorado.gov/energy-utility-service-territories', accessed: '2026-10-15' },
    { title: 'Water - Consumer Info', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/aboutwater', accessed: '2026-10-15' },
    { title: 'Colorado Low-income Energy Assistance Program (LEAP)', publisher: 'Colorado Department of Human Services', url: 'https://cdhs.colorado.gov/leap', accessed: '2026-10-15' },
    { title: 'Percentage of Income Payment Plan (PIPP)', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/energy-pipp', accessed: '2026-10-15' },
    { title: 'Affordability', publisher: 'Colorado Public Utilities Commission', url: 'https://puc.colorado.gov/affordability', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Colorado Energy Office', url: 'https://energyoffice.colorado.gov/weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Colorado Attorney General', url: 'https://coag.gov/office-sections/consumer-protection/', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Colorado Attorney General', url: 'https://coag.gov/file-complaint/', accessed: '2026-10-15' },
    { title: 'Colorado Home Energy Rebate Program', publisher: 'Colorado Energy Office', url: 'https://energyoffice.colorado.gov/home-energy-rebates', accessed: '2026-10-15' },
  ],
}
