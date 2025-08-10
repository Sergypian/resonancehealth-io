'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const bubbles = [
  'Hello — I’m Glow, your AI companion for arthritis care.',
  'Daily 30-second check‑ins keep you moving on stiff days.',
  'I adapt your plan and create a shareable summary for clinicians.'
]

export default function GlowAssistant(){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setI(v => (v+1) % bubbles.length), 4000)
    return ()=> clearInterval(id)
  }, [])
  return (
    <div className="pointer-events-none hidden lg:block fixed right-6 bottom-6 z-30 animate-floaty">
      <div className="relative">
        <Image src="/glow.png" alt="Glow" width={72} height={72} className="rounded-full ring-2 ring-emerald-400/40" />
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-emerald-400 animate-blink" />
      </div>
      <div className="pointer-events-auto mt-3 max-w-xs rounded-2xl border border-slate-800 bg-slate-900/90 p-3 shadow-lg">
        <p className="text-sm text-slate-200">{bubbles[i]}</p>
      </div>
    </div>
  )
}
