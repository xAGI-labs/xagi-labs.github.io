export const SITE_ORIGIN = "https://xagi.in"

/** Match the static export's slash URLs; keep genuine external canonicals intact. */
export function canonicalUrl(value: string) {
  const url = new URL(value, SITE_ORIGIN)
  if (["xagi.in", "www.xagi.in", "xagi-labs.github.io"].includes(url.hostname)) {
    url.protocol = "https:"
    url.hostname = "xagi.in"
    url.search = ""
    url.hash = ""
    if (!url.pathname.endsWith("/") && !url.pathname.split("/").pop()?.includes(".")) url.pathname += "/"
  }
  return url.toString()
}
