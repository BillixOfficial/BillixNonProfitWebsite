// Billix public API as a Supabase Edge Function.
//
// Mirrors apps/api (FastAPI): newsletter double opt-in, waitlists, contact form and
// community submissions. Runs inside the BillixOfficial Supabase project, which
// supplies SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY automatically, so no database
// password is needed. Tables have RLS on with no policies; only this function
// (service role) can read or write them.
//
// Deployed with JWT verification off: these are anonymous public form endpoints.
// Abuse protection is validation, a honeypot field and per-IP rate limits below.
import { createClient } from 'npm:@supabase/supabase-js@2.49.4'

const env = (k: string) => Deno.env.get(k)?.trim() || undefined
const SERVICE_KEY = env('SUPABASE_SERVICE_ROLE_KEY') ?? ''
const SITE_URL = (env('SITE_URL') ?? 'https://billixapp.com').replace(/\/$/, '')
const ALLOWED_ORIGINS = (env('CORS_ORIGINS') ??
  'https://billixapp.com,https://www.billixapp.com,https://billix-website.vercel.app,http://localhost:3000')
  .split(',').map((o) => o.trim().replace(/\/$/, '')).filter(Boolean)
// Vercel preview deployments of the website project.
const PREVIEW_ORIGIN = /^https:\/\/billix-website-[a-z0-9-]+-billix2\.vercel\.app$/
const CONSENT_VERSION = env('NEWSLETTER_CONSENT_VERSION') ?? '2026-10-v1'
const CONFIRM_TTL_HOURS = 48
const LIMITS = { write: 5, token: 20, upload: 3 } as const // per IP per minute
// Resend is verified for emails.billixapp.com, so mail is sent from that subdomain;
// replies and contact-form alerts go to the main inbox.
const EMAIL_FROM = env('EMAIL_FROM') ?? 'The Billix Brief <info@emails.billixapp.com>'
const REPLY_TO = env('EMAIL_REPLY_TO') ?? 'info@billixapp.com'
const CONTACT_INBOX = env('CONTACT_INBOX') ?? 'info@billixapp.com'

const db = createClient(env('SUPABASE_URL') ?? '', SERVICE_KEY, { auth: { persistSession: false } })

// ---------- crypto helpers ----------
const enc = new TextEncoder()
const hex = (b: ArrayBuffer) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('')
const b64url = (b: ArrayBuffer | Uint8Array) =>
  btoa(String.fromCharCode(...new Uint8Array(b instanceof Uint8Array ? b : new Uint8Array(b))))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
const sha256 = async (s: string) => hex(await crypto.subtle.digest('SHA-256', enc.encode(s)))
async function hmac(key: string, msg: string, out: 'hex' | 'b64url' = 'hex') {
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', k, enc.encode(msg))
  return out === 'hex' ? hex(sig) : b64url(sig)
}
// Secrets: explicit env values win; otherwise derived from the service role key so
// nothing has to be pasted anywhere. Rotating that key invalidates old email links.
const secret = async (name: string) => env(name) ?? (await hmac(SERVICE_KEY, `billix:${name}`))
const newToken = () => b64url(crypto.getRandomValues(new Uint8Array(32)))

// ---------- HTTP helpers ----------
class ApiError extends Error {
  constructor(public status: number, public code: string, message: string, public fields?: Record<string, string>) {
    super(message)
  }
}
function cors(origin: string | null): Record<string, string> {
  const ok = origin && (ALLOWED_ORIGINS.includes(origin) || PREVIEW_ORIGIN.test(origin))
  return ok
    ? { 'Access-Control-Allow-Origin': origin!, 'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '600', Vary: 'Origin' }
    : { Vary: 'Origin' }
}
const json = (status: number, body: unknown, headers: Record<string, string>) =>
  new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })
const errorBody = (e: ApiError) => ({ error: { code: e.code, message: e.message, ...(e.fields ? { fields: e.fields } : {}) } })

// ---------- validation ----------
type Body = Record<string, unknown>
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const STATES = new Set('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC PR'.split(' '))
const CATEGORIES = new Set(['electricity', 'heating-cooling', 'water-sewer', 'internet-phone', 'housing', 'insurance', 'transportation', 'home-services', 'banking-debt', 'healthcare-family', 'subscriptions', 'government-fees'])
const TOPICS = new Set(['weekly', 'monthly-review', 'regional'])

