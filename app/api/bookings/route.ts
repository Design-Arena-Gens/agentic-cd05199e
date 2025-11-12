import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json()
  // In a real app, validate and persist. This is a demo.
  const response = {
    ok: true,
    reference: `BK-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    received: payload
  }
  return NextResponse.json(response)
}
