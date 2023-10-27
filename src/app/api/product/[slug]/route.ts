import { NextRequest, NextResponse } from 'next/server'

import data from '../data.json'

interface GetParams {
  params: {
    slug: string
  }
}

export async function GET(req: NextRequest, { params: { slug } }: GetParams) {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // delay 5s

  const productFound = data.products.find((product) => product.slug === slug)

  if (!productFound) {
    return NextResponse.json(
      {
        message: 'Product not found',
      },
      { status: 404 },
    )
  }

  return NextResponse.json(
    {
      product: productFound,
    },
    { status: 200 },
  )
}
