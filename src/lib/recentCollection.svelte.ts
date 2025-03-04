class RecentCollection {
	ids: number[] = $state([]);

	add = (id: number) => {
		this.ids.push(id);
	};
}

export const recentCollection = new RecentCollection();
