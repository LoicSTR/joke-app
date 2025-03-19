<script lang="ts">
	const { data } = $props();

	let myFilteredCollection = data.jokes.filter((joke) => data.myCollection?.includes(joke.id));
</script>

<h1>Ma collection</h1>

<div class="container">
	{#if myFilteredCollection.length !== 0}
		{#each myFilteredCollection as joke}
			<div class="joke {joke.type}">
				<div><p>{joke.joke}</p></div>
				<div><p>{joke.answer}</p></div>
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

	.joke.dark > div {
		border-color: #280441;
	}

	.joke.dev > div {
		border-color: #0d6cba;
	}

	.joke.global > div {
		border-color: #46dac3;
	}
</style>
