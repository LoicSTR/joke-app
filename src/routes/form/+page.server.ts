import { addJoke } from '$lib/server/db/joke.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	validation: async ({ request, url }) => {
		const data = await request.formData();
		const id = Date.now();
		const joke = data.get('joke')?.toString();
		const answer = data.get('answer')?.toString();
		const type = data.get('type')?.toString();
		const author = url.searchParams.get('user')?.toString() ?? '';

		if (!joke) return fail(400, { message: "Il manque l'intitulé de la blague'", field: 'joke' });
		if (!answer)
			return fail(400, { message: "Il manque la réponse à la blague'", field: 'answer' });
		if (!type) return fail(400, { message: "Il manque le type de la blague'", field: 'type' });

		try {
			await addJoke({ id, joke, answer, type, author });
			return { success: true, field: null };
		} catch (error) {
			return fail(400, {
				message: error.message,
				field: 'joke'
			});
		}
	}
};
