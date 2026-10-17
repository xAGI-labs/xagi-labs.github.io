const ORIGIN = 'https://xagi.in'
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const MODALITIES = ['Speech & audio', 'Video & multimodal', 'Expert & domain data', 'Other / help me scope', 'Not specified']
const SOURCES = ['Not specified', 'Search', 'LinkedIn', 'Research or resource', 'Community or event', 'Referral', 'Other']
const PLACEMENTS = ['home', '/dataset-brief/', '/data-partnerships/', '/experts/']
function response(status, body) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow', 'X-Content-Type-Options': 'nosniff' } })
}
export async function digest(value) {
  return [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)))].map(b => b.toString(16).padStart(2, '0')).join('')
}
export function validate(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null
  const { receipt, email, details, coverage = '', intent, placement, modality = 'Not specified', source = 'Not specified', website = '', token } = input
  if (!UUID.test(receipt) || typeof email !== 'string' || email.length > 254 || /[\x00-\x1f\x7f]/.test(email) || !/^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/.test(email)) return null
  if (typeof details !== 'string' || details.trim().length < 20 || details.length > 2000 || typeof coverage !== 'string' || coverage.length > 250) return null
  if (!['buyer', 'partner', 'expert'].includes(intent) || !PLACEMENTS.includes(placement) || !MODALITIES.includes(modality) || !SOURCES.includes(source) || website !== '') return null
  if (typeof token !== 'string' || token.length > 2048) return null
  return { receipt, email: email.trim(), details: details.trim(), coverage: coverage.trim(), intent, placement, modality, source, token }
}
async function existing(db, data, fingerprint) {
  const row = await db.prepare('SELECT fingerprint, status FROM enquiries WHERE receipt = ?').bind(data.receipt).first()
  if (!row) return null
  if (row.fingerprint !== fingerprint) return response(409, { error: 'This receipt belongs to a different enquiry. Reload the form before sending a new enquiry.' })
  if (row.status === 'accepted') return response(200, { confirmed: true, receipt: data.receipt })
  return response(202, { confirmed: false, receipt: data.receipt, error: 'Your enquiry is being checked. Please email saurav@xagi.in with this receipt before trying again.' })
}
export async function handle(request, env, deps = {}) {
  const url = new URL(request.url)
  if (url.pathname !== '/api/dataset-enquiry' && url.pathname !== '/api/dataset-enquiry/') return response(404, { error: 'Not found' })
  if (request.method !== 'POST') return response(405, { error: 'Use POST' })
  if (request.headers.get('Origin') !== ORIGIN) return response(403, { error: 'Please submit from xagi.in.' })
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return response(415, { error: 'Use JSON' })
  if (env.ENABLED !== 'true' || !env.DB || !env.EMAIL || !env.TURNSTILE_SECRET || !env.HASH_SECRET || !env.FROM_EMAIL) return response(503, { error: 'Online enquiries are temporarily unavailable. Please email saurav@xagi.in.' })
  // Stream with a hard limit; Content-Length is optional and cannot be trusted.
  let raw = ''
  const reader = request.body?.getReader()
  if (!reader) return response(400, { error: 'Please complete the form.' })
  const decoder = new TextDecoder()
  let size = 0
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > 16384) { await reader.cancel(); return response(413, { error: 'The enquiry is too long.' }) }
    raw += decoder.decode(value, { stream: true })
  }
  raw += decoder.decode()
  let data
  try { data = validate(JSON.parse(raw)) } catch { /* malformed JSON */ }
  if (!data) return response(400, { error: 'Enter a valid email and at least 20 characters describing your requirements.' })
  const { token, receipt, ...content } = data
  const fingerprint = await digest(env.HASH_SECRET + JSON.stringify(content))
  const prior = await existing(env.DB, data, fingerprint)
  if (prior) return prior
  const now = Math.floor(Date.now() / 1000)
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
  const bucket = `${Math.floor(now / 3600)}:${await digest(env.HASH_SECRET + ip)}`
  const limit = await env.DB.prepare('INSERT INTO rate_limits (key, count, expires) VALUES (?, 1, ?) ON CONFLICT(key) DO UPDATE SET count = count + 1 RETURNING count').bind(bucket, now + 7200).first()
  if (limit.count > 10) return response(429, { error: 'Too many attempts. Please try later or email saurav@xagi.in.' })
  const verification = await (deps.fetch || fetch)('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip, idempotency_key: receipt }), signal: AbortSignal.timeout(10000),
  })
  if (!verification.ok) return response(503, { error: 'Verification is unavailable. Please try again.' })
  const challenge = await verification.json()
  if (challenge.success !== true || challenge.hostname !== 'xagi.in' || challenge.action !== 'dataset_enquiry') return response(400, { error: 'Please complete the security check again.' })
  // Unique insert is the send lock. An uncertain send is never automatically replayed.
  const inserted = await env.DB.prepare('INSERT OR IGNORE INTO enquiries (receipt, fingerprint, intent, placement, modality, source, status) VALUES (?, ?, ?, ?, ?, ?, \'pending\')').bind(receipt, fingerprint, data.intent, data.placement, data.modality, data.source).run()
  if (!inserted.meta.changes) return await existing(env.DB, data, fingerprint)
  let sent
  try {
    sent = await env.EMAIL.send({ to: 'saurav@xagi.in', from: env.FROM_EMAIL, replyTo: data.email, subject: `xAGI ${data.intent} enquiry [${receipt}]`, text: `Receipt: ${receipt}\nIntent: ${data.intent}\nReply to: ${data.email}\nPage: ${data.placement}\nModality: ${data.modality}\nFound via: ${data.source}\n\nRequirements:\n${data.details}\n\nLanguages, geography and timing:\n${data.coverage}` })
  } catch {
    await env.DB.prepare("UPDATE enquiries SET status = 'review' WHERE receipt = ?").bind(receipt).run()
    return response(202, { confirmed: false, receipt, error: 'We could not confirm email acceptance. Please email saurav@xagi.in with this receipt.' })
  }
  // Provider acceptance is the conversion boundary, not the click, CAPTCHA or insert.
  await env.DB.prepare("UPDATE enquiries SET status = 'accepted', provider_id = ?, accepted_at = strftime('%Y-%m-%dT%H:%M:%fZ','now') WHERE receipt = ?").bind(sent?.messageId || null, receipt).run()
  return response(200, { confirmed: true, receipt })
}
export default {
  async fetch(request, env) {
    try { return await handle(request, env) } catch { return response(503, { error: 'Submission could not be confirmed. Keep your receipt and try again, or email saurav@xagi.in.' }) }
  },
  async scheduled(_event, env) {
    if (!env.DB) return
    await env.DB.prepare('DELETE FROM rate_limits WHERE expires < ?').bind(Math.floor(Date.now() / 1000)).run()
  },
}
