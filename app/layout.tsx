import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import ThemeToggle from './shared/ThemeToggle'

export const metadata: Metadata = {
  title: 'Resonance Health — FitPath',
  description: 'Investor-ready long scroll with Glow assistant.'
}

const nav = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#evidence', label: 'Evidence' },
  { href: '#partners', label: 'Partners' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contact', label: 'Contact' }
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
          <nav className="section flex items-center justify-between gap-6 py-3">
            <Link href="/" className="text-lg font-semibold text-white">Resonance <span className="text-emerald-300">Health</span></Link>
            <ul className="hidden items-center gap-5 md:flex">
              {nav.map((n) => (
                <li key={n.href}><a className="text-slate-300 hover:text-white transition" href={n.href}>{n.label}</a></li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a href="#contact" className="hidden md:inline-flex btn">Get Early Access</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-slate-800/60 py-10 text-sm text-slate-400">
          <div className="section flex items-center justify-between">
            <p>© {new Date().getFullYear()} Resonance Health</p>
            <p className="opacity-70">Tees Valley, UK • GDPR-aligned</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
