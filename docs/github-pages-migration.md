# GitHub Pages migration

The public website is exported at build time. Pages, blog posts, project profiles,
product policies, images, fonts and browser-only tools need no Cloudflare Worker.
The carousel editor retains manual editing and PDF export. The standalone chat
and AI slide-generation demos are retired; their UI no longer submits requests.
API discovery documents advertise no runtime endpoints. `/api/health` is only a
static status file. `/site.md` replaces request-time Markdown negotiation.

## Build and release

Run `npm ci`, `npm run lint`, and `npm run build` on the existing AWS host or GitHub
Actions. The output is `out/`, with slash-compatible URLs and unoptimized static
images. `.github/workflows/deploy.yml` publishes that output to GitHub Pages.
Do not publish dependencies, caches, secrets, or `.env` files.

GitHub Pages currently permits deployments only from `main`. Publish this branch
through the normal reviewed main-branch release. No unrelated local edits are
included; new public route files needed for migration are preserved explicitly.

## Cloudflare cutover after deployment verification

1. Verify `/`, `/services/`, `/blog/`, `/projects/`, `/codex-skills/`, product-policy
   pages, their assets and the carousel editor on `https://xagi-labs.github.io/`.
2. Add a Cloudflare Redirect Rule for all requests to `xagi.in` and
   `www.xagi.in`, preserving path and query string. Use a temporary redirect during
   verification, then a permanent redirect after successful checks.
3. Remove every Worker route for `xagi.in` and `www.xagi.in` after confirming
   the Redirect Rule takes precedence. Preserve separate application subdomains.
4. Disable the `xagi-labs` workers.dev endpoint if enabled. Leave the Worker and
   deployment history retained for rollback; do not permanently delete it.
5. Verify redirects, static product-policy pages, and zero new domain invocations.

The existing token cannot manage Cloudflare Redirect Rules (HTTP 403), so the
rule cutover needs an authorized dashboard session or suitable existing access.

## Rollback

Disable the new Redirect Rule and restore the previous broad Worker route to
`xagi-labs`. Restore workers.dev only if it was previously enabled. The existing
Worker version and source history are retained until the static cutover succeeds.

Existing typography warnings for literal quotation marks remain visible in lint; they are not release-blocking errors. No runtime or security lint checks are disabled.

## Zero Worker usage for xagi.in

The final scope redirects every request for xagi.in and www.xagi.in, with no product-path exceptions. Remove every Worker route on those hostnames after verifying the Pages release. Disable the retired site and support Workers on workers.dev as well. Other application subdomains remain separate.

BookReels, OpenMusic, SimpleShot and Ram Japa support/legal pages are copied as static HTML. SimpleShot source-distribution archive is preserved. Drone simulation was an authenticated upstream proxy and cannot run on Pages; its replacement explicitly says it is retired. The redirect preserves paths and query strings. GitHub Pages accepts static reads; retired API writes are unsupported.

## Verified cutover - 9 October 2026

PR #69 merged as `8848ee1ef8aa1bbfa3e5cd1eedd7f6e5131bde9b`. GitHub Pages deployment run 37893023192 succeeded. The new main pages and migrated support/legal pages returned HTTP 200; retired chat and slide-generation API routes returned 404.

Cloudflare Single Redirect is active for xagi.in and www.xagi.in with status 301, preserving paths and query strings. Verified HTTP and HTTPS apex, www, projects and every migrated product prefix. All eight Worker routes in the xagi.in zone were removed; the routes API returned an empty result. The xagi-labs workers.dev and preview endpoints are disabled. Workers and deployment history are retained for rollback. Separate application subdomains and their custom-domain bindings remain outside this cutover.

This configuration removes Worker invocation from main-domain traffic. Earlier analytics remain historical usage; the cutover does not erase prior billable usage. The route backup is retained locally for recovery and excluded from the source backup.
