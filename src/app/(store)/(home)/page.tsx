import { Suspense } from 'react'

import { Products, ProductsLoading } from '@/components/products'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<ProductsLoading />}>
        <Products />
      </Suspense>
    </main>
  )
}
