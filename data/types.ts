export type Listing = {
  id: string
  title: string
  description: string
  city: string
  address: string
  capacity: number
  pricePerNight: number
  rating: number
  amenities: string[]
  images: string[]
  coverImage: string
}

export type BookingRequest = {
  listingId: string
  startDate: string
  endDate: string
  guests: number
  contactName: string
  contactEmail: string
}
