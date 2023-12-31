import { Metadata } from 'next'
import Image from 'next/image'

import { fetchProductBySlug } from '@/services/fetchProductBySlug'
import { getFeaturedProducts } from '@/services/getFeaturedProducts'
import { AddCartButton } from '@/components/add-cart-button'
import { productDTO } from '@/dtos/productDTO'

interface ProductProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await fetchProductBySlug({ slug: params.slug })
  return {
    title: product?.title ?? '',
    description: `Page of product ${params.slug}`,
  }
}

export async function generateStaticParams() {
  const products = await getFeaturedProducts()

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductProps) {
  const { slug } = params

  const product = await fetchProductBySlug({ slug })

  const productFormatted = productDTO(product)

  return (
    <main className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          alt=""
          src={productFormatted?.image ?? ''}
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {productFormatted?.title}
        </h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          {productFormatted?.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block px-5 py-2.5 rounded-full bg-violet-500 font-semibold">
            {productFormatted?.price}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de {productFormatted?.discount}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 rounded-full text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 rounded-full text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 rounded-full text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center border border-zinc-700 bg-zinc-800 rounded-full text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <AddCartButton productId={productFormatted?.id ?? 0} />
      </div>
    </main>
  )
}
