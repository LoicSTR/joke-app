<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Joke from '$lib/components/Joke.svelte';
	import { recentCollection } from '$lib/recentCollection.svelte.js';
	import { createRandomNumber, getLikes } from '$lib/helpers';
	import { invalidate } from '$app/navigation';

	const { data } = $props();
	const jokes = Object.values(data.jokes);

	function getRandomJoke() {
		if (jokes.length === 0) return null;
		const randomId = createRandomNumber(jokes.length);
		const joke = jokes[randomId];
		const nbLikes = getLikes(joke.id, data.collection) ?? 0;
		return { ...joke, likes: nbLikes };
	}

	let currentJoke = $state(getRandomJoke());

	function reloadJoke() {
		currentJoke = getRandomJoke();
	}

	async function addToCollection(id: number) {
		await fetch('/api/collection', { method: 'POST', body: JSON.stringify({ id }) });
		recentCollection.add(id);
		invalidate('collection:all');
	}
</script>

{#if !data.user}
	<p>Il est nécessaire de se connecter pour accéder au contenu du site</p>
	<Button text="Se connecter" link="/log-in"></Button>
	<Button text="S'inscrire" link="/sign-up"></Button>
{:else}
	<section>
		<Joke {currentJoke} {addToCollection} {reloadJoke} myCollection={data.myCollection} />
	</section>
	<section>
		<Button text="Ajouter une blague" link="/form"></Button>
	</section>
{/if}
