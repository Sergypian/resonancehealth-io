'use client'
import { useState } from 'react'

export default function SignupForm(){
  const [status, setStatus] = useState<'idle'|'ok'|'err'>('idle')
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try{
      const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify(data) })
      setStatus(res.ok ? 'ok' : 'err')
    }catch{
      setStatus('err')
    }
  }
  return (
    <form onSubmit={onSubmit} className="mx-auto grid w-full max-w-lg grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
      <input name="name" required placeholder="Your name" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100" />
      <input name="email" required type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100" />
      <button className="btn sm:col-span-2">Join early access</button>
      {status==='ok' && <p className="sm:col-span-2 text-emerald-300 text-sm">Thanks — you’re on the list.</p>}
      {status==='err' && <p className="sm:col-span-2 text-rose-300 text-sm">Sorry, something went wrong.</p>}
    </form>
  )
}
