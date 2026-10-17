'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import type { Opportunity, OpportunityFeed } from '@/lib/mercor/opportunities'
import styles from './opportunities.module.css'

function pay(role: Opportunity) {
  if (!role.rateMin && !role.rateMax) return 'See listing for pay'
  const format = (amount: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(amount)
  const range = role.rateMin && role.rateMax && role.rateMin !== role.rateMax
    ? `${format(role.rateMin)}–${format(role.rateMax)}` : format(role.rateMax || role.rateMin || 0)
  const unit = ({ hourly: 'hour', 'per-task': 'task', 'one-time': 'one time', yearly: 'year' } as Record<string, string>)[role.payRateFrequency] || role.payRateFrequency
  return `$${range} / ${unit}`
}

export default function Opportunities({ feed, links, exploreUrl, referralEnabled }: {
  feed: OpportunityFeed; links: Record<string, string>; exploreUrl: string; referralEnabled: boolean
}) {
  const [search, setSearch] = useState('')
  const [domain, setDomain] = useState('')
  const [country, setCountry] = useState('')
  const [sort, setSort] = useState('newest')
  const [limit, setLimit] = useState(30)
  // Mercor provides ISO alpha-3 codes. Preserve exact codes rather than guessing eligibility.
  const countries = useMemo(() => Array.from(new Set(feed.listings.flatMap((role) => role.eligibleResidenceLocation || []))).sort(), [feed])
  const domains = useMemo(() => Array.from(new Set(feed.listings.map((role) => role.listingDomain).filter(Boolean))).sort(), [feed])
  const results = useMemo(() => feed.listings.filter((role) => {
    const words = `${role.title} ${role.listingDomain} ${role.location} ${(role.eligibleResidenceLocation || []).join(' ')}`.toLowerCase()
    return search.toLowerCase().trim().split(/\s+/).every((word) => words.includes(word)) &&
      (!domain || role.listingDomain === domain) &&
      (!country || (role.eligibleResidenceLocation || []).includes(country))
  }).sort((a, b) => sort === 'title' ? a.title.localeCompare(b.title) :
    Date.parse(b.postedAt || '') - Date.parse(a.postedAt || '')), [feed, search, domain, country, sort])
  const reset = () => { setSearch(''); setDomain(''); setCountry(''); setLimit(30) }
  const updated = new Date(feed.fetchedAt).toLocaleString('en-GB', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })
  return <main className={styles.main}>
    <section className={styles.hero}>
      <div><p className={styles.eyebrow}>XAGI OPPORTUNITIES / MERCOR</p><h1>Your expertise.<br /><em>New possibilities.</em></h1>
        <p className={styles.intro}>Put what you know to work. Explore paid opportunities across AI research, engineering, languages, medicine, and more.</p></div>
      <aside className={styles.note}><span className={styles.eyebrow}>AN INDEPENDENT DIRECTORY</span><p>Discover here.<br />Apply on Mercor.</p><small>Mercor manages applications, eligibility, contracts, and payments. Check each listing for its current terms.</small><a href={exploreUrl} target="_blank" rel="sponsored noopener noreferrer">Open Mercor’s full directory <ArrowUpRight size={16} /></a></aside>
    </section>
    <div className={styles.disclosure}>{referralEnabled ? 'Referral disclosure: xAGI may earn a referral reward if you apply through these links and meet Mercor’s qualifying conditions.' : 'Referral links are not active yet. These links currently open Mercor without referral attribution.'} Applying does not guarantee a role.</div>
    <section aria-label="Find opportunities">
      <div className={styles.toolbar}><div><h2>Find your next opportunity</h2><p>{feed.listings.length} public listings · Source checked {updated} IST</p></div><a href={exploreUrl} target="_blank" rel="sponsored noopener noreferrer">Check latest on Mercor <ArrowUpRight size={15} /></a></div>
      <div className={styles.filters}>
        <label className={styles.search}><span>Search opportunities</span><div><Search size={18} aria-hidden="true" /><input value={search} onChange={(e) => { setSearch(e.target.value); setLimit(30) }} placeholder="Role, skill, or keyword" type="search" /></div></label>
        <label><span>Domain</span><select value={domain} onChange={(e) => { setDomain(e.target.value); setLimit(30) }}><option value="">All domains</option>{domains.map((value) => <option key={value}>{value}</option>)}</select></label>
        <label><span>Explicit residence eligibility</span><select value={country} onChange={(e) => { setCountry(e.target.value); setLimit(30) }}><option value="">All listings</option>{countries.map((value) => <option key={value}>{value}</option>)}</select></label>
        <label><span>Sort by</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="newest">Newest first</option><option value="title">Title A–Z</option></select></label>
      </div>
      <p className={styles.help}>Location filters use Mercor’s country codes (IND = India, USA = United States, CAN = Canada). A remote role can still have country restrictions. Listings without explicit residence eligibility appear under “All listings”.</p>
      <div className={styles.resultHeading}><p role="status">{results.length} opportunities{domain || country || search ? ' match your filters' : ' to explore'}</p>{(search || domain || country) && <button onClick={reset}>Clear filters</button>}<span>Pay shown in USD</span></div>
      <div className={styles.list}>{results.slice(0, limit).map((role) => <article key={role.listingId} className={styles.role}>
        <div><p className={styles.domain}>{role.listingDomain || 'Other opportunities'}</p><h3><a href={links[role.listingId]} target="_blank" rel="sponsored noopener noreferrer">{role.title}</a></h3><p className={styles.details}>{role.location || role.workArrangement || 'See location in listing'}{role.hoursPerWeek ? ` · ${role.hoursPerWeek} hrs/week` : ''}</p><p className={styles.eligibility}>{role.eligibleResidenceLocation?.length ? `Residence: ${role.eligibleResidenceLocation.join(', ')}` : 'Residence eligibility: check listing'}{role.ineligibleResidenceLocation?.length ? ` · Excludes: ${role.ineligibleResidenceLocation.join(', ')}` : ''}{role.eligibleLocation?.length ? ` · Work location: ${role.eligibleLocation.join(', ')}` : ''}{role.ineligibleLocation?.length ? ` · Work location excludes: ${role.ineligibleLocation.join(', ')}` : ''}</p></div>
        <div className={styles.apply}><strong>{pay(role)}</strong><a href={links[role.listingId]} target="_blank" rel="sponsored noopener noreferrer" aria-label={`View ${role.title} on Mercor`}>View opportunity <ArrowUpRight size={17} /></a></div>
      </article>)}</div>
      {!results.length && <div className={styles.empty}><h3>Try a broader search.</h3><p>Remove a filter or search for a different skill.</p><button onClick={reset}>Show all opportunities</button></div>}
      {results.length > limit && <button className={styles.more} onClick={() => setLimit(limit + 30)}>Show more opportunities ({results.length - limit} remaining)</button>}
    </section>
    <section className={styles.faq}><h2>Before you apply</h2><div><h3>Is this a job offer from xAGI?</h3><p>These are public Mercor opportunities. xAGI hosts this independent directory. Read the listing and complete the application on Mercor.</p><h3>How current are these listings?</h3><p>We refresh Mercor’s public directory when this site is built. The source-check date above identifies the data shown. Availability and rates can change; Mercor’s listing is authoritative.</p><h3>How do referrals work?</h3><p>When enabled, our links carry xAGI’s Mercor referral code. Rewards depend on Mercor’s terms, qualifying earnings, and the applicable cap. <a href="https://www.mercor.com/referrals/" target="_blank" rel="noopener noreferrer">Read Mercor’s referral terms.</a></p></div></section>
  </main>
}
