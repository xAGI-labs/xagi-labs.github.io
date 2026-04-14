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
      "Custom AI Solutions",
      "LLM Applications",
      "RAG Systems",
      "AI Automation"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Product Development",
            "description": "End-to-end AI application development from prototype to production"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consulting",
            "description": "Strategic AI adoption and implementation guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LLM Integration",
            "description": "Custom GPT-4, Claude, and OpenAI integrations"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "description": "AI-First Development Agency building production-ready AI systems",
    "publisher": {
      "@type": "Organization",
      "name": "xAGI Labs"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* Link to llms.txt for AI discoverability */}
      <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt - AI-readable site information" />
    </>
  )
}
