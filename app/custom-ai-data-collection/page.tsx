import DataServicePage from "@/components/data-service-page"

const content = {
  "title": "Custom AI Data Collection",
  "intro": "When the right signal needs to be collected, start with a clear protocol.",
  "description": "Scope custom AI data collection with xAGI Labs. Discuss participant criteria, capture conditions, annotation, quality acceptance and rights requirements.",
  "sections": [
    [
      "Define who and what to capture",
      "Scope participant or source eligibility, language and dialect requirements, tasks, environments and recording conditions. Recruitment and source access must be feasible before collection is committed."
    ],
    [
      "Agree the collection protocol",
      "Specify instructions, capture setup, metadata, annotation rules, participant permissions and review responsibilities. Use a pilot to identify ambiguous instructions and missing coverage."
    ],
    [
      "Accept against the brief",
      "Agree checks for usable records, completeness, duplicates, annotation consistency, privacy handling and rejected material. Quantities, timing and commercial terms are project-specific."
    ]
  ],
  "checklist": [
    "Participant and source eligibility",
    "Capture conditions, tasks and metadata schema",
    "Consent and permitted-use evidence required",
    "Pilot acceptance criteria and delivery format"
  ]
}

export const metadata = {
 title: content.title,
 description: content.description,
 alternates: { canonical: "https://xagi.in/custom-ai-data-collection/" },
 openGraph: { title: content.title + " | xAGI Labs", description: content.description, url: "https://xagi.in/custom-ai-data-collection/" },
}

export default function Page() { return <DataServicePage {...content} path="/custom-ai-data-collection/" /> }
