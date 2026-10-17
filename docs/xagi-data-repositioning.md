# xAGI data sourcing and canonical domain restoration

## Scope and content preservation

Built from production main commit 8848ee1, in an isolated AWS worktree. The existing local Mac checkout has unrelated dirty work and was not changed. The homepage is repositioned around requirements-led AI data sourcing/licensing, with three supporting pages. Existing blog, news, service, product and legal/support page copy remains intact. Domain substitutions, missing route canonicals and sitemap normalization are technical changes only. The unchanged snake game has a random food position during prerendering; its text regression normalizes those board markers.

The brief opens a mailto draft addressed to the existing business contact. The visitor reviews and sends it in their email client. The page never claims a server submission or stored lead; the tracking event is a draft click. The existing calendar is retained for discussion. Existing analytics destinations and retired API behavior are retained. No inventory, certification, customer, delivery or availability claims are invented.

## Observed production configuration (October 17, 2026)

- GitHub Pages uses GitHub Actions and currently has no custom domain.
- Only main is allowed to deploy into the github-pages environment.
- Cloudflare rule `39d26ebd51cd40aa91e3c12cfda5c83b`, named “XAGI public site to GitHub Pages”, matches xagi.in and www.xagi.in, permanently redirects to concat("https://xagi-labs.github.io", http.request.uri.path), and preserves query strings.
- Both apex and www have proxied A records pointing to 13.126.96.55. Disabling the redirect alone would send visitors to the legacy server.
- MX, verification records, application subdomains and existing specific Worker routes are outside the change scope.

## Rollout gate

Code is prepared on a task branch. The user's repository instructions explicitly prohibit merging without further authorization. Production deploys allow main only; do not relax environment restrictions, force-push main, deploy unrelated local edits, or report live completion before a verified main release.

The deployment and domain cutover must be coordinated. Changing GitHub's custom domain while the old apex-to-GitHub redirect is active creates a redirect loop. DNS changes alone are not sufficient either.

## Cutover procedure after approved release

1. Review/merge the scoped PR through the approved workflow, then verify the exact release SHA and successful GitHub Pages deployment. The built site should have xagi.in canonicals and the 491-URL sitemap.
2. Back up the two apex/www DNS records and current redirect settings. Keep mail, verification, app subdomains and all specific product routes intact.
3. Point the existing apex/www records at the GitHub Pages origin using supported DNS configuration. Prefer a flattened apex CNAME/ALIAS to xagi-labs.github.io and a www CNAME to the same host, or GitHub's documented A records. Use the account's existing TLS policy; never disable TLS validation to hide origin errors. Establish certificate readiness before directing HTTPS visitors to the custom domain.
4. In a coordinated maintenance window, replace the Cloudflare apex-to-GitHub rule with `ops/cloudflare/redirect-rule.json` (only HTTP/www normalize to https://xagi.in). Set the GitHub Pages custom domain to xagi.in. GitHub Actions ignores an artifact CNAME file: the Pages setting is required. Do not leave the old cross-host redirect enabled once GitHub redirects its default host to .in.
5. Wait for custom-domain DNS/TLS validation and enforce HTTPS once supported. If propagation/certificate delay would expose broken service, restore the prior safe configuration and report the concrete blocker rather than leave a loop/outage.
6. Verify apex 200, HTTP/www canonical redirects, default github.io redirect to equivalent .in path, query preservation, correct certificate, sitemap/robots, new offer pages, existing clicked/linked pages, legal/support pages and missing-path 404. Existing narrower Worker routes should remain functional; do not remove them automatically.
7. If Cloudflare serves cached redirects/content, invalidate only affected owned URLs as needed; do not change unrelated caching/security policy. Browser-cached permanent redirects may persist, so validate with fresh HTTP probes and an independent browser context.

## Validation

Required commands: npm run lint; npm run build; python3 scripts/verify-seo-export.py --baseline /path/to/previous/out. The export check validates sitemap target files, indexability, canonical equality and JSON-LD. It optionally compares all legacy HTML routes and visible text against a prior export. Browser checks cover desktop/mobile, brief composition, anchors, details/FAQ and representative legacy/new routes. No messages are sent by testing mailto hrefs.

Keep screenshots and a verification summary in review artifacts. Lab Lighthouse metrics are not field CWV, and a successful build is not a successful production deploy.

## Rollback

Keep the prior Pages deployment and source SHA. If the domain cutover fails, restore the previous Pages cname setting (none), previous apex/www DNS targets and proxy states, and the old Cloudflare rule as one coordinated rollback. Avoid restoring the old cross-host rule while GitHub's default domain still redirects back to .in. Never alter MX or unrelated subdomains. If only the new copy needs reverting, restore the prior source release while retaining the agreed canonical domain configuration; verify both source and host behavior.

References: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site and https://developers.cloudflare.com/rules/url-forwarding/single-redirects/ (checked October 17, 2026).
