import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import BookingCta from "./booking-cta"
import PaidTrafficTracking from "./paid-traffic-tracking"
import DatasetBrief from "./dataset-brief"
import styles from "./data-home.module.css"

const modalities = [
  { number: "01", title: "Speech & audio", detail: "Language, accent, conversation and acoustic requirements for speech and voice models.", focus: "ASR · voice AI · evaluation" },
  { number: "02", title: "Video & multimodal", detail: "Source access and capture specifications for visual, temporal and cross-modal learning.", focus: "Video · embodied AI · robotics" },
  { number: "03", title: "Expert & domain data", detail: "Specialist knowledge, task definitions and review criteria for focused model capabilities.", focus: "Post-training · reasoning · evaluation" },
]
const steps = [
  ["Define the signal", "Start with the model, task, coverage gaps and acceptance criteria. Agree what useful data looks like before discussing volume."],
  ["Assess the source", "Evaluate existing assets or a custom collection route. Establish access, participant requirements and the evidence needed for rights review."],
  ["Agree the delivery", "Scope a representative pilot, quality checks, metadata, formats and license terms before committing to a larger program."],
]
const faqs = [
  ["Do you sell off-the-shelf datasets?", "Start with your requirements. Availability and commercial rights need to be established for each source. This website is not a live inventory catalog, and a modality listed here is not a promise of stock."],
  ["Can you source a specific language or domain?", "We can discuss the requirement and assess a sourcing or collection route. Feasibility depends on source access, participant criteria, rights, quality requirements and timing. Coverage is confirmed during scoping."],
  ["Can we review a sample?", "Include your sample and evaluation requirements in the brief. A representative sample or pilot is scoped when a suitable source and permitted use have been established; sample availability is not guaranteed."],
  ["What does licensing cover?", "Permitted training and evaluation uses, exclusivity, redistribution, retention and other restrictions are defined for the specific source and agreement. We do not assume that publicly accessible content is commercially licensable."],
]