class V {
  fields: Record<string, string> = {}
  constructor(private b: Body, allowed: string[]) {
    for (const k of Object.keys(b)) if (!allowed.includes(k)) this.fields[k] = 'Extra inputs are not permitted'
  }
  private err(k: string, m: string) {
    this.fields[k] ??= m
  }
  str(k: string, { min = 1, max, optional = false }: { min?: number; max: number; optional?: boolean }) {
    const v = this.b[k]
    if (v === undefined || v === null || (optional && v === '')) {
      if (!optional) this.err(k, 'Field required')
      return undefined
    }
    if (typeof v !== 'string') return this.err(k, 'Must be text'), undefined
    const s = v.trim()
    if (s.length < min) return this.err(k, `Must be at least ${min} characters`), undefined
    if (s.length > max) return this.err(k, `Must be at most ${max} characters`), undefined
    return s
  }
  email(k: string, optional = false) {
    const s = this.str(k, { max: 254, optional })
    if (s === undefined) return undefined
    if (!EMAIL_RE.test(s)) return this.err(k, 'Enter a valid email address'), undefined
    return s.toLowerCase()
  }
  oneOf<T extends string>(k: string, set: Set<string> | readonly T[], optional = false) {
    const v = this.b[k]
    if (v === undefined || v === null) {
      if (!optional) this.err(k, 'Field required')
      return undefined
    }
    const ok = Array.isArray(set) ? set.includes(v as T) : (set as Set<string>).has(v as string)
    if (!ok) return this.err(k, 'Invalid value'), undefined
    return v as T
  }
  state(k: string) {
    const s = this.str(k, { min: 2, max: 2, optional: true })
    if (s === undefined) return undefined
    const u = s.toUpperCase()
    if (!STATES.has(u)) return this.err(k, 'Must be a 2-letter US state code'), undefined
    return u
  }
  bool(k: string) {
    const v = this.b[k]
    if (typeof v !== 'boolean') return this.err(k, 'Must be true or false'), false
    return v
  }
  isTrue(k: string) {
    if (this.b[k] !== true) this.err(k, 'Must be true: explicit opt-in')
  }
  topics(k: string) {
    const v = this.b[k]
    if (v === undefined || v === null) return undefined
    if (!Array.isArray(v) || v.length > 3 || !v.every((t) => typeof t === 'string' && TOPICS.has(t))) return this.err(k, 'Invalid topics'), undefined
    return [...new Set(v as string[])]
  }
  honeypot() {
    const v = this.b.website
    if (v !== undefined && v !== null && (typeof v !== 'string' || v.length > 500)) this.err('website', 'Invalid value')
    return typeof v === 'string' && v.trim() !== ''
  }
  done() {
    if (Object.keys(this.fields).length) throw new ApiError(422, 'validation_error', 'Some fields are invalid.', this.fields)
  }
}
const token = (b: Body) => {
  const t = b.token
  if (typeof t !== 'string' || t.trim().length < 16 || t.trim().length > 256) throw new ApiError(422, 'validation_error', 'Some fields are invalid.', { token: 'Invalid token' })
  return t.trim()
}

// ---------- rate limiting (shared across instances via the database) ----------
async function rateLimit(ipHash: string | null, bucket: keyof typeof LIMITS) {
  if (!ipHash) return
  const since = new Date(Date.now() - 60_000).toISOString()
  const { count, error } = await db.from('rate_limit_hits').select('id', { count: 'exact', head: true }).eq('ip_hash', ipHash).eq('bucket', bucket).gte('created_at', since)
  if (error) throw error
  if ((count ?? 0) >= LIMITS[bucket]) throw new ApiError(429, 'rate_limited', 'Too many requests. Please wait a minute and try again.')
  await db.from('rate_limit_hits').insert({ ip_hash: ipHash, bucket })
  if (Math.random() < 0.02) await db.from('rate_limit_hits').delete().lt('created_at', new Date(Date.now() - 86_400_000).toISOString())
}

// ---------- email ----------
interface Mail { to: string; subject: string; text: string; replyTo?: string; kind: string }
async function sendMail(m: Mail) {
  const key = env('RESEND_API_KEY')
  if (!key) {
    // Not configured yet: log the message without the recipient's address.
    console.log(JSON.stringify({ msg: 'email_console', kind: m.kind, subject: m.subject, to: m.to.replace(/^(.).*@/, '$1***@'), body: m.text }))
    return
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: EMAIL_FROM, to: [m.to], subject: m.subject, text: m.text, reply_to: m.replyTo ?? REPLY_TO }),
  })
  if (!res.ok) console.error(JSON.stringify({ msg: 'email_failed', kind: m.kind, status: res.status }))
}
// Send after responding when the runtime supports it.
function background(p: Promise<unknown>) {
  const w = (globalThis as { EdgeRuntime?: { waitUntil: (p: Promise<unknown>) => void } }).EdgeRuntime
  if (w) w.waitUntil(p)
  else p.catch(() => {})
}

