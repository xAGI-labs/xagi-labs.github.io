"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cormorant_Garamond } from "next/font/google"
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, Moon, Phone, Plus, Sun, Workflow, X } from "lucide-react"
import { useTheme } from "next-themes"
import BookingCta from "@/components/home-page/booking-cta"
import PaidTrafficTracking from "@/components/home-page/paid-traffic-tracking"
import styles from "./home.module.css"

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-editorial",
})

const agents = [
  { number: "01", category: "CUSTOMER EXPERIENCE", name: "Conversations", role: "VOICE & SUPPORT AGENTS", description: "Give every customer a clear next step. Handle routine questions, capture intent, and bring your team in when a conversation needs a human.", features: ["Inbound calls and customer support", "Appointment and enquiry workflows", "Context-rich handoffs to your team"], href: "/voice-ai", link: "Explore voice AI", icon: Phone },
  { number: "02", category: "SALES & GROWTH", name: "Connections", role: "RESEARCH & FOLLOW-UP AGENTS", description: "Keep opportunities moving. Turn scattered account information into useful research, qualified leads, and follow-up your sales team can act on.", features: ["Account research and lead qualification", "CRM updates and follow-up preparation", "Review and approval before outreach"], href: "/services", link: "Explore growth automation", icon: ArrowUpRight },
  { number: "03", category: "EVERYDAY OPERATIONS", name: "Flow", role: "WORKFLOW & KNOWLEDGE AGENTS", description: "Give repetitive work a better home. Connect documents, knowledge, and internal tools so your people can focus on the decisions that matter.", features: ["Document extraction and request routing", "Internal copilots grounded in your data", "Reporting, review queues, and audit trails"], href: "/ai-agents-erp", link: "Explore workflow automation", icon: Workflow },
]

const examples = [
  { label: "Voice", title: "Customer conversation", subtitle: "Voice & support agent", request: "Can I book a consultation for next week?", reply: "Of course. What day works best for you? I’ll check the available times.", result: "Intent captured", detail: "Appointment enquiry → booking workflow", icon: Phone },
  { label: "Growth", title: "A warmer introduction", subtitle: "Research & follow-up agent", request: "Find the right context before our team follows up with this lead.", reply: "I’ve gathered the company context and prepared a follow-up for your review.", result: "Ready for review", detail: "Account research → sales review queue", icon: ArrowUpRight },
  { label: "Operations", title: "Less work between tools", subtitle: "Workflow & knowledge agent", request: "Pull the key details from this request and send it to the right team.", reply: "The details are structured. I’ve flagged the missing information for your team.", result: "Request organised", detail: "Incoming document → operations queue", icon: Workflow },
]

const faqs = [
  ["Where should we start?", "Bring one workflow your team repeats every week. We’ll map the inputs, decisions, tools, and handoffs, then agree on a focused pilot and a useful measure of success."],
  ["Do we need to replace our existing software?", "We build around the tools you already use. During discovery, we check API access, data quality, permissions, and integration limits before confirming what can be automated."],
  ["What happens when an agent needs help?", "We define approval and escalation rules with your team. Uncertain answers, exceptions, and sensitive actions can be routed to a person with the relevant context attached."],
  ["Can you build something specific to our business?", "Yes. xAGI Labs builds custom AI agents, internal copilots, workflow integrations, and AI product features. The scope starts with your business process and the systems it depends on."],
  ["How long does a rollout take, and what does it cost?", "Timing and pricing depend on the workflow, integrations, data readiness, and review requirements. We agree on scope, milestones, running costs, and success criteria before implementation."],
  ["How do you approach data access and reliability?", "We scope access to the workflow, agree on data handling requirements, and build in logging, evaluation, and human review. Deployment and security requirements are defined with your team before launch."],
]

const navigation = [["The AI team", "#agents"], ["How it works", "#process"], ["Integrations", "#integrations"], ["FAQ", "#faq"]]

