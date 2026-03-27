# URL to GitHub Issue (Chrome Extension)

This extension opens a prefilled GitHub issue page from the current tab.
The target repo is hardcoded to `xaGI-labs/xagi-labs.github.io`.

## Setup

1. Open Chrome and go to `chrome://extensions`.
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select this folder.
4. Click the extension button to open a prefilled issue page.

No GitHub token and no repo config are required.

## URL Parameters

If present in the page URL, these are used:
- `gh_issue_title`
- `gh_issue_body`
- `gh_issue_labels` (comma-separated)

Fallback behavior:
- Title defaults to `[Blog] <current page title>`
- Body includes source URL, page title, source host, and capture timestamp
- Label defaults to `blog-from-issue`

## Example URL

`https://example.com/article?gh_issue_title=Agentic+RAG+Patterns&gh_issue_body=Turn+this+into+a+tutorial&gh_issue_labels=blog-from-issue,content`

When you click **Open Prefilled GitHub Issue**, it opens:

`https://github.com/xaGI-labs/xagi-labs.github.io/issues/new?...`

Then just click **Submit new issue** on GitHub.
