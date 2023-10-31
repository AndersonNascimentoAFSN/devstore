import { Product } from '@/data/types/product'
import { productDTO } from './productDTO'

export const productsDTO = (products: Product[] | undefined) => {
  const data = products?.map((product) => {
    return productDTO(product)
  })

  return data ?? []
}
