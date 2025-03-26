import { readCookieMap } from '$lib/server/db/cookies';
import { readCollection } from '$lib/server/db/collection';
import { readUsers } from '$lib/server/db/user';
import { readJokes } from '$lib/server/db/joke';

export async function load({ depends, cookies }) {
	depends('collection:all');
	const collection = await readCollection();
	const jokes = await readJokes();
	const cookie = cookies.get('userCookie');
	const cookieMap = await readCookieMap();

	const name = cookie ? cookieMap[cookie] : null;

	const userByName = await readUsers();

	let myCollection;
	const uniqueJokes = [...new Set(Object.values(collection).flat())];

	if (name) {
		myCollection = collection[name];
	}

	return {
		jokes,
		myCollection,
		uniqueJokes,
		user: name ? userByName[name] : null
	};
}
