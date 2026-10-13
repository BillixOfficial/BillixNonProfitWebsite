import type { BillCategory } from '../types'

export const electricity: BillCategory = {
  slug: 'electricity',
  name: 'Electricity',
  shortName: 'Electricity',
  tagline:
    'What you pay for the power itself, what you pay to get it delivered, and how to read every line in between.',
  intro: [
    'Your electric bill is one of the few bills that changes every single month. Part of it depends on how much electricity your home used. Part of it depends on the price your utility charges, which can shift with the seasons, with fuel costs, and with decisions made by your state regulators. A few lines stay the same no matter what you use.',
    'Most bills split the cost into two big pieces. **Supply** (sometimes called generation) is the electricity itself. **Delivery** is the cost of moving it over power lines to your home and keeping that grid working. Nationally, the U.S. Energy Information Administration (EIA) says the cost of generating electricity is the largest single part of the price[^1], but on many household bills the delivery section is large too, and it has been growing as utilities spend more on local wires and equipment[^3][^4].',
    'This guide walks through how electric bills work, the charges you are likely to see, why costs go up, and a step-by-step way to read your own bill. Rules and rates vary a lot by state and by utility, so treat this as a map, then check the details on your own bill and your utility\'s published rate schedule. New terms are explained in the [glossary](/glossary).',
  ],
  howItWorks: {
    summary:
      'Your meter counts the electricity your home uses in kilowatt-hours (kWh). Each billing period, your utility multiplies that usage by per-kWh rates, adds any fixed monthly charges, then adds approved riders, taxes, and fees. Who sets those rates, and whether you can choose your supplier, depends on where you live.',
    points: [
      {
        title: 'You pay for kilowatt-hours',
        body: 'A **kilowatt-hour (kWh)** is the standard unit of electricity use. Running a 1,000-watt appliance for one hour uses 1 kWh. EIA estimates the average U.S. household uses about 10,500 kWh a year[^2], but use varies widely by region, home size, and climate. Your bill shows how many kWh you used during the billing period.',
      },
      {
        title: 'Supply and delivery are priced separately',
        body: 'Electricity prices reflect the cost to build, finance, maintain, and operate power plants and the grid, including transmission and distribution lines[^1]. Many bills list **supply** (the power) and **delivery** (moving it to you) in separate sections. Even when they are bundled into one rate, both costs are in there.',
      },
      {
        title: 'Some states let you pick a supplier',
        body: 'In states with residential retail choice, you can buy electricity from a competing supplier while your local utility still delivers it[^6]. In those states, your bill may show a supplier name and a separate supply rate. In most other states, one utility handles both, and there is no supplier to switch to.',
      },
      {
        title: 'Rates are usually set by a regulator',
        body: 'For investor-owned utilities, a state public utility commission reviews and approves rates. Some states regulate generation and delivery prices fully, while others leave generation prices to the market and regulate only transmission and distribution[^1]. City-owned utilities and electric cooperatives are usually overseen by a local board instead.',
      },
      {
        title: 'Most people pay seasonal averages, not minute-by-minute prices',
        body: 'The cost to supply electricity changes minute by minute and is usually highest in summer afternoons and early evenings. Most customers pay rates based on the seasonal average cost, so they do not see those swings directly. Some utilities offer **time-of-day** pricing that charges more at peak hours and less at other times[^1].',
      },
      {
        title: 'Your meter may report usage automatically',
        body: 'Smart meters send readings to the utility without a visit. EIA data show about 123 million of roughly 147 million U.S. residential meters were advanced (smart) meters in 2024[^5]. Homes without one may still get bills based on estimated readings from time to time.',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Customer charge (or basic service charge)',
      description:
        'A fixed monthly amount you pay even if you use no electricity. It covers costs like meters, billing, and connecting your home. The amount and the name vary by utility.',
    },
    {
      name: 'Energy or generation charge (supply)',
      description:
        'The price of the electricity itself, billed per kWh. If you buy from a competing supplier, this line may show the supplier\'s rate instead of the utility\'s.',
    },
    {
      name: 'Distribution charge (delivery)',
      description:
        'The cost of the local poles, wires, transformers, and substations that bring power to your street and home. Usually billed per kWh, sometimes with part of it in the fixed customer charge.',
    },
    {
      name: 'Transmission charge',
      description:
        'The cost of high-voltage lines that carry power long distances from power plants to local grids. Some bills fold this into delivery, others into supply, and some show it on its own line.',
    },
    {
      name: 'Fuel or purchased-power adjustment',
      description:
        'A per-kWh charge that passes through changes in what the utility pays for fuel or wholesale power. It can go up or down, and in many states it can change between full rate cases.',
    },
    {
      name: 'Riders and surcharges',
      description:
        'Separate, regulator-approved charges that recover specific costs, such as storm recovery, grid upgrades, energy-efficiency programs, or environmental compliance. Names vary widely by utility.',
    },
    {
      name: 'Taxes and franchise fees',
      description:
        'State and local taxes, plus fees some cities charge utilities for using public streets and rights-of-way. These are often a percentage of your other charges.',
    },
    {
      name: 'Late fees and deposits',
      description:
        'Charges for paying after the due date, or a security deposit for new accounts. Rules about these are set by your state commission or local utility board.',
    },
  ],
  whyCostsRise: [
    {
      title: 'You used more, often because of the weather',
      body: 'Air conditioning, space heating, and water heating are the three biggest uses of electricity in U.S. homes, and their share of annual use can change from year to year with the weather[^2]. A hot summer or a cold winter can raise your kWh even if your habits stay the same.',
    },
    {
      title: 'Seasonal and peak pricing',
      body: 'Electricity is usually most expensive to supply in summer, when total demand is highest[^1]. Some utilities charge higher rates in summer months or at peak hours, so the same kWh can cost more at different times of year.',
    },
    {
      title: 'Fuel and wholesale power costs',
      body: 'Fuel prices, especially for natural gas, affect the cost of generating electricity[^1]. Utilities often pass these changes through a fuel or purchased-power adjustment, which can raise or lower your bill without a new base rate.',
    },
    {
      title: 'Grid spending on wires and equipment',
      body: 'EIA reports that utility capital spending on distribution systems rose 160% from 2003 to 2023, measured in inflation-adjusted dollars, as utilities replaced aging equipment and upgraded local grids to withstand extreme weather[^3]. EIA has also reported that utility spending on distribution surpassed spending on transmission and production, and that retail electricity prices have risen faster than inflation since 2022[^4]. These costs usually show up in delivery charges.',
    },
    {
      title: 'Approved rate increases',
      body: 'When a utility wants to raise its base rates, it typically files a request with the state commission, which reviews it and can approve, reduce, or reject it. The process, timeline, and customer notice requirements vary by state. Look for notices printed on or included with your bill.',
    },
    {
      title: 'A longer billing period or a catch-up bill',
      body: 'Billing periods are usually about a month but can run several days longer or shorter. A bill that follows several estimated readings can also be larger if earlier estimates were too low. See the reading steps below for how to spot both.',
    },
  ],
  readingYourBill: [
    {
      title: '1. Confirm the basics',
      body: 'Check your name, service address, account number, and the **service period** dates. Count the days in the period. A 33-day bill and a 28-day bill are not directly comparable.',
    },
    {
      title: '2. Find your usage in kWh',
      body: 'Look for the meter readings and total kWh used. If there is a usage history chart, compare this month with the **same month last year**, not just last month, since weather drives much of the change[^2].',
    },
    {
      title: '3. Check whether the reading was actual or estimated',
      body: 'Look for a code like "E," "Est.," or the word "Estimated" next to the reading. Texas, for example, requires estimated bills to say "Estimated" prominently and requires an actual reading at least every third month[^7]. Rules differ by state.',
    },
    {
      title: '4. Separate supply from delivery',
      body: 'Find the supply (or generation) section and the delivery section. Note the per-kWh rate for each and the fixed customer charge. If a supplier is named, that is who sets your supply price.',
    },
    {
      title: '5. Scan the riders and adjustments',
      body: 'List every line that is not supply, delivery, or the customer charge: fuel adjustments, riders, surcharges, and credits. If a line changed a lot from last month, note it and look it up in your utility\'s rate schedule or ask the utility.',
    },
    {
      title: '6. Review taxes, fees, and the total',
      body: 'Check taxes and fees, then the total due, the due date, and any past-due balance or late fee. Make sure payments you made show up as received.',
    },
    {
      title: '7. Read the messages and inserts',
      body: 'Rate change notices, new rider announcements, and assistance program information often appear in the message area or on a separate insert. These are easy to miss and can explain a change before you see it in the numbers.',
    },
  ],
  reviewTips: [
    {
      title: 'Track cost per day and kWh per day',
      body: 'Divide the total and the kWh by the number of days in the billing period. This takes billing-period length out of the picture and makes month-to-month comparisons fairer. The [electricity cost calculator](/tools/electricity-cost) can help with the math.',
    },
    {
      title: 'Compare against the same season',
      body: 'Because heating and cooling drive so much of home electricity use[^2], comparing this January to last January tells you more than comparing January to October.',
    },
    {
      title: 'Ask for your rate schedule',
      body: 'Every regulated utility publishes its rates, often called a tariff. Ask which rate plan your account is on, and check that the per-kWh prices and fixed charges on your bill match it.',
    },
    {
      title: 'Know your billing protections',
      body: 'States set limits on catch-up bills and on meter accuracy. For example, Florida limits back-billing for utility mistakes to 12 months[^8], Pennsylvania limits make-up bills to service within the past 4 years and requires the utility to try to spread payment out[^9], and Texas requires a free meter test on request[^10]. Ask your utility or state commission what applies to you.',
    },
    {
      title: 'Learn how thermostat settings affect use',
      body: 'The U.S. Department of Energy says setting your thermostat back while you are asleep or away can reduce heating and cooling costs by as much as 10%, depending on your home and system[^11]. Results vary, so watch your own kWh after any change.',
    },
    {
      title: 'Look into assistance programs if bills are hard to pay',
      body: 'The federal Low Income Home Energy Assistance Program (LIHEAP) funds state programs that help eligible households with home energy bills[^13]. Many utilities also offer budget billing or payment plans. Eligibility and timing vary by state.',
    },
    {
      title: 'If something still looks wrong, escalate in order',
      body: 'Contact your utility first and ask for an explanation in writing. If that does not resolve it, you can usually file a complaint with your state utility commission. NARUC lists every state commission[^12].',
    },
  ],
  relatedTools: ['electricity-cost', 'appliance-cost', 'ac-cost', 'ev-charging', 'solar-payback'],
  comparisons: [
    {
      title: 'Your supply rate vs. your utility\'s default rate',
      body: 'In retail-choice states, compare the per-kWh supply price on your bill with the default supply price your utility charges customers who have not picked a supplier. Check how long any fixed rate lasts, what happens when it ends, and whether there are cancellation fees. Remember that delivery charges stay the same regardless of supplier[^6].',
    },
    {
      title: 'Standard rate vs. time-of-day rate',
      body: 'If your utility offers time-of-day pricing[^1], compare it using your own usage pattern. Look at how much of your use happens during peak hours and whether you can shift things like laundry or EV charging. Many utilities offer an online comparison based on your past usage.',
    },
    {
      title: 'This year vs. last year, per day',
      body: 'Compare kWh per day and cost per day for the same billing month across two years. If kWh per day is similar but cost is higher, the price changed. If kWh per day is higher, look at weather and household changes first.',
    },
    {
      title: 'Appliance-by-appliance running costs',
      body: 'Compare what different appliances cost to run by multiplying their wattage by hours of use and your all-in price per kWh. The [appliance cost calculator](/tools/electricity-cost#appliance) does this for you. It helps you see which uses matter most in your home before making any changes.',
    },
  ],
  faqs: [
    {
      q: 'Why is my delivery charge so high when I barely used any electricity?',
      a: 'Part of delivery is often a fixed customer charge that does not change with usage, and delivery rates also recover the cost of local grid equipment. When usage is low, those fixed and grid costs make up a bigger share of the bill.',
    },
    {
      q: 'What is a kilowatt-hour?',
      a: 'It is the unit your utility uses to measure electricity. One kilowatt-hour equals using 1,000 watts for one hour. Your bill multiplies your kWh by per-kWh rates. See the [glossary](/glossary) for more terms.',
    },
    {
      q: 'What does "estimated reading" mean on my bill?',
      a: 'The utility did not get an actual meter reading and billed you based on an estimate, often from your past usage. The difference is corrected when an actual reading is taken, which can make a later bill higher or lower. Rules on how often estimates are allowed vary by state[^7].',
    },
    {
      q: 'Can my utility bill me for months of usage it missed?',
      a: 'Often yes, but states set limits. Florida limits back-billing for utility mistakes to 12 months[^8], and Pennsylvania limits make-up bills to service from the past 4 years, with an option to pay over time[^9]. Check with your state utility commission for your rules.',
    },
    {
      q: 'Is my smart meter accurate?',
      a: 'Meters are tested to accuracy standards, and many states let you request a test. In Texas, for example, utilities must test a customer\'s meter at no charge on request[^10]. Ask your utility how to request one where you live.',
    },
    {
      q: 'Should I switch electricity suppliers?',
      a: 'This guide does not recommend specific suppliers. If you live in a retail-choice state, switching changes only the supply part of your bill; your utility still delivers the power[^6]. Compare the full terms, including contract length, rate changes after any introductory period, and cancellation fees.',
    },
    {
      q: 'Why did my bill go up when my usage did not?',
      a: 'The price likely changed. Common reasons include a fuel or purchased-power adjustment, a new or higher rider, a seasonal rate, or an approved base rate increase. Compare the per-kWh rates and each line item with last year\'s bill.',
    },
    {
      q: 'Where can I get help paying my electric bill?',
      a: 'LIHEAP funds state programs that help eligible low-income households with energy costs[^13]. Your utility may also offer payment plans, budget billing, or its own assistance programs. Contact your state LIHEAP office or your utility to ask.',
    },
  ],
  stateNotes: {
    summary:
      'Almost everything about your electric bill varies by state and utility: whether you can choose a supplier[^6], how rates are structured, what riders appear, how often estimated bills are allowed[^7], how far back a utility can bill for missed usage[^8][^9], and what protections exist for shutoffs and payment plans. Labels like "supply" and "delivery" are not standardized, so the same cost can sit in a different section from one utility to the next.',
    whoRegulates:
      'Investor-owned electric utilities are regulated by state public utility or public service commissions, which approve rates and set consumer protection rules[^12]. Municipal utilities are usually overseen by a city council or utility board, and electric cooperatives by a member-elected board, so billing complaints about those utilities often go to that local body rather than the state commission.',
  },
  sources: [
    {
      title: 'Electricity explained: Factors affecting electricity prices',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php',
      accessed: '2026-10-13',
    },
    {
      title: 'Use of energy explained: Electricity use in homes',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php',
      accessed: '2026-10-13',
      note: 'End-use shares from the 2020 Residential Energy Consumption Survey.',
    },
    {
      title: 'Grid infrastructure investments drive increase in utility spending over last two decades',
      publisher: 'U.S. Energy Information Administration, Today in Energy',
      url: 'https://www.eia.gov/todayinenergy/detail.php?id=63724',
      accessed: '2026-10-13',
    },
    {
      title: 'U.S. electricity prices continue steady increase',
      publisher: 'U.S. Energy Information Administration, Today in Energy',
      url: 'https://www.eia.gov/todayinenergy/detail.php?id=65284',
      accessed: '2026-10-13',
    },
    {
      title: 'Electric Power Annual, Table 10.5: Advanced Metering Count by Technology Type',
      publisher: 'U.S. Energy Information Administration',
      url: 'https://www.eia.gov/electricity/annual/html/epa_10_05.html',
      accessed: '2026-10-13',
    },
    {
      title: 'Electricity residential retail choice participation has declined since 2014 peak',
      publisher: 'U.S. Energy Information Administration, Today in Energy',
      url: 'https://www.eia.gov/todayinenergy/detail.php?id=37452',
      accessed: '2026-10-13',
    },
    {
      title: '16 Tex. Admin. Code § 25.25: Issuance and Format of Bills',
      publisher: 'Legal Information Institute, Cornell Law School (Texas Administrative Code)',
      url: 'https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-25-25',
      accessed: '2026-10-13',
    },
    {
      title: 'Fla. Admin. Code R. 25-6.106: Underbillings and Overbillings of Energy',
      publisher: 'Legal Information Institute, Cornell Law School (Florida Administrative Code)',
      url: 'https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-25-6-106',
      accessed: '2026-10-13',
    },
    {
      title: '52 Pa. Code § 56.14: Previously unbilled public utility service',
      publisher: 'Pennsylvania Code and Bulletin',
      url: 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/052/chapter56/s56.14.html',
      accessed: '2026-10-13',
    },
    {
      title: '16 Tex. Admin. Code § 25.124: Meter Testing',
      publisher: 'Legal Information Institute, Cornell Law School (Texas Administrative Code)',
      url: 'https://www.law.cornell.edu/regulations/texas/16-Tex-Admin-Code-SS-25-124',
      accessed: '2026-10-13',
    },
    {
      title: 'Consumer Guide to Home Heating and Cooling (DOE/EE-2464)',
      publisher: 'U.S. Department of Energy, Energy Saver',
      url: 'https://www.energy.gov/sites/default/files/2021-08/ES-HomeHeatingandCooling_081221.pdf',
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
