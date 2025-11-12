import { Listing } from './types'

const listings: Listing[] = [
  {
    id: 'grand-royale-hall',
    title: 'Grand Royale Banquet Hall',
    description: 'A luxurious banquet hall perfect for weddings and large celebrations. Elegant chandeliers, premium seating, and a spacious dance floor.',
    city: 'Mumbai',
    address: 'Bandra West, Mumbai',
    capacity: 500,
    pricePerNight: 1200,
    rating: 4.8,
    amenities: ['Air conditioning', 'Catering', 'Valet Parking', 'Bridal Suite', 'Stage & Lighting'],
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000&auto=format&fit=crop'
    ],
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'lakeside-pavilion',
    title: 'Lakeside Pavilion',
    description: 'Scenic lakeside venue ideal for intimate parties and outdoor ceremonies. Stunning sunset views and flexible seating.',
    city: 'Bengaluru',
    address: 'Hebbal Lake, Bengaluru',
    capacity: 150,
    pricePerNight: 600,
    rating: 4.6,
    amenities: ['Outdoor space', 'Catering Partners', 'Sound System', 'Parking'],
    images: [
      'https://images.unsplash.com/photo-1514512153610-e59ee9c1d376?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526169889312-73a05d6f9b92?q=80&w=2000&auto=format&fit=crop'
    ],
    coverImage: 'https://images.unsplash.com/photo-1514512153610-e59ee9c1d376?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'heritage-courtyard',
    title: 'Heritage Courtyard',
    description: 'Charming courtyard with heritage architecture. Perfect for mehendi, sangeet, and boutique receptions.',
    city: 'Jaipur',
    address: 'Pink City, Jaipur',
    capacity: 220,
    pricePerNight: 800,
    rating: 4.7,
    amenities: ['Decor', 'Green Rooms', 'Live Music Area', 'Generator Backup'],
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop'
    ],
    coverImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'citylight-ballroom',
    title: 'Citylight Ballroom',
    description: 'Modern ballroom with premium lighting and acoustics. Ideal for corporate gatherings and receptions.',
    city: 'Delhi',
    address: 'Connaught Place, New Delhi',
    capacity: 350,
    pricePerNight: 1000,
    rating: 4.5,
    amenities: ['AC', 'In-house Catering', 'Projector', 'Valet'],
    images: [
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop'
    ],
    coverImage: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop'
  }
]

export async function getAllListings(): Promise<Listing[]> {
  return listings
}

export async function getListingById(id: string): Promise<Listing | undefined> {
  return listings.find(l => l.id === id)
}
