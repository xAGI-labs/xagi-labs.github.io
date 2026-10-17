# Free enquiry delivery and confirmed-lead ledger

The GitHub Pages frontend stays static. A narrowly scoped Cloudflare Workers
Free endpoint sends notifications through Resend Free to `saurav@xagi.in`, which
continues receiving mail in Zoho. A SQLite-backed Durable Object owns the ledger;
there is no D1 database, paid Email Sending binding, or new server requirement.

## Current state

Prepared, disabled by default, and not activated on the website. The owner must
connect a sending credential before real notification delivery can be verified.
The recipient mailbox was verified during PR 75, but that Cloudflare verification
is not a Resend sender verification or proof of end-to-end delivery.

No website page, metadata, canonical, sitemap, existing Worker route, Zoho MX,
website DNS proxy, TLS mode or certificate configuration changes are needed.
Certificate maintenance remains a separate operation.

## Why this can remain free

Verified on 2026-10-17 against the providers' primary documentation:

- [Workers Free supports SQLite-backed Durable Objects](https://developers.cloudflare.com/durable-objects/platform/pricing/),
  including 100,000 requests/day, 100,000 written rows/day and 5 GB total storage.
  Exceeding Free limits causes failures rather than paid overages. These are
  account-wide allowances and may be shared with other applications.
- [Resend Free](https://resend.com/pricing) includes 3,000 emails/month and 100/day.
  Use an explicitly Free account/workspace, without paid overages. Existing
  provider usage can consume some of that allowance.
- This service additionally caps new sending reservations at 50/day and
  1,000/month, atomically in SQLite. Pending, failed/uncertain and test sends all
  reserve budget. Hitting a limit retains the direct-email fallback and does
  not report success. These caps do not constitute an account-wide billing cap
  for unrelated services; do not upgrade either account or enable overages.

## Activation prerequisites

1. Connect a Resend Free account and verify a dedicated **sending subdomain**,
   `m.xagi.in`, which is already verified in this workspace. No new DNS records
   are needed for this existing sender. For a future new domain, Review the provider's exact DNS record values.
   Add only its dedicated DKIM TXT / sending-return-path records. Do not replace
   Zoho's root MX/SPF/DKIM, existing DMARC policy, website A/CNAME records or proxy
   settings. No certificate work is involved. Sender becomes
   `enquiries@m.xagi.in`; recipient stays `saurav@xagi.in`.
2. Create a sending-only Resend API key restricted to that verified domain.
   Enter it directly with `wrangler secret put RESEND_API_KEY --config
   workers/enquiry/wrangler.jsonc`. Never paste credentials into chat, code,
   screenshots, CLI flags or GitHub. Do not use a mailbox's normal password.
3. Create a managed Turnstile widget restricted to `xagi.in`, action
   `dataset_enquiry`, with no clearance grant. Its public sitekey is separate
   from the private secret. Store the secret as `TURNSTILE_SECRET` using Wrangler.
4. Generate independent random secrets `HASH_SECRET` and `REPORT_TOKEN` outside
   Git and store them using Wrangler secret input. The report token belongs only
   to the operator; it must never be included in frontend build variables.
5. The config declares a new SQLite Durable Object migration and pins a runtime
   compatibility date supported by the installed AWS toolchain. Keep `ENABLED`
   false, `workers_dev` false, previews disabled, and no public route until ready.
   `wrangler deploy --dry-run --config workers/enquiry/wrangler.jsonc` verifies
   bundling; an actual deployment is a separate step and must remain on Free.
6. Add only `xagi.in/api/dataset-enquiry*` after bindings/secrets are ready. Never
   add a site-wide catch-all or alter OpenMusic routes. The public submission
   handler accepts only the exact base path with optional trailing slash.
7. Enable the backend and submit an explicitly labeled synthetic enquiry using
   the production challenge. Verify the receipt, the provider's accepted result,
   and actual arrival in the Zoho inbox. Replay the same receipt/content and
   confirm there is one email and one ledger row. Disable analytics during this
   test; mark the receipt as a test through the authenticated admin endpoint.
8. Obtain merge approval for the prepared backend changes. Only after the
   sending test passes, set Actions variables `NEXT_PUBLIC_ENQUIRY_ENABLED=true`
   and `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to the production sitekey and publish the
   approved static site. Test all four enquiry pages, existing SEO routes,
   mobile layout, error recovery and the sitemap. Do not claim that a mocked
   success or successful build proves email delivery.

## Private reports and test exclusion

`GET /api/dataset-enquiry/report` requires `Authorization: Bearer <REPORT_TOKEN>`.
It returns total confirmed non-test enquiries, up to 1,000 grouped rows by day,
intent, placement, modality/source, plus up to 50 pending/review receipts. There
is no email address or brief text in the database/report. Requests without the
secret are rejected before waking the Durable Object.

`POST /api/dataset-enquiry/mark-test?receipt=<UUID>` requires the same operator
credential and sets `is_test=1`. There is no public caller-controlled test flag.
A missing receipt returns `changed:0`; an existing receipt returns `changed:1`.
Do not put the admin token in query strings or frontend JavaScript. Use a secure
operator client that reads the token from secret storage, not a literal shell
argument. Keep report outputs private and never commit real lead contents.

## Confirmation, privacy and retry semantics

The durable ledger is authoritative; optional browser analytics are supplemental.
A confirmed enquiry is a validated request whose notification was accepted by
Resend and acknowledged in SQLite. It is not proof of inbox placement, a
qualified sales lead, permission to market or revenue. Actual delivery must be
verified separately. Tests and draft/download actions are excluded from counts.

Validation, strict origin, body/field limits, honeypot, Turnstile hostname/action
checks and IP-derived rate limits run before sending. The ledger stores a random
receipt, keyed fingerprint, allowlisted metadata, timestamps, status and provider
message ID; it does not store contact addresses, briefs, coverage or raw IPs.
Email content is sent to Resend and received in Zoho, with visitor email only as
Reply-To. The recipient and sender are server-controlled. No request body or
credential is logged. Expired hashed rate buckets are cleaned by the object's daily alarm, not a
Worker cron. This account's five free cron slots are already used; no existing
schedule is changed or additional slot required.

A unique SQL insert is the send lock. The same receipt and content returns its
original result without resending; changed content returns a conflict. Resend
also receives a [provider idempotency key](https://resend.com/docs/dashboard/emails/idempotency-keys),
which it retains for 24 hours. The durable SQL record is the long-term replay
protection. An uncertain send/ack remains pending or review and is never
silently retried. A user can retain the receipt and contact `saurav@xagi.in`;
the email subject contains the same reference. Reconcile against the provider
and mailbox before changing ledger state. Never label a failure as a lead.

## Zoho alternative

[Zoho documents SMTP for eligible free accounts](https://www.zoho.com/mail/help/zoho-smtp.html).
Use the account's own server/datacenter settings and an app password when
required. Direct Zoho SMTP needs an authenticated TLS-capable mail transport,
such as a small relay on the existing AWS host; the current prepared adapter
uses Resend HTTPS. Zoho mailbox receiving alone does not grant an SMTP or API
credential. Do not assume a particular account has access or reuse another
project's secrets. Zoho may be selected instead once the owner connects the
appropriate credential securely; that adapter needs its own delivery test.

## Tests and rollback

`npm run test:enquiry` covers the core receipt flow, SQLite adapter, fixed-recipient
Resend request, provider idempotency key, malformed/rejected responses, daily and
monthly budgets, validation, spam/rate controls and uncertain-send behaviour.

On AWS, run the installed `wrangler dev --config workers/enquiry/wrangler.jsonc
--local --ip 127.0.0.1 --port 8795 --var REPORT_TOKEN:local-synthetic-report-token`.
Then `python3 workers/enquiry/runtime-test.py` exercises the real local workerd
SQLite Durable Object: schema initialization, private report, authorization,
test-marking validation and disabled submission. This uses a public synthetic
local-test token only. It sends no email and is not production-delivery evidence.
Stop the task-owned dev process afterward.

For rollback, disable the frontend variable and rebuild, or deploy backend
`ENABLED=false` immediately. Keep receipts and storage for reconciliation; do not
delete the Durable Object migration/namespace. Never use `deleted_classes` as a
routine rollback: it destroys data. Preserve email draft/download fallback. DNS,
certificates and SEO routes do not participate in this rollback.

The operator can run `python3 scripts/connect-enquiry-resend.py` from the Mac.
It prompts with hidden input and forwards the key directly to Wrangler secret
storage on the existing AWS host; it never writes the key to disk or Git.
The script expects the dedicated task checkout documented above.

`POST /api/dataset-enquiry/delivery-test` is a bearer-authenticated operator
diagnostic. It uses server-fixed synthetic content addressed only to
`saurav@xagi.in`, intentionally skips CAPTCHA for this operator diagnostic,
uses the real provider/ledger path and marks its receipt as a test before
returning. It can test mail delivery while public sending is disabled. It is
not proof that the public challenge or browser flow was tested. Ordinary
submissions still require Turnstile and all other checks; no public request
can set the internal test flag or choose a diagnostic recipient/body.
