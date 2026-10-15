import type { StateGuide } from '../types'

export const ca: StateGuide = {
  code: 'CA',
  lastReviewed: '2026-10-15',
  intro:
    'If you live in PG&E, Southern California Edison, or SDG&E territory, the utility delivers your electricity, but the power itself may come from your city or county through a Community Choice Aggregation program.[^2][^4] Income-qualified households can get a discount on electric and gas bills through the CARE and FERA programs.[^12]',
  regulator: {
    name: 'California Public Utilities Commission (CPUC)',
    url: 'https://www.cpuc.ca.gov/',
    complaintUrl: 'https://www.cpuc.ca.gov/consumer-support/file-a-complaint/utility-complaint',
    text:
      'The CPUC regulates investor-owned utilities, including electric and gas companies such as PG&E, Southern California Edison, SDG&E, and SoCalGas, and more than 100 investor-owned water and sewer utilities.[^12][^7] Its Consumer Affairs Branch helps customers resolve disputes with their regulated utility, but it does **not** handle complaints about municipal utilities.[^1] Contact your utility first. If it cannot fix the problem, you can file an informal complaint online, and a formal complaint is also available.[^1]',
  },
  electricity: {
    market: 'partial',
    text:
      '**Households in California cannot buy electricity from a competitive supplier**: Direct Access, where you buy from an Electric Service Provider, is available only to non-residential customers and is limited by a statewide load cap.[^2][^3] The choice many households do have is Community Choice Aggregation (CCA), where a city, town, or county becomes the default power provider for customers in its area, and you can opt out and stay with or return to the utility.[^2] Your utility still delivers the power, reads the meter, and sends one combined bill.[^4] If you opt out of a CCA after its first 60 days of service, you may have to stay with the utility for one year before rejoining.[^4] The CPUC\'s rate comparison tool shows utility and CCA rates for your ZIP code, county, or city.[^5]',
    shopping: {
      name: 'California Electric Rate Comparison (CPUC)',
      url: 'https://www.cpuc.ca.gov/about-cpuc/divisions/news-and-public-information-office/public-advisors-office/consumer-choices-in-california',
    },
  },
  gas: {
    text:
      'Since 1991, California customers have been allowed to choose their natural gas supplier: the local utility or a Core Transport Agent (CTA).[^6] If you switch, your utility still charges you for delivering the gas on its pipeline system.[^6] The CPUC does not regulate the rates CTAs charge, so compare a CTA\'s terms and conditions with other CTAs and the utility before you sign.[^6]',
    shopping: {
      name: 'Core Transport Agents (CTAs) - List and Registration (CPUC)',
      url: 'https://www.cpuc.ca.gov/industries-and-topics/natural-gas/core-transport-agents/core-transport-agents-ctas---list-and-registration',
    },
  },
  water: {
    text:
      'The CPUC\'s Water Division regulates more than 100 investor-owned water and sewer utilities, which serve about 16 percent of California residents.[^7] It reviews their rate change requests and service quality.[^7] If your water comes from a city or public agency, rates are set locally. Statewide, the Water Shutoff Protection Act requires community water systems to wait until a payment is at least 60 days late and give at least 7 business days\' notice before shutting off water for nonpayment.[^8]',
  },
  shutoff: {
    text:
      'For the large investor-owned electric and gas utilities, the CPUC banned disconnections when temperatures above 100°F or below 32°F are forecast during a 72-hour period, and it later made these extreme weather protections permanent.[^9][^10] The large utilities must offer a 12-month payment plan before disconnecting you, and must check that you are enrolled in all assistance programs you qualify for.[^10] Customers on the Medical Baseline program may be protected from disconnection if they agree to a payment plan; ask your utility how this applies to you.[^9][^10] For water, a system may not shut off service while you have an appeal pending, or where there is a threat to life or health and you face severe financial hardship and agree to an alternative payment plan.[^8]',
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://www.csd.ca.gov/Pages/LIHEAPProgram.aspx',
      summary:
        'Run by the Department of Community Services and Development (CSD) through local agencies. It includes one-time bill help (HEAP), crisis help such as when you have a disconnect notice (ECIP), and free weatherization. Funding is limited, so the most vulnerable households are served first.[^11]',
    },
    {
      name: 'California Alternate Rates for Energy (CARE)',
      url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program',
      summary:
        'A 30 to 35 percent discount on your electric bill and a 20 percent discount on your natural gas bill for income-qualified customers of the large utilities. You may also qualify if you are enrolled in programs such as Medi-Cal, CalFresh/SNAP, or LIHEAP. Apply through your utility.[^12]',
    },
    {
      name: 'Family Electric Rate Assistance Program (FERA)',
      url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program',
      summary:
        'An 18 percent discount on electricity for families whose income is slightly above the CARE limits. Available to PG&E, Southern California Edison, and SDG&E customers.[^12]',
    },
    {
      name: 'Energy Savings Assistance Program (ESA)',
      url: 'https://www.csd.ca.gov/Pages/LIHEAPProgram.aspx',
      summary:
        'No-cost weatherization services, such as attic insulation and weatherstripping, for low-income households that meet the CARE income guidelines.[^11]',
    },
  ],
  consumer: {
    name: 'California Attorney General, Consumer Protection',
    url: 'https://oag.ca.gov/consumers',
    summary:
      'Offers tips on scams and a complaint form for businesses that are not regulated by another agency. For a utility complaint, use the CPUC first. The office cannot give legal advice to individuals.[^13]',
  },
  rebates: [
    {
      name: 'Home Electrification and Appliance Rebates (HEEHRA)',
      url: 'https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs',
      summary:
        'The California Energy Commission\'s federally funded heat pump rebates for income-eligible households. As of October 2026, single-family rebates had been **fully reserved** since February 24, 2026, new requests were waitlisted, and Phase II availability had not been announced. Check the page for current status, and only work with TECH-certified, HEEHRA-trained contractors.[^14]',
    },
  ],
  sources: [
    { title: 'Utility Complaint', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/consumer-support/file-a-complaint/utility-complaint', accessed: '2026-10-15' },
    { title: 'Retail Choice (Community Choice Aggregation and Direct Access)', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/consumer-support/consumer-programs-and-services/electrical-energy-and-energy-efficiency/community-choice-aggregation-and-direct-access-', accessed: '2026-10-15' },
    { title: 'Direct Access', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/consumer-support/consumer-programs-and-services/electrical-energy-and-energy-efficiency/community-choice-aggregation-and-direct-access-/direct-access', accessed: '2026-10-15' },
    { title: 'Community Choice Aggregation: Consumer Information', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/consumer-support/consumer-programs-and-services/electrical-energy-and-energy-efficiency/community-choice-aggregation-and-direct-access-/consumer-information-on-ccas---frequently-asked-questions', accessed: '2026-10-15' },
    { title: 'California Electric Rate Comparison', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/about-cpuc/divisions/news-and-public-information-office/public-advisors-office/consumer-choices-in-california', accessed: '2026-10-15' },
    { title: 'Core Transport Agents (CTAs) - List and Registration', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/industries-and-topics/natural-gas/core-transport-agents/core-transport-agents-ctas---list-and-registration', accessed: '2026-10-15' },
    { title: 'Water Division', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/about-cpuc/divisions/water-division', accessed: '2026-10-15' },
    { title: 'Water Shutoff Protection Act FAQs, SB 3 (Dodd, 2023)', publisher: 'California State Water Resources Control Board', url: 'https://www.waterboards.ca.gov/water_issues/programs/conservation_portal/assistance/docs/water-shutoff-protection-acts-faq-sb-3-dodd-2023.pdf', accessed: '2026-10-15' },
    { title: 'PU Code 910.5 Report on Residential Utility Service Disconnections (May 2020)', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/office-of-governmental-affairs-division/reports/2020/2020-pu-code-9105-report.pdf', accessed: '2026-10-15' },
    { title: 'PU Code Section 910.5 Report on Residential Utility Service Disconnections (April 2024)', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/office-of-governmental-affairs-division/reports/2024/disconnections-report-2024_pu-code-sec-910.pdf', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'California Department of Community Services and Development', url: 'https://www.csd.ca.gov/Pages/LIHEAPProgram.aspx', accessed: '2026-10-15' },
    { title: 'CARE/FERA Program', publisher: 'California Public Utilities Commission', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program', accessed: '2026-10-15' },
    { title: 'Protecting Consumers', publisher: 'California Attorney General', url: 'https://oag.ca.gov/consumers', accessed: '2026-10-15' },
    { title: 'Inflation Reduction Act Residential Energy Rebate Programs', publisher: 'California Energy Commission', url: 'https://www.energy.ca.gov/programs-and-topics/programs/inflation-reduction-act-residential-energy-rebate-programs', accessed: '2026-10-15' },
  ],
}
