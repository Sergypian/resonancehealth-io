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
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        {/* Set theme class *before* paint to avoid flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('theme');var d=m? m==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.classList.toggle('dark', d);}catch(e){}})();`
          }}
        />

        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
          <nav className="section flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Resonance Health
              </Link>
              <ul className="hidden gap-4 md:flex">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-700 hover:underline dark:text-slate-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a href="#contact" className="hidden md:inline-flex btn">Get Early Access</a>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-200 py-10 text-sm text-slate-600 dark:border-slate-800/60 dark:text-slate-400">
          <div className="section flex items-center justify-between">
            <p>© {new Date().getFullYear()} Resonance Health</p>
            <p className="opacity-70">Tees Valley, UK • GDPR-aligned</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
