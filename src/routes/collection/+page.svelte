<script lang="ts">
	import { collection } from '$lib/collection.svelte.js';
	import like from '$lib/assets/like.svg';
	const { data } = $props();

	const sortedCollection = data.jokes
		.filter((joke) => collection.ids.includes(joke.id))
		.sort((a, b) => (collection.likes[b.id] || 0) - (collection.likes[a.id] || 0))
		.map((joke, index) => ({ ...joke, rank: index + 1 }));

	let rank = 1;

	function rankUp() {
		rank++;
	}
</script>

<h1>Ma collection</h1>

<div class="container">
	{#each sortedCollection as joke}
		{@const nbLikes = collection.likes[joke.id]}
		<div class="joke {joke.type}">
			<div>#{joke.rank}</div>
			<div><p>{joke.joke}</p></div>
			<div><p>{joke.answer}</p></div>
			<div class="like">
				<p>{nbLikes}</p>
				<img src={like} alt="coeur" />
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.joke {
		width: 80%;
		margin: auto;
		display: flex;
		gap: 1rem;
	}

	.joke > div {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0.1rem solid #fff;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
	}

	.joke.beauf > div {
		border-color: #ed852f;
	}

	.joke.blondes > div {
		border-color: #ffd700;
	}

	.joke.dev > div {
		border-color: #0d6cba;
	}

	.joke.dark > div {
		border-color: #280441;
	}

	.joke.dev > div {
		border-color: #0d6cba;
	}

	.joke.limit > div {
		border-color: #ef2b1d;
	}

	.joke.global > div {
		border-color: #46dac3;
	}

	.like {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.like p {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.like img {
		width: 2rem;
		height: 2rem;
		padding: 0.25rem;
	}
</style>
