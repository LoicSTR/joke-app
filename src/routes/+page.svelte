<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Joke from '$lib/components/Joke.svelte';
	import TypeToggleButton from '$lib/components/TypeToggleButton.svelte';
	import { recentCollection } from '$lib/recentCollection.svelte.js';
	import { createRandomNumber, getLikes } from '$lib/helpers';
	import { invalidate } from '$app/navigation';

	const { data } = $props();
	$inspect(data);

	const typesUnique = ['global', 'dev', 'dark'];

	let activeTypes = $state(
		Object.fromEntries(typesUnique.map((type) => [type, type === 'global' || type === 'dev']))
	);

	function getFilteredJokes() {
		return Object.fromEntries(
			Object.entries(data.jokes).filter(([key, joke]) => activeTypes[joke.type])
		);
	}
	const filteredJokes = getFilteredJokes();

	function getRandomJoke() {
		if (Object.keys(filteredJokes).length === 0) return null;
		const jokesArray = Object.values(filteredJokes);
		const randomId = createRandomNumber(jokesArray.length);
		const joke = jokesArray[randomId];
		return { ...joke, likes: 0 };
	}

	let currentJoke = $state(getRandomJoke());
	$inspect(currentJoke);

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
	<Button text="Se connecter" link="/log-in"></Button>
	<Button text="S'inscrire" link="/sign-up"></Button>
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
