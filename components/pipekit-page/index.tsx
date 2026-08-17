"use client"

import { useState } from "react"
import type { CSSProperties } from "react"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  Boxes,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  CloudCog,
  DatabaseZap,
  GitBranch,
  Globe2,
  Headphones,
  HeartPulse,
  Languages,
  LockKeyhole,
  MessageSquareText,
  Network,
  PackageCheck,
  PhoneCall,
  RefreshCcw,
  Route,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Unplug,
  UserRoundCheck,
  Workflow,
  Zap,
} from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import BookingCta from "@/components/home-page/booking-cta"
import styles from "./pipekit.module.css"

type ArchitectureKey = "audio-in" | "stt" | "llm" | "tts" | "audio-out"

const architecture = [
  {
    id: "audio-in" as ArchitectureKey,
    eyebrow: "Input",
    label: "Audio",
    detail: "Live audio enters through your chosen telephony or realtime transport layer.",
    note: "Telephony · WebRTC · SIP",
    icon: AudioLines,
  },
  {
    id: "stt" as ArchitectureKey,
    eyebrow: "Listen",
    label: "STT",
    detail: "Stream speech into text with a model selected for the language, noise profile, and latency target.",
    note: "Streaming · Language-aware",
    icon: MessageSquareText,
  },
  {
    id: "llm" as ArchitectureKey,
    eyebrow: "Reason + act",
    label: "LLM + Tools",
    detail: "Route intent, call business APIs, preserve workflow state, and decide the next action in the conversation.",
    note: "Models · APIs · Workflows",
    icon: Braces,
  },
  {
    id: "tts" as ArchitectureKey,
    eyebrow: "Speak",
    label: "TTS",
    detail: "Stream a natural response using the voice provider that best fits the market, voice, and deployment needs.",
    note: "Streaming · Voice choice",
    icon: Headphones,
  },
  {
    id: "audio-out" as ArchitectureKey,
    eyebrow: "Output",
    label: "Audio",
    detail: "Return speech continuously while retaining interruption and human-transfer controls.",
    note: "Realtime · Interruptible",
    icon: AudioLines,
  },
]

const capabilityGroups = [
  {
    index: "01",
    title: "Conversation",
    description: "Keep calls responsive, natural, and controllable from first word to handoff.",
    icon: AudioLines,
    items: [
      "Real-time voice-to-voice conversations",
      "~300 ms core processing latency",
      "Streaming STT and TTS",
      "Interruptions and barge-in",
    ],
  },
  {
    index: "02",
    title: "Intelligence",
    description: "Turn an open-ended conversation into a reliable business workflow.",
    icon: Workflow,
    items: [
      "LLM tool and API calling",
      "Structured information extraction",
      "Multi-step conversation workflows",
      "Human escalation and call transfer",
    ],
  },
  {
    index: "03",
    title: "Operations",
    description: "Connect the voice layer to the systems where customer work actually happens.",
    icon: Network,
    items: [
      "Telephony integration",
      "CRM and backend integrations",
      "Call transcripts and structured outcomes",
      "Self-hosted or customer VPC deployment",
    ],
  },
]

const ecommerceWorkflows = [
  "Where is my order?",
  "Returns and refunds",
  "Order cancellations",
  "Delivery issues",
  "Address changes",
  "COD confirmation",
  "Product questions",
  "Failed-delivery follow-ups",
  "Warranty and support",
  "Outbound customer calls",
  "Human escalation",
]

const actionSteps = [
  "Identify customer",
  "Fetch order",
  "Check logistics",
  "Explain status",
  "Offer action",
  "Update system",
]

const deploymentPoints = [
  { icon: LockKeyhole, label: "Data control" },
  { icon: RefreshCcw, label: "Configurable model providers" },
  { icon: Unplug, label: "Replaceable STT, TTS, and LLM" },
  { icon: DatabaseZap, label: "Internal API integration" },
  { icon: ShieldCheck, label: "Enterprise security architecture" },
  { icon: GitBranch, label: "No single-vendor dependency" },
]

