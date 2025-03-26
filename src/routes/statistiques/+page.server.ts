import { readCollection } from '$lib/server/db/collection';
import { readJokes } from '$lib/server/db/joke';
import { readUsers } from '$lib/server/db/user';

export async function load() {
	const collection = await readCollection();
	const jokes = await readJokes();
	const users = await readUsers();
	return { jokes, collection, users };
}
