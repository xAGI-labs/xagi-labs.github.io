export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "xAGI Labs",
    "url": "https://xagi.in",
    "logo": "https://xagi.in/xagi-icon.png",
    "description": "AI-First Development Agency building production-ready AI systems",
    "email": "saurav@xagi.in",
    "telephone": "+1-510-000-0000",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to build an AI product?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically deliver production-ready AI systems in 4-6 weeks, from prototype to full-scale applications."
        }
      },
      {
        "@type": "Question",
        "name": "What AI technologies do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in LLMs (GPT-4, Claude, Gemini), AI Agents, RAG systems, and custom machine learning solutions using frameworks like LangChain and LlamaIndex."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide AI consulting services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer strategic AI consulting to help businesses identify opportunities, plan AI adoption, and implement AI solutions effectively."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve various industries including SaaS, E-commerce, Healthcare, FinTech, Education, Marketing, and Government sectors."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Link to llms.txt for AI discoverability */}
      <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt - AI-readable site information" />
    </>
  )
}
