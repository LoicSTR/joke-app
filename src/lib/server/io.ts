import { readFile, writeFile } from 'fs/promises';

const basePath = 'data/';

export async function read(path: string) {
	const json = (await readFile(basePath + path)).toString();
	const data = JSON.parse(json);
	return data;
}

export async function write(path: string, data: unknown) {
	const string = JSON.stringify(data);
	await writeFile(basePath + path, string);
}
