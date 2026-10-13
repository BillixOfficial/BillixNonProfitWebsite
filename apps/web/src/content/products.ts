import type { Product, ShopCollection } from './types'

/**
 * Planned Billix products. These are NOT existing inventory: every item is
 * 'coming_soon' or 'draft' until it is produced and checkout + fulfillment are live.
 * Prices are proposed and stored in cents so they can be changed in one place.
 */

export const collections: { slug: ShopCollection; name: string; description: string }[] = [
  { slug: 'books', name: 'Books & Ebooks', description: 'Plain-English guides to the bills every home pays.' },
  { slug: 'digital', name: 'Digital Downloads', description: 'Printable trackers, worksheets and checklists.' },
  { slug: 'workbooks', name: 'Workbooks & Planners', description: 'Planners for budgeting the year ahead.' },
  { slug: 'apparel', name: 'Apparel', description: 'Billix tees, hoodies and hats.' },
  { slug: 'accessories', name: 'Accessories', description: 'Mugs, notebooks and desk gear.' },
  { slug: 'alice', name: 'Alice Collection', description: 'Learning products starring Alice, for kids and families.' },
  { slug: 'bundles', name: 'Bundles & Gifts', description: 'Sets that pair well together.' },
]

const p = (
  slug: string,
  name: string,
  collection: ShopCollection,
  priceCents: number,
  format: Product['format'],
  description: string,
  extra: Partial<Product> = {},
): Product => ({ slug, name, collection, priceCents, format, status: 'coming_soon', description, ...extra })

