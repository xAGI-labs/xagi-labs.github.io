import { readdir, readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
async function protect(dir) {
  let count = 0
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) { count += await protect(path); continue }
    if (!entry.name.endsWith(".html")) continue
    let html = await readFile(path, "utf8")
    if (html.includes("<!--email_off-->")) continue
    if (!/<body(?:\s[^>]*)?>/.test(html) || !html.includes("</body>")) throw new Error(`Missing body: ${path}`)
    html = html.replace(/(<body(?:\s[^>]*)?>)/, "$1<!--email_off-->").replace("</body>", "<!--/email_off--></body>")
    await writeFile(path, html)
    count++
  }
  return count
}
console.log(`Protected React markup from Cloudflare email rewriting in ${await protect("out")} HTML files.`)
