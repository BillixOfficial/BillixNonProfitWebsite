import type { BillCategory } from '../types'

export const housing: BillCategory = {
  slug: 'housing',
  name: 'Housing',
  shortName: 'Housing',
  tagline:
    'Mortgage payments, escrow, property taxes, HOA dues and rent: what each piece is and why it can change.',
  intro: [
    "For most households, housing is the biggest bill of the month. But it is rarely just one bill. A homeowner's payment can bundle loan principal, interest, property taxes, homeowners insurance and sometimes mortgage insurance. HOA or condo dues may be billed separately. A renter's costs can include rent plus fees for applications, pets, parking or utilities.",
    'Some parts of a housing bill stay steady for years, while others can move every year. On a fixed-rate mortgage, principal and interest usually stay the same, but the escrow part can change when property taxes or insurance premiums change.[^1] That is why a mortgage payment can go up even when the interest rate did not.',
    "This guide walks through how housing bills are built, how to read a mortgage statement and an annual escrow statement, and what to look at when you review your costs. It is general education, not legal or financial advice. Rules vary by state, by lender and by lease, so always check your own documents.",
  ],
  howItWorks: {
    summary:
      'A monthly mortgage payment is usually made up of several parts that go to different places. Your **servicer** collects the payment and sends each part where it belongs. Renters typically pay a landlord or property manager under the terms of a lease.',
    points: [
      {
        title: 'Principal and interest',
        body: 'Principal pays down what you borrowed. Interest is the cost of borrowing. Your monthly statement shows how each payment was split between principal, interest and escrow.[^3]',
      },
      {
        title: 'Escrow for taxes and insurance',
        body: "An **escrow account** (also called an impound account) is money your servicer collects with your payment to pay property-related bills, mainly property taxes and homeowners insurance. Many lenders require it.[^1] Because taxes and premiums can change from year to year, the escrow part of your payment can change too.[^1]",
      },
      {
        title: 'Your lender vs. your servicer',
        body: 'The lender made your loan. The **servicer** sends your statements, processes payments and manages any escrow account. It is common for a different company to take over servicing after the loan is made.[^6]',
      },
      {
        title: 'Mortgage insurance',
        body: '**Private mortgage insurance (PMI)** is often required on a conventional loan when the down payment is under 20 percent. It protects the lender, not you, and is most often paid as a monthly premium added to your mortgage payment.[^4] FHA and VA loans have their own, different rules.[^5]',
      },
      {
        title: 'HOA and condo dues',
        body: 'Homeowners association, condo and co-op dues are usually paid directly to the association, not through your mortgage payment.[^7] They still matter for your budget every month.',
      },
      {
        title: 'Rent and renter fees',
        body: "Renters usually pay rent plus any fees the lease allows. Landlords often use an application fee to buy a tenant screening report on the applicant.[^10] What fees are allowed, and how much, depends on state and local law and on your lease.",
      },
    ],
  },
  commonCharges: [
    {
      name: 'Principal',
      description: 'The part of your payment that reduces your loan balance.',
    },
    {
      name: 'Interest',
      description:
        'The cost of borrowing. Your statement lists your current interest rate and, for adjustable loans, the date it may next change.[^3]',
    },
    {
      name: 'Escrow deposit',
      description:
        'Money set aside each month to pay property taxes and homeowners insurance when those bills come due.[^1]',
    },
    {
      name: 'Escrow shortage payment',
      description:
        'An extra amount added after the yearly escrow review finds the account will run short. Federal rules limit how a servicer can ask you to repay it.[^2]',
    },
    {
      name: 'Private mortgage insurance (PMI)',
      description:
        'Insurance that protects the lender on many low-down-payment conventional loans. It is usually a monthly premium included in your payment.[^4]',
    },
    {
      name: 'Late fee',
      description:
        'A charge if your payment arrives after the grace period. Your statement must show the late fee amount and the date it will be charged.[^3]',
    },
    {
      name: 'Property taxes',
      description:
        "An annual tax most state and local governments levy based on the value of real property.[^9] It is often paid through escrow; if not, you pay it directly to the taxing authority.",
    },
    {
      name: 'HOA, condo or co-op dues',
      description:
        'Regular fees to the association that maintains shared areas and services. Usually paid directly to the association, not your servicer.[^7]',
    },
    {
      name: 'Rent',
      description: 'The base monthly amount set in your lease.',
    },
    {
      name: 'Rental application fee',
      description:
        'A fee charged when you apply for a rental, often used to pay for a tenant screening report.[^10] Some places limit these fees; check your state and local rules.',
    },
  ],
  whyCostsRise: [
    {
      title: 'Property taxes went up',
      body: 'Property taxes are based on the value of real property and are set by state and local governments.[^9] A new assessment or a change in local tax rates can raise your tax bill, and with it your escrow payment.[^1]',
    },
    {
      title: 'Homeowners insurance premiums went up',
      body: 'If your insurance is paid through escrow, a higher premium at renewal raises the escrow part of your payment.[^1] See our [insurance guide](/categories/insurance) for why premiums change.',
    },
    {
      title: 'An escrow shortage',
      body: 'Each year your servicer reviews the escrow account. If it projects a shortage, your payment can rise both to cover the higher bills ahead and to repay the shortage, often spread over at least 12 months.[^2]',
    },
    {
      title: 'An adjustable rate reset',
      body: 'On an adjustable-rate mortgage, the interest rate can change on set dates. Your monthly statement shows the current rate and the date it may next change.[^3]',
    },
    {
      title: 'HOA dues or special assessments',
      body: 'Associations set their own budgets. Dues can range from a few hundred dollars to more than a thousand dollars a month, depending on the community.[^7]',
    },
    {
      title: 'Rent increases at renewal',
      body: 'Rent can change when a lease renews. How much notice a landlord must give, and whether increases are limited at all, depends on state and local law and on your lease.',
    },
  ],
  readingYourBill: [
    {
      title: '1. Find the amount due and due date',
      body: 'Near the top of your mortgage statement you will find the payment due date, the amount due, and any late fee with the date it will be charged.[^3]',
    },
    {
      title: '2. Check the payment breakdown',
      body: 'The statement must explain how your monthly payment splits into principal, interest and escrow, plus any fees charged since the last statement and any past-due amount.[^3] Compare this to last month. A change in the escrow line is the most common reason a payment moves.',
    },
    {
      title: '3. Review transaction activity',
      body: 'Each payment, fee or charge since your last statement is listed with a date, a short description and an amount.[^3] Look for anything you do not recognize, such as a fee or a payment held in a "suspense" account.',
    },
    {
      title: '4. Note your balance, rate and servicer contact',
      body: 'The statement lists your outstanding principal balance, your current interest rate, any prepayment penalty, and a toll-free number to reach your servicer.[^3] Keep the contact information handy in case you need to ask a question or dispute an error.',
    },
    {
      title: '5. Read the annual escrow statement',
      body: 'Once a year your servicer must send an escrow statement within 30 days after the escrow year ends.[^2] It shows what was paid out last year, a projection for next year, and how any surplus or shortage will be handled.[^2]',
    },
    {
      title: '6. Understand a surplus or shortage',
      body: 'If you are current on payments and the review finds a surplus of $50 or more, the servicer must refund it within 30 days.[^2] If there is a shortage, the servicer may let it stand or spread repayment over at least 12 months; for small shortages it may also ask for repayment within 30 days.[^2]',
    },
    {
      title: '7. For renters: read the lease and fee list',
      body: 'Your lease is your bill rulebook. Look for the rent amount, due date, grace period, late fee, and every recurring fee (pets, parking, trash, utilities, amenities). Ask the landlord for anything unclear in writing.',
    },
  ],
  reviewTips: [
    {
      title: 'Compare each statement to the last one',
      body: 'Put two months side by side. If the total changed, find which line moved: principal and interest, escrow, or fees.[^3]',
    },
    {
      title: 'Check the tax and insurance bills behind your escrow',
      body: 'Your escrow payment depends on your actual property tax and insurance bills.[^1] Ask your servicer which bills it used in the escrow analysis and compare them to the bills you received.',
    },
    {
      title: 'Know when PMI can end',
      body: 'For many loans, you can ask in writing to cancel PMI once your balance reaches 80 percent of the home\'s original value, if you meet certain conditions, and it must end automatically at 78 percent if you are current.[^5] FHA and VA loans follow different rules.[^5]',
    },
    {
      title: 'Budget for costs outside escrow',
      body: 'HOA fees are often not included in escrow, so plan for them separately.[^8] The same goes for any tax or insurance bill you pay yourself.',
    },
    {
      title: 'Keep tax records',
      body: 'If you itemize deductions, you can generally deduct only the property taxes actually paid from escrow to the taxing authority, not simply what you deposited.[^9] HOA fees and homeowners insurance premiums are generally not deductible.[^9] A tax professional can help with your situation.',
    },
    {
      title: 'Renters: know your screening rights',
      body: 'If a landlord turns you down because of a tenant background check, you can request a free copy of that report and dispute mistakes.[^11]',
    },
    {
      title: 'Use a calculator to see the full picture',
      body: 'Our [mortgage](/tools) (coming soon) and [property tax](/tools) (coming soon) calculators can help you see how each piece adds up. Results are estimates, not quotes.',
    },
  ],
  relatedTools: ['mortgage', 'property-tax', 'rent-vs-buy', 'household-planner'],
  comparisons: [
    {
      title: 'Total monthly housing cost, not just principal and interest',
      body: 'When comparing homes or loans, add principal, interest, property taxes, insurance, mortgage insurance and HOA dues. The Closing Disclosure shows an estimated total monthly payment and flags items not paid through escrow.[^8]',
    },
    {
      title: 'Renting vs. owning',
      body: "Compare the full monthly cost of each, including the costs owners carry that renters usually do not (property taxes, insurance on the structure, repairs, HOA dues) and the fees renters may pay. Our [rent vs. buy calculator](/tools) (coming soon) can help you organize the comparison.",
    },
    {
      title: 'Loan offers side by side',
      body: 'Compare the interest rate, monthly payment, mortgage insurance, and estimated taxes and insurance on each offer. Ask your lender why if the estimated total monthly payment changes between your Loan Estimate and Closing Disclosure.[^8]',
    },
    {
      title: 'Rental listings',
      body: 'For each rental, list the base rent plus every recurring and one-time fee, and which utilities are included. Two units with the same rent can cost very different amounts once fees are added.',
    },
  ],
  faqs: [
    {
      q: 'Why did my mortgage payment go up if I have a fixed rate?',
      a: 'Usually because of escrow. Property taxes and insurance premiums can change from year to year, so the escrow part of your payment can rise even when your rate stays the same.[^1]',
    },
    {
      q: 'What is an escrow shortage?',
      a: "It means your escrow account is projected to have less money than needed. After the annual review, your servicer may let it stand or spread repayment over at least 12 months. For a shortage smaller than one month's escrow payment, it may also ask for repayment within 30 days.[^2]",
    },
    {
      q: 'Will I get money back if there is extra in my escrow account?',
      a: 'If you are current on your payments and the surplus is $50 or more, the servicer must refund it within 30 days of the analysis. Smaller amounts can be refunded or credited toward next year.[^2]',
    },
    {
      q: 'Are HOA dues part of my mortgage payment?',
      a: 'Usually not. HOA, condo and co-op dues are generally paid directly to the association. Some servicers may agree to include them in escrow if you ask, but that is not common.[^7]',
    },
    {
      q: 'When does private mortgage insurance go away?',
      a: "Under federal rules for many loans, you can ask to cancel PMI when your balance reaches 80 percent of the home's original value, and it must end automatically at 78 percent if you are current. There are conditions, and FHA and VA loans have different rules.[^5]",
    },
    {
      q: 'Who do I call about my mortgage statement?',
      a: 'Your servicer, not necessarily the company that made your loan. Its toll-free number must be on your statement.[^3][^6]',
    },
    {
      q: 'Can I deduct what I pay into escrow for property taxes?',
      a: 'If you itemize, you generally deduct only the property taxes your servicer actually paid to the taxing authority during the year, not the total you deposited into escrow.[^9] Check IRS guidance or ask a tax professional.',
    },
    {
      q: 'Why do landlords charge application fees?',
      a: 'Landlords often use the application fee to buy a tenant screening report on the applicant.[^10] If you are denied because of that report, you can request a free copy and dispute errors.[^11]',
    },
  ],
  stateNotes: {
    summary:
      'Property tax rates, assessment schedules and appeal rules are set by state and local governments, so they vary widely. Landlord-tenant rules, such as security deposit limits, notice periods, rent increase rules and caps on application fees, also differ by state and sometimes by city. HOA rules depend on state law and each association\'s governing documents. Federal mortgage servicing rules on statements and escrow apply nationwide.[^2][^3]',
    whoRegulates:
      'The **Consumer Financial Protection Bureau (CFPB)** writes and enforces federal mortgage servicing rules, and you can submit complaints there. Property taxes are handled by your county or city assessor and tax collector. Landlord-tenant law is set by your state and locality; your state attorney general or a local housing agency is a good starting point, and HUD keeps a page of housing resources for each state.[^12]',
  },
  sources: [
    {
      title: 'What is an escrow or impound account?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-escrow-or-impound-account-en-140/',
      accessed: '2026-10-13',
    },
    {
      title: '12 CFR 1024.17 Escrow accounts (Regulation X)',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/rules-policy/regulations/1024/17/',
      accessed: '2026-10-13',
      note: 'Annual escrow statement timing, surplus refunds and shortage repayment options.',
    },
    {
      title: '12 CFR 1026.41 Periodic statements for residential mortgage loans (Regulation Z)',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/41/',
      accessed: '2026-10-13',
      note: 'Required contents of a monthly mortgage statement; some small servicers are exempt.',
    },
    {
      title: 'What is private mortgage insurance?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-private-mortgage-insurance-en-122/',
      accessed: '2026-10-13',
    },
    {
      title: 'When can I remove private mortgage insurance (PMI) from my loan?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/',
      accessed: '2026-10-13',
    },
    {
      title: "What's the difference between a mortgage lender and a mortgage servicer?",
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-mortgage-lender-and-a-mortgage-servicer-en-198/',
      accessed: '2026-10-13',
    },
    {
      title: "Are condo/co-op fees or homeowners' association dues included in my monthly mortgage payment?",
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/are-condoco-op-fees-or-homeowners-association-dues-included-in-my-monthly-mortgage-payment-en-1945/',
      accessed: '2026-10-13',
    },
    {
      title: 'Closing Disclosure explainer',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/owning-a-home/closing-disclosure/',
      accessed: '2026-10-13',
    },
    {
      title: 'Publication 530, Tax Information for Homeowners',
      publisher: 'Internal Revenue Service',
      url: 'https://www.irs.gov/publications/p530',
      accessed: '2026-10-13',
    },
    {
      title: 'Consumer Snapshot: Tenant Background Checks',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/data-research/research-reports/consumer-snapshot-tenant-background-checks/',
      accessed: '2026-10-13',
    },
    {
      title: 'Questions about tenant background checks? New guidance can help',
      publisher: 'Federal Trade Commission',
      url: 'https://consumer.ftc.gov/consumer-alerts/2024/03/questions-about-tenant-background-checks-new-guidance-can-help',
      accessed: '2026-10-13',
    },
    {
      title: 'State Information',
      publisher: 'U.S. Department of Housing and Urban Development',
      url: 'https://www.hud.gov/states',
      accessed: '2026-10-13',
      note: 'Index of HUD state pages with local housing resources.',
    },
  ],
  lastReviewed: '2026-10-13',
}
