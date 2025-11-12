import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Venuefy ? Party & Marriage Halls',
  description: 'Book beautiful venues for your events',
  manifest: '/manifest.webmanifest',
  themeColor: '#4b75ff'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <div className="mx-auto max-w-6xl px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
