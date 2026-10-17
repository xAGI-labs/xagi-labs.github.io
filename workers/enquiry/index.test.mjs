import test from 'node:test'
import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { readFileSync } from 'node:fs'
import { handle, validate } from './index.mjs'

function fixture() {
  const sqlite = new DatabaseSync(':memory:')
  sqlite.exec(readFileSync(new URL('./schema.sql', import.meta.url), 'utf8'))
  let sends = 0
  let challenge = { success: true, hostname: 'xagi.in', action: 'dataset_enquiry' }
  let failMail = false
  let failAck = false
  const DB = { prepare(sql) { return { bind(...args) { return {
    async first() { return sqlite.prepare(sql).get(...args) },
    async run() { if (failAck && sql.includes("status = 'accepted'")) throw Error('db unavailable'); return { meta: { changes: sqlite.prepare(sql).run(...args).changes } } },
  } } } } }
  const env = { ENABLED: 'true', HASH_SECRET: 'test-only-hash-secret', TURNSTILE_SECRET: 'test-only-turnstile-secret', FROM_EMAIL: 'enquiries@xagi.in', DB,
    EMAIL: { async send(message) { sends++; assert.equal(message.to, 'saurav@xagi.in'); assert.equal(message.replyTo, 'test@example.com'); if (failMail) throw Error('timeout'); return { messageId: 'synthetic-provider-id' } } } }
  const payload = { receipt: crypto.randomUUID(), email: 'test@example.com', details: 'Synthetic test: English speech data for evaluation.', intent: 'buyer', placement: 'home', modality: 'Speech & audio', token: 'test-token', website: '' }
  const request = (data = payload, origin = 'https://xagi.in') => new Request('https://xagi.in/api/dataset-enquiry', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', 'CF-Connecting-IP': '192.0.2.10' }, body: JSON.stringify(data) })
  const send = (data = payload, origin) => handle(request(data, origin), env, { fetch: async () => Response.json(challenge) })
  return { sqlite, env, payload, send, get sends() { return sends }, set challenge(v) { challenge = v }, set failMail(v) { failMail = v }, set failAck(v) { failAck = v } }
}
test('provider acceptance creates one confirmed ledger row; replay never resends', async () => {
  const f = fixture()
  const results = await Promise.all([f.send(), f.send()])
  assert.equal(f.sends, 1)
  assert.equal((await f.send()).status, 200)
  assert.equal((await results[0].json()).confirmed, true)
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM enquiries WHERE status='accepted' AND is_test=0").get().n, 1)
  const row = f.sqlite.prepare('SELECT * FROM enquiries').get()
  assert.ok(!JSON.stringify(row).includes('test@example.com'))
  assert.ok(!JSON.stringify(row).includes('English speech'))
})
test('a receipt cannot be reused for altered content', async () => {
  const f = fixture(); await f.send()
  assert.equal((await f.send({ ...f.payload, details: 'A different synthetic enquiry about video data.' })).status, 409)
  assert.equal(f.sends, 1)
})
test('mail uncertainty never confirms or automatically resends', async () => {
  const f = fixture(); f.failMail = true
  assert.equal((await f.send()).status, 202)
  f.failMail = false
  assert.equal((await f.send()).status, 202)
  assert.equal(f.sends, 1)
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM enquiries WHERE status='accepted'").get().n, 0)
})
test('a lost acknowledgement leaves a pending receipt and retry does not duplicate delivery', async () => {
  const f = fixture(); f.failAck = true
  await assert.rejects(f.send())
  f.failAck = false
  assert.equal((await f.send()).status, 202)
  assert.equal(f.sends, 1)
})
test('challenge failure, wrong hostname or action and cross-origin calls do not send', async () => {
  const f = fixture()
  for (const challenge of [{ success: false }, { success: true, hostname: 'evil.example', action: 'dataset_enquiry' }, { success: true, hostname: 'xagi.in', action: 'other' }]) {
    f.challenge = challenge; assert.equal((await f.send()).status, 400)
  }
  assert.equal((await f.send(f.payload, 'https://evil.example')).status, 403)
  assert.equal(f.sends, 0)
})
test('spam, malformed email, overlong fields and short briefs are rejected', () => {
  const f = fixture()
  for (const changed of [{ website: 'spam' }, { email: 'a@b.com\r\nBcc:evil@example.com' }, { details: 'short' }, { coverage: 'a'.repeat(251) }, { placement: '/unknown/' }, { token: 'a'.repeat(2049) }]) assert.equal(validate({ ...f.payload, ...changed }), null)
})
test('rate limit prevents repeated challenge attempts', async () => {
  const f = fixture(); f.challenge = { success: false }
  for (let i = 0; i < 10; i++) assert.equal((await f.send({ ...f.payload, receipt: crypto.randomUUID() })).status, 400)
  assert.equal((await f.send({ ...f.payload, receipt: crypto.randomUUID() })).status, 429)
  assert.equal(f.sends, 0)
})
test('disabled setup fails closed and oversized body cannot send', async () => {
  const f = fixture(); f.env.ENABLED = 'false'
  assert.equal((await f.send()).status, 503)
  f.env.ENABLED = 'true'
  assert.equal((await f.send({ ...f.payload, details: 'a'.repeat(20000) })).status, 413)
  assert.equal(f.sends, 0)
})

test('free daily quota is atomic and prevents a new email', async () => {
  const f = fixture(); f.env.FREE_LIMITS = true
  const insert = f.sqlite.prepare("INSERT INTO enquiries(receipt,fingerprint,intent,placement,modality,source,status) VALUES (?, 'synthetic', 'buyer', 'home', 'Speech & audio', 'Not specified', 'accepted')")
  for (let i=0;i<50;i++) insert.run(crypto.randomUUID())
  assert.equal((await f.send()).status, 429)
  assert.equal(f.sends, 0)
  assert.equal(f.sqlite.prepare('SELECT count(*) AS n FROM enquiries').get().n, 50)
})
test('free monthly quota rejects without counting a confirmed enquiry', async () => {
  const f = fixture(); f.env.FREE_LIMITS = true
  // Review entries reserve sending budget without inflating confirmed counts.
  const insert = f.sqlite.prepare("INSERT INTO enquiries(receipt,fingerprint,intent,placement,modality,source,status,created_at) VALUES (?, 'synthetic', 'buyer', 'home', 'Speech & audio', 'Not specified', 'review', strftime('%Y-%m-01T00:00:00Z','now'))")
  for (let i=0;i<1000;i++) insert.run(crypto.randomUUID())
  assert.equal((await f.send()).status, 429)
  assert.equal(f.sends, 0)
  assert.equal(f.sqlite.prepare("SELECT count(*) AS n FROM enquiries WHERE status='accepted'").get().n, 0)
})
