"use client"
import { useState } from "react"
import Link from "next/link"
import { trackMarketingEvent } from "@/lib/marketing-attribution"
import styles from "@/components/home-page/data-home.module.css"
const checks = ["I can identify the source and the person authorized to discuss licensing.", "I have a documented collection purpose and consent or permission evidence to review.", "I can describe third-party rights and restrictions, including personal or confidential information.", "I can describe coverage, formats, metadata and quality limitations without sharing raw files.", "I know which training or evaluation uses I want to discuss and which uses are restricted."]
export default function DataReadiness() {
 const [selected,setSelected] = useState<boolean[]>(checks.map(() => false))
 const [show,setShow] = useState(false)
 const missing = checks.filter((_,i) => !selected[i])
 return <section className={styles.briefForm} aria-labelledby="readiness-heading"><h2 id="readiness-heading">Prepare for a licensing conversation</h2><p>This checklist identifies missing information. It does not value a dataset, verify rights or authorize its use.</p><fieldset><legend>Which statements can you support with evidence?</legend>{checks.map((q,i) => <label className={styles.checkLabel} key={q}><input type="checkbox" checked={selected[i]} onChange={e => { setSelected(selected.map((s,n) => n === i ? e.target.checked : s)); setShow(false) }} />{q}</label>)}</fieldset><button type="button" className={styles.primary} onClick={() => {setShow(true); trackMarketingEvent("data_readiness_review",{placement:"readiness_checklist"})}}>Review next steps</button>{show && <div role="status"><h3>{missing.length ? "Gather the missing evidence first" : "You have information to begin a review"}</h3>{missing.length ? <ul>{missing.map(q => <li key={q}>{q}</li>)}</ul> : <p>A completed checklist is a starting point, not legal clearance. The underlying documents and proposed uses still need review.</p>}<Link className={styles.textLink} href="/data-partnerships/#introduce">Discuss your source →</Link></div>}</section>
}
