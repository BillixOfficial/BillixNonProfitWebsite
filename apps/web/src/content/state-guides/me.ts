import type { StateGuide } from '../types'

export const me: StateGuide = {
  code: 'ME',
  lastReviewed: '2026-10-15',
  intro:
    'In Maine you can buy electricity supply from a licensed competitive provider or stay on the Standard Offer, while your local utility keeps delivering the power[^2]. The Maine Public Utilities Commission also regulates most public water utilities, including many town water departments and water districts[^6].',
  regulator: {
    name: 'Maine Public Utilities Commission (MPUC)',
    url: 'https://www.maine.gov/mpuc/',
    complaintUrl: 'https://www.maine.gov/mpuc/consumer-assistance/file-complaint',
    text: "The commission regulates electric, telephone, water and natural gas utilities in Maine[^1]. It does not regulate propane distributors, fuel oil dealers, sewer districts, cable TV or cell phone companies[^1]. **Contact your utility first.** If you can't resolve the problem, file a complaint with the commission's Consumer Assistance Division online, by phone at 1-800-452-4699, by letter or by fax; it investigates billing disputes, disconnections, deposits and service quality[^1]. While a billing complaint is reviewed, you must still pay the part of the bill you don't dispute[^1].",
  },
  electricity: {
    market: 'choice',
    text: "Maine's restructuring law lets you buy your electricity supply from a competitive electricity provider (CEP) licensed by the commission, while delivery stays with your regulated utility[^2]. If you don't choose a provider, you get the Standard Offer, a price set through a competitive auction run by the commission; in Central Maine Power and Versant Power areas it usually changes on January 1[^2][^3]. Residential customers pay no fee to start, return to or leave the Standard Offer, but a provider may charge an early termination fee if you leave a fixed-term contract early[^3]. A variable price could rise in later months, so read the terms; you can cancel within five calendar days of receiving the provider's Terms of Service[^3]. The Office of the Public Advocate posts sample provider prices next to the Standard Offer and warns that a contract may renew automatically at a higher or variable rate if you do nothing[^4]. See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).",
    shopping: { name: 'Office of the Public Advocate: Electricity Supply Options', url: 'https://www.maine.gov/meopa/electricity/electricity-supply' },
  },
  gas: {
    text: 'The commission regulates natural gas utilities[^1]. Residential customers of Bangor Gas, Maine Natural Gas, Northern Utilities and Summit Natural Gas get gas supply and delivery together from their utility as one bundled service[^5]. Choosing a separate supplier is set up for commercial and industrial customers[^5].',
    shopping: null,
  },
  water: {
    text: 'The commission regulates more than 150 public water utilities and decides whether their rates are just and reasonable[^6]. Most are owned by their customers: town water departments and water districts run by elected local trustees; a minority are investor-owned companies[^6]. Not every water system is a regulated utility, and the commission does not regulate sewer districts[^1][^6]. If you have a problem with a regulated water utility, contact the utility first, then the Consumer Assistance Division[^1].',
  },
  shutoff: {
    text: "From **November 15 through April 15**, an electric or gas utility cannot disconnect a residential customer without advance permission from the commission's consumer assistance staff, and you must be notified and given a chance to be heard[^7]. During that period, if you cannot pay your full bill, you may qualify for a Special Payment Arrangement that lets you pay less each winter month and catch up by November 1; customers with income up to 150% of federal poverty guidelines or in programs like HEAP may qualify[^8]. A utility cannot disconnect service while someone in your home has a medical emergency certified by an authorized medical professional; once you tell the utility a certification is coming, it must wait at least three business days[^7]. Residential customers must get written notice at least 14 calendar days before a disconnection date[^7].",
  },
  help: [
    {
      name: 'Home Energy Assistance Program (HEAP)',
      url: 'https://www.mainehousing.org/programs-services/energy/energydetails/liheap',
      summary:
        "Maine's LIHEAP program, run by MaineHousing (Maine State Housing Authority) through local Community Action Agencies, helps homeowners and renters pay heating costs. As of October 2026, MaineHousing says 2026-2027 applications opened August 3, 2026 and run until funds are exhausted or May 29, 2027. The Energy Crisis Intervention Program (ECIP) helps households with an extremely low supply of heating fuel; its 2026-2027 season runs November 1, 2026 through April 30, 2027. Check the page for current dates[^10].",
    },
    {
      name: 'Low-Income Assistance Program (LIAP)',
      url: 'https://www.maine.gov/mpuc/consumer-assistance/programs',
      summary:
        'A discount or credit on electric bills for households eligible for LIHEAP or a DHHS means-tested program with income at or below 150% of federal poverty guidelines. Starting October 1, 2026, the Department of Health and Human Services uses data from programs like SNAP, TANF and MaineCare to enroll eligible households automatically. The same page lists the Arrearage Management Program (AMP) for past-due electric balances and a 30% discount for eligible customers of Northern Utilities (Unitil), Bangor Gas and Maine Natural Gas[^9].',
    },
    {
      name: 'Weatherization Program (MaineHousing)',
      url: 'https://www.mainehousing.org/programs-services/HomeImprovement/homeimprovementdetail/weatherization',
      summary:
        'Free home energy assessments and improvements such as air sealing and insulation for income-eligible homeowners and renters. Eligibility is often based on HEAP participation; apply through your local Community Action Agency[^11].',
    },
  ],
  consumer: {
    name: 'Maine Attorney General Consumer Protection Division',
    url: 'https://www.maine.gov/ag/about-us/consumer-protection',
    summary:
      "Enforces Maine's Unfair Trade Practices Act and other consumer protection laws. Its Consumer Information and Mediation Service uses trained volunteers to mediate consumer complaints[^12].",
  },
  rebates: [
    {
      name: 'Efficiency Maine',
      url: 'https://www.efficiencymaine.com/',
      summary:
        "The independent, quasi-state agency that runs Maine's efficiency programs, with oversight from the Public Utilities Commission[^13]. It offers rebates, incentives and financing for heat pumps, water heaters and weatherization, including up to $8,000 in rebates for insulation and air sealing; check eligibility on its site[^9].",
    },
  ],
  sources: [
    { title: 'File a Consumer Complaint', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/consumer-assistance/file-complaint', accessed: '2026-10-15' },
    { title: 'Standard Offer Rates', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/regulated-utilities/electricity/standard-offer-rates', accessed: '2026-10-15' },
    { title: 'Choosing a Supplier', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/regulated-utilities/electricity/choosing-supplier', accessed: '2026-10-15' },
    { title: 'Electricity Supply Options', publisher: 'Maine Office of the Public Advocate', url: 'https://www.maine.gov/meopa/electricity/electricity-supply', accessed: '2026-10-15' },
    { title: 'Natural Gas Service For Residential Customers', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/regulated-utilities/natural-gas/distributors/residential', accessed: '2026-10-15' },
    { title: 'Water', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/regulated-utilities/water', accessed: '2026-10-15' },
    { title: 'Chapter 815: Consumer Protection Standards for Electric and Gas Transmission and Distribution Utilities', publisher: 'Maine Public Utilities Commission (via Maine Secretary of State)', url: 'https://www.maine.gov/sos/sites/maine.gov.sos/files/content/assets/407c815.docx', accessed: '2026-10-15' },
    { title: 'Consumer Assistance FAQ', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/consumer-assistance/faq', accessed: '2026-10-15' },
    { title: 'Consumer Financial Assistance', publisher: 'Maine Public Utilities Commission', url: 'https://www.maine.gov/mpuc/consumer-assistance/programs', accessed: '2026-10-15' },
    { title: 'Home Energy Assistance Program (HEAP)', publisher: 'MaineHousing', url: 'https://www.mainehousing.org/programs-services/energy/energydetails/liheap', accessed: '2026-10-15' },
    { title: 'Weatherization Program', publisher: 'MaineHousing', url: 'https://www.mainehousing.org/programs-services/HomeImprovement/homeimprovementdetail/weatherization', accessed: '2026-10-15' },
    { title: 'Consumer Protection Division', publisher: 'Office of the Maine Attorney General', url: 'https://www.maine.gov/ag/about-us/consumer-protection', accessed: '2026-10-15' },
    { title: 'About Efficiency Maine', publisher: 'Efficiency Maine Trust', url: 'https://www.efficiencymaine.com/about/', accessed: '2026-10-15' },
  ],
}
