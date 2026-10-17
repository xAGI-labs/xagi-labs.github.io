// No SDK dependency, no Cloudflare paid email binding, no caller-chosen recipient.
export function resendEmail(env, fetcher = fetch) {
  return {
    async send(message, receipt) {
      const result = await fetcher('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `xagi-enquiry/${receipt}` },
        body: JSON.stringify({ from: env.FROM_EMAIL, to: ['saurav@xagi.in'], reply_to: message.replyTo, subject: message.subject, text: message.text }),
        signal: AbortSignal.timeout(12000),
      })
      if (!result.ok) throw new Error('Email service did not accept the enquiry')
      const body = await result.json()
      if (typeof body.id !== 'string' || !body.id) throw new Error('Email acceptance receipt missing')
      return { messageId: body.id }
    },
  }
}
