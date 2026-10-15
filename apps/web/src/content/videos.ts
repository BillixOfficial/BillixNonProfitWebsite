import type { Video } from './types'

/**
 * Alice's videos. `youtubeId` stays null until a video is public on the Billix
 * channel; set it then and the page switches from "coming soon" to an embed.
 * Titles and durations match YouTube (hashtags left off). Sources mirror each
 * video's pinned comment. Uploads not listed here still appear on /videos via
 * the channel feed (src/lib/youtube.ts).
 */
const A = '2026-10-13'

export const videos: Video[] = [
  {
    slug: 'welcome-to-billix',
    title: 'You’re Paying Bills. But Do You Understand Them?',
    description:
      'Can you explain every line on your bills? Billix breaks down the bills every home pays: electricity, heating, water and sewer, internet and phone, then housing, insurance, car costs, subscriptions and the fees that sneak onto everything else.',
    kind: 'video',
    youtubeId: 'GrlaEHJ5krI',
    uploadedAt: '2026-10-13T05:08:32Z',
    duration: '2:05',
    category: 'channel',
    thumbnail: '/videos/welcome-to-billix.png',
    sources: [],
  },
  {
    slug: 'electric-bill-line-by-line',
    title: 'Why Is My Electric Bill So High? (The Hidden Charges Explained)',
    description:
      'Read your electric bill with Alice, line by line: how much you used, supply vs. delivery, the fixed customer charge, riders and taxes. Then three checks that tell you why a bill is high, plus the catch-up bill limit many people don’t know about.',
    kind: 'video',
    youtubeId: 'CcGIIwSSS2M',
    uploadedAt: '2026-10-13T14:07:32Z',
    duration: '5:18',
    category: 'electricity',
    thumbnail: '/videos/electric-bill-line-by-line.png',
    chapters: [
      { time: '0:00', label: '$159: what did you pay for?' },
      { time: '0:22', label: 'Grab your bill' },
      { time: '0:42', label: 'The pizza model: supply vs. delivery' },
      { time: '1:01', label: 'Line 1: how much you used' },
      { time: '1:20', label: 'Line 2: the fixed customer charge' },
      { time: '1:40', label: 'Quiz: delivery or electricity?' },
      { time: '2:05', label: 'Why delivery keeps growing' },
      { time: '2:29', label: 'Riders, taxes and fees' },
      { time: '2:58', label: 'Check 1: compare with last year' },
      { time: '3:20', label: 'Check 2: look for a rate change' },
      { time: '3:48', label: 'Check 3: look for an estimated reading' },
      { time: '4:13', label: 'The catch-up bill limit' },
      { time: '4:37', label: 'Bonus: the thermostat tip' },
      { time: '4:54', label: 'Still looks wrong? What to do' },
    ],
    sources: [
      { title: 'Electricity explained: Factors affecting electricity prices', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php', accessed: A },
    ],
    relatedArticles: ['how-to-read-your-electric-bill', 'supply-vs-delivery-charges'],
    relatedTools: ['electricity-cost', 'appliance-cost'],
  },
  {
    slug: 'leaving-oil-heat',
    title: 'Leaving Oil Heat: Gas, Heat Pump or Mini-Splits? (Which Is Cheaper)',
    description:
      'If your house runs on heating oil, should you switch to gas, a heat pump or mini-splits? Three questions decide it: Is gas at your street? What’s your break-even number? And what does your house actually need?',
    kind: 'video',
    youtubeId: 'xaaH5HTs0J4',
    uploadedAt: '2026-10-12T04:28:07Z',
    duration: '5:56',
    category: 'heating-cooling',
    thumbnail: '/videos/leaving-oil-heat.png',
    chapters: [
      { time: '0:00', label: 'Six-dollar oil' },
      { time: '0:26', label: 'Comparing the same heat' },
      { time: '1:11', label: 'Question 1: Is gas at your street?' },
      { time: '2:02', label: 'Question 2: Your break-even number' },
      { time: '3:09', label: 'Question 3: What does your house need?' },
      { time: '3:33', label: 'Mini-splits and the middle path' },
      { time: '4:05', label: 'The honest part' },
      { time: '4:30', label: 'The tax credit surprise' },
      { time: '4:59', label: 'So which is cheaper?' },
      { time: '5:17', label: 'Do these first + get 3 quotes' },
    ],
    sources: [
      { title: 'Heating Oil and Propane Update', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/petroleum/heatingoilpropane/', accessed: A },
    ],
    relatedArticles: ['leaving-oil-heat-options'],
    relatedTools: ['heating-comparison'],
  },
  {
    slug: 'why-water-bills-rise',
    title: 'Why Your Water Bill Keeps Going Up',
    description:
      'Homes use less water than they used to, so why do bills keep climbing? Old pipes, fixed costs and new safety rules. Plus a free 10-minute leak test.',
    kind: 'short',
    youtubeId: 'S7rrLvWBpjs',
    uploadedAt: '2026-10-10T20:44:36Z',
    duration: '0:43',
    category: 'water-sewer',
    thumbnail: '/videos/why-water-bills-rise.png',
    sources: [
      { title: 'Estimated Use of Water in the United States in 2015 (Fact Sheet 2018-3035)', publisher: 'U.S. Geological Survey', url: 'https://pubs.usgs.gov/fs/2018/3035/fs20183035.pdf', accessed: A },
      { title: '7th Drinking Water Infrastructure Needs Survey and Assessment', publisher: 'U.S. Environmental Protection Agency', url: 'https://www.epa.gov/dwsrf/epas-7th-drinking-water-infrastructure-needs-survey-and-assessment', accessed: A },
      { title: 'Fix a Leak Week', publisher: 'U.S. EPA WaterSense', url: 'https://www.epa.gov/watersense/fix-leak-week', accessed: A },
    ],
    relatedArticles: ['why-water-bills-keep-rising'],
    relatedTools: ['leak-cost', 'water-usage'],
  },
  {
    slug: 'who-owns-your-water',
    title: 'Who Owns Your Water? It Decides Your Bill',
    description:
      'About 8 in 10 Americans get water from local government and about 1 in 10 from a private system. Who owns yours decides who sets your rate. Here’s what studies found and how to look yours up.',
    kind: 'short',
    youtubeId: 'mIEovPtb5Bc',
    uploadedAt: '2026-10-11T13:00:04Z',
    duration: '0:42',
    category: 'water-sewer',
    thumbnail: '/videos/who-owns-your-water.png',
    sources: [
      { title: 'Private Water Utilities: Actions Needed to Enhance Ownership Data (GAO-21-291)', publisher: 'U.S. Government Accountability Office', url: 'https://www.gao.gov/products/gao-21-291', accessed: A },
    ],
    relatedArticles: ['public-vs-private-water'],
  },
  {
    slug: 'oil-heat-short',
    title: 'Oil vs Gas vs Heat Pumps: Which Heating System Saves You the Most Money?',
    description: 'The 27-second version: oil, gas or heat pump, and the one number that decides it.',
    kind: 'short',
    youtubeId: 'V4b7qlhraJY',
    uploadedAt: '2026-10-12T04:14:05Z',
    duration: '0:27',
    category: 'heating-cooling',
    thumbnail: '/videos/oil-heat-short.png',
    sources: [
      { title: 'Heating Oil and Propane Update', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/petroleum/heatingoilpropane/', accessed: A },
    ],
    relatedArticles: ['leaving-oil-heat-options'],
  },
  {
    slug: 'delivery-costs-more',
    title: 'Why Does Delivering Electricity Cost So Much?',
    description: 'Your electric bill has two halves. Here’s why the delivery half can be the bigger one.',
    kind: 'short',
    youtubeId: 'S09o4xGDq78',
    uploadedAt: '2026-10-13T01:27:40Z',
    duration: '0:28',
    category: 'electricity',
    thumbnail: '/videos/delivery-costs-more.png',
    sources: [
      { title: 'Electricity explained: Factors affecting electricity prices', publisher: 'U.S. Energy Information Administration', url: 'https://www.eia.gov/energyexplained/electricity/prices-and-factors-affecting-prices.php', accessed: A },
    ],
    relatedArticles: ['supply-vs-delivery-charges'],
  },
  {
    slug: 'explain-every-line',
    title: 'Can You Explain Every Line on Your Bill?',
    description: 'Most of us stop at the total. Billix breaks down the bills every home pays.',
    kind: 'short',
    youtubeId: null,
    duration: '0:24',
    category: 'channel',
    thumbnail: '/videos/explain-every-line.png',
    sources: [],
  },
]
