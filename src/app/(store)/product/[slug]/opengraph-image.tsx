import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { fetchProductBySlug } from '@/services/fetchProductBySlug'
import { env } from '@/env'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const product = await fetchProductBySlug({ slug })

  const productImageURL = new URL(
    product?.image ?? '',
    env.APP_URL ?? '',
  ).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
