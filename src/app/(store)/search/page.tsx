import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { getSearchProducts } from '@/services/getSearchProducts'
import { productsDTO } from '@/dtos/productsDTO'

interface SearchProps {
  searchParams: { q: string }
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const products = await getSearchProducts(query)

  const productFormatted = productsDTO(products ?? [])

  return (
    <main className="flex flex-col gap-4">
      <p className="text-sm">
        Resulta para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {productFormatted?.map((product) => (
          <Link
            href={`/product/${product?.image}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
            key={product?.id}
          >
            <Image
              src={product?.image ?? ''}
              alt=""
              width={480}
              height={480}
              quality={100}
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-28 right-28 h12 flex items-center gap-2 max-w-[280ox] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product?.title}</span>
              <span className="flex h-ful items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product?.priceFormatted}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
