# Voice evaluation pilot and readiness changes

Validated on 17 October 2026, based on main `02155108b3c0f812806d3f85a2bed13079021be6` (PR76).

## Buyer experience

- New `/voice-evaluation-pilot/` page: task and coverage specification, representative sample review, error analysis and targeted sourcing brief. Pricing, source permissions, reviewer access and timing require a scoped proposal. No commercial corpus, customer results or performance gains are claimed.
- Homepage and speech-page CTAs lead to the pilot. The existing generic dataset path remains available.
- Pilot links select the voice buyer path in the existing readiness tool and preserve pilot context at `/dataset-brief/?offer=voice-evaluation#intake`.
- Readiness offers separate data-owner and voice-buyer questions, evidence/coverage/quality actions, an agreed review scope, local markdown downloads and relevant handoffs. Answers are not sent or stored by the tool. Analytics receive only existing safe intent/placement fields.
- Pilot enquiries use the existing `/dataset-brief/` placement and `Speech & audio` modality accepted by the unchanged backend. Pilot context is included in the notification brief; invalid short briefs remain invalid. Email-draft and download fallbacks remain.
- New pilot canonical and Service JSON-LD; sitemap, RSS and AI-readable summaries link to it. Existing canonical URLs remain unchanged.

## Validation

All builds, browser tests and bulk export comparisons ran on the existing AWS host using installed dependencies. No local dependency installation or paid service was needed.

- `npm run lint`: passed, existing unrelated warnings remain.
- Production `npm run build` with online enquiries enabled: passed, including type checks.
- `npm run test:readiness`: passed owner authority/permission gates, buyer criteria/coverage gaps, complete assessments, download content and correct destinations. Added to PR CI.
- `npm run test:marketing`: passed privacy and optional analytics checks.
- `npm run test:enquiry`: 13 passed.
- `python3 scripts/verify-seo-export.py`: 502 unique sitemap URLs, no canonical or schema errors; crawl policies preserved.
- `python3 scripts/verify-voice-pilot-regression.py --baseline <PR76 Pages artifact>`: all 1,426 prior HTML files preserved; no removed sitemap URLs or unexpected visible changes. The sole added sitemap URL is the pilot. Ten existing data-program/home pages intentionally change for CTAs/tool/shared footer.
- Export comparison normalizes pre-existing date formatting, Opportunities source timestamp, randomized snake-game decoration and redundant currency zero decimals on Silicon Halli. The latter differs between the deployed Node 22 and AWS Node 24 Intl formatting; that page's source is unchanged. No whole legacy page is exempted.
- Browser integration: 11 routes at desktop 1440px and mobile 390px, no overflow or application errors. Owner/buyer selection, default buyer handoff, grouped gaps, focus, result invalidation and downloaded preparation plan checked.
- Mocked pilot enquiry verifies empty/short input rejection, existing backend payload contract, failure without conversion, unchanged-receipt retry and a single confirmed event with no email or brief in analytics. These browser tests do not send email or prove fresh live delivery; production provider delivery was verified in PR76.
- Separate dark-mode mobile check passed pilot, readiness and pilot intake.

Use the existing Playwright installation for the browser harness:

```sh
python3 -m http.server 3327 --bind 127.0.0.1 --directory out
PLAYWRIGHT_MODULE_PATH=<installed-playwright> PLAYWRIGHT_CHROMIUM_EXECUTABLE=<installed-chromium> node scripts/test-voice-pilot-browser.cjs
```

Screenshot and curated JSON evidence are in this directory. No credentials, raw lead records or admin screenshots are included. Build-generated Mercor snapshot changes were restored and excluded from the commit.

## Release boundary

This PR only changes static website source, resource files and validation. No Worker, Resend, Turnstile, DNS, CNAME, redirect, robots or certificate configuration changes. Production remains on PR76 until explicitly approved for merge. After approval, let Pages CI deploy, then verify the new offer, readiness handoffs, existing enquiry forms and legacy SEO routes on the live site. Roll back the frontend by reverting the PR; keep the existing enquiry backend and certificate maintenance separate.
