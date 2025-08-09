'use client';
import { useState } from 'react';
export default function NewsletterForm() {
  const [email, setEmail] = useState(''); const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) });
      setStatus(res.ok ? 'ok' : 'error');
    } catch { setStatus('error'); }
  };
  return (
    <form onSubmit={submit} className="flex w-full max-w-md items-center gap-2">
      <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"
             className="flex-1 rounded-xl border border-gray-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"/>
      <button disabled={status==='loading'} className="btn" type="submit">{status==='loading' ? 'Joining…' : 'Join'}</button>
      {status==='ok' && <span className="text-sm text-brand">Thanks! Check your inbox.</span>}
      {status==='error' && <span className="text-sm text-accent">Something went wrong.</span>}
    </form>
  );
}
