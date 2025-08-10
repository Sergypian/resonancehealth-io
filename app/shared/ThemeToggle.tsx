'use client'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(true)
  useEffect(()=>{ document.documentElement.classList.toggle('dark', dark) }, [dark])
  return (
    <button onClick={()=>setDark(d=>!d)} className="rounded-xl border border-slate-700 px-3 py-2 text-slate-300 hover:bg-slate-900" aria-label="Toggle theme">
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
