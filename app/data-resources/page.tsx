import DataGrowthPage from "@/components/data-growth-page"
import Link from "next/link"
import styles from "@/components/home-page/data-home.module.css"

export const metadata = {"title": "AI data guides and practical tools", "description": "Prepare a better sourcing conversation with focused guides, a brief builder and a readiness checklist.", "alternates": {"canonical": "https://xagi.in/data-resources/"}, "openGraph": {"title": "AI data guides and practical tools | xAGI Labs", "description": "Prepare a better sourcing conversation with focused guides, a brief builder and a readiness checklist.", "url": "https://xagi.in/data-resources/"}}
export default function Page() { return <DataGrowthPage title="AI data guides and practical tools" intro="Prepare a better sourcing conversation with focused guides, a brief builder and a readiness checklist."><div className={styles.resourceRows}>{[
["01","Build a dataset brief","Turn the model task, coverage and acceptance criteria into a downloadable brief.","/dataset-brief/"],
["02","Check dataset readiness","Identify missing source, permission and quality evidence before a licensing discussion.","/dataset-readiness-checklist/"],
["03","Speech & audio","Plan language coverage, recording conditions and transcript review.","/speech-training-data/"],
["04","Video & multimodal","Specify scenes, capture conditions, permissions and temporal quality.","/multimodal-training-data/"],
["05","Expert evaluation","Define reviewer criteria, rubrics and representative evaluation examples.","/expert-evaluation-data/"],
["06","Data partnerships","Understand what to prepare when you control a potential source.","/data-partnerships/"]
].map(([n,t,d,url]) => <article key={url}><span>{n}</span><div><h2><Link href={url}>{t} ↗</Link></h2><p>{d}</p></div></article>)}</div><section className={styles.growthEditorial}><h2>Follow the work</h2><p>Read <Link href="/projects/haryanvi-tts/">Haryanvi speech research</Link> for a concrete technical workstream, or explore the <Link href="/blog/">existing blog</Link> and <Link href="/ai-news/">AI news archive</Link>. Research is presented with its limits; it does not imply a commercially available corpus.</p><p><a href="/data-resources.xml">Subscribe to the resource RSS feed →</a></p><p><a href="https://www.linkedin.com/company/x-agi/">Follow xAGI Labs on LinkedIn ↗</a></p></section></DataGrowthPage> }