export default function HomePage() {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: "AI training data sourcing and licensing", serviceType: ["AI dataset sourcing", "Custom AI data collection", "AI dataset licensing"], url: "https://xagi.in/", provider: { "@type": "Organization", name: "xAGI Labs", url: "https://xagi.in/" }, description: "Requirements-led sourcing, collection scoping and licensing for specialized AI training data.", areaServed: "Worldwide" }
  return <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <PaidTrafficTracking />
    <a className={styles.skip} href="#main-content">Skip to content</a>
    <header className={styles.header}><div className={styles.wrap}>
      <Link href="/" className={styles.brand} aria-label="xAGI Labs home"><Image src="/xagi-icon.png" width={30} height={30} alt="" /><span>xAGI Labs<span className={styles.brandNote}>DATA ACQUISITION & LICENSING</span></span></Link>
      <nav className={styles.nav} aria-label="Main navigation"><a href="#modalities">Data</a><a href="#process">Our approach</a><a href="#quality">Quality & rights</a><Link href="/blog/">Research & insights</Link></nav>
      <a href="#dataset-brief" className={styles.headerCta}>Discuss your dataset <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div></header>
    <main id="main-content">
      <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="hero-heading">
        <div><p className={styles.eyebrow}>AI TRAINING DATA. SOURCED WITH PURPOSE.</p>
          <h1 id="hero-heading">The right data.<br /><span>For your next model.</span></h1>
          <p className={styles.lead}>Source, commission and license specialized data for the capabilities you want to build.</p>
          <p className={styles.intro}>xAGI Labs works with AI teams to turn a model requirement into a defined sourcing brief — across speech, video, multimodal and expert data.</p>
          <div className={styles.actions}><a href="#dataset-brief" className={styles.primary}>Discuss your dataset <ArrowUpRight size={18} aria-hidden="true" /></a><a href="#process" className={styles.textLink}>See how we work <ArrowDown size={16} aria-hidden="true" /></a></div>
          <p className={styles.heroNote}>Requirements first. Source availability and rights confirmed during scoping.</p>
        </div>
        <aside className={styles.briefSheet} aria-label="Dataset scoping framework">
          <div className={styles.sheetTop}><span>THE SOURCING BRIEF</span><span>01 — 04</span></div>
          <h2>Better data starts<br />with a better question.</h2>
          <div className={styles.signal} aria-hidden="true">{Array.from({ length: 46 }, (_, i) => <i key={i} style={{ height: `${12 + ((i * 19 + 11) % 60)}px` }} />)}</div>
          <dl>{[["Model & task", "What should the model learn?"], ["Coverage", "Which people, places and conditions?"], ["Quality", "How will you accept or reject it?"], ["Rights", "What uses must the license permit?"]].map(([a,b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
          <p>A scoping framework, not a dataset listing.</p>
        </aside>
      </section>
      <div className={styles.audience}><div className={styles.wrap}><span>BUILT AROUND YOUR MODEL</span><p>Frontier AI labs <span> / </span> Speech & voice teams <span> / </span> Multimodal & robotics <span> / </span> Enterprise AI</p></div></div>
      <section id="modalities" className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>THE DATA YOU NEED</p><h2>Start with the gap.<br /><span>Then find the source.</span></h2><p>Different models need different signals. We scope the modality, coverage and collection conditions against your task.</p></div>
        <div className={styles.modalities}>{modalities.map(m => <article key={m.number}><span className={styles.number}>{m.number}</span><div><h3>{m.title}</h3><p>{m.detail}</p></div><span className={styles.focus}>{m.focus}</span></article>)}</div>
        <p className={styles.note}>These are sourcing areas, not a stocked catalog. Access, volume, timing and permitted use are evaluated for each brief.</p>
        <Link href="/ai-dataset-sourcing/" className={styles.textLink}>Explore dataset sourcing <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
      <section id="process" className={styles.process}><div className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>FROM REQUIREMENT TO DATA PROGRAM</p><h2>A clear brief.<br /><span>A considered sourcing route.</span></h2></div>
        <ol className={styles.steps}>{steps.map(([title,body],i) => <li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
        <div className={styles.processLinks}><Link href="/custom-ai-data-collection/">Custom collection <ArrowUpRight size={16} aria-hidden="true" /></Link><Link href="/ai-dataset-licensing/">Licensing approach <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
      </div></section>
      <section id="quality" className={`${styles.wrap} ${styles.section} ${styles.quality}`}>
        <div><p className={styles.eyebrow}>EVIDENCE BEFORE ASSUMPTIONS</p><h2>Quality and rights<br /><span>belong in the brief.</span></h2><p className={styles.intro}>Useful training data needs more than a file transfer. Make the source, the checks and the permitted use part of the conversation from the start.</p><Link href="/ai-dataset-licensing/" className={styles.textLink}>Review the licensing questions <ArrowRight size={17} aria-hidden="true" /></Link></div>
        <dl className={styles.qualityList}>{[["Provenance", "Source identity, collection context and the evidence available for review."], ["Quality criteria", "Coverage, annotation guidelines, rejection rules and representative evaluation samples."], ["Usage scope", "Training and evaluation rights, restrictions, exclusivity and retention requirements."], ["Delivery", "Formats, metadata, acceptance checks and the scope of a pilot."]].map(([a,b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
      </section>
      <section className={`${styles.wrap} ${styles.research}`}><p className={styles.eyebrow}>FROM THE LAB</p><div><h2>Technical work.<br />Clear limits.</h2><p>Our Haryanvi speech research explores transcript audits and reproducible training workflows. It is research in progress, not a commercial corpus listing or a claim of production readiness.</p><Link href="/projects/haryanvi-tts/" className={styles.textLink}>Read the speech research <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section>
      <section id="dataset-brief" className={styles.contactSection}><div className={`${styles.wrap} ${styles.section} ${styles.contactGrid}`}>
        <div><p className={styles.eyebrow}>YOUR NEXT DATASET</p><h2>Tell us what<br /><span>your model needs.</span></h2><p className={styles.intro}>Share the task, coverage and constraints. Start a conversation about the right sourcing route.</p><BookingCta placement="data_brief" eventName="dataset_discussion_click" className={styles.textLink}>Prefer a call? Book a discussion <ArrowUpRight size={16} aria-hidden="true" /></BookingCta></div>
        <DatasetBrief />
      </div></section>
      <section className={`${styles.wrap} ${styles.section} ${styles.faq}`}><div><p className={styles.eyebrow}>BEFORE WE TALK</p><h2>A few useful<br />questions.</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
    </main>
    <footer className={styles.footer}><div className={styles.wrap}><div><Link href="/" className={styles.footerBrand}>xAGI Labs</Link><p>AI training data sourcing & licensing.</p><a href="mailto:saurav@xagi.in">saurav@xagi.in <ArrowUpRight size={14} aria-hidden="true" /></a></div><nav aria-label="Data services"><span>DATA SERVICES</span><Link href="/ai-dataset-sourcing/">Dataset sourcing</Link><Link href="/custom-ai-data-collection/">Custom collection</Link><Link href="/ai-dataset-licensing/">Data licensing</Link></nav><nav aria-label="Research and existing work"><span>EXPLORE THE LAB</span><Link href="/blog/">Blog & insights</Link><Link href="/ai-news/">AI news</Link><Link href="/portfolio/">Projects</Link><Link href="/voice-ai/">Voice AI</Link><Link href="/services/">Engineering services</Link><Link href="/autoclaw/">AutoClaw</Link></nav></div><div className={`${styles.wrap} ${styles.footerBottom}`}><span>© {new Date().getFullYear()} xAGI Labs</span><span>Specific requirements. Thoughtful sourcing.</span></div></footer>
  </div>
}
