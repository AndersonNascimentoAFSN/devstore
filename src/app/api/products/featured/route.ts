import data from '../data.json'

export async function GET() {
  const featuredProducts = data.products.filter((product) => product.featured)

  return new Response(JSON.stringify(featuredProducts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}