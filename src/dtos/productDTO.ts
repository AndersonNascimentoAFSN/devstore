import { Product } from '@/data/types/product'
import { formatterCurrencyNumber } from '@/utils'

export const productDTO = (product: Product | undefined) => {
  if (product) {
    const taxe = 12
    const discount = product?.price / taxe

    return {
      ...product,
      discount: formatterCurrencyNumber(discount),
      priceFormatted: formatterCurrencyNumber(product?.price),
    }
  }
}
