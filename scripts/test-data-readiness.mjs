import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import vm from "node:vm"
import ts from "typescript"
const js = ts.transpileModule(readFileSync("lib/data-readiness.ts", "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
const context = { exports: {} }
vm.runInNewContext(js, context)
const { readinessQuestions, buildReadinessPlan, readinessReport } = context.exports
const complete = role => Object.fromEntries(readinessQuestions[role].map(q => [q.id, "yes"]))
const unknownOwner = buildReadinessPlan("owner", {})
assert.equal(unknownOwner.gaps.length, 6)
assert.match(unknownOwner.recommendation, /before arranging any sample transfer/)
assert.equal(unknownOwner.href, "/data-partnerships/#introduce")
for (const state of ["no", "unknown"]) {
  const owner = buildReadinessPlan("owner", { ...complete("owner"), permissions: state })
  assert.match(owner.heading, /permissions evidence/)
  assert.equal(owner.gaps.length, 1)
}
const buyer = buildReadinessPlan("buyer", {})
assert.match(buyer.heading, /evaluation question/)
assert.equal(buyer.href, "/dataset-brief/?offer=voice-evaluation&from=readiness#intake")
const coverageGap = buildReadinessPlan("buyer", { ...complete("buyer"), conditions: "no" })
assert.equal(coverageGap.gaps.length, 1)
assert.equal(coverageGap.gaps[0].category, "Coverage gaps")
assert.match(coverageGap.gaps[0].action, /noise, devices/)
for (const audience of ["buyer", "owner"]) {
  const plan = buildReadinessPlan(audience, complete(audience))
  assert.equal(plan.gaps.length, 0)
  assert.match(plan.heading, /scope a review/)
  const report = readinessReport(audience, complete(audience))
  assert.match(report, /does not verify rights/)
  assert.match(report, /No answers were submitted/)
  assert.ok(!report.includes("undefined"))
  assert.equal((report.match(/Documented/g) || []).length, 6)
}
console.log("Readiness checks passed: owner permissions gates, buyer criteria and coverage gaps, complete assessments, private downloads and correct handoffs.")
