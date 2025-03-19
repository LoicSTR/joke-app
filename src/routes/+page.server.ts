import { readCollection } from '$lib/server/db/collection';
import { readJokes } from '$lib/server/db/joke';

export async function load() {
	const collection = await readCollection();
	const jokes = await readJokes();
	return { jokes, collection };
}
