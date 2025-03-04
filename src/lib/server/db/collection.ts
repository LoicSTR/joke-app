import { write, read } from '$lib/server/io';

export function readCollection() {
	return read('collection.json').catch(() => []) as Promise<number[]>;
}
export async function addToCollection(id: number) {
	const collection = await readCollection();

	return write('collection.json', [...collection, id]);
}
