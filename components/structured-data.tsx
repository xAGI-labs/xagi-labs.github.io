export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "logo": "https://xagi.in/xagi-icon.png",
    "description": "Voice agent implementation partner for customer support, collections, admissions, booking, and outbound qualification workflows.",
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
    "description": "Voice agent implementation and AI call center automation for customer operations teams.",
    "priceRange": "$$$",
    "serviceType": [
      "Voice Agent Development",
      "AI Call Center Automation",
      "Customer Support Automation",
      "Outbound Voice Workflows",
      "Collections Automation",
      "Admissions Automation",
      "AI Operations Consulting",
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
            "name": "Voice Agent Implementation",
            "description": "End-to-end deployment of AI voice agents for high-volume call workflows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Call Operations Strategy",
            "description": "Workflow design, rollout planning, and operational guidance for voice-agent deployments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Voice Workflow Integration",
            "description": "CRM, telephony, knowledge-base, and automation integration for voice operations"
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
    "description": "Voice agents for customer support automation and high-volume call workflows",
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
