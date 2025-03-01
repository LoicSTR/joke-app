<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Joke from '$lib/components/Joke.svelte';
	import TypeToggleButton from '$lib/components/TypeToggleButton.svelte';
	import { collection } from '$lib/collection.svelte';
	import { createRandomNumber } from '$lib/helpers';
	import { invalidate } from '$app/navigation';

	const { data } = $props();

	const typesUnique = [...new Set(data.jokes.map((joke) => joke.type))];

	let activeTypes = $state(
		Object.fromEntries(typesUnique.map((type) => [type, type === 'global' || type === 'dev']))
	);

	function getFilteredJokes() {
		return data.jokes.filter((joke) => activeTypes[joke.type]);
	}

	function getRandomJoke() {
		const filteredJokes = getFilteredJokes();
		if (filteredJokes.length === 0) return null;
		const randomId = createRandomNumber(filteredJokes.length);
		const joke = filteredJokes[randomId];
		return { ...joke, likes: collection.getLikes(joke.id) };
	}

	let currentJoke = $state(getRandomJoke());

	function reloadJoke() {
		currentJoke = getRandomJoke();
	}

	function addJoke() {
		alert('ajouter une blague');
	}

	async function addToCollection(id: number) {
		await fetch('/api/collection', { method: 'POST', body: JSON.stringify({ id }) });
		invalidate('collection:all');
		collection.add(id);
	}
</script>

<section class="types-container">
	{#each typesUnique as type}
		<TypeToggleButton bind:isOn={activeTypes[type]} typeName={type} />
	{/each}
</section>
<section>
	<Joke {currentJoke} {addToCollection} {reloadJoke} />
</section>
<section>
	<Button text="Ajouter une blague" action={addJoke}></Button>
</section>

<style>
	.types-container {
		display: flex;
		gap: 2rem;
	}
</style>
