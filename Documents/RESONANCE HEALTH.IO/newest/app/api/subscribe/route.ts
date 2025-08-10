import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const body = await req.text() // keep it simple
  // In production, send to your CRM / email list provider here.
  console.log('Signup:', body)
  return NextResponse.json({ ok: true })
}
