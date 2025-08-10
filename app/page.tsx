'use client';
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Brain, Activity, Lock } from 'lucide-react'
import NewsletterForm from './shared/NewsletterForm'

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="badge">Now inviting early partners</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AI-guided arthritis care you can start today.</h1>
          <p className="text-lg text-ink-soft">Resonance Health builds tools that help people with arthritis move better—starting with <strong>FitPath</strong>, a friendly AI companion that checks in on pain and mood, adapts your plan, and helps you share progress with your clinician.</p>
          <div className="flex gap-3">
            <Link href="/contact" className="btn">Get Early Access</Link>
            <Link href="/fitpath" className="btn-secondary">See how it works</Link>
          </div>
          <ul className="grid gap-3 text-ink-soft">
            <li className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 text-brand" /> Designed in the Tees Valley; local pilots in view</li>
            <li className="flex items-start gap-2"><Brain className="mt-0.5 h-5 w-5 text-brand" /> Patient-friendly, clinician-ready, UK GDPR compliant</li>
            <li className="flex items-start gap-2"><Activity className="mt-0.5 h-5 w-5 text-brand" /> Attia/Huberman-aligned pillars for movement & recovery</li>
            <li className="flex items-start gap-2"><Lock className="mt-0.5 h-5 w-5 text-brand" /> In discussion with Versus Arthritis (exploration stage)</li>
          </ul>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-gray-200 p-6 dark:border-slate-800">
          <div className="absolute inset-0 -z-10 bg-hero-light dark:bg-hero-dark" />
          <div className="phone"><div className="screen">
            <div className="space-y-3">
              <div className="screen-card">Glow: “How are your joints today?”</div>
              <div className="screen-card">You: “A little sore.”</div>
              <div className="screen-card">Glow: “Let’s do 3 gentle mobility moves. I’ll check back later.”</div>
              <div className="screen-card">Pain • Mood • Activity — tracked</div>
            </div>
          </div></div>
        </motion.div>
      </section>

      <section className="rounded-2xl border border-gray-200 p-6 dark:border-slate-800">
        <p className="mb-4 text-sm text-ink-soft">Building with support from our local ecosystem and discussions with potential partners:</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex items-center justify-center rounded-xl border border-gray-200 p-4 text-sm text-ink-soft dark:border-slate-800">Teesside Univ. FUEL</div>
          <div className="flex items-center justify-center rounded-xl border border-gray-200 p-4 text-sm text-ink-soft dark:border-slate-800">Versus Arthritis (in discussion)</div>
          <div className="flex items-center justify-center rounded-xl border border-gray-200 p-4 text-sm text-ink-soft dark:border-slate-800">NHS-aligned Pathways</div>
          <div className="flex items-center justify-center rounded-xl border border-gray-200 p-4 text-sm text-ink-soft dark:border-slate-800">Tees Valley Partners</div>
        </div>
        <p className="mt-2 text-xs text-ink-faint">Names shown for context only; not endorsements.</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What people say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: 'The check-ins make it easy to keep moving, even on stiff days.', name: 'Pilot Participant', role: 'Osteoarthritis (knee)' },
            { quote: 'Simple and friendly. My patients like the small, actionable steps.', name: 'Physiotherapist', role: 'MSK clinic' },
            { quote: 'Clear trends help me feel in control of a long-term condition.', name: 'Beta User', role: 'Rheumatoid arthritis' }
          ].map((t, i) => (
            <blockquote key={i} className="card">
              <p className="text-ink-soft">“{t.quote}”</p>
              <footer className="mt-3 text-sm text-ink-faint">— {t.name}, {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 p-6 text-center dark:border-slate-800">
        <h3 className="mb-2 text-xl font-semibold">Get product updates</h3>
        <p className="mx-auto mb-4 max-w-xl text-ink-soft">No spam. Just occasional updates on FitPath pilots, releases, and research highlights.</p>
        <div className="flex justify-center"><NewsletterForm /></div>
      </section>
    </div>
  )
}
