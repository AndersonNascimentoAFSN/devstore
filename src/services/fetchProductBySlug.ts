import { api } from '@/data/api'

import { Product } from '@/data/types/product'

interface FetchProductBySlugProps {
  slug: string
}

export async function fetchProductBySlug({
  slug,
}: FetchProductBySlugProps): Promise<{ product: Product }> {
  const revalidationTime = 60 * 60 // 1 hours

  const response = await api(`/products/${slug}`, {
    cache: 'force-cache',
    // cache: 'no-cache',
    next: {
      // tags: ['products-featured'],
      revalidate: revalidationTime,
    },
  })

  const product = await response.json()

  return product
}
