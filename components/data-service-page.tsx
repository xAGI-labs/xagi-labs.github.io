import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import BookingCta from "@/components/home-page/booking-cta"
import styles from "@/components/home-page/data-home.module.css"

type Content = { title: string; intro: string; description: string; path: string; sections: string[][]; checklist: string[] }

export default function DataServicePage({ title, intro, description, path, sections, checklist }: Content) {
  const schema = { "@context": "https://schema.org", "@type": "Service", name: title, description, url: `https://xagi.in${path}`, provider: { "@type": "Organization", name: "xAGI Labs", url: "https://xagi.in/" } }
  return <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className={styles.header}><div className={styles.wrap}><Link href="/" className={styles.brand}>xAGI Labs</Link><Link href="/#dataset-brief" className={styles.headerCta}>Discuss your dataset <ArrowUpRight size={16} aria-hidden="true" /></Link></div></header>
    <main className={`${styles.wrap} ${styles.section}`}>
      <Link href="/" className={styles.textLink}><ArrowLeft size={16} aria-hidden="true" /> Data sourcing & licensing</Link>
      <div className={styles.serviceHero}><p className={styles.eyebrow}>xAGI LABS / DATA SERVICES</p><h1>{title}</h1><p className={styles.lead}>{intro}</p><p className={styles.note}>Feasibility, availability and permitted use are established for each project.</p></div>
      <div className={styles.quality}><div>{sections.map(([heading, body]) => <section key={heading} className={styles.serviceSection}><h2>{heading}</h2><p className={styles.intro}>{body}</p></section>)}</div><aside className={styles.briefSheet}><p className={styles.eyebrow}>WHAT TO INCLUDE IN YOUR BRIEF</p><ul className={styles.serviceChecklist}>{checklist.map(item => <li key={item}>{item}</li>)}</ul><Link href="/#dataset-brief" className={styles.primary}>Prepare a brief <ArrowUpRight size={16} aria-hidden="true" /></Link><div className={styles.serviceBooking}><BookingCta placement={path} eventName="dataset_discussion_click" className={styles.textLink}>Book a discussion <ArrowUpRight size={16} aria-hidden="true" /></BookingCta></div></aside></div>
    </main>
    <footer className={styles.footer}><nav className={styles.wrap} aria-label="Related services"><Link href="/ai-dataset-sourcing/">Dataset sourcing</Link><Link href="/custom-ai-data-collection/">Custom collection</Link><Link href="/ai-dataset-licensing/">Data licensing</Link><Link href="/blog/">Blog & insights</Link><Link href="/services/">Engineering services</Link></nav><div className={`${styles.wrap} ${styles.footerBottom}`}><span>© {new Date().getFullYear()} xAGI Labs</span><a href="mailto:saurav@xagi.in">saurav@xagi.in</a></div></footer>
  </div>
}
