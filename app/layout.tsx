import './globals.css'
import Link from 'next/link'
import ThemeToggle from './shared/ThemeToggle'
import Analytics from './shared/Analytics'
import CookieConsent from './shared/CookieConsent'

export const metadata = {
  title: 'Resonance Health — FitPath',
  description: 'AI-guided arthritis support. Clinician-ready. Patient-friendly.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Resonance Health — FitPath',
    description: 'AI-guided arthritis support. Clinician-ready. Patient-friendly.',
    url: 'https://www.resonancehealth.io',
    siteName: 'Resonance Health',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resonance Health — FitPath',
    description: 'AI-guided arthritis support. Clinician-ready. Patient-friendly.',
    images: ['/og.png'],
  }
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 no-underline">
      <img src="/favicon.svg" alt="" className="h-7 w-7" />
      <span className="font-semibold text-xl text-ink dark:text-slate-100">Resonance <span className="text-brand">Health</span></span>
    </Link>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Analytics />
        <CookieConsent />
        <header className="border-b border-gray-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <Logo />
            <nav className="flex items-center gap-3 text-sm">
              <Link href="/fitpath">FitPath</Link>
              <Link href="/science">Science</Link>
              <Link href="/clinicians">For Clinicians</Link>
              <Link href="/investors">Investors</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="btn">Get Early Access</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="container py-12">{children}</main>
        <footer className="mt-16 border-t border-gray-200 dark:border-slate-800">
          <div className="container py-10 text-sm text-ink-soft dark:text-slate-400">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Resonance Health Ltd. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/cookies">Cookies</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
