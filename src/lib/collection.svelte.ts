class Collection {
	ids: number[] = $state([]);

	add = (id: number) => {
		this.ids.push(id);
	};

	getLikes = (id: number) => {
		return this.ids.filter((jokeId) => jokeId === id).length;
	};
}

export const collection = new Collection();
