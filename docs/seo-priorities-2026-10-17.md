# SEO priority implementation — 17 October 2026

## Scope and release status

Prepared on `codex/xagi-seo-priorities-20261017`, based on main `a9ea8c8`. Website changes require review and merge before production publication. Certificate maintenance is excluded: no DNS records, proxy settings, TLS mode, origin certificate settings, broad Worker routes or redirect rules were changed.

## Implemented

- Public search and live AI retrieval/grounding allowed; explicit GPTBot, ClaudeBot and CCBot training exclusions align with `ai-train=no`. Public rendering assets are no longer blocked by the wildcard rule. Search/user bot groups use current names. Content-Signal is a declaration, not authentication or a guarantee every crawler will comply. No blanket firewall bypass was added. Google-Extended is not newly blocked because its controls can encompass uses beyond a training-only crawler.
- Cloudflare's email transformation was isolated as the hydration trigger: current live page produces React #425/#422; replaying the unmodified prior export under the same URL produces neither. Build postprocessing adds Cloudflare's documented `<!--email_off-->...<!--/email_off-->` comments around each exported body. No visible text or DOM elements are added. This leaves the public business contact address readable and requires no zone-wide security or certificate change. After deployment, verify actual edge HTML retains the plain address and no longer inserts `data-cfemail` into React-owned content. Reference: https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/
- Removed duplicate Tailwind utility generation from the landing stylesheet while preserving the existing theme cascade. Homepage stylesheet files total 214,700 bytes vs 330,968 before (35.1% less uncompressed CSS). Eighteen before/after computed-style samples (nine routes, light and dark) match exactly.
- Removed the unsupported Vercel Analytics component from the static GitHub Pages layout. Existing Google configuration, GoatCounter and Clarity remain; no new analytics account is claimed.
- Added an About destination and linked it from data navigation/footer. Official GitHub/X/LinkedIn profiles and co-founder roles are drawn from existing public source. Organization metadata uses the observed LinkedIn name as an alternate name. Existing service/product pages keep their URLs and intent.
- Replaced unsourced team numeric outcomes with work-area descriptions and links to project evidence. Haryanvi numeric outcomes are no longer presented as verified public proof; a linked methodology note makes the evidence limits explicit. No raw corpus, contributor details or private audit ledger is released.
- Added a speech datasheet template, a worked evaluation rubric with scores and calibration guidance, and a multimodal pilot specification. All are explicitly illustrative, not inventory, measured results or delivery promises. Public Markdown downloads are linked from the service/resource pages.
- Added data buyer/partner/expert routes to Contact, plus a relevant speech-data path on the existing voice AI page. Existing product/engineering content remains accessible.
- Imported article H1s render as section headings under the existing article title. Blog dates use an explicit locale/timezone to avoid server/client differences; article body, datetime and schema dates remain unchanged.
- Data-intent events use a metadata allowlist and omit arbitrary attribution/query/referrer fields and brief text. Events reach the already-installed GoatCounter client when available, as well as the existing dataLayer/optional gtag. Blocked browser storage and unavailable GoatCounter no longer break brief/CTA behavior. Draft/download/click events are not represented as received leads or booked meetings.
- Updated llms.txt, static overview, WebMCP summary and the stale Goose positioning/competitor config. Goose has a small budget cap; no provider calls were run. Run a dry-run cost check and obtain approval before paid execution.
- Repaired the issue-to-blog YAML block and constrained it to OWNER/MEMBER/COLLABORATOR-authored issues. A local temporary fixture parsed the YAML/JavaScript and produced valid frontmatter; the publishing workflow was not triggered. Existing daily news behavior is unchanged.

## Validation

Commands on AWS:

```sh
npm run test:marketing
npm run lint
NEXT_TELEMETRY_DISABLED=1 npm run build
python3 scripts/verify-seo-export.py
python3 scripts/verify-priority-regression.py --baseline /home/saurav/projects/xagi-growth-20261017/out
```

