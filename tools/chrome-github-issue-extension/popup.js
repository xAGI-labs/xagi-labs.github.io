const ownerEl = document.getElementById('owner')
const repoEl = document.getElementById('repo')
const tokenEl = document.getElementById('token')
const createIssueBtn = document.getElementById('createIssueBtn')
const statusEl = document.getElementById('status')

const setStatus = (message, isError = false) => {
  statusEl.style.color = isError ? '#b00020' : '#1f2937'
  statusEl.innerHTML = message
}

const loadSettings = async () => {
  const { owner = '', repo = '', token = '' } = await chrome.storage.local.get(['owner', 'repo', 'token'])
  ownerEl.value = owner
  repoEl.value = repo
  tokenEl.value = token
}

const saveSettings = async () => {
  await chrome.storage.local.set({
    owner: ownerEl.value.trim(),
    repo: repoEl.value.trim(),
    token: tokenEl.value.trim(),
  })
}

const getActiveTab = async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  return tabs[0]
}

const buildIssuePayloadFromUrl = (tab) => {
  const pageUrl = tab?.url || ''
  const pageTitle = tab?.title || 'Untitled Page'
  const url = new URL(pageUrl)
  const params = url.searchParams

  const title =
    params.get('gh_issue_title') ||
    params.get('issue_title') ||
    params.get('title') ||
    `[Blog] ${pageTitle}`

  const details =
    params.get('gh_issue_body') ||
    params.get('issue_body') ||
    params.get('body') ||
    ''

  const labelsRaw =
    params.get('gh_issue_labels') ||
    params.get('issue_labels') ||
    params.get('labels') ||
    'blog-from-issue'

  const labels = labelsRaw
    .split(',')
    .map((label) => label.trim())
    .filter(Boolean)

  const body = [
    `Source URL: ${pageUrl}`,
    `Source Title: ${pageTitle}`,
    '',
    'Notes:',
    details || 'No additional notes provided in URL parameters.',
  ].join('\n')

  return { title, body, labels }
}

const createIssue = async () => {
  try {
    createIssueBtn.disabled = true
    setStatus('Creating issue...')

    await saveSettings()

    const owner = ownerEl.value.trim()
    const repo = repoEl.value.trim()
    const token = tokenEl.value.trim()

    if (!owner || !repo || !token) {
      throw new Error('Owner, repo, and token are required.')
    }

    const tab = await getActiveTab()
    if (!tab?.url) {
      throw new Error('Could not read current tab URL.')
    }

    const payload = buildIssuePayloadFromUrl(tab)

    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result?.message || 'GitHub API request failed.')
    }

    setStatus(`Issue created: <a href="${result.html_url}" target="_blank">#${result.number}</a>`)
  } catch (error) {
    setStatus(error.message || 'Failed to create issue.', true)
  } finally {
    createIssueBtn.disabled = false
  }
}

createIssueBtn.addEventListener('click', createIssue)
void loadSettings()
