'use client'
import { useState } from 'react'

const ENDPOINT = 'https://formspree.io/f/manbkopk' // Your Formspree link

export default function SignupForm(){
  const [status, setStatus] = useState<'idle'|'ok'|'err'|'loading'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setStatus('loading')

    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok) (e.target as HTMLFormElement).reset()
    } catch {
      setStatus('err')
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
      <input name="name" required placeholder="Your name"
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />
      <input name="email" required type="email" placeholder="you@example.com"
        className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" />

      <button disabled={status==='loading'} className="btn sm:col-span-2">
        {status==='loading' ? 'Sending…' : 'Join early access'}
      </button>

      {status==='ok' && <p className="sm:col-span-2 text-sm text-emerald-600 dark:text-emerald-300">Thanks — you’re on the list.</p>}
      {status==='err' && <p className="sm:col-span-2 text-sm text-rose-600 dark:text-rose-300">Sorry, something went wrong.</p>}
    </form>
  )
}
