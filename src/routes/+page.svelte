<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Joke from '$lib/components/Joke.svelte';
	import TypeToggleButton from '$lib/components/TypeToggleButton.svelte';
	import { recentCollection } from '$lib/recentCollection.svelte.js';
	import { createRandomNumber, getLikes } from '$lib/helpers';
	import { invalidate } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	const { data } = $props();
	$inspect(data);
	if (!data.user) throw redirect(302, '/log-in');

	const typesUnique = [...new Set(data.jokes.map((joke) => joke.type))];

	let activeTypes = $state(
		Object.fromEntries(typesUnique.map((type) => [type, type === 'global' || type === 'dev']))
	);

	const myCollection = data.collection[data.user?.userName];

	function getFilteredJokes() {
		return data.jokes.filter((joke) => activeTypes[joke.type]);
	}

	function getRandomJoke() {
		const filteredJokes = getFilteredJokes();
		if (filteredJokes.length === 0) return null;
		const randomId = createRandomNumber(filteredJokes.length);
		const joke = filteredJokes[randomId];
		return { ...joke, likes: 0 };
		// return { ...joke, likes: getLikes(joke.id, myCollection) };
	}

	let currentJoke = $state(getRandomJoke());

	function reloadJoke() {
		currentJoke = getRandomJoke();
	}

	async function addToCollection(id: number) {
		await fetch('/api/collection', { method: 'POST', body: JSON.stringify({ id }) });
		invalidate('collection:all');
		recentCollection.add(id);
	}
</script>

{#if !data.user}
	<p>Il est nécessaire de se connecter pour accéder au contenu du site</p>
{:else}
	<section class="types-container">
		{#each typesUnique as type}
			<TypeToggleButton bind:isOn={activeTypes[type]} typeName={type} />
		{/each}
	</section>
	<section>
		<Joke {currentJoke} {addToCollection} {reloadJoke} />
	</section>
	<section>
		<Button text="Ajouter une blague" link="/form"></Button>
	</section>
{/if}

<style>
	.types-container {
		display: flex;
		gap: 2rem;
	}
</style>
