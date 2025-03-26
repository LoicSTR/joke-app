import { readCollection } from '$lib/server/db/collection';

export async function load() {
	const collection = await readCollection();
	return { collection };
}
