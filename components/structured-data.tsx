export default function StructuredData() {
  const organization = { "@context": "https://schema.org", "@type": "Organization", "@id": "https://xagi.in/#organization", name: "xAGI Labs", url: "https://xagi.in/", logo: "https://xagi.in/xagi-icon.png", description: "AI training data sourcing, collection scoping and licensing.", email: "saurav@xagi.in", sameAs: ["https://github.com/xAGI-labs", "https://twitter.com/xAGILabs", "https://www.linkedin.com/company/x-agi"] }
  const website = { "@context": "https://schema.org", "@type": "WebSite", name: "xAGI Labs", url: "https://xagi.in/", publisher: { "@id": "https://xagi.in/#organization" } }
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt - AI-readable site information" />
  </>
}
