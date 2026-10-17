// Test-only browser harness: mocks the challenge and API. Does not send email.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright')
const assert = require('node:assert/strict')
;(async () => {
  const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE, headless: true, args: ['--no-sandbox'] })
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } })
    const errors = []; const requests = []; let mode = 'failure'
    const page = await context.newPage()
    page.on('pageerror', e => errors.push(e.message))
    await page.route('**/*', async route => {
      const url = route.request().url()
      if (url.startsWith('https://challenges.cloudflare.com/turnstile/v0/api.js')) return route.fulfill({ contentType: 'application/javascript', body: 'window.turnstile={render(el,opts){window.testChallenge=opts.callback;opts.callback("synthetic-browser-token");return "test-widget"},remove(){},reset(){window.testChallenge("synthetic-browser-token")}}' })
      if (url.includes('/api/dataset-enquiry')) {
        const data = route.request().postDataJSON(); requests.push(data)
        return route.fulfill({ status: mode === 'success' ? 200 : 503, contentType: 'application/json', body: JSON.stringify(mode === 'success' ? { confirmed: true, receipt: data.receipt } : { error: 'Test delivery unavailable' }) })
      }
      if (!url.startsWith('http://127.0.0.1:3327')) return route.abort()
      return route.continue()
    })
    await page.goto('http://127.0.0.1:3327/dataset-brief/')
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).waitFor()
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    assert.match(await page.getByRole('status').first().innerText(), /valid work email/)
    assert.equal(requests.length, 0)
    await page.locator('#intake-details').fill('Synthetic browser test: English speech data for model evaluation.')
    await page.getByLabel('Your work email', { exact: true }).fill('test@example.com')
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    await page.getByText('Test delivery unavailable', { exact: true }).waitFor()
    assert.equal(await page.evaluate(() => (window.dataLayer || []).filter(x => x.event === 'dataset_enquiry_confirmed').length), 0)
    assert.match(await page.locator('#intake-details').inputValue(), /Synthetic browser test/)
    mode = 'success'
    await page.getByRole('button', { name: 'Send enquiry', exact: true }).click()
    await page.getByRole('button', { name: 'Enquiry received', exact: true }).waitFor()
    assert.equal(requests[0].receipt, requests[1].receipt)
    assert.equal(await page.getByRole('button', { name: 'Enquiry received', exact: true }).isDisabled(), true)
    const confirmed = await page.evaluate(() => (window.dataLayer || []).filter(x => x.event === 'dataset_enquiry_confirmed'))
    assert.equal(confirmed.length, 1)
    assert.ok(!JSON.stringify(confirmed).includes('test@example.com'))
    assert.ok(!JSON.stringify(confirmed).includes('Synthetic browser test'))
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    if (process.env.ENQUIRY_TEST_SCREENSHOT) await page.screenshot({ path: process.env.ENQUIRY_TEST_SCREENSHOT, fullPage: true })
    for (const path of ['/', '/data-partnerships/', '/experts/', '/opportunities/']) {
      await page.goto(`http://127.0.0.1:3327${path}`)
      assert.equal(await page.locator('h1').count(), 1)
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
      if (path !== '/opportunities/') assert.equal(await page.getByRole('button', { name: 'Send enquiry', exact: true }).count(), 1)
    }
    assert.deepEqual(errors, [])
    console.log(JSON.stringify({ test: 'mocked browser integration', routes: 5, width: 390, requests: requests.length, confirmedEvents: confirmed.length, errors, assertions: ['invalid input blocked', 'failure retains text and emits no conversion', 'retry keeps receipt', 'confirmed event has no contact or brief', 'success button disabled', 'mobile no overflow', 'legacy opportunities route preserved'] }, null, 2))
  } finally { await browser.close() }
})().catch(error => { console.error(error); process.exitCode = 1 })
