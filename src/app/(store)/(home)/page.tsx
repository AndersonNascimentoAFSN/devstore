import { Metadata } from 'next'
import { Suspense } from 'react'

import { Products, ProductsLoading } from '@/components/products'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<ProductsLoading />}>
        <Products />
      </Suspense>
    </main>
  )
}
