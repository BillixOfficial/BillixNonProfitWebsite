import type { Article, Source } from './types'

/**
 * Billix guides and explainers. Educational only, not advice.
 * Every non-obvious number cites a source with [^n] (1-based index into `sources`).
 * All source URLs were checked on 2026-10-13.
 */

const ACCESSED = '2026-10-13'

const src = (title: string, publisher: string, url: string, note?: string): Source =>
  note ? { title, publisher, url, accessed: ACCESSED, note } : { title, publisher, url, accessed: ACCESSED }

const US = { scope: 'national', label: 'United States' } as const

export const articles: Article[] = [
  // ---------------------------------------------------------------------------
  // a. How to read your electric bill
  // ---------------------------------------------------------------------------
  {
    slug: 'how-to-read-your-electric-bill',
    title: 'How to Read Your Electric Bill, Line by Line',
    description:
      'A plain-language walk through a U.S. electric bill: usage, supply and delivery, fixed charges, riders and taxes, plus three checks that explain most surprise bills.',
    category: 'electricity',
    kind: 'guide',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: US,
    alicePose: 'holding-bill',
    relatedVideo: 'electric-bill-line-by-line',
    relatedTools: ['electricity-cost', 'appliance-cost'],
    keyTakeaways: [
      'Most electric bills have three parts: how much you used (in kWh), what you are charged for that use, and fixed monthly charges, riders and taxes.',
      'In 2025 the average U.S. home used about 874 kWh a month and paid about $151, but averages hide big differences between states.',
      'When a bill jumps, three checks explain a lot: compare with the same month last year, look for a rate change, and look for an estimated reading.',
      'Your utility\'s rate schedule (tariff) is public, and your state utility commission handles complaints that the utility cannot resolve.',
    ],
    sections: [
      {
        id: 'start-with-the-summary',
        heading: 'Start with the summary box',
        blocks: [
          {
            type: 'p',
            text:
              'Grab your most recent bill, paper or PDF. Before reading any line items, find four things, usually near the top: the **amount due**, the **due date**, the **service period** (the dates the bill covers), and the **number of days** in that period. Those last two matter more than most people think, because a longer billing period means more days of use on the same bill.',
          },
          {
            type: 'p',
            text:
              'For context, the U.S. Energy Information Administration (EIA) reports that the average residential customer used **874 kWh a month** in 2025 and paid an average bill of about **$150.68**[^1]. That national figure hides a wide spread: average bills ranged from under $100 in some states to over $200 in others the same year[^1]. Your own number depends mostly on how much you use and on your local price per [kWh](/glossary#kwh).',
          },
          {
            type: 'callout',
            tone: 'note',
            title: 'Prices are rising this year',
            text:
              'EIA\'s October 2026 outlook puts the average U.S. residential price at 17.3 cents per kWh in 2025 and forecasts 18.2 cents for 2026[^2]. That is roughly a 5% increase (Billix calculation), before any change in how much you use.',
          },
        ],
      },
      {
        id: 'how-much-you-used',
        heading: 'Line 1: how much you used',
        blocks: [
          {
            type: 'p',
            text:
              'Look for your meter readings: a previous reading, a current reading, and the difference, which is your usage in kWh. Next to the reading you may see a code. An "A" usually means actual; an "E," "Est." or the word "Estimated" means the utility estimated your use instead of reading the meter. That label is worth noticing, and we come back to it below.',
          },
          {
            type: 'p',
            text:
              'Many bills also include a small bar chart of your usage over the past year. Some states require it. Ohio\'s billing rule, for example, requires bills to show the customer\'s usage for each of the preceding twelve months, the dates of the service period, and an identification of estimated bills[^5].',
          },
          {
            type: 'p',
            text:
              'Want to see where your kWh go? EIA estimates that in 2020, air conditioning was the largest single use of electricity in U.S. homes at about 19%, with space heating and water heating at about 12% each[^4]. In homes heated with electricity, heating can be a much bigger share. Our [electricity cost calculator](/tools/electricity-cost) can turn any appliance\'s wattage into dollars at your own rate.',
          },
        ],
      },
      {
        id: 'what-you-are-charged',
        heading: 'Lines 2 to 6: what you are charged',
        blocks: [
          {
            type: 'p',
            text:
              'Charges are usually grouped into sections. Names vary by utility and state, but most bills include some version of the lines below. Your utility\'s approved rate schedule, often called a tariff, explains each one.',
          },
          {
            type: 'table',
            caption: 'Common lines on a U.S. electric bill',
            headers: ['Line', 'What it pays for', 'How it is billed'],
            rows: [
              ['Customer charge', 'Meters, billing, customer service', 'Fixed dollars per month, even at zero use'],
              ['Supply or generation', 'The electricity itself', 'Cents per kWh'],
              ['Delivery: transmission and distribution', 'High-voltage lines, local poles, wires, substations', 'Cents per kWh, sometimes plus fixed charges'],
              ['Riders and adjustments', 'Specific approved costs such as fuel, storm recovery or efficiency programs', 'Usually cents per kWh; can be a charge or a credit'],
              ['Taxes and fees', 'State and local taxes, franchise fees', 'Percentage of the bill or per kWh'],
            ],
          },
          {
            type: 'p',
            text:
              'The [customer charge](/glossary#customer-charge) is the part of the bill you pay no matter what. The [supply charge](/glossary#supply-charge) and [delivery charge](/glossary#delivery-charge) are usually priced per kWh, so they rise and fall with use. Nationally, EIA estimates that in 2025 generation made up about 56% of the average electricity price, distribution about 30% and transmission about 14%, across all customer types[^3]. Residential customers often pay a larger share for delivery than that average suggests. We explain the split in [Supply vs. delivery charges](/learn/supply-vs-delivery-charges).',
          },
          {
            type: 'p',
            text:
              '[Riders](/glossary#rider) are separate, regulator-approved lines that recover a specific cost, such as fuel, storm repairs or energy-efficiency programs. They can change more often than base rates, and some go down as well as up. Near the bottom you may see taxes and a [franchise fee](/glossary#franchise-fee), which is what a city charges the utility for using public streets.',
          },
        ],
      },
      {
        id: 'three-checks',
        heading: 'Why is it higher this month? Three checks',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**Compare with the same month last year, not last month.** Weather drives most swings in home electricity use, so a hot July naturally beats a mild May. Also compare the number of days: a 33-day bill covers more use than a 28-day bill with the same habits.',
              '**Look for a rate change.** Base-rate increases go through a formal review at the state utility commission. In Pennsylvania, for example, a utility must notify every customer at least 60 days in advance, and the full process can take about nine months[^8]. Riders such as fuel adjustments can change without a full rate case, so compare the per-kWh prices on this bill with last year\'s.',
              '**Look for an estimated reading.** If the meter was not read for several months and the estimates ran low, the next actual reading can produce one large catch-up bill. New York\'s regulator notes that utilities must make a special effort to get an actual reading after six months of estimates[^6].',
            ],
          },
          {
            type: 'p',
            text:
              'Smart meters have made estimates less common. EIA counted about 123 million advanced (smart) meters among roughly 147 million residential meters in 2024, around 84%[^7]. But estimates still happen, for example when a meter stops communicating.',
          },
          {
            type: 'callout',
            tone: 'tip',
            title: 'Catch-up bills have limits in some states',
            text:
              'Rules on how far back a utility can bill for under-charged usage differ a lot by state. New York law generally bars residential gas and electric bills for service more than 24 months old and limits increases to prior bills after 12 months, with exceptions[^9]. Pennsylvania limits most make-up bills to service from the past four years and requires the utility to offer to spread the payment out[^10]. Check your own state commission\'s rules.',
          },
        ],
      },
      {
        id: 'if-it-still-looks-wrong',
        heading: 'If the bill still looks wrong',
        blocks: [
          {
            type: 'p',
            text:
              'Most regulators expect customers to start with the utility. Many people find it helps to have the bill, the meter reading, and a question written down before calling. Common questions include: Was this reading actual or estimated? Which rate schedule is my account billed on? Did any rates or riders change this period?',
          },
          {
            type: 'p',
            text:
              'If the answer does not resolve the problem, investor-owned electric utilities are overseen by a state public utility commission, and its consumer phone number is often printed on the bill. Ohio, for example, requires the commission\'s toll-free number on every electric bill[^5]. Municipal utilities and electric cooperatives are often governed locally instead, by a city council or a co-op board.',
          },
          {
            type: 'p',
            text:
              'Unfamiliar terms on your bill? Our [glossary](/glossary) covers [budget billing](/glossary#budget-billing), [time-of-use rates](/glossary#time-of-use-rate), [estimated readings](/glossary#estimated-reading) and more. For the broader picture of electric costs, see the [electricity category](/categories/electricity).',
          },
        ],
      },
    ],
    sources: [
      src('Annual Electric Power Industry Report, Form EIA-861 detailed data files (2025 final data, Average Monthly Bill tables)', 'U.S. Energy Information Administration', 'https://www.eia.gov/electricity/data/eia861/', '2025 data released October 7, 2026.'),
      src('Short-Term Energy Outlook: Electricity, coal, and renewables (October 2026)', 'U.S. Energy Information Administration', 'https://www.eia.gov/outlooks/steo/report/elec_coal_renew.php', 'Released October 6, 2026. 2026 value is a forecast.'),
      src('Electricity explained: Factors affecting electricity prices', 'U.S. Energy Information Administration', 'https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php'),
      src('Electricity explained: Use of electricity in homes', 'U.S. Energy Information Administration', 'https://www.eia.gov/energyexplained/use-of-energy/electricity-use-in-homes.php', 'End-use shares from the 2020 Residential Energy Consumption Survey.'),
      src('Ohio Administrative Code Rule 4901:1-10-22, Electric utility customer billing and payments', 'State of Ohio', 'https://codes.ohio.gov/ohio-administrative-code/rule-4901:1-10-22'),
      src('Consumer Guide: Meter Reading', 'New York State Department of Public Service', 'https://dps.ny.gov/dps-consumer-guide-meter-reading'),
      src('Electric Power Annual, Table 10.5: Advanced metering count by technology type', 'U.S. Energy Information Administration', 'https://www.eia.gov/electricity/annual/html/epa_10_05.html', '2024 data.'),
      src('The PUC Ratemaking Process and the Role of Consumers (fact sheet)', 'Pennsylvania Public Utility Commission', 'https://www.puc.pa.gov/media/2880/24_ratemaking_complaints.pdf'),
      src('New York Public Service Law Section 41', 'New York State Senate', 'https://www.nysenate.gov/legislation/laws/PBS/41'),
      src('52 Pa. Code § 56.14, Previously unbilled utility service', 'Pennsylvania Code and Bulletin', 'https://www.pacodeandbulletin.gov/Display/pacode?file=/secure/pacode/data/052/chapter56/s56.14.html'),
    ],
  },

  // ---------------------------------------------------------------------------
  // b. Supply vs. delivery charges
  // ---------------------------------------------------------------------------
  {
    slug: 'supply-vs-delivery-charges',
    title: 'Supply vs. Delivery Charges: The Two Halves of Your Electric Bill',
    description:
      'What the supply and delivery sections of an electric bill pay for, why delivery has been growing, and what "price to compare" means in states with electric choice.',
    category: 'electricity',
    kind: 'explainer',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: US,
    alicePose: 'presenting',
    relatedTools: ['electricity-cost'],
    keyTakeaways: [
      'Supply pays for the electricity itself; delivery pays for the lines, poles, substations and meters that bring it to you.',
      'Nationally, generation is still the largest part of the average electricity price, but for many households with a separate supplier, delivery is now the bigger half.',
      'Utility spending on local distribution and on transmission has grown sharply over two decades, which shows up in delivery charges.',
      'In states with retail choice you may be able to shop for supply, but delivery is always paid to your local utility, and labels are not standardized between states.',
    ],
    sections: [
      {
        id: 'two-halves',
        heading: 'Two halves of one bill',
        blocks: [
          {
            type: 'p',
            text:
              'Think of an electric bill like a pizza order. **Supply** is the pizza: the electricity generated at a power plant or bought on the wholesale market. **Delivery** is the car and the driver: the high-voltage transmission lines, the local distribution poles and wires, the substations and transformers, and the meter on your wall.',
          },
          {
            type: 'p',
            text:
              'Some bills show these as two clearly separate sections. Others, especially from utilities that own their power plants, blend them into one energy charge plus a few extra lines. Either way, both costs are in there. You can find the definitions in our glossary under [supply charge](/glossary#supply-charge) and [delivery charge](/glossary#delivery-charge).',
          },
        ],
      },
      {
        id: 'which-half-is-bigger',
        heading: 'Which half is bigger?',
        blocks: [
          {
            type: 'p',
            text:
              'It depends on where you live and how your bill is set up. Nationally, across all customer types, EIA estimates that in 2025 **generation made up about 56%** of the average price of electricity, **distribution about 30%** and **transmission about 14%**[^1]. EIA describes generation as the largest component of the price.',
          },
          {
            type: 'p',
            text:
              'Home customers, though, are served at lower voltage and tend to bear more of the local distribution cost than large industrial users. A clean national look at households comes from EIA\'s utility data: in 2025, about 14.6 million residential customers bought their energy from a supplier other than their utility and paid the utility separately for delivery. For that group, energy supply averaged about 12.3 cents per kWh and delivery about 14.1 cents, so **delivery was about 53% of the combined cost** (Billix calculation from EIA-861 data)[^2]. These households are concentrated in higher-cost states, so this is not a national average, but it shows how delivery can be the larger half.',
          },
          {
            type: 'table',
            caption: 'Two ways to look at the split (2025)',
            headers: ['Measure', 'Supply / generation', 'Delivery (transmission + distribution)'],
            rows: [
              ['All U.S. customers, share of average price (EIA)', 'About 56%', 'About 44%'],
              ['Households with a separate supplier (Billix calc on EIA-861)', 'About 47%', 'About 53%'],
            ],
          },
        ],
      },
      {
        id: 'why-delivery-is-growing',
        heading: 'Why delivery costs have been growing',
        blocks: [
          {
            type: 'p',
            text:
              'EIA reported in 2025 that utility spending on electricity distribution had surpassed spending on transmission and on production[^5]. Looking at the largest utilities from 2003 to 2023, after inflation, EIA found that spending on generation fell about 24%, transmission spending nearly tripled, and distribution capital spending reached about $50.9 billion in 2023, up 160% from 2003[^4].',
          },
          {
            type: 'p',
            text:
              'The reasons EIA lists include replacing aging equipment, hardening the grid against storms and wildfires, putting lines underground, connecting new power sources, transformer shortages, and installing smart meters and sensors[^4]. A July 2026 review by Lawrence Berkeley National Laboratory found that investor-owned utilities\' distribution spending grew about 5% a year after inflation from 2019 to 2025, with the largest price effects in California, New York and New England[^6].',
          },
          {
            type: 'callout',
            tone: 'note',
            title: 'Delivery costs do not always rise',
            text:
              'Grid spending can also bring savings, for example when new transmission reaches cheaper power. And some cost-recovery lines end or fall when a specific cost is paid off. The trend is real, but it is not the same everywhere.',
          },
        ],
      },
      {
        id: 'retail-choice-and-price-to-compare',
        heading: 'Retail choice and the "price to compare"',
        blocks: [
          {
            type: 'p',
            text:
              'In some states you can buy the supply half from a competitive supplier while your utility keeps delivering the power. As of EIA\'s last count, published in 2018, 13 states and the District of Columbia had active statewide residential retail choice, and Texas\'s main grid region requires it[^3]. In most of the country, one utility handles both halves and there is no supplier to switch to.',
          },
          {
            type: 'p',
            text:
              'Where choice exists, regulators publish a [price to compare](/glossary#price-to-compare). Pennsylvania\'s commission defines it as the cost per kWh charged to customers who have not selected a competitive supplier, and notes that generation may account for roughly 50% or more of a total bill[^7]. Labels are not standardized: in Illinois, ComEd\'s price to compare combines the supply charge and the transmission services charge, so transmission sits in the supply section there[^8]. In many other states, transmission appears under delivery.',
          },
          {
            type: 'p',
            text:
              'Texas shows the delivery half especially clearly. Retail providers pass through the local wires company\'s charges, which the Public Utility Commission of Texas publishes. As of October 1, 2026, Oncor\'s delivery charges came to about $64 for 1,000 kWh[^9].',
          },
        ],
      },
      {
        id: 'lines-in-either-half',
        heading: 'Riders and adjustments can land in either half',
        blocks: [
          {
            type: 'p',
            text:
              'Separate cost-recovery lines, often called [riders](/glossary#rider), sit in both sections. A fuel or purchased-power adjustment usually belongs with supply, because it tracks what the utility pays for energy. Storm recovery, wildfire mitigation and grid-modernization charges usually belong with delivery. Lawrence Berkeley National Laboratory\'s review of utility tariffs found 2025 storm-recovery charges such as 2.5 cents per kWh at Central Maine Power and temporary storm surcharges of 0.9 to 3.2 cents per kWh at four Florida utilities, and estimated that wildfire mitigation costs add more than 4 cents per kWh in California[^6].',
          },
          {
            type: 'p',
            text:
              'Supply prices change too, on their own schedule. In Pennsylvania, default supply prices reset on June 1 and December 1. For June 1, 2026, the commission listed PECO\'s price to compare rising from 11.024 to an estimated 11.572 cents per kWh and PPL\'s from 12.953 to 13.147 cents[^7]. In Illinois, ComEd\'s price to compare for October 2026 through May 2027 is 10.103 cents per kWh: 8.413 cents for supply plus 1.69 cents for transmission[^8]. Because each state packages these lines differently, comparing your own bill year over year is usually more useful than comparing with another state.',
          },
        ],
      },
      {
        id: 'reading-your-own-split',
        heading: 'Reading the split on your own bill',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Find the section headers. Look for words like Supply, Generation or Energy Charges, and Delivery, Distribution or Transmission.',
              'Add up each section, including its share of riders, but leave out taxes for now.',
              'Divide each total by your kWh to get cents per kWh for supply and for delivery. Remember that the fixed [customer charge](/glossary#customer-charge) is usually in delivery, which pushes delivery\'s per-kWh number up in low-use months.',
              'If you are in a choice state, compare the supply cents per kWh with your utility\'s current price to compare. Delivery will be the same whichever supplier you use.',
            ],
          },
          {
            type: 'p',
            text:
              'Want to try it with real numbers? Our [electricity cost calculator](/tools/electricity-cost) lets you plug in your all-in price per kWh. For the full line-by-line walk-through, see [How to read your electric bill](/learn/how-to-read-your-electric-bill).',
          },
        ],
      },
    ],
    sources: [
      src('Electricity explained: Factors affecting electricity prices', 'U.S. Energy Information Administration', 'https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php', 'Price components from Annual Energy Outlook 2026, Reference case.'),
      src('Annual Electric Power Industry Report, Form EIA-861 detailed data files (2025 final data)', 'U.S. Energy Information Administration', 'https://www.eia.gov/electricity/data/eia861/', 'Billix calculation from energy-only and delivery-only residential revenue and sales.'),
      src('Today in Energy: Electricity residential retail choice participation has declined since 2014 peak', 'U.S. Energy Information Administration', 'https://www.eia.gov/todayinenergy/detail.php?id=37452', 'Published November 2018; EIA\'s most recent count.'),
      src('Today in Energy: Grid infrastructure investments drive increase in utility spending over last two decades', 'U.S. Energy Information Administration', 'https://www.eia.gov/todayinenergy/detail.php?id=63724', 'November 18, 2024. Figures in real 2023 dollars.'),
      src('Today in Energy: Retail electricity prices have increased faster than the rate of inflation since 2022', 'U.S. Energy Information Administration', 'https://www.eia.gov/todayinenergy/detail.php?id=65284', 'May 14, 2025.'),
      src('Retail Electricity Price Trends and Drivers, 2026 edition (July update)', 'Lawrence Berkeley National Laboratory', 'https://eta-publications.lbl.gov/sites/default/files/2026-07/retail_price_trends_2026_edition_julyupdate.pdf', 'DOE national laboratory, with The Brattle Group.'),
      src('PUC Alerts Consumers to June 1 Electric Price Changes and Higher Summer Energy Costs', 'Pennsylvania Public Utility Commission', 'https://www.puc.pa.gov/press-release/2026/puc-alerts-consumers-to-june-1-electric-price-changes-and-higher-summer-energy-costs-5-20-26', 'May 20, 2026.'),
      src('Understanding the Price to Compare: ComEd', 'Plug In Illinois (Illinois Commerce Commission)', 'https://plugin.illinois.gov/understanding-the-price-to-compare/price-to-compare-comed.html'),
      src('Transmission and Distribution Rates', 'Public Utility Commission of Texas', 'https://www.puc.texas.gov/industry/electric/rates/tdr.aspx'),
    ],
  },

  // ---------------------------------------------------------------------------
  // c. Why water bills keep rising
  // ---------------------------------------------------------------------------
  {
    slug: 'why-water-bills-keep-rising',
    title: 'Why Water Bills Keep Rising, Even When You Use Less',
    description:
      'Water and sewer prices have outpaced overall inflation for years. Here is what drives it: aging pipes, fixed costs, falling use and new safety rules, plus how to read your own bill.',
    category: 'water-sewer',
    kind: 'explainer',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: US,
    alicePose: 'thinking',
    relatedVideo: 'why-water-bills-rise',
    relatedTools: ['water-bill', 'water-usage', 'leak-cost'],
    keyTakeaways: [
      'Federal price data show water and sewer prices rose about 155% from August 2006 to August 2026, compared with about 64% for all consumer prices.',
      'Pipes, treatment plants and debt payments cost about the same no matter how much water customers use, so falling use can push per-gallon rates up.',
      'EPA estimates drinking water systems need $625 billion over 20 years, and wastewater and stormwater systems about $630 billion; most of that money comes from local ratepayers.',
      'Your bill usually has a fixed part and a usage part; checking for leaks and knowing where rates are set are practical first steps.',
    ],
    sections: [
      {
        id: 'how-fast',
        heading: 'How fast prices have risen',
        blocks: [
          {
            type: 'p',
            text:
              'The Bureau of Labor Statistics tracks the price of water and sewer service as part of the Consumer Price Index. Comparing that series with overall inflation shows a long gap[^1][^2]:',
          },
          {
            type: 'table',
            caption: 'Price change, U.S. city average, not seasonally adjusted (Billix calculation on BLS index values)',
            headers: ['Period', 'Water and sewer', 'All items'],
            rows: [
              ['Aug 2025 to Aug 2026 (1 year)', '+4.9%', '+3.4%'],
              ['Aug 2016 to Aug 2026 (10 years)', '+48.2%', '+39.1%'],
              ['Aug 2006 to Aug 2026 (20 years)', '+155.4%', '+64.3%'],
            ],
          },
          {
            type: 'p',
            text:
              'Two cautions. First, this is a price index, not an average bill; what you pay also depends on how much water you use. Second, over the last ten years the gap is modest, about 6.6% after inflation. The large gap shows up over twenty years. Prices also vary enormously from one city to the next, so your own utility\'s rate history is the most relevant comparison. The increase has also been steady rather than a one-time jump: in 2026, the water and sewer index rose in every month from January through August[^1].',
          },
        ],
      },
      {
        id: 'old-pipes',
        heading: 'Reason 1: old pipes and big repair lists',
        blocks: [
          {
            type: 'p',
            text:
              'Much of the country\'s water infrastructure was built decades ago. EPA\'s latest drinking water needs survey estimates that systems will need **$625 billion** over 20 years for pipe replacement, treatment plants, storage tanks and other assets[^3]. The same survey now estimates about four million lead service lines nationwide[^3]. A separate EPA survey puts wastewater and stormwater needs at about **$630 billion** over 20 years[^4]. These are two different surveys, so they should not simply be added together, and they are estimates of need, not bills.',
          },
          {
            type: 'p',
            text:
              'Most of that cost lands on local customers rather than federal taxpayers. Utilities typically pay for projects with bonds and loans, then repay them through rates for years. That is one reason rate increases often continue for several years in a row: each new project adds debt payments on top of the ones already being repaid. It also means today\'s rates partly reflect decisions about repairs made, or put off, years ago.',
          },
        ],
      },
      {
        id: 'use-less-pay-more',
        heading: 'Reason 2: you use less, but the costs do not shrink',
        blocks: [
          {
            type: 'p',
            text:
              'Americans use less water at home than they used to. The U.S. Geological Survey estimated domestic use fell from **88 gallons per person per day in 2010 to 82 in 2015**, its latest national estimate of this kind[^5]. Efficient toilets, washers and fixtures are a big part of that.',
          },
          {
            type: 'p',
            text:
              'But a large share of a utility\'s costs, such as pipes, plants and debt payments, stay about the same whether customers use more or less. When sales fall, rates per gallon tend to rise to cover the same costs. San Diego\'s Independent Budget Analyst described this in 2025: with declining water sales and wastewater flows, that "inevitably means increasing rates"[^6]. EPA has noted that utilities sometimes prefer higher fixed charges because they provide reliable revenue when demand varies[^7].',
          },
          {
            type: 'callout',
            tone: 'note',
            title: 'Not every cost is fixed',
            text:
              'Some costs, like chemicals and the energy to pump and treat water, do rise and fall with volume. How much a drop in use pushes rates up differs from utility to utility, so be wary of any single national "percent fixed" figure.',
          },
        ],
      },
      {
        id: 'new-rules',
        heading: 'Reason 3: new safety rules',
        blocks: [
          {
            type: 'p',
            text:
              'Two federal drinking water rules carry real costs for utilities. The **Lead and Copper Rule Improvements**, finalized in 2024, require most systems to replace lead service lines within 10 years, with compliance beginning in November 2027; EPA estimated the rule\'s cost at about $1.47 to $1.95 billion a year[^8].',
          },
          {
            type: 'p',
            text:
              'In 2024 EPA also set the first national limits for certain PFAS ("forever chemicals"), including 4.0 parts per trillion for PFOA and PFOS. In May 2026, EPA proposed keeping the PFOA and PFOS limits while allowing systems to request two more years, to 2031, to comply, and proposed rescinding limits for several other PFAS[^9]. Those proposals were not final as of this writing, so the eventual cost to customers is still uncertain.',
          },
        ],
      },
      {
        id: 'reading-your-bill',
        heading: 'What you can look at on your own bill',
        blocks: [
          {
            type: 'list',
            items: [
              '**Fixed vs. usage charges.** Most bills have a fixed service charge, often based on meter size, plus a usage charge per 1,000 gallons or per [HCF](/glossary#hcf). Sewer is often billed on your water use, sometimes on a [winter average](/glossary#winter-averaging). Some cities add a [stormwater fee](/glossary#stormwater-fee) based on paved area.',
              '**Leaks.** EPA estimates household leaks waste nearly 1 trillion gallons of water a year nationwide, and that fixing easily corrected leaks can save homeowners about 10% on their water bills. Its simple checks: put a few drops of food coloring in the toilet tank and see if color appears in the bowl within 10 minutes; read the water meter before and after two hours with no water use; and look at a cold-weather month, since EPA says a family of four using more than 12,000 gallons in January or February could have a serious leak[^10].',
              '**Where rates are set.** City-run systems usually set rates at a council or water board meeting; privately owned systems usually go through the state utility commission. See [Public vs. private water](/learn/public-vs-private-water).',
              '**Help paying.** In a December 2024 report to Congress, EPA estimated that about 12.1 million U.S. households face combined water and sewer bills above 4.5% of income, and about 19.2 million above 3% of income. EPA called those estimates preliminary and noted that small utilities often cannot fund their own customer assistance programs[^7]. The pandemic-era federal water assistance program has ended, so the place to ask about discount, payment-plan or leak-adjustment programs is your own utility.',
            ],
          },
          {
            type: 'p',
            text:
              'Water bill and leak cost calculators are [on our tools roadmap](/tools). For more on water and sewer costs, see the [water and sewer category](/categories/water-sewer).',
          },
        ],
      },
    ],
    sources: [
      src('CPI-U, Water and sewerage maintenance, U.S. city average (series CUUR0000SEHG01)', 'U.S. Bureau of Labor Statistics', 'https://data.bls.gov/timeseries/CUUR0000SEHG01', 'August 2026 is the latest month available on October 13, 2026. October 2025 was not collected.'),
      src('CPI-U, All items, U.S. city average (series CUUR0000SA0)', 'U.S. Bureau of Labor Statistics', 'https://data.bls.gov/timeseries/CUUR0000SA0'),
      src('EPA\'s 7th Drinking Water Infrastructure Needs Survey and Assessment', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/dwsrf/epas-7th-drinking-water-infrastructure-needs-survey-and-assessment'),
      src('New EPA survey highlights wastewater infrastructure needs to protect waterbodies', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/newsreleases/new-epa-survey-highlights-wastewater-infrastructure-needs-protect-waterbodies', 'Clean Watersheds Needs Survey 2022.'),
      src('Estimated Use of Water in the United States in 2015 (Fact Sheet 2018-3035)', 'U.S. Geological Survey', 'https://pubs.usgs.gov/fs/2018/3035/fs20183035.pdf'),
      src('IBA Report 25-31: Additional Review of PUD\'s Water and Wastewater Cost of Service Studies, FY 2026-2029', 'City of San Diego Office of the Independent Budget Analyst', 'https://www.sandiego.gov/sites/default/files/2025-09/25-31-additional-review-of-pud-s-water-wastewater-coss-fy-2026-2029-final.pdf', 'September 26, 2025.'),
      src('Water Affordability Needs Assessment: Report to Congress', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/system/files/documents/2024-12/water-affordability-needs-assessment.pdf', 'December 2024; EPA describes the estimates as preliminary.'),
      src('Lead and Copper Rule Improvements: Costs and Benefits fact sheet', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/system/files/documents/2024-10/final_lcri_fact-sheet_cost_benefit.pdf', 'Cost estimates in 2022 dollars.'),
      src('Per- and Polyfluoroalkyl Substances (PFAS): Final PFAS National Primary Drinking Water Regulation', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas', 'Includes notice of the May 18, 2026 proposed rules.'),
      src('Fix a Leak Week', 'U.S. Environmental Protection Agency (WaterSense)', 'https://www.epa.gov/watersense/fix-leak-week'),
    ],
  },

  // ---------------------------------------------------------------------------
  // d. Public vs. private water
  // ---------------------------------------------------------------------------
  {
    slug: 'public-vs-private-water',
    title: 'Public vs. Private Water: Who Owns Your System, and Does It Change Your Bill?',
    description:
      'About 8 in 10 Americans get tap water from a local-government system and about 1 in 10 from a private one. What the research says about prices and safety, why studies disagree, and how to look up your own system.',
    category: 'water-sewer',
    kind: 'explainer',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: US,
    alicePose: 'holding-magnifier',
    relatedVideo: 'who-owns-your-water',
    relatedTools: ['water-bill'],
    keyTakeaways: [
      'Most Americans are served by local-government water systems; more than 10% get water from privately owned utilities, which range from large companies to small homeowner associations.',
      'Who owns your system usually decides who sets your rates: a city council or water board for public systems, a state utility commission for most investor-owned ones.',
      'Studies generally find investor-owned utilities charge more on average, while several peer-reviewed studies find private systems have fewer drinking water violations. No study we found proves ownership causes either result.',
      'You can look up your system\'s ownership type in EPA\'s public database.',
    ],
    sections: [
      {
        id: 'who-owns-americas-water',
        heading: 'Who owns America\'s water systems',
        blocks: [
          {
            type: 'p',
            text:
              'The U.S. Government Accountability Office (GAO) reviewed ownership of the country\'s roughly 50,000 community water systems in 2021. Using EPA data, it found that systems owned by local governments, such as cities, counties and water authorities, serve about 261 million people, almost 80% of the population, while privately owned utilities serve more than 10%[^1].',
          },
          {
            type: 'p',
            text:
              '"Private" covers very different owners. It includes publicly traded water companies, but also nonprofits, small homeowner associations and businesses like mobile home parks that supply their own residents[^1]. GAO also found that EPA\'s ownership data had errors and recommended improvements, so treat any count as approximate[^1].',
          },
        ],
      },
      {
        id: 'who-sets-the-rate',
        heading: 'Who sets your rate',
        blocks: [
          {
            type: 'p',
            text:
              'EPA does not set water rates[^1]. In general:',
          },
          {
            type: 'list',
            items: [
              '**Public systems** set rates locally, usually through a city council, utility board or water authority at a public meeting. A few states also regulate some municipal utilities; Wisconsin\'s commission regulates municipal water rates comprehensively[^1].',
              '**Investor-owned systems** in most states go through a rate case at the state public utility commission. The commission sets rates to cover operating costs, depreciation and taxes plus an opportunity to earn a return on invested capital. GAO reported that commission officials described typical returns on equity of 8 to 11%[^1].',
            ],
          },
          {
            type: 'p',
            text:
              'Rate cases do not always end where the utility starts. In July 2026, Pennsylvania\'s commission approved about $74.9 million of a requested increase for Pennsylvania American Water, with the water portion approved at about 4.75%[^9]. That is one case, not a national pattern, and the same decision approved a larger wastewater increase than requested.',
          },
        ],
      },
      {
        id: 'does-private-cost-more',
        heading: 'Does private water cost more?',
        blocks: [
          {
            type: 'p',
            text:
              'On average, the research points that way, with important caveats. A peer-reviewed study of the 500 largest U.S. community water systems, using January 2015 rates, estimated that annual water bills were about **$144 higher** in privately owned systems than in publicly owned ones after accounting for factors like system size, water source and regulation[^3]. Low-income households in private-system communities also spent a larger share of income on water[^3].',
          },
          {
            type: 'callout',
            tone: 'note',
            title: 'Disclosure on that study',
            text:
              'One of its four co-authors works for Food & Water Watch, an advocacy group that opposes water privatization[^4]. The study was published in a peer-reviewed journal, but readers should know about that affiliation. It also used one year of data, included only 58 investor-owned systems, and cannot show cause and effect.',
          },
          {
            type: 'p',
            text:
              'A separate peer-reviewed study of more than 1,500 systems in four states (Arizona, Georgia, New Hampshire and Wisconsin) found that municipal systems tend to charge significantly lower water bills than for-profit systems[^7].',
          },
          {
            type: 'p',
            text:
              'There are structural reasons private bills can run higher that have nothing to do with efficiency. Investor-owned utilities pay income and property taxes, which are built into rates, and earn a regulated return for shareholders[^1]. Public utilities generally do not pay those taxes[^1], and they often finance projects with municipal bonds.',
          },
        ],
      },
      {
        id: 'the-other-side',
        heading: 'The other side of the ledger',
        blocks: [
          {
            type: 'p',
            text:
              'Lower bills are not the whole story. A 2002 GAO survey of utilities serving more than 10,000 people found that for an estimated 29% of drinking water utilities and 41% of wastewater utilities, user charges plus other local revenue did not cover the full cost of service[^8]. A low bill today can mean deferred repairs and a larger bill later.',
          },
          {
            type: 'p',
            text:
              'On safety compliance, several peer-reviewed studies lean the other way. Researchers analyzing large U.S. systems from 2010 to 2013 found publicly owned systems had about 14% more health-based violations and about 29% more monitoring violations than otherwise similar private ones[^5]. A national study of nearly 18,000 community systems from 1982 to 2015 found private ownership was associated with better compliance[^6]. These differences are modest and, again, associations rather than proof of cause.',
          },
          {
            type: 'table',
            caption: 'What the evidence suggests, in brief',
            headers: ['Question', 'What studies tend to find', 'Main caveat'],
            rows: [
              ['Average bills', 'Higher at investor-owned utilities', 'Snapshots, mostly large systems; not proof of cause'],
              ['Covering full cost', 'Many public systems historically undercharged', 'GAO survey from 2002'],
              ['Safe Drinking Water Act compliance', 'Somewhat fewer violations at private systems', 'Modest differences; associations only'],
            ],
          },
        ],
      },
      {
        id: 'why-studies-disagree',
        heading: 'Why the studies seem to disagree',
        blocks: [
          {
            type: 'list',
            items: [
              '**Different questions.** Some studies compare prices customers pay; others compare operating costs or safety records. A system can be cheaper to customers and still be underfunding repairs, or cost more and have fewer violations.',
              '**Different accounting.** GAO noted that private utilities set rates using a "rate of return" approach, while public utilities typically use a "cash needs" approach[^8]. The same pipes can produce different bills under each method.',
              '**Different samples.** The large national price studies cover the biggest systems, and only a few dozen of those are investor-owned[^3]. Most private systems are small, and they are not well represented.',
              '**Different measures.** Some studies look at water only; others at water plus sewer. Usage assumptions, years and regions differ, and gaps can be much larger in some regions than others.',
            ],
          },
          {
            type: 'p',
            text:
              'The fair reading is that, on average, investor-owned systems tend to charge more, for reasons that include taxes and shareholder returns, while some public systems keep bills low by charging less than full cost. Both things can be true at the same time.',
          },
        ],
      },
      {
        id: 'look-up-your-system',
        heading: 'How to look up your own system',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'The name on your bill is a start, but it does not reliably tell you who owns the system.',
              'EPA\'s Safe Drinking Water Information System (SDWIS) federal reports include an **Owner Type** field for each water system, with categories such as local government, private, and public/private[^2].',
              'Your annual water quality report, the Consumer Confidence Report, is due each year by July 1 and names your supplier and its water sources[^10]. Under EPA\'s 2024 revisions, starting in 2027 systems serving more than 10,000 people will have to send these reports twice a year[^11].',
              'Once you know the owner, you know where rate decisions happen: your council or water board, or your state utility commission\'s rate case, where the public can usually comment.',
            ],
          },
          {
            type: 'p',
            text:
              'Ownership is one factor among many. System size and age, water source, local regulation and past investment decisions all shape what you pay. For the bigger picture on prices, see [Why water bills keep rising](/learn/why-water-bills-keep-rising).',
          },
        ],
      },
    ],
    sources: [
      src('Private Water Utilities: Actions Needed to Enhance Ownership Data (GAO-21-291)', 'U.S. Government Accountability Office', 'https://www.gao.gov/products/gao-21-291', 'Published March 26, 2021; publicly released April 26, 2021.'),
      src('SDWIS Federal Reports Search: System Data Dictionary', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/DWdata/sdwis-federal-reports-search-system-data-dictionary'),
      src('Zhang, González Rivas, Grant & Warner, "Water pricing and affordability in the US: public vs. private ownership," Water Policy 24(3), 2022', 'IWA Publishing (peer-reviewed journal)', 'https://doi.org/10.2166/wp.2022.283', 'Co-author Mary Grant is affiliated with Food & Water Watch, an advocacy group opposing water privatization. Rates from January 2015.'),
      src('Privatization, poverty threaten water affordability', 'Cornell University College of Agriculture and Life Sciences', 'https://cals.cornell.edu/news/2022/04/privatization-poverty-threaten-water-affordability', 'University news release on the Water Policy study.'),
      src('Konisky & Teodoro, "When Governments Regulate Governments," American Journal of Political Science 60(3), 2016', 'Wiley (peer-reviewed journal)', 'https://doi.org/10.1111/ajps.12221', 'Systems serving 10,000 or more people, 2010-2013.'),
      src('Allaire, Wu & Lall, "National trends in drinking water quality violations," PNAS 115(9), 2018', 'Proceedings of the National Academy of Sciences (via PubMed Central)', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5834717'),
      src('El-Khattabi, Gmoser-Daskalakis & Pierce, PLOS Water 2(12): e0000190, 2023', 'PLOS Water (peer-reviewed journal)', 'https://journals.plos.org/water/article?id=10.1371/journal.pwat.0000190', 'Four states: AZ, GA, NH, WI.'),
      src('Water Infrastructure: Information on Financing, Capital Planning, and Privatization (GAO-02-764)', 'U.S. Government Accountability Office', 'https://www.gao.gov/assets/a157290.html', 'August 2002.'),
      src('PUC Approves Smaller-than-Requested Rate Changes for Pennsylvania American Water', 'Pennsylvania Public Utility Commission', 'https://www.puc.pa.gov/press-release/2026/puc-approves-smaller-than-requested-rate-changes-for-pennsylvania-american-water-7-16-26', 'July 16, 2026.'),
      src('CCR Information for Consumers', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/ccr/ccr-information-consumers'),
      src('Consumer Confidence Report Rule Revisions', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/ground-water-and-drinking-water/consumer-confidence-report-rule-revisions', 'Final rule announced May 15, 2024; changes take effect in 2027.'),
    ],
  },

  // ---------------------------------------------------------------------------
  // e. Leaving oil heat
  // ---------------------------------------------------------------------------
  {
    slug: 'leaving-oil-heat-options',
    title: 'Leaving Oil Heat: Gas, Heat Pump or Mini-Splits?',
    description:
      'How oil-heated households can compare natural gas, heat pumps and mini-splits: how to look up current prices, the break-even math for the same heat, and the practical questions about your house.',
    category: 'heating-cooling',
    kind: 'guide',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: {
      scope: 'multi-state',
      states: ['CT', 'ME', 'MA', 'NH', 'RI', 'VT', 'NY', 'NJ', 'PA'],
      label: 'Northeast heating-oil states (method applies nationally)',
    },
    alicePose: 'holding-calculator',
    relatedVideo: 'leaving-oil-heat',
    relatedTools: ['heating-comparison', 'heat-pump-cost'],
    keyTakeaways: [
      'About 4.1 million U.S. households heat mainly with oil, roughly 3% of households, and about 8 in 10 of them are in the Northeast.',
      'Compare fuels by the cost of the same amount of delivered heat: price divided by (heat per unit times efficiency). EIA publishes the prices you need.',
      'At EIA\'s October 2026 winter forecast prices, a heat pump needs to beat a COP of about 1.2 to match an 85%-efficient oil system on fuel cost, but about 3.9 to match a 95% gas furnace.',
      'Practical questions matter as much as price: is gas at your street, do you have ducts or radiators, what heats your hot water, and what does installation cost locally.',
    ],
    sections: [
      {
        id: 'who-heats-with-oil',
        heading: 'Who still heats with oil',
        blocks: [
          {
            type: 'p',
            text:
              'EIA estimates that about **4.13 million U.S. households** heat primarily with heating oil in 2026, about 3% of households, down from about 5.05 million in 2021. About 3.39 million of them are in the Northeast[^2]. Oil prices also tend to swing more than gas or electricity prices, which is why oil households often ask about switching.',
          },
          {
            type: 'p',
            text:
              'This guide does not recommend a fuel. It explains how to compare them for your own home, using public numbers you can look up yourself.',
          },
        ],
      },
      {
        id: 'look-up-prices',
        heading: 'Step 1: look up current prices',
        blocks: [
          {
            type: 'p',
            text:
              'Heating oil prices change weekly, so any figure in an article goes stale fast. Instead, use the source:',
          },
          {
            type: 'list',
            items: [
              '**Heating oil:** EIA\'s Heating Oil and Propane Update publishes average residential prices for the U.S., regions and many Northeast and Midwest states. It is collected only during the heating season, October through March, and updated every Wednesday afternoon. The residential prices exclude taxes[^1].',
              '**Winter forecast:** EIA\'s Winter Fuels Outlook, updated monthly with the Short-Term Energy Outlook, forecasts average winter prices for oil, gas, electricity and propane[^2].',
              '**Your own prices:** Your best inputs are your delivered oil price per gallon, and your local gas and electric rates from your utilities\' bills or rate schedules.',
            ],
          },
          {
            type: 'callout',
            tone: 'warning',
            title: 'Compare like with like',
            text:
              'EIA cautions against comparing its average household winter spending figures across fuels to decide what a single home would pay after switching, because homes using each fuel differ in climate and size[^2]. Compare the price of the same unit of heat instead.',
          },
        ],
      },
      {
        id: 'break-even-math',
        heading: 'Step 2: the break-even math',
        blocks: [
          {
            type: 'p',
            text:
              'Fuels are sold in different units, so convert everything to the cost of one million [BTU](/glossary#btu) of heat delivered into the house. EIA lists the heat content as about 138,500 BTU per gallon of heating oil, 1,036 BTU per cubic foot of natural gas, and 3,412 BTU per kWh of electricity[^3].',
          },
          {
            type: 'list',
            items: [
              '**Oil:** price per gallon ÷ (0.1385 × efficiency)',
              '**Gas:** price per thousand cubic feet ÷ (1.036 × efficiency), or price per [therm](/glossary#therm) ÷ (0.1 × efficiency)',
              '**Heat pump:** price per kWh ÷ (0.003412 × [COP](/glossary#cop))',
            ],
          },
          {
            type: 'p',
            text:
              'Efficiency for oil and gas is the [AFUE](/glossary#afue) as a decimal. ENERGY STAR-certified boilers are rated at least 87% for oil and 90% for gas[^4]; older systems can be lower. For a heat pump, COP is heat delivered per unit of electricity, and it changes with outdoor temperature.',
          },
          {
            type: 'table',
            caption:
              'Worked example using EIA\'s October 2026 winter forecast averages (oil $5.26/gal U.S.; gas $13.44/Mcf U.S., $16.12 Northeast; electricity 18.23 cents/kWh U.S., 26.19 cents Northeast). Efficiencies are illustrative. Billix calculation.',
            headers: ['Cost per million BTU of delivered heat', 'U.S. average prices', 'Northeast prices'],
            rows: [
              ['Oil, 85% efficient', '$44.68', '$44.68 (U.S. oil price)'],
              ['Gas, 95% efficient', '$13.66', '$16.38'],
              ['Heat pump, COP 2.5', '$21.37', '$30.70'],
              ['Heat pump, COP 3.0', '$17.81', '$25.59'],
              ['Electric resistance (COP 1)', '$53.43', '$76.76'],
              ['Break-even COP vs. 85% oil', 'About 1.2', 'About 1.7'],
              ['Break-even COP vs. 95% gas', 'About 3.9', 'About 4.7'],
            ],
          },
          {
            type: 'p',
            text:
              'The prices in that table are EIA forecasts for the winter as a whole[^2], not this week\'s price. The pattern is what matters: at these prices, heat from oil costs far more per unit than heat from gas, a heat pump beats oil on fuel cost at modest efficiency, and beating efficient gas takes a high COP. Real-world performance is the key unknown. In a New York study of 20 homes that replaced oil or gas boilers with mini-split heat pumps, the average implied COP was about 2.4, and homes that replaced gas saw no cost savings at the 2020 prices used[^6]. Our [heating comparison tool](/tools) (coming soon) runs this math with your own numbers.',
          },
        ],
      },
      {
        id: 'your-house',
        heading: 'Step 3: what your house needs',
        blocks: [
          {
            type: 'list',
            items: [
              '**Is gas at your street?** If not, the comparison may be only oil versus a heat pump. If it is, ask the utility for a written quote for the service line. Rules on who pays are changing: in New York, starting December 19, 2026, new residential gas applicants must pay the material and installation costs of the facilities needed to serve them[^8]. An oil boiler generally cannot be converted to burn gas; it is replaced.',
              '**Ducts or radiators?** Ductless mini-splits add indoor units room by room and do not use radiators. Air-to-water heat pumps can feed radiators, but older systems were often designed for very hot water, so a room-by-room heat-loss check matters.',
              '**Cold weather.** ENERGY STAR\'s cold-climate heat pumps must deliver a COP of at least 1.75 at 5°F[^5], and many homes keep backup heat for the coldest days. ENERGY STAR also recommends that contractors size systems using a "Manual J" load calculation[^9].',
              '**Hot water.** Many oil boilers also heat domestic hot water. Removing the boiler can mean adding a separate water heater.',
              '**The oil tank.** Federal underground tank rules exclude tanks storing heating oil for use on the premises; state or local agencies may regulate them[^7]. Your local fire or building department sets the steps for removal.',
              '**Safety.** Any fuel-burning system calls for carbon monoxide alarms. The Consumer Product Safety Commission says CO alarms should be installed on each level of the home and outside sleeping areas[^10].',
            ],
          },
        ],
      },
      {
        id: 'incentives',
        heading: 'Incentives: check before you count on them',
        blocks: [
          {
            type: 'p',
            text:
              'The federal Energy Efficient Home Improvement Credit, which covered heat pumps, applies only to improvements made through December 31, 2025, according to the IRS[^11]. Some older web pages still describe it as running through 2032. The federal home energy rebate programs are run by states, and availability varies: some states\' programs are open, some are closed or fully reserved, and some have not launched[^12]. Many states and utilities run their own rebates, so your state energy office and your utilities are the places to check.',
          },
          {
            type: 'callout',
            tone: 'tip',
            title: 'Questions to ask any installer',
            text:
              'What heating load did you calculate for this house? What efficiency or COP should I expect at our winter temperatures? What backup heat will run, and when? What happens to my hot water and my oil tank? Getting more than one written quote makes the answers easier to compare.',
          },
        ],
      },
    ],
    sources: [
      src('Heating Oil and Propane Update', 'U.S. Energy Information Administration', 'https://www.eia.gov/petroleum/heatingoilpropane/', 'Weekly, October through March; residential prices exclude taxes.'),
      src('Winter Fuels Outlook 2026-27', 'U.S. Energy Information Administration', 'https://www.eia.gov/outlooks/steo/report/perspectives/2026/10-winterfuels/article.php', 'Published October 6, 2026. Prices are forecasts for October-March.'),
      src('British thermal units (Btu)', 'U.S. Energy Information Administration', 'https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php'),
      src('Boilers', 'ENERGY STAR (U.S. EPA)', 'https://www.energystar.gov/products/boilers'),
      src('ENERGY STAR Cold Climate Heat Pump Controls Verification Procedure', 'ENERGY STAR (U.S. EPA)', 'https://www.energystar.gov/sites/default/files/asset/document/ENERGY%20STAR%20Cold%20Climate%20Heat%20Pump%20Controls%20Verification%20Procedure_1.pdf'),
      src('Replacing Fossil Fuel Heat with Mini-Split Heat Pumps in Urban House Stock (Report 22-04)', 'New York State Energy Research and Development Authority', 'https://www.nyserda.ny.gov/-/media/Project/Nyserda/Files/Publications/PPSER/Program-Evaluation/22-04-Replacing-Fossil-Fuel-Heat-with-Mini-Split-Heat-Pumps-in-Urban-House-Stock.pdf', 'March 2022; 20 homes in the New York City area.'),
      src('Frequent Questions About Underground Storage Tanks', 'U.S. Environmental Protection Agency', 'https://www.epa.gov/ust/frequent-questions-about-underground-storage-tanks'),
      src('Draft Revisions to Part 230 (100-Foot Rule)', 'New York State Department of Public Service', 'https://dps.ny.gov/node/29786'),
      src('Air-Source Heat Pumps', 'ENERGY STAR (U.S. EPA)', 'https://www.energystar.gov/products/air_source_heat_pumps'),
      src('Carbon Monoxide Alarms', 'U.S. Consumer Product Safety Commission', 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center/CO-Alarms'),
      src('Energy Efficient Home Improvement Credit', 'Internal Revenue Service', 'https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit'),
      src('Home Energy Rebate Programs', 'U.S. Department of Energy', 'https://www.energy.gov/scep/home-energy-rebate-programs'),
    ],
  },

  // ---------------------------------------------------------------------------
  // f. What is escrow
  // ---------------------------------------------------------------------------
  {
    slug: 'what-is-escrow',
    title: 'What Is Escrow, and Why Did My Mortgage Payment Change?',
    description:
      'How a mortgage escrow account pays your property taxes and insurance, how the yearly escrow analysis works, and what federal rules say about shortages, surpluses and cushions.',
    category: 'housing',
    kind: 'explainer',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: US,
    alicePose: 'counting',
    relatedTools: ['mortgage', 'property-tax'],
    keyTakeaways: [
      'An escrow account collects part of your monthly mortgage payment and uses it to pay bills like property taxes and homeowners insurance.',
      'When taxes or insurance premiums change, your escrow payment, and your total monthly payment, changes too, even with a fixed-rate loan.',
      'Federal rules let servicers keep a cushion of no more than one-sixth of yearly escrow payments and require an annual escrow statement.',
      'If the yearly analysis finds a surplus of $50 or more, the servicer generally must refund it within 30 days if you are current; shortages have set repayment options.',
    ],
    sections: [
      {
        id: 'what-escrow-is',
        heading: 'What an escrow account is',
        blocks: [
          {
            type: 'p',
            text:
              'The Consumer Financial Protection Bureau (CFPB) describes an escrow account, sometimes called an impound account, as an account set up by your mortgage lender to pay certain property-related expenses. The money comes from a portion of your monthly mortgage payment, and your servicer pays the bills on your behalf[^1].',
          },
          {
            type: 'p',
            text:
              'The usual items are **property taxes** and **homeowners insurance**. Depending on the loan, escrow can also cover flood insurance or mortgage insurance. Many lenders require escrow so they can be sure those bills get paid, and sometimes it is required by law[^1].',
          },
          {
            type: 'p',
            text:
              'Not every loan has escrow. Without it, you pay the tax and insurance bills yourself, and the CFPB notes that failing to pay property taxes can lead to fines, penalties or a tax lien, and could ultimately put the home at risk of foreclosure[^1]. With escrow, the idea is to turn one or two large bills a year into twelve smaller pieces. So a typical monthly mortgage payment really has several parts: [principal](/glossary#principal), interest, and the escrow deposit for taxes and insurance, plus [PMI](/glossary#pmi) if the loan has it[^3].',
          },
        ],
      },
      {
        id: 'how-the-amount-is-set',
        heading: 'How the monthly escrow amount is set',
        blocks: [
          {
            type: 'p',
            text:
              'The federal rule that governs most escrow accounts, part of Regulation X under the Real Estate Settlement Procedures Act, lets the servicer collect each month one-twelfth of the total escrow bills it reasonably expects to pay over the year. On top of that, it may keep a **cushion** of no more than one-sixth of the estimated yearly payments from the account[^2].',
          },
          {
            type: 'list',
            items: [
              '**Monthly deposit:** total expected yearly escrow bills ÷ 12. For every $1,200 of yearly tax and insurance bills, that is $100 a month.',
              '**Maximum cushion:** total expected yearly escrow bills ÷ 6. For every $1,200 of yearly bills, the cushion can be at most $200.',
            ],
          },
          {
            type: 'p',
            text:
              'The cushion is a buffer so the account does not run dry if a bill arrives a little higher than expected. The rule caps it, but a servicer may keep less, or none.',
          },
        ],
      },
      {
        id: 'annual-analysis',
        heading: 'The yearly escrow analysis and statement',
        blocks: [
          {
            type: 'p',
            text:
              'Once a year the servicer reviews the account: what it paid out, what came in, and what it expects to pay next year. Under Regulation X, the servicer must send an **annual escrow account statement** within 30 days of the end of the escrow computation year, and must do an escrow analysis before sending it[^2].',
          },
          {
            type: 'p',
            text:
              'The statement lists each payment into and out of the account. If there are several taxing bodies or insurers, it should identify each one, for example "City Taxes," "School Taxes" or "Hazard Insurance"[^2]. That makes it a good place to see exactly which bill changed.',
          },
          {
            type: 'p',
            text:
              'Property taxes and insurance premiums can change from year to year, and your escrow payment, and with it your total monthly payment, will change accordingly[^1]. This is the most common reason a fixed-rate mortgage payment goes up. The rate on the loan did not change; the bills escrow pays did.',
          },
        ],
      },
      {
        id: 'shortage-surplus',
        heading: 'Shortages, deficiencies and surpluses',
        blocks: [
          {
            type: 'p',
            text:
              'The analysis can find one of three things. A **surplus** means the account has more than needed. A **shortage** means the projected balance will fall short of the target. A **deficiency** means the account actually went negative because the servicer advanced money to pay a bill. Regulation X sets rules for each[^2]:',
          },
          {
            type: 'table',
            caption: 'What Regulation X allows (12 CFR 1024.17(f))',
            headers: ['Situation', 'What the servicer may or must do'],
            rows: [
              ['Surplus of $50 or more, borrower current', 'Must refund it within 30 days of the analysis'],
              ['Surplus under $50', 'May refund it or credit it toward next year\'s payments'],
              ['Shortage under one month\'s escrow payment', 'May leave it, require repayment within 30 days, or spread it over at least 12 months'],
              ['Shortage of one month\'s payment or more', 'May leave it, or spread repayment in equal monthly payments over at least 12 months'],
            ],
          },
          {
            type: 'p',
            text:
              'Being "current" matters for the surplus refund: the rule treats a borrower as current if the servicer receives payments within 30 days of the due date[^2]. A new monthly payment after an analysis often reflects two things at once: the higher ongoing bills, plus repayment of a shortage spread over the next year. Once the shortage is repaid, that second piece drops off, though the higher ongoing amount remains.',
          },
          {
            type: 'p',
            text:
              'Deficiencies follow similar rules. If the deficiency is less than one month\'s escrow payment, the servicer may leave it, ask for repayment within 30 days, or ask for it in two or more equal monthly payments; larger deficiencies have their own repayment limits[^2]. Your annual statement should say which option the servicer chose.',
          },
          {
            type: 'callout',
            tone: 'note',
            title: 'Servicers must pay escrow bills on time',
            text:
              'If your loan requires escrow, Regulation X requires the servicer to pay those bills on or before the deadline to avoid a penalty, as long as your payment is not more than 30 days overdue[^2].',
          },
        ],
      },
      {
        id: 'checking-your-statement',
        heading: 'Checking your own escrow statement',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Compare the tax payments on the statement with your actual [property tax](/glossary#property-tax-assessment) bills from your local tax office.',
              'Compare the insurance payment with your policy\'s [premium](/glossary#premium) on the declarations page.',
              'Look at the projected payments for next year and ask yourself whether they match what you know: did your assessment go up, or your insurance renew at a new price?',
              'If your assessment went up and you think it is wrong, your local assessor\'s office explains the appeal process and its deadline. A change in the tax bill eventually flows into escrow.',
            ],
          },
          {
            type: 'p',
            text:
              'Your servicer is the company that collects your payments and runs escrow; it may be different from the lender that made the loan[^4]. If you think there is an error, start by contacting the servicer in writing. If it is not resolved, you can submit a complaint to the CFPB[^5]. Mortgage and property tax calculators are [on our tools roadmap](/tools) to help you see how each piece affects the monthly payment, and the [housing category](/categories/housing) covers other housing costs.',
          },
        ],
      },
    ],
    sources: [
      src('What is an escrow or impound account?', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-escrow-or-impound-account-en-140/'),
      src('12 CFR 1024.17, Escrow accounts (Regulation X)', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/rules-policy/regulations/1024/17/'),
      src('What is private mortgage insurance?', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/'),
      src('What\'s the difference between a mortgage lender and a mortgage servicer?', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-mortgage-servicer-en-198/'),
      src('Submit a complaint', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/complaint/'),
    ],
  },

  // ---------------------------------------------------------------------------
  // g. Subscription audit guide
  // ---------------------------------------------------------------------------
  {
    slug: 'subscription-audit-guide',
    title: 'How to Audit Your Subscriptions: A Step-by-Step Guide',
    description:
      'A practical way to find every recurring charge, decide what stays, and cancel cleanly, plus where federal subscription rules stand as of October 2026.',
    category: 'subscriptions',
    kind: 'guide',
    authorId: 'billix-editorial',
    publishedAt: '2026-10-13',
    reviewedAt: '2026-10-13',
    geography: US,
    alicePose: 'holding-phone',
    relatedTools: ['subscription-tracker', 'household-planner'],
    keyTakeaways: [
      'Recurring charges hide in card statements, bank accounts, app stores and annual renewals; an audit starts by listing all of them in one place.',
      'Federal law (ROSCA) already requires online subscription sellers to disclose terms, get express consent and provide simple ways to stop recurring charges.',
      'The FTC\'s 2024 "click-to-cancel" rule was vacated by a federal appeals court in 2025; in March 2026 the FTC asked for public comment on a possible new rule, and no new rule was in effect as of October 13, 2026.',
      'When canceling, keep records, check the next statement, and know that card disputes and bank stop-payment orders exist.',
    ],
    sections: [
      {
        id: 'why-audit',
        heading: 'Why subscriptions are easy to lose track of',
        blocks: [
          {
            type: 'p',
            text:
              'Subscriptions are designed to be easy to start and easy to forget. A [free trial](/glossary#free-trial) turns into a paid plan, an [auto-renewal](/glossary#auto-renewal) bills a year at a time, or a [promotional rate](/glossary#promotional-rate) quietly steps up. The FTC\'s consumer guidance notes that once a cancellation deadline passes, you may be on the hook for more payments[^1].',
          },
          {
            type: 'p',
            text:
              'An audit is simply a once-in-a-while review: find every recurring charge, decide what is still worth it, and close the rest properly. It is not about cutting everything. It is about knowing what you pay for.',
          },
        ],
      },
      {
        id: 'find-everything',
        heading: 'Step 1: find every recurring charge',
        blocks: [
          {
            type: 'list',
            items: [
              '**Card and bank statements.** Look back at least 12 months, not one, so you catch yearly renewals. Search for words like "subscription," "membership," "renewal," "monthly," or a company name you do not recognize.',
              '**App stores.** Subscriptions bought through a phone\'s app store are often billed by the store, not the app, and managed in your account settings there.',
              '**Email.** Search your inbox for "receipt," "your subscription," "renews" and "trial."',
              '**Bills that bundle extras.** Phone, internet and TV bills sometimes include add-ons such as device protection or premium channels.',
              '**Automatic bank debits.** Some services pull directly from a checking account rather than a card.',
            ],
          },
          {
            type: 'p',
            text:
              'Put everything in one list with the name, price, billing frequency, next renewal date, and which card or account pays it. A Billix subscription tracker is [on our tools roadmap](/tools); until then, a simple spreadsheet works.',
          },
        ],
      },
      {
        id: 'decide',
        heading: 'Step 2: decide what stays',
        blocks: [
          {
            type: 'p',
            text: 'For each item, a few questions make the decision easier:',
          },
          {
            type: 'list',
            items: [
              'When did I last use it, and how often?',
              'What does it cost per year, not per month? Multiplying by 12 changes how a price feels.',
              'Am I paying for overlapping services, such as two music or storage plans?',
              'Is this a promotional price, and what will the regular price be? When does it change?',
              'Is there a cheaper tier, an annual option, or a pause option that fits how I use it?',
            ],
          },
          {
            type: 'p',
            text:
              'There is no right number of subscriptions. Some households find that rotating services, keeping one at a time and switching every few months, fits their habits; others prefer stability. The point is that each charge is a choice rather than an accident.',
          },
        ],
      },
      {
        id: 'cancel-cleanly',
        heading: 'Step 3: cancel cleanly',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              '**Use the company\'s cancellation instructions,** and keep a copy of your cancellation request plus notes about any conversations, as the FTC advises[^1]. Screenshots of a confirmation page or email count.',
              '**Watch the next statement.** If the company keeps charging after you canceled, the FTC suggests disputing the charge with your credit or debit card issuer[^1].',
              '**For bank debits,** the CFPB describes a two-part process: tell the company you are revoking permission for automatic payments, then tell your bank or credit union. A stop-payment order is a separate option, and banks often charge for it[^6]. Under federal rules, a bank must honor an oral stop-payment order for a preauthorized debit made at least three business days before the scheduled payment, and may ask for written confirmation within 14 days[^7].',
              '**Remember the contract.** Stopping a payment does not by itself cancel a service contract, and stopping a loan payment does not end the loan[^6].',
              '**Report problems.** The FTC takes reports at ReportFraud.ftc.gov and also points people to their state attorney general[^1].',
            ],
          },
          {
            type: 'callout',
            tone: 'tip',
            title: 'Calendar the renewal dates you keep',
            text:
              'For anything you keep, put the next renewal date on your calendar a week early. It gives you time to decide before the charge, not after.',
          },
        ],
      },
      {
        id: 'keep-it-tidy',
        heading: 'Step 4: keep it from creeping back',
        blocks: [
          {
            type: 'p',
            text:
              'Recurring charges tend to build up again over time, so an audit works best as a habit rather than a one-time cleanup. A few approaches people use:',
          },
          {
            type: 'list',
            items: [
              '**Repeat the review on a schedule,** such as every three or six months, and always look back far enough to catch yearly renewals.',
              '**Note the end date of every promotion or trial** the day you sign up, along with the regular price it will switch to.',
              '**Keep subscriptions on as few payment methods as practical,** so one statement shows most of them. When a card is replaced, the charges that fail to go through can be a useful reminder of what is still active.',
              '**Watch for price changes.** Many services raise prices with an email notice. A sudden higher charge is a natural moment to reconsider.',
            ],
          },
        ],
      },
      {
        id: 'what-the-law-says',
        heading: 'What the law says right now (as of October 13, 2026)',
        blocks: [
          {
            type: 'p',
            text:
              'A federal law already covers online subscriptions. The **Restore Online Shoppers\' Confidence Act (ROSCA)** bars charging for goods or services sold online with a negative option feature unless the seller clearly discloses all material terms before taking billing information, gets the consumer\'s express informed consent before charging, and provides simple mechanisms to stop recurring charges[^2].',
          },
          {
            type: 'p',
            text:
              'You may have heard of the FTC\'s **"click-to-cancel" rule**. In 2024 the FTC finalized amendments to its Negative Option Rule that would have required, among other things, that canceling be as easy as signing up. Businesses challenged it, and the U.S. Court of Appeals for the Eighth Circuit **vacated the 2024 rule in 2025**, finding the FTC\'s failure to issue a preliminary regulatory analysis "procedurally insufficient." In February 2026 the FTC restored the rule\'s text to the version that existed before the 2024 amendments[^3].',
          },
          {
            type: 'p',
            text:
              'In March 2026 the FTC published an advance notice of proposed rulemaking asking for public comment on whether to amend the Negative Option Rule, including possibly adopting provisions of the vacated 2024 rule[^4]. That is an early step, not a new rule. As of October 13, 2026, the FTC\'s rule page listed no proposed or final rule after that notice[^5]. Some states have their own automatic-renewal laws, which vary.',
          },
          {
            type: 'p',
            text:
              'For more on recurring costs, see the [subscriptions category](/categories/subscriptions), or our glossary entries on [prorated charges](/glossary#prorated-charge) and [chargebacks](/glossary#chargeback).',
          },
        ],
      },
    ],
    sources: [
      src('Getting In and Out of Free Trials, Auto-Renewals, and Negative Option Subscriptions', 'Federal Trade Commission (Consumer Advice)', 'https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions', 'Page updated September 2024.'),
      src('15 U.S.C. 8403, Prohibitions on negative option marketing on the Internet (ROSCA)', 'U.S. Government Publishing Office (govinfo)', 'https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap110-sec8403.htm'),
      src('Revision of the Negative Option Rule, Withdrawal of the CARS Rule, Removal of the Non-Compete Rule To Conform These Rules to Federal Court Decisions (91 FR, Feb. 12, 2026)', 'Federal Register (via govinfo)', 'https://www.govinfo.gov/content/pkg/FR-2026-02-12/html/2026-02866.htm', 'Describes the Eighth Circuit vacatur in Custom Communications, Inc. v. FTC (2025). Effective February 12, 2026.'),
      src('FTC Seeks Public Comment in Response to Advance Notice of Proposed Rulemaking Regarding Negative Option Marketing Practices', 'Federal Trade Commission', 'https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option', 'March 11, 2026.'),
      src('Negative Option Rule', 'Federal Trade Commission', 'https://www.ftc.gov/legal-library/browse/rules/negative-option-rule', 'Checked October 13, 2026; most recent listed action was the March 13, 2026 ANPRM.'),
      src('How do I stop automatic payments from my bank account?', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-stop-automatic-payments-from-my-bank-account-en-2023/'),
      src('12 CFR 1005.10, Preauthorized transfers (Regulation E)', 'Consumer Financial Protection Bureau', 'https://www.consumerfinance.gov/rules-policy/regulations/1005/10/'),
    ],
  },
]