// ---------- newsletter ----------
const SUBSCRIBE_MESSAGE = 'Thanks! If this address can receive The Billix Brief, a confirmation email is on its way. Click the link inside to finish subscribing.'
const INVALID_TOKEN = () => new ApiError(400, 'invalid_token', 'This link is invalid or has expired.')
interface Sub { id: string; email: string; status: string; topics: string[]; state: string | null; token_version: number }

async function longLivedTokens(sub: Pick<Sub, 'id' | 'token_version'>) {
  const s = await secret('TOKEN_SECRET')
  const unsub = await hmac(s, `unsubscribe:${sub.id}:${sub.token_version}`, 'b64url')
  const manage = await hmac(s, `manage:${sub.id}:${sub.token_version}`, 'b64url')
  return { unsub, manage, unsubscribe_token_hash: await sha256(unsub), manage_token_hash: await sha256(manage) }
}
const links = (unsub: string, manage: string) =>
  `Manage your preferences: ${SITE_URL}/newsletter/preferences?token=${manage}\nUnsubscribe: ${SITE_URL}/newsletter/unsubscribe?token=${unsub}\n`
const now = () => new Date().toISOString()

async function subscribe(b: Body, ipHash: string | null) {
  const v = new V(b, ['email', 'consent', 'topics', 'state', 'source', 'website'])
  const email = v.email('email')
  v.isTrue('consent')
  const topics = v.topics('topics')
  const state = v.state('state')
  const source = v.str('source', { min: 0, max: 100, optional: true })
  const bot = v.honeypot()
  v.done()
  if (bot) return

  const { data: existing } = await db.from('newsletter_subscribers').select('id,email,status,token_version').eq('email', email!).maybeSingle()
  if (existing && existing.status === 'active') {
    const t = await longLivedTokens(existing)
    await db.from('newsletter_subscribers').update({ unsubscribe_token_hash: t.unsubscribe_token_hash, manage_token_hash: t.manage_token_hash, updated_at: now() }).eq('id', existing.id)
    return background(sendMail({ to: email!, kind: 'newsletter_already_subscribed', subject: "You're already subscribed to The Billix Brief", text: "Someone (hopefully you) tried to subscribe this address to The Billix Brief. You're already on the list, so nothing changed.\n\n" + links(t.unsub, t.manage) }))
  }

  const confirm = newToken()
  const row = {
    email: email!, status: 'pending', topics: topics ?? ['weekly'], state: state ?? null, source: source || null,
    consent_text_version: CONSENT_VERSION, consent_at: now(), consent_ip_hash: ipHash,
    confirm_token_hash: await sha256(confirm),
    confirm_token_expires_at: new Date(Date.now() + CONFIRM_TTL_HOURS * 3_600_000).toISOString(),
    unsubscribed_at: null, updated_at: now(),
  }
  let sub: Pick<Sub, 'id' | 'token_version'>
  if (existing) {
    const { error } = await db.from('newsletter_subscribers').update(row).eq('id', existing.id)
    if (error) throw error
    sub = existing
  } else {
    const id = crypto.randomUUID()
    const { error } = await db.from('newsletter_subscribers').insert({ ...row, id, token_version: 1, created_at: now() })
    if (error) throw error
    sub = { id, token_version: 1 }
  }
  const t = await longLivedTokens(sub)
  await db.from('newsletter_subscribers').update({ unsubscribe_token_hash: t.unsubscribe_token_hash, manage_token_hash: t.manage_token_hash }).eq('id', sub.id)
  background(sendMail({
    to: email!, kind: 'newsletter_confirm', subject: 'Confirm your subscription to The Billix Brief',
    text: `Confirm your subscription: ${SITE_URL}/newsletter/confirm?token=${confirm}\n\nThis link expires in ${CONFIRM_TTL_HOURS} hours. If you didn't sign up, ignore this email and you won't hear from us.\n\nUnsubscribe: ${SITE_URL}/newsletter/unsubscribe?token=${t.unsub}\n`,
  }))
}

