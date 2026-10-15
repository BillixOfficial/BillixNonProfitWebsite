import type { StateGuide } from '../types'

export const nh: StateGuide = {
  code: 'NH',
  lastReviewed: '2026-10-15',
  intro:
    'New Hampshire households can buy electricity from their utility, a competitive supplier or a community power aggregator, but residential natural gas still comes only from the local gas utility[^1][^5]. Utility rates are set by the Public Utilities Commission, while consumer complaints go to the Department of Energy[^2][^3].',
  regulator: {
    name: 'New Hampshire Public Utilities Commission (NH PUC)',
    url: 'https://www.puc.nh.gov/',
    complaintUrl: 'https://www.energy.nh.gov/consumers/file-complaint',
    text: "The PUC governs the rates of New Hampshire's regulated electric, natural gas, water and sewer utilities, with limited jurisdiction over telephone service[^2]. Complaints are handled by the New Hampshire Department of Energy's Consumer Services Division, which mediates disputes and helps set up payment plans[^2][^3]. It does not regulate propane, heating oil, cable, cell phone or internet providers, and has no jurisdiction over municipal utilities[^3]. **Contact your utility first**; if you're not satisfied, call Consumer Services at 1-800-852-3793 or email consumerservices@energy.nh.gov[^3].",
  },
  electricity: {
    market: 'choice',
    text: "Only one utility can deliver electricity to your home, but you choose who supplies it: your utility's default service, a competitive energy supplier, or a community power aggregator where one is available[^1][^4]. Default service prices are posted by the PUC and apply if you don't buy from a supplier or aggregator[^6]. Before you switch, compare the supplier's price per kWh with the supply price on your bill, and ask whether it is fixed or variable, how long the contract lasts, and whether there is an early termination fee or other recurring charges[^4]. Suppliers must notify you at least 45 days before your contract ends, and people who lose track of that date can end up paying more[^4]. See [supply vs. delivery charges](/learn/supply-vs-delivery-charges).",
    shopping: { name: 'NH Department of Energy: Shop Electric Rates', url: 'https://www.energy.nh.gov/engyapps/ceps/shop.aspx' },
  },
  gas: {
    text: "The PUC regulates the local gas utilities' service and delivery rates[^5]. **Residential customers can't choose a gas supplier**; they buy both the gas and its delivery from the local gas utility[^5]. Supplier choice is limited to commercial and industrial customers of Liberty and Unitil[^5].",
    shopping: null,
  },
  water: {
    text: 'The PUC governs the rates of regulated water and sewer utilities[^2]. Municipal utilities are outside the Department of Energy\'s jurisdiction, so if your town provides water or sewer service, take billing questions to the town[^3].',
  },
  shutoff: {
    text: "The **winter period runs November 15 through March 31** for residential electric and gas customers[^7]. Under the winter rules, a utility can't send a disconnection notice for your home unless your past-due balance is over $450 for heating customers ($225 for electric non-heating, $125 for gas non-heating), and it must get Department of Energy approval before disconnecting a customer known to be 65 or older[^7]. A medical emergency certified by a licensed physician, advanced practice registered nurse, physician assistant or mental health practitioner, together with a payment arrangement for past-due balances, protects electric, gas and water service; certifications last 90 days to one year and can be renewed[^7]. A disconnection notice must be postmarked at least 14 calendar days before the shutoff date[^7].",
  },
  help: [
    {
      name: 'Fuel Assistance Program (FAP)',
      url: 'https://www.energy.nh.gov/fap',
      summary:
        "New Hampshire's LIHEAP program, run by the Department of Energy through local Community Action Agencies. Benefits range from $188 to $2,500 depending on income and energy costs, are grants that don't have to be repaid, and can help in a heating emergency. Apply through your local Community Action Agency[^8].",
    },
    {
      name: 'Electric Assistance Program (EAP)',
      url: 'https://www.energy.nh.gov/eap',
      summary:
        'A monthly discount of 5% to 86% on electric bills for income-eligible customers of Eversource, Unitil, Liberty or the New Hampshire Electric Cooperative, based on household income and size. It is a 12-month program; apply through your local Community Action Agency[^9].',
    },
    {
      name: 'Weatherization Assistance Program (WAP)',
      url: 'https://www.energy.nh.gov/consumers/help-energy-and-utility-bills/weatherization-assistance-program',
      summary:
        'Cost-effective energy efficiency improvements for low-income households, run by the Department of Energy and delivered by Community Action Agencies after a comprehensive home energy audit[^10].',
    },
  ],
  consumer: {
    name: 'New Hampshire Attorney General Consumer Protection and Antitrust Bureau',
    url: 'https://www.doj.nh.gov/citizens/consumer-protection-antitrust-bureau/consumer-complaints',
    summary:
      'Takes written complaints about businesses you believe used unfair or deceptive practices; an attorney reviews each one and may send it to the business for a response. The Bureau cannot represent you or give legal advice[^11].',
  },
  rebates: [
    {
      name: 'NHSaves utility efficiency programs',
      url: 'https://www.energy.nh.gov/consumers/energy-efficiency/energy-efficiency-programs-and-services',
      summary:
        'Efficiency programs and services for electric and gas customers of Eversource, Liberty Utilities, the New Hampshire Electric Cooperative and Unitil. The Department of Energy points customers to NHSaves or their utility for details[^12].',
    },
    {
      name: 'Home Electrification and Appliance Rebates (HEAR) Program',
      url: 'https://www.energy.nh.gov/funding-opportunities/funding-opportunities-homeowners/home-electrification-and-appliance-rebates',
      summary:
        'Federal rebates for heat pumps, heat pump water heaters, electric stoves and related upgrades for households earning up to 150% of area median income. As of its July 29, 2026 update, the Department of Energy said the program was expected to launch in fall 2026 and rebates are not available for projects started before launch, so check the page for current status[^13].',
    },
  ],
  sources: [
    { title: 'Welcome', publisher: 'New Hampshire Public Utilities Commission', url: 'https://www.puc.nh.gov/', accessed: '2026-10-15' },
    { title: 'Frequently Asked Questions', publisher: 'New Hampshire Public Utilities Commission', url: 'https://www.puc.nh.gov/public-participation/new-hampshire-public-utilities-commission-frequently-asked-questions', accessed: '2026-10-15' },
    { title: 'File a Complaint', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/consumers/file-complaint', accessed: '2026-10-15' },
    { title: 'Choosing an Energy Supplier', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/consumers/choosing-energy-supplier', accessed: '2026-10-15' },
    { title: 'Competitive Natural Gas Suppliers & Aggregators', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/utilities-providers/competitive-natural-gas-suppliers-aggregators', accessed: '2026-10-15' },
    { title: 'Electric Rates', publisher: 'New Hampshire Public Utilities Commission', url: 'https://www.puc.nh.gov/energy-rates/electric-rates', accessed: '2026-10-15' },
    { title: 'Chapter En 1200: Uniform Administration of Utility Customer Relations', publisher: 'New Hampshire Department of Energy (via NH General Court)', url: 'https://gc.nh.gov/rules/state_agencies/en1200.html', accessed: '2026-10-15' },
    { title: 'Fuel Assistance Program', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/fap', accessed: '2026-10-15' },
    { title: 'Electric Assistance Program', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/eap', accessed: '2026-10-15' },
    { title: 'Weatherization Assistance Program', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/consumers/help-energy-and-utility-bills/weatherization-assistance-program', accessed: '2026-10-15' },
    { title: 'Consumer Complaints', publisher: 'New Hampshire Department of Justice, Consumer Protection and Antitrust Bureau', url: 'https://www.doj.nh.gov/citizens/consumer-protection-antitrust-bureau/consumer-complaints', accessed: '2026-10-15' },
    { title: 'Energy Efficiency Programs and Services', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/consumers/energy-efficiency/energy-efficiency-programs-and-services', accessed: '2026-10-15' },
    { title: 'Home Electrification and Appliance Rebates Program', publisher: 'New Hampshire Department of Energy', url: 'https://www.energy.nh.gov/funding-opportunities/funding-opportunities-homeowners/home-electrification-and-appliance-rebates', accessed: '2026-10-15' },
  ],
}
