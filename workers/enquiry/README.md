# Dataset enquiry delivery and lead receipts

The static website submits JSON to a single Cloudflare Worker route. The email
recipient is fixed to `saurav@xagi.in`; the visitor's email is Reply-To only.
Buyer, partner and expert enquiries remain distinguishable. Downloads and email
drafts remain available and do not count as submissions.

## Current rollout gate

This implementation is disabled by default. No new endpoint has been deployed.
On 2026-10-17 Cloudflare's dashboard required Workers Paid to enable Email
Sending; its API returned Unauthorized. Creating a dedicated D1 database also
failed because this account has reached the Free plan database limit. Do not
purchase an upgrade, reuse another product's database, or enable Email Routing
as a workaround without authorization. The owner verified `saurav@xagi.in` on 2026-10-17, confirmed through
the destination-address API. The owner then requested implementation only,
with sending left disabled. No paid upgrade or backend deployment is authorized.

The existing Zoho root MX records, website DNS proxy, SSL mode, GitHub origin
certificate and existing Worker routes must remain unchanged. Certificate
maintenance is a separate task.

## Provision and release

1. Resolve the sending-service and database account gates. With an approved
   Workers plan, provision `xagi-enquiry-leads` using `wrangler d1 create`.
   Add its returned ID as the `DB` binding in `wrangler.jsonc`. Do not guess IDs.
2. Review Email Sending onboarding records before applying. It uses a dedicated
   `cf-bounce` sender/bounce subdomain, distinct from Email Routing's root MX.
   Preserve Zoho MX/SPF/DKIM and existing DMARC policy. If onboarding proposes
   overwriting them, stop and resolve the conflict. Verify the sending domain
   and fixed destination address. Do not enable inbound Email Routing.
3. Create a managed Turnstile widget restricted to `xagi.in`, with no clearance
   grant. Keep the secret off Git, logs and public build variables. The sitekey
   is public. The backend checks hostname and `dataset_enquiry` action.
4. Apply `schema.sql` with `wrangler d1 execute xagi-enquiry-leads --remote
   --file workers/enquiry/schema.sql`. Store `TURNSTILE_SECRET` and a random
   32-byte `HASH_SECRET` with `wrangler secret put --config
   workers/enquiry/wrangler.jsonc`. Never commit `.dev.vars` or `.env` files.
5. Add only the route `xagi.in/api/dataset-enquiry*`; the Worker itself accepts
   only the exact path with optional trailing slash. Never add a catch-all
   route or modify existing OpenMusic routes. Keep `workers_dev` and previews
   disabled. Set `ENABLED=true` only when bindings and email setup are verified.
6. Run an explicitly labeled synthetic test through the endpoint. Verify its
   email reaches `saurav@xagi.in`, verify the receipt in D1, repeat the identical
   request and confirm one email/row. Mark that receipt `is_test=1` through an
   authenticated D1 update before reporting commercial counts. Test challenge,
   validation, origin, rate-limit and delivery-failure cases without sending
   real enquiries. Never use Turnstile test keys in production.
7. Set repository Actions variables `NEXT_PUBLIC_ENQUIRY_ENABLED=true` and
   `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to the production public sitekey only after
   the endpoint passes the delivery test. Obtain merge approval for the PR.
   The existing Pages workflow publishes frontend changes after merge.
8. Verify homepage, `/dataset-brief/`, `/data-partnerships/`, `/experts/`,
   `/opportunities/`, representative existing SEO pages and the sitemap live.
   Submit a labeled live test; verify recipient delivery and receipt, and
   exclude that test from reports as above. Do not describe deployment or a
   mocked email response as proof of actual inbox delivery.

Official references: [send bindings](https://developers.cloudflare.com/email-service/configuration/send-bindings/),
[domain configuration](https://developers.cloudflare.com/email-service/configuration/domains/),
[pricing](https://developers.cloudflare.com/email-service/platform/pricing/),
[Turnstile verification](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## What counts as a confirmed lead

`enquiries.status='accepted'` is recorded after the sending binding resolves.
It means a validated enquiry's notification was accepted by the email service.
It does not prove mailbox placement, buyer qualification, permission to market,
or revenue. The authoritative count is D1, independent of ad blockers. Query
`report.sql` using authenticated Wrangler D1 access. There is no public report
or list endpoint. Separate buyer/partner/expert counts; exclude synthetic tests.

The optional `dataset_enquiry_confirmed` browser event fires once per mounted
form after a matching server receipt. Clicks, CAPTCHA success, downloads, drafts,
errors and pending receipts do not fire it. Browser analytics can be blocked or
forged and must not replace the D1 ledger. No email, brief, coverage, raw IP,
query string or referrer is sent with this event.

The ledger retains only receipt, keyed fingerprint, intent, allowlisted page,
modality/source, timestamps, status and provider message ID. The email and
brief exist in the notification, not in D1 or application logs. Enquiry text is
not logged. Rate limiting uses a secret-derived IP hash, rotates hourly, and
expired buckets are removed daily. Keep database/admin access restricted to
operators; do not export lead contents into GitHub evidence.

## Retries and failures

The random receipt is an idempotency key. A unique D1 insert is the send lock;
replays with the same content return the original acknowledgement without
another send. Changed content with the same receipt returns 409. If a send or
its acknowledgement is uncertain, the receipt stays `pending` or `review` and
never automatically resends. The UI preserves the visitor's text, shows the
reference and offers direct email. Across a full reload the receipt is lost;
the UI asks the visitor to retain it after an uncertain response. Do not claim
exactly-once delivery across different receipts or separate enquiries.

Reconcile pending/review rows against provider activity using the receipt in
the subject and the destination inbox. Only after evidence of provider
acceptance should an operator mark a row accepted, recording provider ID and
acceptance timestamp. Never turn failed notifications into confirmed leads to
make a dashboard look complete. Do not silently replay an uncertain send.

## Rollback

Disable `NEXT_PUBLIC_ENQUIRY_ENABLED` and rebuild/publish the approved static
site to restore the original draft/download flow. For an incident, set Worker
`ENABLED=false` and deploy; the form reports unavailable and retains email
fallback. Preserve the database and receipts. Do not roll back DNS, TLS,
certificates, SEO routes, sitemap, or unrelated Worker deployments.

## Validation

`npm run test:enquiry` uses Node's built-in SQLite (Node 22.13+ or 24) with the
actual schema and controlled email/challenge adapters. It covers concurrent
duplicate requests, receipt/content conflicts, uncertain delivery, lost DB
acknowledgements, invalid CAPTCHA hostname/action, hostile origin, spam,
header injection, field/body limits, rate limits and disabled configuration.
Run `npm run test:marketing`, `npm run lint`, `npm run build` and
`python3 scripts/verify-seo-export.py` on AWS. Verify a build with the feature
enabled using test sitekeys only in a private test environment; the default
release build must keep it disabled until production setup passes.

The browser harness `scripts/test-enquiry-browser.cjs` tests the enabled static
export served at `http://127.0.0.1:3327`. Use the existing AWS Playwright
installation via `PLAYWRIGHT_MODULE_PATH` and its installed Chromium via
`PLAYWRIGHT_CHROMIUM_EXECUTABLE`. It mocks Turnstile and the submission endpoint,
sends no email, and is not proof of production delivery. It checks validation,
failure recovery, receipt reuse, conversion privacy and five mobile routes.