async function confirm(b: Body) {
  const tok = token(b)
  const { data: sub } = await db.from('newsletter_subscribers').select('id,email,status,token_version,confirm_token_expires_at').eq('confirm_token_hash', await sha256(tok)).maybeSingle()
  if (!sub || sub.status !== 'pending' || !sub.confirm_token_expires_at || new Date(sub.confirm_token_expires_at) < new Date()) throw INVALID_TOKEN()
  const t = await longLivedTokens(sub)
  const { error } = await db.from('newsletter_subscribers').update({ status: 'active', confirmed_at: now(), confirm_token_hash: null, confirm_token_expires_at: null, unsubscribe_token_hash: t.unsubscribe_token_hash, manage_token_hash: t.manage_token_hash, updated_at: now() }).eq('id', sub.id)
  if (error) throw error
  background(sendMail({ to: sub.email, kind: 'newsletter_welcome', subject: 'Welcome to The Billix Brief', text: "You're in. Expect plain-English bill explainers in your inbox.\n\n" + links(t.unsub, t.manage) }))
  return { status: 'active', message: "You're subscribed to The Billix Brief." }
}

async function unsubscribe(b: Body) {
  const tok = token(b)
  const { data: sub } = await db.from('newsletter_subscribers').select('id,status').eq('unsubscribe_token_hash', await sha256(tok)).maybeSingle()
  if (!sub) throw INVALID_TOKEN()
  if (sub.status !== 'unsubscribed') {
    await db.from('newsletter_subscribers').update({ status: 'unsubscribed', unsubscribed_at: now(), confirm_token_hash: null, confirm_token_expires_at: null, updated_at: now() }).eq('id', sub.id)
  }
  return { status: 'unsubscribed', message: "You've been unsubscribed. You won't receive further emails." }
}

const mask = (e: string) => `${e.split('@')[0].slice(0, 1)}***@${e.split('@')[1]}`
async function byManageToken(tok: string | null) {
  if (!tok || tok.length < 16 || tok.length > 256) throw new ApiError(422, 'validation_error', 'Some fields are invalid.', { token: 'Invalid token' })
  const { data: sub } = await db.from('newsletter_subscribers').select('id,email,status,topics,state').eq('manage_token_hash', await sha256(tok)).maybeSingle()
  if (!sub) throw INVALID_TOKEN()
  return sub as Sub
}
const prefsOut = (s: Sub) => ({ email: mask(s.email), status: s.status, topics: s.topics, state: s.state })

async function updatePrefs(tok: string | null, b: Body) {
  const sub = await byManageToken(tok)
  const v = new V(b, ['topics', 'state'])
  const topics = v.topics('topics')
  if (topics === undefined) v.fields.topics ??= 'Field required'
  const state = v.state('state')
  v.done()
  if (sub.status === 'unsubscribed') throw new ApiError(409, 'unsubscribed', 'This address is unsubscribed. Subscribe again to set preferences.')
  await db.from('newsletter_subscribers').update({ topics, state: state ?? null, updated_at: now() }).eq('id', sub.id)
  return prefsOut({ ...sub, topics: topics!, state: state ?? null })
}

// ---------- forms ----------
async function waitlist(b: Body, ipHash: string | null) {
  const v = new V(b, ['email', 'list', 'platform', 'consent', 'website'])
  const email = v.email('email')
  const list = v.oneOf('list', ['app', 'shop'] as const)
  const platform = v.oneOf('platform', ['ios', 'android', 'both'] as const, true)
  v.isTrue('consent')
  const bot = v.honeypot()
  v.done()
  if (!bot) {
    const { error } = await db.from('waitlist_entries').upsert(
      { id: crypto.randomUUID(), email, list, platform: platform ?? null, consent_at: now(), ip_hash: ipHash, created_at: now(), updated_at: now() },
      { onConflict: 'email,list', ignoreDuplicates: true },
    )
    if (error) throw error
  }
  return { message: "You're on the list. We'll email you when it's ready." }
}

const REF_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
const newReference = () => 'BLX-' + [...crypto.getRandomValues(new Uint8Array(8))].map((n) => REF_ALPHABET[n % REF_ALPHABET.length]).join('')
const CONTACT_THANKS = 'Thanks for reaching out. We read every message and reply within a few business days.'

async function contact(b: Body, ipHash: string | null) {
  const v = new V(b, ['name', 'email', 'topic', 'message', 'website'])
  const name = v.str('name', { max: 120 })
  const email = v.email('email')
  const topic = v.oneOf('topic', ['general', 'press', 'partnerships', 'business', 'support', 'correction'] as const)
  const message = v.str('message', { min: 10, max: 5000 })
  const bot = v.honeypot()
  v.done()
  const reference = newReference()
  if (bot) return { reference, message: CONTACT_THANKS }
  const { error } = await db.from('contact_messages').insert({ id: crypto.randomUUID(), reference, name, email, topic, message, status: 'new', ip_hash: ipHash, created_at: now(), updated_at: now() })
  if (error) throw error
  background(sendMail({ to: CONTACT_INBOX, replyTo: email, kind: 'contact_notification', subject: `[Billix contact · ${topic}] ${reference}`, text: `Reference: ${reference}\nTopic: ${topic}\nFrom: ${name} <${email}>\n\n${message}\n` }))
  return { reference, message: CONTACT_THANKS }
}

