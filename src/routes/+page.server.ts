import { checkUser } from '$lib/server/db/user';
import { fail } from '@sveltejs/kit';
import { readCollection } from '$lib/server/db/collection';
import { readJokes } from '$lib/server/db/joke';

export async function load() {
	const collection = await readCollection();
	const jokes = await readJokes();
	return { jokes, collection };
}

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.get('name_login')?.toString();
		const password = data.get('password_login')?.toString();
		if (!name)
			return fail(400, { message: "Le nom d'utilisateur est manquant", name, field: 'name_login' });
		try {
			const cookie = await checkUser(name, password);
			cookies.set('userCookie', cookie, { path: '/' });
			return { success: true, name: null, field: null };
		} catch (error) {
			return fail(400, {
				message: error.message,
				name,
				field: 'name_login'
			});
		}
	}
};
