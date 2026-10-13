import type { BillCategory } from '../types'

export const heatingCooling: BillCategory = {
  slug: 'heating-cooling',
  name: 'Heating & Cooling',
  shortName: 'Heating & Cooling',
  tagline:
    'Natural gas, heating oil, propane, heat pumps, and air conditioning: how each one is billed and why winter and summer bills swing.',
  intro: [
    'Keeping your home warm in winter and cool in summer is often the biggest energy cost a household has. What that cost looks like depends on how your home is heated. Natural gas was the main heating fuel in 46% of U.S. homes in 2024, electricity is also widely used (especially in the South), and propane and heating oil heat a smaller share of homes nationally but are common in some regions[^1].',
    'Each fuel arrives on a different kind of bill. Natural gas comes through a pipe and is billed monthly by a utility, a lot like electricity. Heating oil and propane are usually **delivered** by truck, so you pay per gallon when the tank is filled, often from a company you choose. Heat pumps and air conditioners run on electricity, so their cost shows up on your [electric bill](/categories/electricity).',
    'This guide explains how each type of heating and cooling bill works, the charges you are likely to see, why costs rise, and how to compare options without guessing. Prices and rules vary by state, utility, and dealer, so use this as a starting point and check the details for your own home. Terms like AFUE and therm are explained in the [glossary](/glossary).',
  ],
  howItWorks: {
    summary:
      'Heating and cooling costs come down to two things: how much energy your home needs, which depends mostly on the weather and the building, and the price of the fuel you use. Piped natural gas is billed by a regulated utility. Delivered fuels like heating oil and propane are bought by the gallon from dealers. Heat pumps and air conditioners show up on your electric bill.',
    points: [
      {
        title: 'Natural gas: commodity plus delivery',
        body: 'EIA explains that what you pay for natural gas has two main parts: the **commodity cost** of the gas itself and the **transmission and distribution cost** of moving it by pipeline to your local utility and then to your home, plus taxes and fees[^2]. Bills usually measure gas in therms or hundreds of cubic feet (Ccf).',
      },
      {
        title: 'Some states let you choose a gas supplier',
        body: 'In natural gas customer choice programs, you can buy the gas from a marketer while your local utility still delivers it. EIA notes that state commissions do not allow the local utility to earn a profit on the gas itself, while marketer sales are unregulated, and that availability of these programs varies widely by state[^3].',
      },
      {
        title: 'Heating oil and propane: you buy by the gallon',
        body: 'Most heating oil and propane customers pay for each delivery. EIA notes that heating oil demand is seasonal, peaking from October through March, and that a Northeast homeowner might use 850 to 1,200 gallons during a typical winter[^5]. Some dealers offer automatic delivery, fixed-price or capped-price plans, or budget payment plans. Terms vary by dealer.',
      },
      {
        title: 'Heat pumps and air conditioners use electricity',
        body: 'A heat pump moves heat into your home in winter and out of it in summer. Central air conditioners and heat pumps both run on electricity, so their cost appears as kWh on your electric bill. ENERGY STAR notes that many newer certified air-source heat pumps can provide space heating even in very cold climates[^8].',
      },
      {
        title: 'Weather sets how much energy you need',
        body: 'EIA and weather agencies measure heating and cooling needs with **degree days**. A heating degree day measures how much heating is needed to keep a building warm, and a cooling degree day measures how much air conditioning is needed to keep it cool[^7]. More degree days usually mean more fuel or electricity used.',
      },
      {
        title: 'Equipment efficiency changes how much fuel you burn',
        body: 'For furnaces and boilers, **AFUE** (Annual Fuel Utilization Efficiency) is roughly the percentage of the fuel\'s heat that becomes heat in your home instead of being lost[^9]. Air conditioners are rated by SEER and EER, and heat pumps also by HSPF for heating; higher ratings mean more efficient equipment[^10].',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Gas customer or service charge',
      description:
        'A fixed monthly amount on a natural gas bill that you pay even in months when you use little or no gas. It helps cover meters, service lines, and billing.',
    },
    {
      name: 'Gas supply or commodity charge',
      description:
        'The price of the natural gas itself, usually per therm or Ccf. If you buy from a marketer under a customer choice program, the marketer\'s price may appear here[^3].',
    },
    {
      name: 'Gas distribution or delivery charge',
      description:
        'The cost of the local pipe network that brings gas to your home. Often billed per therm, sometimes with part built into the fixed charge.',
    },
    {
      name: 'Gas cost adjustment',
      description:
        'A charge, sometimes called a purchased gas adjustment, that passes through changes in what the utility paid for gas. It can rise or fall from month to month or season to season, depending on your state\'s rules.',
    },
    {
      name: 'Price per gallon (oil or propane)',
      description:
        'The main line on a heating oil or propane delivery ticket: gallons delivered times the price per gallon. Prices change often and can differ from one dealer to another[^5].',
    },
    {
      name: 'Delivery-related fees',
      description:
        'Some oil and propane dealers charge fees for small deliveries, emergency or after-hours deliveries, or adding a new customer. Ask each dealer for their fee list.',
    },
    {
      name: 'Tank rental or lease',
      description:
        'If the dealer owns your propane tank, you may see a yearly rental or lease charge. Read the lease terms, including who is allowed to fill the tank and what happens if you change dealers.',
    },
    {
      name: 'Service or maintenance plan',
      description:
        'Optional yearly contracts for tune-ups and repairs on furnaces, boilers, or heat pumps, often sold by fuel dealers and HVAC companies. Coverage and exclusions vary widely.',
    },
    {
      name: 'Taxes and surcharges',
      description:
        'State and local taxes on gas or delivered fuels, plus any regulator-approved riders on utility gas bills. EIA\'s weekly residential heating oil and propane prices exclude taxes, so your bill may be higher than published averages[^6].',
    },
  ],
  whyCostsRise: [
    {
      title: 'A colder winter or hotter summer',
      body: 'When there are more heating or cooling degree days, your home needs more energy to stay comfortable[^7]. Air conditioning, space heating, and water heating are the three largest uses of electricity in U.S. homes, and their share changes year to year with the weather[^12].',
    },
    {
      title: 'Higher fuel prices',
      body: 'Heating oil prices generally follow crude oil prices, which depend on worldwide supply and demand, weather, and geopolitical events[^5]. Natural gas prices depend on factors including distance from production, pipeline capacity, demand patterns, distribution costs, taxes, and state regulations[^2].',
    },
    {
      title: 'Seasonal demand and cold snaps',
      body: 'Heating oil prices tend to rise in winter even when crude prices are stable. EIA notes that a large cold weather system can draw down stored heating oil faster than it can be replaced, and wholesale buyers may bid prices up[^5].',
    },
    {
      title: 'Less local competition',
      body: 'For delivered fuels, the number of dealers in an area affects price competition. EIA notes that rural customers with fewer competing suppliers may pay higher prices[^5].',
    },
    {
      title: 'Aging or poorly tuned equipment',
      body: 'Older or poorly maintained systems can burn more fuel or electricity to deliver the same comfort. DOE recommends regular professional checkups, with furnaces checked in the fall and air conditioners in the spring, plus regular filter changes during peak seasons[^10].',
    },
    {
      title: 'Utility rate changes',
      body: 'For piped gas and for electric heat pumps and air conditioners, approved rate increases, gas cost adjustments, and new riders can raise your bill even if you use the same amount of energy.',
    },
  ],
  readingYourBill: [
    {
      title: '1. Identify your fuel and bill type',
      body: 'Is this a monthly utility bill (natural gas or electric), or a delivery ticket or invoice (heating oil or propane)? The steps below cover both.',
    },
    {
      title: '2. Check the period or delivery date',
      body: 'For a utility bill, find the service period and count the days. For a delivery, note the delivery date and how long it has been since the last fill. Winter deliveries come faster than summer ones.',
    },
    {
      title: '3. Find the usage',
      body: 'On a gas bill, look for therms or Ccf used, and whether the reading was actual or estimated. On a delivery ticket, find gallons delivered. For heat pumps and AC, look at kWh on your electric bill.',
    },
    {
      title: '4. Separate the fixed and per-unit charges',
      body: 'On a gas bill, note the fixed customer charge, the supply or commodity price per therm, and the delivery price per therm[^2]. On a delivery ticket, note the price per gallon and any separate fees.',
    },
    {
      title: '5. Look for adjustments and fees',
      body: 'Find any gas cost adjustment, riders, small-delivery or emergency fees, tank rental, or service plan charges. Ask about any line you do not recognize.',
    },
    {
      title: '6. Compare to the same season last year',
      body: 'Compare usage for the same months last year. If you used more, check whether the winter was colder using degree days[^7]. If you used about the same but paid more, the price changed.',
    },
  ],
  reviewTips: [
    {
      title: 'Track price per unit over time',
      body: 'Keep a simple log of each delivery or bill: date, gallons or therms, price per unit, and total. For delivered fuels, you can compare your price with EIA\'s weekly residential heating oil and propane prices, which are published during the heating season (keeping in mind those exclude taxes)[^6].',
    },
    {
      title: 'Use degree days to judge your usage',
      body: 'Dividing your fuel use by the heating degree days in that period gives a rough "usage per degree day" figure that you can compare across winters[^7]. If it goes up a lot in a similar winter, something about your home or equipment may have changed.',
    },
    {
      title: 'Ask how your thermostat settings affect use',
      body: 'DOE says you can reduce heating bills by about 1% for each 1°F you set the thermostat back for an eight-hour period, and that setbacks while asleep or away can cut heating and cooling costs by as much as 10%[^10]. Actual results depend on your home and system, so check your own usage after any change.',
    },
    {
      title: 'Keep up with maintenance',
      body: 'DOE recommends regular professional inspections and filter changes to keep systems running as designed[^10]. Keep receipts and service records; they help when comparing contractors or diagnosing a sudden jump in usage.',
    },
    {
      title: 'Read delivered-fuel contracts carefully',
      body: 'Before signing a fixed-price, capped-price, or automatic delivery plan, check the price terms, any enrollment fees, minimum purchase amounts, cancellation terms, and what happens when the contract ends.',
    },
    {
      title: 'Know who regulates storage tanks',
      body: 'EPA says tanks that store heating oil for use on the same property are excluded from federal underground storage tank rules, but state or local agencies may regulate them[^11]. If you have an older oil tank, check your state\'s rules.',
    },
    {
      title: 'Look into heating assistance if bills are hard to pay',
      body: 'The federal LIHEAP program funds state programs that help eligible households with heating and cooling costs[^14]. Many gas utilities also offer yearly budget plans to spread costs more evenly[^2]. Application windows vary by state.',
    },
  ],
  relatedTools: ['heating-comparison', 'heat-pump-cost', 'ac-cost'],
  comparisons: [
    {
      title: 'Cost per unit of heat, not per gallon or therm',
      body: 'Different fuels are sold in different units, so compare the cost of the heat they deliver. Convert each fuel to cost per million Btu, then adjust for your equipment\'s efficiency (AFUE for furnaces and boilers[^9], or the heat pump\'s rating). The [heating comparison tool](/tools) (coming soon) handles the unit conversions.',
    },
    {
      title: 'Your gas supply price vs. the utility\'s default price',
      body: 'If your state has a gas customer choice program, compare the marketer\'s price per therm with your utility\'s default supply price, including how long the price is fixed and any fees. Delivery charges from the utility stay the same either way[^3].',
    },
    {
      title: 'Dealer vs. dealer for delivered fuels',
      body: 'For heating oil and propane, compare price per gallon on the same day, plus delivery fees, minimum delivery size, tank rental, and plan terms. Prices can vary a lot between areas and dealers[^5].',
    },
    {
      title: 'This winter vs. last winter, adjusted for weather',
      body: 'Compare fuel use per heating degree day for each winter[^7]. This separates "it was colder" from "something changed," such as a new leak, a failing part, or different household habits.',
    },
  ],
  faqs: [
    {
      q: 'Why do I pay a gas bill in summer when my heat is off?',
      a: 'Most gas bills include a fixed customer or service charge that applies every month, regardless of use. If you also use gas for hot water, cooking, or a dryer, those uses continue year-round.',
    },
    {
      q: 'What is a therm?',
      a: 'A therm is a unit of heat energy used to measure natural gas on many bills. Some utilities bill in hundreds of cubic feet (Ccf) instead and convert to therms using a factor shown on the bill. See the [glossary](/glossary).',
    },
    {
      q: 'What does AFUE mean?',
      a: 'Annual Fuel Utilization Efficiency. It is roughly the share of a furnace or boiler\'s fuel that becomes heat in your home instead of being lost. ENERGY STAR gas furnaces must be rated 95% or higher in the southern U.S. and 97% or higher in the northern U.S.; oil furnaces must be 87% or higher[^9].',
    },
    {
      q: 'Why are heating oil prices so unpredictable?',
      a: 'Heating oil prices generally follow crude oil prices, rise with winter demand, and can spike during cold snaps when stored supplies drop quickly. Local competition and delivery costs also matter[^5].',
    },
    {
      q: 'Do heat pumps work in cold climates?',
      a: 'ENERGY STAR says many newer certified air-source heat pumps can provide space heating even in the coldest climates[^8]. Performance depends on the model, sizing, and the home, so ask an installer to size the system with a Manual J load calculation[^8][^10].',
    },
    {
      q: 'Will a heat pump raise my electric bill?',
      a: 'If you switch from gas, oil, or propane to a heat pump, your electric bill will usually go up while your other fuel bill goes down or goes away. Whether total costs go up or down depends on local fuel and electricity prices, equipment efficiency, and your climate. Use the [heat pump cost tool](/tools) (coming soon) to compare.',
    },
    {
      q: 'How common is heating oil, and does where I live matter?',
      a: 'EIA reports that about 4.79 million U.S. households used heating oil as their main heating fuel in winter 2023 to 2024, and about 82% of them were in the Northeast[^4]. Outside that region, fewer dealers may serve your area, which can affect prices[^5].',
    },
    {
      q: 'Where can I get help with heating costs?',
      a: 'LIHEAP funds state programs that help eligible households pay heating and cooling bills[^14]. Gas utilities may offer budget plans[^2], and some oil and propane dealers offer payment plans. Contact your state LIHEAP office for application dates.',
    },
  ],
  stateNotes: {
    summary:
      'Which fuels are common depends heavily on region: heating oil is concentrated in the Northeast[^4], electric heat is common in the South[^1], and gas customer choice programs exist only in some states and service areas[^3]. Winter shutoff protections, assistance program dates, and rules for oil tanks[^11] are set at the state or local level.',
    whoRegulates:
      'Natural gas utilities are regulated by state public utility commissions, which approve delivery rates and consumer protections[^13]. Gas marketers in choice programs and heating oil and propane dealers are generally not rate-regulated, though state consumer protection, weights-and-measures, and licensing rules may apply. Heat pumps and air conditioners fall under your electric utility\'s regulator.',
  },
  sources: [
    {
      title: 'Winter Fuels Outlook 2026–27',
      publisher: 'U.S. Energy Information Administration, Short-Term Energy Outlook',
      url: 'https://www.eia.gov/outlooks/steo/report/perspectives/2026/10-winterfuels/article.php',
      accessed: '2026-10-13',
      note: 'Main heating fuel shares from the U.S. Census Bureau American Community Survey, as reported by EIA.',
    },
    {
      title: 'Natural gas explained: Natural gas prices',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/natural-gas/prices.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Natural gas explained: Natural gas customer choice programs',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/natural-gas/customer-choice-programs.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Heating oil explained: Use of heating oil',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/heating-oil/use-of-heating-oil.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Heating oil explained: Factors affecting heating oil prices',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/heating-oil/factors-affecting-heating-oil-prices.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Heating Oil and Propane Update',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/petroleum/heatingoilpropane/',
      accessed: '2026-10-13',
    },
    {
      title: 'Units and calculators explained: Degree days',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/units-and-calculators/degree-days.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Air Source Heat Pumps',
      publisher: 'ENERGY STAR (U.S. EPA and U.S. DOE)',
      url: 'https://www.energystar.gov/products/air_source_heat_pumps',
      accessed: '2026-10-13',
    },
    {
      title: 'Furnaces Key Product Criteria',
      publisher: 'ENERGY STAR (U.S. EPA and U.S. DOE)',
      url: 'https://www.energystar.gov/products/furnaces/key_product_criteria',
      accessed: '2026-10-13',
    },
    {
      title: 'Consumer Guide to Home Heating and Cooling (DOE/EE-2464)',
      publisher: 'U.S. Department of Energy, Energy Saver',
      url: 'https://www.energy.gov/sites/default/files/2021-08/ES-HomeHeatingandCooling_081221.pdf',
      accessed: '2026-10-13',
    },
    {
      title: 'Frequent Questions About Underground Storage Tanks',
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/ust/frequent-questions-about-underground-storage-tanks',
      accessed: '2026-10-13',
    },
    {
      title: 'Use of energy explained: Electricity use in homes',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Regulatory Commissions',
      publisher: 'National Association of Regulatory Utility Commissioners (NARUC)',
      url: 'https://www.naruc.org/about-naruc/our-mission/regulatory-commissions/',
      accessed: '2026-10-13',
    },
    {
      title: 'Low Income Home Energy Assistance Program (LIHEAP)',
      publisher: 'U.S. Department of Health and Human Services, Administration for Children and Families',
      url: 'https://acf.gov/ocs/programs-services/liheap',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
