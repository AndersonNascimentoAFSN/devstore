import { api } from '@/data/api'

import { Product } from '@/data/types/product'

export async function getFeaturedProducts(): Promise<Product[]> {
  const revalidationTime = 60 * 60 // 1 hours

  const response = await api('/products/featured', {
    // cache: 'force-cache',
    // cache: 'no-cache',
    next: {
      tags: ['products-featured'],
      revalidate: revalidationTime,
    },
  })

  const products = await response.json()

  return products
}
