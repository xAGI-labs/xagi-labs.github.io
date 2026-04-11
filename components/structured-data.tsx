export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "logo": "https://xagi.in/xagi-icon.png",
    "description": "AI/ML and platform engineering consulting for production systems, agent workflows, voice AI, and applied machine learning",
    "email": "saurav@xagi.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Artistic Pl",
      "addressLocality": "Hayward",
      "addressRegion": "CA",
      "postalCode": "94541",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/xAGI-labs",
      "https://twitter.com/xAGILabs",
      "https://www.linkedin.com/company/xagi-labs"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Saurav Kumar",
        "jobTitle": "CEO & Co-Founder"
      },
      {
        "@type": "Person",
        "name": "Udit Kumar",
        "jobTitle": "CTO & Co-Founder"
      }
    ],
    "foundingDate": "2024",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 2,
      "maxValue": 10
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "description": "AI/ML and platform engineering consulting for production systems, agent workflows, voice AI, and applied machine learning",
    "publisher": {
      "@type": "Organization",
      "name": "xAGI Labs"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://xagi.in/portfolio?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Link to llms.txt for AI discoverability */}
      <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt - AI-readable site information" />
    </>
  )
}
