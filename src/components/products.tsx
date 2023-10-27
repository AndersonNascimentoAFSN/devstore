import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getFeaturedProducts } from '@/services/getFeaturedProducts'
import { formatterCurrencyNumber } from '@/utils'

import type { Product } from '@/data/types/product'

export const Products: FC = async () => {
  const products = await getFeaturedProducts()

  const productDTO = (products: Product[]) => {
    const [hightLightedProduct, ...otherProducts] = products.map((product) => {
      return {
        title: product.title,
        price: formatterCurrencyNumber(product.price),
        image: product.image,
        slug: product.slug,
      }
    })

    return {
      hightLightedProduct,
      otherProducts,
    }
  }

  const { hightLightedProduct, otherProducts } = productDTO(products)

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${hightLightedProduct?.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        <Image
          src={hightLightedProduct?.image}
          alt=""
          width={920}
          height={920}
          quality={100}
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h12 flex items-center gap-2 max-w-[280ox] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{hightLightedProduct.title}</span>
          <span className="flex h-ful items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {hightLightedProduct.price}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.slug}
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          <Image
            src={product.image}
            alt=""
            width={920}
            height={920}
            quality={100}
            className="group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-10 right-10 h12 flex items-center gap-2 max-w-[280ox] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-ful items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
