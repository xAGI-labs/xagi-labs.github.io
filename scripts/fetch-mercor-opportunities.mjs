import { readFile, writeFile } from 'node:fs/promises'

const destination = new URL('../public/data/mercor-opportunities.json', import.meta.url)
const fields = ['listingId', 'title', 'rateMin', 'rateMax', 'payRateFrequency', 'location', 'workArrangement', 'eligibleResidenceLocation', 'ineligibleResidenceLocation', 'eligibleLocation', 'ineligibleLocation', 'listingDomain', 'postedAt', 'hoursPerWeek']
try {
  const response = await fetch('https://work.mercor.com/explore', { signal: AbortSignal.timeout(20000) })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const match = (await response.text()).match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/)
  if (!match) throw new Error('Public listing format changed')
  const queries = JSON.parse(match[1]).props?.pageProps?.dehydratedState?.queries
  const raw = queries?.find((query) => query.queryKey?.includes('listingsPublicQuery'))?.state?.data?.listings
  if (!Array.isArray(raw) || !raw.length) throw new Error('Public feed empty')
  const listings = raw.filter((role) => role.status === 'active' && !role.disableApplications && !role.isPrivate)
    .filter((role) => typeof role.title === 'string' && /^list_[\w-]+$/.test(role.listingId))
    .map((role) => Object.fromEntries(fields.map((field) => [field, role[field] ?? null])))
  if (!listings.length) throw new Error('No valid public listings')
  await writeFile(destination, `${JSON.stringify({ fetchedAt: new Date().toISOString(), source: 'https://work.mercor.com/explore', listings }, null, 2)}\n`)
  console.log(`Mercor: refreshed ${listings.length} public opportunities`)
} catch (error) {
  const snapshot = JSON.parse(await readFile(destination, 'utf8'))
  if (!snapshot.listings?.length) throw error
  console.warn(`Mercor refresh failed (${error.message}); retaining ${snapshot.listings.length} listings checked ${snapshot.fetchedAt}`)
}
