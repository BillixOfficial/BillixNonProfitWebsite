import type { BillCategory } from '../types'

export const internetPhone: BillCategory = {
  slug: 'internet-phone',
  name: 'Internet, Phone & TV',
  shortName: 'Internet & Phone',
  tagline:
    'Home internet, mobile and landline phone, and TV bundles: what the price really includes, where fees hide, and what to check before the promo ends.',
  intro: [
    'Internet, phone, and TV bills look simple until you read them closely. The advertised price is often an **introductory rate** that ends after a set time. Equipment rental, taxes, and a list of company-named fees can sit on top of the monthly price. And when services are bundled together, it can be hard to tell what each one costs.',
    'Unlike electricity or water, most of these services are not priced by a state rate regulator. Companies set their own prices for most internet, wireless, and TV plans, and much of the consumer protection comes from disclosure rules. For example, the Federal Communications Commission (FCC) requires home and mobile internet providers to show a **broadband consumer label** for each standalone plan, modeled on a nutrition label, that lists prices, introductory rates, data allowances, and speeds[^1].',
    'This guide walks through how these bills work, the charges you will commonly see, why bills creep up, and how to read and compare them without guessing. Plans, fees, and availability vary by provider and by address. Look up unfamiliar terms in the [glossary](/glossary).',
  ],
  howItWorks: {
    summary:
      'You pay a monthly plan price, plus any equipment charges, provider-set fees, government-related pass-through fees, and taxes. Prices are mostly set by the companies themselves. Federal rules focus on disclosure, billing accuracy, and certain consumer rights, while states and local governments handle some phone and cable oversight.',
    points: [
      {
        title: 'Home internet: plan price plus extras',
        body: 'Home internet can come over DSL phone lines, cable, fiber, fixed wireless, or satellite[^11]. Your bill usually shows a monthly plan price and may add modem or router rental, installation, and fees. The broadband label for your plan lists the monthly price, any introductory rate, one-time and recurring fees, data allowances, and typical speeds[^1][^2].',
      },
      {
        title: 'Introductory rates end',
        body: 'Under the law behind broadband labels, the label must say whether the offered price is an introductory rate and, if so, what you will pay after it ends[^2]. That later price is the one to plan around.',
      },
      {
        title: 'Phone bills include taxes and regulatory charges',
        body: 'Wireline and wireless phone bills can include universal service charges, 911 fees, telecommunications relay service fees, state and local taxes, and other line items[^3]. Some are government taxes; others are charges the company chooses to pass on to you.',
      },
      {
        title: 'Universal service charges',
        body: 'Telecom providers must contribute to the federal Universal Service Fund, which supports programs for rural areas, low-income consumers, schools and libraries, and rural health care[^4]. The FCC does not require providers to pass this cost to customers, but they are allowed to, usually as a percentage of the bill[^3].',
      },
      {
        title: 'Cable and satellite TV are mostly unregulated on price',
        body: 'The FCC says most rates charged by cable companies are not regulated by the FCC. Your local franchising authority may regulate the basic cable tier only in limited cases, and very few still do[^10]. Prices for other tiers and premium channels are set by the company.',
      },
      {
        title: 'Bundles combine services and pricing',
        body: 'Bundles package internet with TV, phone, or mobile service. The FCC broadband label rules do not apply to bundled plans[^2], so you may need to ask the provider for the price of each part and what happens to the total if you drop one service.',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Monthly plan or service price',
      description:
        'The base price for your internet speed tier, phone plan, or TV package. Check whether it is an introductory rate and when it ends[^2].',
    },
    {
      name: 'Equipment rental',
      description:
        'Monthly charges for a modem, router, gateway, or TV box. Some providers let you use your own compatible equipment instead.',
    },
    {
      name: 'Installation, activation, or setup fees',
      description:
        'One-time charges when you start service or change plans. These are listed on the broadband label as one-time fees for internet plans[^2].',
    },
    {
      name: 'Provider-set recurring fees',
      description:
        'Fees with names chosen by the company, such as network, regulatory recovery, or broadcast TV fees. These are not government taxes. Broadband labels must itemize monthly fees the provider adds to the base price[^2].',
    },
    {
      name: 'Universal service charge',
      description:
        'A pass-through of the provider\'s Universal Service Fund contribution. Optional for the provider to collect, and it cannot exceed the provider\'s own contribution percentage[^3].',
    },
    {
      name: '911, relay service, and number portability fees',
      description:
        'Charges that help fund emergency 911 service, relay services for people with hearing or speech disabilities, and keeping your number when you switch carriers. The FCC notes these fees vary by company and are not taxes[^3].',
    },
    {
      name: 'Taxes',
      description:
        'State and local taxes, sometimes shown as gross receipts taxes. A 3% federal excise tax applies only to local phone service billed separately from long distance[^3].',
    },
    {
      name: 'Franchise fees (cable TV)',
      description:
        'Fees cable companies pay to the local franchising authority for using public rights of way, often passed through on your bill[^10].',
    },
    {
      name: 'Overage, roaming, and usage charges',
      description:
        'Extra charges for going over a data allowance, roaming outside your plan\'s network, or paying per minute or per message on limited plans[^3].',
    },
    {
      name: 'Late fees and early termination fees',
      description:
        'Charges for late payment, or for ending a contract or device payment plan early. Broadband labels list contract length and early termination fees where they apply[^2].',
    },
  ],
  whyCostsRise: [
    {
      title: 'A promotional rate expires',
      body: 'Many plans start with an introductory price. When it ends, the bill moves to the regular rate. The broadband label must show the post-promotion price for internet plans[^2], so it is worth saving a copy when you sign up.',
    },
    {
      title: 'Fees are added or increased',
      body: 'Provider-set fees can rise separately from the plan price. In 2026 the FCC approved changes that, once in effect, let providers show location-based pass-through fees on the label as a single "up to" maximum or an exact local total instead of itemizing each one[^2]. Compare your bill to the label for your current plan.',
    },
    {
      title: 'Equipment and add-ons',
      body: 'A new router, an extra TV box, a premium channel, or a device payment plan can add to the monthly total. Check whether anything was added that you did not request.',
    },
    {
      title: 'Universal service and government-related charges change',
      body: 'Universal service charges usually appear as a percentage of your phone bill, so they rise when other charges rise[^3]. Taxes and 911 fees are set by state and local governments and can change too.',
    },
    {
      title: 'Bundle discounts disappear',
      body: 'If you drop one service from a bundle, or a bundle discount expires, the remaining services may cost more than before. Ask for the new price of each service before making changes.',
    },
    {
      title: 'Unauthorized charges',
      body: 'The FCC calls the illegal practice of placing unauthorized charges on a phone bill **cramming**, and says crammed charges are often small, sometimes only $1 to $3, and can stay on bills for years[^3].',
    },
  ],
  readingYourBill: [
    {
      title: '1. Check the account summary',
      body: 'Confirm your name, account number, service address, billing period, previous balance, payments received, and total due.',
    },
    {
      title: '2. List each service you are billed for',
      body: 'Write down every service: internet, each phone line, TV package, streaming add-ons, and device payments. Make sure you recognize all of them.',
    },
    {
      title: '3. Find the plan price and promo end date',
      body: 'Look for the plan price and any promotional credit. If there is a credit, find when it ends. Compare it with the broadband label for your current plan, which providers with online account portals must make easily accessible[^2].',
    },
    {
      title: '4. Separate equipment, fees, and taxes',
      body: 'Group the remaining lines into equipment rental, provider-set fees, government-related charges like universal service and 911, and taxes[^3]. The provider-set fees are usually the ones that change without notice in the plan price.',
    },
    {
      title: '5. Look for third-party charges',
      body: 'FCC Truth in Billing rules require phone bills to identify the provider for each charge, and wireline bills must put third-party charges in a separate section with their own subtotal[^3]. Question any company name you do not recognize.',
    },
    {
      title: '6. Check usage-based charges',
      body: 'On mobile and some home internet plans, look for data overages, roaming, or per-message charges[^3]. Compare them with your plan\'s allowances.',
    },
    {
      title: '7. Note the dispute contact',
      body: 'Truth in Billing rules require phone bills to show one or more toll-free numbers to call about or dispute a charge[^3]. Keep that number with your bill.',
    },
  ],
  reviewTips: [
    {
      title: 'Save your broadband label at signup',
      body: 'In 2026 the FCC approved dropping the requirement that providers keep labels for plans they no longer sell, once the change takes effect[^2]. A screenshot or saved copy of the label you signed up under gives you a record of the promised price, fees, and speeds.',
    },
    {
      title: 'Match your speed to your household',
      body: 'The FCC publishes rough guidelines, not requirements: for example, it lists 5 to 8 Mbps for streaming HD video and 25 Mbps for 4K video for a single activity[^6], and groups household needs by how many people and devices are online at once[^7]. Use them as a starting point when reviewing your plan.',
    },
    {
      title: 'Review every line for cramming',
      body: 'The FCC suggests asking: Do I recognize every company on my bill? Does it include services I did not authorize? Are the rates the ones I was quoted[^3]? Ask about small, vague charges like "service fee" or "monthly fee."',
    },
    {
      title: 'Check whether you qualify for Lifeline',
      body: 'Lifeline is an FCC program that provides up to a $9.25 monthly discount on qualifying phone, internet, or bundled service, or up to $34.25 on Tribal lands, for eligible low-income households. You may qualify if household income is at or below 135% of the federal poverty guidelines or you take part in programs like SNAP or Medicaid. Only one Lifeline benefit is allowed per household[^5].',
    },
    {
      title: 'List your subscriptions in one place',
      body: 'Streaming services, premium channels, and add-ons are easy to forget. The [subscription tracker](/tools) (coming soon) can help you see them all together and spot ones you no longer use.',
    },
    {
      title: 'Know where to complain',
      body: 'Start with the company. If that does not resolve it, the FCC says to file with the FCC for interstate or international telephone charges, your state public service commission for in-state telephone service, and the Federal Trade Commission for non-telephone charges on your phone bill[^3]. For cable customer service and bill complaints, your local franchising authority, named on your cable bill, may help[^10].',
    },
  ],
  relatedTools: ['internet-plans', 'subscription-tracker'],
  comparisons: [
    {
      title: 'Total monthly cost after the promotion, not the ad price',
      body: 'For each internet plan, add the regular monthly price after any introductory period, equipment rental, and all recurring fees from the broadband label[^1][^2]. Compare those totals, and note the contract length and any early termination fee.',
    },
    {
      title: 'Bundle price vs. buying services separately',
      body: 'Ask for the price of each service on its own and in the bundle, including what happens when bundle discounts end. Because bundled plans do not need a broadband label[^2], you may need to request this in writing.',
    },
    {
      title: 'Which providers serve your address',
      body: 'The FCC National Broadband Map shows which providers report offering service at a specific address, the type of technology, and the maximum advertised speeds[^8]. Use it to see your options before comparing prices, and challenge the map if it is wrong.',
    },
    {
      title: 'Speed you pay for vs. speed you need',
      body: 'Compare your plan\'s typical speeds from the label[^1] with the FCC\'s rough household guidelines[^7]. A faster plan costs more; a plan that is too slow for your household may be frustrating. Choose based on how many people and devices are online at once.',
    },
  ],
  faqs: [
    {
      q: 'What is a broadband label?',
      a: 'A standardized summary, modeled on a nutrition label, that internet providers must show for each standalone home and mobile broadband plan. It covers price, introductory rates, data allowances, and speeds[^1]. Look for it wherever you shop for a plan, online or in stores.',
    },
    {
      q: 'Is the "universal service" charge a tax?',
      a: 'No. Providers must contribute to the federal Universal Service Fund, and the FCC allows, but does not require, them to recover that cost from customers. It usually appears as a percentage of your bill and cannot exceed the provider\'s own contribution percentage[^3].',
    },
    {
      q: 'Can I keep my phone number if I switch providers?',
      a: 'Generally yes, if you stay in the same area. Your old company cannot refuse to port your number, even if you owe a balance or a termination fee. The FCC advises starting service with the new company before canceling the old one, and says simple ports must be processed within one business day[^9].',
    },
    {
      q: 'What happened to the Affordable Connectivity Program?',
      a: 'The Affordable Connectivity Program (ACP), which provided internet discounts, ended on June 1, 2024[^2]. The FCC\'s Lifeline program still offers a smaller monthly discount for eligible households[^5].',
    },
    {
      q: 'Who sets cable TV prices?',
      a: 'Mostly the cable company. The FCC says most cable rates are not regulated by the FCC, and local franchising authorities may regulate only the basic tier, only when there is no effective competition, and very few still do[^10].',
    },
    {
      q: 'What is cramming, and how do I spot it?',
      a: 'Cramming is placing unauthorized charges on your phone bill. Watch for vague descriptions like "service fee," "membership," or "monthly fee," and for charges from companies you do not recognize. Ask the phone company to remove incorrect charges[^3].',
    },
    {
      q: 'How much internet speed do I need?',
      a: 'It depends on what you do and how many people are online at once. The FCC\'s guides offer rough guidelines, such as 25 Mbps for streaming 4K video as a single activity, and note they are not based on FCC surveys or experiments[^6][^7].',
    },
    {
      q: 'Why does my bill show fees that were not in the ad?',
      a: 'Ads often show the base plan price. Equipment, provider-set fees, and taxes are usually added on top. For internet plans, the broadband label lists the fees the provider adds to the monthly price[^2], so compare it with your bill.',
    },
  ],
  stateNotes: {
    summary:
      'Taxes, 911 fees, and some telecom surcharges are set at the state and local level, so the same plan can cost different amounts in different places. State public service commissions handle in-state telephone service complaints[^3], local franchising authorities oversee cable franchises and franchise fees[^10].',
    whoRegulates:
      'The FCC oversees interstate and international communications, broadband label disclosure rules[^1], universal service[^4], number porting[^9], and Lifeline[^5]. State public service commissions handle in-state telephone matters[^12]. Local franchising authorities oversee cable TV franchises[^10]. The Federal Trade Commission handles complaints about non-telephone charges that appear on phone bills[^3].',
  },
  sources: [
    {
      title: 'Broadband Consumer Labels',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/broadbandlabels',
      accessed: '2026-10-13',
    },
    {
      title: 'FCC Fact Sheet and Report and Order: Empowering Broadband Consumers Through Transparency (July 2026)',
      publisher: 'Federal Communications Commission',
      url: 'https://docs.fcc.gov/public/attachments/DOC-422742A1.pdf',
      accessed: '2026-10-13',
      note: 'Circulated draft of the order adopted at the July 2026 open meeting; describes prior label requirements and 2026 changes.',
    },
    {
      title: 'Understanding Your Telephone Bill',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/understanding-your-telephone-bill',
      accessed: '2026-10-13',
    },
    {
      title: 'Universal Service',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/general/universal-service',
      accessed: '2026-10-13',
    },
    {
      title: 'Lifeline Support for Affordable Communications',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/lifeline-consumers',
      accessed: '2026-10-13',
    },
    {
      title: 'Broadband Speed Guide',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/broadband-speed-guide',
      accessed: '2026-10-13',
    },
    {
      title: 'Household Broadband Guide',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/household-broadband-guide',
      accessed: '2026-10-13',
    },
    {
      title: 'Broadband Data Collection: Consumer Information (National Broadband Map)',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/BroadbandData/consumers',
      accessed: '2026-10-13',
    },
    {
      title: 'Porting: Keeping Your Phone Number When You Change Providers',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/porting-keeping-your-phone-number-when-you-change-providers',
      accessed: '2026-10-13',
    },
    {
      title: 'Regulation of Cable TV Rates',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/regulation-cable-tv-rates',
      accessed: '2026-10-13',
    },
    {
      title: 'Getting Broadband Q&A',
      publisher: 'Federal Communications Commission',
      url: 'https://www.fcc.gov/consumers/guides/getting-broadband-qa',
      accessed: '2026-10-13',
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
