import snapshot from '@/public/data/mercor-opportunities.json'

export type Opportunity = (typeof snapshot.listings)[number]
export type OpportunityFeed = { fetchedAt: string; listings: Opportunity[]; live: boolean }

// Verified from the signed-in owner dashboard: https://t.mercor.com/g0acL
export const mercorReferralCode = 'baa96e3c-f938-4522-a225-3a21c2bd7ee8'

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

export function getOpportunities(): OpportunityFeed {
  return { fetchedAt: snapshot.fetchedAt, listings: snapshot.listings, live: false }
}
