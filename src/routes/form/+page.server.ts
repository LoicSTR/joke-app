import { addJoke } from '$lib/server/db/joke.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	validation: async ({ request }) => {
		const data = await request.formData();
		const id = Date.now();
		const joke = data.get('joke')?.toString();
		const answer = data.get('answer')?.toString();
		const type = data.get('type')?.toString();
		const author = 'Loïc';

		if (!joke || !answer || !type)
			return fail(400, { message: "Il manque un élément de la blague'", field: 'joke' });

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
