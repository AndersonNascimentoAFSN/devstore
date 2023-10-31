import { api } from '@/data/api'

import { Product } from '@/data/types/product'

export async function getSearchProducts(
  query: string,
): Promise<{ products: Product[] } | undefined> {
  const revalidationTime = 60 * 60 // 1 hours

  const response = await api(`/product/search?q=${query}`, {
    cache: 'force-cache',
    // cache: 'no-cache',
    next: {
      tags: ['search-products'],
      revalidate: revalidationTime,
    },
  })

  const products = await response.json()

  return products
}