async function communityQuestion(b: Body, ipHash: string | null) {
  const v = new V(b, ['name', 'email', 'state', 'category', 'question', 'consent_to_publish', 'website'])
  const name = v.str('name', { max: 120, optional: true })
  const email = v.email('email', true)
  const state = v.state('state')
  const category = v.oneOf('category', CATEGORIES)
  const question = v.str('question', { min: 10, max: 2000 })
  const consent = v.bool('consent_to_publish')
  const bot = v.honeypot()
  v.done()
  const id = crypto.randomUUID()
  if (!bot) {
    const { error } = await db.from('community_questions').insert({ id, name: name ?? null, email: email ?? null, state: state ?? null, category, question, consent_to_publish: consent, moderation_status: 'pending', ip_hash: ipHash, created_at: now(), updated_at: now() })
    if (error) throw error
  }
  return { id, moderation_status: 'pending', message: 'Thanks! Your question is in our review queue.' }
}

async function videoIdea(b: Body, ipHash: string | null) {
  const v = new V(b, ['name', 'email', 'category', 'idea', 'website'])
  const name = v.str('name', { max: 120, optional: true })
  const email = v.email('email', true)
  const category = v.oneOf('category', CATEGORIES)
  const idea = v.str('idea', { min: 10, max: 2000 })
  const bot = v.honeypot()
  v.done()
  const id = crypto.randomUUID()
  if (!bot) {
    const { error } = await db.from('community_video_ideas').insert({ id, name: name ?? null, email: email ?? null, category, idea, moderation_status: 'pending', ip_hash: ipHash, created_at: now(), updated_at: now() })
    if (error) throw error
  }
  return { id, moderation_status: 'pending', message: 'Thanks! Your video idea is in our review queue.' }
}


// ---------- Bill of the Month ----------
// Two separate activities: the free $50 drawing (contact details only) and an optional
// bill for a video breakdown. Bills go to the private `bill-entries` bucket (never public;
// read via the dashboard or short-lived signed URLs). Closed until bill_of_month_settings
// says otherwise. One submission per email per round (16th to 15th, ET).
const BOTM_BUCKET = 'bill-entries'
const BOTM_MAX_BYTES = 10 * 1024 * 1024
const BOTM_RETENTION_DAYS = Number(env('BOTM_RETENTION_DAYS') ?? 90)
const BILL_TYPES = ['electric', 'gas', 'heating-oil', 'propane', 'water-sewer', 'trash', 'internet', 'phone', 'tv'] as const
const BILL_LABELS: Record<string, string> = { electric: 'electric', gas: 'natural gas', 'heating-oil': 'heating oil', propane: 'propane', 'water-sewer': 'water/sewer', trash: 'trash', internet: 'internet', phone: 'phone', tv: 'TV' }
const HEARD_FROM = ['youtube', 'tiktok', 'website', 'friend', 'other'] as const
const YOUTUBE_URL = env('YOUTUBE_URL') ?? 'https://www.youtube.com/channel/UCt9vN1jnKS5UJuqqlhlUixQ'
const BOTM_THANKS = "Thanks! We sent a confirmation to your email. If you entered the drawing and win, we'll email you within 7 days after this round closes on the 15th."

