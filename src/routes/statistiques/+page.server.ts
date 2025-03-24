import { readJokes } from '$lib/server/db/joke';

export async function load() {
	const jokes = await readJokes();
	return { jokes };
}
