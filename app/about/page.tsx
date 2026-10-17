import Link from "next/link"
import DataGrowthPage from "@/components/data-growth-page"
import styles from "@/components/home-page/data-home.module.css"
export const metadata = { title: "About xAGI Labs", description: "The team and official channels behind xagi.in, focused on AI training data sourcing, collection scoping and licensing.", alternates: { canonical: "https://xagi.in/about/" } }
export default function AboutPage() {
 return <DataGrowthPage title="About xAGI Labs" intro="AI training data sourcing, custom collection scoping and licensing, at xagi.in."><div className={styles.growthEditorial}>
 <section><h2>One team, clear points of contact</h2><p>xAGI Labs is the team behind this website. Our official LinkedIn company profile also uses the name xAGI Data Labs. Use the website and profiles linked here to identify us; similar names alone do not establish an affiliation.</p><p>Saurav Kumar and Udit Kumar are co-founders. See the <Link href="/team/">team page</Link> for their roles and public professional profiles. For a data project, start with the task, coverage, quality criteria and intended use.</p></section>
 <section><h2>What we scope</h2><p>We discuss <Link href="/ai-dataset-sourcing/">dataset sourcing</Link>, <Link href="/custom-ai-data-collection/">custom collection</Link> and <Link href="/ai-dataset-licensing/">licensing</Link> for speech, multimodal and domain-specific model tasks. Feasibility, source access, participant permissions, specialist availability and delivery terms are confirmed for each project. These pages are not an inventory catalog.</p></section>
 <section><h2>Official channels</h2><ul><li><a href="https://www.linkedin.com/company/x-agi/">LinkedIn: xAGI Data Labs</a></li><li><a href="https://github.com/xAGI-labs">GitHub: xAGI-labs</a></li><li><a href="https://twitter.com/xAGILabs">X: @xAGILabs</a></li><li><a href="mailto:saurav@xagi.in">Email: saurav@xagi.in</a></li></ul></section>
 <section><h2>Research and engineering</h2><p>Our <Link href="/projects/haryanvi-tts/">Haryanvi speech work</Link> is research in progress, with its limits documented. Existing <Link href="/services/">engineering services</Link>, <Link href="/voice-ai/">voice AI</Link> and <Link href="/autoclaw/">AutoClaw</Link> pages remain available for their respective workflows.</p></section>
 </div></DataGrowthPage>
}
