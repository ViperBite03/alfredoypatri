import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN ?? "1f2fb5dca8c081221072b4a9827a5b74635c349b:qhxqf0cu69a3e7cf22js1ui1giun", {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const Guest = asDrizzleTable("Guest", { "columns": { "nombre": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "nombre", "collection": "Guest", "primaryKey": false, "optional": false } }, "asisto": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "asisto", "collection": "Guest", "primaryKey": false, "optional": true } }, "transporte": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "transporte", "collection": "Guest", "primaryKey": false, "optional": true } }, "alergias": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "alergias", "collection": "Guest", "primaryKey": false, "optional": true } }, "alcohol": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "alcohol", "collection": "Guest", "primaryKey": false, "optional": true } }, "mezcla": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "mezcla", "collection": "Guest", "primaryKey": false, "optional": true } } }, "deprecated": false }, false);

async function GET({ params, request }) {
  const guests = await db.select().from(Guest);
  return new Response(JSON.stringify(guests));
}
async function POST({ params, request }) {
  const data = await request.json();
  console.log(data);
  await db.insert(Guest).values({
    nombre: data.nombre,
    asisto: "si"
  });
  return new Response(
    JSON.stringify({
      holi: "Holi"
    })
  );
}

export { GET, POST };