- Marketing checks pass: storage denied, analytics unavailable, private data excluded and draft semantics.
- Lint and production build pass with existing lint warnings elsewhere.
- 500 unique sitemap URLs, zero canonical/indexability/schema errors. All 499 previous sitemap URLs preserved; only `/about/` added.
- 1,424 baseline HTML files preserved. No unexpected visible text changes after normalizing the intentional blog date presentation and the pre-existing randomized game marker. Fourteen explicitly scoped pages change visible copy/navigation. JSON-LD and canonical checks run separately; no old route is blanket-redirected or noindexed.
- Ten rendered representative routes checked: homepage, speech, multimodal, expert evaluation, About, Contact, voice AI, AutoClaw, an older blog article and Ramen support. No React hydration errors in the preview; expected canonical and schema values present. External analytics/location calls were stubbed during this functional check to avoid test tracking and isolate the UI.
- Brief download contains the synthetic requirements while analytics contains only event/intent/placement. Status explicitly says it has not been sent. Mobile speech page at 390px: document width 390px, no horizontal overflow. Screenshot: screenshots/speech-evidence-mobile.png.

## Search Console actions already completed

Submitted `https://xagi.in/sitemap.xml` in the verified domain property. Google confirmed Success, read October 17, 2026, 499 discovered pages. The submission will pick up the new About URL on a subsequent read after deployment; 499 is the current live count, not a failed new-page discovery.

Read all 114 historical soft-404 examples from the October 12 report and checked their current public responses: all return 200 with an article H1. This is a triage result, not proof Google has reversed the classification. Do not mass-request validation or mark the issue resolved based on status alone. Prioritize representative article usefulness, source attribution and rendered content, then inspect Google's current crawl/canonical state. No pages were deleted to clear the report.

## Follow-through after publication

1. Verify public robots text (including any managed prefix), search bot access and rendering assets. Use verified edge logs for actual crawler denials; never rely solely on a spoofed user-agent test.
2. Verify homepage/email links after Cloudflare, and check browser console on home + speech + one legacy article. The source fix is not claimed as verified at the live edge before deployment.
3. Check sitemap/new About canonical, downloads, body headings, top legacy routes and query-preserving redirects. Run the source export checks in CI; stop deployment if they fail.
4. Test real analytics event receipt in the correct property. No confirmed GA4 website property or completed lead/booking baseline is claimed here.
5. A static site cannot confirm receipt of an email draft. Keep the honest fallback. A received-lead event must be emitted only after a configured inbox/CRM endpoint acknowledges successful delivery, and a booked-meeting event only after a verified calendar webhook/provider receipt. No new personal-data processor, credentials, paid service or fake success endpoint was introduced. Operational inbox/CRM receipt and qualified-opportunity tracking remain an integration task.
6. Review Google-selected canonical/index status for home, sourcing, speech, evaluation and priority older pages after recrawl. Monitor data-intent and legacy performance separately.
7. Repeat a comparable production performance test and collect field metrics when available; do not compare a localhost lab score directly with the earlier public Cloudflare score.

## Rollback

Revert this website release via Git while retaining current DNS/TLS and existing narrow legal Worker routes. For an isolated regression, revert the relevant source change, rebuild, rerun export/route checks and deploy through the normal Pages workflow. The certificate plan remains a separately scheduled controlled maintenance task.

## Performance validation limits

Matched localhost mobile lab runs: baseline Performance 73, LCP 4.2s, TBT 340ms, CLS 0; final isolated run Performance 80, LCP 4.0s, TBT 240ms, CLS 0. Accessibility and SEO are 100 in the final run. These are single synthetic observations, not proof of a field improvement or a comparison with the earlier public Cloudflare test. A concurrent browser-sweep run scored 58 with LCP 8.6s and a Lighthouse slow-CPU warning; it is retained in the measurement record rather than silently discarded. The isolated repeat had no run warnings. Remaining mobile delivery work should be prioritized with comparable production measurements after release.
