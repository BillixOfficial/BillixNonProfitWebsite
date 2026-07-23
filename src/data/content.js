// All Billix marketing copy in one place.

export const nav = [
  { label: 'Product', href: '#what' },
  { label: "Who it's for", href: '#who' },
  { label: 'How we start', href: '#process' },
]

export const hero = {
  eyebrow: 'Software for utility relief programs',
  titleTop: 'Get relief to families',
  titleAccent: 'before the shutoff.',
  // three short benefit lines with bolded key phrases (rendered in Hero.jsx)
  ledeLines: [
    [['Collect a '], ['verified application', true], [' in minutes.']],
    [['Take '], ['document-chasing', true], [" off caseworkers' plates."]],
    [['Confirm a '], ['hold on the account', true], [' before the lights go out.']],
  ],
  primary: { label: 'Start a conversation', href: '#contact' },
  reassure: 'No rip-and-replace. Works alongside the state systems you already use.',
}

export const served = {
  label: 'Built for the people who hold the line every winter',
  items: [
    'Statewide administrators',
    'Hardship-fund nonprofits',
    'County & community action agencies',
    'Regulated utilities',
  ],
}

export const productIntro = {
  eyebrow: 'The product',
  title: 'One layer over the systems you already use.',
  intro:
    'Grants still move directly from agency to utility, the state keeps its records, and caseworkers make every eligibility call. Billix handles the work in between.',
}

export const features = [
  {
    num: '01 / Family front door',
    title: 'A verified application in minutes, from a phone.',
    body:
      'One link or QR code opens a short mobile application. Screening questions route each household to the programs they qualify for, in the order the state requires. As families photograph their documents, the app checks each one and asks for a retake right away if anything is unreadable, so a missing page gets fixed in seconds instead of on a second trip in.',
    mock: 'phone',
    flip: false,
  },
  {
    num: '02 / Caseworker workbench',
    title: 'Files arrive ready to review, not ready to assemble.',
    body:
      'Documents are captured and legible, household income is calculated against the right program threshold, and anything that does not add up is flagged rather than buried. Caseworkers spend their time on decisions instead of chasing paperwork and re-keying the same data twice.',
    mock: 'rows',
    flip: true,
  },
  {
    num: '03 / Pledge tracker',
    title: 'Every approval followed all the way to a confirmed hold.',
    body:
      'When a grant is approved, Billix sends a standardized hold request to the utility through the channel it already uses, records the time it went out, and watches for confirmation. If a shutoff date is approaching without a response, it escalates on its own, so an approval never gets stranded in a shared inbox.',
    mock: 'timeline',
    flip: false,
  },
]

export const who = {
  eyebrow: "Who it's for",
  title: 'Every state has the same three layers.',
  intro:
    'A state agency, a network of intake agencies, and a statewide hardship fund catching whoever falls through. Billix meets each of them where they are, carrying the sequencing rules, eligibility charts, and utility-by-utility hold procedures that today live only in institutional memory.',
  cards: [
    { tag: 'For administrators', title: 'Statewide programs', body: 'Run your program across the whole state on shared infrastructure.' },
    { tag: 'For nonprofits', title: 'Hardship funds', body: 'Coordinate intake across dozens of local partners without the paper chase.' },
    { tag: 'For counties', title: 'Intake agencies', body: 'Clear the heating-season backlog before grant funding is returned unspent.' },
    { tag: 'For utilities', title: 'Payment assistance', body: 'Receive complete, standardized hold requests through one reliable channel.' },
  ],
}

export const process = {
  eyebrow: 'How we start',
  title: 'A pilot, then the numbers decide the rest.',
  intro:
    'No long procurement, no rip-and-replace. We learn how your program actually runs, put Billix to work through one heating season, and measure two things: caseworker minutes per application, and the days between an approval and a confirmed hold.',
  steps: [
    { n: 'Step 01', title: 'Discovery', body: 'A few working sessions to map your intake, your programs, and where the days get lost.' },
    { n: 'Step 02', title: 'Pilot', body: 'One agency, one season. We build only what your biggest pain point calls for.' },
    { n: 'Step 03', title: 'Measure', body: 'Before-and-after numbers your team can see, not a demo deck of promises.' },
    { n: 'Step 04', title: 'Expand', body: 'Roll the same playbook out to more agencies once the results are in hand.' },
  ],
}

export const principles = {
  eyebrow: 'Where we draw the line',
  title: 'Deliberately narrow, so we stay easy to adopt.',
  cards: [
    { title: "We don't hold funds", body: 'Grants flow from agency to utility exactly as they do today. Billix never sits in the money path, which keeps us clear of banking rules.' },
    { title: "We're not the record", body: 'The state keeps its system of record. Billix formats verified data to match those screens and steps aside if a direct integration is ever granted.' },
    { title: "We don't decide eligibility", body: 'The software computes and recommends; a caseworker makes every determination. Our job is making sure no one reviews an incomplete file.' },
  ],
}

export const mission = {
  kicker: 'Why this matters',
  headline: 'Nobody falls through.',
  body:
    'Not the family who did everything right. Not the household one cold night from a crisis. When help is approved, we make sure it actually reaches them before the lights go out.',
}

export const founder = {
  eyebrow: 'Why we built Billix',
  // Replace with your name, photo, and a few sentences in your own voice.
  paragraphs: [
    "We kept seeing the same heartbreak. A family got the help they qualified for, and it still didn't reach them in time. Not because anyone failed, but because the last mile between an approval and a utility actually holding the account ran on phone calls and shared inboxes.",
    'Billix exists to close that gap, so the people fighting to keep families connected never have to watch approved help arrive too late.',
  ],
  signature: 'The Billix team',
  note: 'Add your name & photo',
}

export const contact = {
  eyebrow: 'Contact us',
  title: "Let's talk about your program.",
  intro:
    "Tell us where the workflow hurts most: intake, document chasing, or getting a confirmed hold on the account. We'll follow up to set up a first conversation.",
  details: [
    { label: 'Email', value: 'info@billixapp.com', href: 'mailto:info@billixapp.com' },
    { label: 'Best for', value: 'Administrators, nonprofits, county agencies & utilities' },
    { label: 'Response time', value: 'We reply to every inquiry within two business days' },
  ],
  orgTypes: [
    'Statewide program administrator',
    'Hardship-fund nonprofit',
    'County / community action agency',
    'Regulated utility',
    'State agency',
    'Other',
  ],
}

export const footer = {
  blurb:
    'Billix helps utility-relief programs reach families faster, from the first application to a confirmed hold on the account.',
  links: [
    { label: 'Product', href: '#what' },
    { label: "Who it's for", href: '#who' },
    { label: 'How we start', href: '#process' },
    { label: 'Contact', href: '#contact' },
    { label: 'info@billixapp.com', href: 'mailto:info@billixapp.com' },
  ],
}
