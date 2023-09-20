import type { Metadata } from 'next'

import DashboardLayout from '@/app/_layout/dashboard-layout'

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
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
