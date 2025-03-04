import { readCookieMap } from '$lib/server/db/cookies';
import { readCollection } from '$lib/server/db/collection';
import { readUsers } from '$lib/server/db/user';

export async function load({ depends, cookies }) {
	depends('collection:all');
	const collection = await readCollection();
	const cookie = cookies.get('userCookie');
	const cookieMap = await readCookieMap();

	const name = cookie ? cookieMap[cookie] : null;

	const userByName = await readUsers();

	let myCollection;
	let uniqueJokes;
	if (name) {
		myCollection = collection[name];
		uniqueJokes = [...new Set(myCollection)];
	}

	return {
		myCollection,
		uniqueJokes,
		user: name ? userByName[name] : null
	};
}