export const products: Product[] = [
  // Books & ebooks
  p('billix-guide-paperback', 'The Billix Guide to Understanding Your Bills (Paperback)', 'books', 1999, 'paperback', 'The flagship Billix book: every common household bill, explained line by line.'),
  p('billix-guide-ebook', 'The Billix Guide to Understanding Your Bills (Ebook)', 'books', 999, 'ebook', 'The flagship Billix book in digital form: read on any device.', { featured: true }),
  p('homeowners-bill-handbook', 'The Complete Homeowner’s Bill Handbook', 'books', 2499, 'paperback', 'Mortgage, taxes, insurance, utilities and upkeep: the full cost of owning a home.', { categories: ['housing'] }),
  p('electricity-bills-explained', 'Electricity Bills Explained (Ebook)', 'books', 799, 'ebook', 'Supply, delivery, riders and rates, made simple.', { categories: ['electricity'] }),
  p('heating-your-home', 'Heating Your Home: Oil, Gas or Electric? (Ebook)', 'books', 999, 'ebook', 'How to compare heating fuels on the same unit of heat.', { categories: ['heating-cooling'] }),
  p('water-sewer-bills', 'Understanding Water & Sewer Bills (Ebook)', 'books', 699, 'ebook', 'Why water bills rise and how to read every charge.', { categories: ['water-sewer'] }),
  p('first-time-homeowner-guide', 'The First-Time Homeowner’s Expense Guide', 'books', 1999, 'paperback', 'The costs that surprise new owners, and how to plan for them.', { categories: ['housing'] }),
  p('100-ways-review-expenses', '100 Ways to Review Your Household Expenses (Ebook)', 'books', 899, 'ebook', 'A practical checklist for reviewing every recurring bill.'),
  // Digital downloads
  p('monthly-bill-tracker', 'Monthly Household Bill Tracker', 'digital', 499, 'digital-download', 'A printable tracker for due dates, amounts and payments.', { featured: true }),
  p('annual-bill-budget-planner', 'Annual Bill Budget Planner', 'digital', 699, 'digital-download', 'Plan a year of bills, including the once-a-year ones.'),
  p('utility-comparison-worksheet', 'Utility Comparison Worksheet', 'digital', 399, 'digital-download', 'Compare plans and rates side by side on equal terms.'),
  p('home-maintenance-planner', 'Home Maintenance Planner', 'digital', 599, 'digital-download', 'A seasonal schedule for the upkeep that prevents big bills.'),
  p('first-time-homeowner-checklist', 'First-Time Homeowner Checklist', 'digital', 0, 'digital-download', 'Accounts to set up and costs to expect in your first year.'),
  p('moving-utilities-checklist', 'Moving Utilities Checklist', 'digital', 0, 'digital-download', 'Every service to stop, start or transfer when you move, with timing.', { featured: true }),
  p('subscription-audit-worksheet', 'Subscription Audit Worksheet', 'digital', 0, 'digital-download', 'List, total and review every subscription you pay for.'),
  p('electricity-usage-log', 'Electricity Usage Log', 'digital', 299, 'digital-download', 'Track meter readings and spot unusual usage early.'),
  p('home-heating-comparison-kit', 'Home Heating Comparison Kit', 'digital', 799, 'digital-download', 'Worksheets to compare fuels, equipment and quotes.'),
  p('household-planner-bundle', 'Complete Household Planner Bundle', 'bundles', 1999, 'bundle', 'Every Billix tracker and planner in one download.'),
  // Apparel
  p('classic-tee', 'Billix Classic T-Shirt', 'apparel', 2499, 'apparel', 'Soft everyday tee with the Billix piggy-bank logo on the chest.', { featured: true, variants: [{ name: 'Color', options: ['Deep Teal', 'Cream', 'Heather Gray'] }, { name: 'Size', options: ['S', 'M', 'L', 'XL', '2XL'] }], details: ['100% ring-spun cotton', 'Relaxed unisex fit', 'Printed logo, wash-tested'] }),
  p('signature-hoodie', 'Billix Signature Hoodie', 'apparel', 4999, 'apparel', 'Midweight fleece hoodie with an embroidered Billix logo.', { featured: true, variants: [{ name: 'Color', options: ['Deep Teal', 'Oatmeal'] }, { name: 'Size', options: ['S', 'M', 'L', 'XL', '2XL'] }], details: ['Brushed fleece inside', 'Embroidered logo', 'Kangaroo pocket'] }),
  p('understand-your-bills-tee', 'Understand Your Bills T-Shirt', 'apparel', 2699, 'apparel', 'The Billix motto, front and center.', { variants: [{ name: 'Color', options: ['Cream', 'Gold'] }, { name: 'Size', options: ['S', 'M', 'L', 'XL', '2XL'] }] }),
  p('alice-explains-tee', 'Alice Explains T-Shirt', 'apparel', 2799, 'apparel', 'Alice, ready to walk you through it, on a soft cream tee.', { variants: [{ name: 'Size', options: ['S', 'M', 'L', 'XL', '2XL'] }] }),
  p('crewneck', 'Billix Crewneck', 'apparel', 4499, 'apparel', 'Classic crewneck sweatshirt with a small chest logo.', { variants: [{ name: 'Color', options: ['Gold', 'Deep Teal'] }, { name: 'Size', options: ['S', 'M', 'L', 'XL', '2XL'] }] }),
  p('baseball-cap', 'Billix Baseball Cap', 'apparel', 2499, 'apparel', 'Adjustable six-panel cap with an embroidered logo.', { variants: [{ name: 'Color', options: ['Deep Teal', 'Stone'] }] }),
  p('beanie', 'Billix Beanie', 'apparel', 1999, 'apparel', 'Warm knit beanie for heating season.'),
  p('polo', 'Billix Polo', 'apparel', 3499, 'apparel', 'Clean piqué polo with a small embroidered chest logo.', { variants: [{ name: 'Size', options: ['S', 'M', 'L', 'XL', '2XL'] }] }),
  p('youth-tee', 'Billix Youth T-Shirt', 'apparel', 2199, 'apparel', 'Kids’ sizes, same soft tee, with Alice.', { variants: [{ name: 'Size', options: ['XS (4-5)', 'S (6-8)', 'M (10-12)', 'L (14-16)'] }] }),
  p('tote-bag', 'Billix Tote Bag', 'apparel', 1899, 'accessory', 'Sturdy canvas tote.'),
  // Accessories
  p('ceramic-mug', 'Billix Ceramic Mug', 'accessories', 1699, 'accessory', 'A 12 oz mug for reading your bills over coffee.', { featured: true, variants: [{ name: 'Color', options: ['Cream', 'Deep Teal'] }], details: ['12 oz stoneware', 'Dishwasher and microwave safe'] }),
  p('alice-mug', 'Alice Coffee Mug', 'accessories', 1899, 'accessory', 'Alice, on your morning mug.'),
  p('water-bottle', 'Billix Water Bottle', 'accessories', 2499, 'accessory', 'Insulated stainless bottle.'),
  p('notebook', 'Billix Notebook', 'accessories', 1499, 'accessory', 'Lined notebook for budgets and notes.'),
  p('sticker-pack', 'Billix Sticker Pack', 'accessories', 699, 'accessory', 'Logo and Alice stickers.'),
  p('mouse-pad', 'Billix Mouse Pad', 'accessories', 1499, 'accessory', 'Smooth-surface mouse pad.'),
  p('desk-mat', 'Billix Desk Mat', 'accessories', 2999, 'accessory', 'Full-size desk mat.'),
  p('pen-set', 'Billix Pen Set', 'accessories', 999, 'accessory', 'A set of smooth-writing pens.'),
  p('magnet-pack', 'Billix Magnet Pack', 'accessories', 799, 'accessory', 'Fridge magnets to keep due dates in sight.'),
  p('wall-calendar', 'Billix Wall Calendar', 'accessories', 1799, 'accessory', 'A year of bill reminders and tips.'),
  // More accessories and paper goods
  p('enamel-pin', 'Billix Piggy Enamel Pin', 'accessories', 1199, 'accessory', 'A hard-enamel pin of the Billix piggy bank.'),
  p('bill-organizer-folder', 'Billix Bill Organizer Folder', 'accessories', 1999, 'accessory', 'A 12-pocket expanding folder with a tab for every month.', { details: ['12 labeled pockets', 'Elastic closure', 'Fits letter-size bills'] }),
  p('meter-reading-notepad', 'Meter Reading Notepad', 'workbooks', 899, 'accessory', 'A tear-off pad for logging electric, gas and water meter readings.'),
  p('bill-day-desk-planner', 'Bill Day Desk Planner', 'workbooks', 2499, 'paperback', 'An undated desk planner built around due dates, with a monthly bill review page.', { featured: true, details: ['12 undated months', 'Monthly bill review pages', 'Lay-flat binding'] }),
  p('alice-sticker-sheet', 'Alice Expressions Sticker Sheet', 'alice', 599, 'accessory', 'Alice in eight moods, from thinking to celebrating.'),
  p('starter-bundle', 'Billix Starter Bundle', 'bundles', 3999, 'bundle', 'The flagship ebook, the bill tracker and a Billix mug, together.', { featured: true, details: ['Ebook + printable tracker', 'Billix ceramic mug', 'Gift-ready box'] }),
  p('new-homeowner-gift-set', 'New Homeowner Gift Set', 'bundles', 5999, 'bundle', 'The Homeowner’s Bill Handbook, the bill organizer folder and a magnet pack.'),
  // Alice collection (planned, unpriced = draft)
  ...[
    ['alice-explains-electricity', 'Alice Explains Electricity'],
    ['alice-explains-water', 'Alice Explains Water'],
    ['alice-explains-heating', 'Alice Explains Heating'],
    ['alice-explains-saving-energy', 'Alice Explains Saving Energy'],
    ['alice-explains-household-expenses', 'Alice Explains Household Expenses'],
    ['alice-activity-book', 'Alice Activity Book'],
  ].map(([slug, name]) =>
    p(slug, name, 'alice', slug === 'alice-activity-book' ? 999 : 1299, 'paperback', slug === 'alice-activity-book' ? 'Puzzles, mazes and coloring pages about where electricity, water and money go. Ages 6–10.' : 'An illustrated picture book for ages 5–9: Alice explains how it works at home, in words kids understand.'),
  ),
]

/** Drafts are internal planning items and never shown with a price. */
export const visibleProducts = products.filter((x) => x.status !== 'draft' || x.collection === 'alice')

export const formatPrice = (cents: number) =>
  cents === 0 ? 'Free' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100)
