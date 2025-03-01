import { json } from '@sveltejs/kit';
import { addToCollection, readCollection } from '$lib/server/db/collection.js';

export async function GET() {
	const data = await readCollection();
	return json(data);
}

export async function POST({ request }) {
	const payload = await request.json();

	await addToCollection(payload.id);

	return new Response();
}
