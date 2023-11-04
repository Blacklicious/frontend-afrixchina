import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Afrixchina',
  description: 'le site pour le sourcing, le importation entre la chine et l\'afrique',
  icons: [{ rel: 'icon', url: '/afrixchina_logo.png', sizes: '40x40' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
