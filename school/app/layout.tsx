import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Lying Demo',
  description: 'Demonstration of how AI can be manipulated to provide false information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

