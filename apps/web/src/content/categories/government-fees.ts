import type { BillCategory } from '../types'

export const governmentFees: BillCategory = {
  slug: 'government-fees',
  name: 'Government & Municipal Fees',
  shortName: 'Government Fees',
  tagline:
    'Franchise fees, utility taxes, 911 fees, vehicle registration, permits and special assessments: the government charges hiding in and around your bills.',
  intro: [
    "Not every line on a bill goes to the company that sends it. Your phone, cable, electric, water and property tax bills can include taxes and fees set by your city, county or state. Some are collected by the company and passed along to the government. Others, like vehicle registration or a building permit, you pay to a government office directly.",
    "These charges can be confusing because they look different from place to place. A phone bill may show state and local taxes and a 911 fee.[^1] A cable bill may show a franchise fee paid to the local franchising authority.[^2] A property tax bill may include an assessment for a local improvement like a new sidewalk or sewer line.[^6] Knowing which line is a government charge and which is the company's own fee helps you understand what can and cannot change.",
    "This guide explains the most common government and municipal charges, how to spot them on your bills, and where to ask questions. It is general education, not tax or legal advice. These fees are set locally, so the names, amounts and rules vary widely by state, county and city.",
  ],
  howItWorks: {
    summary:
      'Government charges reach households in two ways. Some are **added to private bills** (phone, cable, electric, gas) and collected by the company on the government\'s behalf. Others are **billed directly** by a government, such as property tax bills, vehicle registration, permits and some water, sewer, stormwater or trash charges.',
    points: [
      {
        title: 'Franchise fees',
        body: 'In many places, cities grant utilities and cable companies a **franchise**, the right to use public streets and rights-of-way for their wires and pipes. In return, the local government may charge a franchise fee.[^3] For cable TV, federal law caps franchise fees at 5% of the operator\'s gross revenue from cable service and lets the operator list the fee as a separate line on your bill.[^2]',
      },
      {
        title: 'Taxes on utility and phone bills',
        body: 'State, local and municipal governments may tax phone service, and these may appear as "gross receipts" taxes on your bill.[^1] Electric bills can include items like city sales tax.[^4]',
      },
      {
        title: 'Fees that fund public services',
        body: 'A **911 fee** on a phone bill helps local governments pay for emergency services.[^1] A **stormwater fee**, often based on a property\'s type or paved area, helps pay for local stormwater systems and may be added to water, sewer or utility bills.[^5]',
      },
      {
        title: 'Charges that are not government fees',
        body: 'Some charges with official-sounding names are set by the company, not the government. On phone bills, for example, "access charges" are not a government charge or tax, and the FCC does not require providers to pass Universal Service Fund costs on to customers, though they are allowed to.[^1]',
      },
      {
        title: 'Special assessments',
        body: 'A **special assessment** charges properties that benefit from a local project, such as new streets, sidewalks or water and sewer systems. It may appear as a line on your real estate tax bill.[^6] Some communities fund projects that benefit only part of a town through a special assessment district.[^5]',
      },
      {
        title: 'Registration, licenses and permits',
        body: 'Vehicle registration and renewal are handled by your state or territory\'s motor vehicle agency.[^8] Building and other permits are issued by your city or county, and fees are set locally.',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Franchise fee',
      description:
        'A fee the local government charges a utility or cable company for using public rights-of-way. The company may pass it through to customers in that city.[^3] Cable franchise fees are capped at 5% of cable revenue under federal law.[^2]',
    },
    {
      name: 'State and local taxes on phone or utility service',
      description:
        'Taxes that state, local and municipal governments place on services such as phone service, sometimes shown as "gross receipts" taxes.[^1]',
    },
    {
      name: 'City sales tax on electricity',
      description:
        'Sales tax collected for authorized taxing authorities, such as the state, cities and special purpose districts. Texas, for example, lists it as a line item on electric bills.[^4]',
    },
    {
      name: 'Gross receipts tax reimbursement',
      description:
        'In Texas, a fee to recover a gross receipts tax imposed on retail electric providers in cities with more than 1,000 people.[^4] Other states have different taxes and names.',
    },
    {
      name: '911 fee',
      description:
        'A charge on phone bills that helps local governments pay for emergency services such as fire and rescue.[^1]',
    },
    {
      name: 'Stormwater fee',
      description:
        'A local fee, typically based on property type or area, that pays for stormwater management. It may appear on a water, sewer or utility bill.[^5]',
    },
    {
      name: 'Special assessment',
      description:
        'A charge for a local improvement that benefits your property, such as streets, sidewalks or water and sewer systems, sometimes listed on your property tax bill.[^6]',
    },
    {
      name: 'Connection or system development charge',
      description:
        'A one-time fee commonly charged to new customers connecting to a water or sewer system, to help pay for the infrastructure that serves them.[^5]',
    },
    {
      name: 'Vehicle registration fee',
      description:
        'Paid to your state motor vehicle agency to register or renew a vehicle.[^8] In some places part of the charge is a tax based on the vehicle\'s value.[^7]',
    },
  ],
  whyCostsRise: [
    {
      title: 'Fees tied to your bill amount',
      body: 'Some charges are figured as a percentage of revenue or of your bill, like cable franchise fees.[^2] When the underlying bill goes up, the fee can go up with it.',
    },
    {
      title: 'New local programs',
      body: 'Local governments may add fees to pay for services like stormwater management. EPA notes that stormwater program costs are driven by regulatory requirements, flooding concerns, water quality issues and population growth, and some communities pay for them through a stormwater utility fee.[^5]',
    },
    {
      title: 'Local improvement projects',
      body: 'When a project such as new sidewalks or sewer lines benefits your property, a special assessment may be added to your property tax bill.[^6]',
    },
    {
      title: 'Changes in local rates',
      body: 'In Minnesota, for example, franchise fees are negotiated between the city and the utility, and the utility passes the fee through to its customers within the city, so a new or higher franchise fee can show up on household bills.[^3]',
    },
    {
      title: 'Vehicle value and type',
      body: 'Where registration includes a value-based tax, a newer or more valuable vehicle can mean a higher bill.[^7] Rules differ by state.',
    },
  ],
  readingYourBill: [
    {
      title: '1. Find the taxes and fees section',
      body: 'Most phone, cable and utility bills group government charges in their own section, separate from the service charges. Phone companies must use clear, plain-language descriptions of the charges on your bill.[^1]',
    },
    {
      title: '2. Separate government charges from company fees',
      body: 'Ask, for each line: is this a tax or fee the government requires, or a fee the company chose to charge? Some names sound official but are not. On phone bills, for example, "access charges" are not a government charge or tax.[^1]',
    },
    {
      title: '3. Look for the franchise fee and who receives it',
      body: 'On a cable bill, the operator may show the franchise fee amount and the franchising authority that receives it as separate items.[^2]',
    },
    {
      title: '4. Check fees billed as a percentage',
      body: 'Some charges, such as a Universal Service line item, usually appear as a percentage of your phone bill.[^1] Check whether the percentage changed from last month.',
    },
    {
      title: '5. Review your property tax bill for assessments',
      body: 'Look for line items that are not the basic property tax, such as charges for services or assessments for local benefits. If your bill does not explain a charge, contact the taxing authority.[^6]',
    },
    {
      title: '6. Check your water, sewer and trash bill',
      body: 'Stormwater or other municipal service fees may be listed alongside water and sewer charges.[^5] Your city or utility website usually explains how each one is calculated.',
    },
    {
      title: '7. Keep records for taxes',
      body: 'Service charges and most special assessments are not deductible as real estate taxes, but value-based vehicle taxes and some assessment portions may be. Keep your bills and check IRS rules or a tax professional.[^6][^7]',
    },
  ],
  reviewTips: [
    {
      title: 'Ask whether a fee is required',
      body: 'If a line item looks like a government charge, ask the company whether it is required by law or is the company\'s own fee. Some company fees vary by provider, and some providers charge less or nothing at all.[^1]',
    },
    {
      title: 'Know where to complain',
      body: 'For phone charges you think are wrong, contact the provider first. Then you can go to the FCC for interstate service, your state public service commission for in-state service, or the FTC for non-telephone charges. For cable rate or service issues, contact your local franchising authority.[^1]',
    },
    {
      title: 'Watch for one-time local charges',
      body: 'Special assessments and connection fees are often tied to a specific project or new service.[^5][^6] Ask your city or county how long an assessment lasts and whether it can be paid over time.',
    },
    {
      title: 'Check registration renewal notices',
      body: 'Your state motor vehicle agency handles registration and renewals.[^8] Read each renewal notice for the breakdown of fees and taxes, which differ by state.',
    },
    {
      title: 'Budget for yearly and one-time government bills',
      body: 'Vehicle registration, permits and property tax installments can come once or twice a year. Adding them to a [household planner](/tools) (coming soon) spreads them across the year. See also the [property tax calculator](/tools) (coming soon).',
    },
    {
      title: 'Read local notices',
      body: 'Franchise fees and many local fees are adopted through local processes such as ordinances and franchise agreements.[^3] City council and county agendas are where proposed changes usually show up first.',
    },
  ],
  relatedTools: ['property-tax', 'household-planner'],
  comparisons: [
    {
      title: 'Same service, different providers',
      body: 'When comparing phone, internet or TV offers, compare the total with taxes and fees, not just the advertised price. Some line items are set by the company and can differ between providers.[^1]',
    },
    {
      title: 'Utility charges by location',
      body: 'Franchise fees and local taxes depend on where you live. A Minnesota example shows cities negotiate franchise fees with each utility, so two nearby towns can have different fees.[^3] If you are moving, ask the utility or city which local charges apply at the new address.',
    },
    {
      title: 'Stormwater and municipal fees',
      body: 'Stormwater fees are calculated in different ways, often using a property\'s impervious (paved or roofed) area or a flat rate by property type.[^5] If you are comparing homes, ask how each community bills for stormwater, trash and other services.',
    },
    {
      title: 'Property tax bills between homes',
      body: 'When comparing homes, look at the full tax bill, including any special assessments for local improvements, not just the base property tax.[^6]',
    },
  ],
  faqs: [
    {
      q: 'What is a franchise fee on my bill?',
      a: 'It is a fee a city or county charges a utility or cable company for the right to use public streets and rights-of-way. The company typically passes it on to customers in that area.[^3] For cable, federal law caps it at 5% of the operator\'s gross revenue from cable service.[^2]',
    },
    {
      q: 'Is the Universal Service charge on my phone bill a tax?',
      a: 'No. All telecommunications providers must contribute to the federal Universal Service Fund, and providers may choose to recover that cost from customers, but the FCC does not require them to pass it on.[^1]',
    },
    {
      q: 'What is a 911 fee?',
      a: 'A charge on phone bills that helps local governments pay for emergency services such as fire and rescue.[^1]',
    },
    {
      q: 'What is a special assessment?',
      a: 'A charge to property owners for a local improvement that benefits their property, such as new streets, sidewalks or water and sewer systems. It may be listed on your real estate tax bill.[^6]',
    },
    {
      q: 'Can I deduct special assessments or service charges on my taxes?',
      a: 'Generally, assessments for local benefits that increase your property value are not deductible as real estate taxes, though portions for maintenance, repair or interest may be. Service charges, such as for water, sewer or trash, are not deductible.[^6][^7] Check IRS rules or a tax professional for your situation.',
    },
    {
      q: 'Is my vehicle registration fee tax deductible?',
      a: 'Only a personal property tax based on the vehicle\'s value, charged yearly, may be deductible if you itemize. Flat fees are not.[^7] Your state registration notice may show how the charge is divided.',
    },
    {
      q: 'What is a stormwater fee?',
      a: 'A local fee that helps pay for managing rain runoff from roofs, driveways and streets. It is often based on the property type or the amount of paved or roofed area, and may appear on a water, sewer or utility bill.[^5]',
    },
    {
      q: 'Who do I ask about a local fee on my bill?',
      a: 'For a phone charge, start with the provider, then your state public service commission or the FCC. For cable, contact your local franchising authority.[^1] For property tax items, contact the taxing authority.[^6]',
    },
  ],
  stateNotes: {
    summary:
      'Government fees are among the most local of all bill charges. States decide what cities and counties may charge, and local governments set many of the rates. In Texas, for example, the Public Utility Commission does not oversee rates for municipally owned utilities or electric cooperatives.[^4] In Minnesota, cities negotiate gas and electric franchise fees with utilities.[^3] Vehicle registration is set by each state.[^8] For the rules where you live, check with your city or county, your state public utility commission and your state motor vehicle agency.',
    whoRegulates:
      '**Cities and counties** set franchise fees, local taxes, stormwater and service fees, permits and special assessments, within limits set by state law.[^3][^5] **State public utility or public service commissions** oversee many utility rates and in-state phone service.[^1][^4] **Local franchising authorities** oversee cable franchises, and the **FCC** handles interstate phone issues.[^1][^2] **State motor vehicle agencies** handle registration.[^8] The **IRS** sets federal rules on which of these charges may be deductible.[^7]',
  },
  sources: [
    {
      title: 'Understanding Your Telephone Bill',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/understanding-your-telephone-bill',
      accessed: '2026-10-13',
    },
    {
      title: '47 U.S.C. 542: Franchise fees',
      publisher: 'U.S. Government Publishing Office (GovInfo)',
      url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title47/html/USCODE-2023-title47-chap5-subchapV-A-partIII-sec542.htm',
      accessed: '2026-10-13',
    },
    {
      title: 'Gas and Electric Utility Franchising (Information Memo)',
      publisher: 'League of Minnesota Cities',
      url: 'https://www.lmc.org/wp-content/uploads/documents/Gas-and-Electric-Utility-Franchising.pdf',
      accessed: '2026-10-13',
      note: 'Minnesota-specific; used as an example of how franchise fees work.',
    },
    {
      title: 'Understanding Your Electric Bill Charges',
      publisher: 'Public Utility Commission of Texas',
      url: 'https://www.puc.texas.gov/consumer-help/electricity/understanding-bill/',
      accessed: '2026-10-13',
      note: 'Texas-specific; used as an example of local tax line items.',
    },
    {
      title: 'Funding Stormwater Programs (EPA 901-F-09-004)',
      publisher: 'U.S. Environmental Protection Agency, New England',
      url: 'https://www.epa.gov/sites/default/files/2015-10/documents/fundingstormwater.pdf',
      accessed: '2026-10-13',
      note: 'April 2009 fact sheet; used for how fees are structured, not for current amounts.',
    },
    {
      title: 'Publication 530: Tax Information for Homeowners',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/publications/p530',
      accessed: '2026-10-13',
    },
    {
      title: 'Topic no. 503, Deductible taxes',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/taxtopics/tc503',
      accessed: '2026-10-13',
    },
    {
      title: 'Motor vehicle services',
      publisher: 'USA.gov',
      url: 'https://www.usa.gov/motor-vehicle-services',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
