"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { trackMarketingEvent } from "@/lib/marketing-attribution"
import styles from "./data-home.module.css"

export default function DatasetBrief() {
  const [modality, setModality] = useState("Speech & audio")
  const [brief, setBrief] = useState("")
  const [attempted, setAttempted] = useState(false)
  const body = `Dataset inquiry\n\nModality: ${modality}\n\nRequirements:\n${brief}\n\nPlease include any language, quantity, quality, timing and permitted-use requirements.`
  const href = `mailto:saurav@xagi.in?subject=${encodeURIComponent("AI dataset sourcing inquiry")}&body=${encodeURIComponent(body)}`
  return <div className={styles.briefForm}>
    <h3>Prepare your dataset brief</h3>
    <label htmlFor="dataset-modality">Data modality</label>
    <select id="dataset-modality" value={modality} onChange={e => setModality(e.target.value)}>{["Speech & audio", "Video & multimodal", "Expert & domain data", "Other / help me scope"].map(m => <option key={m}>{m}</option>)}</select>
    <label htmlFor="dataset-requirements">What are you trying to build?</label>
    <textarea id="dataset-requirements" value={brief} onChange={e => setBrief(e.target.value)} rows={5} maxLength={2000} placeholder="Model task, languages or regions, quantity, timing, quality and rights requirements…" aria-describedby="brief-privacy" />
    <p id="brief-privacy">Keep this to requirements. Do not include raw datasets, personal records or confidential material.</p>
    <a className={styles.primary} href={href} onClick={() => { setAttempted(true); trackMarketingEvent("dataset_brief_email_draft_click", { placement: "home", modality }) }}>Open email draft <ArrowUpRight size={17} aria-hidden="true" /></a>
    <p>Email opens in your own mail app. Review and send the draft there; nothing is submitted by this page.</p>
    {attempted && <p role="status">If your mail app did not open, email <a href="mailto:saurav@xagi.in">saurav@xagi.in</a> with your requirements.</p>}
  </div>
}
