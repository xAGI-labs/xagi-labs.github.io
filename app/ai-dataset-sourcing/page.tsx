import DataServicePage from "@/components/data-service-page"

const content = {
  "title": "AI Dataset Sourcing",
  "intro": "A sourcing brief built around the model, the task and the coverage you need.",
  "description": "Discuss specialized AI training data sourcing with xAGI Labs. Define model requirements, assess source access, and scope quality, delivery and licensing.",
  "sections": [
    [
      "Start with a model requirement",
      "Specify the model capability, training or evaluation task, modality, languages and environments. A precise gap is more useful than a request for more data."
    ],
    [
      "Choose the sourcing route",
      "Consider existing licensed assets, newly commissioned collection or a combination. Each route depends on access, source evidence, quality requirements and permitted use. Availability is established per project, not implied by this page."
    ],
    [
      "Scope a representative pilot",
      "Define the sample composition, metadata, formats, rejection rules and acceptance checks before discussing larger quantities. Agree what happens when a source does not meet the brief."
    ]
  ],
  "checklist": [
    "Model and task; training, fine-tuning or evaluation",
    "Modality, languages, demographics and capture conditions",
    "Quantity and quality acceptance criteria",
    "Delivery formats, timing and permitted-use requirements"
  ]
}

export const metadata = {
 title: content.title,
 description: content.description,
 alternates: { canonical: "https://xagi.in/ai-dataset-sourcing/" },
 openGraph: { title: content.title + " | xAGI Labs", description: content.description, url: "https://xagi.in/ai-dataset-sourcing/" },
}

export default function Page() { return <DataServicePage {...content} path="/ai-dataset-sourcing/" /> }
