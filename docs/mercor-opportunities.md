# Mercor opportunities

Route: `/opportunities`. Public listing snapshot: `public/data/mercor-opportunities.json`.

The site is statically exported for GitHub Pages. `npm run build` runs `scripts/fetch-mercor-opportunities.mjs` first to refresh the public Explore feed. It includes active, public listings accepting applications and retains only directory fields. If Mercor is unavailable or changes format, the previous snapshot and original date are retained with a build warning. The UI always displays the source-check date and links to Mercor for the authoritative current details. This covers the public Explore feed, not private or account-specific opportunities. To refresh manually, run `node scripts/fetch-mercor-opportunities.mjs`, review the resulting data diff, commit and deploy. There is no new scheduled automation.

## Activate referral attribution

The supplied listing had no referral code. The owner’s signed-in Mercor dashboard provided `https://t.mercor.com/g0acL`, whose redirect verified code `baa96e3c-f938-4522-a225-3a21c2bd7ee8`. It is configured in `lib/mercor/opportunities.ts`. All per-role and directory links include this code and referral campaign parameters. Check attribution and actual earnings in the Mercor dashboard; outbound-link verification alone does not establish a credited referral. The dashboard currently states the link can be used up to 100 times per rolling 30 days.

## Validation and publishing

Run `npm run lint` and `npm run build` on the existing AWS host. Review `/opportunities` at desktop and mobile widths; exercise search, domain/residence filters, clear filters, sort, show more, empty results, and application URLs. Listing pay uses the source frequency; hourly and per-task amounts are never ranked as equivalent. Residence and work-location restrictions remain visible. No public JobPosting schema is emitted for this third-party directory.

Deploy only a reviewed source tree: this local checkout contains extensive unrelated pre-existing work. A backup branch containing this task alone is not a backup or deployment of those other changes.
