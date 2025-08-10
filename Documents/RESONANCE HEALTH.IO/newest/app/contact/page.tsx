export default function Page() {
  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-3xl font-semibold">Get Early Access</h1>
      <p className="text-slate-400">Tell us a little about yourself and we’ll reach out.</p>
      <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll be in touch.')}}>
        <input required placeholder="Name" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2" />
        <input required type="email" placeholder="Email" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2" />
        <textarea placeholder="Anything else…" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2" rows={4} />
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  )
}
