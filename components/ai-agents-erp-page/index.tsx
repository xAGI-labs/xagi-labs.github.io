"use client"

import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  Shield,
  TrendingUp,
  Bot,
  Workflow,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Cog,
  Users,
  Factory,
  DollarSign
} from "lucide-react"

export default function AIAgentsERPPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#0a0a0a] dark:to-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              Deep Research Report
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              The Autonomous Enterprise: AI Agents and the Future of ERP
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              An analytical deep dive into how autonomous AI agents are transforming Enterprise Resource Planning from systems of record to systems of action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Discuss Your ERP Strategy
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Banner */}
      <section className="py-12 bg-black dark:bg-white text-white dark:text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">75%</div>
              <div className="text-sm opacity-80">Reduction in expense processing time (Chobani)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-sm opacity-80">Reduction in error rates (FinRobot framework)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40K</div>
              <div className="text-sm opacity-80">Invoices processed autonomously (Western Sugar)</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-sm opacity-80">Faster workflow processing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">I. Executive Summary</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This report details a <strong>fundamental inflection point in enterprise technology</strong>: the systemic shift of Enterprise Resource Planning (ERP) systems from AI-Augmented platforms to AI-Native, Agentic platforms. For the past decade, Artificial Intelligence (AI) has been leveraged to augment human decision-making, providing data-driven insights, forecasts, and reports. Now, a new paradigm of autonomous AI agents is emerging, transitioning the ERP from a "system of record" to a <strong>"system of action."</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These goal-oriented software agents are capable of autonomously executing complex, multi-step business processes with human oversight, not just human intervention. This transition is no longer theoretical—it is delivering measurable, high-impact business value.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Case Studies:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Chobani:</strong> Reduced time spent on expenses by 75% using AI agents within SAP Concur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>Western Sugar Cooperative:</strong> Cut invoice processing time by 25% and now autonomously processes 40,000 supplier invoices annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span><strong>FinRobot Framework:</strong> Demonstrated 94% reduction in error rates while cutting workflow processing times by 40%</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  <strong>Central Thesis:</strong> A coherent agentic AI strategy, integrated into the core ERP, is no longer an ancillary technology upgrade but a <strong>critical, time-sensitive imperative</strong> for operational efficiency, compliance, and competitive survival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: AI-Augmented ERP */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">II. Part 1: The Foundation — AI-Augmented ERP</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">A. Beyond the System of Record</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The initial integration of AI into ERP was a necessary response to the overwhelming success of ERPs themselves. As organizations centralized their operations, their ERP systems became vast, unmanageable repositories of data. The human capacity to process this data was quickly overwhelmed.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                This created the initial business case for AI in ERP, which refers to the integration of machine learning (ML), natural language processing (NLP), predictive analytics, and computer vision into core ERP modules. The goals were remedial and defensive:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Automate routine tasks</strong> to reduce manual, repetitive work</li>
                <li><strong>Provide advanced data analysis</strong> to find patterns too large for human exploration</li>
                <li><strong>Reduce human error</strong> in high-volume processes</li>
              </ul>
            </div>

            {/* Core Business Functions */}
            <div className="mt-12 space-y-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">B. AI-Driven Optimization Across Core Business Functions</h3>

              {/* Financial Management */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">1. Financial Management</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In finance, AI was applied as a powerful mechanism for control and efficiency, freeing finance teams from time-consuming transactional work.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Process Automation:</strong> AI-driven automation for invoice processing and expense management using Intelligent Document Recognition (IDR) and NLP</li>
                  <li><strong>Fraud Detection:</strong> Machine learning models analyze transactional histories to uncover subtle signs of fraudulent activity in real-time</li>
                  <li><strong>Forecasting:</strong> Predictive cash forecasting models analyze payables, receivables, and historical trends</li>
                </ul>
              </div>

              {/* Supply Chain */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <Workflow className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">2. Supply Chain and Operations</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  AI was adopted as a direct response to increasing global volatility. Traditional forecasting methods proved incapable of adapting to modern markets.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Demand Forecasting:</strong> AI-driven models synthesize historical data with real-time external sources including geopolitics, weather conditions, and shipping disruptions</li>
                  <li><strong>Inventory Optimization:</strong> More accurate forecasts prevent costly overstock and revenue-losing stockouts</li>
                  <li><strong>Resilience Building:</strong> Models anticipate disruptions that internal-only systems would never see</li>
                </ul>
              </div>

              {/* Manufacturing */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">3. Manufacturing and Asset Management</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  AI re-engineered the financial and operational value of physical assets through predictive capabilities.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Predictive Maintenance:</strong> AI analyzes real-time IoT sensor data to detect issues before they become expensive interruptions</li>
                  <li><strong>Quality Control:</strong> Computer vision monitors manufacturing materials and identifies flaws in real-time</li>
                </ul>
              </div>

              {/* HCM */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">4. Human Capital Management</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  AI brought standardization and scalability to high-volume, historically subjective processes.
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Talent Acquisition:</strong> 66% of HR organizations use AI to generate job descriptions, 44% for resume screening, 32% for automated candidate searches</li>
                  <li><strong>Talent Management:</strong> Automated onboarding workflows, engagement analysis, and personalized learning recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Agentic AI */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">III. Part 2: The Deep Research — Agentic AI in ERP</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">A. The Agentic Leap: From Assistants to Autonomous Agents</h3>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Defining the AI Agent</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  An AI agent is an <strong>autonomous software entity</strong> defined by core characteristics that allow it to perceive, reason, and act intelligently:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Autonomy:</strong> Operates and makes decisions independently without continuous human guidance</li>
                  <li><strong>Goal-Orientation:</strong> Proactively plans and executes steps to achieve high-level objectives</li>
                  <li><strong>Context Awareness:</strong> Senses and interprets environment using real-time signals</li>
                  <li><strong>Learning & Adaptation:</strong> Learns from past experiences and adjusts behavior</li>
                  <li><strong>Collaboration:</strong> Works with people, other AI agents, and systems</li>
                </ul>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Critical Distinction: ML Models vs. AI Agents</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Machine Learning Model</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    An analytical engine—a "brain-in-a-jar." Fed data to generate insights (predictions, forecasts). A human must then act on these insights.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">AI Agent</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    A full system—a "software robot" with senses, brain, and hands. Consumes predictions, reasons about implications, and <strong>autonomously executes</strong> multi-step plans.
                  </p>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Critical Distinction: RPA vs. Agentic AI</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">RPA (Process-Driven)</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Follows exact, predefined instructions with rigid "if-then" reasoning. Ideal for high repetition of static tasks.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs italic">
                    Example: "Uses predefined templates to copy invoice data into ERP system." If vendor changes format, bot breaks.
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Agentic AI (Goal-Driven)</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Decision-based, autonomously adapts to changing conditions. Excels with unstructured data.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs italic">
                    Example: "Interprets invoices in varied formats, checks for differences, and reaches out to vendors if information is missing."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Battlefield */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">B. The New Vendor Battlefield: ERP Titans</h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
              The 2025 Gartner Magic Quadrant for Cloud ERP validates the strategic importance of agentic AI, including "agentic AI innovation" as a key differentiator for the first time.
            </p>

            {/* Gartner Table */}
            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-900">
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Vendor</th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Platform</th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Core AI/Agent Strategy</th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Key Differentiator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Oracle</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Fusion Cloud ERP</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">AI Agent Studio for custom AI agents</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Deep agentic AI innovation</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Microsoft</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Dynamics 365</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Copilot-driven AI agents</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Integrated cloud stack</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">SAP</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Cloud ERP</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Joule AI framework</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Broad, deep functionality</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">IFS</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">IFS Cloud</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Accelerated AI strategy</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Industry depth & composability</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Epicor</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Epicor</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Prism AI Agent for NLP automation</td>
                    <td className="p-4 text-gray-700 dark:text-gray-300">Mid-market focused</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Three Strategic Paths */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Three Distinct Strategic Paths</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Cog className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">SAP: Business Process Strategy</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Own the business process context through Joule copilot infused with collaborative AI agents.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• SAP Knowledge Graph (50 years of process expertise)</li>
                  <li>• SAP Business Technology Platform</li>
                  <li>• "Only deep process know-how enables reliable autonomy"</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Oracle: Integrated Stack Strategy</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Own the entire technology stack from silicon to application with pre-built Fusion AI Agents.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Payables Agent, Ledger Agent, Planning Agent</li>
                  <li>• OCI AI Agent Platform</li>
                  <li>• "Turnkey autonomy on optimized vertical stack"</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Microsoft: Ecosystem Strategy</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Own the user and developer ecosystem through horizontal platform play.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• Dynamics 365 first-party agents</li>
                  <li>• Copilot Studio (low-code)</li>
                  <li>• "Universal intelligence frontend for all ERPs"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">C. Agentic AI in Practice: Real-World ROI</h2>
            </div>

            <div className="space-y-12">
              {/* Procurement Agent */}
              <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Use Case: The Autonomous Procurement Agent</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  A manufacturing agent that monitors inventory levels, supplier lead times, and market conditions to issue optimized purchase orders in SAP. This demonstrates "human-on-the-loop" governance:
                </p>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li><strong>1. Search:</strong> Search approved vendors for items</li>
                    <li><strong>2. Compare:</strong> Compare 3 offers</li>
                    <li><strong>3. Comply:</strong> Check compliance with policy rules</li>
                    <li><strong>4. Recommend:</strong> Return suggested purchase with rationale</li>
                    <li><strong>5. Govern:</strong> Await explicit human approval before executing</li>
                  </ol>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                  This achieves 99% cognitive automation while reserving fiduciary-level decision-making for humans.
                </p>
              </div>

              {/* Bosch Case Study */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Case Study: Bosch Power Tools (SAP)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Bosch's service division handles millions of tickets annually with a legacy system "bogged down by hundreds of static routes." By implementing SAP Joule agents, they shifted from static rule-based routing to intelligent, context-aware automation.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-900/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Thousands</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Work hours saved annually</div>
                  </div>
                  <div className="bg-white dark:bg-gray-900/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Weeks → Minutes</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Workflow adjustment time</div>
                  </div>
                </div>
              </div>

              {/* ROI Table */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quantifiable Business Value</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-gray-800">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-900">
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Domain</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Company</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Use Case</th>
                        <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Metric</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="p-4 text-gray-900 dark:text-white">Finance (Expenses)</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">Chobani</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">Automating expense processes</td>
                        <td className="p-4 font-semibold text-green-600 dark:text-green-400">75% time reduction</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-900 dark:text-white">Finance (Invoices)</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">Western Sugar</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">Automating invoice processing</td>
                        <td className="p-4 font-semibold text-green-600 dark:text-green-400">25% faster, 40K autonomous</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-900 dark:text-white">Finance (Workflows)</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">FinRobot</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">Generative Business Process AI</td>
                        <td className="p-4 font-semibold text-green-600 dark:text-green-400">94% error reduction, 40% faster</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-900 dark:text-white">Customer Service</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">General</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">AI-powered chatbots</td>
                        <td className="p-4 font-semibold text-green-600 dark:text-green-400">50% faster response, 30% cost cut</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-900 dark:text-white">Supply Chain</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">AI-enabled orgs</td>
                        <td className="p-4 text-gray-700 dark:text-gray-300">Higher AI investment</td>
                        <td className="p-4 font-semibold text-green-600 dark:text-green-400">61% greater revenue growth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">D. Technical Architecture and Integration</h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. API-First Imperative</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The primary technical barrier to agentic AI is monolithic ERP architecture. An autonomous agent cannot operate within a closed, rigid system. The necessary foundation is a <strong>modular, composable, API-first architecture</strong> built on microservices.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                These APIs function as the "hands and feet" for the AI agent, allowing it to execute the actions it reasons about. Cloud migration was the necessary prerequisite, forcing vendors to re-architect monolithic systems into API-first, service-based platforms.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Multi-Agent Systems (MAS)</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The next frontier moves beyond single agents to <strong>collaborative networks of specialized agents</strong>. This architecture enables decentralized decision-making and decomposition of complex end-to-end business processes.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 my-6">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "Deploy agents representing different departments, expertise areas, or decision-making levels, creating intelligent systems that mirror human organizational dynamics" — This is the digital twin of the corporate org chart.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Technical Implementation Roadmap</h3>
              <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                <li><strong>Assess Readiness:</strong> Evaluate infrastructure, data hygiene, and AI literacy</li>
                <li><strong>Prioritize Use Cases:</strong> Start with high-impact, high-ROI use cases in finance, SCM, or HR</li>
                <li><strong>Data Strategy:</strong> "Dirty data kills AI initiatives" — implement robust data pipelines</li>
                <li><strong>Integration:</strong> Mandate API-driven architectures</li>
                <li><strong>Govern & Train:</strong> Engage stakeholders; employees need training to trust AI workflows</li>
                <li><strong>Pilot, Measure, Scale:</strong> Run controlled pilots, measure ROI, then scale</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Governance and Risk */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">IV. Strategic Imperatives: Governance, Risk & The Black Box Problem</h2>
            </div>

            <div className="space-y-12">
              {/* Black Box */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">A. Confronting the Black Box: Explainable AI (XAI)</h3>
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
                  <p className="text-gray-800 dark:text-gray-200">
                    The "Black Box" problem is the most debated concern in enterprise AI. For a public company's finance department operating under SOX regulations where every decision must be auditable, a black box is unacceptable.
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>92.6% of compliance officers</strong> identify the black box problem as a critical concern. The solution is <strong>Explainable AI (XAI)</strong> — a non-negotiable feature for enterprise agents.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    In enterprise AI, auditability and explainability are more important competitive differentiators than raw model performance. A 99% accurate agent that is a "black box" is un-deployable. A 95% accurate agent with 100% traceable logic is revolutionary.
                  </p>
                </div>
              </div>

              {/* Data Privacy */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">B. Data Privacy and Security</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  ERP systems are a treasure trove of sensitive information. The threat model shifts from a human leaking data to an agent autonomously misusing it. An agent may have permission to access customer PII (for service) and marketing data (for outreach). If it autonomously decides to combine these datasets, it could instantly violate GDPR's "purpose limitation" and "data minimization" principles.
                </p>
                <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>The agent is not "hacking"</strong> — it is reasoning its way into a massive compliance violation. Traditional security is insufficient. The solution requires Zero Trust architecture and context-aware guardrails.
                  </p>
                </div>
              </div>

              {/* TCO */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">C. The Total Cost of Agency</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  TCO extends far beyond subscription fees. The most significant costs are often hidden:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>Data Readiness:</strong> Poor data hygiene is a primary cause of failure</li>
                  <li><strong>Integration Complexity:</strong> Legacy systems require costly upgrades</li>
                  <li><strong>Workforce Skills & Change Management:</strong> The most critical and underestimated cost. "Resistance to change" and "inadequate training" are primary drivers of low adoption</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mt-6">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    A successful AI agent strategy is, first and foremost, a <strong>change management and training strategy</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">V. Future Outlook: The Autonomous Enterprise</h2>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Analyst Projections: 2025-2028</h3>
            <div className="space-y-6 mb-12">
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">2026</div>
                <p className="text-gray-300 mb-2">Up to 40% of enterprise applications will include integrated task-specific agents</p>
                <p className="text-sm text-gray-400 italic">The market rapidly moves from "AI as a feature" to "Agents as a core component"</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold text-green-400 mb-2">2027</div>
                <p className="text-gray-300 mb-2">40% of financial ERP workflows will be agent-driven</p>
                <p className="text-sm text-gray-400 italic">Finance and accounting achieve true, widespread autonomous operations</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">2028</div>
                <p className="text-gray-300 mb-2">15% of day-to-day work decisions will be made autonomously</p>
                <p className="text-sm text-gray-400 italic">True operational autonomy becomes a standard feature</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6">The End State: Fully Autonomous Enterprise</h3>
            <div className="bg-white/5 rounded-xl p-8">
              <p className="text-gray-300 mb-6">
                The ultimate vision is the fully autonomous enterprise where networks of specialized agents dynamically collaborate across multiple applications and business functions. This "Agentic Process Automation" model aims to autonomously execute <strong>up to 80% of tasks</strong> currently performed by humans.
              </p>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">The Evolution of Human Capital</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><span className="text-gray-500">Past:</span> Human-in-the-loop (transactional execution)</li>
                  <li><span className="text-gray-400">Present:</span> Human-on-the-loop (tactical oversight)</li>
                  <li><span className="text-white font-semibold">Future:</span> Human-as-governor (strategic leadership)</li>
                </ul>
                <p className="text-sm text-gray-400 mt-4 italic">
                  The ERP system becomes the operational organization. The human workforce functions as executive leadership—designing strategic goals, managing governance modules, and applying judgment to novel exceptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your ERP with Agentic AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Our team specializes in building autonomous AI agents that integrate seamlessly with enterprise systems. Let's discuss how to future-proof your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                View Our AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