function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<ArchitectureKey>("llm")
  const selected = architecture.find((item) => item.id === activeNode) ?? architecture[2]

  return (
    <div className={styles.architectureShell}>
      <div className={styles.architectureTopline}>
        <span>PIPEKIT / LIVE PIPELINE</span>
        <span className={styles.systemReady}>
          <CircleDot aria-hidden="true" /> Modular by design
        </span>
      </div>

      <div className={styles.architectureFlow} role="tablist" aria-label="Voice pipeline stages">
        {architecture.map((item, index) => {
          const Icon = item.icon
          const isActive = item.id === activeNode

          return (
            <div className={styles.architectureStage} key={item.id}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="architecture-detail"
                className={`${styles.architectureNode} ${isActive ? styles.architectureNodeActive : ""}`}
                onClick={() => setActiveNode(item.id)}
              >
                <span className={styles.nodeEyebrow}>{item.eyebrow}</span>
                <span className={styles.nodeTitle}>
                  <Icon aria-hidden="true" />
                  {item.label}
                </span>
                <span className={styles.nodeNote}>{item.note}</span>
              </button>
              {index < architecture.length - 1 && (
                <div className={styles.signalRail} aria-hidden="true">
                  <span className={styles.signalDot} />
                  <ChevronRight />
                  <ArrowDown />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className={styles.architectureDetail} id="architecture-detail" role="tabpanel">
        <div>
          <span className={styles.detailIndex}>
            {String(architecture.findIndex((item) => item.id === selected.id) + 1).padStart(2, "0")}
          </span>
          <strong>{selected.label}</strong>
        </div>
        <p>{selected.detail}</p>
      </div>

      <div className={styles.selectionBar}>
        <span>Select each component for</span>
        <ul>
          <li>Latency</li>
          <li>Language</li>
          <li>Cost</li>
          <li>Privacy</li>
          <li>Infrastructure</li>
        </ul>
      </div>
    </div>
  )
}

export default function PipekitPage() {
  return (
    <div className={styles.siteShell}>
      <Header />
      <main className={styles.page} id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.productMark}>
                <span className={styles.productGlyph} aria-hidden="true">
                  <AudioLines />
                </span>
                <span>Pipekit</span>
                <span className={styles.byline}>by xAGI Labs</span>
              </div>

              <p className={styles.kicker}>MODULAR VOICE INFRASTRUCTURE</p>
              <h1>The voice engine for AI agents.</h1>
              <p className={styles.heroLead}>
                Build and deploy real-time, multilingual voice agents on your infrastructure.
              </p>

              <div className={styles.heroActions}>
                <BookingCta
                  placement="pipekit_hero"
                  className={styles.primaryCta}
                >
                  Talk to us <ArrowRight aria-hidden="true" />
                </BookingCta>
                <a className={styles.secondaryCta} href="#architecture">
                  Explore the architecture <ArrowDown aria-hidden="true" />
                </a>
              </div>

              <div className={styles.heroProof} aria-label="Pipekit highlights">
                <span><Zap aria-hidden="true" /> ~300 ms core pipeline latency</span>
                <span><Languages aria-hidden="true" /> Multilingual</span>
                <span><Boxes aria-hidden="true" /> Modular</span>
                <span><ServerCog aria-hidden="true" /> Self-hostable</span>
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="Live voice signal entering Pipekit">
              <div className={styles.visualMeta}>
                <span>VOICE SESSION / 001</span>
                <span>STREAMING</span>
              </div>
              <div className={styles.waveform} aria-hidden="true">
                {[28, 54, 76, 40, 92, 62, 36, 84, 52, 100, 68, 42, 74, 48, 30, 66, 88, 44, 58, 80, 34, 64, 46, 26].map((height, index) => (
                  <span key={index} style={{ "--wave-height": `${height}%`, "--wave-delay": `${index * -45}ms` } as CSSProperties} />
                ))}
              </div>
              <div className={styles.visualReadout}>
                <span>VOICE</span>
                <span className={styles.visualArrow}>→</span>
                <strong>PIPEKIT</strong>
                <span className={styles.visualArrow}>→</span>
                <span>ACTION</span>
              </div>
              <div className={styles.latencyDial}>
                <span className={styles.dialLabel}>CORE PIPELINE</span>
                <strong>~300</strong>
                <span>ms</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.architectureSection} id="architecture">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>HOW PIPEKIT WORKS</p>
              <h2>One pipeline. Every layer replaceable.</h2>
            </div>
            <p>
              Choose the right speech, reasoning, and telephony components for each market—without rebuilding the agent around one provider.
            </p>
          </div>
          <ArchitectureDiagram />
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>PRODUCTION CAPABILITIES</p>
              <h2>Built for the whole call, not just the reply.</h2>
            </div>
            <p>
              Pipekit coordinates realtime media, model intelligence, business logic, and operational handoff as one deployable system.
            </p>
          </div>

          <div className={styles.capabilityList}>
            {capabilityGroups.map((group) => {
              const Icon = group.icon
              return (
                <article className={styles.capabilityGroup} key={group.title}>
                  <div className={styles.capabilityIntro}>
                    <span className={styles.capabilityIndex}>{group.index}</span>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        <section className={styles.languageSection}>
          <div className={styles.languageFrame}>
            <div className={styles.languageCopy}>
              <p className={styles.kicker}>MULTILINGUAL BY ARCHITECTURE</p>
              <h2>Match the voice stack to the market.</h2>
              <p>
                Speech quality is geography-specific. Pipekit lets teams select STT and TTS components for the languages, accents, environments, and infrastructure they actually serve.
              </p>
              <p className={styles.languageCaveat}>
                It is not tied to a universal speech provider. It is designed to integrate the best available model or provider for each deployment.
              </p>
            </div>
            <div className={styles.languageMap}>
              <div className={styles.mapCore}>
                <Globe2 aria-hidden="true" />
                <strong>PIPEKIT</strong>
                <span>Speech layer</span>
              </div>
              <div className={`${styles.languageNode} ${styles.languageEnglish}`}>English</div>
              <div className={`${styles.languageNode} ${styles.languageIndian}`}>Indian languages</div>
              <div className={`${styles.languageNode} ${styles.languageAfrican}`}>African languages</div>
              <svg className={styles.mapLines} viewBox="0 0 600 390" aria-hidden="true">
                <path d="M300 195 C210 155 180 92 100 72" />
                <path d="M300 195 C395 150 420 90 505 70" />
                <path d="M300 195 C320 270 350 315 430 335" />
              </svg>
            </div>
          </div>
        </section>

        <section className={styles.commerceSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>VOICE AI FOR E-COMMERCE</p>
              <h2>A voice agent that can finish the job.</h2>
            </div>
            <p>
              Pipekit connects conversations to commerce systems, so the agent can retrieve, decide, and take action during the call—not merely answer like a chatbot.
            </p>
          </div>

          <div className={styles.commerceGrid}>
            <div className={styles.commerceSystem}>
              <div className={styles.systemFlow}>
                <div>
                  <PhoneCall aria-hidden="true" />
                  <span>Customer</span>
                </div>
                <span className={styles.bidirectional}>↔</span>
                <div className={styles.pipekitCore}>
                  <Sparkles aria-hidden="true" />
                  <span>Pipekit</span>
                </div>
                <span className={styles.bidirectional}>↔</span>
                <div>
                  <Braces aria-hidden="true" />
                  <span>Commerce APIs</span>
                </div>
              </div>
              <div className={styles.integrationRow}>
                {[
                  { icon: PackageCheck, label: "Orders" },
                  { icon: UserRoundCheck, label: "CRM" },
                  { icon: Route, label: "Logistics" },
                  { icon: DatabaseZap, label: "Payments" },
                  { icon: Headphones, label: "Support" },
                ].map((integration) => {
                  const IntegrationIcon = integration.icon
                  return (
                    <span key={integration.label}>
                      <IntegrationIcon aria-hidden="true" /> {integration.label}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className={styles.workflowMenu}>
              <span className={styles.menuLabel}>WORKFLOWS / 11</span>
              <ul>
                {ecommerceWorkflows.map((workflow, index) => (
                  <li key={workflow}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {workflow}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.callExample}>
            <div className={styles.customerQuote}>
              <span>Customer / live call</span>
              <blockquote>“My order was supposed to arrive yesterday. Where is it?”</blockquote>
            </div>
            <ol className={styles.actionRail}>
              {actionSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.originSection}>
          <div className={styles.originIcon}>
            <HeartPulse aria-hidden="true" />
          </div>
          <div>
            <p className={styles.kicker}>BUILT FROM REAL-WORLD PHONE WORKFLOWS</p>
            <h2>Healthcare was the proving ground.</h2>
          </div>
          <p>
            Pipekit was originally developed for workflows where AI agents communicated between clinics and insurance providers—complex conversations with real systems, multiple steps, and operational consequences. That origin shaped an engine built beyond the voice-demo stage.
          </p>
        </section>

        <section className={styles.deploymentSection}>
          <div className={styles.deploymentGrid}>
            <div className={styles.deploymentCopy}>
              <p className={styles.kicker}>DEPLOY ON YOUR INFRASTRUCTURE</p>
              <h2>Your environment. Your providers. Your control plane.</h2>
              <p>
                Deploy Pipekit inside the boundary that fits your organization. Connect internal systems and change model providers as your latency, language, privacy, and cost needs evolve.
              </p>

              <div className={styles.environmentStrip} aria-label="Deployment environments">
                <span><CloudCog aria-hidden="true" /> Cloud</span>
                <span><Network aria-hidden="true" /> VPC</span>
                <span><ServerCog aria-hidden="true" /> Private infrastructure</span>
              </div>
            </div>

            <div className={styles.deploymentPoints}>
              {deploymentPoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.label}>
                    <Icon aria-hidden="true" />
                    <span>{point.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className={styles.kicker}>BUILD WITH PIPEKIT</p>
            <h2>Build your voice AI stack with Pipekit.</h2>
            <p>Deploy multilingual, real-time voice agents connected directly to your business systems.</p>
          </div>
          <div className={styles.finalActions}>
            <BookingCta
              placement="pipekit_final"
              className={styles.finalButton}
            >
              Talk to xAGI Labs <ArrowRight aria-hidden="true" />
            </BookingCta>
            <Link href="/contact" className={styles.contactLink}>
              Contact options
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
