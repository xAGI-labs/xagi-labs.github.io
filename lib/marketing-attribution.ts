const ATTRIBUTION_STORAGE_KEY = "xagi-paid-attribution"
const ATTRIBUTION_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid",
  "msclkid",
] as const

type AttributionKey = (typeof ATTRIBUTION_KEYS)[number]

export type AttributionPayload = Partial<Record<AttributionKey, string>> & {
  landing_path?: string
  landing_timestamp?: string
  referrer?: string
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

function hasWindow() {
  return typeof window !== "undefined"
}

function safeReferrer() {
  if (typeof document === "undefined") {
    return ""
  }

  return document.referrer || ""
}

function readStoredAttribution(): AttributionPayload {
  if (!hasWindow()) {
    return {}
  }

  const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)

  if (!raw) {
    return {}
  }

  try {
    return JSON.parse(raw) as AttributionPayload
  } catch {
    return {}
  }
}

export function captureAttribution(): AttributionPayload {
  if (!hasWindow()) {
    return {}
  }

  const params = new URLSearchParams(window.location.search)
  const stored = readStoredAttribution()
  const next: AttributionPayload = { ...stored }

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key)
    if (value && !next[key]) {
      next[key] = value
    }
  }

  if (!next.landing_path) {
    next.landing_path = `${window.location.pathname}${window.location.search}`
  }

  if (!next.landing_timestamp) {
    next.landing_timestamp = new Date().toISOString()
  }

  if (!next.referrer) {
    const referrer = safeReferrer()
    if (referrer) {
      next.referrer = referrer
    }
  }

  window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(next))
  return next
}

export function buildAttributedUrl(rawUrl: string) {
  if (!hasWindow()) {
    return rawUrl
  }

  const url = new URL(rawUrl)
  const attribution = captureAttribution()

  for (const key of ATTRIBUTION_KEYS) {
    const value = attribution[key]
    if (value && !url.searchParams.has(key)) {
      url.searchParams.set(key, value)
    }
  }

  if (attribution.landing_path && !url.searchParams.has("landing_path")) {
    url.searchParams.set("landing_path", attribution.landing_path)
  }

  return url.toString()
}

export function trackMarketingEvent(
  eventName: string,
  params: Record<string, unknown> = {},
) {
  if (!hasWindow()) {
    return
  }

  const attribution = captureAttribution()
  const eventPayload = {
    ...params,
    ...attribution,
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...eventPayload,
  })

  if (window.gtag) {
    window.gtag("event", eventName, eventPayload)
  }

  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const googleAdsConversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL

  if (eventName === "book_demo_click" && googleAdsId && googleAdsConversionLabel && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
      ...eventPayload,
    })
  }
}
