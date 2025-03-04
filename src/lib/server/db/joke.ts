import { write, read } from '$lib/server/io';
// import { addCookie, createRandomCookie } from './cookies';

type Joke = {
	id: number;
	joke: string;
	answer: string;
	type: string;
	author: string;
};

export function readJokes() {
	return read('jokes.json').catch(() => ({})) as Promise<{ [k: string]: Joke }>;
}

export async function addJoke(joke: Joke) {
	const jokes = await read('jokes.json');
	return write('jokes.json', [...jokes, joke]);
}
