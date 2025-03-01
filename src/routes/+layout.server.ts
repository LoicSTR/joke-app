import { read } from '$lib/server/io';
export async function load({ depends }) {
	depends('collection:all');
	const collection = await read('collection.json');
	const uniqueJokes = [...new Set(collection)];
	return {
		uniqueJokes
	};
}
