import type { BillCategory } from '../types'

export const transportation: BillCategory = {
  slug: 'transportation',
  name: 'Transportation',
  shortName: 'Transportation',
  tagline:
    'Car payments, fuel and charging, registration, tolls, transit and upkeep: the many small bills that keep you moving.',
  intro: [
    'Getting around rarely shows up as one bill. If you drive, you may have a loan or lease payment, fuel or charging costs, insurance, registration, tolls, parking and repairs, all arriving at different times. If you ride transit, you may pay for passes or fares, and sometimes parking at a station. Because these costs are spread out, they are easy to underestimate.',
    'Some transportation costs are fixed for months or years, like a loan payment. Others swing with your habits and the seasons, like fuel, charging and tolls. How you drive and how well you maintain your vehicle can affect what you spend on fuel.[^4][^5]',
    'This guide explains how the main transportation bills work, what to look for in a car loan or lease contract, and how to review your costs. It is general education, not financial or legal advice. Registration fees, toll systems and many consumer protections vary by state.',
  ],
  howItWorks: {
    summary:
      'Transportation costs fall into two groups: **fixed costs** you pay no matter how much you drive (loan or lease payments, insurance, registration) and **variable costs** that rise with use (fuel or charging, tolls, maintenance, transit fares).',
    points: [
      {
        title: 'Car loans',
        body: 'You borrow money from a bank, credit union, finance company or the dealer and repay it with interest over a set number of months. The total you pay depends on the car price, the APR and the loan length.[^1]',
      },
      {
        title: 'Leases',
        body: "With a lease, you pay to drive the car, not to buy it. Payments cover the car's expected loss of value during the lease plus a rent charge, taxes and fees. Leases usually have mileage limits, with a charge if you go over.[^1]",
      },
      {
        title: 'Fuel and charging',
        body: 'Gas costs depend on fuel prices, your vehicle and how you drive.[^4] For electric vehicles, home charging cost depends on your electricity price and your vehicle\'s efficiency, and some utilities offer time-of-use rates that can lower charging costs.[^6]',
      },
      {
        title: 'Registration and fees',
        body: 'States charge fees to register and title a vehicle. How these fees are calculated, and how often you pay, is set by each state.',
      },
      {
        title: 'Tolls and parking',
        body: 'Toll roads, bridges and express lanes charge drivers to use them, often through an electronic account. Toll programs are run by state and regional agencies, and rates and billing rules vary.',
      },
      {
        title: 'Transit and commuter benefits',
        body: 'Transit riders pay fares or buy passes. Some employers offer **qualified transportation benefits**, which can cover transit passes or qualified parking and may be excluded from your taxable wages, within limits.[^8]',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Loan payment',
      description:
        'Your monthly car loan payment, covering principal and interest. Longer loans can lower the monthly payment but usually raise the total cost.[^1]',
    },
    {
      name: 'Lease payment',
      description:
        'Your monthly lease payment, based on expected depreciation, a rent charge, taxes and fees.[^1]',
    },
    {
      name: 'Excess mileage or lease-end fees',
      description:
        'A charge if you drive more than the lease allows, plus any fees due when you return the car.[^1]',
    },
    {
      name: 'Dealer add-ons',
      description:
        'Optional extras such as service contracts, gap coverage or window etching. They are not free, and you can say no.[^1]',
    },
    {
      name: 'Fuel',
      description:
        'Gasoline or diesel costs, which depend on fuel prices, your vehicle and your driving habits.[^4]',
    },
    {
      name: 'Home and public charging',
      description:
        'For EVs, the cost of electricity at home or at public chargers. Home charging cost depends on your electricity rate and how efficient your vehicle is.[^6]',
    },
    {
      name: 'Registration and title fees',
      description: 'State fees to register and title your vehicle. Amounts and schedules vary by state.',
    },
    {
      name: 'Tolls',
      description:
        'Charges for using toll roads, bridges or express lanes, usually billed to an electronic toll account or by mail.',
    },
    {
      name: 'Maintenance and repairs',
      description:
        'Oil changes, tires, brakes and other upkeep. Keeping records matters, because a warranty company may ask for them.[^3]',
    },
    {
      name: 'Transit fares and passes',
      description:
        'Bus, train or other transit costs. Some employers offer transit benefits that may be excluded from taxable wages.[^8]',
    },
  ],
  whyCostsRise: [
    {
      title: 'Fuel and electricity prices change',
      body: "Gas prices and electricity rates change over time. Since EV charging cost is your electricity price times your vehicle's energy use, a rate change shows up directly in your cost per mile.[^6]",
    },
    {
      title: 'Driving habits',
      body: 'Speeding, rapid acceleration and hard braking waste gas, and fuel economy usually drops quickly at higher highway speeds.[^4] Extra weight and roof-top cargo can also lower fuel economy.[^4]',
    },
    {
      title: 'Skipped maintenance',
      body: 'Under-inflated tires and the wrong grade of motor oil can lower gas mileage.[^5] A check engine light can signal a problem that hurts fuel economy or leads to costlier repairs later.[^5]',
    },
    {
      title: 'Longer loans and higher rates',
      body: 'A lower monthly payment can hide a longer loan or higher interest rate, which raises your overall cost.[^1]',
    },
    {
      title: 'Insurance premiums',
      body: "Auto insurance prices can rise with repair costs, claims, and changes to your driving record or vehicle.[^9] See our [insurance guide](/categories/insurance).",
    },
    {
      title: 'Add-ons rolled into the loan',
      body: 'Service contracts, gap coverage and other add-ons increase what you finance. They are optional, and it is OK to say no and to ask the price of each one.[^1]',
    },
  ],
  readingYourBill: [
    {
      title: '1. Start with the out-the-door price',
      body: 'Before talking financing, get the total price of the car in writing, including taxes and fees.[^1] This is the number your loan is built on.',
    },
    {
      title: '2. Find the APR, term and amount financed',
      body: 'On your loan contract, look for the **annual percentage rate (APR)**, the number of months, and the amount financed. Together these set your payment and total cost.[^1]',
    },
    {
      title: '3. Check every add-on line',
      body: 'Look for service contracts, gap coverage, credit insurance or other extras. Make sure you agreed to each one and know its price.[^1]',
    },
    {
      title: '4. Compare the contract to what you were promised',
      body: 'Before signing, check that the price and financing terms match what the dealer sent you. If they do not match, ask questions and be ready to walk away.[^1]',
    },
    {
      title: '5. For a lease, find the mileage allowance',
      body: 'Look for the yearly mileage limit and the charge per mile over it, plus any fees due at signing and at lease end.[^1]',
    },
    {
      title: '6. Review your monthly loan statement',
      body: 'Check that each payment was received and applied, and track your remaining balance. The CFPB offers worksheets to help manage an auto loan.[^2]',
    },
    {
      title: '7. Check toll and charging statements',
      body: 'Review your toll account and charging app for trips you do not recognize. If you get an unexpected text saying you owe tolls, do not click the link; contact the toll agency using a number or website you know is real.[^7]',
    },
  ],
  reviewTips: [
    {
      title: 'Look at total cost, not just the monthly payment',
      body: 'The total you pay depends on the car price, the APR and the loan length. The longer the loan, the more expensive it usually is overall.[^1] Our [car loan calculator](/tools) (coming soon) can show the difference.',
    },
    {
      title: 'Shop for financing before the dealer',
      body: 'Getting pre-approved tells you your APR, loan length and maximum amount, which gives you a benchmark when you negotiate.[^1] You can negotiate loan terms too.[^2]',
    },
    {
      title: 'Keep tires inflated and use the right oil',
      body: 'Use the tire pressure on your door-jamb sticker or owner\'s manual, not the maximum on the tire. Use the motor oil grade the manufacturer recommends.[^5]',
    },
    {
      title: 'Drive smoothly',
      body: 'Gentle acceleration and braking, steady speeds and removing unused roof racks can help fuel economy.[^4]',
    },
    {
      title: 'Keep maintenance records',
      body: 'You do not have to use the dealer for routine maintenance to keep your warranty, but keep records of oil changes, tire rotations and other work in case the warranty company asks.[^3]',
    },
    {
      title: 'Check your commuter benefits',
      body: 'Ask your employer whether it offers transit or parking benefits. These may be excluded from taxable wages, up to limits set by the IRS.[^8]',
    },
    {
      title: 'Estimate EV charging costs',
      body: 'Multiply your electricity price by your vehicle\'s energy use per mile to estimate charging cost per mile.[^6] Our [EV charging calculator](/tools) (coming soon) can help.',
    },
  ],
  relatedTools: ['car-loan', 'ev-charging', 'household-planner'],
  comparisons: [
    {
      title: 'Loan offers',
      body: 'Compare the APR, loan length and total cost from a bank, credit union and the dealer. Dealers typically profit from arranging financing, so their offer may not be the best one available.[^1]',
    },
    {
      title: 'Buying vs. leasing',
      body: 'Compare the total you would pay over the same period, including lease fees, mileage limits and charges at lease end, against the loan payments and the value you would own.[^1]',
    },
    {
      title: 'Gas vs. electric fuel costs',
      body: "Compare cost per mile: fuel price divided by miles per gallon for gas, and electricity price times energy used per mile for an EV.[^6] Use your own local prices, not national averages.",
    },
    {
      title: 'Service contracts vs. existing warranty',
      body: 'Before buying a service contract, compare it to the manufacturer\'s warranty. A contract that overlaps with coverage you already have may add little value.[^3]',
    },
  ],
  faqs: [
    {
      q: 'Is a lower monthly car payment always a better deal?',
      a: 'Not always. Lower monthly payments often come with longer loans or higher rates, which can make the deal more expensive overall.[^1]',
    },
    {
      q: 'Do I have to buy add-ons like gap coverage or a service contract?',
      a: "No. Add-ons cost extra, and it is OK to say no and to ask the price. Check your contract to make sure it only includes the extras you agreed to.[^1]",
    },
    {
      q: 'Do I have to get maintenance at the dealer to keep my warranty?',
      a: 'No. A dealer cannot deny warranty coverage just because someone else did routine maintenance. There are exceptions when the warranty provides free parts or service, so read your warranty, and keep your records.[^3]',
    },
    {
      q: 'Is an extended warranty the same as a warranty?',
      a: 'No. A so-called extended warranty is usually a **service contract**, a separate product you buy that may overlap with your existing warranty.[^3]',
    },
    {
      q: 'I got a text saying I owe unpaid tolls. What should I do?',
      a: 'It may be a scam. Do not click links or reply. Check with the toll agency using a phone number or website you know is real, then report and delete the text.[^7]',
    },
    {
      q: 'How much does it cost to charge an EV at home?',
      a: "It depends on your electricity rate and your vehicle's efficiency. Time-of-use rates from some utilities may lower the cost.[^6] Plug your own numbers into our [EV charging calculator](/tools) (coming soon).",
    },
    {
      q: 'Can my employer help with commuting costs?',
      a: 'Some employers offer qualified transportation benefits for transit passes or parking, which may be excluded from your taxable wages up to set limits.[^8] Ask your HR or benefits office.',
    },
  ],
  stateNotes: {
    summary:
      "Many transportation costs are set by states and local agencies. Registration and title fees, vehicle inspections, sales tax on vehicles, toll rates and toll billing rules, and minimum auto insurance requirements all vary by state. Some states also add protections for car buyers beyond federal rules.",
    whoRegulates:
      "Your state **motor vehicle agency** handles registration and titles. Toll roads are run by state or regional toll authorities. The **Federal Trade Commission (FTC)** and **Consumer Financial Protection Bureau (CFPB)** oversee federal rules on car sales and auto lending, and your state attorney general handles many consumer complaints.[^1][^2] Auto insurance is regulated by your state insurance department.",
  },
  sources: [
    {
      title: 'Financing or Leasing a Car',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/financing-or-leasing-car',
      accessed: '2026-10-13',
    },
    {
      title: 'Auto loans',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/consumer-tools/auto-loans/',
      accessed: '2026-10-13',
    },
    {
      title: 'Auto Warranties and Auto Service Contracts',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/auto-warranties-and-auto-service-contracts',
      accessed: '2026-10-13',
    },
    {
      title: 'Driving More Efficiently',
      publisher: 'U.S. Department of Energy, fueleconomy.gov',
      url: 'https://www.fueleconomy.gov/feg/driveHabits.jsp',
      accessed: '2026-10-13',
    },
    {
      title: 'Keeping Your Vehicle in Shape',
      publisher: 'U.S. Department of Energy, fueleconomy.gov',
      url: 'https://www.fueleconomy.gov/feg/maintain.jsp',
      accessed: '2026-10-13',
    },
    {
      title: 'Charging Electric Vehicles at Home',
      publisher: 'U.S. Department of Energy, Alternative Fuels Data Center',
      url: 'https://afdc.energy.gov/fuels/electricity-charging-home',
      accessed: '2026-10-13',
    },
    {
      title: "Got a text about unpaid tolls? It's probably a scam",
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts/2025/01/got-text-about-unpaid-tolls-its-probably-scam',
      accessed: '2026-10-13',
    },
    {
      title: "Publication 15-B, Employer's Tax Guide to Fringe Benefits",
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/publications/p15b',
      accessed: '2026-10-13',
      note: 'Qualified transportation benefits; limits are updated annually.',
    },
    {
      title: 'Why Are My Insurance Premiums Increasing?',
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/why-are-my-insurance-premiums-increasing',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
