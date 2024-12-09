import BlaguesAPI from 'blagues-api';

const AccessToken = import.meta.env.VITE_ACCESS_TOKEN;

export async function load() {
	const blagues = new BlaguesAPI(AccessToken);
	const blague = await blagues.random();
	return { blague };
}
