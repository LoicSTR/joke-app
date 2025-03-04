import { write, read } from '$lib/server/io';
import { randomBytes } from 'crypto';

export function readCookieMap() {
	return read('userByCookie.json').catch(() => ({})) as Promise<{ [k: string]: string }>;
}
export async function addCookie(user: string, cookie: string) {
	const cookieMap = await readCookieMap();

	return write('userByCookie.json', {
		[cookie]: user,
		...cookieMap
	});
}

export function createRandomCookie() {
	const buffer = randomBytes(48);
	const token = buffer.toString('hex');
	return token;
}
