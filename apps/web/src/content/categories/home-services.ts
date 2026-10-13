import type { BillCategory } from '../types'

export const homeServices: BillCategory = {
  slug: 'home-services',
  name: 'Home Services',
  shortName: 'Home Services',
  tagline:
    'Home warranties, service contracts, pest control, lawn care and security monitoring: what you are paying for and how to check it.',
  intro: [
    'Home services are the recurring bills that keep a household running in the background. They include home warranty plans, appliance service contracts, HVAC maintenance plans, pest control, lawn care and security monitoring. Many renew automatically, which makes them easy to forget once they are set up.',
    'These bills are often contracts, not simple pay-as-you-go charges. A "home warranty" is really a **service contract** that costs extra and covers repairs or replacement of certain items, like appliances or air conditioning, for a set time.[^1] Monitoring and maintenance plans often come with a contract length, renewal terms and cancellation rules.[^3]',
    "This guide explains how these services are usually billed, how to read the contract behind them, and what to look at when you review them. It is general education, not legal advice. We do not recommend specific companies. Contract rules and licensing requirements vary by state.",
  ],
  howItWorks: {
    summary:
      'Most home service bills follow one of three patterns: a **yearly or monthly plan fee** (warranties, service contracts, monitoring), a **per-visit charge** (pest control, lawn care, repairs), or a mix of both, such as a plan fee plus a service fee each time a technician comes out.[^1]',
    points: [
      {
        title: 'Home warranties are service contracts',
        body: 'A home warranty is really a service contract. It is optional and costs extra. It is different from a builder warranty that comes with new construction, or the warranty included with a product.[^1]',
      },
      {
        title: 'Service and deductible fees',
        body: 'Beyond the plan price, many service contracts charge a deductible or a fee each time something is serviced. Some also cap how much they will pay.[^1][^2]',
      },
      {
        title: 'Monitoring contracts',
        body: 'Home security agreements usually list an installation price, a monthly, quarterly or yearly monitoring fee, and the contract length. Ask about penalties for ending the contract early and what happens if you move.[^3]',
      },
      {
        title: 'Auto-renewal',
        body: 'Many plans renew automatically. With a **negative option** plan, you are billed unless you tell the business to stop. Businesses must explain how to cancel before they collect your payment information.[^4]',
      },
      {
        title: 'Pest control plans',
        body: 'Pest control firms must be licensed by the state, and each company needs at least one certified applicator.[^6] Some plans, especially for termites, come with a guarantee and may charge a yearly inspection fee.[^6]',
      },
      {
        title: 'Lawn, repair and improvement work',
        body: 'For contractor work, a written estimate should describe the work, materials, completion date and price.[^7] Contract requirements vary by state.[^7]',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Plan or contract price',
      description:
        'The yearly or monthly fee for a home warranty, service contract or maintenance plan.[^1][^2]',
    },
    {
      name: 'Service call fee or deductible',
      description:
        'A charge you pay each time a technician comes out under a service contract.[^1][^2]',
    },
    {
      name: 'Monitoring fee',
      description:
        'The recurring charge for alarm or security monitoring, billed monthly, quarterly or yearly.[^3]',
    },
    {
      name: 'Installation or equipment charge',
      description: 'A one-time cost to install security or other equipment.[^3]',
    },
    {
      name: 'Early termination fee',
      description:
        'A penalty some contracts charge if you cancel before the term ends. Ask about it before you sign.[^3]',
    },
    {
      name: 'Transfer fee',
      description:
        'A fee some service contracts charge to move coverage to a new owner.[^2]',
    },
    {
      name: 'Per-visit treatment charge',
      description:
        'What pest control or lawn services charge for each visit or treatment, often on a recurring schedule.',
    },
    {
      name: 'Yearly inspection fee',
      description:
        'A charge some pest control guarantees, such as for termites, require to keep coverage active.[^6]',
    },
  ],
  whyCostsRise: [
    {
      title: 'Promotional prices end',
      body: 'A plan may start at a promotional rate and renew at a higher price. Check that the renewal price matches what you expected.[^4]',
    },
    {
      title: 'Automatic renewals you did not notice',
      body: 'Auto-renewing plans keep charging until you cancel. A forgotten plan is a bill that keeps going.[^4]',
    },
    {
      title: 'Service fees add up',
      body: 'Even with a plan, deductibles or service fees on each visit can make the true yearly cost much higher than the plan price.[^1]',
    },
    {
      title: 'Claims that are not covered',
      body: 'If a repair falls under an exclusion or a coverage limit, you pay for it yourself on top of the plan. If something is not listed in the contract, assume it is not covered.[^2]',
    },
    {
      title: 'Overlapping coverage',
      body: 'A plan may duplicate coverage you already have from a manufacturer\'s warranty, so you pay twice for the same protection.[^1][^2]',
    },
  ],
  readingYourBill: [
    {
      title: '1. Identify who backs the plan',
      body: 'Find the company actually responsible for coverage. It may not be the company that sold it to you. A plan is only as good as the company behind it.[^2]',
    },
    {
      title: '2. Find the price and how often you pay',
      body: 'Note the plan price and billing schedule, then work out the yearly cost so you can compare plans fairly.[^2]',
    },
    {
      title: '3. Find per-service costs',
      body: 'Look for deductibles, service call fees, shipping costs and transfer fees.[^2]',
    },
    {
      title: '4. Read the coverage list and the exclusions',
      body: 'Check which systems and appliances are covered, whether accidental damage is covered, and any caps on what the company will pay.[^1] Anything not listed is likely not covered.[^2]',
    },
    {
      title: '5. Check the term, renewal and cancellation terms',
      body: 'Find the contract length, whether it renews automatically, the renewal price, and any early termination penalty.[^3][^4]',
    },
    {
      title: '6. Learn the claims process',
      body: 'Find out how to file a claim, who does the repair and how long it may take. A slow claims process can reduce a plan\'s value.[^1][^2]',
    },
    {
      title: '7. Keep the contract and your records',
      body: 'Keep a copy of the signed contract, receipts and any cancellation request, with notes from conversations about it.[^4]',
    },
  ],
  reviewTips: [
    {
      title: 'List every recurring home service',
      body: 'Go through your bank and card statements and list every warranty, monitoring, pest, lawn and maintenance charge. Our [subscription tracker](/tools) (coming soon) can help you keep the list.',
    },
    {
      title: 'Check for duplicate coverage',
      body: 'Compare each plan to warranties you already have. If a contract offers no more than an included warranty, it may be a poor value.[^2]',
    },
    {
      title: 'Estimate the true yearly cost',
      body: 'Add the plan price to the service fees you would likely pay in a year. Some people set money aside in savings for future repairs instead of buying a service contract.[^2]',
    },
    {
      title: 'Mark renewal dates',
      body: 'Put renewal and cancellation deadlines on your calendar. A renewal notice is a reminder, not a bill, and should not ask for your card information if you already agreed to auto-renew.[^4]',
    },
    {
      title: 'Cancel in writing and keep proof',
      body: 'Follow the company\'s cancellation steps, keep a copy of your request and watch your statements. If you are charged after canceling, you can dispute the charge with your card company.[^4]',
    },
    {
      title: 'Know the Cooling-Off Rule',
      body: 'For many sales made at your home or at a temporary location, the FTC\'s **Cooling-Off Rule** gives you until midnight of the third business day to cancel. Some sales are excluded, such as sales made fully online, by mail or by phone.[^5]',
    },
    {
      title: 'Get more than one bid',
      body: 'For pest control and contractor work, get estimates from more than one company and do not automatically choose the lowest bid.[^6][^7]',
    },
  ],
  relatedTools: ['household-planner', 'subscription-tracker'],
  comparisons: [
    {
      title: 'Service contract vs. saving for repairs',
      body: 'Compare the yearly plan cost plus likely service fees against setting the same money aside for repairs. Consider how likely your items are to need repairs.[^2]',
    },
    {
      title: 'Plans side by side',
      body: 'For each plan, list the yearly price, service fee, coverage caps, exclusions, cancellation fees and claims process. Compare like with like.[^1][^2]',
    },
    {
      title: 'Monitoring contracts',
      body: 'Compare installation price, monitoring fee, contract length, early termination penalties, and what happens if you move. Make sure all promises are in the written contract.[^3]',
    },
    {
      title: 'Pest control services',
      body: 'Compare value, not just price. Ask about licensing, what the guarantee covers, and whether there is a yearly inspection fee.[^6]',
    },
  ],
  faqs: [
    {
      q: 'Is a home warranty the same as insurance?',
      a: 'No. A home warranty is a service contract that covers repair or replacement of certain items, like appliances or air conditioning, for a set time.[^1] Homeowners insurance covers different risks; see our [insurance guide](/categories/insurance).',
    },
    {
      q: 'Do I have to buy a home warranty?',
      a: 'No. A home warranty is optional, and you decide whether to buy one.[^1]',
    },
    {
      q: 'What costs should I expect beyond the plan price?',
      a: 'Possible costs include deductibles or service fees each time something is serviced, shipping costs, transfer fees and repairs that exceed coverage caps.[^1][^2]',
    },
    {
      q: 'Can I cancel a home security contract I signed at home?',
      a: 'The FTC\'s Cooling-Off Rule gives you three business days to cancel many sales made in your home, even if the equipment is already installed. The seller must give you cancellation forms and a copy of your contract.[^3][^5]',
    },
    {
      q: 'What should I do if I keep getting charged after canceling?',
      a: 'Keep a copy of your cancellation request and notes from conversations. Dispute the charge with your credit or debit card company, and you can report the problem to the FTC and your state attorney general.[^4]',
    },
    {
      q: 'How do I know if a pest control company is licensed?',
      a: 'Firms offering pest control must be licensed by the state, and you can verify licenses with your state Department of Agriculture.[^6] Government agencies do not endorse any service company or pesticide product.[^6]',
    },
    {
      q: 'I got a call about my "expiring warranty." Is it real?',
      a: 'Be careful. Unsolicited calls or mail selling service contracts may have no connection to the company you bought from, and may push for personal or payment information.[^2]',
    },
  ],
  stateNotes: {
    summary:
      'Many rules for home services are set by states. Contract requirements for home improvement work vary by state, and some states limit how much a contractor can ask for as a down payment.[^7] Pest control companies must be licensed by the state.[^6] Rules on service contracts, auto-renewals and cancellations can also differ, so check with your state attorney general or consumer protection office.',
    whoRegulates:
      'The **Federal Trade Commission (FTC)** enforces federal consumer protection rules, including the Cooling-Off Rule, and takes reports at ReportFraud.ftc.gov.[^4][^5] Your **state attorney general** or consumer protection office handles many complaints. Pest control licensing is usually handled by your **state Department of Agriculture** or pesticide regulatory agency.[^6] Contractor licenses are typically checked with your state or county government.[^7]',
  },
  sources: [
    {
      title: "So what's the deal with \"home warranties\"?",
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts/2023/02/so-whats-deal-home-warranties',
      accessed: '2026-10-13',
    },
    {
      title: 'Extended Warranties and Service Contracts',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/extended-warranties-and-service-contracts',
      accessed: '2026-10-13',
    },
    {
      title: 'How To Avoid Scams When You Shop for a Home Security System',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-avoid-scams-when-you-shop-home-security-system',
      accessed: '2026-10-13',
    },
    {
      title: 'Getting In and Out of Free Trials, Auto-Renewals, and Negative Option Subscriptions',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions',
      accessed: '2026-10-13',
    },
    {
      title: "Buyer's Remorse: The FTC's Cooling-Off Rule May Help",
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/buyers-remorse-ftcs-cooling-rule-may-help',
      accessed: '2026-10-13',
    },
    {
      title: 'Tips for Selecting a Pest Control Service',
      publisher: 'U.S. Environmental Protection Agency',
      url: 'https://www.epa.gov/safepestcontrol/tips-selecting-pest-control-service',
      accessed: '2026-10-13',
    },
    {
      title: 'How To Avoid a Home Improvement Scam',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
