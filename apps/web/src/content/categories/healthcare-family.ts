import type { BillCategory } from '../types'

export const healthcareFamily: BillCategory = {
  slug: 'healthcare-family',
  name: 'Healthcare & Family',
  shortName: 'Healthcare & Family',
  tagline:
    'Health insurance premiums, deductibles, EOBs, medical bills, prescriptions and child care: how the pieces fit and how to check them.',
  intro: [
    "Health costs rarely arrive as one simple bill. You may pay a monthly **premium** for insurance, then a **deductible**, **copays** or **coinsurance** when you get care. After a visit, your insurer may send an **explanation of benefits (EOB)**, and the doctor's office or hospital may send a separate bill. Prescriptions and family costs like child care add more bills to the month.",
    "Understanding how these pieces connect can help you spot mistakes. For example, an EOB is not a bill, and the bill from your provider generally should not be higher than the patient balance shown on your EOB.[^8] Federal law also protects most people from certain surprise medical bills.[^9]",
    "This guide explains how health and family bills work, how to read an EOB step by step, and what to compare when you review your costs. It is general education, not medical, legal or financial advice. Plans, benefits and assistance programs vary by insurer, employer and state, so your plan documents are the final word.",
  ],
  howItWorks: {
    summary:
      'Health insurance spreads costs between you and your plan. You pay a **premium** every month whether or not you get care.[^1] When you do get care, you usually pay a share through your **deductible**, **copayments** and **coinsurance**, up to a yearly **out-of-pocket maximum**.[^5]',
    points: [
      {
        title: 'Premium',
        body: 'The amount you pay for your health insurance every month.[^1] Premiums do not count toward your out-of-pocket maximum.[^5]',
      },
      {
        title: 'Deductible',
        body: 'The amount you pay for covered services before your plan starts to pay. Marketplace plans cover certain preventive services in full even before you meet the deductible. Family plans often have both an individual and a family deductible.[^2]',
      },
      {
        title: 'Copayments and coinsurance',
        body: 'A **copayment** is a fixed amount, like $20, for a covered service.[^3] **Coinsurance** is a percentage of the cost, like 20%, that you pay after meeting your deductible.[^4] Plans with lower monthly premiums generally have higher copayments.[^3]',
      },
      {
        title: 'Out-of-pocket maximum',
        body: 'The most you have to pay for covered, in-network services in a plan year. After you reach it, the plan pays 100% of covered benefits. It does not include premiums, out-of-network care or services your plan does not cover. For 2026 Marketplace plans the limit is $10,600 for an individual and $21,200 for a family.[^5]',
      },
      {
        title: 'Prescriptions',
        body: "Each plan has a **formulary**, the list of prescription drugs it covers.[^7] For people with Medicare drug coverage, out-of-pocket costs for covered Part D drugs are capped at $2,100 in 2026.[^12]",
      },
      {
        title: 'Child care',
        body: 'Child care can be a major family expense. Federal data show prices vary by county, by the age of the child and by the type of care.[^16] Help can come from state assistance programs, Head Start, state pre-K, tax credits and employer dependent care accounts.[^15]',
      },
    ],
  },
  commonCharges: [
    {
      name: 'Monthly premium',
      description:
        'What you pay each month to keep your health coverage, whether or not you use care.[^1] Employer plans often take it out of your paycheck.',
    },
    {
      name: 'Deductible',
      description:
        'The amount you pay for covered care before your plan begins to pay its share.[^2]',
    },
    {
      name: 'Copayment (copay)',
      description:
        'A fixed amount for a service, such as an office visit or a prescription. Copays can differ by service within the same plan.[^3]',
    },
    {
      name: 'Coinsurance',
      description:
        'Your percentage share of the allowed cost of a covered service after your deductible. With 20% coinsurance on a $100 allowed amount, you pay $20.[^4]',
    },
    {
      name: 'Provider charges vs. allowed amount',
      description:
        'On an EOB, **provider charges** are what the provider billed, while **allowed charges** are what the plan recognizes for payment. They are often different.[^8]',
    },
    {
      name: 'Patient balance',
      description:
        'What you owe after the insurer pays its share, shown on your EOB. Your provider bill generally should not be higher than this amount.[^8]',
    },
    {
      name: 'Prescription costs',
      description:
        'What you pay at the pharmacy depends on your plan and whether the drug is on its formulary.[^7] Medicare Part D enrollees will not pay more than $2,100 out of pocket for covered drugs in 2026.[^12]',
    },
    {
      name: 'Child care tuition and fees',
      description:
        'Weekly or monthly fees for a child care center, family child care home or other provider. Prices differ by county, age group and care setting.[^16]',
    },
  ],
  whyCostsRise: [
    {
      title: 'Using care early in the plan year',
      body: 'Until you meet your deductible, you generally pay the full allowed cost of most non-preventive services yourself. For example, if you have not met your deductible, you pay the full allowable amount for a visit instead of a copay.[^3]',
    },
    {
      title: 'Going out of network',
      body: 'Out-of-network care does not count toward your out-of-pocket maximum, and providers may bill more than the allowed amount.[^5] The No Surprises Act limits some of these bills, such as most emergency care.[^9]',
    },
    {
      title: 'Choosing a lower premium plan',
      body: 'Lower premium plans often come with higher out-of-pocket costs when you get care. A Bronze plan pays about 60% of covered costs on average, while a Gold plan pays about 80%.[^6]',
    },
    {
      title: 'Drug coverage changes',
      body: 'If a medicine is not on your plan formulary, or moves to a different coverage level, what you pay can change.[^7]',
    },
    {
      title: 'Billing errors',
      body: 'Bills can include services you did not receive or amounts that do not match your EOB. Comparing the two is one of the simplest checks you can make.[^8]',
    },
    {
      title: 'Child care prices',
      body: 'Child care prices depend on where you live, the age of your child and the type of care, so a move, a new baby or a change in care setting can change the bill.[^16]',
    },
  ],
  readingYourBill: [
    {
      title: '1. Remember: an EOB is not a bill',
      body: 'An explanation of benefits shows how your plan handled a claim and what you may owe. Wait for the bill from your provider before paying.[^8]',
    },
    {
      title: '2. Check the patient and claim details',
      body: 'Confirm the patient name, the provider, the date of service and the claim number. Make sure the services listed are ones you actually received.[^8]',
    },
    {
      title: '3. Compare provider charges and allowed charges',
      body: '**Provider charges** are what the provider billed. **Allowed charges** are what your plan will recognize. **Paid by insurer** is the plan share.[^8]',
    },
    {
      title: '4. Find what you owe',
      body: 'The **patient balance** (or "what you owe") is your share after the insurer pays. It may include deductible, copay or coinsurance amounts.[^8][^2]',
    },
    {
      title: '5. Read the remark codes',
      body: 'Short codes explain adjustments or denials. Their meanings are usually listed at the bottom of the EOB.[^8]',
    },
    {
      title: '6. Match the EOB to the provider bill',
      body: 'Check that dates and services match, and that the bill is not higher than the patient balance. If it is, contact the provider. If something does not add up, call your plan or the No Surprises Help Desk at 1-800-985-3059.[^8]',
    },
    {
      title: '7. Track your progress toward the deductible and out-of-pocket maximum',
      body: 'Your deductible, copays and coinsurance for in-network care count toward your yearly out-of-pocket maximum.[^5] Your plan can tell you how much you have paid so far, which helps you plan for upcoming care.',
    },
  ],
  reviewTips: [
    {
      title: 'Keep EOBs and bills together',
      body: 'File each EOB with the matching provider bill. Check your own records too, since the EOB does not show whether you already paid part of the balance.[^8]',
    },
    {
      title: 'Ask for a good faith estimate if you are paying yourself',
      body: 'If you do not use insurance, providers usually must give you a good faith estimate when you schedule care at least three business days ahead, or when you ask. If your bill is at least $400 more than the estimate, you may be able to dispute it.[^10]',
    },
    {
      title: 'Know your surprise billing protections',
      body: 'Since January 1, 2022, the No Surprises Act has protected people from unexpected out-of-network bills for most emergency care, certain care at in-network facilities, and air ambulance services.[^9]',
    },
    {
      title: 'Look up hospital prices',
      body: 'Hospitals must post their prices online, including a consumer-friendly list of shoppable services.[^11]',
    },
    {
      title: 'Use tax-advantaged accounts if you have them',
      body: 'A **health savings account (HSA)** requires a high deductible health plan. A **health FSA** through an employer lets you pay for qualified medical expenses with money that is not subject to federal income or employment taxes.[^13]',
    },
    {
      title: 'Check child care help',
      body: 'Eligibility for state child care assistance is different in each state.[^15] The federal child and dependent care credit may help if you paid for care for a child under 13 so you could work or look for work.[^14]',
    },
    {
      title: 'Put health and family costs in your budget',
      body: 'Add premiums, expected copays, prescriptions and child care to a [household planner](/tools) (coming soon) so the big monthly amounts are visible next to your other bills.',
    },
  ],
  relatedTools: ['household-planner'],
  comparisons: [
    {
      title: 'Plans: total cost, not just the premium',
      body: 'Compare the premium together with the deductible, copays, coinsurance and out-of-pocket maximum. Marketplace metal levels show how costs are split on average: Bronze plans pay about 60%, Silver 70%, Gold 80% and Platinum 90%.[^6] The metal level says nothing about quality of care.[^6]',
    },
    {
      title: 'Drug coverage',
      body: "If you take regular medicines, check each plan's formulary to see whether they are covered and at what cost.[^7]",
    },
    {
      title: 'Network',
      body: 'Check whether your doctors and nearby hospitals are in network, since out-of-network care does not count toward the out-of-pocket maximum.[^5]',
    },
    {
      title: 'Child care options',
      body: 'Compare care settings (centers, family child care homes, pre-K), hours, what is included, and any public help you may qualify for, such as Head Start, state pre-K or state assistance programs.[^15] The Department of Labor publishes county-level child care price data you can use as a reference point.[^16]',
    },
  ],
  faqs: [
    {
      q: 'Is an explanation of benefits (EOB) a bill?',
      a: 'No. An EOB explains how your plan processed a claim and what you may owe. The bill comes from your provider and generally should not be higher than the patient balance on the EOB.[^8]',
    },
    {
      q: 'Do my premiums count toward my out-of-pocket maximum?',
      a: 'No. Premiums, out-of-network care and services your plan does not cover do not count toward the out-of-pocket maximum.[^5]',
    },
    {
      q: 'What is the difference between a copay and coinsurance?',
      a: 'A copay is a fixed dollar amount, like $20.[^3] Coinsurance is a percentage of the allowed cost, like 20%, that you pay after your deductible.[^4]',
    },
    {
      q: 'What is a surprise medical bill?',
      a: 'An unexpected bill from an out-of-network provider you did not choose, such as during emergency care. The No Surprises Act protects you from these bills for most emergency care, certain care at in-network facilities and air ambulance services.[^9]',
    },
    {
      q: 'I do not have insurance. Can I find out the cost before I get care?',
      a: 'Usually, yes. Providers generally must give a good faith estimate if you schedule care at least three business days ahead or ask for one. A bill at least $400 above the estimate may be disputed.[^10]',
    },
    {
      q: 'Is there a cap on prescription costs for Medicare?',
      a: 'Yes. For Medicare Part D, once your out-of-pocket spending on covered drugs reaches $2,100 in 2026, you pay nothing more for covered drugs that year.[^12]',
    },
    {
      q: 'Is there help with child care costs?',
      a: 'Options include state child care assistance, Head Start and Early Head Start for eligible families, state pre-K, the child and dependent care tax credit, and employer dependent care FSAs.[^15][^14]',
    },
    {
      q: 'Who do I call if my bill looks wrong?',
      a: 'Start with the provider and your health plan. For questions about surprise billing protections or good faith estimates, the No Surprises Help Desk is 1-800-985-3059.[^9]',
    },
  ],
  stateNotes: {
    summary:
      'Federal protections like the No Surprises Act apply nationwide,[^9] but many other health insurance rules depend on the type of plan you have and the state where it is sold. Child care assistance eligibility is different in each state.[^15] Check your plan documents, your state insurance department and your state child care assistance office for the rules that apply to you.',
    whoRegulates:
      '**CMS** (part of HHS) runs HealthCare.gov and Medicare and oversees the No Surprises Act and hospital price transparency rules together with other federal agencies.[^9][^11] **State insurance departments** oversee insurance companies and many plans sold in their state. The **IRS** administers HSA, FSA and child care tax rules.[^13][^14] States administer child care assistance programs.[^15]',
  },
  sources: [
    {
      title: 'Premium - Glossary',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/glossary/premium/',
      accessed: '2026-10-13',
    },
    {
      title: 'Deductible - Glossary',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/glossary/deductible/',
      accessed: '2026-10-13',
    },
    {
      title: 'Copayment - Glossary',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/glossary/co-payment/',
      accessed: '2026-10-13',
    },
    {
      title: 'Coinsurance - Glossary',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/glossary/co-insurance/',
      accessed: '2026-10-13',
    },
    {
      title: 'Out-of-pocket maximum/limit - Glossary',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/glossary/out-of-pocket-maximum-limit/',
      accessed: '2026-10-13',
      note: '2026 Marketplace limit: $10,600 individual, $21,200 family.',
    },
    {
      title: 'Health plan categories: Bronze, Silver, Gold & Platinum',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/choose-a-plan/plans-categories/',
      accessed: '2026-10-13',
    },
    {
      title: 'Formulary - Glossary',
      publisher: 'HealthCare.gov (CMS)',
      url: 'https://www.healthcare.gov/glossary/formulary/',
      accessed: '2026-10-13',
    },
    {
      title: 'How to read a health insurance explanation of benefits',
      publisher: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/medical-bill-rights/help/guides/explanation-of-benefits',
      accessed: '2026-10-13',
    },
    {
      title: 'Medical bill rights (No Surprises Act)',
      publisher: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/medical-bill-rights',
      accessed: '2026-10-13',
    },
    {
      title: 'Understanding costs in advance (good faith estimates)',
      publisher: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/nosurprises/consumers/understanding-costs-in-advance',
      accessed: '2026-10-13',
    },
    {
      title: 'Hospital Price Transparency',
      publisher: 'Centers for Medicare & Medicaid Services',
      url: 'https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency',
      accessed: '2026-10-13',
    },
    {
      title: 'How much does Medicare drug coverage cost?',
      publisher: 'Medicare.gov (CMS)',
      url: 'https://www.medicare.gov/health-drug-plans/part-d/basics/costs',
      accessed: '2026-10-13',
      note: 'Part D out-of-pocket cap of $2,100 in 2026.',
    },
    {
      title: 'Publication 969: Health Savings Accounts and Other Tax-Favored Health Plans',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/publications/p969',
      accessed: '2026-10-13',
    },
    {
      title: 'Child and dependent care credit information',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/credits-deductions/individuals/child-and-dependent-care-credit-information',
      accessed: '2026-10-13',
    },
    {
      title: 'Child Care Financial Assistance Options',
      publisher: 'ChildCare.gov (U.S. Department of Health and Human Services)',
      url: 'https://childcare.gov/consumer-education/get-help-paying-for-child-care/child-care-financial-assistance-options',
      accessed: '2026-10-13',
    },
    {
      title: 'National Database of Childcare Prices',
      publisher: "U.S. Department of Labor, Women's Bureau",
      url: 'https://www.dol.gov/agencies/wb/topics/featured-childcare',
      accessed: '2026-10-13',
      note: 'County-level childcare price data by age of child and care setting, 2008 through 2022.',
    },
  ],
  lastReviewed: '2026-10-13',
}
