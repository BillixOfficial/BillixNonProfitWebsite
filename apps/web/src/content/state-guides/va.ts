import type { StateGuide } from '../types'

export const va: StateGuide = {
  code: 'VA',
  lastReviewed: '2026-10-15',
  intro:
    'Most Virginia households buy electricity and natural gas from a utility whose rates are reviewed by the State Corporation Commission (SCC), the agency that oversees investor-owned electric, gas, water and sewer utilities and electric cooperatives.[^3][^5][^8] Virginia also has state-law disconnection limits for very cold and very hot days, and a Percentage of Income Payment Program for eligible Dominion Energy and Appalachian Power customers.[^9][^12]',
  regulator: {
    name: 'Virginia State Corporation Commission (SCC)',
    url: 'https://www.scc.virginia.gov/',
    complaintUrl: 'https://www.scc.virginia.gov/consumers/public-utility/utility-complaints/',
    text:
      "The SCC regulates Virginia's investor-owned electric utilities and member-owned electric cooperatives, plus investor-owned natural gas, water and sewer utilities.[^3][^5][^8] Its Division of Public Utility Regulation cannot help with municipally owned electric, gas or water/sewer utilities, or with bottled propane and oil companies.[^2] **Contact your utility first.** If that does not resolve the problem, you can file a complaint online, by mail or by phone, and the SCC asks you to call right away if your complaint is about a disconnection.[^2] Its Division of Public Utility Regulation investigates and tries to resolve disputes informally.[^1]",
  },
  electricity: {
    market: 'partial',
    text:
      'For most homes, Virginia works like a regulated market: you buy power from the utility or electric cooperative that serves your area, and the SCC regulates rates for investor-owned utilities and cooperatives.[^3] State law allows buying electricity from a licensed competitive supplier only in narrow cases, mainly for large nonresidential customers and certain 100 percent renewable energy purchases. It also bars residential customers of the large investor-owned utilities it covers (Phase I and Phase II utilities) from buying from licensed suppliers under that law.[^4] If a company offers to sell you electricity, check with the SCC whether you are eligible before you sign. Municipal electric systems are not handled by the SCC complaint process.[^2] To understand your charges, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      "The SCC regulates Virginia's investor-owned natural gas utilities.[^5] State law lets gas utilities offer retail supply choice under a plan approved by the SCC, and it requires suppliers that sell to residential customers to be licensed.[^6] Columbia Gas of Virginia runs a CHOICE program: if you buy gas from another supplier, Columbia still delivers it and reads your meter, and Columbia says there is no guarantee you will save money.[^7] Before you sign, check whether the price is fixed or variable, the contract length and whether you can cancel, and compare offers against your utility's price to compare.[^7]",
    shopping: null,
  },
  water: {
    text:
      "The SCC regulates Virginia's investor-owned water and sewer utilities and takes complaints about them.[^8][^2] It cannot help with municipally owned water or sewer utilities, so for city or county water service, contact the local utility or the local government that runs it.[^2] See [water and sewer bills](/categories/water-sewer) for how these bills work.",
  },
  shutoff: {
    text:
      'Before disconnecting service, a utility must mail a written notice at least 10 calendar days before the possible termination date.[^3] For utilities regulated by the SCC, electric companies cannot disconnect a home for nonpayment when the National Weather Service forecast low is 32 degrees Fahrenheit or below, or the forecast is 92 degrees or above, within 24 hours after the scheduled disconnection; gas companies follow the 32-degree rule and water and sewer companies the 92-degree rule.[^9] **No regulated utility may disconnect a home for nonpayment on a Friday, weekend, state holiday or the day before a state holiday.**[^9] If you have a Serious Medical Condition Certification Form on file, you can ask for an extra 30-day delay after a termination notice; if you do not, telling the utility about a serious medical condition gets you a 15-day delay to submit the form.[^10]',
  },
  help: [
    {
      name: 'Energy Assistance Program (EAP)',
      url: 'https://www.dss.virginia.gov/benefit/ea/',
      summary:
        "The Virginia Department of Social Services runs Fuel, Crisis and Cooling Assistance, plus a Weatherization Assistance component. For Fuel, Crisis or Cooling Assistance, your household needs a heating or cooling expense and gross monthly income at or below 150 percent of the federal poverty level. Each part has its own application window, and you can apply through CommonHelp, by phone at 855-635-4370 or on a paper form.[^11]",
    },
    {
      name: 'Percentage of Income Payment Program (PIPP)',
      url: 'https://www.dss.virginia.gov/relief/pipp/',
      summary:
        'For Dominion Energy and Appalachian Power (APCo/AEP) customers with household income at or below 150 percent of the federal poverty level. PIPP sets your electric bill at 10 percent of income if you heat with electricity, or 6 percent if you use another heating source. Each month you pay on time, 1/12 of your past-due balance is forgiven.[^12]',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://www.dhcd.virginia.gov/wx',
      summary:
        'Run by the Virginia Department of Housing and Community Development through local nonprofit providers. It installs energy-saving measures such as air sealing, insulation and heating and cooling repairs. It does not pay utility bills. Apply through the provider for the area where the home is located.[^13]',
    },
  ],
  consumer: {
    name: 'Office of the Attorney General of Virginia, Consumer Protection Section',
    url: 'https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint',
    summary:
      "The Consumer Protection Section takes complaints about businesses operating in Virginia, and utilities are one of its listed complaint topics. Not every complaint falls within its jurisdiction, so it suggests using its Agency Search tool to find the right agency first. The online complaint form is its preferred method.[^14]",
  },
  rebates: [
    {
      name: 'Virginia Energy Connect',
      url: 'https://energy.virginia.gov/connect/',
      summary:
        'Run by Virginia Energy, this site connects homeowners, renters and businesses to energy efficiency incentives, solar programs and electric vehicle incentives, with an incentives browser you can filter by property type.[^15]',
    },
  ],
  sources: [
    { title: 'Public Utilities (consumers)', publisher: 'Virginia State Corporation Commission', url: 'https://www.scc.virginia.gov/consumers/public-utility/', accessed: '2026-10-15' },
    { title: 'Utility Complaints', publisher: 'Virginia State Corporation Commission', url: 'https://www.scc.virginia.gov/consumers/public-utility/utility-complaints/', accessed: '2026-10-15' },
    { title: 'Electricity FAQs', publisher: 'Virginia State Corporation Commission', url: 'https://www.scc.virginia.gov/consumers/public-utility/electricity-faqs/', accessed: '2026-10-15' },
    { title: 'Code of Virginia § 56-577. Schedule for transition to retail competition', publisher: 'Virginia General Assembly', url: 'https://law.lis.virginia.gov/vacode/title56/chapter23/section56-577/', accessed: '2026-10-15' },
    { title: 'Natural Gas FAQs', publisher: 'Virginia State Corporation Commission', url: 'https://www.scc.virginia.gov/consumers/public-utility/natural-gas-faqs/', accessed: '2026-10-15' },
    { title: 'Code of Virginia § 56-235.8. Retail supply choice for natural gas customers', publisher: 'Virginia General Assembly', url: 'https://law.lis.virginia.gov/vacode/title56/chapter10/section56-235.8/', accessed: '2026-10-15' },
    { title: 'CHOICE', publisher: 'Columbia Gas of Virginia (utility)', url: 'https://www.columbiagasva.com/bills-and-payments/billing-programs/choice', accessed: '2026-10-15' },
    { title: 'Water or Sewer FAQs', publisher: 'Virginia State Corporation Commission', url: 'https://www.scc.virginia.gov/consumers/public-utility/water-sewer/', accessed: '2026-10-15' },
    { title: 'Code of Virginia § 56-245.1:3. Disconnection suspension for utilities', publisher: 'Virginia General Assembly', url: 'https://law.lis.virginia.gov/vacode/title56/chapter10/section56-245.1:3/', accessed: '2026-10-15' },
    { title: '20VAC5-330-40 (serious medical conditions, delay of termination)', publisher: 'Virginia Administrative Code', url: 'https://law.lis.virginia.gov/admincode/title20/agency5/chapter330/section40/', accessed: '2026-10-15' },
    { title: 'Energy Assistance Program (EAP)', publisher: 'Virginia Department of Social Services', url: 'https://www.dss.virginia.gov/benefit/ea/', accessed: '2026-10-15' },
    { title: 'Percentage of Income Payment Program (PIPP)', publisher: 'Virginia Department of Social Services', url: 'https://www.dss.virginia.gov/relief/pipp/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program (WAP)', publisher: 'Virginia Department of Housing and Community Development', url: 'https://www.dhcd.virginia.gov/wx', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'Office of the Attorney General of Virginia', url: 'https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint', accessed: '2026-10-15' },
    { title: 'Virginia Energy Connect', publisher: 'Virginia Department of Energy', url: 'https://energy.virginia.gov/connect/', accessed: '2026-10-15' },
  ],
}
