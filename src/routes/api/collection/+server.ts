import { json } from '@sveltejs/kit';
import { addToCollection, readCollection } from '$lib/server/db/collection.js';
// import { readCookieMap } from '$lib/server/db/cookies.js';
// import { readUsers } from '$lib/server/db/user.js';

export async function GET() {
	const data = await readCollection();
	return json(data);
}

export async function POST({ request }) {
	const payload = await request.json();

	// const cookie = cookies.get('userCookie');
	// const cookieMap = await readCookieMap();

	// const name = cookie ? cookieMap[cookie] : null;
	// const userByName = await readUsers();

	// const userName = name ? userByName[name] : null;

	await addToCollection(payload.id);
	return new Response();
}
