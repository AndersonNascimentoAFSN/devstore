import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

interface GetParams {
  params: {
    slug: string
  }
}

export async function GET(_req: NextRequest, { params }: GetParams) {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // delay 5s

  const slug = z.string().safeParse(params.slug)

  if (!slug.success) {
    return NextResponse.json(
      {
        message: 'Invalid slug',
      },
      { status: 400 },
    )
  }

  const product = data.products.find((product) => product.slug === slug.data)

  if (!product) {
    return NextResponse.json(
      {
        message: 'Product not found',
      },
      { status: 404 },
    )
  }

  return NextResponse.json(
    {
      product,
    },
    { status: 200 },
  )
}
