import type { BillCategory } from '../types'

export const bankingDebt: BillCategory = {
  slug: 'banking-debt',
  name: 'Banking, Loans & Debt',
  shortName: 'Banking & Debt',
  tagline:
    'Bank fees, credit cards, APR, personal and student loans, overdrafts and buy now, pay later: what each charge means and how to read the statement.',
  intro: [
    "Some of the bills that cost households the most do not look like bills at all. A checking account can carry monthly fees, ATM fees and overdraft fees. A credit card statement shows a minimum payment, but the real cost is the **interest** added to any balance you carry. Loans, from personal loans to student loans to buy now, pay later plans, each have their own payment schedules, rates and fees.",
    "The good news is that most of these costs are disclosed. Federal law requires card issuers to show how long it would take to pay off your balance if you make only the minimum payment.[^4] Banks must tell you about account fees when you open an account and must notify you in writing before changing them.[^6] Knowing where to look on each statement makes it much easier to see what you are paying and why.",
    "This guide explains how banking and debt bills work, how to read a credit card statement line by line, and what to compare when you review your accounts. It is general education, not financial or legal advice. Products, fees and some consumer protections vary by lender and by state, so your own account agreement is the final word.",
  ],
  howItWorks: {
    summary:
      'Banking and debt costs come in two main forms: **fees** (flat charges for a service or a penalty) and **interest** (the price of borrowing, usually shown as an **APR**, or annual percentage rate).[^1] Consumer debt is usually either **revolving**, mainly credit cards you can borrow on again and again, or **nonrevolving**, such as auto and student loans you repay over a set time.[^15]',
    points: [
      {
        title: 'Checking and savings accounts',
        body: 'Banks and credit unions can charge monthly maintenance fees on checking, savings and money market accounts, but they must disclose those fees when you open the account. Many waive the fee if you keep a minimum balance or have direct deposit.[^6] Deposits at FDIC-insured banks are insured to at least $250,000 per depositor, per bank.[^16]',
      },
      {
        title: 'Credit cards',
        body: "A credit card's interest rate is usually stated as a yearly rate called the **APR**.[^1] Most cards offer a **grace period** on purchases: if you pay the full statement balance by the due date, you generally will not owe interest on those purchases.[^2] Carry a balance, and interest is added each month.",
      },
      {
        title: 'Overdraft',
        body: "An overdraft happens when you do not have enough money in your account for a transaction, but the bank pays it anyway and usually charges a fee.[^8] For one-time debit card purchases and ATM withdrawals, a bank cannot charge an overdraft fee unless you have opted in. Checks and recurring payments are treated differently.[^9]",
      },
      {
        title: 'Installment loans',
        body: "Personal loans, auto loans and student loans are repaid in scheduled payments. The **APR** includes the interest rate plus certain lender fees, such as origination charges, so it is the better number to compare across offers.[^13]",
      },
      {
        title: 'Student loans',
        body: 'Federal student loans made on or after July 1, 2006 have fixed rates that stay the same for the life of the loan. Private student loan rates are set by each lender, can be fixed or variable, and depend on factors like your credit history.[^14]',
      },
      {
        title: 'Buy now, pay later',
        body: "**Buy now, pay later (BNPL)** is a loan you repay through a series of payments. Most BNPL companies charge late fees if you miss a payment, may freeze your account, and may send unpaid debt to collections or report it to a credit reporting company.[^12]",
      },
    ],
  },
  commonCharges: [
    {
      name: 'Interest charge (finance charge)',
      description:
        'The cost of carrying a balance on a credit card or loan, based on your APR.[^1] On a card, you can usually avoid interest on purchases by paying the full balance by the due date.[^2]',
    },
    {
      name: 'Monthly maintenance fee',
      description:
        'A recurring fee for keeping a checking, savings or money market account open. It must be disclosed when you open the account, and many banks waive it if you meet certain conditions.[^6]',
    },
    {
      name: 'Overdraft fee',
      description:
        'Charged when the bank covers a transaction your balance could not. You must opt in before you can be charged this fee on one-time debit card and ATM transactions.[^9]',
    },
    {
      name: 'Non-sufficient funds (NSF) or returned item fee',
      description:
        'If you are not enrolled in overdraft coverage, a declined check or payment may bring an NSF fee from your bank, which is often the same amount as an overdraft fee, plus a possible returned item fee from the merchant.[^9]',
    },
    {
      name: 'ATM fees',
      description:
        'Using an out-of-network ATM can trigger a fee from your own bank and a separate surcharge from the ATM owner. Even an account advertised as "free" can still charge ATM fees.[^7]',
    },
    {
      name: 'Late payment fee',
      description:
        'Charged when a card or loan payment arrives after the due date. A 2024 CFPB rule that would have lowered late fees at large card issuers was vacated by a federal court in April 2025, so it is not in effect.[^11] Check your cardholder agreement for your actual fee.',
    },
    {
      name: 'Deferred interest',
      description:
        'Some "no interest if paid in full" offers charge all the interest back to the purchase date if the full balance is not paid by the end of the promotional period.[^3]',
    },
    {
      name: 'Origination fee',
      description:
        'A fee some lenders charge for making a loan. It is one of the charges included in the APR, which is why the APR can be higher than the advertised interest rate.[^13]',
    },
    {
      name: 'Stop payment fee',
      description:
        'Banks commonly charge a fee when you ask them to stop a check or an automatic payment from going through.[^17]',
    },
  ],
  whyCostsRise: [
    {
      title: 'Carrying a balance',
      body: "When you do not pay a card balance in full, you lose the grace period: you owe interest on the unpaid amount, and new purchases can start collecting interest right away.[^2] Making only the minimum payment can stretch repayment out for years.[^4]",
    },
    {
      title: 'Variable rates',
      body: 'Some loans, including many private student loans, have **variable** rates that can change over time, so your payment can change too.[^14] If your credit card has a variable APR, your cardholder agreement explains how it is set. The Federal Reserve publishes data on credit card interest rates if you want to see the broader trend.[^15]',
    },
    {
      title: 'Promotional periods ending',
      body: 'Deferred-interest and introductory offers can end with a jump in cost. With deferred interest, missing the payoff date can mean owing interest back to the original purchase date.[^3]',
    },
    {
      title: 'Fees that pile up quietly',
      body: 'Overdraft, NSF, ATM and maintenance fees can each be small, but they repeat. A bank can change its fees, though it must notify you in writing first.[^6]',
    },
    {
      title: 'Missed BNPL or loan payments',
      body: 'Late fees, account freezes and collections can follow missed buy now, pay later payments, and unpaid debt may be reported to credit reporting companies.[^12]',
    },
  ],
  readingYourBill: [
    {
      title: '1. Find the statement period and due date',
      body: 'Every credit card statement lists the closing date of the billing cycle and the payment due date. Card issuers must have procedures to send your bill at least 21 days before the payment is due.[^2]',
    },
    {
      title: '2. Check the new balance and the minimum payment',
      body: 'The **new balance** is what you owe as of the closing date. The **minimum payment** is the least you can pay to stay current. Paying only the minimum keeps the account in good standing, but interest keeps building on the rest.[^4]',
    },
    {
      title: '3. Read the minimum payment warning box',
      body: 'Issuers must show how long it would take to pay off your balance making only minimum payments, and what monthly payment would pay it off in about three years.[^4] These estimates assume you make no new purchases.',
    },
    {
      title: '4. Review each transaction',
      body: "Go line by line. If you see a charge you did not make, or one for something you never received, you can dispute it. To protect your rights under federal law, send a written dispute to the billing-error address on your statement within 60 days.[^5]",
    },
    {
      title: '5. Look at the interest charge calculation',
      body: 'This section shows the APR that applies to each type of balance on your account and the interest charged this cycle.[^1] If you see interest on purchases, you likely did not pay the previous balance in full.[^2]',
    },
    {
      title: '6. Check fees and promotional balances',
      body: 'Look for late fees, annual fees and any deferred-interest promotion, including the date it ends. A minimum payment alone usually will not pay off a deferred-interest balance before the promotion ends.[^3]',
    },
    {
      title: '7. Compare against your bank statement',
      body: 'Make sure the payment you sent shows up, and check your checking account statement for overdraft, NSF or ATM fees that month.[^9]',
    },
  ],
  reviewTips: [
    {
      title: 'List every account and its fees',
      body: 'Write down each checking, savings, card and loan account along with any monthly, annual or usage fees. Your account disclosures list the fees you agreed to.[^6] A [household planner](/tools) (coming soon) can help you see them all in one place.',
    },
    {
      title: 'Know your overdraft setting',
      body: 'Ask your bank whether you are opted in to overdraft coverage for debit card and ATM transactions. You can change your choice at any time.[^9]',
    },
    {
      title: 'Compare APR to APR',
      body: "When looking at loan or card offers, compare APRs to APRs, not an APR to an interest rate, since the APR includes certain fees.[^13] Our [credit card interest calculator](/tools) (coming soon) shows how a balance and APR turn into interest over time.",
    },
    {
      title: 'Track promotional end dates',
      body: 'Put the end date of any deferred-interest or introductory offer on your calendar, and divide the balance by the months left to see what it takes to pay it off in time.[^3]',
    },
    {
      title: 'Watch for automatic payments you no longer want',
      body: 'To stop an automatic payment, tell the company you are revoking permission and notify your bank. A stop payment order should reach your bank at least three business days before the scheduled payment.[^17]',
    },
    {
      title: 'Treat BNPL like any other loan',
      body: 'Qualifying for buy now, pay later does not mean the payments fit your budget. Add each plan and its due dates to your monthly list of bills.[^12]',
    },
    {
      title: 'Keep records of disputes',
      body: 'If you dispute a charge, keep a copy of your letter. While the issuer investigates, you do not have to pay the disputed amount, but you still need to pay the rest of the bill on time.[^5]',
    },
  ],
  relatedTools: ['credit-card-interest', 'car-loan', 'household-planner'],
  comparisons: [
    {
      title: 'Checking accounts: fees and how to avoid them',
      body: "Compare monthly maintenance fees and what it takes to waive them, out-of-network ATM fees and any refunds, and overdraft and NSF policies. Remember that even a \"free\" account can charge ATM, overdraft and stop-payment fees.[^7]",
    },
    {
      title: 'Credit cards: APR, grace period and fees',
      body: 'Compare the purchase APR, whether the card offers a grace period, and the annual, late and foreign transaction fees in each cardholder agreement.[^1][^2] If you usually pay in full, fees may matter more to you than the APR. If you carry a balance, the APR matters most.',
    },
    {
      title: 'Loans: total cost, not just the monthly payment',
      body: 'Compare the APR, the loan length and the total amount you will repay. A longer term can lower the monthly payment but raise the total interest. Use the APR to compare offers, since it includes lender fees.[^13]',
    },
    {
      title: 'Federal vs. private student loans',
      body: 'Federal student loans made since July 2006 carry fixed rates set under federal law. Private loan rates are set by each lender and may be fixed or variable.[^14] Compare the rate type as well as the rate.',
    },
  ],
  faqs: [
    {
      q: 'What is the difference between an interest rate and an APR?',
      a: 'The interest rate is the cost of borrowing the money. The APR includes the interest rate plus certain lender fees, such as origination charges, so it gives a fuller picture of the cost.[^13]',
    },
    {
      q: 'Do I have to pay more than the minimum on my credit card?',
      a: 'No. Paying the minimum keeps the account current. But the more you pay each month, the less interest you will pay over time, and paying only the minimum can take years.[^4]',
    },
    {
      q: 'Can my bank charge me an overdraft fee on a debit card purchase?',
      a: 'Only if you opted in to overdraft coverage for one-time debit card and ATM transactions. Banks can charge overdraft fees on checks and recurring electronic payments even if you did not opt in.[^9]',
    },
    {
      q: 'What happened to the federal overdraft and late fee rules?',
      a: 'In 2024 the CFPB finalized a rule on overdraft fees at very large banks, but Congress disapproved it in May 2025, so it has no force or effect.[^10] A separate 2024 CFPB rule on credit card late fees was vacated by a federal court in April 2025.[^11] Existing rules, like the debit card overdraft opt-in, still apply.[^9]',
    },
    {
      q: 'How do I dispute a charge on my credit card?',
      a: 'Contact the merchant first if it is a problem with a purchase. To keep your federal protections, send a written dispute to the billing-error address on your statement within 60 days of the statement that first showed the error.[^5]',
    },
    {
      q: 'Is buy now, pay later a loan?',
      a: 'Yes. It is a loan you repay in payments over time. Missing payments can bring late fees, a frozen account, collections and damage to your credit scores.[^12]',
    },
    {
      q: 'Is my money in the bank insured?',
      a: 'Deposits at FDIC-insured banks, such as checking, savings, money market deposit accounts and CDs, are insured to at least $250,000 per depositor at each bank. Investments like stocks, mutual funds and crypto assets are not deposits and are not covered.[^16]',
    },
    {
      q: 'Will my federal student loan rate change?',
      a: 'Federal student loans made on or after July 1, 2006 have fixed rates for the life of the loan, though the rate for new loans is set each year.[^14]',
    },
  ],
  stateNotes: {
    summary:
      'Most rules for bank accounts and credit cards are federal, but states also play a role. States charter and supervise state banks and credit unions, license many non-bank lenders, and set some rules for consumer loans and debt collection. What you can be charged on a personal loan, and which lenders need a license, can depend on where you live. See [how other bills vary by place](/learn) and check your state banking or financial regulator for local rules.',
    whoRegulates:
      'The **Consumer Financial Protection Bureau (CFPB)** writes and enforces many federal consumer finance rules and takes complaints.[^5] The **FDIC** insures deposits at member banks.[^16] The **Federal Reserve**, the FDIC, the OCC and the NCUA supervise banks and credit unions, and state banking regulators oversee state-chartered institutions and many non-bank lenders.',
  },
  sources: [
    {
      title: 'What is a credit card interest rate? What does APR mean?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-card-interest-rate-what-does-apr-mean-en-44/',
      accessed: '2026-10-13',
    },
    {
      title: 'What is a grace period for a credit card?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-grace-period-for-a-credit-card-en-47/',
      accessed: '2026-10-13',
    },
    {
      title: 'I got a credit card promising no interest for a purchase if I pay in full within 12 months. How does this work?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/i-got-a-credit-card-promising-no-interest-for-a-purchase-if-i-pay-in-full-within-12-months-how-does-this-work-en-40/',
      accessed: '2026-10-13',
    },
    {
      title: 'A box on my credit card bill says that I will pay off the balance in three years if I pay a certain amount. What does that mean?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/a-box-on-my-credit-card-bill-says-that-i-will-pay-off-the-balance-in-three-years-if-i-pay-a-certain-amount-what-does-that-mean-do-i-have-to-pay-that-much-if-i-pay-that-much-and-make-new-purchases-will-i-still-owe-nothing-after-three-years-en-36/',
      accessed: '2026-10-13',
    },
    {
      title: 'How do I dispute a charge on my credit card bill?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-a-charge-on-my-credit-card-bill-en-61/',
      accessed: '2026-10-13',
    },
    {
      title: 'Why am I being charged a monthly maintenance fee for my bank or credit union account?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/why-am-i-being-charged-a-monthly-maintenance-fee-for-my-bank-or-credit-union-account-en-2151/',
      accessed: '2026-10-13',
    },
    {
      title: 'I opened a "free" checking account but there are fees charged on my account. Can my bank/credit union do that?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/i-opened-a-free-checking-account-but-there-are-fees-charged-on-my-account-can-my-bankcredit-union-do-that-en-961/',
      accessed: '2026-10-13',
    },
    {
      title: 'What is an overdraft?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-an-overdraft-en-1035/',
      accessed: '2026-10-13',
    },
    {
      title: 'What can I do if my bank charged me a fee for overdrawing my account?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-can-i-do-if-my-bank-charged-me-a-fee-for-overdrawing-my-account-en-1037/',
      accessed: '2026-10-13',
    },
    {
      title: 'Public Law 119-10: Joint resolution disapproving the rule relating to "Overdraft Lending: Very Large Financial Institutions"',
      publisher: 'U.S. Government Publishing Office (GovInfo)',
      url: 'https://www.govinfo.gov/app/details/PLAW-119publ10',
      accessed: '2026-10-13',
      note: 'Enacted May 9, 2025 (S.J.Res. 18).',
    },
    {
      title: 'Credit card penalty fees',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/compliance/compliance-resources/consumer-cards-resources/credit-card-penalty-fees/',
      accessed: '2026-10-13',
      note: 'States the Credit Card Penalty Fees Final Rule was vacated by court order on April 15, 2025.',
    },
    {
      title: 'What is a Buy Now, Pay Later (BNPL) loan?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-a-buy-now-pay-later-bnpl-loan-en-2116/',
      accessed: '2026-10-13',
    },
    {
      title: 'What is the difference between a loan interest rate and the APR?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/',
      accessed: '2026-10-13',
    },
    {
      title: 'What are the interest rates on my student loans?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/what-are-the-interest-rates-on-my-student-loans-en-571/',
      accessed: '2026-10-13',
    },
    {
      title: 'Consumer Credit - G.19',
      publisher: 'Board of Governors of the Federal Reserve System',
      url: 'https://www.federalreserve.gov/releases/g19/current/default.htm',
      accessed: '2026-10-13',
      note: 'Reports revolving and nonrevolving consumer credit and credit card interest rates.',
    },
    {
      title: 'Deposit Insurance',
      publisher: 'Federal Deposit Insurance Corporation',
      url: 'https://www.fdic.gov/resources/deposit-insurance',
      accessed: '2026-10-13',
    },
    {
      title: 'How do I stop automatic payments from my bank account?',
      publisher: 'Consumer Financial Protection Bureau',
      url: 'https://www.consumerfinance.gov/ask-cfpb/how-do-i-stop-automatic-payments-from-my-bank-account-en-2023/',
      accessed: '2026-10-13',
    },
  ],
  lastReviewed: '2026-10-13',
}
