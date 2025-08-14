'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(true)

  // Load preference on mount (localStorage or system)
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
    setMounted(true)
  }, [])

  // Apply class + persist
  useEffect(() => {
    if (!mounted) return
    document.documentElement.classList.toggle('dark', dark)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    }
  }, [dark, mounted])

  if (!mounted) {
    // Avoid hydration mismatch flash
    return <button aria-label="Toggle theme" className="rounded-xl border px-3 py-2 text-slate-600 dark:text-slate-300"><Sun className="h-4 w-4" /></button>
  }

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
      title={dark ? 'Switch to light' : 'Switch to dark'}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
