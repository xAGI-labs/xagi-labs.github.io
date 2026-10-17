"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { buildReadinessPlan, readinessQuestions, readinessReport, type EvidenceState, type ReadinessAudience } from "@/lib/data-readiness"
import { trackMarketingEvent } from "@/lib/marketing-attribution"
import styles from "@/components/home-page/data-home.module.css"

function ReadinessContext({ onChange }: { onChange: (value: ReadinessAudience) => void }) {
  const params = useSearchParams()
  useEffect(() => { onChange(params.get("for") === "voice-evaluation" ? "buyer" : "owner") }, [params, onChange])
  return null
}

export default function DataReadiness() {
  const [audience, setAudience] = useState<ReadinessAudience>("owner")
  const [answers, setAnswers] = useState<Record<string, EvidenceState>>({})
  const [show, setShow] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const result = useRef<HTMLDivElement>(null)
  useEffect(() => { setAnswers({}); setShow(false); setDownloaded(false) }, [audience])
  const plan = buildReadinessPlan(audience, answers)
  useEffect(() => { if (show) result.current?.focus() }, [show])

  function download() {
    const url = URL.createObjectURL(new Blob([readinessReport(audience, answers)], { type: "text/markdown;charset=utf-8" }))
    const a = document.createElement("a")
    a.href = url; a.download = `xagi-${audience}-preparation-plan.md`; a.click(); URL.revokeObjectURL(url)
    setDownloaded(true)
    trackMarketingEvent("data_readiness_download", { intent: audience === "buyer" ? "buyer" : "partner", placement: "readiness_checklist" })
  }

  return <section className={`${styles.briefForm} ${styles.readinessTool}`} aria-labelledby="readiness-heading" data-clarity-mask="true">
    <Suspense fallback={null}><ReadinessContext onChange={setAudience} /></Suspense>
    <h2 id="readiness-heading">Build your preparation plan</h2>
    <p className={styles.toolIntro}>Choose your starting point. Get specific evidence, coverage and quality actions for the next conversation. Your answers stay on this page; the tool does not submit them or produce a valuation.</p>
    <fieldset><legend>What are you preparing?</legend><div className={styles.readinessAudience}>{([
      ["owner", "A dataset or source for licensing"], ["buyer", "A voice evaluation pilot"],
    ] as const).map(([value, label]) => <label key={value}><input type="radio" name="readiness-audience" value={value} checked={audience === value} onChange={() => { setAudience(value); setAnswers({}); setShow(false); setDownloaded(false) }} />{label}</label>)}</div></fieldset>
    <fieldset><legend>Which points can you support with evidence?</legend><p>“Not sure” is useful too. Self-reported answers still need review.</p>{readinessQuestions[audience].map(q => <div key={q.id} className={styles.readinessQuestion}><label htmlFor={`readiness-${q.id}`}>{q.question}</label><select id={`readiness-${q.id}`} value={answers[q.id] || "unknown"} onChange={e => { setAnswers({ ...answers, [q.id]: e.target.value as EvidenceState }); setShow(false); setDownloaded(false) }}><option value="unknown">Not sure yet</option><option value="yes">Yes — documented</option><option value="no">No — missing</option></select></div>)}</fieldset>
    <button type="button" className={styles.primary} onClick={() => { setShow(true); trackMarketingEvent("data_readiness_review", { intent: audience === "buyer" ? "buyer" : "partner", placement: "readiness_checklist" }) }}>Build my preparation plan</button>
    {show && <div ref={result} tabIndex={-1} className={styles.readinessResult} aria-labelledby="readiness-result-heading">
      <h3 id="readiness-result-heading">{plan.heading}</h3><p role="status">{plan.recommendation}</p>
      {plan.gaps.length ? ["Evidence to prepare", "Coverage gaps", "Quality and acceptance"].map(category => {
        const gaps = plan.gaps.filter(q => q.category === category)
        return gaps.length ? <section key={category}><h4>{category}</h4><ul>{gaps.map(q => <li key={q.id}>{q.action}</li>)}</ul></section> : null
      }) : <p>Bring the underlying evidence to a review. The checklist does not verify rights, certify quality or authorize use.</p>}
      <h4>Recommended review scope</h4><p>{audience === "buyer" ? "One voice task and language or dialect, representative hard conditions, a held-out sample and an agreed rubric. Sample size, reviewer access, price and timing are established during scoping." : "A high-level source inventory and proposed uses first, followed by a securely reviewed representative sample only when authority and permissions are established."}</p>
      <div className={styles.actions}><Link className={styles.textLink} href={plan.href}>{plan.cta} →</Link>{audience === "buyer" && <Link className={styles.textLink} href="/voice-evaluation-pilot/">See the pilot deliverables →</Link>}</div>
      <button className={styles.toolButton} type="button" onClick={download}>Download my preparation plan ↓</button>
      <p role="status">{downloaded ? "Preparation plan downloaded. It has not been sent to xAGI." : "No readiness score, price, legal clearance or guaranteed availability is implied. Nothing has been submitted."}</p>
    </div>}
  </section>
}
