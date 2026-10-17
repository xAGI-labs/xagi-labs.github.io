// Local export integration only: challenge and delivery are mocked; no email is sent.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const base = process.env.PILOT_TEST_ORIGIN || 'http://127.0.0.1:3327'
const screenshots = process.env.PILOT_SCREENSHOTS
;(async () => {
  const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE, headless: true, args: ['--no-sandbox'] })
  try {
    const { validate } = await import('../workers/enquiry/index.mjs')
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } })
    const page = await context.newPage()
    const errors = [], requests = []; let delivery = 'failure'
    page.on('pageerror', e => errors.push(e.message))
    await context.route('**/*', route => {
      const url = route.request().url()
      if (url.startsWith('https://challenges.cloudflare.com/turnstile/v0/api.js')) return route.fulfill({ contentType: 'application/javascript', body: 'window.turnstile={render(el,opts){window.testChallenge=opts.callback;opts.callback("synthetic-browser-token");return "test-widget"},remove(){},reset(){window.testChallenge("synthetic-browser-token")}}' })
      if (url.includes('/api/dataset-enquiry')) {
        const data = route.request().postDataJSON(); requests.push(data)
        return route.fulfill({ status: delivery === 'success' ? 200 : 503, contentType: 'application/json', body: JSON.stringify(delivery === 'success' ? { confirmed: true, receipt: data.receipt } : { error: 'Synthetic delivery unavailable' }) })
      }
      return url.startsWith(base) ? route.continue() : route.abort()
    })
    await page.goto(base + '/')
    await page.getByRole('link', { name: 'Scope a voice evaluation pilot', exact: true }).click()
    await page.getByRole('heading', { name: 'Regional-language voice evaluation pilot' }).waitFor()
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://xagi.in/voice-evaluation-pilot/')
    if (screenshots) { fs.mkdirSync(screenshots, { recursive: true }); await page.screenshot({ path: screenshots + '/voice-pilot-desktop.png' }) }
    await page.getByRole('link', { name: 'Check what to prepare' }).click()
    await page.waitForFunction(() => document.querySelector('input[name=readiness-audience][value=buyer]')?.checked)
    await page.getByLabel('A dataset or source for licensing', { exact: true }).check()
    await page.getByRole('button', { name: 'Build my preparation plan' }).click()
    await page.getByRole('heading', { name: 'Prepare the source and permissions evidence' }).waitFor()
    assert.equal(await page.locator('[aria-labelledby=readiness-result-heading]').evaluate(el => document.activeElement === el), true)
    assert.match(await page.getByRole('link', { name: 'Discuss my source', exact: false }).getAttribute('href'), /data-partnerships/)
    await page.getByLabel('A voice evaluation pilot', { exact: true }).check()
    assert.equal(await page.locator('#readiness-result-heading').count(), 0)
    await page.getByRole('button', { name: 'Build my preparation plan' }).click()
    await page.getByRole('heading', { name: 'Define the evaluation question first' }).waitFor()
    for (const select of await page.locator('select[id^=readiness-]').all()) await select.selectOption('yes')
    await page.getByRole('button', { name: 'Build my preparation plan' }).click()
    await page.getByRole('heading', { name: 'You have information to scope a review' }).waitFor()
    await page.locator('#readiness-conditions').selectOption('no')
    await page.getByRole('button', { name: 'Build my preparation plan' }).click()
    await page.getByRole('heading', { name: 'Coverage gaps', exact: true }).waitFor()
    assert.match(await page.locator('[aria-labelledby=readiness-result-heading]').innerText(), /noise, devices/)
    if (screenshots) await page.screenshot({ path: screenshots + '/readiness-plan-desktop.png' })
    const downloaded = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Download my preparation plan' }).click()
    const file = await downloaded
    const report = fs.readFileSync(await file.path(), 'utf8')
    assert.match(report, /No answers were submitted/)
    assert.match(report, /conditions.*Missing/s)
    assert.equal(requests.length, 0)
    await page.getByRole('link', { name: 'Discuss my voice evaluation scope' }).click()
    await page.getByRole('heading', { name: 'Scope a voice evaluation pilot', exact: true }).waitFor()
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://xagi.in/dataset-brief/')
    await page.getByLabel('Your work email', { exact: true }).fill('synthetic@example.com')
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    assert.equal(requests.length, 0)
    await page.locator('#intake-details').fill('short')
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    assert.equal(requests.length, 0)
    await page.locator('#intake-details').fill('Synthetic pilot test: review regional speech and code-switching failures with a held-out sample.')
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    await page.getByText('Synthetic delivery unavailable', { exact: true }).waitFor()
    assert.equal(requests[0].placement, '/dataset-brief/')
    assert.equal(requests[0].modality, 'Speech & audio')
    assert.match(requests[0].details, /^Voice evaluation pilot/)
    assert.ok(validate(requests[0]), 'pilot payload must satisfy the unchanged production backend contract')
    assert.equal(await page.evaluate(() => (window.dataLayer || []).filter(e => e.event === 'dataset_enquiry_confirmed').length), 0)
    delivery = 'success'
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    await page.getByRole('button', { name: 'Enquiry received', exact: true }).waitFor()
    assert.equal(requests[0].receipt, requests[1].receipt)
    assert.equal(await page.evaluate(() => (window.dataLayer || []).filter(e => e.event === 'dataset_enquiry_confirmed').length), 1)
    assert.ok(!JSON.stringify(await page.evaluate(() => window.dataLayer)).includes('synthetic@example.com'))
    assert.ok(!JSON.stringify(await page.evaluate(() => window.dataLayer)).includes('Synthetic pilot test'))
    const results = []
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 1000 })
      for (const path of ['/', '/voice-evaluation-pilot/', '/speech-training-data/', '/dataset-readiness-checklist/', '/dataset-brief/', '/data-partnerships/', '/experts/', '/opportunities/', '/voice-ai/', '/blog/132024-rip-coqui/', '/projects/haryanvi-tts/']) {
        const response = await page.goto(base + path)
        assert.equal(response.status(), 200, path)
        assert.equal(await page.locator('h1').count(), 1, path)
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, path)
        results.push({ path, width, status: response.status() })
        if (screenshots && width === 390 && path === '/voice-evaluation-pilot/') await page.screenshot({ path: screenshots + '/voice-pilot-mobile.png', fullPage: true })
      }
    }
    assert.deepEqual(errors, [])
    console.log(JSON.stringify({ test: 'mocked pilot and readiness integration', results, requests: requests.length, errors, assertions: ['buyer and owner plans', 'coverage and rights actions', 'focus and invalidation', 'private downloadable plan', 'pilot CTA context', 'short input blocked', 'failure and idempotent retry', 'one confirmed event without private content', 'existing enquiry intents preserved', 'desktop and mobile layout'] }, null, 2))
  } finally { await browser.close() }
})().catch(e => { console.error(e); process.exitCode = 1 })
