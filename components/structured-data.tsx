export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "logo": "https://xagi.in/xagi-icon.png",
    "description": "AI-First Development Agency building production-ready AI systems",
    "email": "saurav@xagi.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/xAGI-labs",
      "https://twitter.com/xAGILabs"
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
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "description": "AI-First Development Agency specializing in AI products, agents, and automation",
    "priceRange": "$$$",
    "serviceType": [
      "AI Development",
      "AI Consulting",
      "Machine Learning",
      "AI Agent Development",
      "Custom AI Solutions"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
