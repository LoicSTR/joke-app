<script lang="ts">
	import like from '$lib/assets/like.svg';
	import { getLikes } from '$lib/helpers.js';

	const { data } = $props();
	$inspect(data);

	const jokeRanking = data.jokes
		.filter((joke) => data.uniqueJokes.includes(joke.id))
		.sort((a, b) => getLikes(b.id, data.collection) - getLikes(a.id, data.collection))
		.map((joke, index) => ({
			...joke,
			likes: getLikes(joke.id, data.collection),
			rank: index + 1
		}));
</script>

<h1>Classement</h1>

<div class="container">
	{#if jokeRanking.length !== 0}
		{#each jokeRanking as joke}
			<div class="joke {joke.type}">
				<div>#{joke.rank}</div>
				<div><p>{joke.joke}</p></div>
				<div><p>{joke.answer}</p></div>
				<div class="like">
					<p>{joke.likes}</p>
					<img src={like} alt="coeur" />
				</div>
			</div>
		{/each}
	{:else}
		<p>Vous n'avez pas encore liké de blague</p>
	{/if}
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
