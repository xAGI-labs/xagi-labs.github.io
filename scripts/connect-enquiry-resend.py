"""Run yourself in a terminal. Key input is hidden and never saved locally."""
import getpass
import subprocess
import sys

if not sys.stdin.isatty():
    raise SystemExit('Run this directly in your terminal, not through chat or a pipe.')

print('Connect a sending-only Resend key restricted to m.xagi.in.')
print('Destination: Cloudflare secret RESEND_API_KEY on xagi-dataset-enquiry.')
print('The key travels over SSH/TLS; it is not written to a local file or Git.')
key = getpass.getpass('Paste the Resend API key (hidden): ').strip()
if not key.startswith('re_') or len(key) < 20 or any(c.isspace() for c in key):
    raise SystemExit('That does not look like a Resend API key. Nothing was stored.')
command = [
    'ssh', '-o', 'BatchMode=yes', '-o', 'ConnectTimeout=15',
    'saurav-agents-aws',
    'cd /home/saurav/projects/xagi-free-enquiry-20261017 && '
    'wrangler secret put RESEND_API_KEY --config workers/enquiry/wrangler.jsonc',
]
try:
    result = subprocess.run(command, input=key + '\n', text=True, capture_output=True, timeout=90)
finally:
    del key
if result.returncode:
    raise SystemExit(f'Secret connection failed (exit {result.returncode}). No key value is printed. Ask Codex to check the connection.')
print('Sending credential stored for xagi-dataset-enquiry. Enquiry sending is still disabled.')
