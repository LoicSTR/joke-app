const DISC_API_BASE_URL = 'https://api.discogs.com';
const ACCESS_TOKEN = '<YOUR ACCES TOKEN>';

export async function load() {
	try {
		// Effectuer la requête avec fetch
		const response = await fetch(
			`${DISC_API_BASE_URL}/database/search?q=random&per_page=1&page=1`,
			{
				headers: {
					Authorization: `Discogs token=${ACCESS_TOKEN}`
				}
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		const randomRelease = data.results[0];
		return {
			release: randomRelease
		};
	} catch (error) {
		console.error('Error fetching data from Discogs');
		return {
			error: 'Failed to load data'
		};
	}
}
