import Script from "next/script"

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export default function GoogleTag() {
  const ids = Array.from(new Set([gaMeasurementId, googleAdsId].filter(Boolean)))

  if (ids.length === 0) {
    return null
  }

  const primaryId = ids[0]

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`} strategy="afterInteractive" />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${ids.map((id) => `gtag('config', '${id}', { page_path: window.location.pathname });`).join("\n")}
        `}
      </Script>
    </>
  )
}
