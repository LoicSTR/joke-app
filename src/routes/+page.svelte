<script lang="ts">
	import Joke from '$lib/components/Joke.svelte';
	import { collection } from '$lib/collection.svelte';
	import { createRandomNumber } from '$lib/helpers';

	const { data } = $props();

	function getRandomJoke() {
		const randomId = createRandomNumber(data.jokes.length);
		const joke = data.jokes[randomId];

		return { ...joke, likes: collection.getLikes(joke.id) };
	}

	let currentJoke = $state(getRandomJoke());

	function reloadJoke() {
		currentJoke = getRandomJoke();
	}
</script>

<section>
	<Joke {currentJoke} addToCollection={collection.addToCollection} {reloadJoke} />
</section>

<style>
</style>
