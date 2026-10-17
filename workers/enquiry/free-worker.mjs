import { DurableObject } from 'cloudflare:workers'
import { handle, digest, response } from './index.mjs'
import schema from './schema.sql'
import { sqliteAdapter } from './sqlite-adapter.mjs'
import { resendEmail } from './resend.mjs'

export class EnquiryLedger extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env)
    // Synchronous SQLite initialization completes before request handling.
    ctx.storage.sql.exec(schema)
    this.db = sqliteAdapter(ctx.storage.sql)
  }
  async fetch(request) {
    try { return await handle(request, { ...this.env, DB: this.db, EMAIL: resendEmail(this.env), FREE_LIMITS: true }) }
    catch { return response(503, { error: 'Submission could not be confirmed. Keep your reference and try again, or email saurav@xagi.in.' }) }
  }
  async report() {
    const sql = this.ctx.storage.sql
    return {
      definition: 'Validated enquiries accepted by the email provider; not proof of inbox placement or sales qualification.',
      totalConfirmed: sql.exec("SELECT count(*) AS count FROM enquiries WHERE status='accepted' AND is_test=0").one().count,
      groupLimit: 1000,
      confirmed: sql.exec("SELECT date(accepted_at) AS day, intent, placement, modality, source, count(*) AS count FROM enquiries WHERE status='accepted' AND is_test=0 GROUP BY day,intent,placement,modality,source ORDER BY day DESC LIMIT 1000").toArray(),
      review: sql.exec("SELECT receipt, status, created_at FROM enquiries WHERE status!='accepted' AND is_test=0 ORDER BY created_at DESC LIMIT 50").toArray(),
    }
  }
  async markTest(receipt) {
    this.ctx.storage.sql.exec('UPDATE enquiries SET is_test=1 WHERE receipt=?', receipt)
    return { changed: this.ctx.storage.sql.exec('SELECT changes() AS changes').one().changes }
  }
  async cleanup() {
    this.ctx.storage.sql.exec('DELETE FROM rate_limits WHERE expires < ?', Math.floor(Date.now() / 1000))
  }
}

async function admin(request, env) {
  if (!env.REPORT_TOKEN) return false
  const provided = request.headers.get('Authorization') || ''
  return await digest(provided) === await digest(`Bearer ${env.REPORT_TOKEN}`)
}
export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname
    if (!env.LEADS) return response(503, { error: 'Enquiries are unavailable. Please email saurav@xagi.in.' })
    if (path === '/api/dataset-enquiry/report' || path === '/api/dataset-enquiry/mark-test') {
      if (!await admin(request, env)) return response(401, { error: 'Unauthorized' })
      const ledger = env.LEADS.getByName('xagi-enquiries-v1')
      if (path.endsWith('/report') && request.method === 'GET') return response(200, await ledger.report())
      if (path.endsWith('/mark-test') && request.method === 'POST') {
        const receipt = new URL(request.url).searchParams.get('receipt') || ''
        if (!/^[0-9a-f-]{36}$/i.test(receipt)) return response(400, { error: 'Invalid receipt' })
        return response(200, await ledger.markTest(receipt))
      }
      return response(405, { error: 'Method not allowed' })
    }
    if (env.ENABLED !== 'true' || !env.RESEND_API_KEY) return response(503, { error: 'Online enquiries are temporarily unavailable. Please email saurav@xagi.in.' })
    if (!['/api/dataset-enquiry', '/api/dataset-enquiry/'].includes(path)) return response(404, { error: 'Not found' })
    // Reject unsolicited requests at the edge, before waking the ledger.
    if (request.method !== 'POST') return response(405, { error: 'Use POST' })
    if (request.headers.get('Origin') !== 'https://xagi.in') return response(403, { error: 'Please submit from xagi.in.' })
    return env.LEADS.getByName('xagi-enquiries-v1').fetch(request)
  },
  async scheduled(_event, env) { if (env.LEADS) await env.LEADS.getByName('xagi-enquiries-v1').cleanup() },
}
