import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CartProvider from './components/Providers'
import ShoppingCartModel from './components/ShoppingCartModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KickX',
  description: 'KickX is the best place to buy shoes online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModel />
          {children}
        </CartProvider>
        </body>
    </html>
  )
}
