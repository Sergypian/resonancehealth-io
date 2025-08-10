'use client'

import GlowAssistant from './shared/GlowAssistant'
import SignupForm from './shared/SignupForm'

export default function Page(){
  return (
    <>
      <GlowAssistant />

      {/* HERO */}
      <section className="section grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="badge">Now inviting early partners</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            FitPath — AI-guided arthritis care you can start today.
          </h1>
          <p className="text-lg text-ink-soft">
            Daily 30-second check-ins, adaptive movement guidance, and a one-page clinician summary — guided by Glow, your AI companion.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="btn">Get Early Access</a>
            <a href="#solution" className="btn-secondary">See how it works</a>
          </div>
          <ul className="grid gap-2 text-ink-soft">
            <li>• Designed in the Tees Valley; local pilots in view</li>
            <li>• Patient-friendly, clinician-ready, UK GDPR aligned</li>
            <li>• Grounded in movement & recovery pillars; adherence-first</li>
            <li>• In discussion with Versus Arthritis (exploration)</li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 p-6">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" />
          <div className="mx-auto max-w-xs">
            <img src="/glow.png" alt="Glow" className="mx-auto h-36 w-36 rounded-full ring-2 ring-emerald-400/40" />
            <div className="mt-4 space-y-2 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">Glow: “Hello, great to see you againg Mrs Smith! How are you feeling today?”</div>               
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">You: “Hi Glow, great to see you too! I feel a little sore on my back and shoulder.”</div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">Glow: “I’m sorry to hear you’re feeling sore, Mrs. Smith. Let’s take a closer look together. I recall last time you mentioned some stiffness in your neck — has that improved?”</div>               
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-3">Pain • Mood • Activity — tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="section space-y-4 py-16">
        <p className="kicker">Problem</p>
        <h2 className="text-2xl font-semibold">Arthritis is common, costly, and under-supported between visits</h2>
        <p className="text-ink-soft max-w-3xl">Guidelines emphasise exercise, education and weight management as first-line care, yet delivery is inconsistent and adherence is hard — especially with long gaps between appointments.</p>
        <ul className="grid gap-3 md:grid-cols-3 text-sm text-ink-soft">
          <li className="card">Millions live with arthritis in the UK; MSK conditions are a leading cause of disability.</li>
          <li className="card">Exercise and supported self‑management can improve pain and function in many cohorts.</li>
          <li className="card">Clinicians need simple ways to keep patients engaged between visits.</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="section space-y-4 py-16">
        <p className="kicker">Solution</p>
        <h2 className="text-2xl font-semibold">FitPath: brief daily check‑ins → adaptive plan → shareable progress</h2>
        <ol className="mt-2 grid gap-4 md:grid-cols-3">
          <li className="card"><h4 className="font-medium">1) 30‑second check‑ins</h4><p className="text-ink-soft mt-1">Log pain, stiffness, mood, and movement.</p></li>
          <li className="card"><h4 className="font-medium">2) Adaptive guidance</h4><p className="text-ink-soft mt-1">Gentle, graded mobility & recovery matched to the day.</p></li>
          <li className="card"><h4 className="font-medium">3) One‑page summary</h4><p className="text-ink-soft mt-1">Simple trends for patients; clear snapshot for clinicians.</p></li>
        </ol>
      </section>

      {/* EVIDENCE */}
      <section id="evidence" className="section space-y-4 py-16">
        <p className="kicker">Evidence</p>
        <h2 className="text-2xl font-semibold">Grounded in guidance and emerging digital health evidence</h2>
        <ul className="list-disc pl-6 text-ink-soft space-y-2">
          <li>Exercise and education are core for osteoarthritis management (NICE NG226).</li>
          <li>Digital self‑management can support pain, function and self‑efficacy in some groups.</li>
          <li>Real‑world adherence is the hard part — FitPath is designed for small, sustainable wins.</li>
        </ul>
        <div className="rounded-2xl border border-slate-800 p-4">
          <h3 className="font-medium">Selected sources (clickable)</h3>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
            <li><a target="_blank" href="https://www.nice.org.uk/guidance/ng226">NICE NG226 — Osteoarthritis in over 16s</a></li>
            <li><a target="_blank" href="https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions">WHO — Musculoskeletal conditions (Fact sheet)</a></li>
            <li><a target="_blank" href="https://www.versusarthritis.org/about-arthritis/data-and-statistics/the-state-of-musculoskeletal-health/">Versus Arthritis — State of Musculoskeletal Health</a></li>
            <li><a target="_blank" href="https://www.nhs.uk/conditions/osteoarthritis/treatment/">NHS — Osteoarthritis treatment overview</a></li>
            <li><a target="_blank" href="https://www.england.nhs.uk/long-read/an-improvement-framework-to-reduce-community-musculoskeletal-waits-while-delivering-best-outcomes-and-experience/">NHS England — Long Term Plan (MSK, prevention)</a></li>
            <li><a target="_blank" href="https://www.bmj.com/content/347/bmj.f5555">BMJ — OA management and exercise (review articles)</a></li>
            <li><a target="_blank" href="https://www.thelancet.com/clinical/diseases/osteoarthritis">The Lancet — Osteoarthritis Series</a></li>
            <li><a target="_blank" href="https://www.cochranelibrary.com/">Cochrane Library — Exercise and OA (systematic reviews)</a></li>
            <li><a target="_blank" href="https://www.nature.com/subjects/rheumatoid-arthritis">Nature — Arthritis research (selection)</a></li>
            <li><a target="_blank" href="https://jamanetwork.com/searchresults?q=osteoarthritis%20exercise">JAMA — Osteoarthritis & Exercise (search)</a></li>
            <li><a target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/?term=osteoarthritis+digital+self-management+randomized">PubMed — Digital self‑management RCTs</a></li>
            <li><a target="_blank" href="https://www.nhsconfed.org/">NHS Confederation — MSK & service pressures (briefings)</a></li>
          </ol>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="section space-y-4 py-16">
        <p className="kicker">Partners</p>
        <h2 className="text-2xl font-semibold">Local ecosystem support and discussions</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex items-center justify-center rounded-xl border border-slate-800 p-4 text-sm text-ink-soft">Teesside Univ. FUEL</div>
          <div className="flex items-center justify-center rounded-xl border border-slate-800 p-4 text-sm text-ink-soft">Versus Arthritis (in discussion)</div>
          <div className="flex items-center justify-center rounded-xl border border-slate-800 p-4 text-sm text-ink-soft">NHS‑aligned Pathways</div>
          <div className="flex items-center justify-center rounded-xl border border-slate-800 p-4 text-sm text-ink-soft">Tees Valley Partners</div>
        </div>
        <p className="text-xs text-ink-faint">Names shown for context only; not endorsements.</p>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section space-y-4 py-16">
        <p className="kicker">Roadmap</p>
        <h2 className="text-2xl font-semibold">Next 6–12 months</h2>
        <ul className="grid gap-3 md:grid-cols-2 text-ink-soft">
          <li className="card">Clinician portal (read‑only summaries, export)</li>
          <li className="card">Outcomes instrumentation (minutes moved, flare frequency, adherence)</li>
          <li className="card">Pilot evaluations and commissioning conversations</li>
          <li className="card">Occupational health / insurer pilots</li>
        </ul>
      </section>

      {/* CONTACT / SIGNUP */}
      <section id="contact" className="section space-y-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">Be an early partner</h2>
        <p className="mx-auto max-w-xl text-ink-soft">Join pilots, evaluate outcomes, and help shape what people use every day.</p>
        <div className="mt-4"><SignupForm /></div>
        <p className="mt-2 text-xs text-ink-faint">We’ll only email about FitPath pilots, releases, and research updates.</p>
      </section>
    </>
  )
}
