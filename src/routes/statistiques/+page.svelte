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
		<p>Nombre de blagues likées : <span>{data.uniqueJokes.length}</span></p>
		<p>Nombre total de likes : <span>{nbLikes}</span></p>
		<p>Nombre de blagues ajoutées : <span>{jokesAdded.length}</span></p>
		<p>
			Type de blague le plus liké : <span>{mostLikedType}</span>
		</p>
		<h3>Utilisateurs</h3>
		<p>Nombre d'utilisateurs : <span>{users.length}</span></p>
		<p>Plus gros blagueurs : <span>{name}</span></p>
	</div>
	<div>
		<h2>Mes statistiques</h2>
		<p>Nombre de blagues likées : <span>{data.myCollection?.length ?? 0}</span></p>
		<p>Nombre de blagues ajoutées : <span>{jokesAddedByMe.length}</span></p>
		<p>Type de blague le plus liké : <span>{myMostLikedType}</span></p>
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 2rem;
	}

	section > div {
		padding: 2rem;
		border: solid 1px #fff;
		border-radius: 1rem;
	}

	h2 {
		font-weight: 700;
		margin-bottom: 1rem;
	}
	h3 {
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 0.25rem;
	}
	p {
		line-height: 1.5rem;
	}
	span {
		font-weight: 500;
		font-size: 1.25rem;
		color: #fff;
	}
</style>
