const ownerEl = document.getElementById('owner')
const repoEl = document.getElementById('repo')
const createIssueBtn = document.getElementById('createIssueBtn')
const statusEl = document.getElementById('status')

const setStatus = (message, isError = false) => {
  statusEl.style.color = isError ? '#b00020' : '#1f2937'
  statusEl.innerHTML = message
}

const loadSettings = async () => {
  const { owner = '', repo = '' } = await chrome.storage.local.get(['owner', 'repo'])
  ownerEl.value = owner
  repoEl.value = repo
}

const saveSettings = async () => {
  await chrome.storage.local.set({
    owner: ownerEl.value.trim(),
    repo: repoEl.value.trim(),
  })
}

const getActiveTab = async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
  return tabs[0]
}

const buildIssueFieldsFromUrl = (tab) => {
  const pageUrl = tab?.url || ''
  const pageTitle = tab?.title || 'Untitled Page'
  const page = new URL(pageUrl)
  const params = page.searchParams

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
    .join(',')

  const body = [
    `Source URL: ${pageUrl}`,
    `Source Title: ${pageTitle}`,
    `Source Host: ${page.host}`,
    `Captured At: ${new Date().toISOString()}`,
    '',
    'Notes:',
    details || 'No additional notes provided in URL parameters.',
  ].join('\n')

  return { title, body, labels }
}

const createPrefilledIssueUrl = (owner, repo, fields) => {
  const base = `https://github.com/${owner}/${repo}/issues/new`
  const query = new URLSearchParams({
    title: fields.title,
    body: fields.body,
    labels: fields.labels,
  })
  return `${base}?${query.toString()}`
}

const openIssue = async () => {
  try {
    createIssueBtn.disabled = true
    setStatus('Opening prefilled issue page...')

    await saveSettings()

    const owner = ownerEl.value.trim()
    const repo = repoEl.value.trim()

    if (!owner || !repo) {
      throw new Error('Owner and repo are required.')
    }

    const tab = await getActiveTab()
    if (!tab?.url) {
      throw new Error('Could not read current tab URL.')
    }

    const fields = buildIssueFieldsFromUrl(tab)
    const issueUrl = createPrefilledIssueUrl(owner, repo, fields)

    await chrome.tabs.create({ url: issueUrl })
    setStatus(`Opened: <a href="${issueUrl}" target="_blank">Prefilled GitHub issue</a>`)
  } catch (error) {
    setStatus(error.message || 'Failed to open prefilled issue page.', true)
  } finally {
    createIssueBtn.disabled = false
  }
}

createIssueBtn.addEventListener('click', openIssue)
void loadSettings()
