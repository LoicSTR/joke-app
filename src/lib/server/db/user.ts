import { write, read } from '$lib/server/io';
import { addCookie, createRandomCookie } from './cookies';

type User = {
	name: string;
	userName: string;
	password: string;
	humourLevel: number;
};

export function readUsers() {
	return read('userByName.json').catch(() => ({})) as Promise<{ [k: string]: User }>;
}

export async function addUser(user: User) {
	const users = await readUsers();
	if (user.name in users) {
		throw new Error("Ce nom d'utilisateur existe déjà");
	}
	return write('userByName.json', {
		[user.userName]: user,
		...users
	});
}

export async function checkUser(name: string, password?: string) {
	const users = await readUsers();

	const cookie = createRandomCookie();

	await addCookie(name, cookie);

	if (!(name in users) || password !== users[name].password) {
		throw new Error("Le nom d'utilisateur ou le mot de passe n'est pas correct");
	}
	return cookie;
}
