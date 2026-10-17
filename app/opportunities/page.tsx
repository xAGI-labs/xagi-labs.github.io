import type { Metadata } from 'next'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'
import Opportunities from '@/components/opportunities'
import { getOpportunities, mercorLink, mercorReferralCode } from '@/lib/mercor/opportunities'

export const dynamic = 'force-static'
export const metadata: Metadata = {
  title: 'Mercor opportunities',
  description: 'Explore public Mercor opportunities in engineering, research, medicine, finance, languages and more. Search roles and review eligibility before applying.',
  alternates: { canonical: 'https://xagi.in/opportunities/' },
}

export default async function OpportunitiesPage() {
  const feed = await getOpportunities()
  return <div className="min-h-screen bg-[#f7f7f2] text-[#202a25] dark:bg-[#151c18] dark:text-[#f2f3ea]">
    <Header />
    <Opportunities feed={feed} referralEnabled={Boolean(mercorReferralCode)} exploreUrl={mercorLink()}
      links={Object.fromEntries(feed.listings.map((role) => [role.listingId, mercorLink(role.listingId)]))} />
    <Footer />
  </div>
}
