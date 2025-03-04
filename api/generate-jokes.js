import { writeFile } from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();
import BlaguesAPI from 'blagues-api';

const AccessToken = process.env.ACCESS_TOKEN;
const blagues = new BlaguesAPI(AccessToken);

export async function generateJokes() {
	try {
		const jokes = [];

		while (jokes.length < 250) {
			const joke = await blagues.random();
			if (['limit', 'blondes', 'beauf'].includes(joke.type)) continue;
			if (!jokes.some((j) => j.id === joke.id)) {
				jokes.push(joke);
			}
		}
		return writeFile('data/jokes.json', JSON.stringify(jokes, null, 2));
	} catch (e) {
		console.error(e);
	}
}
generateJokes();
