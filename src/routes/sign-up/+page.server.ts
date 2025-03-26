import { addUser } from '$lib/server/db/user';
import { fail } from '@sveltejs/kit';

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name_register')?.toString();
		const userName = data.get('userName_register')?.toString();
		const password = data.get('password_register')?.toString();
		const confirmPassword = data.get('confirmPassword_register')?.toString();
		const humourLevel = Number(data.get('humourLevel'));

		if (!name)
			return fail(400, {
				message: 'Le prénom est manquant',
				name,
				userName,
				humourLevel,
				field: 'name_register'
			});
		if (!userName)
			return fail(400, {
				message: "Le nom d'utilisateur est manquant",
				name,
				userName,
				humourLevel,
				field: 'userName_register'
			});
		if (!password || password.length < 4)
			return fail(400, {
				message: "Le mot de passe n'existe pas ou il est trop court",
				name,
				userName,
				humourLevel,
				field: 'password_register'
			});
		if (password !== confirmPassword)
			return fail(400, {
				message: 'Le mot de passe est différent dans les deux champs',
				name,
				userName,
				humourLevel,
				field: 'confirmPassword_register'
			});
		if (humourLevel > 5)
			return fail(400, {
				message: "Vous n'avez pas assez d'humour pour vous inscrire",
				name,
				userName,
				humourLevel,
				field: 'humourLevel'
			});
		try {
			await addUser({ name, userName, password, humourLevel });
			return {
				success: true,
				name: null,
				userName: null,
				password: null,
				humourLevel: null,
				field: null
			};
		} catch (error) {
			return fail(400, {
				message: error.message,
				name,
				userName,
				humourLevel,
				field: 'name_register'
			});
		}
	}
};
