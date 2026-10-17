import type { Metadata } from "next"
import HomePage from "@/components/home-page"

const title = "AI Training Data Sourcing & Licensing | xAGI Labs"
const description = "Source, commission and license specialized AI training data with xAGI Labs. Scope speech, video, multimodal and expert data around your model requirements."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: ["AI training data sourcing", "AI dataset licensing", "custom AI data collection", "speech training data"],
  alternates: { canonical: "https://xagi.in/" },
  openGraph: { title, description, type: "website", url: "https://xagi.in/", images: ["/xagi-icon.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/xagi-icon.png"], creator: "@xAGILabs" },
}

export default function Home() { return <HomePage /> }
