import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import vm from "node:vm"
import ts from "typescript"
const source = readFileSync("lib/marketing-attribution.ts", "utf8")
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
const tracked = []
const context = {
  exports: {}, URL, URLSearchParams, process: { env: {} },
  document: { referrer: "https://example.com/?private=do-not-send" },
  window: {
    location: { pathname: "/dataset-brief/", search: "?private=do-not-send" },
    sessionStorage: { getItem() { throw new Error("storage denied") }, setItem() { throw new Error("storage denied") } },
    goatcounter: { count(event) { tracked.push(event) } },
  },
}
vm.runInNewContext(js, context)
assert.doesNotThrow(() => context.exports.captureAttribution())
assert.ok(context.exports.buildAttributedUrl("https://calendar.google.com/").startsWith("https://calendar.google.com/"))
context.exports.trackMarketingEvent("data_intake_email_draft", { intent: "buyer", placement: "/dataset-brief/", brief: "PRIVATE BRIEF", email: "private@example.com" })
assert.equal(tracked.length, 1)
const payload = JSON.stringify([context.window.dataLayer, tracked])
for (const secret of ["PRIVATE BRIEF", "private@example.com", "do-not-send"]) assert.ok(!payload.includes(secret))
assert.equal(context.window.dataLayer[0].event, "data_intake_email_draft")
context.window.goatcounter.count = () => { throw new Error("analytics unavailable") }
assert.doesNotThrow(() => context.exports.trackMarketingEvent("data_intake_download", { intent: "partner", placement: "/data-partnerships/" }))
assert.ok(!payload.includes("lead_received"))
console.log("Marketing checks passed: storage denial, optional analytics, data-event privacy and honest draft semantics.")
