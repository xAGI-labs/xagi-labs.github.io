# Mercor opportunities

Route: `/opportunities`. Public listing snapshot: `public/data/mercor-opportunities.json`.

The server requests Mercor's public Explore page hourly using Next.js fetch caching and page revalidation. It reads the public listing query from `__NEXT_DATA__`, includes active, public listings accepting applications, and retains only listing fields needed by the directory. No applicant information or job descriptions are copied. If Mercor changes its response or is unavailable, the page displays the bundled snapshot and its original source-check date. Mercor's own directory remains linked as the authoritative source. This covers the public Explore feed, not private or account-specific opportunities.

## Activate referral attribution

The supplied example listing had no referral code. `mercorReferralCode` in `lib/mercor/opportunities.ts` is intentionally empty until the owner provides their verified Mercor “Refer & earn” URL/code. Set it to the exact `referralCode` value from that URL. All per-role and directory links then include the code and Mercor's referral campaign parameters; the disclosure updates automatically. Verify the final URLs and attribution in the owner's Mercor dashboard before claiming referrals are credited. Do not use a code from public search results.

## Validation and publishing

Run `npm run lint` and `npm run build` on the existing AWS host. Review `/opportunities` at desktop and mobile widths; exercise search, domain/residence filters, clear filters, sort, show more, empty results, and application URLs. Listing pay uses the source frequency; hourly and per-task amounts are never ranked as equivalent. Residence and work-location restrictions remain visible. No public JobPosting schema is emitted for this third-party directory.

Deploy only a reviewed source tree: this local checkout contains extensive unrelated pre-existing work. A backup branch containing this task alone is not a backup or deployment of those other changes.
