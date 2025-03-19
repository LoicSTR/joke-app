export const createRandomNumber = (nb: number) => {
	return Math.floor(Math.random() * nb);
};

export const getLikes = (id: number, data: Record<string, number[]>) => {
	return Object.values(data)
		.flat()
		.filter((jokeId) => jokeId === id).length;
};
