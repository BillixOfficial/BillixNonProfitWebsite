import type { StateGuide } from '../types'

export const vt: StateGuide = {
  code: 'VT',
  lastReviewed: '2026-10-15',
  intro:
    'Vermont is the only New England state that has not opened its electricity market to retail competition, so your local utility both supplies and delivers your power[^3]. The Public Utility Commission supervises rates and service for electric, gas, telecommunications and private water companies[^1].',
  regulator: {
    name: 'Vermont Public Utility Commission (PUC)',
    url: 'https://puc.vermont.gov/',
    complaintUrl: 'https://publicservice.vermont.gov/complaint-reporting-and-information',
    text: "The PUC supervises the rates, quality of service and finances of Vermont's electric, natural gas, telecommunications and private water companies, and oversees the statewide energy efficiency utility programs[^1]. Propane is not regulated by the PUC; take propane problems to the Attorney General's Consumer Assistance Program[^5]. You can file a complaint with the PUC at any time, but it often refers complaints to the Department of Public Service's Consumer Affairs and Public Information (CAPI) Division, which helps resolve disputes with utilities informally[^2][^4]. **Contact your utility first**; if you still need help, call CAPI at 1-800-622-4496[^6].",
  },
  electricity: {
    market: 'regulated',
    text: 'Vermont has 17 electric distribution utilities: one investor-owned company (Green Mountain Power), 14 municipal electric departments and 2 member-owned cooperatives[^3]. Each has an exclusive service territory[^7]. All are regulated monopolies: their rates and policies are reviewed by the Department of Public Service and approved by the PUC[^3]. Because Vermont has not adopted retail competition, there is no supplier to shop for; to compare costs, look at your utility\'s tariffs, which are posted in the PUC\'s ePUC system[^3][^7].',
    shopping: null,
  },
  gas: {
    text: 'Vermont Gas Systems is the only natural gas company authorized to operate in Vermont, serving parts of Addison, Chittenden and Franklin counties[^8]. Its rates and terms are set in tariffs on file with the PUC, and it follows the PUC\'s deposit and disconnection rules[^8][^5].',
    shopping: null,
  },
  water: {
    text: 'The PUC and the Department of Public Service regulate water utilities that are not owned by their users, a municipality or a fire district, including their rates, terms of service and complaints[^9]. Water systems owned by a town, a fire district or their users fall outside that jurisdiction, so take questions about those bills to the local system[^9].',
  },
  shutoff: {
    text: "From **November 1 through March 31**, a gas or electric utility must try to reach you by phone and in person before a shutoff, and it **cannot disconnect anyone when the forecast calls for temperatures below 10°F** during the 48 hours starting the morning of the planned shutoff[^10]. Households with a member aged 62 or older are also protected when temperatures are forecast below 32°F, if the account holder tells the utility in writing ahead of time[^10]. A medical note from a doctor, nurse practitioner or physician assistant stops an electric, gas or private water shutoff for 30 days; you can use up to three a year, but only two in a row[^6]. Written notice must be mailed or delivered 14 to 20 days before the first possible shutoff date[^10].",
  },
  help: [
    {
      name: 'Seasonal Fuel Assistance',
      url: 'https://dcf.vermont.gov/benefits/fuel',
      summary:
        "Vermont's LIHEAP program, run by the Department for Children and Families, helps pay part of your home heating bills whether you own or rent. You may qualify if your gross monthly household income is at or below 185% of the federal poverty level. Active households are also eligible for free weatherization[^11].",
    },
    {
      name: 'Energy Assistance (utility discounts)',
      url: 'https://dcf.vermont.gov/benefits/eap',
      summary:
        'Bill discounts for households at or below 185% of the federal poverty level: 25% off monthly charges for Green Mountain Power customers, 20% off Vermont Gas bills, and a monthly discount for customers of participating VPPSA municipal utilities. You must reapply each year[^12].',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://dcf.vermont.gov/benefits/weatherization',
      summary:
        "Free whole-house energy assessments and efficiency retrofits for households that haven't been weatherized in 15 years and receive Seasonal Fuel Assistance, SSI or recent Reach Up benefits. Apply through your regional agency[^13].",
    },
  ],
  consumer: {
    name: 'Vermont Attorney General Consumer Assistance Program (CAP)',
    url: 'https://ago.vermont.gov/cap',
    summary:
      'Run by the Attorney General with the University of Vermont, CAP offers consumer education and a complaint mediation service. Call 1-800-649-2424 or email ago.cap@vermont.gov[^14].',
  },
  rebates: [
    {
      name: 'Efficiency Vermont',
      url: 'https://www.efficiencyvermont.com/',
      summary:
        "Vermont's statewide energy efficiency utility program, overseen by the PUC, offers energy assessments, rebates, financing and advice[^1][^5].",
    },
  ],
  sources: [
    { title: 'About Us', publisher: 'Vermont Public Utility Commission', url: 'https://puc.vermont.gov/about-us', accessed: '2026-10-15' },
    { title: 'Complaints', publisher: 'Vermont Public Utility Commission', url: 'https://puc.vermont.gov/public-participation/complaints', accessed: '2026-10-15' },
    { title: 'Electric (Regulated Utilities)', publisher: 'Vermont Department of Public Service', url: 'https://publicservice.vermont.gov/regulated-utilities/electric', accessed: '2026-10-15' },
    { title: 'Complaint Reporting and Information', publisher: 'Vermont Department of Public Service', url: 'https://publicservice.vermont.gov/complaint-reporting-and-information', accessed: '2026-10-15' },
    { title: 'Consumer Utility Information & Protections', publisher: 'Vermont Department of Public Service', url: 'https://publicservice.vermont.gov/consumer-information-utility-type', accessed: '2026-10-15' },
    { title: 'Disconnection and Financial Payment Assistance', publisher: 'Vermont Department of Public Service', url: 'https://publicservice.vermont.gov/disconnection-and-financial-payment-assistance', accessed: '2026-10-15' },
    { title: 'Electric', publisher: 'Vermont Public Utility Commission', url: 'https://puc.vermont.gov/electric', accessed: '2026-10-15' },
    { title: 'Natural Gas', publisher: 'Vermont Public Utility Commission', url: 'https://puc.vermont.gov/natural-gas', accessed: '2026-10-15' },
    { title: 'Water', publisher: 'Vermont Public Utility Commission', url: 'https://puc.vermont.gov/water', accessed: '2026-10-15' },
    { title: 'Rule 3.300: Disconnection of Residential Gas, Electric, and Water Service', publisher: 'Vermont Public Utility Commission', url: 'https://puc.vermont.gov/sites/psbnew/files/doc_library/3300-disconnection-of-residential-service.pdf', accessed: '2026-10-15' },
    { title: 'Fuel Assistance', publisher: 'Vermont Department for Children and Families', url: 'https://dcf.vermont.gov/benefits/fuel', accessed: '2026-10-15' },
    { title: 'Energy Assistance', publisher: 'Vermont Department for Children and Families', url: 'https://dcf.vermont.gov/benefits/eap', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Vermont Department for Children and Families', url: 'https://dcf.vermont.gov/benefits/weatherization', accessed: '2026-10-15' },
    { title: 'Consumer Assistance Program', publisher: 'Office of the Vermont Attorney General', url: 'https://ago.vermont.gov/cap', accessed: '2026-10-15' },
  ],
}
