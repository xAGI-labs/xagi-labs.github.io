"use client"
import { useState } from "react"
import EnquirySubmit, { onlineEnquiriesEnabled } from "@/components/enquiry-submit"
import { trackMarketingEvent } from "@/lib/marketing-attribution"
import styles from "@/components/home-page/data-home.module.css"

type Intent = "buyer" | "partner" | "expert"
const labels = { buyer: "Scope my dataset", partner: "Discuss a data partnership", expert: "Introduce my expertise" }
export default function DataIntake({ intent = "buyer", placement }: { intent?: Intent; placement: string }) {
  const [details, setDetails] = useState("")
  const [coverage, setCoverage] = useState("")
  const [source, setSource] = useState("Not specified")
  const [status, setStatus] = useState("")
  const text = `xAGI Labs — ${labels[intent]}\n\n${intent === "buyer" ? "Model task and acceptance criteria" : intent === "partner" ? "Source description and authority to license" : "Domain and relevant experience"}:\n${details}\n\nLanguages, geography and timing:\n${coverage}\n\nFound via: ${source}\nPage: https://xagi.in${placement}\n\nPlease discuss feasibility and next steps before any data transfer.`
  function event(action: string) { trackMarketingEvent(`data_intake_${action}`, { intent, placement }) }
  function download() {
    const url = URL.createObjectURL(new Blob([text], { type: "text/markdown;charset=utf-8" }))
    const a = document.createElement("a"); a.href = url; a.download = `xagi-${intent}-brief.md`; a.click(); URL.revokeObjectURL(url)
    event("download"); setStatus("Brief downloaded. It has not been sent to xAGI.")
  }
  return <div className={styles.briefForm} data-clarity-mask="true">
    <h2>{labels[intent]}</h2>
    <p>{intent === "expert" ? "This is an introduction of interest, not an application to an advertised job. No work or pay is promised." : "Start with a description. Availability, rights and commercial terms are reviewed individually."}</p>
    <label htmlFor="intake-details">{intent === "buyer" ? "What should the model learn, and how will you evaluate the data?" : intent === "partner" ? "What data do you control, and what rights can you establish?" : "What is your expertise and relevant experience?"}</label>
    <textarea id="intake-details" rows={5} maxLength={2000} value={details} onChange={e => setDetails(e.target.value)} aria-describedby="intake-privacy" />
    <label htmlFor="intake-coverage">Languages, geography and timing</label>
    <input id="intake-coverage" maxLength={250} value={coverage} onChange={e => setCoverage(e.target.value)} />
    <label htmlFor="intake-source">How did you find us?</label>
    <select id="intake-source" value={source} onChange={e => setSource(e.target.value)}>{["Not specified", "Search", "LinkedIn", "Research or resource", "Community or event", "Referral", "Other"].map(s => <option key={s}>{s}</option>)}</select>
    <p id="intake-privacy">Do not include personal records, confidential data, credentials or raw files. {onlineEnquiriesEnabled ? "Use Send enquiry to submit to xAGI, or download a copy or send from your email app." : "Text stays in this browser until you download it or choose to send an email from your mail app."}</p>
    {onlineEnquiriesEnabled && <EnquirySubmit intent={intent} placement={placement} details={details} coverage={coverage} source={source} />}
    <a className={styles.primary} href={`mailto:saurav@xagi.in?subject=${encodeURIComponent(labels[intent])}&body=${encodeURIComponent(text)}`} onClick={() => { event("email_draft"); setStatus("Review and send the draft in your email app. If it did not open, email saurav@xagi.in.") }}>Open email draft ↗</a>
    <button className={styles.toolButton} type="button" onClick={download}>Download brief instead</button>
    <p role="status">{status || "Nothing is submitted automatically. Email drafts and downloads are not completed submissions."}</p>
  </div>
}
