import { site } from '@/config/site'

export type ApiResult<T = unknown> =
  | { ok: true; data: T }
  | { ok: false; status: number; message: string; fields: Record<string, string> }

/** True when the Billix API is configured for this environment. */
export const apiAvailable = () => !!site.apiUrl

function normalizeFields(raw: unknown): Record<string, string> {
  if (!raw) return {}
  if (Array.isArray(raw)) {
    const out: Record<string, string> = {}
    for (const f of raw) {
      const item = f as { field?: string; loc?: (string | number)[]; message?: string; msg?: string }
      const key = item.field ?? String(item.loc?.at(-1) ?? '')
      if (key) out[key] = item.message ?? item.msg ?? 'Invalid value'
    }
    return out
  }
  if (typeof raw === 'object') return Object.fromEntries(Object.entries(raw as object).map(([k, v]) => [k, String(Array.isArray(v) ? v[0] : v)]))
  return {}
}

export async function apiPost<T = unknown>(path: string, body: unknown, init?: { method?: 'POST' | 'PUT' }): Promise<ApiResult<T>> {
  if (!site.apiUrl) return { ok: false, status: 0, message: 'This form isn’t connected yet.', fields: {} }
  try {
    const res = await fetch(new URL(path, site.apiUrl), {
      method: init?.method ?? 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const json = await res.json().catch(() => ({}))
    if (res.ok) return { ok: true, data: json as T }
    const err = (json as { error?: { message?: string; fields?: unknown } }).error
    const message =
      res.status === 429
        ? 'Too many attempts. Please wait a minute and try again.'
        : err?.message ?? 'Something went wrong. Please try again.'
    return { ok: false, status: res.status, message, fields: normalizeFields(err?.fields) }
  } catch {
    return { ok: false, status: 0, message: 'We couldn’t reach Billix. Check your connection and try again.', fields: {} }
  }
}

export async function apiGet<T = unknown>(path: string): Promise<ApiResult<T>> {
  if (!site.apiUrl) return { ok: false, status: 0, message: 'Not connected.', fields: {} }
  try {
    const res = await fetch(new URL(path, site.apiUrl))
    const json = await res.json().catch(() => ({}))
    if (res.ok) return { ok: true, data: json as T }
    const err = (json as { error?: { message?: string } }).error
    return { ok: false, status: res.status, message: err?.message ?? 'Something went wrong.', fields: {} }
  } catch {
    return { ok: false, status: 0, message: 'We couldn’t reach Billix.', fields: {} }
  }
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
