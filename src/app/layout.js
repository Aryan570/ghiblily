import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ghiblily - My Portfolio',
  description: 'My Portfolio website inspired from Studio Ghibli',
}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    
  )
}
