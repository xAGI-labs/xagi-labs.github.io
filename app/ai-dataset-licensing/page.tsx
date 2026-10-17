import DataServicePage from "@/components/data-service-page"

const content = {
  "title": "AI Dataset Licensing",
  "intro": "Establish the source and the permitted use before committing to a dataset.",
  "description": "Discuss AI dataset licensing requirements with xAGI Labs: provenance, training and evaluation uses, exclusivity, restrictions, metadata and delivery acceptance.",
  "sections": [
    [
      "Understand the source",
      "Ask who controls the material, how it was collected and what evidence supports its proposed use. Public access, a download link or a research release alone does not establish commercial training rights."
    ],
    [
      "Define the intended use",
      "Identify training, fine-tuning and evaluation needs alongside exclusivity, redistribution, retention, geography and any applicable restrictions. Specific rights must be confirmed in the relevant agreement and source records."
    ],
    [
      "Review quality and delivery together",
      "Align representative samples, metadata, acceptance criteria and the data being licensed. Do not assume that a technically useful dataset includes all the rights required for your product."
    ]
  ],
  "checklist": [
    "Source identity and provenance evidence",
    "Training, evaluation and derivative-model use requirements",
    "Exclusivity, redistribution and retention constraints",
    "Dataset specification, quality criteria and acceptance process"
  ]
}

export const metadata = {
 title: content.title,
 description: content.description,
 alternates: { canonical: "https://xagi.in/ai-dataset-licensing/" },
 openGraph: { title: content.title + " | xAGI Labs", description: content.description, url: "https://xagi.in/ai-dataset-licensing/" },
}

export default function Page() { return <DataServicePage {...content} path="/ai-dataset-licensing/" /> }
