import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import ThemeRegistry from './_theme/registry'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindcase | Redefining Legal Industry',
  description: 'Redefining Legal Industry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
