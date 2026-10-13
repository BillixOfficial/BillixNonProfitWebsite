import type { ArticleSection } from './types'

/**
 * Legal page structure. These are working drafts that describe what the site
 * actually does today. They must be reviewed by a qualified attorney before launch;
 * pages show a visible "draft" notice until `reviewed` is true.
 */
export interface LegalPage {
  slug: string
  title: string
  summary: string
  updated: string
  reviewed: boolean
  sections: ArticleSection[]
}

const U = '2026-10-13'
const p = (text: string) => ({ type: 'p' as const, text })

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    summary: 'What we collect, why, and the choices you have.',
    updated: U,
    reviewed: false,
    sections: [
      { id: 'collect', heading: 'What we collect', blocks: [
        { type: 'list', items: [
          '**Newsletter and waitlists:** your email address, the topics you choose, when and where you signed up, and a record of your consent.',
          '**Contact form:** your name, email, topic and message.',
          '**Community submissions:** your question or idea, the bill type, and optionally your state, first name and email.',
          '**Security data:** a one-way, salted hash of your IP address, used to prevent spam and abuse. We don’t store the IP address itself.',
        ] },
        p('**Calculators** run in your browser. What you type into them is not sent to or stored by Billix.'),
      ] },
      { id: 'use', heading: 'How we use it', blocks: [
        { type: 'list', items: ['To send the emails you asked for, and only those.', 'To reply to your messages.', 'To decide which guides and videos to make.', 'To keep the site secure and stop spam.'] },
        p('We don’t sell or rent personal information, and we don’t use it for advertising.'),
      ] },
      { id: 'cookies', heading: 'Cookies and tracking', blocks: [
        p('The site currently sets no advertising or analytics cookies. If that changes, we’ll update this policy and the [cookie settings](/legal/cookies) page first, and ask for consent where required. Published videos are embedded using YouTube’s privacy-enhanced mode.'),
      ] },
      { id: 'sharing', heading: 'Service providers', blocks: [
        p('We use hosting, database and email-delivery providers to run Billix. They process data only on our instructions. This section will list them by name before launch.'),
      ] },
      { id: 'choices', heading: 'Your choices', blocks: [
        p('Unsubscribe or change topics from any newsletter email. To access, correct or delete your information, email [info@billixapp.com](mailto:info@billixapp.com). Billix is not intended for children under 13 and doesn’t knowingly collect their information.'),
      ] },
      { id: 'contact', heading: 'Contact', blocks: [p('Questions about privacy: [info@billixapp.com](mailto:info@billixapp.com).')] },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    summary: 'The rules for using the Billix website.',
    updated: U,
    reviewed: false,
    sections: [
      { id: 'education', heading: 'Educational information only', blocks: [p('Billix provides general educational information about household bills. It is not financial, legal, tax, insurance or medical advice. Rates, rules and programs vary by provider and location and change over time. Check important decisions with your provider or a qualified professional.')] },
      { id: 'calculators', heading: 'Calculators', blocks: [p('Calculator results are estimates based on the numbers you enter and the assumptions shown on each tool. Actual bills may differ.')] },
      { id: 'content', heading: 'Our content', blocks: [p('Billix text, illustrations, the Alice character and the Billix logo belong to Billix. You may link to and share our pages. Please don’t copy whole guides or alter our artwork without permission.')] },
      { id: 'submissions', heading: 'Your submissions', blocks: [p('When you send a question or idea, you let Billix use it to create educational content. We won’t publish your name or email. Submissions must follow our [community guidelines](/community/guidelines).')] },
      { id: 'changes', heading: 'Changes', blocks: [p('We may update these terms. The date at the top shows the latest version.')] },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie Settings',
    summary: 'Which cookies Billix uses and how to control them.',
    updated: U,
    reviewed: false,
    sections: [
      { id: 'now', heading: 'Cookies we use today', blocks: [p('None for advertising or analytics. The site works without cookies. Your browser may store small preferences locally (for example, what you typed into a form you haven’t sent yet).')] },
      { id: 'later', heading: 'If that changes', blocks: [p('Before adding analytics or other optional cookies, we’ll add a consent control to this page so you can turn them on or off, and update the [privacy policy](/legal/privacy).')] },
    ],
  },
  {
    slug: 'affiliate-disclosure',
    title: 'Affiliate Disclosure',
    summary: 'How Billix is paid, and how that’s labeled.',
    updated: U,
    reviewed: false,
    sections: [
      { id: 'now', heading: 'Today', blocks: [p('Billix has no affiliate links or sponsorships. No company pays us to appear in our guides, videos or tools.')] },
      { id: 'future', heading: 'In the future', blocks: [p('If we ever earn a commission or sponsorship, the link or content will be clearly labeled where it appears, it won’t change what we say about a product or provider, and this page will list the relationship.')] },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility',
    summary: 'Our commitment to an accessible Billix.',
    updated: U,
    reviewed: false,
    sections: [
      { id: 'goal', heading: 'Our goal', blocks: [p('We aim to meet WCAG 2.2 Level AA. The site supports keyboard navigation, screen readers, reduced motion, and text that scales with your browser settings. Videos will include captions and transcripts.')] },
      { id: 'feedback', heading: 'Tell us about barriers', blocks: [p('If something is hard to use, [contact us](/contact?topic=support) and describe the page and the problem. We’ll respond within two business days.')] },
    ],
  },
  {
    slug: 'shipping',
    title: 'Shipping Policy',
    summary: 'Shipping details for physical products.',
    updated: U,
    reviewed: false,
    sections: [{ id: 'status', heading: 'Not yet in effect', blocks: [p('The Billix Shop hasn’t opened and nothing ships yet. This page will list shipping regions, carriers, costs and delivery times before the first physical product goes on sale.')] }],
  },
  {
    slug: 'returns',
    title: 'Returns & Refunds',
    summary: 'Returns and refunds for shop orders.',
    updated: U,
    reviewed: false,
    sections: [{ id: 'status', heading: 'Not yet in effect', blocks: [p('The Billix Shop hasn’t opened. Our return window, refund method and process for damaged or incorrect items will be published here before launch.')] }],
  },
  {
    slug: 'digital-product-terms',
    title: 'Digital Product Terms',
    summary: 'Terms for ebooks and downloads.',
    updated: U,
    reviewed: false,
    sections: [{ id: 'status', heading: 'Not yet in effect', blocks: [p('No digital products are on sale yet. Before launch, this page will explain the personal-use license, how downloads are delivered, download limits, and refunds for digital items.')] }],
  },
]

export const getLegalPage = (slug: string) => legalPages.find((p) => p.slug === slug)
