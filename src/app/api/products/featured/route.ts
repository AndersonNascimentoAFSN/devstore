import data from '../data.json'

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // delay 5s

  const featuredProducts = data.products.filter((product) => product.featured)

  return new Response(JSON.stringify(featuredProducts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
