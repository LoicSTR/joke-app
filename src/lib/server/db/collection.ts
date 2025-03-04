import { write, read } from '$lib/server/io';

export function readCollection() {
	return read('collection.json').catch(() => []) as Promise<Record<string, number[]>>;
}
export async function addToCollection(id: number, user: string) {
	const collection = await readCollection();
	if (!collection[user]) {
		collection[user] = [];
	}
	collection[user].push(id);
	return write('collection.json', collection);
}
