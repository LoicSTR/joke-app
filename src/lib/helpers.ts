export const createRandomNumber = (nb: number) => {
	return Math.floor(Math.random() * nb);
};

export const getLikes = (id: number, data: number[]) => {
	return data.filter((jokeId) => jokeId === id).length;
};
