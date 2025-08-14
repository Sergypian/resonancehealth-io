'use client'
import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/manbkopk' // your Formspree URL

export default function SignupForm(){
  const [status, setStatus] = useState<'idle'|'ok'|'err'|'loading'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setStatus('loading')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) (e.target as HTMLFormElement).reset()
      setStatus(res.ok ? 'ok' : 'err')
    } catch {
      setStatus('err')
    }
  }

  if (status === 'ok') {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-4 text-left dark:border-slate-800 dark:bg-slate-900">
        <p className="text-base font-medium">Thanks — you’re on the list!</p>
        <p className="mt-1 text-sm text-ink-soft">
          We’ve recorded your details. A member of the team will be in touch soon
          with next steps for early partners. If you need anything in the meantime,
          email <a className="underline" href="mailto:team@resonancehealth.io">team@resonancehealth.io</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
      <input
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />
      <input
        name="email"
        required
        type="email"
        placeholder="you@example.com"
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />

      <button disabled={status==='loading'} className="btn sm:col-span-2">
        {status==='loading' ? 'Sending…' : 'Join early access'}
      </button>

      {status==='err' && (
        <p className="sm:col-span-2 text-sm text-rose-600 dark:text-rose-300">
          Sorry, something went wrong. Please try again.
        </p>
      )}

      {/* GDPR line with blue Privacy Policy link */}
      <p className="sm:col-span-2 text-xs text-ink-faint">
        By submitting, you agree to be contacted about FitPath® pilots &amp; updates. See our{' '}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </form>
  )
}
