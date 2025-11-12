import Image from 'next/image'
import Link from 'next/link'
import { getAllListings } from '@/data/listings'
import { Listing } from '@/data/types'
import { Suspense } from 'react'

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link href={`/listings/${listing.id}`} className="card overflow-hidden">
      <div className="relative aspect-[16/11]">
        <Image src={listing.coverImage} alt={listing.title} fill className="object-cover"/>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold line-clamp-1">{listing.title}</h3>
          <div className="text-sm text-gray-600">? {listing.rating.toFixed(1)}</div>
        </div>
        <p className="mt-1 text-sm text-gray-600 line-clamp-1">{listing.city} ? {listing.capacity} guests</p>
        <p className="mt-2 text-sm"><span className="font-semibold">${listing.pricePerNight}</span> night</p>
      </div>
    </Link>
  )
}

function Filters() {
  return (
    <form className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
      <input name="q" placeholder="Search venues" className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" />
      <input name="city" placeholder="City" className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" />
      <input name="min" type="number" placeholder="Min price" className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" />
      <input name="max" type="number" placeholder="Max price" className="rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300" />
      <button className="btn btn-primary col-span-2 sm:col-span-1">Search</button>
    </form>
  )
}

function filterListings(listings: Listing, form: FormData) {
  return listings
}

export default async function Home({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const listings = await getAllListings()
  const q = (searchParams.q as string) || ''
  const city = (searchParams.city as string) || ''
  const min = Number(searchParams.min ?? 0)
  const max = Number(searchParams.max ?? Infinity)

  const filtered = listings.filter(l =>
    l.title.toLowerCase().includes(q.toLowerCase()) &&
    (city ? l.city.toLowerCase().includes(city.toLowerCase()) : true) &&
    l.pricePerNight >= (isNaN(min) ? 0 : min) &&
    l.pricePerNight <= (isNaN(max) ? Infinity : max)
  )

  return (
    <main className="py-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Find venues for your next event</h1>
        <Link href="/host" className="btn btn-outline px-3 py-2">List your venue</Link>
      </header>
      <Filters />
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map(l => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </section>
    </main>
  )
}
