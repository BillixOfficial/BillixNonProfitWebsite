import { describe, expect, it } from 'vitest'
import { tokenize, toPlainText } from '@/lib/inline'
import { normalize, queryTerms, search, type SearchDoc } from '@/lib/search'

describe('inline markup', () => {
  it('tokenizes bold, links and citations', () => {
    expect(tokenize('A **bold** [link](/x) claim[^2].')).toEqual([
      { type: 'text', value: 'A ' },
      { type: 'bold', value: 'bold' },
      { type: 'text', value: ' ' },
      { type: 'link', label: 'link', href: '/x' },
      { type: 'text', value: ' claim' },
      { type: 'cite', n: 2 },
      { type: 'text', value: '.' },
    ])
  })
  it('strips markup to plain text', () => {
    expect(toPlainText('See **the** [glossary](/glossary)[^1]  now')).toBe('See the glossary now')
  })
})

describe('search', () => {
  const docs: SearchDoc[] = [
    { type: 'glossary', title: 'Escrow', description: 'An account your servicer uses to pay taxes and insurance.', href: '/glossary#escrow', body: '' },
    { type: 'article', title: 'How to read your electric bill', description: 'Supply, delivery and fixed charges.', href: '/learn/a', body: 'delivery charge kWh meter' },
    { type: 'article', title: 'Why water bills keep rising', description: 'Pipes and fixed costs.', href: '/learn/b', body: 'water sewer' },
  ]
  it('normalizes plurals', () => {
    expect(normalize('Bills')).toBe('bill')
    expect(normalize('charges')).toBe('charge')
    expect(normalize('utilities')).toBe('utility')
  })
  it('drops stop words', () => {
    expect(queryTerms('What is my escrow')).toEqual(['escrow'])
  })
  it('ranks title matches first', () => {
    const hits = search('delivery charges', { docs })
    expect(hits[0].href).toBe('/learn/a')
    expect(search('escrow', { docs })[0].href).toBe('/glossary#escrow')
  })
  it('returns nothing for empty or stop-word-only queries', () => {
    expect(search('   ', { docs })).toEqual([])
    expect(search('what is the', { docs })).toEqual([])
  })
  it('searches the real content index', () => {
    const hits = search('escrow')
    expect(hits.length).toBeGreaterThan(0)
    expect(hits.some((h) => h.href.includes('escrow'))).toBe(true)
  })
})
