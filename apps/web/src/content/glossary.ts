import type { GlossaryTerm } from './types'

/**
 * Billix glossary. Plain-language definitions of terms that appear on U.S.
 * household bills. Kept in alphabetical order by `term`.
 * Last reviewed 2026-10-13.
 */
export const glossary: GlossaryTerm[] = [
  {
    slug: 'afue',
    term: 'AFUE',
    aka: 'Annual Fuel Utilization Efficiency',
    definition:
      'A rating for furnaces and boilers that shows how much of the fuel you buy becomes heat for your home over a typical year. A 90% AFUE system turns about 90 cents of every fuel dollar into heat; the rest goes up the vent or chimney.',
    example:
      'An older oil boiler might be rated well below a new one. Two systems burning the same fuel can produce very different heating bills because of AFUE.',
    categories: ['heating-cooling'],
    related: ['btu', 'heat-pump', 'therm'],
  },
  {
    slug: 'amortization',
    term: 'Amortization',
    definition:
      'Paying off a loan through a schedule of regular payments. Early in a typical fixed-rate mortgage, most of each payment goes to interest; over time, more of each payment goes to the principal.',
    example:
      'An amortization schedule lists every payment over the life of the loan and shows how much of each one reduces the balance.',
    categories: ['housing', 'banking-debt', 'transportation'],
    related: ['principal', 'apr', 'fixed-rate'],
  },
  {
    slug: 'apr',
    term: 'APR',
    aka: 'Annual Percentage Rate',
    definition:
      'The yearly cost of borrowing, expressed as a percentage. For loans, APR includes the interest rate plus certain fees, so it is useful for comparing offers. For credit cards, the APR is the interest rate charged on balances you carry.',
    example:
      'Two car loans can have the same interest rate but different APRs if one charges higher upfront fees.',
    categories: ['banking-debt', 'housing', 'transportation'],
    related: ['fixed-rate', 'variable-rate', 'minimum-payment', 'grace-period'],
  },
  {
    slug: 'auto-renewal',
    term: 'Auto-renewal',
    definition:
      'A subscription or contract term that renews automatically at the end of each period, and charges your payment method, unless you cancel before the renewal date.',
    example:
      'An annual membership that renews every March will usually bill the full yearly price that month unless it was canceled first.',
    categories: ['subscriptions', 'internet-phone', 'insurance'],
    related: ['free-trial', 'promotional-rate', 'autopay', 'chargeback'],
  },
  {
    slug: 'autopay',
    term: 'Autopay',
    definition:
      'An arrangement that lets a company or your bank pay a bill automatically on a set schedule from a bank account or card. It helps avoid missed due dates, but the amount can change from month to month.',
    example:
      'If a utility bill doubles in a cold month, autopay will still pull the full amount unless you review it first.',
    categories: ['banking-debt', 'subscriptions', 'electricity'],
    related: ['auto-renewal', 'overdraft-fee', 'late-fee'],
  },
  {
    slug: 'btu',
    term: 'BTU',
    aka: 'British thermal unit',
    definition:
      'A standard unit of heat: the energy needed to raise the temperature of one pound of water by one degree Fahrenheit. It lets you compare fuels sold in different units, such as gallons of oil, therms of gas and kilowatt-hours of electricity.',
    example:
      'The U.S. Energy Information Administration lists one gallon of heating oil at about 138,500 BTU and one kilowatt-hour of electricity at 3,412 BTU.',
    categories: ['heating-cooling', 'electricity'],
    related: ['therm', 'kwh', 'afue'],
  },
  {
    slug: 'budget-billing',
    term: 'Budget billing',
    aka: 'Levelized or equal-payment plan',
    definition:
      'A utility payment plan that spreads your expected yearly cost into similar monthly payments. You still pay for what you actually use: the utility periodically compares payments with real usage and settles the difference.',
    example:
      'A household on budget billing might pay the same amount in July and January, then see a "true-up" adjustment once a year.',
    categories: ['electricity', 'heating-cooling', 'water-sewer'],
    related: ['estimated-reading', 'customer-charge'],
  },
  {
    slug: 'ccf',
    term: 'CCF',
    aka: 'Hundred cubic feet',
    definition:
      'A volume unit equal to 100 cubic feet ("C" is the Roman numeral for 100). Gas utilities use it to measure natural gas, and many water utilities use it to measure water.',
    example:
      'On a gas bill, CCF is often converted to therms using a heat-content factor printed on the bill. On a water bill, 1 CCF is about 748 gallons.',
    categories: ['heating-cooling', 'water-sewer'],
    related: ['therm', 'hcf'],
  },
  {
    slug: 'chargeback',
    term: 'Chargeback',
    definition:
      'A reversal of a card charge that you request through your credit or debit card issuer when a charge is wrong, unauthorized, or for something you did not receive, after trying to resolve it with the merchant.',
    example:
      'If a service keeps charging you after you canceled, a card dispute may lead the issuer to reverse the charge.',
    categories: ['banking-debt', 'subscriptions'],
    related: ['auto-renewal', 'free-trial'],
  },
  {
    slug: 'coinsurance',
    term: 'Coinsurance',
    definition:
      'Your share of the cost of a covered health service, shown as a percentage, that you pay after meeting your deductible. The plan pays the rest, up to your out-of-pocket maximum.',
    example:
      'With 20% coinsurance, you would pay $20 of a $100 allowed charge after your deductible is met, and the plan would pay $80.',
    categories: ['healthcare-family', 'insurance'],
    related: ['deductible', 'copay', 'out-of-pocket-maximum', 'eob'],
  },
  {
    slug: 'cop',
    term: 'COP',
    aka: 'Coefficient of performance',
    definition:
      'A measure of heat pump efficiency at a given moment: units of heat delivered divided by units of electricity used. A COP of 1 equals electric resistance heat. COP usually falls as outdoor temperatures drop.',
    example:
      'A heat pump running at a COP of 2.5 delivers about two and a half times as much heat as the electricity it uses.',
    categories: ['heating-cooling', 'electricity'],
    related: ['heat-pump', 'hspf2', 'btu'],
  },
  {
    slug: 'copay',
    term: 'Copay',
    aka: 'Copayment',
    definition:
      'A fixed dollar amount you pay for a covered health service or prescription, such as a doctor visit. Depending on the plan, copays may apply before or after the deductible.',
    example: 'A plan might list a fixed copay for a primary care visit and a different one for urgent care.',
    categories: ['healthcare-family', 'insurance'],
    related: ['coinsurance', 'deductible', 'out-of-pocket-maximum'],
  },
  {
    slug: 'customer-charge',
    term: 'Customer charge',
    aka: 'Basic service charge, base charge, service charge',
    definition:
      'A fixed monthly amount on a utility bill that you pay no matter how much energy or water you use. It covers costs such as meters, billing and customer service. The amount is set in the utility\'s approved rate schedule.',
    example:
      'Even a vacant home with zero usage will usually still owe the monthly customer charge.',
    categories: ['electricity', 'heating-cooling', 'water-sewer'],
    related: ['delivery-charge', 'supply-charge', 'rider'],
  },
  {
    slug: 'data-cap',
    term: 'Data cap',
    definition:
      'A limit on how much data an internet or mobile plan includes in a billing period. Going over can mean extra charges, slower speeds, or a required plan upgrade, depending on the provider.',
    example:
      'A home internet plan might include a monthly data allowance and add a charge for each extra block of data used.',
    categories: ['internet-phone'],
    related: ['mbps', 'promotional-rate'],
  },
  {
    slug: 'deductible',
    term: 'Deductible',
    definition:
      'The amount you pay yourself before an insurance plan starts paying. In health insurance, it is usually a yearly amount. In home and auto insurance, it is usually subtracted from each claim payment.',
    example:
      'With a $1,000 home insurance deductible, a covered $4,000 repair would typically lead to a $3,000 claim payment.',
    categories: ['insurance', 'healthcare-family', 'transportation', 'housing'],
    related: ['premium', 'coinsurance', 'copay', 'out-of-pocket-maximum'],
  },
  {
    slug: 'delivery-charge',
    term: 'Delivery charge',
    aka: 'Distribution or transmission and distribution charge',
    definition:
      'The part of an energy bill that pays for moving power or gas to your home: poles, wires, pipes, substations, meters and the local utility\'s operations. You pay it to your local utility even if you buy supply from another company.',
    example:
      'A bill might split delivery into a fixed customer charge plus a per-kWh distribution charge.',
    categories: ['electricity', 'heating-cooling'],
    related: ['supply-charge', 'customer-charge', 'rider', 'kwh'],
  },
  {
    slug: 'demand-charge',
    term: 'Demand charge',
    definition:
      'A charge based on the highest rate at which you used electricity during the billing period, measured in kilowatts, rather than the total amount used. Common on business bills and offered on some residential rate plans.',
    example:
      'Running a dryer, oven and electric vehicle charger at the same time can set a higher peak and raise a demand charge.',
    categories: ['electricity'],
    related: ['kilowatt', 'kwh', 'time-of-use-rate'],
  },
  {
    slug: 'early-termination-fee',
    term: 'Early termination fee',
    aka: 'ETF',
    definition:
      'A fee for ending a contract before its term is up. Common with some phone, internet, energy supply and gym contracts. The amount and how it shrinks over time should be in the contract terms.',
    example:
      'A two-year service agreement might charge a fee that decreases each month you stay.',
    categories: ['internet-phone', 'subscriptions', 'electricity'],
    related: ['promotional-rate', 'auto-renewal', 'fixed-rate'],
  },
  {
    slug: 'eob',
    term: 'EOB',
    aka: 'Explanation of Benefits',
    definition:
      'A statement from your health insurer that shows what a provider billed, what the plan allowed and paid, and what you may owe. An EOB is not a bill, but it is useful for checking the bill that comes from the provider.',
    example: 'If a provider bill asks for more than the "you may owe" amount on your EOB, that is worth asking about.',
    categories: ['healthcare-family', 'insurance'],
    related: ['deductible', 'coinsurance', 'copay'],
  },
  {
    slug: 'escrow',
    term: 'Escrow',
    aka: 'Escrow or impound account',
    definition:
      'An account managed by your mortgage servicer that collects part of your monthly payment and uses it to pay bills such as property taxes and homeowners insurance when they come due.',
    example:
      'If your property tax bill rises, your servicer\'s yearly escrow review can raise your monthly mortgage payment even though your loan rate did not change.',
    categories: ['housing', 'insurance', 'government-fees'],
    related: ['escrow-shortage', 'property-tax-assessment', 'premium', 'pmi'],
  },
  {
    slug: 'escrow-shortage',
    term: 'Escrow shortage',
    definition:
      'When a mortgage servicer\'s yearly escrow analysis finds the account will not have enough money to cover expected tax and insurance bills plus any allowed cushion. Federal rules limit how servicers can collect it.',
    example:
      'A servicer may spread a shortage over at least 12 monthly payments, which raises the monthly payment for the year.',
    categories: ['housing'],
    related: ['escrow', 'property-tax-assessment'],
  },
  {
    slug: 'estimated-reading',
    term: 'Estimated reading',
    definition:
      'A meter reading the utility calculates, usually from past usage, when it could not get an actual reading. Bills based on estimates are typically marked "E," "Est." or "Estimated," and are corrected when an actual reading is taken.',
    example:
      'Several low estimates in a row can lead to a large catch-up bill once the meter is actually read.',
    categories: ['electricity', 'heating-cooling', 'water-sewer'],
    related: ['budget-billing', 'kwh', 'customer-charge'],
  },
  {
    slug: 'fixed-rate',
    term: 'Fixed rate',
    definition:
      'A price or interest rate that stays the same for a set period. On a loan, the interest rate does not change over the term. On an energy supply contract, the price per unit is locked for the contract length.',
    example: 'A 30-year fixed-rate mortgage keeps the same interest rate for the life of the loan.',
    categories: ['banking-debt', 'housing', 'electricity', 'heating-cooling'],
    related: ['variable-rate', 'apr', 'early-termination-fee'],
  },
  {
    slug: 'franchise-fee',
    term: 'Franchise fee',
    definition:
      'A fee a local government charges a utility or cable company for using public streets and rights-of-way. Companies often pass it through to customers as a line on the bill. For cable TV, federal law caps it at 5% of the operator\'s gross revenues from cable service.',
    example: 'An electric or cable bill may show a franchise fee as a percentage added near the bottom of the bill.',
    categories: ['government-fees', 'electricity', 'internet-phone', 'heating-cooling'],
    related: ['rider', 'customer-charge'],
  },
  {
    slug: 'free-trial',
    term: 'Free trial',
    definition:
      'A no-cost introductory period for a product or service. Many free trials convert to a paid subscription automatically unless you cancel before the trial ends.',
    example: 'A 30-day free trial that started on the 1st may bill you on the 31st.',
    categories: ['subscriptions'],
    related: ['auto-renewal', 'promotional-rate', 'chargeback'],
  },
  {
    slug: 'gap-insurance',
    term: 'GAP insurance',
    aka: 'Guaranteed asset protection',
    definition:
      'Optional coverage for a financed or leased vehicle that may pay the difference between what you owe on the loan or lease and the car\'s value if it is totaled or stolen.',
    example: 'If a car is worth less than the loan balance after an accident, GAP coverage may cover some of that gap.',
    categories: ['transportation', 'insurance'],
    related: ['premium', 'deductible', 'apr'],
  },
  {
    slug: 'grace-period',
    term: 'Grace period',
    definition:
      'Extra time after a due date or billing cycle during which certain costs do not apply. On many credit cards, if you pay the full statement balance by the due date, no interest is charged on new purchases. Insurance policies and loans may also have grace periods before a late payment counts against you.',
    example: 'Carrying a balance on a credit card can cause you to lose the purchase grace period.',
    categories: ['banking-debt', 'insurance', 'housing'],
    related: ['apr', 'minimum-payment', 'late-fee'],
  },
  {
    slug: 'hcf',
    term: 'HCF',
    aka: 'Hundred cubic feet (water)',
    definition:
      'Another name for 100 cubic feet, used by many water and sewer utilities to measure usage. One HCF is about 748 gallons. Rates are often listed per HCF or per 1,000 gallons.',
    example: 'A household using 6 HCF in a month used about 4,488 gallons.',
    categories: ['water-sewer'],
    related: ['ccf', 'stormwater-fee', 'winter-averaging'],
  },
  {
    slug: 'heat-pump',
    term: 'Heat pump',
    definition:
      'Electric equipment that moves heat instead of making it: it pulls heat from outdoor air, the ground or water into the home in winter and works in reverse as an air conditioner in summer. Types include ducted systems, ductless mini-splits and air-to-water units.',
    example:
      'Because it moves heat, a heat pump can deliver more heat than the electricity it uses, though efficiency drops in very cold weather.',
    categories: ['heating-cooling', 'electricity'],
    related: ['cop', 'hspf2', 'seer2', 'afue'],
  },
  {
    slug: 'hoa-fee',
    term: 'HOA fee',
    aka: 'Homeowners association dues',
    definition:
      'A regular fee paid to a homeowners or condominium association to cover shared costs such as common-area upkeep, amenities, some insurance and reserves for future repairs. Associations can also charge special assessments.',
    example: 'A condo owner may pay monthly HOA dues plus a one-time special assessment for a new roof.',
    categories: ['housing', 'home-services'],
    related: ['escrow', 'property-tax-assessment'],
  },
  {
    slug: 'home-warranty',
    term: 'Home warranty',
    aka: 'Home service contract',
    definition:
      'A service contract, separate from homeowners insurance, that covers repair or replacement of certain home systems and appliances. Most charge a yearly price plus a service fee for each repair visit, and coverage limits and exclusions vary.',
    example: 'A home warranty might cover a broken water heater but exclude damage caused by a known pre-existing problem.',
    categories: ['home-services', 'housing'],
    related: ['service-call-fee', 'premium', 'deductible'],
  },
  {
    slug: 'hspf2',
    term: 'HSPF2',
    aka: 'Heating Seasonal Performance Factor 2',
    definition:
      'A heating-efficiency rating for heat pumps measured under the federal test procedure that took effect in 2023. Higher numbers mean more heat delivered per unit of electricity over a heating season.',
    example: 'When comparing heat pump models, compare HSPF2 to HSPF2, not to older HSPF ratings.',
    categories: ['heating-cooling'],
    related: ['seer2', 'heat-pump', 'cop'],
  },
  {
    slug: 'kilowatt',
    term: 'Kilowatt (kW)',
    definition:
      'A measure of power: how fast electricity is being used at a given moment. One kilowatt equals 1,000 watts. Energy used over time is measured in kilowatt-hours.',
    example: 'A 1.5 kW space heater running for two hours uses 3 kWh.',
    categories: ['electricity'],
    related: ['kwh', 'demand-charge'],
  },
  {
    slug: 'kwh',
    term: 'kWh',
    aka: 'Kilowatt-hour',
    definition:
      'The unit most electric bills use to measure how much electricity you used. One kilowatt-hour is the energy used by a 1,000-watt device running for one hour.',
    example: 'A 100-watt bulb left on for 10 hours uses 1 kWh.',
    categories: ['electricity'],
    related: ['kilowatt', 'supply-charge', 'delivery-charge', 'time-of-use-rate'],
  },
  {
    slug: 'late-fee',
    term: 'Late fee',
    definition:
      'A charge added when a payment arrives after its due date. The amount and when it applies are set by your contract, the company\'s terms, or, for regulated utilities, the approved tariff and state rules.',
    example: 'A utility might add a percentage of the past-due balance as a late payment charge.',
    categories: ['banking-debt', 'housing', 'electricity', 'water-sewer'],
    related: ['grace-period', 'minimum-payment', 'autopay'],
  },
  {
    slug: 'mbps',
    term: 'Mbps',
    aka: 'Megabits per second',
    definition:
      'The usual measure of internet speed: how much data can move each second. Plans often list a download speed and a separate, sometimes much lower, upload speed.',
    example: 'A plan advertised as 300 Mbps download may offer a far lower upload speed.',
    categories: ['internet-phone'],
    related: ['data-cap', 'promotional-rate'],
  },
  {
    slug: 'mill-rate',
    term: 'Mill rate',
    aka: 'Millage rate',
    definition:
      'A way of stating property tax rates. One mill is one-tenth of a cent, so a mill rate is the tax owed per $1,000 of a property\'s assessed (taxable) value.',
    example: 'At a mill rate of 20, a home assessed at $200,000 would owe $4,000 a year in that tax, before any exemptions.',
    categories: ['government-fees', 'housing'],
    related: ['property-tax-assessment', 'escrow'],
  },
  {
    slug: 'minimum-payment',
    term: 'Minimum payment',
    definition:
      'The smallest amount you must pay by the due date to keep a credit card or similar account in good standing. Paying only the minimum avoids a late fee but leaves the rest of the balance to keep collecting interest. Card statements must show how long it would take to pay off the balance making only minimum payments.',
    example: 'A statement may show that paying only the minimum would take years to clear the balance.',
    categories: ['banking-debt'],
    related: ['apr', 'grace-period', 'late-fee'],
  },
  {
    slug: 'net-metering',
    term: 'Net metering',
    definition:
      'A billing arrangement for homes with solar panels or other on-site generation. Electricity you send to the grid earns a credit against electricity you take from it. Credit values and rules vary by state and utility, and some states have moved to other compensation methods.',
    example: 'A sunny month may produce a bill credit that carries forward to a cloudier month.',
    categories: ['electricity'],
    related: ['kwh', 'time-of-use-rate', 'supply-charge'],
  },
  {
    slug: 'out-of-pocket-maximum',
    term: 'Out-of-pocket maximum',
    aka: 'Out-of-pocket limit',
    definition:
      'The most you would pay for covered, in-network health care in a plan year through deductibles, copays and coinsurance. After you reach it, the plan pays 100% of covered in-network costs for the rest of the year. Premiums do not count toward it.',
    example: 'A family with a major hospital stay early in the year may hit its out-of-pocket maximum and then owe nothing more for covered in-network care that year.',
    categories: ['healthcare-family', 'insurance'],
    related: ['deductible', 'coinsurance', 'copay', 'premium'],
  },
  {
    slug: 'overdraft-fee',
    term: 'Overdraft fee',
    definition:
      'A fee a bank or credit union may charge when it pays a transaction that takes your account below zero. For ATM withdrawals and one-time debit card purchases, banks need your opt-in before charging overdraft fees.',
    example: 'An automatic bill payment that clears before a paycheck lands can trigger an overdraft fee.',
    categories: ['banking-debt'],
    related: ['autopay', 'late-fee'],
  },
  {
    slug: 'pmi',
    term: 'PMI',
    aka: 'Private mortgage insurance',
    definition:
      'Insurance that protects the lender, not the homeowner, on many conventional mortgages when the down payment is less than 20%. It is usually added to the monthly payment. Under federal law you can generally ask to cancel it once your balance reaches 80% of the home\'s original value, and it ends automatically at 78% if you are current.',
    example: 'Two loans with the same rate can have different monthly payments if one includes PMI.',
    categories: ['housing', 'insurance'],
    related: ['escrow', 'premium', 'principal'],
  },
  {
    slug: 'premium',
    term: 'Premium',
    definition:
      'The price you pay for an insurance policy, billed monthly, every six months or yearly. Paying the premium keeps coverage active; it is separate from the deductible and other costs you pay when you make a claim or get care.',
    example: 'Choosing a higher deductible often lowers the premium, and the reverse is also common.',
    categories: ['insurance', 'healthcare-family', 'housing', 'transportation'],
    related: ['deductible', 'escrow', 'out-of-pocket-maximum'],
  },
  {
    slug: 'price-to-compare',
    term: 'Price to compare',
    definition:
      'In some states with electric choice, the utility\'s default supply price per kWh for customers who have not picked another supplier. It is meant to help you compare offers. What it includes varies by state.',
    example: 'An offer above the price to compare would raise the supply portion of the bill at the same usage.',
    categories: ['electricity'],
    related: ['supply-charge', 'delivery-charge', 'fixed-rate'],
  },
  {
    slug: 'principal',
    term: 'Principal',
    definition:
      'The amount you borrowed, or the part of it you still owe, not counting interest. Each loan payment typically includes some principal and some interest.',
    example: 'Extra payments applied to principal reduce the balance that interest is charged on.',
    categories: ['housing', 'banking-debt', 'transportation'],
    related: ['amortization', 'apr', 'pmi'],
  },
  {
    slug: 'promotional-rate',
    term: 'Promotional rate',
    aka: 'Introductory price',
    definition:
      'A temporary lower price or interest rate that switches to a regular rate after a set time. Common on internet, TV, phone, credit cards and some energy offers.',
    example: 'An internet plan priced lower for the first 12 months may bill a higher standard rate in month 13.',
    categories: ['internet-phone', 'subscriptions', 'banking-debt'],
    related: ['auto-renewal', 'early-termination-fee', 'variable-rate'],
  },
  {
    slug: 'property-tax-assessment',
    term: 'Property tax assessment',
    definition:
      'The value a local assessor assigns to your property for tax purposes. Your tax bill is generally based on the assessed value, any exemptions, and the local tax rate. Most places have a process and deadline for appealing an assessment.',
    example: 'A higher assessment can raise your tax bill, and your escrow payment, even if the tax rate did not change.',
    categories: ['government-fees', 'housing'],
    related: ['mill-rate', 'escrow', 'escrow-shortage'],
  },
  {
    slug: 'prorated-charge',
    term: 'Prorated charge',
    definition:
      'A charge adjusted for a partial billing period. Companies often prorate when you start, stop, upgrade or downgrade service partway through a cycle.',
    example: 'Starting internet service on the 20th of a 30-day cycle may produce a first bill covering only 11 days.',
    categories: ['subscriptions', 'internet-phone', 'electricity'],
    related: ['auto-renewal', 'customer-charge'],
  },
  {
    slug: 'rider',
    term: 'Rider',
    aka: 'Adjustment clause, surcharge',
    definition:
      'A separate, regulator-approved charge or credit added to a utility rate to recover a specific cost, such as fuel, storm recovery, energy-efficiency programs or environmental compliance. Riders can change more often than base rates and can go up or down.',
    example: 'A "fuel adjustment" or "storm recovery" line on an electric bill is typically a rider.',
    categories: ['electricity', 'heating-cooling', 'water-sewer'],
    related: ['customer-charge', 'delivery-charge', 'supply-charge', 'franchise-fee'],
  },
  {
    slug: 'seer2',
    term: 'SEER2',
    aka: 'Seasonal Energy Efficiency Ratio 2',
    definition:
      'A cooling-efficiency rating for central air conditioners and heat pumps measured under the federal test procedure that took effect in 2023. Higher numbers mean more cooling per unit of electricity over a cooling season.',
    example: 'SEER2 numbers are not directly comparable with older SEER ratings, because the test conditions changed.',
    categories: ['heating-cooling', 'electricity'],
    related: ['hspf2', 'heat-pump', 'kwh'],
  },
  {
    slug: 'service-call-fee',
    term: 'Service call fee',
    aka: 'Trip charge, diagnostic fee',
    definition:
      'A flat charge some contractors and home warranty companies bill for sending a technician to diagnose a problem, separate from the cost of the repair itself.',
    example: 'A plumber may charge a service call fee even if the repair is quick, and some apply it toward the repair cost.',
    categories: ['home-services'],
    related: ['home-warranty'],
  },
  {
    slug: 'stormwater-fee',
    term: 'Stormwater fee',
    definition:
      'A charge many cities and utilities bill to pay for managing rain runoff: storm drains, pipes, and projects to reduce flooding and pollution. It is often based on a property\'s hard surfaces, such as roofs and driveways, rather than on water use.',
    example: 'Two homes using the same amount of water can have different stormwater fees if one has a much larger paved area.',
    categories: ['water-sewer', 'government-fees'],
    related: ['hcf', 'winter-averaging', 'customer-charge'],
  },
  {
    slug: 'supply-charge',
    term: 'Supply charge',
    aka: 'Generation or energy charge',
    definition:
      'The part of an electric or gas bill that pays for the energy itself, as opposed to delivering it. In states with retail choice, this is the part you may be able to buy from a different supplier.',
    example: 'On a split bill, supply is usually listed per kWh (electric) or per therm (gas) in its own section.',
    categories: ['electricity', 'heating-cooling'],
    related: ['delivery-charge', 'price-to-compare', 'kwh', 'therm'],
  },
  {
    slug: 'therm',
    term: 'Therm',
    definition:
      'A unit of heat energy equal to 100,000 BTU, commonly used to bill natural gas. Utilities convert the gas volume measured by your meter into therms.',
    example: 'A gas bill might show usage in CCF and then convert it to therms for pricing.',
    categories: ['heating-cooling'],
    related: ['btu', 'ccf', 'supply-charge'],
  },
  {
    slug: 'time-of-use-rate',
    term: 'Time-of-use rate',
    aka: 'TOU rate',
    definition:
      'An electricity rate where the price per kWh depends on when you use power: higher during peak hours, lower off-peak. Peak hours and prices are set in each utility\'s rate schedule.',
    example: 'Running a dishwasher late at night may cost less per kWh than running it in the late afternoon on a TOU plan.',
    categories: ['electricity'],
    related: ['kwh', 'demand-charge', 'net-metering'],
  },
  {
    slug: 'variable-rate',
    term: 'Variable rate',
    definition:
      'A price or interest rate that can change over time, often tied to a market index or set by the company. Many credit cards have variable APRs, and some energy supply plans have variable monthly prices.',
    example: 'A variable-rate energy supply plan can cost more in a month when wholesale prices spike.',
    categories: ['banking-debt', 'electricity', 'heating-cooling', 'housing'],
    related: ['fixed-rate', 'apr', 'promotional-rate'],
  },
  {
    slug: 'vehicle-registration-fee',
    term: 'Vehicle registration fee',
    definition:
      'A state fee to register a vehicle, renewed on a set schedule. Depending on the state, it may be a flat amount or based on vehicle value, weight, age or fuel type, and local fees may be added.',
    example: 'Some states add a separate annual fee for electric vehicles alongside the regular registration fee.',
    categories: ['transportation', 'government-fees'],
    related: ['premium'],
  },
  {
    slug: 'winter-averaging',
    term: 'Winter averaging',
    aka: 'Winter quarter average',
    definition:
      'A method some utilities use to set sewer charges based on your water use in winter months, when little water goes to lawns or pools. The idea is that winter use better reflects what goes down the drain.',
    example: 'Filling a pool in summer may not raise the sewer charge if sewer is billed on winter average use.',
    categories: ['water-sewer'],
    related: ['hcf', 'stormwater-fee', 'estimated-reading'],
  },
]
