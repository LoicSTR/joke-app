<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Joke from '$lib/components/Joke.svelte';
	import TypeToggleButton from '$lib/components/TypeToggleButton.svelte';
	import { recentCollection } from '$lib/recentCollection.svelte.js';
	import { createRandomNumber, getLikes } from '$lib/helpers';
	import { invalidate } from '$app/navigation';
	import { enhance } from '$app/forms';

	const { data, form } = $props();

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
		return { ...joke, likes: getLikes(joke.id, data.collection) };
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
	<h2>Connexion</h2>
	<p>Pour accéder au contenu du site, veuillez-vous connecter</p>

	<form action="?/login" method="POST" use:enhance>
		<label class:error={form?.field === 'name_login'}>
			Nom d'utilisateur
			<input type="text" name="name_login" />
		</label>
		<label class:error={form?.field === 'password_login'}>
			Mot de passe
			<input type="password" name="password_login" />
		</label>
		<button>Se connecter</button>
	</form>
	<p>Si vous n'avez pas encore de compte, <a href="/sign-up">inscrivez-vous</a> !</p>
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
