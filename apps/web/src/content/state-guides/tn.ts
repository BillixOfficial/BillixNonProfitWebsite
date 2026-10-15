import type { StateGuide } from '../types'

export const tn: StateGuide = {
  code: 'TN',
  lastReviewed: '2026-10-15',
  intro:
    'Most Tennessee homes get electricity from a city utility, energy authority or co-op that buys its power from the Tennessee Valley Authority (TVA), not from a company the state commission regulates.[^4][^5] The Tennessee Public Utility Commission mainly oversees privately owned gas, water, wastewater and a few electric companies.[^1][^2]',
  regulator: {
    name: 'Tennessee Public Utility Commission (TPUC)',
    url: 'https://www.tn.gov/tpuc.html',
    complaintUrl: 'https://www.tn.gov/tpuc/utility-complaint-resources.html',
    text:
      'The TPUC oversees privately owned electric, gas, water, wastewater and telecommunications companies. Its Consumer Services Division mediates complaints against those regulated companies and enforces TPUC rules.[^1] City and county utilities, energy authorities and co-ops are **not** on that list of privately owned companies. For a utility the TPUC does not regulate, the Attorney General points you to the Tennessee Comptroller\'s Office utility inquiry form.[^1][^7] Contact your utility first. If your utility is regulated by the TPUC and the problem is not fixed, use the TPUC online utility complaint form.[^7]',
  },
  electricity: {
    market: 'regulated',
    text:
      'Only three companies appear on the TPUC list of regulated electric utilities, one of them Kingsport Power Company.[^2] TVA supplies power to about 7 million Tennesseans through 82 local power companies.[^5] The Attorney General has noted that the vast majority of Tennessee electric utilities get their power from TVA, and that TVA\'s power contracts can set resale rate schedules for city utilities, energy authorities and co-ops.[^4] An energy authority\'s board generally sets its own rates without review by the state or any commission, apart from what federal law or contracts require.[^4] So for most homes, rate questions go to your local power company. See [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The TPUC regulates privately owned gas companies, including Atmos Energy, Chattanooga Gas Company and Piedmont Natural Gas.[^3] The Attorney General\'s Consumer Advocate represents customers of those privately owned utilities when they ask to raise rates.[^6] If a gas utility district serves you, note that the Comptroller\'s Utility Management Review Board supports natural gas, water and wastewater utility districts and handles certain complaints about them.[^7]',
    shopping: null,
  },
  water: {
    text:
      'The TPUC regulates privately owned water and wastewater companies, such as Tennessee-American Water Company.[^1][^6] Water and wastewater systems run by a city, county or energy authority are overseen by the Tennessee Board of Utility Regulation, which can require remedies that include changes in user rates.[^4] For a complaint about a utility the TPUC does not regulate, use the Comptroller\'s utility inquiry form.[^7] See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'TPUC rules for its regulated electric and gas companies say the shutoff date in a termination notice must be **at least seven days** after the notice is mailed, and the notice must name the TPUC as the regulator.[^8][^9] Service generally cannot be cut off on a day before the utility is closed for reconnections.[^8][^9] The company must postpone a residential shutoff for 30 days if a physician, public health officer or social service official certifies in writing that it would aggravate an existing medical emergency.[^8][^9] You can also name a third party to get a copy of any termination notice.[^8][^9] These TPUC rules apply to the companies it regulates. Most Tennessee electric utilities buy TVA power and are not TPUC-regulated, so if a city utility or co-op serves you, ask it for its own shutoff and medical policy.[^1][^4]',
  },
  help: [
    {
      name: 'Low-Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://thda.org/help-for-homeowners/low-income-home-energy-assistance-program-liheap/',
      summary:
        'The Tennessee Housing Development Agency (THDA) runs LIHEAP through 19 local agencies that serve all 95 counties. It is one-time help with heating and cooling costs while funds last, for households at or below 60% of the state median income. Payments go to your utility or energy supplier, not to you.[^10]',
    },
    {
      name: 'Weatherization Assistance Program',
      url: 'https://thda.org/help-for-homeowners/weatherization-assistance-program/',
      summary:
        'THDA funds local agencies that make energy-saving improvements, such as air sealing, duct sealing and insulation, for low-income households after an energy audit. Contact the agency for your county.[^11]',
    },
  ],
  consumer: {
    name: 'Tennessee Attorney General Division of Consumer Affairs',
    url: 'https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/file-a-complaint.html',
    summary:
      'The division runs an informal complaint mediation program and accepts complaints online or by mail, fax or email. Contact the business first. The division cannot act as your lawyer.[^12] For utility rate cases, the Attorney General\'s Consumer Advocate represents customers of privately owned utilities.[^6]',
  },
  rebates: [
    {
      name: 'Inflation Reduction Act Home Energy Rebate Programs',
      url: 'https://www.tn.gov/environment/program-areas/energy/state-energy-office/programs-projects/inflation-reduction-act/energy-rebate.html',
      summary:
        'As of October 2026, the Tennessee Department of Environment and Conservation says funding for these rebates is not yet available. The state must first get full approval from the U.S. Department of Energy and finish contracting with TVA as its implementer. Any current offers claiming to be part of the program are not affiliated with it.[^13]',
    },
  ],
  sources: [
    { title: 'Utility Complaint Resources', publisher: 'Tennessee Public Utility Commission', url: 'https://www.tn.gov/tpuc/utility-complaint-resources.html', accessed: '2026-10-15' },
    { title: 'List of Electric Utilities', publisher: 'Tennessee Public Utility Commission', url: 'https://www.tn.gov/content/dam/tn/publicutility/documents/utilitydivdocs/utilityreports/ListofElectricUtilities.pdf', accessed: '2026-10-15' },
    { title: 'List of Gas Utilities', publisher: 'Tennessee Public Utility Commission', url: 'https://www.tn.gov/content/dam/tn/publicutility/documents/utilitydivdocs/utilityreports/ListofGasUtilities.pdf', accessed: '2026-10-15' },
    {
      title: 'Opinion No. 25-018, Regulation of Energy Authorities Formed Pursuant to the Municipal Energy Authority Act',
      publisher: 'Office of the Tennessee Attorney General',
      url: 'https://www.tn.gov/content/dam/tn/attorneygeneral/documents/ops/2025/op25-018.pdf',
      accessed: '2026-10-15',
    },
    {
      title: 'TVA in Tennessee (FY 2025 fact sheet)',
      publisher: 'Tennessee Valley Authority',
      url: 'https://tva-azr-eastus-cdn-ep-tvawcm-prd.azureedge.net/cdn-tvawcma/docs/default-source/about-tva/fact-sheets/state-fact-sheets-fy25/tennessee-fact-sheet-fy25.pdf?sfvrsn=14043693_1',
      accessed: '2026-10-15',
      note: 'Linked from tva.com/about-tva.',
    },
    { title: 'Protecting Utility Customers', publisher: 'Office of the Tennessee Attorney General', url: 'https://www.tn.gov/attorneygeneral/working-for-tennessee/protecting-utility-customers.html', accessed: '2026-10-15' },
    { title: 'Steps to File a Complaint (utility customers)', publisher: 'Office of the Tennessee Attorney General', url: 'https://www.tn.gov/attorneygeneral/working-for-tennessee/protecting-utility-customers/concerns/file-a-complaint.html', accessed: '2026-10-15' },
    { title: 'Tenn. Comp. R. & Regs. ch. 1220-04-04, Regulations for Electric Companies', publisher: 'Tennessee Secretary of State, Division of Publications', url: 'https://publications.tnsosfiles.com/rules/1220/1220-04/1220-04-04.20180427.pdf', accessed: '2026-10-15' },
    { title: 'Tenn. Comp. R. & Regs. ch. 1220-04-05, Regulations for Gas Companies', publisher: 'Tennessee Secretary of State, Division of Publications', url: 'https://publications.tnsosfiles.com/rules/1220/1220-04/1220-04-05.20180427.pdf', accessed: '2026-10-15' },
    { title: 'Low-Income Home Energy Assistance Program (LIHEAP)', publisher: 'Tennessee Housing Development Agency', url: 'https://thda.org/help-for-homeowners/low-income-home-energy-assistance-program-liheap/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'Tennessee Housing Development Agency', url: 'https://thda.org/help-for-homeowners/weatherization-assistance-program/', accessed: '2026-10-15' },
    { title: 'File a Complaint (Division of Consumer Affairs)', publisher: 'Office of the Tennessee Attorney General', url: 'https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/file-a-complaint.html', accessed: '2026-10-15' },
    { title: 'Inflation Reduction Act Home Energy Rebate Programs', publisher: 'Tennessee Department of Environment and Conservation, Office of Energy Programs', url: 'https://www.tn.gov/environment/program-areas/energy/state-energy-office/programs-projects/inflation-reduction-act/energy-rebate.html', accessed: '2026-10-15' },
  ],
}
