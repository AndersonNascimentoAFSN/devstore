import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // delay 5s

  const { searchParams } = request.nextUrl

  const query = z.string().safeParse(searchParams.get('q'))

  if (!query.success) {
    return NextResponse.json(
      {
        message: 'Invalid query',
      },
      { status: 400 },
    )
  }

  const products = data.products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.data.toLocaleLowerCase()),
  )

  return NextResponse.json(
    {
      products,
    },
    { status: 200 },
  )
}
