import fs from 'fs';
import BlaguesAPI from 'blagues-api';

const AccessToken = import.meta.env.VITE_ACCESS_TOKEN;
const blagues = new BlaguesAPI(AccessToken);

async function generateJokes() {
	try {
		const jokes = [];
		for (let i = 0; i < 100; i++) {
			const joke = await blagues.random();
			if (!jokes.some((j) => j.id === joke.id)) {
				jokes.push(joke);
			}
		}
		fs.writeFileSync('./jokes.json', JSON.stringify(jokes, null, 2));
	} catch (e) {
		console.error(e);
	}
}

generateJokes();
