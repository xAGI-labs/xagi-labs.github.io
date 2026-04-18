import type { Metadata } from 'next'
import Link from 'next/link'
import { API_CATALOG_PATH, OPENAPI_PATH } from '@/lib/agent-discovery'

export const metadata: Metadata = {
  title: 'API Docs',
  description: 'Public API documentation and discovery links for xAGI Labs.',
  alternates: {
    canonical: 'https://xagi.in/docs/api',
  },
}

const endpoints = [
  {
    method: 'GET',
    path: '/api/health',
    description: 'Returns a simple health payload for uptime and discovery checks.',
    requestBody: 'None',
    responseBody: '{ "status": "ok" }',
  },
  {
    method: 'POST',
    path: '/api/chat',
    description: 'Accepts a message string and returns the generated response plus optional usage data.',
    requestBody: '{ "message": "Hello" }',
    responseBody: '{ "response": "text", "usage": null }',
  },
  {
    method: 'POST',
    path: '/api/generate-slides',
    description: 'Generates LinkedIn carousel slides from a prompt and optional slide count.',
    requestBody: '{ "prompt": "topic", "slideCount": 5 }',
    responseBody: '{ "slides": [{ "id": "slide-..." }] }',
  },
]

export default function ApiDocsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">xAGI Labs</p>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-950 dark:text-stone-50">API docs</h1>
        <p className="max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-300">
          Public API documentation for the endpoints currently exposed on xagi.in. These endpoints do not require OAuth
          or API-key authentication today.
        </p>
      </div>

      <section className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
        <h2 className="text-xl font-semibold text-stone-950 dark:text-stone-50">Discovery links</h2>
        <div className="mt-4 grid gap-3 text-sm text-stone-600 dark:text-stone-300">
          <Link href={OPENAPI_PATH} className="underline decoration-stone-300 underline-offset-4">
            OpenAPI spec
          </Link>
          <Link href={API_CATALOG_PATH} className="underline decoration-stone-300 underline-offset-4">
            API catalog
          </Link>
          <Link href="/.well-known/mcp/server-card.json" className="underline decoration-stone-300 underline-offset-4">
            MCP server card
          </Link>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        {endpoints.map((endpoint) => (
          <article
            key={endpoint.path}
            className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-white/10 dark:bg-[#111315]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-stone-50 dark:bg-stone-100 dark:text-stone-950">
                {endpoint.method}
              </span>
              <code className="text-sm text-stone-700 dark:text-stone-200">{endpoint.path}</code>
            </div>
            <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-300">{endpoint.description}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Request</p>
                <pre className="mt-2 overflow-x-auto rounded-2xl bg-white p-4 text-xs text-stone-700 dark:bg-black/30 dark:text-stone-200">
                  <code>{endpoint.requestBody}</code>
                </pre>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Response</p>
                <pre className="mt-2 overflow-x-auto rounded-2xl bg-white p-4 text-xs text-stone-700 dark:bg-black/30 dark:text-stone-200">
                  <code>{endpoint.responseBody}</code>
                </pre>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