// Periods run from the 16th of one month through 11:59 p.m. ET on the 15th of the next,
// and are named for the month they end in: '2026-11' = through Nov 15, 2026.
const botmPeriod = (d = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(d)
  const get = (t: string) => Number(parts.find((p) => p.type === t)!.value)
  let y = get('year'), m = get('month')
  if (get('day') > 15) [y, m] = m === 12 ? [y + 1, 1] : [y, m + 1]
  const period = `${y}-${String(m).padStart(2, '0')}`
  // The first round is longer (it opens mid-October and closes Nov 15), so anything
  // before it counts toward it. 'YYYY-MM' strings compare correctly as text.
  const first = env('BOTM_FIRST_ROUND') ?? '2026-11'
  return period < first ? first : period
}
// Open/close switch: the single row in bill_of_month_settings (editable in the Supabase
// Table Editor). BOTM_OPEN_FROM / BOTM_CLOSE_AFTER secrets override it if set. Entries
// are closed unless open_from is set and has passed. Cached for a minute per instance.
let botmWindow: { from: number | null; until: number | null; at: number } | null = null
async function botmOpen() {
  if (!botmWindow || Date.now() - botmWindow.at > 60_000) {
    let from = env('BOTM_OPEN_FROM') ?? null
    let until = env('BOTM_CLOSE_AFTER') ?? null
    if (!from) {
      const { data } = await db.from('bill_of_month_settings').select('open_from,close_after').eq('id', 1).maybeSingle()
      from = data?.open_from ?? null
      until = until ?? data?.close_after ?? null
    }
    const ts = (v: string | null) => (v && !Number.isNaN(Date.parse(v)) ? Date.parse(v) : null)
    botmWindow = { from: ts(from), until: ts(until), at: Date.now() }
  }
  const t = Date.now()
  return botmWindow.from !== null && t >= botmWindow.from && !(botmWindow.until !== null && t > botmWindow.until)
}
// Identify the file by its first bytes, not by the name or the browser's claim.
function sniff(b: Uint8Array): { mime: string; ext: string } | null {
  const at = (o: number, sig: number[]) => sig.every((x, i) => b[o + i] === x)
  if (at(0, [0xff, 0xd8, 0xff])) return { mime: 'image/jpeg', ext: 'jpg' }
  if (at(0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return { mime: 'image/png', ext: 'png' }
  if (at(0, [0x52, 0x49, 0x46, 0x46]) && at(8, [0x57, 0x45, 0x42, 0x50])) return { mime: 'image/webp', ext: 'webp' }
  if (at(0, [0x25, 0x50, 0x44, 0x46, 0x2d])) return { mime: 'application/pdf', ext: 'pdf' }
  if (at(4, [0x66, 0x74, 0x79, 0x70])) {
    const brand = String.fromCharCode(...b.slice(8, 12))
    if (['heic', 'heix', 'mif1', 'msf1', 'heim', 'heis'].includes(brand)) return { mime: 'image/heic', ext: 'heic' }
  }
  return null
}

// Campaign tag from links like ?src=yt-short-announce (lowercase letters, digits, dashes).
const cleanSrc = (v: unknown) => (typeof v === 'string' && /^[a-z0-9-]{1,40}$/.test(v) ? v : null)

// Remove entries (rows and files) past the retention window, except winners and bills used in a video.
async function botmPurge() {
  const cutoff = new Date(Date.now() - BOTM_RETENTION_DAYS * 86_400_000).toISOString()
  const { data } = await db.from('bill_of_month_entries').select('id,file_path').neq('status', 'winner').eq('featured', false).lt('created_at', cutoff).limit(200)
  if (!data?.length) return
  const paths = data.map((r) => r.file_path).filter(Boolean) as string[]
  if (paths.length) await db.storage.from(BOTM_BUCKET).remove(paths)
  await db.from('bill_of_month_entries').delete().in('id', data.map((r) => r.id))
}

async function billOfTheMonth(req: Request, ipHash: string | null) {
  if (!(await botmOpen())) throw new ApiError(403, 'closed', "Bill of the Month isn't open for entries right now. Check back soon.")
  if (!(req.headers.get('content-type') ?? '').includes('multipart/form-data')) throw new ApiError(415, 'unsupported_media_type', 'Send the form as multipart/form-data.')
  const len = Number(req.headers.get('content-length') ?? 0)
  if (len > BOTM_MAX_BYTES + 64_000) throw new ApiError(413, 'payload_too_large', 'That file is too large. The limit is 10 MB.')
  let form: FormData
  try {
    form = await req.formData()
  } catch {
    throw new ApiError(422, 'validation_error', 'We could not read that form.')
  }
  const file = form.get('bill')
  const b: Body = {}
  for (const [k, val] of form.entries()) if (k !== 'bill') b[k] = typeof val === 'string' ? val : '[file]'
  // Checkboxes arrive as text in multipart forms.
  for (const k of ['eligible', 'enter_drawing', 'add_bill', 'consent_credit', 'consent_feature', 'redaction_confirmed']) if (k in b) b[k] = b[k] === 'true'
  const v = new V(b, ['first_name', 'state', 'email', 'bill_type', 'note', 'heard_from', 'src', 'enter_drawing', 'add_bill', 'redaction_confirmed', 'consent_feature', 'eligible', 'consent_credit', 'website'])
  const firstName = v.str('first_name', { max: 60 })
  const state = v.str('state', { min: 2, max: 2 })?.toUpperCase()
  if (state && (!STATES.has(state) || state === 'PR')) v.fields.state ??= 'Entries are open to the 50 states and D.C.'
  const email = v.email('email')
  const heardFrom = b.heard_from ? v.oneOf('heard_from', HEARD_FROM) : undefined
  v.isTrue('eligible')
  const src = cleanSrc(b.src)
  // Two separate activities in one submission:
  //  - enter_drawing: the free $50 drawing. Only contact details and eligibility are needed.
  //  - add_bill: an optional bill for a possible video breakdown. It never affects the drawing.
  const enterDrawing = b.enter_drawing === true
  const addBill = b.add_bill === true
  const hasFile = file instanceof File && file.size > 0
  if (!enterDrawing && !addBill) v.fields.enter_drawing ??= 'Choose the drawing, a bill breakdown, or both.'
  const billType = addBill ? v.oneOf('bill_type', BILL_TYPES) : undefined
  const note = addBill ? v.str('note', { min: 0, max: 1000, optional: true }) : undefined
  const consentFeature = addBill && b.consent_feature === true
  const consentCredit = consentFeature && b.consent_credit === true
  const bot = v.honeypot()
  if (addBill) {
    if (!hasFile) v.fields.bill ??= 'Attach a photo or PDF of your bill.'
    else if ((file as File).size > BOTM_MAX_BYTES) v.fields.bill ??= 'That file is too large. The limit is 10 MB.'
    if (b.redaction_confirmed !== true) v.fields.redaction_confirmed ??= 'Please confirm you covered your personal details.'
  } else if (hasFile) v.fields.bill ??= 'Remove the file, or choose to send a bill for a breakdown.'
  v.done()
  if (bot) return { message: BOTM_THANKS }

  let bytes: Uint8Array<ArrayBuffer> | null = null
  let kind: { mime: string; ext: string } | null = null
  if (addBill) {
    bytes = new Uint8Array(await (file as File).arrayBuffer())
    kind = sniff(bytes)
    if (!kind) throw new ApiError(422, 'validation_error', 'Some fields are invalid.', { bill: 'Upload a JPG, PNG, WebP, HEIC or PDF file.' })
  }

  const period = botmPeriod()
  const { data: dup } = await db.from('bill_of_month_entries').select('id').eq('email', email!).eq('period', period).maybeSingle()
  if (dup) throw new ApiError(409, 'duplicate_entry', "You've already sent an entry this round. You can enter again when the next round opens on the 16th.")

  const id = crypto.randomUUID()
  const path = kind ? `${period}/${id}.${kind.ext}` : null
  if (path) {
    const up = await db.storage.from(BOTM_BUCKET).upload(path, bytes!, { contentType: kind!.mime, upsert: false })
    if (up.error) throw up.error
  }
  const { error } = await db.from('bill_of_month_entries').insert({
    id, period, enter_drawing: enterDrawing, first_name: firstName, state, email, bill_type: billType ?? null, note: note || null,
    heard_from: heardFrom ?? null, src, consent_feature: consentFeature, consent_credit: consentCredit,
    eligibility_confirmed_at: now(), redaction_confirmed_at: addBill ? now() : null,
    file_path: path, file_mime: kind?.mime ?? null, file_size: bytes?.length ?? null,
    file_sha256: bytes ? hex(await crypto.subtle.digest('SHA-256', bytes)) : null,
    status: 'received', ip_hash: ipHash, created_at: now(), updated_at: now(),
  })
  if (error) {
    if (path) await db.storage.from(BOTM_BUCKET).remove([path])
    if ((error as { code?: string }).code === '23505') throw new ApiError(409, 'duplicate_entry', "You've already sent an entry this round. You can enter again when the next round opens on the 16th.")
    throw error
  }
  background(sendMail({
    to: email!, kind: 'botm_entry',
    subject: enterDrawing ? "You're entered: Billix Bill of the Month" : 'We got your bill: Billix Bill of the Month',
    text: `Hi ${firstName},\n\n` +
      (enterDrawing ? "You're entered in this round's $50 Bill of the Month drawing. It closes at 11:59 p.m. ET on the 15th. One random entry wins $50 paid toward their bill. If you win, we'll email you from this address within 7 days after the round closes.\n\n" : '') +
      (addBill ? `${enterDrawing ? 'We also got' : 'We got'} your ${BILL_LABELS[billType!]} bill for a possible video breakdown.${consentFeature ? '' : " You didn't give permission to show it, so we'll only use it privately to decide what to explain."} Sending a bill doesn't change anyone's odds in the drawing.\n\n` : '') +
      "We will never ask for your password, card number or a payment.\n\nSubscribe on YouTube to follow the bill breakdowns and winner announcements. (Subscribing isn't required to win and doesn't change your odds.)\n" +
      `${YOUTUBE_URL}\n\nOfficial rules: ${SITE_URL}/legal/bill-of-the-month-rules\n\nThe Billix team\n`,
  }))
  if (Math.random() < 0.05) background(botmPurge())
  return { message: BOTM_THANKS }
}

// ---------- router ----------
Deno.serve(async (req) => {
  const headers = cors(req.headers.get('origin'))
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers })
  const url = new URL(req.url)
  // Path after /functions/v1/api (or /api when served directly).
  const path = url.pathname.replace(/^.*?\/api(?=\/|$)/, '') || '/'
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null
  try {
    const ipHash = ip ? await hmac(await secret('IP_HASH_SALT'), ip) : null
    const body = async (): Promise<Body> => {
      if (!(req.headers.get('content-type') ?? '').includes('application/json')) throw new ApiError(415, 'unsupported_media_type', 'Send JSON.')
      const text = await req.text()
      if (text.length > 20_000) throw new ApiError(413, 'payload_too_large', 'Request too large.')
      try {
        const b = JSON.parse(text)
        if (!b || typeof b !== 'object' || Array.isArray(b)) throw new Error()
        return b as Body
      } catch {
        throw new ApiError(422, 'validation_error', 'Request body must be a JSON object.')
      }
    }
    const route = `${req.method} ${path}`
    switch (route) {
      case 'GET /healthz':
        return json(200, { status: 'ok' }, headers)
      case 'GET /readyz': {
        const { error } = await db.from('alembic_version').select('version_num').limit(1)
        return error ? json(503, { status: 'unavailable' }, headers) : json(200, { status: 'ok' }, headers)
      }
      case 'POST /v1/newsletter/subscribe': {
        const b = await body()
        await rateLimit(ipHash, 'write')
        await subscribe(b, ipHash) // the email itself is sent in the background
        return json(202, { message: SUBSCRIBE_MESSAGE }, headers)
      }
      case 'POST /v1/newsletter/confirm':
        await rateLimit(ipHash, 'token')
        return json(200, await confirm(await body()), headers)
      case 'POST /v1/newsletter/unsubscribe':
        await rateLimit(ipHash, 'token')
        return json(200, await unsubscribe(await body()), headers)
      case 'GET /v1/newsletter/preferences':
        await rateLimit(ipHash, 'token')
        return json(200, prefsOut(await byManageToken(url.searchParams.get('token'))), headers)
      case 'PUT /v1/newsletter/preferences':
        await rateLimit(ipHash, 'token')
        return json(200, await updatePrefs(url.searchParams.get('token'), await body()), headers)
      case 'POST /v1/waitlist': {
        const b = await body()
        await rateLimit(ipHash, 'write')
        return json(202, await waitlist(b, ipHash), headers)
      }
      case 'POST /v1/contact': {
        const b = await body()
        await rateLimit(ipHash, 'write')
        return json(201, await contact(b, ipHash), headers)
      }
      case 'POST /v1/community/questions': {
        const b = await body()
        await rateLimit(ipHash, 'write')
        return json(201, await communityQuestion(b, ipHash), headers)
      }
      case 'POST /v1/community/video-ideas': {
        const b = await body()
        await rateLimit(ipHash, 'write')
        return json(201, await videoIdea(b, ipHash), headers)
      }
      case 'GET /v1/bill-of-the-month/status': {
        // Cookie-free visit count for measuring conversion (visits -> entries) by source.
        const open = await botmOpen()
        if (url.searchParams.get('view') === '1' && open) {
          background(Promise.resolve(db.from('bill_of_month_page_views').insert({ period: botmPeriod(), src: cleanSrc(url.searchParams.get('src')), ip_hash: ipHash })))
        }
        return json(200, { open, period: botmPeriod() }, headers)
      }
      case 'POST /v1/bill-of-the-month/entries':
        await rateLimit(ipHash, 'upload')
        return json(201, await billOfTheMonth(req, ipHash), headers)
      default:
        throw new ApiError(404, 'not_found', 'Not found.')
    }
  } catch (e) {
    if (e instanceof ApiError) {
      return json(e.status, errorBody(e), e.status === 429 ? { ...headers, 'Retry-After': '60' } : headers)
    }
    console.error(JSON.stringify({ msg: 'unhandled_error', error: String((e as Error)?.message ?? e).slice(0, 300) }))
    return json(500, { error: { code: 'internal_error', message: 'Something went wrong.' } }, headers)
  }
})
