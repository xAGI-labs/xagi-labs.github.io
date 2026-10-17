"use client"

import { useEffect, useRef, useState } from "react"
import { trackMarketingEvent } from "@/lib/marketing-attribution"
import styles from "@/components/home-page/data-home.module.css"

type Challenge = { render: (element: HTMLElement, options: Record<string, unknown>) => string; remove: (id: string) => void; reset: (id: string) => void }
declare global { interface Window { turnstile?: Challenge } }
export const onlineEnquiriesEnabled = process.env.NEXT_PUBLIC_ENQUIRY_ENABLED === "true" && Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY)

export default function EnquirySubmit({ intent, placement, details, coverage = "", modality = "Not specified", source = "Not specified" }: { intent: "buyer" | "partner" | "expert"; placement: string; details: string; coverage?: string; modality?: string; source?: string }) {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [token, setToken] = useState("")
  const [busy, setBusy] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [status, setStatus] = useState("")
  const widget = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string>()
  const receipt = useRef<string>()
  const submittedContent = useRef<string>()
  const sending = useRef(false)
  const counted = useRef(false)

  useEffect(() => {
    let cancelled = false
    function render() {
      if (cancelled || !widget.current || !window.turnstile || widgetId.current) return
      widgetId.current = window.turnstile.render(widget.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, action: "dataset_enquiry",
        callback: (value: string) => setToken(value),
        "expired-callback": () => setToken(""),
        "error-callback": () => { setToken(""); setStatus("The security check is unavailable. You can still use the email draft below.") },
      })
    }
    let script = document.getElementById("xagi-turnstile") as HTMLScriptElement | null
    if (!script) {
      script = document.createElement("script"); script.id = "xagi-turnstile"; script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; script.async = true
      document.head.appendChild(script)
    }
    script.addEventListener("load", render)
    const onError = () => setStatus("The security check could not load. Please use the email draft below.")
    script.addEventListener("error", onError)
    render()
    return () => {
      cancelled = true; script?.removeEventListener("load", render); script?.removeEventListener("error", onError)
      if (widgetId.current) { window.turnstile?.remove(widgetId.current); widgetId.current = undefined }
    }
  }, [])

  async function submit() {
    if (sending.current || confirmed) return
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email.trim()) || email.length > 254 || details.trim().length < 20) {
      setStatus("Enter a valid work email and at least 20 characters describing your requirements."); return
    }
    if (!token) { setStatus("Please complete the security check before sending."); return }
    const content = JSON.stringify({ intent, placement, details, coverage, modality, source, email: email.trim() })
    if (!receipt.current || submittedContent.current !== content) { receipt.current = crypto.randomUUID(); submittedContent.current = content }
    sending.current = true; setBusy(true); setStatus("Sending your enquiry…")
    let accepted = false
    try {
      const result = await fetch("/api/dataset-enquiry", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...JSON.parse(content), receipt: receipt.current, token, website }), signal: AbortSignal.timeout(20000),
      })
      const body = await result.json()
      if (result.ok && body.confirmed === true && body.receipt === receipt.current) {
        accepted = true
        setConfirmed(true); setStatus(`Enquiry received. Your reference is ${body.receipt}. We will reply to your email.`)
        if (!counted.current) {
          counted.current = true
          try { trackMarketingEvent("dataset_enquiry_confirmed", { intent, placement, modality }) } catch { /* Receipt remains valid if analytics is blocked. */ }
        }
      } else {
        setStatus(`${typeof body.error === "string" ? body.error : "Submission was not confirmed. Please try again or use the email draft."}${body.receipt ? ` Reference: ${receipt.current}.` : ""}`)
      }
    } catch {
      setStatus(`Submission could not be confirmed. Your text is still here. Retry unchanged to check the same enquiry, or email saurav@xagi.in with reference ${receipt.current}.`)
    } finally {
      sending.current = false; setBusy(false); setToken("")
      if (!accepted && widgetId.current) window.turnstile?.reset(widgetId.current)
    }
  }

  return <form data-clarity-mask="true" noValidate onSubmit={e => { e.preventDefault(); void submit() }}>
    <label htmlFor={`enquiry-email-${intent}`}>Your work email</label>
    <input id={`enquiry-email-${intent}`} type="email" autoComplete="email" aria-describedby={`enquiry-status-${intent}`} maxLength={254} value={email} disabled={busy || confirmed} onChange={e => setEmail(e.target.value)} />
    <div hidden aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)} /></label></div>
    <p>Sending shares your email and brief with xAGI so we can respond. Please leave out raw datasets and confidential or personal records.</p>
    <div ref={widget} hidden={confirmed} />
    <button type="submit" className={styles.primary} disabled={busy || confirmed}>{confirmed ? "Enquiry received" : busy ? "Sending…" : "Send enquiry"}</button>
    <p id={`enquiry-status-${intent}`} role="status" aria-live="polite">{status}</p>
  </form>
}
