import type { StateGuide } from '../types'

export const wv: StateGuide = {
  code: 'WV',
  lastReviewed: '2026-10-15',
  intro:
    'In West Virginia, the Public Service Commission (PSC) handles disputes with electric, natural gas and most water and wastewater utilities, and it sets rates for the public utilities under its authority.[^1][^2] State rules add extra protections against winter and health-related shutoffs, and eligible customers can get a 20 percent winter discount on gas and electric service.[^3][^6]',
  regulator: {
    name: 'Public Service Commission of West Virginia (PSC)',
    url: 'https://www.psc.state.wv.us/',
    complaintUrl: 'https://www.psc.state.wv.us/scripts/complaints/instructions.cfm',
    text:
      'The PSC helps resolve customer disputes with electric, natural gas and landline telephone utilities and most water and wastewater companies, including billing disputes, disconnections, meter reading problems and deposits.[^1] It does not regulate internet, cable rates, cellular or long distance companies or propane distributors, and in most cases it does not regulate the rates of municipally owned utilities.[^1] **Call your utility first.** If you are not satisfied, start an informal complaint online, by phone at 1-800-642-8544 or by letter; the informal process cannot address complaints about utility rates themselves.[^1]',
  },
  electricity: {
    market: 'regulated',
    text:
      'You buy electricity from the utility that serves your area. State law gives the PSC power to set and change rates for public utilities, except municipal power systems.[^2] If the PSC finds a regulated utility’s rates unjust or unreasonable, it orders reasonable rates for the future.[^2] To understand your charges, see [how to read your electric bill](/learn/how-to-read-your-electric-bill).',
    shopping: null,
  },
  gas: {
    text:
      'The PSC handles customer disputes with natural gas utilities.[^1] According to the PSC, most West Virginia gas utilities buy all or most of their gas on the open market and pass that cost through to customers, without profit, in an annual Purchased Gas Adjustment (PGA) proceeding that normally takes effect November 1.[^4] The PSC does not regulate the price producers charge for gas, but it reviews utilities\' purchasing practices, and gas costs found imprudent can be disallowed.[^4]',
    shopping: null,
  },
  water: {
    text:
      'The PSC handles disputes with most water and wastewater companies.[^1] By law, it does not set rates for municipal water and sewer utilities with at least 4,500 customers and $3 million or more in annual revenue; for smaller municipal systems, it can review rates only in limited circumstances.[^2] If your water comes from a city or public service district, start with that utility about rates. See [water and sewer bills](/categories/water-sewer) for how these bills work.',
  },
  shutoff: {
    text:
      'Under PSC rules for electric utilities, a disconnection notice must be mailed at least 10 days before the scheduled termination, and the utility must also try to reach you personally.[^3] Service cannot be cut on a day the National Weather Service predicts 32 degrees or colder near your home, on a Friday, Saturday, Sunday or legal holiday, or before 8 a.m. or after 4 p.m.[^3] **From November 1 through March 31, or if a doctor, nurse practitioner or physician assistant certifies that a shutoff would be dangerous to someone in your home, the utility must make extra contact attempts, including a visit.**[^3] A medical certification must reach the utility within 10 days after you tell it about the condition and must be renewed every 30 days unless the condition is certified as permanent.[^3]',
  },
  help: [
    {
      name: 'Low Income Energy Assistance Program (LIEAP)',
      url: 'https://bfa.wv.gov/bfa-programs/LIEAP',
      summary:
        'Run by the West Virginia Department of Human Services, Bureau for Family Assistance. LIEAP helps eligible households with home heating costs through direct payments or payments to utilities, and a crisis component helps households facing loss of a heating source. It is open for a short time each winter; contact your local DoHS office or a participating Community Action or Area Agency on Aging office.[^5]',
    },
    {
      name: 'Special Reduced Rate Residential Service (20 percent winter discount)',
      url: 'https://code.wvlegislature.gov/24-2A-1/',
      summary:
        'State law requires PSC-regulated gas and electric utilities, other than municipal and cooperative utilities, to offer a 20 percent discount for the December through April billing months to residential customers who receive certain assistance listed in the law, such as Supplemental Security Income (SSI), or food stamps if they are 60 or older.[^6] Ask your utility how to apply; you must reapply each year.[^3]',
    },
    {
      name: 'West Virginia Weatherization Assistance Program (WAP)',
      url: 'https://wvcad.org/sustainability/weatherization-assistance-program',
      summary:
        'Run by the Community Advancement and Development division of the West Virginia Department of Economic Development through local Community Action Agencies in all 55 counties. It improves the energy efficiency of homes of households with income at or below 200 percent of the federal poverty guidelines. Applicants go on a waitlist that gives priority to high energy burden and to homes with older adults, people with disabilities or children.[^7]',
    },
  ],
  consumer: {
    name: 'West Virginia Attorney General, Consumer Protection Division',
    url: 'https://ago.wv.gov/consumer-protection/file-complaint-consumer-protection-division',
    summary:
      'The Consumer Protection Division takes complaints about unfair or deceptive sales practices, false advertising, billing disputes, home improvement fraud and other problems with businesses. You can file online or on a downloadable form.[^8]',
  },
  rebates: [],
  sources: [
    { title: 'Consumer Assistance (complaint instructions)', publisher: 'Public Service Commission of West Virginia', url: 'https://www.psc.state.wv.us/scripts/complaints/instructions.cfm', accessed: '2026-10-15' },
    { title: 'W. Va. Code §24-2-3. General power of commission with respect to rates', publisher: 'West Virginia Legislature', url: 'https://code.wvlegislature.gov/24-2-3/', accessed: '2026-10-15' },
    { title: '150CSR3, Government of Electric Utilities (Rule 4.8 termination; Rule 4.16 reduced rates)', publisher: 'West Virginia Secretary of State, Code of State Rules', url: 'https://apps.sos.wv.gov/adlaw/csr/ruleview.aspx?document=16604', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions Regarding Natural Gas Price Increases', publisher: 'Public Service Commission of West Virginia', url: 'https://www.psc.state.wv.us/Energy_Assist/FAQ.pdf', accessed: '2026-10-15' },
    { title: 'Utility Assistance/LIEAP', publisher: 'West Virginia Department of Human Services, Bureau for Family Assistance', url: 'https://bfa.wv.gov/bfa-programs/LIEAP', accessed: '2026-10-15' },
    { title: 'W. Va. Code §24-2A-1. Special rates for gas and electric utility customers', publisher: 'West Virginia Legislature', url: 'https://code.wvlegislature.gov/24-2A-1/', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'West Virginia Department of Economic Development, Community Advancement and Development', url: 'https://wvcad.org/sustainability/weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'File a Complaint with the Consumer Protection Division', publisher: 'Office of the West Virginia Attorney General', url: 'https://ago.wv.gov/consumer-protection/file-complaint-consumer-protection-division', accessed: '2026-10-15' },
  ],
}
