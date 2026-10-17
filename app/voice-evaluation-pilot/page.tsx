import Link from "next/link"
import DataGrowthPage from "@/components/data-growth-page"
import styles from "@/components/home-page/data-home.module.css"

const title = "Regional-language voice evaluation pilot"
const description = "Scope a paid voice evaluation pilot for dialect, code-switching and acoustic failures, with a reviewable rubric and targeted data sourcing plan."
const brief = "/dataset-brief/?offer=voice-evaluation#intake"
export const metadata = {
  title, description,
  alternates: { canonical: "https://xagi.in/voice-evaluation-pilot/" },
  openGraph: { title: `${title} | xAGI Labs`, description, url: "https://xagi.in/voice-evaluation-pilot/" },
}

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: title, serviceType: "Voice model evaluation pilot scoping", description, url: "https://xagi.in/voice-evaluation-pilot/", provider: { "@type": "Organization", name: "xAGI Labs", url: "https://xagi.in/" } }
  return <DataGrowthPage title={title} intro="Find out where your voice model fails before commissioning more data. Start with one task, a defined language or dialect, and conditions that matter to your users.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className={styles.actions}><Link className={styles.primary} href={brief}>Scope a voice evaluation pilot ↗</Link><Link className={styles.textLink} href="/dataset-readiness-checklist/?for=voice-evaluation#readiness-heading">Check what to prepare →</Link></div>
    <p className={styles.note}>A scoped paid engagement. Sample access, reviewers, rights, price and timing are confirmed in a proposal before work begins.</p>
    <section className={styles.pilotScope} aria-labelledby="pilot-fit"><div><p className={styles.eyebrow}>START WITH A SPECIFIC FAILURE</p><h2 id="pilot-fit">A clear question.<br />An inspectable result.</h2><p>For speech and voice teams investigating dialect coverage, code-switching, noisy audio or conversation breakdowns. Bring a high-level description of the failure; no raw recordings are needed for the first discussion.</p></div><div><h3>The first scope should answer</h3><ul><li>Which model task and language or dialect are we evaluating?</li><li>Which speakers, devices and difficult conditions must be represented?</li><li>What rubric and acceptance checks make the findings useful?</li><li>What source permissions and secure review process are required?</li></ul></div></section>
    <section aria-labelledby="pilot-delivery"><p className={styles.eyebrow}>AGREE THE DELIVERABLES</p><h2 id="pilot-delivery">From failures to a data decision.</h2><ol className={styles.pilotDeliverables}>{[
      ["Evaluation specification", "A written task, coverage matrix, sample design and scoring rubric, agreed before evaluation begins."],
      ["Representative sample review", "An agreed sample with documented source permissions, speaker separation and duplicate checks. Size and access depend on feasibility and rights review."],
      ["Error analysis", "Reviewer findings grouped by failure type, with the method, scoring decisions and limitations documented."],
      ["Targeted sourcing brief", "A specification for data that could address the observed gaps, with proposed quality checks and a next-step recommendation."],
    ].map(([heading, body], i) => <li key={heading}><span>0{i + 1}</span><div><h3>{heading}</h3><p>{body}</p></div></li>)}</ol></section>
    <div className={styles.growthEditorial}><section><h2>Inspect how we approach speech data</h2><p>Our <Link href="/projects/haryanvi-tts/">Haryanvi speech research</Link> documents transcript audits and bounded training workflows. It is research in progress, not a stocked commercial corpus or a completed customer pilot.</p><p>Review the <a href="/data/voice-evaluation-pilot-brief.md" download>pilot brief template</a>, <a href="/data/evaluation-rubric-example.md" download>worked evaluation rubric</a> and <a href="/data/speech-datasheet-example.md" download>speech datasheet example</a>. These are planning examples, not customer results.</p></section><section><h2>A pilot informs the next investment</h2><p>Start with a requirements discussion. If the source, reviewers and evaluation approach are feasible, we prepare a paid scope with deliverables, acceptance criteria, pricing and timing. After review, decide whether targeted collection, annotation or another evaluation is justified. No accuracy gain or dataset availability is promised before that work.</p></section></div>
    <div className={styles.actions}><Link className={styles.primary} href={brief}>Scope my voice evaluation pilot ↗</Link><Link className={styles.textLink} href="/speech-training-data/">Explore speech data sourcing →</Link></div>
  </DataGrowthPage>
}
