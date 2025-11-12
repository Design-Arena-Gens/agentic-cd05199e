import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getListingById } from '@/data/listings'

export default async function ListingPage({ params }: { params: { id: string } }) {
  const listing = await getListingById(params.id)
  if (!listing) return notFound()

  return (
    <main className="py-6">
      <h1 className="text-xl font-bold">{listing.title}</h1>
      <p className="mt-1 text-gray-600">{listing.city} ? {listing.capacity} guests ? ? {listing.rating.toFixed(1)}</p>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div className="relative aspect-[16/11] overflow-hidden rounded-xl md:col-span-2">
          <Image src={listing.images[0] ?? listing.coverImage} alt={listing.title} fill className="object-cover" />
        </div>
        <div className="grid gap-4">
          {listing.images.slice(1).map((src, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-xl">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_360px]">
        <section>
          <h2 className="text-lg font-semibold">About this venue</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{listing.description}</p>
          <h3 className="mt-4 font-semibold">Amenities</h3>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
            {listing.amenities.map(a => (
              <li key={a} className="rounded-lg border border-gray-200 px-3 py-2">{a}</li>
            ))}
          </ul>
        </section>

        <aside className="card p-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xl font-bold">${listing.pricePerNight} <span className="text-base font-normal text-gray-600">night</span></div>
              <div className="text-sm text-gray-600">? {listing.rating.toFixed(1)}</div>
            </div>
          </div>
          <form action={async (formData: FormData) => {
            'use server'
            const startDate = formData.get('startDate') as string
            const endDate = formData.get('endDate') as string
            const guests = Number(formData.get('guests') || 1)
            const contactName = formData.get('contactName') as string
            const contactEmail = formData.get('contactEmail') as string

            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/bookings`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ listingId: listing.id, startDate, endDate, guests, contactName, contactEmail })
            })
          }} className="mt-4 grid gap-3">
            <input required name="startDate" type="date" className="rounded-xl border border-gray-300 px-3 py-2" />
            <input required name="endDate" type="date" className="rounded-xl border border-gray-300 px-3 py-2" />
            <input required name="guests" type="number" min={1} max={listing.capacity} defaultValue={50} className="rounded-xl border border-gray-300 px-3 py-2" />
            <input required name="contactName" placeholder="Your name" className="rounded-xl border border-gray-300 px-3 py-2" />
            <input required name="contactEmail" type="email" placeholder="Email" className="rounded-xl border border-gray-300 px-3 py-2" />
            <button className="btn btn-primary w-full px-4 py-2">Request booking</button>
          </form>
          <p className="mt-2 text-xs text-gray-500">This is a demo. Requests are simulated.</p>
        </aside>
      </div>
    </main>
  )
}
