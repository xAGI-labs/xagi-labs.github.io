# Free enquiry backend validation — 2026-10-17

Prepared from main `86dd7cd`. No frontend, SEO route, canonical, sitemap or
existing public asset is changed. Sending remains disabled pending Resend
connection, sender verification and a real delivery/receipt test.

Validated on the existing AWS host, using its installed dependencies:

- `npm run lint`: passed with existing unrelated warnings.
- `npm run build`: passed; React email-rewrite protection remains on all
  1,426 exported HTML files. The incidental Mercor snapshot refresh was restored.
- `python3 scripts/verify-seo-export.py`: 501 unique sitemap URLs, no canonical
  mismatches or structured-data errors.
- `verify-enquiry-regression.py` against the pre-enquiry main export: all 1,426
  HTML files preserved, no visible text changes, no sitemap URLs added/removed.
- `npm run test:enquiry`: 13 tests pass, including SQLite adapter, fixed-recipient
  Resend request, provider idempotency key, rejected/malformed provider results,
  duplicate receipts, uncertain sends, validation, rate limits and free quotas.
- `wrangler deploy --dry-run`: bundles the Durable Object and Resend adapter
  without a paid email binding or a D1 database. No deployment is implied.
- `runtime-test.py` against real local workerd/SQLite: schema and private report
  work; missing/wrong authorization returns 401, invalid test receipt returns
  400, nonexistent test receipt changes no row, and disabled submission returns
  503. No email was sent.

The installed runtime supports compatibility dates through 2026-08-27, so this
new backend is pinned to that tested date. It requires no October-only features.
No local dependencies or heavy tools were installed on the Mac.

Remaining activation gates are in `workers/enquiry/README.md`. Resend Free and
Cloudflare Free limits are account-wide; the service also reserves no more than
50 new sends/day and 1,000/month. Provider acceptance, actual inbox arrival,
confirmed ledger counts and qualified sales leads remain distinct states.
Zoho receiving, website DNS proxy/TLS, and certificate maintenance are unchanged.

Cloudflare accepted the disabled Worker upload and SQLite-backed Durable Object
binding on the existing Free account. The initial cleanup cron was rejected
because all five free cron slots were occupied. Cleanup now uses the object's
private daily alarm; no existing schedule or account plan is changed. The local
runtime test also verifies that this alarm is scheduled.
