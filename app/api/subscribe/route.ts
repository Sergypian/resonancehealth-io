import { NextResponse } from 'next/server'
export async function POST(request: Request) {
  const { email } = await request.json()
  if (!email || typeof email !== 'string') return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  const apiKey = process.env.MAILERLITE_API_KEY; const groupId = process.env.MAILERLITE_GROUP_ID
  if (!apiKey) { console.warn('MAILERLITE_API_KEY not set — simulating subscribe for', email); return NextResponse.json({ ok: true }) }
  try {
    const res = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-MailerLite-ApiKey': apiKey },
      body: JSON.stringify(groupId ? { email, groups: [groupId] } : { email })
    })
    if (!res.ok) return NextResponse.json({ error: 'MailerLite error' }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch { return NextResponse.json({ error: 'Network error' }, { status: 500 }) }
}
