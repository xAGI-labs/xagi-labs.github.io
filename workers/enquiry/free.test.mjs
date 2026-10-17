import test from 'node:test'
import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { sqliteAdapter } from './sqlite-adapter.mjs'
import { resendEmail } from './resend.mjs'

test('Durable Object SQLite adapter preserves first/run/changes semantics', async () => {
  const sqlite = new DatabaseSync(':memory:')
  sqlite.exec('CREATE TABLE records (id TEXT PRIMARY KEY, value TEXT)')
  const db = sqliteAdapter({ exec(query, ...values) {
    const statement = sqlite.prepare(query)
    const rows = statement.columns().length ? statement.all(...values) : (statement.run(...values), [])
    return { toArray: () => rows, one: () => { assert.equal(rows.length, 1); return rows[0] } }
  } })
  assert.equal((await db.prepare('INSERT OR IGNORE INTO records VALUES (?,?)').bind('one', 'original').run()).meta.changes, 1)
  assert.equal((await db.prepare('INSERT OR IGNORE INTO records VALUES (?,?)').bind('one', 'duplicate').run()).meta.changes, 0)
  assert.equal((await db.prepare('SELECT value FROM records WHERE id=?').bind('one').first()).value, 'original')
  assert.equal(await db.prepare('SELECT value FROM records WHERE id=?').bind('missing').first(), null)
})
test('Resend adapter fixes recipient/sender and uses the durable receipt as provider idempotency key', async () => {
  const mail = resendEmail({ RESEND_API_KEY: 'synthetic-key', FROM_EMAIL: 'enquiries@notify.xagi.in' }, async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails')
    assert.equal(options.headers['Idempotency-Key'], 'xagi-enquiry/synthetic-receipt')
    const body = JSON.parse(options.body)
    assert.deepEqual(body.to, ['saurav@xagi.in'])
    assert.equal(body.from, 'enquiries@notify.xagi.in')
    assert.equal(body.reply_to, 'visitor@example.com')
    return Response.json({ id: 'synthetic-provider-id' })
  })
  assert.deepEqual(await mail.send({ to: 'untrusted@example.com', replyTo: 'visitor@example.com', subject: 'Test', text: 'Synthetic test' }, 'synthetic-receipt'), { messageId: 'synthetic-provider-id' })
})
test('provider rejection and malformed success never confirm delivery', async () => {
  for (const result of [Response.json({ error: 'quota' }, { status: 429 }), Response.json({}), Response.json({ id: '' })]) {
    await assert.rejects(resendEmail({ RESEND_API_KEY: 'synthetic-key', FROM_EMAIL: 'enquiries@notify.xagi.in' }, async () => result).send({}, 'synthetic-receipt'))
  }
})
