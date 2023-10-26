import type { Metadata } from 'next'

import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'devstore',
  description: 'Generated by create next app',
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-app grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </div>
  )
}
