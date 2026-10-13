import type { BillCategory } from '../types'

export const insurance: BillCategory = {
  slug: 'insurance',
  name: 'Home & Auto Insurance',
  shortName: 'Insurance',
  tagline:
    'Homeowners, renters, auto and umbrella coverage: what your premium buys, how deductibles work and why prices change.',
  intro: [
    'Insurance is a bill you pay hoping you never use it. Each month or year you pay a **premium**. In exchange, the insurer agrees to pay for certain losses, up to set limits, after you pay your **deductible**. Homeowners, renters, auto and umbrella policies each cover different risks, and the details live in a few pages most people never read.',
    'Insurance can also hide inside other bills. If you have a mortgage with an escrow account, your homeowners premium is often paid from that account, so a higher premium can raise your mortgage payment.[^9] Your rate depends on many things, including where you live, the cost to rebuild your home or repair your car, your claims history and your deductible.[^3]',
    "This guide explains how these policies work, how to read a declarations page, and what to compare when you review your coverage. It is general education, not insurance or legal advice. Coverage, pricing rules and required coverages vary by state and by insurer, so your policy documents are the final word.",
  ],
  howItWorks: {
    summary:
      'Every policy has the same basic parts: the **premium** you pay, the **coverages** and **limits** that set what the insurer will pay, the **deductible** you pay first, and the **exclusions** that list what is not covered. Insurance is regulated mainly by the states.[^8]',
    points: [
      {
        title: 'Homeowners insurance',
        body: 'Covers the structure of your home, your belongings and your personal liability.[^2] Flood and earthquake damage are typically excluded and need separate coverage.[^1]',
      },
      {
        title: 'Renters insurance',
        body: "Your landlord's insurance generally covers the building, not your belongings.[^5] Renters insurance helps pay to repair or replace your things after covered events like fire or theft, covers your personal liability, and some policies help with extra living costs if your home becomes unlivable.[^5]",
      },
      {
        title: 'Auto insurance',
        body: 'Most states require at least a minimum amount of **liability** coverage, which pays for damage and injuries to others when you are at fault.[^6] **Collision** pays to fix your car after a crash, and **comprehensive** covers most other damage, such as hail or hitting a deer.[^6]',
      },
      {
        title: 'Umbrella insurance',
        body: 'An **umbrella policy** adds liability protection above your auto, homeowners or renters policy, including legal defense costs. It does not pay for damage to your own home or car.[^4]',
      },
      {
        title: 'Deductibles',
        body: 'The deductible is what you pay toward a covered loss before the insurer pays. It may be a dollar amount or a percentage.[^1] A higher deductible usually means a lower premium, but more out of pocket after a claim.[^2]',
      },
      {
        title: 'Escrowed insurance',
        body: 'Many lenders require you to pay property taxes and insurance through an escrow account managed by your mortgage servicer.[^9] If your coverage lapses, the servicer may buy **force-placed insurance** and charge you. It usually protects the lender, not you, and typically costs more than a policy you buy yourself.[^10]',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Premium',
      description:
        'The price of the policy, paid monthly, every six months or yearly. It is shown on your declarations page.[^1]',
    },
    {
      name: 'Deductible',
      description:
        'What you pay toward each covered loss before the insurer pays. It can be a flat dollar amount or a percentage of the insured value.[^1][^3]',
    },
    {
      name: 'Dwelling coverage',
      description:
        "Pays to repair or rebuild your home's structure. The cost to rebuild can differ from your home's market value.[^3]",
    },
    {
      name: 'Personal property coverage',
      description:
        'Pays for your belongings. Valuable items like jewelry, art or collections may need extra coverage.[^2]',
    },
    {
      name: 'Liability and medical payments',
      description:
        'Liability covers claims if you injure someone or damage their property. Medical payments coverage pays medical costs for people hurt on your property.[^1]',
    },
    {
      name: 'Collision and comprehensive (auto)',
      description:
        'Collision covers crash damage to your car. Comprehensive covers most other damage, like hail or animal strikes.[^6]',
    },
    {
      name: 'Umbrella premium',
      description:
        'A separate policy that adds liability coverage above your primary policies.[^4]',
    },
    {
      name: 'Escrow insurance payment',
      description:
        'The part of your mortgage payment set aside to pay your homeowners insurance.[^9]',
    },
    {
      name: 'Force-placed insurance charge',
      description:
        'A charge your servicer adds if you do not keep required homeowners coverage. It is usually more expensive than buying your own policy.[^10]',
    },
  ],
  whyCostsRise: [
    {
      title: 'More severe weather and catastrophes',
      body: 'Major storms and other disasters damage more homes and cars and lead to more claims, which pushes prices up.[^3]',
    },
    {
      title: 'Higher repair and rebuilding costs',
      body: 'Labor and materials can cost more, especially in busy areas or when supplies are tight. Inflation also plays a role.[^3]',
    },
    {
      title: "Insurers' own costs",
      body: 'Insurers buy insurance for themselves, called **reinsurance**. When reinsurance and legal costs rise, those costs can show up in premiums.[^3]',
    },
    {
      title: 'Your own risk factors',
      body: "For auto, insurers weigh things like your driving record, claims history, where you park the car, and the vehicle's repair cost. For homes, they consider location, claims history, the home's age, and the roof's age and condition.[^3]",
    },
    {
      title: 'Credit-based insurance scores',
      body: 'In many states, insurers may use a **credit-based insurance score** as one rating factor. It is not the same as a credit score, and not all states allow it.[^7]',
    },
    {
      title: 'Changes in your coverage',
      body: 'Raising limits, adding coverage or lowering your deductible can raise your premium.[^2] Review your renewal notice to see what changed.',
    },
  ],
  readingYourBill: [
    {
      title: '1. Find the declarations page',
      body: 'The **declarations page** (sometimes called the information page) is the summary at the front of your policy. It lists your policy number, policy dates, insured address, mortgage holder, coverages and limits, premium and discounts.[^1]',
    },
    {
      title: '2. Check names, address and dates',
      body: 'Make sure names and the property address are correct, and that the policy dates leave no gap in coverage.[^1]',
    },
    {
      title: '3. Read each coverage and its limit',
      body: 'Each coverage, such as dwelling, personal property, liability or collision, has a limit: the most the insurer will pay. Check whether those limits still fit your situation.[^1][^2]',
    },
    {
      title: '4. Find your deductible or deductibles',
      body: 'Look for the amount you pay per loss. It may be a fixed dollar amount or a percentage of the insured value.[^1][^3] Ask your agent or insurer how the deductible applies to each coverage.[^1]',
    },
    {
      title: '5. Check replacement cost vs. actual cash value',
      body: '**Replacement cost** pays to replace with similar items without subtracting depreciation. **Actual cash value** subtracts depreciation, which usually means a smaller payment.[^1]',
    },
    {
      title: '6. Confirm the mortgage holder information',
      body: "If your insurance is paid through escrow, the lienholder listed should match your mortgage company's records.[^1] This helps the premium get paid on time.",
    },
    {
      title: '7. Look for discounts and exclusions',
      body: 'Check which discounts are applied and which risks are excluded. Flood and earthquake are typically excluded from homeowners and renters policies.[^1]',
    },
  ],
  reviewTips: [
    {
      title: 'Do a yearly insurance check-up',
      body: 'Review all your policies once a year to confirm what is covered and whether the coverage still fits, whether you rent or own.[^2]',
    },
    {
      title: 'Make a home inventory',
      body: 'A list of your belongings helps you decide how much personal property coverage you need and can help if you ever file a claim.[^2]',
    },
    {
      title: 'Choose a deductible you can afford',
      body: 'A higher deductible can lower your premium, but only choose one you could pay out of pocket after a loss.[^3]',
    },
    {
      title: 'Ask about discounts',
      body: 'Insurers may offer discounts for things like bundling policies, a claims-free history, safety features or home safety devices. Ask which ones apply to you.[^3]',
    },
    {
      title: 'Check your flood risk separately',
      body: 'Most homeowners insurance does not cover flood damage.[^11] Ask whether you need a separate flood policy.',
    },
    {
      title: 'Watch for escrow notices',
      body: 'If your premium is paid through escrow, a premium increase can change your mortgage payment.[^9] If you get a notice about lapsed coverage, act quickly and send proof of insurance to your servicer.[^10]',
    },
    {
      title: 'Ask about mitigation programs',
      body: 'Your state insurance department may know of grants, discounts or rebates for roof or home upgrades that reduce risk.[^3]',
    },
  ],
  relatedTools: ['household-planner'],
  comparisons: [
    {
      title: 'Compare quotes with the same coverage',
      body: 'When you get quotes from several insurers, make sure each uses the same coverages, limits and deductibles. Otherwise you are not comparing like with like.[^3]',
    },
    {
      title: 'Deductible vs. premium trade-off',
      body: 'Ask each insurer for prices at a few deductible levels. Weigh the yearly premium savings against how much more you would pay out of pocket after a claim.[^2][^3]',
    },
    {
      title: 'Replacement cost vs. actual cash value',
      body: 'Two policies with similar prices may pay very differently after a loss. Check which method each one uses for your home and belongings.[^1]',
    },
    {
      title: 'Bundled vs. separate policies',
      body: 'Insuring your home or apartment and your car with the same company may qualify you for a discount.[^2] Compare the bundled total against separate policies with matching coverage.',
    },
  ],
  faqs: [
    {
      q: 'What is the difference between a premium and a deductible?',
      a: 'The **premium** is what you pay to keep the policy. The **deductible** is what you pay toward a covered loss before the insurer pays the rest.[^1]',
    },
    {
      q: 'Does my landlord\'s insurance cover my belongings?',
      a: "Generally no. The landlord's policy covers the building. Renters insurance is what covers your own belongings and liability.[^5]",
    },
    {
      q: 'Does homeowners or renters insurance cover floods?',
      a: 'Flood and earthquake damage are typically excluded from homeowners and renters policies.[^1] Most homeowners insurance does not cover flood damage, so flood coverage is usually a separate policy.[^11]',
    },
    {
      q: 'Why did my mortgage payment change when my insurance renewed?',
      a: 'If your homeowners insurance is paid through escrow, a change in the premium changes the escrow part of your mortgage payment.[^9] See our [housing guide](/categories/housing) for how escrow works.',
    },
    {
      q: 'What is force-placed insurance?',
      a: 'If you do not have required homeowners coverage, your mortgage servicer may buy a policy and charge you. It usually protects the lender, not you, and typically costs more. Getting your own policy and sending proof to your servicer can stop it.[^10]',
    },
    {
      q: 'What does an umbrella policy cover?',
      a: 'It adds liability coverage and legal defense costs above the limits of your auto, homeowners or renters policy. It does not cover damage to your own home or car.[^4]',
    },
    {
      q: 'What is a credit-based insurance score?',
      a: 'It is a score built from parts of your credit history that some insurers use as one factor in pricing. It is different from a credit score, and not all states allow it.[^7]',
    },
    {
      q: 'Where can I complain about an insurance company?',
      a: 'Your state insurance department handles complaints about insurers and agents. The NAIC website lists contact information for every state.[^8]',
    },
  ],
  stateNotes: {
    summary:
      'Insurance is regulated mainly at the state level, so rules differ from place to place. Required auto coverages and minimum limits, whether insurers may use credit-based insurance scores, how rates are reviewed, and which discounts or mitigation programs exist all vary by state.[^6][^7] Prices also depend heavily on local risks such as storms and wildfire.[^3]',
    whoRegulates:
      'Each state has an **insurance department** (or commissioner) that licenses insurers and agents and handles consumer complaints. The **National Association of Insurance Commissioners (NAIC)** lists contacts for every state department.[^8] Force-placed insurance on mortgages is covered by federal servicing rules overseen by the **CFPB**.[^10] Federal flood insurance is offered through FEMA\'s National Flood Insurance Program.[^11]',
  },
  sources: [
    {
      title: "Understanding Your Homeowners or Renter's Policy",
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/consumer-insight-understanding-your-homeowners-or-renters-policy',
      accessed: '2026-10-13',
    },
    {
      title: 'Your Annual Insurance Check-up',
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/consumer-insight-your-annual-insurance-check',
      accessed: '2026-10-13',
    },
    {
      title: 'Why Are My Insurance Premiums Increasing?',
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/why-are-my-insurance-premiums-increasing',
      accessed: '2026-10-13',
    },
    {
      title: "What's an Umbrella Policy?",
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/whats-umbrella-policy',
      accessed: '2026-10-13',
    },
    {
      title: 'For Rent: Protecting Your Belongings With Renters Insurance',
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/consumer-insight-rent-protecting-your-belongings-renters-insurance',
      accessed: '2026-10-13',
    },
    {
      title: 'Back to School',
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/consumer-insight-back-school',
      accessed: '2026-10-13',
      note: 'Auto section: state minimum liability, collision and comprehensive.',
    },
    {
      title: "Credit-Based Insurance Scores Aren't the Same as a Credit Score",
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/article/consumer-insight-credit-based-insurance-scores-arent-same-credit-score-understand-how-credit-and-other-factors',
      accessed: '2026-10-13',
    },
    {
      title: 'State Insurance Departments',
      publisher: 'National Association of Insurance Commissioners',
      url: 'https://content.naic.org/state-insurance-departments',
      accessed: '2026-10-13',
    },
    {
      title: 'What is an escrow or impound account?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-escrow-or-impound-account-en-140/',
      accessed: '2026-10-13',
    },
    {
      title: "What can I do if my mortgage lender or servicer is charging me for force-placed homeowner's insurance?",
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-can-i-do-if-my-mortgage-lender-servicer-is-charging-me-for-force-placed-homeowners-insurance-en-219/',
      accessed: '2026-10-13',
    },
    {
      title: 'FloodSmart',
      publisher: 'FEMA National Flood Insurance Program',
      url: 'https://www.floodsmart.gov/',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
