export const SITE_ORIGIN = "https://xagi-labs.github.io"
export const API_DOCS_PATH = "/docs/api"
export const OPENAPI_PATH = "/docs/api/openapi.json"
export const API_CATALOG_PATH = "/.well-known/api-catalog"
export const AGENT_SKILLS_INDEX_PATH = "/.well-known/agent-skills/index.json"
export const MCP_SERVER_CARD_PATH = "/.well-known/mcp/server-card.json"
export function absoluteUrl(pathname: string) { return new URL(pathname, SITE_ORIGIN).toString() }
export const agentSkills = [
  { name: "site-overview", type: "skill-md", description: "Read the static xAGI Labs overview and public links.", url: "/.well-known/agent-skills/site-overview/SKILL.md" },
  { name: "api-usage", type: "skill-md", description: "Read the retirement notice for the former public APIs.", url: "/.well-known/agent-skills/api-usage/SKILL.md" },
]
export function getApiCatalogDocument() { return { linkset: [], description: "The public chat and slide-generation APIs are retired. This website is static." } }
export function getOpenApiDocument() {
  return { openapi: "3.1.0", info: { title: "xAGI Labs static website", version: "2.0.0", description: "The former chat and slide-generation endpoints are retired. No runtime API is provided." }, servers: [{ url: SITE_ORIGIN }], paths: {} }
}
