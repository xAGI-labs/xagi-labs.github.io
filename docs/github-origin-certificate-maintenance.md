# Controlled GitHub Pages origin-certificate maintenance plan

Prepared 17 October 2026. **Plan only. Do not execute or change the live configuration without a separately approved window.** The user selected: keep the live site unchanged and prepare controlled maintenance.

## Current working state

- Site: https://xagi.in/; public HTTPS works through Cloudflare.
- Origin: xAGI-labs/xagi-labs.github.io, Pages Actions deployment, custom domain xagi.in.
- Apex and www: proxied CNAMEs to xagi-labs.github.io.
- Cloudflare's pre-existing encryption mode: Full. Do not change the zone-wide mode: other app origins share the zone.
- Cloudflare redirects only HTTP or www to HTTPS apex, preserving path/query.
- GitHub has no xagi.in origin certificate. Direct TLS hostname verification against 185.199.108.153 fails. Its Enforce HTTPS setting is unavailable until a certificate exists.
- OpenMusic has four narrow legal Worker routes plus no-Worker website fallback routes. Disabling proxy bypasses every Worker on those hostnames.

GitHub requires successful DNS checks before requesting its managed certificate. The proxied address hides the Pages address from those checks. Cloudflare's free plan has no Host/SNI/DNS origin overrides. A public certificate on Cloudflare does not become an origin certificate at GitHub. No client-side HTML or repository CNAME file can repair that distinction.

## What needs explicit approval later

Agree a date/time in Asia/Kolkata, an operator with Cloudflare and GitHub access, a maximum exposure period, and a rollback deadline. DNS-only issuance can expose uncached visitors to GitHub before its certificate is ready. Existing clients may keep the cached Cloudflare address; that is not a zero-downtime guarantee. Do not describe a certificate as issued based only on the GitHub settings page.

The planned window must explicitly accept that risk. If the user requires uninterrupted valid TLS for every visitor, this DNS-only plan must not be executed; assess a fully previewed hosting migration instead. No paid service is required or purchased by this plan.

## Preflight gates

1. Freeze source deployments for the window. Record current main SHA, Pages deployment ID and successful workflow. Keep a known-good export available on AWS. Finish all growth-page work independently; do not combine its release with certificate maintenance.
2. Export the exact apex/www records (types, targets, TTL, proxy states), active canonical redirect and all OpenMusic routes. Retain account-bearing screenshots only locally, excluded from GitHub.
3. Probe homepage, a representative blog article, voice/services, new data pages, sitemap, robots, all legal paths and a missing path from independent networks. Record status, canonical and redirect chains.
4. Verify the direct Pages HTTP responses for every OpenMusic legal path against the live Worker responses. Their static equivalents must preserve required content and support/deletion behavior before bypassing Workers. If not, repair and review that parity separately first. Do not assume HTTP 200 proves legal-content parity.
5. Confirm apex/www have no conflicting DNS records, and CAA does not block GitHub's issuer. Record DNS responses using Cloudflare's authoritative servers and at least two recursive resolvers. Do not modify MX, TXT verification, app subdomains or unrelated Worker routes.
6. Confirm access to both provider controls and prepare the exact rollback payloads. Set an agreed short observation/abort threshold; certificate issuance time is not guaranteed and may exceed the maintenance window.

## Execution during the approved window

1. Keep xagi.in configured as the Pages custom domain. Leave GitHub Enforce HTTPS unavailable/off until issuance succeeds. Never weaken Cloudflare TLS settings or disable validation to hide a failure.
2. Change only the existing apex and www CNAMEs from proxied to DNS-only, keeping their GitHub target. Record mutation time and authoritative DNS answers. This temporarily bypasses Cloudflare redirects and OpenMusic Workers, so preflight parity is mandatory.
3. Trigger/read GitHub's asynchronous DNS health check (`GET /repos/xAGI-labs/xagi-labs.github.io/pages/health`). The initial response can be 202. Wait between checks; inspect both apex and alternate domain results. A reachable website alone is insufficient: confirm Pages IP eligibility and no CAA error.
4. Observe the Pages certificate status. Do not repeatedly remove/re-add the domain or churn DNS; that can restart issuance and consume provider rate limits. If a record is still cached, distinguish propagation from an invalid configuration.
5. Verify a valid certificate directly against each active Pages IPv4/IPv6 origin using the public hostname as SNI, with standard trust and hostname verification. Do not use `-k`, disable validation or bypass browser warnings. Confirm its SAN includes the intended hostname(s), validity period and trusted chain.
6. Only after successful direct TLS verification, enable GitHub Enforce HTTPS. Check HTTP-to-HTTPS behavior, default github.io-to-xagi.in redirects, paths, queries and missing-path 404.
7. Decide whether to restore the previous Cloudflare proxy. Before restoration, confirm GitHub certificate renewal requirements: proxying again may recreate DNS-validation problems on renewal. Record the decision explicitly; do not promise unattended renewal without evidence. If restoring proxy, retain the existing narrow legal Workers and canonical rule, and verify them again.
8. Any move to Full (strict) must be scoped to apex/www, using a supported host-specific configuration, and must follow successful origin checks. Do not change zone-wide TLS for unrelated application hosts.

## Abort and rollback

If DNS health fails, certificate issuance exceeds the agreed window, any legal path differs materially, a redirect loops, or public TLS fails beyond the agreed exposure threshold:

- Restore the original proxy states for both CNAMEs and their exact previous targets.
- Leave the custom domain xagi.in and canonical HTTP/www redirect unchanged. **Do not restore the obsolete apex-to-github.io redirect**, which would create a loop with the custom domain.
- Verify Cloudflare public HTTPS, homepage and representative legacy/legal pages from independent networks. Confirm no unrelated record or Worker changed.
- Report that the site was restored and certificate issuance is incomplete. Do not claim success because a provider request was accepted.

DNS cache behavior means a rollback is not instantaneous for every client. Keep the operator present until independent checks confirm recovery. Record request times, resolver observations, direct certificate output and provider state without retaining private tokens.

## Completion evidence

- Pages API reports certificate provisioned and HTTPS enforced.
- Standard direct-origin certificate probes pass for all relevant addresses and hostnames.
- Public HTTPS and canonical redirect chains pass from independent networks.
- Full sitemap URL and canonical crawl passes, legacy body/path comparison remains clean, legal/Worker behavior passes and missing paths return 404.
- Renewal ownership and proxy decision documented. DNS/rule backups and source checkpoints verified on GitHub; no credential or admin-account screenshots committed.

References checked 17 October 2026:
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/rest/pages/pages
- https://developers.cloudflare.com/rules/origin-rules/
- https://developers.cloudflare.com/workers/configuration/routing/routes/
