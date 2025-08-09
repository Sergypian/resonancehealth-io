'use client';
import { useEffect, useState } from 'react';
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const isDark = stored ? stored === 'dark' : prefersDark;
    if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', isDark);
    setDark(isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', next);
    if (typeof window !== 'undefined') localStorage.setItem('theme', next ? 'dark' : 'light');
  };
  if (!mounted) return null;
  return <button onClick={toggle} className="btn-secondary h-9 px-3 text-sm" aria-label="Toggle theme">{dark ? 'Light mode' : 'Dark mode'}</button>;
}
