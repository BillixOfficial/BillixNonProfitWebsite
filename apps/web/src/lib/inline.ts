/**
 * Tokenizer for Billix inline markup used in content strings:
 *   **bold**   [label](href)   [^n] citation
 * Kept framework-free so it can be unit tested and reused by search (plain text).
 */

export type InlineToken =
  | { type: 'text'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'link'; label: string; href: string }
  | { type: 'cite'; n: number }

const pattern = /\*\*(.+?)\*\*|\[\^(\d+)\]|\[([^\]]+)\]\(([^)\s]+)\)/g

export function tokenize(input: string): InlineToken[] {
  const out: InlineToken[] = []
  let last = 0
  for (const m of input.matchAll(pattern)) {
    const i = m.index ?? 0
    if (i > last) out.push({ type: 'text', value: input.slice(last, i) })
    if (m[1] !== undefined) out.push({ type: 'bold', value: m[1] })
    else if (m[2] !== undefined) out.push({ type: 'cite', n: Number(m[2]) })
    else out.push({ type: 'link', label: m[3], href: m[4] })
    last = i + m[0].length
  }
  if (last < input.length) out.push({ type: 'text', value: input.slice(last) })
  return out
}

/** Strip markup to plain text (for meta descriptions, search and reading time). */
export function toPlainText(input: string): string {
  return tokenize(input)
    .map((t) => (t.type === 'text' || t.type === 'bold' ? t.value : t.type === 'link' ? t.label : ''))
    .join('')
    .replace(/\s+/g, ' ')
    .trim()
}

export const isExternal = (href: string) => /^https?:\/\//.test(href)
