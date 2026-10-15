import type { StateGuide } from '../types'

export const ga: StateGuide = {
  code: 'GA',
  lastReviewed: '2026-10-15',
  intro:
    'Georgia splits its two main energy bills differently. Electricity from Georgia Power is fully regulated by the Georgia Public Service Commission (PSC), while natural gas customers on the Atlanta Gas Light system buy their gas from a competing certificated marketer.[^1][^2]',
  regulator: {
    name: 'Georgia Public Service Commission (PSC)',
    url: 'https://psc.ga.gov/',
    complaintUrl: 'https://crs.psc.state.ga.us/Consumer/Contact/utilityIndustry.aspx?type=Complaint',
    text:
      'The PSC decides fair and reasonable rates for the utilities under its jurisdiction, including Georgia Power and the state’s investor-owned gas companies.[^4] Its Consumer Affairs staff help with high bills, disconnections and deceptive marketing for Georgia Power, certificated gas marketers and Liberty Utilities customers.[^3] **The PSC does not regulate electric membership corporations (EMCs), city-owned electric utilities or propane providers,** and it has no authority over municipal gas service to customers inside the city’s home county; contact those providers directly.[^3] You can file a complaint or inquiry online.[^3]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Georgia Power is fully regulated by the PSC, and the PSC has only limited authority over the state’s 41 EMCs and 52 city-owned electric systems.[^1] Retail choice is limited to customers with manufacturing or commercial loads of 900 kW or more, who get a one-time choice of supplier under the Georgia Territorial Electric Service Act; homes buy from the utility that serves their area.[^1] Georgia Power customers with household income at or below 200 percent of the federal poverty guidelines may qualify for an Income-Qualified Discount.[^5] To understand your charges, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      '**Georgia has natural gas choice in Atlanta Gas Light territory.** Since opening its system to competition in 1998, Atlanta Gas Light (AGL) only delivers gas; certificated marketers sell the gas itself at market-based prices, while the PSC still regulates AGL’s delivery rates.[^2][^6] Liberty Utilities is fully regulated and sells gas directly, and prices of the state’s 84 municipal gas systems are not regulated by the PSC.[^2] The PSC publishes a monthly chart comparing marketers’ plans for a typical customer, and it has approved a Regulated Provider to serve low-income customers and customers who cannot get service from other marketers.[^7][^8] Compare plan types and terms before you switch.',
    shopping: { name: 'Georgia PSC Gas Marketers Pricing Comparison', url: 'https://psc.ga.gov/utilities/natural-gas/marketers-pricing-index/' },
  },
  water: {
    text:
      'Water and sewer service are not on the PSC’s list of regulated industries, which covers electric, natural gas and telecommunications utilities.[^4] For questions about water or sewer rates, contact the provider named on your bill or the local government that runs it. See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'Under PSC rules, an electric utility must deliver written notice at least five days before disconnecting a home and try to reach you personally at least two days before; gas marketers must give at least 15 days’ written notice.[^9][^10] From November 15 to March 15, a utility cannot disconnect you for an unpaid bill when the forecast low is below 32 degrees (over 24 hours for electric, 48 hours for gas) if you have agreed in writing to pay the past-due balance in installments and keep current bills paid.[^9][^10] **Electric service also cannot be cut for nonpayment when a National Weather Service Heat Advisory or Excessive Heat Warning is in effect or forecast for your county.**[^9] If disconnection would worsen a serious illness, notify the company and provide a written statement from a physician, health board, hospital or clinic within 10 days; disconnection is then held for up to one month and can be renewed once.[^9][^10]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dfcs.georgia.gov/services/low-income-home-energy-assistance-program-liheap',
      summary:
        'Run by the Georgia Division of Family and Children Services through local Community Action Agencies, at no cost to applicants. The heating program typically opens the first workday of December for residents 65 and older or medically homebound and in January for everyone else; the cooling program typically opens in April and May on the same pattern. LIHEAP also offers crisis help for life-threatening heating or cooling emergencies.[^11]',
    },
    {
      name: 'Income-Qualified and Senior Discounts',
      url: 'https://psc.ga.gov/about-the-psc/consumer-corner/consumer-advisories/senior-citizens-discounts/',
      summary:
        'Georgia Power customers with household income at or below 200 percent of the federal poverty guidelines may qualify for an Income-Qualified Discount. Atlanta Gas Light and Liberty Utilities residential customers 65 or older who meet the income limit can get a Senior Discount if the bill is in their name.[^5]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://gefa.georgia.gov/weatherization-assistance-program',
      summary:
        'Run by the Georgia Environmental Finance Authority through local Community Action Agencies. Households with income at or below 200 percent of the federal poverty level can get a home energy audit and cost-effective efficiency improvements, with preference for older adults, people with disabilities and families with children. Some counties have waiting lists.[^12]',
    },
  ],
  consumer: {
    name: 'Georgia Attorney General’s Consumer Protection Division',
    url: 'https://consumer.georgia.gov/resolve-your-dispute/how-do-i-file-complaint',
    summary:
      'The Consumer Protection Division takes complaints about unfair or deceptive business practices and mediates some of them. Try to resolve the problem with the business first, then file online or on a printed form.[^13]',
  },
  rebates: [
    {
      name: 'Georgia’s Home Energy Rebates',
      url: 'https://energyrebates.georgia.gov/',
      summary:
        'Georgia’s Home Efficiency Rebates (HER) and Home Electrification and Appliance Rebates (HEAR) help eligible households pay for electric appliances, insulation, air sealing, HVAC and other upgrades through program-approved contractors. As of October 2026, the program site says HEAR is reopening with limited measures, so check it for which upgrades currently qualify; it also offers an eligibility calculator.[^14]',
    },
  ],
  sources: [
    { title: 'Electric', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/utilities/electric/', accessed: '2026-10-15' },
    { title: 'Natural Gas', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/utilities/natural-gas/', accessed: '2026-10-15' },
    { title: 'Consumer Corner', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/about-the-psc/consumer-corner/', accessed: '2026-10-15' },
    { title: 'FAQs', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/faqs/', accessed: '2026-10-15' },
    { title: 'Income-Qualified Discounts', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/about-the-psc/consumer-corner/consumer-advisories/senior-citizens-discounts/', accessed: '2026-10-15' },
    { title: 'Competition in Georgia', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/about-the-psc/consumer-corner/natural-gas/general-information/competition-in-georgia/', accessed: '2026-10-15' },
    { title: 'Gas Marketers Pricing Comparison', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/utilities/natural-gas/marketers-pricing-index/', accessed: '2026-10-15' },
    { title: 'Regulated Provider', publisher: 'Georgia Public Service Commission', url: 'https://psc.ga.gov/about-the-psc/consumer-corner/natural-gas/general-information/regulated-provider/', accessed: '2026-10-15' },
    { title: 'Subject 515-3-2 (Rules 515-3-2-.01 to .06), residential electric service disconnections', publisher: 'Rules and Regulations of the State of Georgia (Georgia Secretary of State)', url: 'https://rules.sos.ga.gov/gac/515-3-2', accessed: '2026-10-15', note: 'Rule text also checked against the Cornell LII reproduction of Rule 515-3-2-.04.' },
    { title: 'Subject 515-3-3, Residential Gas Utility Service Disconnections', publisher: 'Rules and Regulations of the State of Georgia (Georgia Secretary of State)', url: 'https://rules.sos.ga.gov/gac/515-3-3', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance Program (LIHEAP)', publisher: 'Georgia Division of Family and Children Services', url: 'https://dfcs.georgia.gov/services/low-income-home-energy-assistance-program-liheap', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Georgia Environmental Finance Authority', url: 'https://gefa.georgia.gov/weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'How Do I File a Complaint?', publisher: 'Georgia Attorney General’s Consumer Protection Division', url: 'https://consumer.georgia.gov/resolve-your-dispute/how-do-i-file-complaint', accessed: '2026-10-15' },
    { title: 'Georgia’s Home Energy Rebates', publisher: 'Georgia Environmental Finance Authority', url: 'https://energyrebates.georgia.gov/', accessed: '2026-10-15' },
  ],
}
