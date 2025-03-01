import { write, read } from '$lib/server/io';

export function readCollection() {
	return read('collection.json').catch(() => []) as Promise<number[]>;
}
export async function addToCollection(id: number) {
	const collection = await readCollection();

	if (!collection.includes(id)) {
		collection.push(id);
		return write('collection.json', collection);
	}
}
