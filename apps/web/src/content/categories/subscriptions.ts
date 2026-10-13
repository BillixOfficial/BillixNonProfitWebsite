import type { BillCategory } from '../types'

export const subscriptions: BillCategory = {
  slug: 'subscriptions',
  name: 'Subscriptions & Memberships',
  shortName: 'Subscriptions',
  tagline:
    'Streaming, apps, software, gyms, memberships and free trials: how recurring charges work and how to keep track of them.',
  intro: [
    "Subscriptions are built to be easy. You sign up once, and the charge repeats every month or year until you stop it. Streaming services, music and news apps, cloud storage, software, gyms, meal kits and warehouse clubs all work this way. Because each charge can be small and automatic, they are easy to forget.",
    "Many subscriptions start with a **free trial** or a low first price and then **automatically renew** at the regular price. The Federal Trade Commission calls these **negative option** offers, because your silence or failure to cancel is treated as agreement to keep paying.[^1] Federal law requires online sellers using these offers to clearly disclose the terms, get your express consent before charging you, and give you a simple way to stop recurring charges.[^2]",
    "This guide explains how recurring charges work, how to find them on your bank and card statements, and what to check before you sign up or cancel. It is general education, not legal advice. Some states have their own automatic renewal laws, and each company's terms are different.",
  ],
  howItWorks: {
    summary:
      'A subscription is an agreement to pay a set amount on a schedule, usually monthly or yearly, until you cancel. The charge is typically made automatically to a card, bank account or app store account you provide when you sign up.',
    points: [
      {
        title: 'Automatic renewal',
        body: 'Your plan renews at the end of each billing period unless you cancel. Under federal law, online sellers must clearly disclose the material terms before taking your billing information and must provide a simple way to stop recurring charges.[^2]',
      },
      {
        title: 'Free trials',
        body: 'A free trial often turns into a paid subscription unless you cancel before it ends. The FTC suggests finding the trial length and how and when to cancel before you sign up, and marking the cancellation deadline on your calendar.[^1]',
      },
      {
        title: 'Pre-checked boxes and add-ons',
        body: 'Sign-up pages can include pre-checked boxes that enroll you in extra products or more billing. The FTC advises unchecking any box you do not agree with.[^1]',
      },
      {
        title: 'Where the charge comes from',
        body: 'Some subscriptions bill you directly. Others bill through an app store or a bundle with another service, such as a phone or internet plan. The billing source decides where you go to cancel.',
      },
      {
        title: 'Cancelling',
        body: "Follow the company's cancellation steps and keep a record of your request.[^1] Cancelling the service and stopping the payment are separate steps: telling your bank to stop payments does not by itself end your contract with the company.[^6]",
      },
    ],
  },
  commonCharges: [
    {
      name: 'Monthly or annual subscription fee',
      description:
        'The regular charge for the service. Annual plans bill once a year, so they can be easy to forget until the renewal arrives.',
    },
    {
      name: 'Trial conversion charge',
      description:
        'The first full-price charge after a free or discounted trial ends without cancellation.[^1]',
    },
    {
      name: 'Price increase on renewal',
      description:
        'A higher rate after an introductory period ends or when the company raises prices. In California, for example, businesses must give notice before certain price increases on automatic renewal plans.[^7]',
    },
    {
      name: 'Add-ons and upgrades',
      description:
        'Extra features, profiles, storage or premium tiers billed on top of the base plan. Some may be added through pre-checked boxes at sign-up.[^1]',
    },
    {
      name: 'Membership enrollment or initiation fee',
      description:
        'A one-time fee some gyms and clubs charge when you join, separate from monthly dues. Check the contract for this before signing.',
    },
    {
      name: 'Annual or maintenance fee',
      description:
        'Some memberships, especially gyms, charge an extra yearly fee in addition to monthly dues. It is listed in the membership agreement.',
    },
    {
      name: 'Cancellation or early termination fee',
      description:
        'Some contracts charge a fee if you cancel before a minimum term ends. The terms of the offer should explain this before you agree.[^1]',
    },
    {
      name: 'Stop payment fee (from your bank)',
      description:
        'If you ask your bank to block a recurring payment, the bank may charge a stop payment fee.[^6]',
    },
  ],
  whyCostsRise: [
    {
      title: 'Trials that turn into paid plans',
      body: 'Once the cancellation deadline on a free trial passes, you may be on the hook for more payments.[^1]',
    },
    {
      title: 'Introductory prices ending',
      body: 'Low first-month or first-year prices often step up to the regular rate at renewal. The offer terms should say what the price will be and when.[^1]',
    },
    {
      title: 'Subscriptions you forgot about',
      body: 'Small automatic charges are easy to lose track of, especially annual renewals and subscriptions billed through an app store or another company.',
    },
    {
      title: 'Overlapping services',
      body: 'Households can end up paying for two services that do the same thing, or for separate accounts when a family plan would cover everyone. Reviewing the full list is the only way to see overlaps.',
    },
    {
      title: 'Hard-to-cancel plans',
      body: 'Cancellation obstacles can keep charges going after you decide to stop. The FTC has asked for public input on practices that make cancellation hard as it considers possible new rules.[^4]',
    },
  ],
  readingYourBill: [
    {
      title: '1. Pull two or three months of statements',
      body: 'Gather your credit card, debit card and bank statements. Monthly charges repeat, so seeing a few months side by side makes them easy to spot.',
    },
    {
      title: '2. Look for repeating merchant names and amounts',
      body: 'Recurring charges often show the same merchant name and amount each month. Merchant names on statements can be shortened or show a parent company or payment processor instead of the brand you know.',
    },
    {
      title: '3. Check app store and payment account receipts',
      body: 'Subscriptions bought through a phone app store or an online payment account may appear on your statement under that store or account name. Its subscription settings list each one.',
    },
    {
      title: '4. Search your email for receipts and renewal notices',
      body: 'Search for words like "renewal," "subscription," "trial" and "receipt." In California, businesses must send certain notices before renewals and before trials longer than 31 days end.[^7]',
    },
    {
      title: '5. Flag annual renewals',
      body: 'Yearly charges show up only once. Note the renewal month for each so it does not come as a surprise.',
    },
    {
      title: '6. Investigate anything you do not recognize',
      body: 'If a charge is for something you did not agree to, contact the company first. If it will not refund you, contact your card company to dispute the charge.[^1] For credit cards, send a written dispute within 60 days to protect your federal rights.[^5]',
    },
  ],
  reviewTips: [
    {
      title: 'Make a master list',
      body: 'Write down every subscription, its price, billing cycle, renewal date and which card or account it bills. A [subscription tracker](/tools) (coming soon) can keep this in one place.',
    },
    {
      title: 'Read the terms before you start a trial',
      body: 'Find the trial length and exactly how and when to cancel. If you cannot find or understand how to cancel, the FTC suggests not signing up.[^1]',
    },
    {
      title: 'Set reminders',
      body: 'Put each trial end date and annual renewal date on your calendar a few days early.[^1]',
    },
    {
      title: 'Keep proof when you cancel',
      body: 'Save a copy of your cancellation request and notes on any calls, then check your next statements to make sure the charges stopped.[^1]',
    },
    {
      title: 'Stop the payment if charges continue',
      body: 'If a company keeps charging you after you cancel, you can revoke its permission, tell your bank, and if needed place a stop payment order at least three business days before the next scheduled payment.[^6]',
    },
    {
      title: 'Report problems',
      body: 'You can report cancellation problems or charges you did not agree to at ReportFraud.ftc.gov and to your state attorney general.[^1]',
    },
    {
      title: 'Look at the yearly total',
      body: 'Multiply each monthly charge by 12 and add your annual plans. Seeing the yearly total next to other bills in a [household planner](/tools) (coming soon) can make it easier to decide what to keep.',
    },
  ],
  relatedTools: ['subscription-tracker', 'household-planner'],
  comparisons: [
    {
      title: 'Monthly vs. annual billing',
      body: 'Compare 12 months of the monthly price with the annual price, and think about whether you will use the service all year. Annual plans lock in a year at a time, so check the cancellation and refund terms.',
    },
    {
      title: 'Individual vs. family or bundled plans',
      body: 'If several people in your home pay for the same service, compare the total with a family or shared plan. For bundles, list what each part would cost on its own and whether you use every part.',
    },
    {
      title: 'Overlapping services',
      body: 'Group your subscriptions by type (video, music, storage, news, fitness) and compare what each one gives you. Two services in the same group may overlap.',
    },
    {
      title: 'Membership contracts',
      body: 'For gyms and clubs, compare the monthly dues, any enrollment or annual fees, the minimum term, and how cancellation works under the contract.[^1]',
    },
  ],
  faqs: [
    {
      q: 'What is a negative option subscription?',
      a: 'It is an offer where your silence or failure to cancel is treated as agreement to keep paying. Automatic renewals, continuity plans and free trials that convert to paid plans are common examples.[^1]',
    },
    {
      q: 'What happened to the FTC click-to-cancel rule?',
      a: 'In 2024 the FTC adopted amendments to its Negative Option Rule, often called the click-to-cancel rule. A federal appeals court, the Eighth Circuit, vacated those amendments in 2025, and the FTC restored the earlier version of the rule in February 2026.[^3] In March 2026 the FTC asked for public comment on whether to adopt new rules, including parts of the vacated rule.[^4] Check the FTC for any later updates.',
    },
    {
      q: 'Are there still federal protections for online subscriptions?',
      a: 'Yes. The Restore Online Shoppers\' Confidence Act requires online sellers using negative option features to clearly disclose material terms, get express informed consent before charging you, and provide simple ways to stop recurring charges.[^2]',
    },
    {
      q: 'I cancelled, but the company keeps charging me. What can I do?',
      a: 'Contact your card company to dispute the charges and follow up in writing.[^1] For credit cards, a written dispute within 60 days protects your rights under federal law.[^5] For bank debits, you can revoke permission and give your bank a stop payment order.[^6]',
    },
    {
      q: 'If I stop the payment at my bank, is my subscription cancelled?',
      a: 'Not necessarily. To end an ongoing contract, such as a gym membership, cancel with the company as well as stopping the payments.[^6]',
    },
    {
      q: 'Do states have their own auto-renewal laws?',
      a: 'Some do. California, for example, requires consent to automatic renewal terms, renewal and price-change notices, and online cancellation for people who signed up online.[^7] Rules differ from state to state, so check with your state attorney general.',
    },
    {
      q: 'Where do I report a subscription I cannot cancel?',
      a: 'The FTC takes reports at ReportFraud.ftc.gov, and you can also contact your state attorney general.[^1]',
    },
  ],
  stateNotes: {
    summary:
      'Federal law sets a baseline for online subscriptions,[^2] and some states add their own automatic renewal rules. California, for example, requires express consent, advance notices before certain renewals and price increases, and the ability to cancel online if you signed up online.[^7] Requirements and enforcement differ by state, so check your state attorney general for local rules.',
    whoRegulates:
      'The **Federal Trade Commission (FTC)** enforces federal consumer protection laws on subscriptions, including the Restore Online Shoppers\' Confidence Act and its Negative Option Rule.[^2][^3] **State attorneys general** enforce state consumer protection and auto-renewal laws.[^7] For disputed card charges, your **card issuer** handles billing errors under federal rules overseen by the CFPB.[^5]',
  },
  sources: [
    {
      title: 'Getting In and Out of Free Trials, Auto-Renewals, and Negative Option Subscriptions',
      publisher: 'Federal Trade Commission (Consumer Advice)',
      url: 'https://consumer.ftc.gov/articles/getting-and-out-free-trials-auto-renewals-and-negative-option-subscriptions',
      accessed: '2026-10-13',
    },
    {
      title: '15 U.S.C. 8403: Negative option marketing on the Internet (Restore Online Shoppers\' Confidence Act)',
      publisher: 'U.S. Government Publishing Office (GovInfo)',
      url: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title15/html/USCODE-2023-title15-chap110-sec8403.htm',
      accessed: '2026-10-13',
    },
    {
      title: 'Revision of the Negative Option Rule, Withdrawal of the CARS Rule, Removal of the Non-Compete Rule To Conform These Rules to Federal Court Decisions (91 FR, Feb. 12, 2026)',
      publisher: 'Federal Trade Commission, via Federal Register (GovInfo)',
      url: 'https://www.govinfo.gov/content/pkg/FR-2026-02-12/html/2026-02866.htm',
      accessed: '2026-10-13',
      note: 'Restores the pre-2024 Negative Option Rule after the Eighth Circuit vacated the 2024 amendments in Custom Communications, Inc. v. FTC (2025).',
    },
    {
      title: 'FTC Seeks Public Comment in Response to Advance Notice of Proposed Rulemaking Regarding Negative Option Marketing Practices',
      publisher: 'Federal Trade Commission',
      url: 'https://www.ftc.gov/news-events/news/press-releases/2026/03/ftc-seeks-public-comment-response-advance-notice-proposed-rulemaking-regarding-negative-option',
      accessed: '2026-10-13',
      note: 'March 2026 press release.',
    },
    {
      title: 'How do I dispute a charge on my credit card bill?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-a-charge-on-my-credit-card-bill-en-61/',
      accessed: '2026-10-13',
    },
    {
      title: 'How do I stop automatic payments from my bank account?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-stop-automatic-payments-from-my-bank-account-en-2023/',
      accessed: '2026-10-13',
    },
    {
      title: "Attorney General Bonta Issues Consumer Alert on California's Automatic Renewal Law",
      publisher: 'California Department of Justice, Office of the Attorney General',
      url: 'https://oag.ca.gov/news/press-releases/attorney-general-bonta-issues-consumer-alert-california%E2%80%99s-automatic-renewal-law',
      accessed: '2026-10-13',
      note: 'September 2025 alert; amendments effective July 1, 2025.',
    },
  ],
  lastReviewed: '2026-10-13',
}
