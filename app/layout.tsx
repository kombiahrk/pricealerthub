import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700']
 })

export const metadata: Metadata = {
  title: 'PriceAlertHub',
  description: "At PriceAlertHub, we're your go-to destination for smart shopping decisions. Our platform is designed to empower savvy consumers like you by providing real-time insights into product prices across various online retailers. We believe that every purchase should be a well-informed one, and that's where PriceAlertHub comes in.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
        {children}
        </main>
        
        </body>
    </html>
  )
}
