import snapshot from '@/public/data/mercor-opportunities.json'

export type Opportunity = (typeof snapshot.listings)[number]
export type OpportunityFeed = { fetchedAt: string; listings: Opportunity[]; live: boolean }

// Set this to the owner's verified Mercor referral code before publishing.
export const mercorReferralCode = ''

export function mercorLink(listingId?: string) {
  const url = new URL('https://work.mercor.com/explore')
  if (listingId) url.searchParams.set('listingId', listingId)
  if (mercorReferralCode) {
    url.searchParams.set('referralCode', mercorReferralCode)
    url.searchParams.set('utm_source', 'referral')
    url.searchParams.set('utm_medium', 'share')
    url.searchParams.set('utm_campaign', 'job_referral')
  }
  return url.toString()
}

export async function getOpportunities(): Promise<OpportunityFeed> {
  try {
    const response = await fetch('https://work.mercor.com/explore', {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(15000),
    })
    if (!response.ok) throw new Error('Mercor unavailable')
    const html = await response.text()
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)
    if (!match) throw new Error('Mercor feed format changed')
    const queries = JSON.parse(match[1]).props?.pageProps?.dehydratedState?.queries
    const raw = queries?.find((query: { queryKey?: string[] }) => query.queryKey?.includes('listingsPublicQuery'))?.state?.data?.listings
    if (!Array.isArray(raw) || !raw.length) throw new Error('Mercor feed empty')
    const fields = Object.keys(snapshot.listings[0])
    const listings: Opportunity[] = raw
      .filter((item) => item.status === 'active' && !item.disableApplications && !item.isPrivate)
      .filter((item) => typeof item.listingId === 'string' && typeof item.title === 'string')
      .map((item) => Object.fromEntries(fields.map((field) => [field, item[field] ?? null])) as Opportunity)
    if (!listings.length) throw new Error('No public listings')
    return { fetchedAt: new Date().toISOString(), listings, live: true }
  } catch {
    return { fetchedAt: snapshot.fetchedAt, listings: snapshot.listings, live: false }
  }
}
