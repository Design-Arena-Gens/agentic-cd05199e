import { NextResponse } from 'next/server'
import { getListingById } from '@/data/listings'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const listing = await getListingById(params.id)
  if (!listing) return new NextResponse('Not Found', { status: 404 })
  return NextResponse.json(listing)
}
