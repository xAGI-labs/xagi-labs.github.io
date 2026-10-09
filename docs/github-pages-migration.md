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
2. Add a Cloudflare Redirect Rule for GET/HEAD requests to `xagi.in` and
   `www.xagi.in`, preserving path and query string. Use a temporary redirect during
   verification, then a permanent redirect after successful checks.
3. Remove only the broad `xagi.in/*` route from `xagi-labs` after confirming the
   Redirect Rule takes precedence. Preserve more-specific routes for BookReels,
   OpenMusic, SimpleShot, drone-sim and Ram Japa, and all separate subdomains.
4. Disable the `xagi-labs` workers.dev endpoint if enabled. Leave the Worker and
   deployment history retained for rollback; do not permanently delete it.
5. Verify redirects, separate product routes, and declining new invocations.

The existing token cannot manage Cloudflare Redirect Rules (HTTP 403), so the
rule cutover needs an authorized dashboard session or suitable existing access.

## Rollback

Disable the new Redirect Rule and restore the previous broad Worker route to
`xagi-labs`. Restore workers.dev only if it was previously enabled. The existing
Worker version and source history are retained until the static cutover succeeds.

Existing typography warnings for literal quotation marks remain visible in lint; they are not release-blocking errors. No runtime or security lint checks are disabled.
