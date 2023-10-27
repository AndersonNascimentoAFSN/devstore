import { NextRequest, NextResponse } from 'next/server'

import data from '../data.json'

export async function GET(req: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // delay 5s

  const splitUrl = req.url.split('/')
  const [slugProduct] = splitUrl.slice(-1)

  const productFound = data.products.find(
    (product) => product.slug === slugProduct,
  )

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
