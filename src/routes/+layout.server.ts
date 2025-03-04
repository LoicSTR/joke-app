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

	const uniqueJokes = [...new Set(collection)];
	return {
		uniqueJokes,
		user: name ? userByName[name] : null
	};
}