function Wordmark() {
  return <span className={styles.wordmark}>xAGI <span>LABS</span></span>
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExample, setActiveExample] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const example = examples[activeExample]
  const ExampleIcon = example.icon

  useEffect(() => setMounted(true), [])

  return (
    <div className={`${styles.page} ${editorial.variable}`}>
      <HomePageStructuredData />
      <PaidTrafficTracking />
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.headerInner}`}>
          <Link href="/" aria-label="xAGI Labs home"><Wordmark /></Link>
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className={styles.headerActions}>
            <button className={styles.iconButton} aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
              {mounted && resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <BookingCta placement="header" className={`${styles.button} ${styles.headerCta}`}>Let’s talk <ArrowUpRight size={15} /></BookingCta>
            <button className={`${styles.iconButton} ${styles.menuButton}`} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="home-mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
        {menuOpen && <nav id="home-mobile-nav" className={styles.mobileNav} aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false) }}>
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
          <Link href="/services" onClick={() => setMenuOpen(false)}>All services <ArrowUpRight size={16} /></Link>
        </nav>}
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-heading">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span className={styles.statusDot} /> APPLIED AI. BUILT AROUND YOU.</p>
              <h1 id="hero-heading">Less busywork.<br /><em>More possibility.</em></h1>
              <p className={styles.heroDescription}>An AI team for the work between the work.</p>
              <p className={styles.heroBody}>xAGI Labs builds agents that handle conversations, move opportunities forward, and connect your operations — inside the tools you already use.</p>
              <div className={styles.actions}>
                <BookingCta placement="hero" className={styles.button}>Book a discovery call <ArrowUpRight size={17} /></BookingCta>
                <a href="#agents" className={styles.textLink}>Meet your AI team <ArrowDown size={16} /></a>
              </div>
              <div className={styles.heroNotes}>
                <div><strong>Your tools.</strong><span>Connected, not replaced.</span></div>
                <div><strong>Your rules.</strong><span>People stay in control.</span></div>
                <div><strong>Your next step.</strong><span>Start with one workflow.</span></div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>
              <div className={styles.exampleCard}>
                <div className={styles.exampleTopline}><span>xAGI IN PRACTICE</span><span>ILLUSTRATIVE WORKFLOW</span></div>
                <div className={styles.exampleButtons} role="group" aria-label="Choose a workflow example">
                  {examples.map((item, index) => <button key={item.label} type="button" aria-pressed={index === activeExample} onClick={() => setActiveExample(index)}>{item.label}</button>)}
                </div>
                <div className={styles.exampleContent} aria-live="polite" aria-atomic="true">
                  <div className={styles.agentIdentity}><span className={styles.agentIcon}><ExampleIcon size={19} /></span><div><h2>{example.title}</h2><p>{example.subtitle}</p></div><span className={styles.smallDot} /></div>
                  <div className={styles.wave} aria-hidden="true">{Array.from({ length: 38 }, (_, index) => <i key={index} style={{ height: `${8 + ((index * 17 + 7) % 29)}px`, animationDelay: `${index * 40}ms` }} />)}</div>
                  <p className={styles.request}>{example.request}</p>
                  <p className={styles.reply}>{example.reply}</p>
                  <div className={styles.exampleResult}><span className={styles.checkIcon}><Check size={15} /></span><div><strong>{example.result}</strong><span>{example.detail}</span></div><ArrowUpRight size={16} /></div>
                </div>
              </div>
              <p className={styles.visualCaption}><span /> A little less on your plate. A little more room to grow.</p>
            </div>
          </div>
          <div className={styles.heroBottom}><span>BUILT FOR PEOPLE. CONNECTED TO YOUR BUSINESS.</span><a href="#agents" aria-label="Explore the AI team"><ArrowDown size={17} /></a></div>
        </section>

        <section id="agents" className={`${styles.section} ${styles.container}`}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>THE AI TEAM</p><h2>Different roles.<br /><em>One connected business.</em></h2><p>From the first conversation to the everyday follow-through, build an AI team around the work that matters to you.</p></div>
          <div className={styles.agentGrid}>
            {agents.map((agent) => <article key={agent.name} className={styles.agentCard}>
              <div className={styles.agentCategory}><span>{agent.category}</span><span>{agent.number}</span></div>
              <agent.icon className={styles.roleIcon} size={29} strokeWidth={1.2} />
              <h3>{agent.name}</h3><p className={styles.agentRole}>{agent.role}</p><p className={styles.agentDescription}>{agent.description}</p>
              <ul>{agent.features.map((feature) => <li key={feature}><ArrowRight size={14} /><span>{feature}</span></li>)}</ul>
              <Link href={agent.href} className={styles.textLink}>{agent.link}<ArrowUpRight size={16} /></Link>
            </article>)}
          </div>
        </section>

        <section className={styles.manifesto}>
          <div className={`${styles.container} ${styles.manifestoGrid}`}>
            <div><p className={styles.eyebrow}>TECHNOLOGY WITH A HUMAN PURPOSE</p><h2>Give your people<br /><em>their time back.</em></h2></div>
            <div><p>Your best work needs attention. The repetitive work around it shouldn’t take all of yours.</p><p>We design the workflow, connect the systems, and build in the checkpoints. Your team keeps the judgment, the relationships, and the final say.</p><Link href="/services" className={styles.textLink}>Discover what we can build <ArrowUpRight size={17} /></Link></div>
          </div>
        </section>

        <section id="integrations" className={`${styles.section} ${styles.container} ${styles.integrationSection}`}>
          <div><p className={styles.eyebrow}>FAMILIAR TOOLS. NEW POSSIBILITIES.</p><h2>Your business.<br /><em>Better connected.</em></h2><p>Keep the systems your team knows. We scope and build the connections your workflow needs, from your CRM to your internal knowledge.</p><p className={styles.integrationNote}>Integration availability depends on your plan, API access, and workflow requirements.</p></div>
          <div className={styles.integrationGrid}>{["HubSpot", "Salesforce", "Zoho", "Slack", "Notion", "Google Workspace", "Airtable", "Your own API"].map((name, index) => <div key={name}><span className={styles.integrationMark} aria-hidden="true">{["H", "sf", "Z", "#", "N", "G", "A", "↗"][index]}</span><span>{name}</span></div>)}</div>
        </section>

        <section id="process" className={styles.processSection}>
          <div className={`${styles.container} ${styles.section}`}>
            <div className={styles.sectionHeading}><p className={styles.eyebrow}>FROM IDEA TO EVERYDAY</p><h2>Start small.<br /><em>Build something useful.</em></h2><p>A practical path from a recurring problem to an agent your team can work with.</p></div>
            <div className={styles.steps}>{[
              ["Find the right workflow", "Bring us the repeated task, the bottleneck, or the handoff that keeps slowing your team down."],
              ["Connect the context", "We map your tools, business rules, data, and the moments that need a person in the loop."],
              ["Build and test together", "Try a focused pilot against real examples. Review the outputs and edge cases before rollout."],
              ["Launch. Learn. Improve.", "Monitor the workflow, measure what changes, and expand when the results justify it."],
            ].map(([title, description], index) => <article key={title}><span className={styles.stepNumber}>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section id="faq" className={`${styles.container} ${styles.section} ${styles.faqSection}`}>
          <div><p className={styles.eyebrow}>A FEW THINGS TO KNOW</p><h2>Good questions.<br /><em>Straight answers.</em></h2><Link href="/contact" className={styles.textLink}>Talk to a human <ArrowUpRight size={16} /></Link></div>
          <div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={19} /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.container}><p className={styles.eyebrow}>LET’S MAKE ROOM FOR WHAT’S NEXT</p><h2>What would you do<br /><em>with a little more time?</em></h2><p>Bring one workflow. We’ll explore what’s possible together.</p><div className={styles.actions}><BookingCta placement="final_cta" className={styles.button}>Book a discovery call <ArrowUpRight size={17} /></BookingCta><Link href="/contact" className={styles.textLink}>Or drop us a line <ArrowRight size={16} /></Link></div><span className={styles.ctaNote}>A conversation about your business. A practical next step.</span></div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerGrid}`}>
          <div><Link href="/" aria-label="xAGI Labs home"><Wordmark /></Link><p>Applied intelligence.<br />Thoughtfully built.</p></div>
          <div><h2>EXPLORE</h2><Link href="/voice-ai">Voice AI</Link><Link href="/services">AI automation</Link><Link href="/autoclaw">AutoClaw</Link><Link href="/portfolio">Our work</Link></div>
          <div><h2>THE LAB</h2><Link href="/process">Our approach</Link><Link href="/blog">Ideas & insights</Link><Link href="/team">About us</Link><Link href="/contact">Contact</Link></div>
          <div><h2>LET’S CONNECT</h2><a href="mailto:saurav@xagi.in">saurav@xagi.in <ArrowUpRight size={13} /></a><BookingCta placement="footer" className={styles.footerBooking}>Book a discovery call <ArrowUpRight size={13} /></BookingCta></div>
        </div>
        <div className={`${styles.container} ${styles.footerBottom}`}><span>© {new Date().getFullYear()} xAGI Labs. All rights reserved.</span><span>Built with intention. Made for people.</span></div>
      </footer>
    </div>
  )
}
function HomePageStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI automation implementation and AI product engineering",
    name: "xAGI Labs AI Automation",
    description:
      "Production AI automation systems, agents, copilots, workflow integrations, and AI product features for operations and growth teams.",
    provider: {
      "@type": "Organization",
      name: "xAGI Labs",
      url: "https://xagi.in",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    url: "https://xagi.in",
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Automation Systems for Operations and Growth",
    description:
      "Build production AI automations, agents, copilots, and workflow integrations for operations, growth, support, and product teams.",
    url: "https://xagi.in",
    about: {
      "@type": "Thing",
      name: "AI automation",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  )
}
