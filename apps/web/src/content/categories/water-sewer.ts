import type { BillCategory } from '../types'

export const waterSewer: BillCategory = {
  slug: 'water-sewer',
  name: 'Water & Sewer',
  shortName: 'Water & Sewer',
  tagline:
    'Water, sewer, stormwater, and trash: who provides each service, how it is billed, and how to spot a leak before it shows up on your bill.',
  intro: [
    'A "water bill" is often several bills in one. It can include the drinking water that comes out of your tap, the **sewer** service that carries wastewater away, a **stormwater** fee for managing rain runoff, and sometimes trash and recycling pickup. Some homes get all of these on one statement from the city. Others get separate bills from different providers, or pay for some services through property taxes or rent.',
    'Water costs have been climbing. The U.S. Bureau of Labor Statistics consumer price index for water and sewerage maintenance rose about 4.9% from August 2025 to August 2026[^10], faster than the 3.4% rise in overall consumer prices over the same year[^11]. A big reason is that water systems are old and expensive to maintain: EPA estimates drinking water systems need $625 billion over 20 years for pipes, treatment plants, and other key assets[^6], and wastewater and stormwater systems need at least $630 billion more[^7].',
    'This guide explains how water and sewer bills are built, what each charge means, why costs rise, and how to read your own bill and check for leaks. Rates and billing rules are set locally, so they vary a lot from one community to the next. Look up unfamiliar terms in the [glossary](/glossary).',
  ],
  howItWorks: {
    summary:
      'Most water bills combine a fixed charge with a usage charge based on how much water your meter records. Sewer charges are often calculated from your water use, because what goes down the drain usually started as tap water. Stormwater and trash may be flat fees, based on property size or cart size, or included in taxes. Who sets these prices depends on who owns your water system.',
    points: [
      {
        title: 'Your meter measures water in gallons or cubic feet',
        body: 'Many utilities bill in thousands of gallons. Others use "units" of 100 cubic feet (about 748 gallons). Check your bill to see which one yours uses before comparing to anything else. EPA estimates each American uses an average of 82 gallons of water a day at home[^1].',
      },
      {
        title: 'Fixed charge plus usage charge',
        body: 'A **base** or **service** charge covers costs like meters, billing, and keeping the system ready, and it is often based on meter size. A **volume** or **usage** charge applies to each unit of water used. Some utilities use tiered rates, where the price per unit rises as you use more.',
      },
      {
        title: 'Sewer is often based on water use',
        body: 'Since most indoor water ends up in the sewer, many utilities calculate sewer charges from your water meter. Some use your average winter water use for sewer billing all year, so summer lawn watering does not raise your sewer charge. Policies vary by utility.',
      },
      {
        title: 'Stormwater fees pay for runoff systems',
        body: 'Stormwater is rain and snowmelt that flows off roofs, driveways, and streets instead of soaking into the ground, picking up pollutants along the way[^8]. Many communities manage it under federal permits and pay for it with a stormwater fee, sometimes based on how much paved or roofed area your property has.',
      },
      {
        title: 'Trash can be flat-rate or pay-as-you-throw',
        body: 'Traditionally, households pay for trash collection through property taxes or a fixed fee. In **pay-as-you-throw** programs, residents pay based on how much trash they set out, usually by the bag or cart size[^9].',
      },
      {
        title: 'Who owns your water system shapes your bill',
        body: 'Many water systems are run by cities, counties, or special districts, whose boards or councils set rates. Others are owned by private companies, whose rates are generally reviewed by the state utility commission[^12]. If you rent, water may be included in rent or billed back to you by the landlord.',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Water base or service charge',
      description:
        'A fixed monthly or quarterly charge, often tied to meter size, that you pay regardless of how much water you use.',
    },
    {
      name: 'Water usage (volume) charge',
      description:
        'A charge for each unit of water used, such as per 1,000 gallons or per 100 cubic feet. May be tiered so higher use costs more per unit.',
    },
    {
      name: 'Sewer base charge',
      description:
        'A fixed charge for wastewater service, separate from the water base charge.',
    },
    {
      name: 'Sewer usage charge',
      description:
        'Usually calculated from water use, sometimes from a winter average. If you have a separate irrigation meter, that water may be excluded from sewer charges.',
    },
    {
      name: 'Stormwater fee',
      description:
        'A charge to fund drainage, storm sewers, and runoff control. Often flat or based on your property\'s hard surfaces like roofs and driveways.',
    },
    {
      name: 'Trash and recycling fee',
      description:
        'A charge for solid waste pickup. May be flat, based on cart size, or per bag in pay-as-you-throw communities[^9].',
    },
    {
      name: 'Infrastructure or capital surcharge',
      description:
        'Some utilities add a separate line to fund pipe replacement, treatment upgrades, or other projects. Names vary widely.',
    },
    {
      name: 'Late fees, reconnection fees, and deposits',
      description:
        'Charges for late payment, restoring service after a shutoff, or opening a new account. Set by local policy or, for private utilities, approved by the state commission.',
    },
  ],
  whyCostsRise: [
    {
      title: 'Aging pipes and plants',
      body: 'EPA\'s most recent drinking water needs survey estimates $625 billion in needs over 20 years for pipe replacement, treatment plant upgrades, storage tanks, and other assets[^6]. Wastewater and stormwater systems need at least $630 billion over the same period[^7]. Much of this is paid for through customer rates.',
    },
    {
      title: 'Lead pipe replacement and water quality rules',
      body: 'EPA estimates there are about four million lead service lines in the U.S.[^6]. Replacing them, and meeting drinking water standards, adds to system costs that can show up in rates.',
    },
    {
      title: 'Rates rising faster than overall prices',
      body: 'BLS data show the water and sewerage maintenance price index rose about 4.9% in the year to August 2026[^10], compared with about 3.4% for all consumer prices[^11]. National averages hide big differences between communities.',
    },
    {
      title: 'Higher usage, especially outdoors',
      body: 'EPA says outdoor use averages about 30% of household water use and can be much higher in drier parts of the country with water-intensive landscapes[^2]. Summer watering can raise your usage charge quickly, especially with tiered rates.',
    },
    {
      title: 'Hidden leaks',
      body: 'EPA estimates household leaks waste nearly 1 trillion gallons a year nationwide, and that about 9% of homes have leaks wasting 50 gallons or more a day[^3]. A running toilet or dripping faucet adds to usage every day until it is fixed.',
    },
  ],
  readingYourBill: [
    {
      title: '1. Check the billing period',
      body: 'Water bills may be monthly, every two months, or quarterly. Note the dates and the number of days so you compare like with like.',
    },
    {
      title: '2. Find the meter readings and usage unit',
      body: 'Look for previous and current readings and the total used. Confirm whether usage is in gallons, thousands of gallons, or units of 100 cubic feet. Check whether the reading was actual or estimated.',
    },
    {
      title: '3. Split the bill by service',
      body: 'Separate the water, sewer, stormwater, and trash sections. Each may have its own fixed charge and usage charge.',
    },
    {
      title: '4. Check the rate structure',
      body: 'See whether usage is billed at one flat rate or in tiers. If tiered, note where your usage crossed into a higher tier.',
    },
    {
      title: '5. Look for surcharges and credits',
      body: 'Find any infrastructure surcharges, assistance credits, or one-time adjustments. Ask about any line you do not recognize.',
    },
    {
      title: '6. Compare with past bills',
      body: 'Compare usage with the same period last year. A sudden jump with no change in household habits can be a sign of a leak.',
    },
    {
      title: '7. Read the notices',
      body: 'Rate changes, water quality notices, and service updates often appear on the bill or as inserts. Your water supplier must also send an annual drinking water quality report, called a Consumer Confidence Report, by July 1 each year[^5].',
    },
  ],
  reviewTips: [
    {
      title: 'Check for leaks with your meter',
      body: 'EPA suggests reading your water meter before and after a two-hour period when no water is being used. If the meter changes at all, you probably have a leak[^3]. The [leak cost calculator](/tools) (coming soon) can show what a drip adds up to.',
    },
    {
      title: 'Use winter usage as a baseline',
      body: 'EPA suggests looking at usage in a colder month like January or February, when outdoor watering is low. It says a family of four using more than 12,000 gallons a month in winter could have serious leaks[^3].',
    },
    {
      title: 'Test your toilet',
      body: 'EPA recommends putting a few drops of food coloring in the toilet tank and waiting before flushing. If color shows up in the bowl, the tank is leaking[^3]. Worn flappers are a common cause.',
    },
    {
      title: 'Track usage per person per day',
      body: 'Divide your usage by the number of days and the number of people in your home. EPA\'s figure of about 82 gallons per person per day at home is a rough national reference point, not a target[^1]. Try the [water usage calculator](/tools) (coming soon).',
    },
    {
      title: 'Ask about assistance and payment plans',
      body: 'EPA estimates between 12.1 million and 19.2 million U.S. households lack access to affordable water service[^4]. Many utilities offer payment plans, senior or low-income discounts, or leak adjustments. Ask your provider what is available.',
    },
    {
      title: 'Ask for a leak adjustment',
      body: 'Some utilities offer a one-time credit after you repair a documented leak. Keep repair receipts and ask about the policy before your next bill is due.',
    },
  ],
  relatedTools: ['water-usage', 'water-bill', 'leak-cost'],
  comparisons: [
    {
      title: 'Your bill vs. your own past bills',
      body: 'Compare usage per day for the same season across two years. This is the most reliable comparison, because rates and rules differ so much between communities.',
    },
    {
      title: 'Fixed charges vs. usage charges',
      body: 'Add up all the fixed charges on your bill and compare them to the usage-based charges. If most of your bill is fixed, cutting usage will change the total less than you might expect. If most is usage-based, leaks and outdoor watering matter more.',
    },
    {
      title: 'Indoor vs. outdoor use',
      body: 'Compare winter usage (mostly indoor) with summer usage (indoor plus outdoor). EPA says indoor use averages about 70% of household water use nationally[^2], so a much bigger summer jump points to irrigation as the main driver.',
    },
    {
      title: 'Your rates vs. published rate schedules',
      body: 'Your utility posts its current rate schedule. Compare the rates on your bill with the published schedule, and check upcoming rate changes. Comparing with a neighboring utility can give context, but remember each system has different costs and needs.',
    },
  ],
  faqs: [
    {
      q: 'Why is my sewer charge higher than my water charge?',
      a: 'Sewer systems have their own pipes, pumps, and treatment plants, with large repair and upgrade needs of their own[^7]. Many utilities also calculate sewer charges from your water use, so both rise when usage goes up. Your utility\'s rate schedule shows how each charge is calculated.',
    },
    {
      q: 'What is a stormwater fee?',
      a: 'It pays for systems that manage rain and snowmelt running off roofs, driveways, and streets[^8]. Some communities charge a flat amount; others base it on how much hard surface is on your property.',
    },
    {
      q: 'Why did my water bill jump with no change in habits?',
      a: 'Common causes include a hidden leak, a rate increase, a longer billing period, or a catch-up bill after estimated readings. Check your meter for leaks[^3] and compare the rates on your bill with the utility\'s published schedule.',
    },
    {
      q: 'How much water does a typical household use?',
      a: 'EPA says the average American family uses more than 300 gallons of water a day at home, with about 70% used indoors[^2]. Your use depends on household size, fixtures, appliances, and climate.',
    },
    {
      q: 'Who owns my water system, and does it matter?',
      a: 'Your water may come from a city or county utility, a special district, or a privately owned company. Public systems usually set rates through local boards, while private utilities\' rates are generally reviewed by the state utility commission[^12]. Your bill or utility website should say who your provider is.',
    },
    {
      q: 'How do I find out about my water quality?',
      a: 'Community water systems must send customers an annual Consumer Confidence Report by July 1. You can ask your supplier for a copy or use EPA\'s online search tool[^5].',
    },
    {
      q: 'What is pay-as-you-throw trash billing?',
      a: 'In pay-as-you-throw programs, households pay for trash pickup based on how much they throw away, usually by the bag or can, instead of a flat fee or property tax[^9].',
    },
    {
      q: 'I rent. Why am I getting a water bill?',
      a: 'Some landlords include water in rent, while others pass the cost to tenants, either through a direct utility account or a bill-back from the landlord. Rules on how landlords can bill tenants for water vary by state and city. Check your lease and local rules.',
    },
  ],
  stateNotes: {
    summary:
      'Water, sewer, stormwater, and trash billing is mostly set locally. Rates, rate structures, billing frequency, leak adjustments, shutoff rules, and assistance programs vary by community. Stormwater permitting is handled under a federal program that most states are authorized to run[^8].',
    whoRegulates:
      'Publicly owned water and sewer systems are usually governed by a city council, county board, or special district board that sets rates. Investor-owned water utilities are generally regulated by state public utility commissions[^12]. Drinking water quality is regulated under federal standards, with the annual Consumer Confidence Report as a key customer disclosure[^5]. Trash service may be run by the city or by private haulers under local contracts.',
  },
  sources: [
    {
      title: 'Statistics and Facts',
      publisher: 'U.S. Environmental Protection Agency, WaterSense',
      url: 'https://www.epa.gov/watersense/statistics-and-facts',
      accessed: '2026-10-13',
      note: 'Per-person figure cites USGS, Estimated Use of Water in the United States in 2015.',
    },
    {
      title: 'How We Use Water',
      publisher: 'U.S. Environmental Protection Agency, WaterSense',
      url: 'https://www.epa.gov/watersense/how-we-use-water',
      accessed: '2026-10-13',
    },
    {
      title: 'Fix a Leak Week',
      publisher: 'U.S. Environmental Protection Agency, WaterSense',
      url: 'https://www.epa.gov/watersense/fix-leak-week',
      accessed: '2026-10-13',
    },
    {
      title: 'EPA Report Highlights Water Affordability Challenges in the U.S.',
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/newsreleases/epa-report-highlights-water-affordability-challenges-us',
      accessed: '2026-10-13',
      note: 'News release for the December 2024 Water Affordability Needs Assessment report to Congress.',
    },
    {
      title: 'CCR Information for Consumers',
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/ccr/ccr-information-consumers',
      accessed: '2026-10-13',
    },
    {
      title: "EPA's 7th Drinking Water Infrastructure Needs Survey and Assessment",
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/dwsrf/epas-7th-drinking-water-infrastructure-needs-survey-and-assessment',
      accessed: '2026-10-13',
    },
    {
      title: 'New EPA Survey Highlights Wastewater Infrastructure Needs to Protect Waterbodies',
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/newsreleases/new-epa-survey-highlights-wastewater-infrastructure-needs-protect-waterbodies',
      accessed: '2026-10-13',
      note: 'Clean Watersheds Needs Survey (2022).',
    },
    {
      title: 'NPDES Stormwater Program',
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/npdes/npdes-stormwater-program',
      accessed: '2026-10-13',
    },
    {
      title: 'Pay-As-You-Throw',
      publisher: 'U.S. Environmental Protection Agency (archived page)',
      url: 'https://archive.epa.gov/wastes/conserve/tools/payt/web/html/index.html',
      accessed: '2026-10-13',
      note: 'EPA notes this archived page is no longer updated.',
    },
    {
      title: 'CPI-U: Water and sewerage maintenance, U.S. city average (series CUUR0000SEHG01)',
      publisher: 'U.S. Bureau of Labor Statistics',
      url: 'https://data.bls.gov/timeseries/CUUR0000SEHG01',
      accessed: '2026-10-13',
      note: 'Not seasonally adjusted. August 2025 to August 2026 change calculated by Billix from published index values.',
    },
    {
      title: 'CPI-U: All items, U.S. city average (series CUUR0000SA0)',
      publisher: 'U.S. Bureau of Labor Statistics',
      url: 'https://data.bls.gov/timeseries/CUUR0000SA0',
      accessed: '2026-10-13',
      note: 'Not seasonally adjusted. August 2025 to August 2026 change calculated by Billix from published index values.',
    },
    {
      title: 'Regulatory Commissions',
      publisher: 'National Association of Regulatory Utility Commissioners (NARUC)',
      url: 'https://www.naruc.org/about-naruc/our-mission/regulatory-commissions/',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
