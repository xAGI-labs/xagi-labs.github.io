import type { Metadata } from "next"
import TutorPage from "@/components/tutor-page";

export const metadata: Metadata = {
  title: "AI Tutor",
  description:
    "AI Tutor by xAGI Labs helps coaching institutes and education platforms deliver adaptive learning, AI-generated content, and 24/7 student support.",
  alternates: {
    canonical: "https://xagi.in/tutor",
  },
}

export default function Page() {
  return <TutorPage />;
}
