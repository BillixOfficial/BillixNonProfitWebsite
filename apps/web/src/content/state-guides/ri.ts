import type { StateGuide } from '../types'

export const ri: StateGuide = {
  code: 'RI',
  lastReviewed: '2026-10-15',
  intro:
    'In Rhode Island you can buy electricity from a registered competitive supplier or stay on the utility\'s Last Resort Service, but residential natural gas customers cannot choose a gas supplier[^4][^5]. Gas and electric customers in protected groups are shielded from shutoffs from November 1 to May 1[^7].',
  regulator: {
    name: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers',
    url: 'https://ripuc.ri.gov/',
    complaintUrl: 'https://ripuc.ri.gov/consumer-information/how-file-complaint',
    text: "Rhode Island's Public Utilities Commission is two bodies that work together: a three-member Commission and the Division of Public Utilities and Carriers[^1]. The Division enforces utility laws and Commission orders on how utilities operate and what they charge, certifies public utilities and also regulates cable TV[^2]. **Contact your utility first**, such as Rhode Island Energy for electric and gas service. If you're not satisfied with its response, send a complaint using the online form[^3]. Unresolved billing disputes can be appealed to the Division for review and a hearing[^7].",
  },
  electricity: {
    market: 'choice',
    text: "Your electric utility, such as Rhode Island Energy, keeps delivering power and handling outages and storm restoration no matter who supplies your electricity[^3][^4]. You can buy supply from a competitive supplier registered with the Division, or stay on the utility's Last Resort Service (also called Standard Offer), whose residential price changes every six months, on April 1 and October 1[^4]. Before you sign, check whether the price is fixed or variable, whether there is a minimum bill, and whether there are early termination fees[^4]. A 2019 law ended automatic renewals of residential supply contracts and requires a new contract if your price terms change[^4]. See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).",
    shopping: { name: 'Empower RI', url: 'https://www.ri.gov/app/dpuc/empowerri' },
  },
  gas: {
    text: '**Residential customers cannot buy natural gas from a competitive supplier**; only commercial and industrial customers can[^5]. Commercial customers who switch still pay the utility for delivery[^5]. The PUC lists gas marketers and gas service rules on its natural gas page[^6].',
    shopping: null,
  },
  water: {
    text: "The Commission regulates for-profit water utilities and municipal water boards that serve areas outside their own city or town, as well as the Kent County Water Authority[^8]. Its list includes Providence Water Supply Board, Pawtucket Water Supply Board, City of Newport Water Department, Woonsocket Water Division and Veolia Water Rhode Island[^8]. If your local water system isn't on that list, contact it directly about rates.",
  },
  shutoff: {
    text: "From **November 1 through May 1**, a gas or electric utility cannot shut off a home for nonpayment when it has evidence the customer is in a protected group: unemployed, seriously ill, elderly, handicapped or receiving LIHEAP[^7]. During that period it also can't shut off heating service unless the past-due balance is over $500 ($200 when gas or electric isn't the main heat source)[^7]. A licensed physician's certification that a resident is seriously ill postpones a shutoff for at least three weeks, and you can ask the Division to review a longer illness; gas and electric companies can't shut off a financial-hardship household with a child under 2 if service wasn't cut before the child's birth[^7]. Written notice must arrive at least 10 days before a shutoff, the Division must approve shutoffs for households where all adults are 62 or older or anyone is handicapped, and no residential shutoffs are allowed on days the National Weather Service issues a heat advisory or excessive heat warning for Rhode Island[^7].",
  },
  help: [
    {
      name: 'Low Income Home Energy Assistance Program (LIHEAP)',
      url: 'https://dhs.ri.gov/programs-and-services/energy-assistance-programs-heating/low-income-home-energy-assistance-1',
      summary:
        'Run by the Rhode Island Department of Human Services with local Community Action Agencies. Heating Assistance grants are usually paid to your fuel dealer or utility, and Crisis Assistance helps with a heat shutoff, running out of deliverable fuel or a failed heating system. Applications for federal fiscal year 2027 opened October 1, 2026[^9].',
    },
    {
      name: 'Energy Support RI (state energy assistance guide)',
      url: 'https://dhs.ri.gov/programs-and-services/energy-assistance-programs-heating/energy-support-ri',
      summary:
        "DHS's guide to other help, including the Good Neighbor Energy Fund, Keep the Heat On, free home energy assessments, and Rhode Island Energy discount rates for households receiving certain DHS benefits[^10].",
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://dhs.ri.gov/programs-and-services/energy-assistance-programs-heating/weatherization-assistance-program-wap',
      summary:
        'Whole-house efficiency work such as insulation, draft reduction and smoke and carbon monoxide detectors for households that qualify for LIHEAP. Homeowners and renters (with landlord approval) can apply year-round through a Community Action Program agency, after applying for LIHEAP[^11].',
    },
  ],
  consumer: {
    name: 'Rhode Island Attorney General Consumer Protection Unit',
    url: 'https://riag.ri.gov/consumerprotection',
    summary:
      "The Attorney General's office helps consumers resolve complaints against businesses, from small overcharges to disputes worth thousands of dollars, and offers an online consumer complaint form[^12].",
  },
  rebates: [
    {
      name: 'Home Energy Rebate Programs (HEAR and HOMES)',
      url: 'https://energy.ri.gov/incentives/home-energy-rebate-programs',
      summary:
        "The Office of Energy Resources runs Rhode Island's federal home energy rebates. The income-restricted Home Electrification and Appliance Rebates (HEAR) program launched September 17, 2024, and the Home Owners Managing Energy Savings (HOMES) program for income-eligible heat pump projects launched September 23, 2026[^13].",
    },
    {
      name: 'Energy Efficiency for Residents (Office of Energy Resources)',
      url: 'https://energy.ri.gov/energy-efficiency/residents',
      summary:
        "The state energy office's guide to residential efficiency programs, including Rhode Island Energy's efficiency programs, free home energy assessments and Property Assessed Clean Energy (PACE) financing[^14].",
    },
  ],
  sources: [
    { title: 'Welcome', publisher: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/', accessed: '2026-10-15' },
    { title: 'About the Division', publisher: 'Rhode Island Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/general-information/division', accessed: '2026-10-15' },
    { title: 'How to File a Complaint', publisher: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/consumer-information/how-file-complaint', accessed: '2026-10-15' },
    { title: 'Competitive Energy Suppliers - Q&A and Updates', publisher: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/utility-information/electric/competitive-energy-suppliers-qa-and-updates', accessed: '2026-10-15' },
    { title: 'Competitive Natural Gas Suppliers - Q&A', publisher: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/utility-information/natural-gas/competitive-natural-gas-suppliers-qa', accessed: '2026-10-15' },
    { title: 'Natural Gas', publisher: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/utility-information/natural-gas', accessed: '2026-10-15' },
    { title: 'Rules and Regulations Governing the Termination of Residential Electric, Gas and Water Service (810-RICR-10-00-1)', publisher: 'Rhode Island Public Utilities Commission (via Rhode Island Department of State)', url: 'https://rules.sos.ri.gov/regulations/part/810-10-00-1', accessed: '2026-10-15' },
    { title: 'Water', publisher: 'Rhode Island Public Utilities Commission and Division of Public Utilities and Carriers', url: 'https://ripuc.ri.gov/utility-information/water', accessed: '2026-10-15' },
    { title: 'Low Income Home Energy Assistance Program (LIHEAP)', publisher: 'Rhode Island Department of Human Services', url: 'https://dhs.ri.gov/programs-and-services/energy-assistance-programs-heating/low-income-home-energy-assistance-1', accessed: '2026-10-15' },
    { title: 'State Energy Assistance Programs (Energy Support RI)', publisher: 'Rhode Island Department of Human Services', url: 'https://dhs.ri.gov/programs-and-services/energy-assistance-programs-heating/energy-support-ri', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program (WAP)', publisher: 'Rhode Island Department of Human Services', url: 'https://dhs.ri.gov/programs-and-services/energy-assistance-programs-heating/weatherization-assistance-program-wap', accessed: '2026-10-15' },
    { title: 'Consumer Protection', publisher: 'Rhode Island Office of the Attorney General', url: 'https://riag.ri.gov/consumerprotection', accessed: '2026-10-15' },
    { title: 'Home Energy Rebate Programs', publisher: 'Rhode Island Office of Energy Resources', url: 'https://energy.ri.gov/incentives/home-energy-rebate-programs', accessed: '2026-10-15' },
    { title: 'Energy Efficiency For Residents', publisher: 'Rhode Island Office of Energy Resources', url: 'https://energy.ri.gov/energy-efficiency/residents', accessed: '2026-10-15' },
  ],
}
