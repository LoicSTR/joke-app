class Collection {
	ids: number[] = $state([]);
	likes = $state<Record<number, number>>({});
	addToCollection = (id: number) => {
		if (!this.ids.includes(id)) {
			this.ids.push(id);
		}
		this.likes[id] = (this.likes[id] || 0) + 1;
	};

	getLikes = (id: number) => {
		return this.likes[id] || 0;
	};
}

export const collection = new Collection();
