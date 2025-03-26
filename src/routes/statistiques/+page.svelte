<script lang="ts">
	import { getLikes } from '$lib/helpers.js';
	import type { Joke } from '$lib/types/joke.ts';
	const { data } = $props();

	const collection = Object.entries(data.collection);
	const users = Object.entries(data.users);
	const jokes: Joke[] = Object.values(data.jokes);

	let nbLikes = $state(0);
	let maxLength = 0;
	let index = $state(0);
	let name = $state('');

	collection.forEach(([n, likes], i) => {
		nbLikes += likes.length;
		if (likes.length > maxLength) {
			maxLength = likes.length;
			index = i;
			name = n;
		}
	});

	const jokesAdded = jokes.filter((joke) => joke.author);
	const jokesAddedByMe = jokesAdded.filter((joke) => data.myCollection?.includes(joke.id));

	const jokesInCollection = jokes
		.filter((joke) => data.uniqueJokes?.includes(joke.id))
		.map((joke) => ({
			...joke,
			likes: getLikes(joke.id, data.collection)
		}));

	const myFilteredCollection = jokes
		.filter((j) => data.myCollection?.includes(j.id))
		.map((j) => ({ ...j, likes: getLikes(j.id, data.collection) }));

	function countTypes(jokesList: { type: string; likes: number }[]) {
		return jokesList.reduce(
			(acc, { type, likes }) => {
				acc[type] = (acc[type] || 0) + likes;
				return acc;
			},
			{} as Record<string, number>
		);
	}

	const typeCount = countTypes(jokesInCollection);
	const myTypeCount = countTypes(myFilteredCollection);

	const typeDictionnary: Record<string, string> = {
		dev: 'Geek',
		dark: 'Sombre',
		global: 'Basique'
	};

	const getMostLikedType = (countObj: Record<string, number>) =>
		typeDictionnary[Object.entries(countObj).sort((a, b) => b[1] - a[1])[0][0]];

	let mostLikedType = getMostLikedType(typeCount);
	let myMostLikedType = getMostLikedType(myTypeCount);
</script>

<h1>Statistiques</h1>

<section>
	<div>
		<h2>Statistiques globales</h2>
		<h3>Blagues</h3>
		<div>Nombre de blagues likées : {data.uniqueJokes.length}</div>
		<div>Nombre total de likes : {nbLikes}</div>
		<div>Nombre de blagues ajoutées : {jokesAdded.length}</div>
		<div>
			Type de blague le plus liké : {mostLikedType}
		</div>
		<h3>Utilisateurs</h3>
		<div>Nombre d'utilisateurs : {users.length}</div>
		<div>Plus gros blagueurs : {name}</div>
	</div>
	<div>
		<h2>Mes statistiques</h2>
		<div>Nombre de blagues likées : {data.myCollection?.length ?? 0}</div>
		<div>Nombre de blagues ajoutées : {jokesAddedByMe.length}</div>
		<div>Type de blague le plus liké : {myMostLikedType}</div>
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 2rem;
	}

	section > div {
		padding: 1rem;
		border: solid 1px #fff;
	}
</style>
