import { db, Guest } from 'astro:db'

export async function GET({ params, request }) {
  const guests = await db.select().from(Guest)

  return new Response(JSON.stringify(guests))
}

export async function POST({ params, request }) {
  const data = await request.json()
  console.log(data.nombre)
  await db.insert(Guest).values({
    nombre: data.nombre,
    asisto: 'si',
  })

  return new Response(
    JSON.stringify({
      holi: 'Holi',
    })
  )
}
