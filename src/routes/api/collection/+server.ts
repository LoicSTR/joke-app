import { json } from '@sveltejs/kit';
import { read, write } from '$lib/io';

export async function GET() {
	const data = await read('jokes.json');
	return json(data);
}

export async function POST({ request }) {
	const payload = await request.json();
	const data = await read('jokes.json');
	data.push(payload.id);
	await write('jokes.json', data);
	return json(data);
}
