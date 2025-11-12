import { NextResponse } from 'next/server'
import { getAllListings } from '@/data/listings'

export async function GET() {
  const data = await getAllListings()
  return NextResponse.json(data)
}
