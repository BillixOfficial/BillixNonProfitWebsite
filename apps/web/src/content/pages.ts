import type { ArticleSection } from './types'
import type { AliceMood } from '@/components/brand/alice'

/**
 * Company and help pages rendered by app/[page]. Nothing here may invent people,
 * partners, customers, awards or numbers: Billix is a new company and says so.
 */
export interface InfoPage {
  slug: string
  eyebrow: string
  title: string
  lede: string
  description: string
  mood?: AliceMood
  sections: ArticleSection[]
  cta?: { label: string; href: string }
}

export const infoPages: InfoPage[] = [
  {
    slug: 'about',
    eyebrow: 'About Billix',
    title: 'We explain the bills every home pays',
    lede: 'Billix is building an educational platform to make household bills easier to understand: what you pay, why it changes, and what options you have.',
    description: 'Billix is an educational platform that makes household bills easier to understand.',
    mood: 'explaining',
    sections: [
      { id: 'why', heading: 'Why Billix exists', blocks: [
        { type: 'p', text: 'Most people pay a dozen or more recurring bills, and very few of them come with a clear explanation. Electric bills split supply from delivery. Water bills add sewer and stormwater. Mortgage payments change when escrow is recalculated. Insurance renews at a new price. It adds up to a lot of money that’s hard to understand.' },
        { type: 'p', text: 'Billix exists to close that gap with plain-English guides, honest calculators and short videos narrated by Alice, our recurring explainer.' },
      ] },
      { id: 'what', heading: 'What we do', blocks: [
        { type: 'list', items: [
          '**Learn:** guides to [12 bill categories](/categories), a [glossary](/glossary) and dated [bill updates](/updates).',
          '**Watch:** [videos with Alice](/videos) that read real bill layouts line by line.',
          '**Calculate:** [free tools](/tools) that show their formulas and assumptions.',
          '**Coming next:** bill tracking, reminders, the Billix app and Ask Alice. See the [app page](/app).',
        ] },
      ] },
      { id: 'how', heading: 'How we work', blocks: [
        { type: 'p', text: 'We’re education first. We cite primary sources, show dates and where information applies, and don’t invent rates, rebates or savings. Read our [editorial standards](/editorial-standards).' },
        { type: 'p', text: 'Billix is an early-stage company. We’re building in public and will update this page as we grow.' },
      ] },
    ],
    cta: { label: 'Meet Alice', href: '/meet-alice' },
  },
  {
    slug: 'mission',
    eyebrow: 'Our mission',
    title: 'Understand your bills. Keep more of your money.',
    lede: 'Help homeowners, renters and everyday consumers understand the bills they pay, why costs change, how charges are calculated, and what options they have.',
    description: 'The Billix mission: make household bills understandable for everyone.',
    mood: 'relieved',
    sections: [
      { id: 'principles', heading: 'What we believe', blocks: [
        { type: 'list', items: [
          '**Understanding comes first.** A bill you understand is a bill you can question, plan for and compare.',
          '**Trust is earned with sources.** Every factual claim should be checkable.',
          '**No one should need a finance degree** to read a utility bill.',
          '**Education, not pressure.** We explain options; we don’t push products or providers.',
        ] },
      ] },
      { id: 'order', heading: 'Our priorities, in order', blocks: [
        { type: 'list', ordered: true, items: ['An educational platform first.', 'A useful consumer technology product second.', 'A sustainable business built on audience trust.'] },
      ] },
    ],
    cta: { label: 'Explore your bills', href: '/categories' },
  },
  {
    slug: 'editorial-standards',
    eyebrow: 'Editorial standards',
    title: 'How we research, write and correct',
    lede: 'Billix publishes educational information about household bills. These are the rules every guide, update, video and calculator follows.',
    description: 'Billix editorial standards: sourcing, dates, geography, corrections and independence.',
    mood: 'determined',
    sections: [
      { id: 'sources', heading: 'Sources', blocks: [
        { type: 'p', text: 'We rely on primary and authoritative sources: federal and state agencies (such as the EIA, EPA, BLS, CFPB, FTC and FCC), utility regulators, laws and regulations, and peer-reviewed research. Each source is linked at the bottom of the page with the date we checked it.' },
        { type: 'p', text: 'When a study is funded by or tied to an advocacy group or industry, we say so.' },
      ] },
      { id: 'numbers', heading: 'Numbers, dates and places', blocks: [
        { type: 'list', items: [
          'Every article shows its publication date and last review date.',
          'Every update says what period the data covers and where it applies.',
          'We don’t invent rates, prices, rebates, laws or savings. If we can’t verify a number, we leave it out.',
          'Calculators show their formulas, units and assumptions, and never fill in a rate for you.',
        ] },
      ] },
      { id: 'advice', heading: 'Education, not advice', blocks: [
        { type: 'p', text: 'Billix content is general education. It isn’t financial, legal, tax or medical advice, and it can’t account for your specific contract, provider or state rules.' },
      ] },
      { id: 'ai', heading: 'AI and Alice', blocks: [
        { type: 'p', text: 'Alice is an illustrated character. Her video voice is AI-generated, and we say so in every video description. Scripts are researched and fact-checked against the sources listed. When Ask Alice launches, it will answer from verified Billix content and show its sources.' },
      ] },
      { id: 'independence', heading: 'Independence', blocks: [
        { type: 'p', text: 'We don’t accept payment to cover or rank providers. If we ever use affiliate links or sponsorships, we’ll label them clearly and describe them in our [affiliate disclosure](/legal/affiliate-disclosure).' },
      ] },
      { id: 'corrections', heading: 'Corrections', blocks: [
        { type: 'p', text: 'If you find an error, [report it](/contact?topic=correction). We review every report, fix confirmed errors promptly, and update the review date.' },
      ] },
    ],
  },
  {
    slug: 'press',
    eyebrow: 'Press & media',
    title: 'Press and media kit',
    lede: 'Writing about household bills or Billix? We’re happy to help.',
    description: 'Billix press contact and brand assets.',
    sections: [
      { id: 'contact', heading: 'Press contact', blocks: [
        { type: 'p', text: 'Email [info@billixapp.com](mailto:info@billixapp.com) or use the [contact form](/contact?topic=press) and choose “Press & media”.' },
      ] },
      { id: 'kit', heading: 'Brand assets', blocks: [
        { type: 'list', items: [
          '[Billix logo (PNG)](/brand/billix-logo-transparent.png)',
          '[Alice, waving (WebP)](/alice/hd/hello-v2.webp)',
          '[Alice, explaining (WebP)](/alice/hd/explaining.webp)',
        ] },
        { type: 'p', text: 'Please don’t alter the logo or Alice’s artwork. Brand colors: cream #f4ead0, teal #2c7a72, deep teal #163f3b, gold #e3a63c, plum #8a6ba0, cash green #7fa06f.' },
      ] },
      { id: 'boiler', heading: 'About Billix (boilerplate)', blocks: [
        { type: 'p', text: 'Billix is an educational platform that helps homeowners and renters understand the bills they pay: why costs change, how charges are calculated and what options are available. Its guides, calculators and videos, narrated by the character Alice, cite primary sources and are free to use.' },
      ] },
    ],
  },
  {
    slug: 'work-with-us',
    eyebrow: 'Work with Billix',
    title: 'Work with Billix',
    lede: 'Creators, researchers, educators and organizations who care about clear bill information: we’d like to hear from you.',
    description: 'Ways to work with Billix.',
    sections: [
      { id: 'ways', heading: 'Ways to collaborate', blocks: [
        { type: 'list', items: [
          '**Educators and nonprofits:** use and share our guides; ask about adapting them for your audience.',
          '**Subject experts:** help us review guides in your field.',
          '**Creators:** collaborate on explainers.',
        ] },
        { type: 'p', text: '[Get in touch](/contact?topic=partnerships) and tell us what you have in mind.' },
      ] },
    ],
  },
  {
    slug: 'partnerships',
    eyebrow: 'Partnerships',
    title: 'Partnerships',
    lede: 'We partner only where it helps people understand their bills, and we disclose every partnership.',
    description: 'Partnership principles at Billix.',
    sections: [
      { id: 'principles', heading: 'Our partnership principles', blocks: [
        { type: 'list', items: [
          'Partners never pay for coverage, rankings or favorable explanations.',
          'Any sponsored or affiliate content is clearly labeled.',
          'We don’t share personal information with partners without permission.',
        ] },
        { type: 'p', text: 'Billix doesn’t have partners to announce yet. To start a conversation, [contact us](/contact?topic=partnerships).' },
      ] },
    ],
  },
  {
    slug: 'careers',
    eyebrow: 'Careers',
    title: 'Careers at Billix',
    lede: 'We’re a small, early team. There are no open roles right now.',
    description: 'Careers at Billix.',
    sections: [
      { id: 'future', heading: 'Future roles', blocks: [
        { type: 'p', text: 'When we hire, roles will be posted here first. If you’re passionate about consumer education, utilities, personal finance or building trustworthy products, [introduce yourself](/contact?topic=general).' },
      ] },
    ],
  },
  {
    slug: 'help',
    eyebrow: 'Help center',
    title: 'Help center',
    lede: 'Answers about using Billix, the newsletter, orders and your data.',
    description: 'Billix help center.',
    sections: [
      { id: 'using', heading: 'Using Billix', blocks: [
        { type: 'p', text: '**Do I need an account?** No. Guides, videos and calculators are free and need no sign-up. Accounts are planned; see [My Billix](/account).' },
        { type: 'p', text: '**Can Billix look at my bill?** Not yet. We can’t review individual bills. You can [ask a general question](/community#ask), and a secure bill analyzer is on our roadmap.' },
        { type: 'p', text: '**Do your calculators save what I type?** No. They run in your browser and nothing is sent to us.' },
      ] },
      { id: 'newsletter', heading: 'Newsletter', blocks: [
        { type: 'p', text: 'Every issue of The Billix Brief has links to change your preferences or unsubscribe. Didn’t get the confirmation email? Check spam, then [sign up again](/newsletter) to get a fresh link.' },
      ] },
      { id: 'orders', heading: 'Orders', blocks: [
        { type: 'p', text: 'The Billix Shop hasn’t opened, so there are no orders yet. When it opens, order support, [shipping](/legal/shipping) and [returns](/legal/returns) details will be here.' },
      ] },
      { id: 'contact', heading: 'Still need help?', blocks: [
        { type: 'p', text: '[Contact us](/contact?topic=support). We reply within two business days.' },
      ] },
    ],
  },
]

export const getInfoPage = (slug: string) => infoPages.find((p) => p.slug === slug)
