<script lang="ts">
	const { data } = $props();
	$inspect(data.jokes);
</script>

<h1>Statistiques</h1>

<section class="stats">
	<div>
		<h2>Stats des blagues</h2>
		<p>Nombre de blagues likés : {Object.keys(data.uniqueJokes).length}</p>
		{#each data.jokes as joke}
			<p>{joke.joke}</p>
		{/each}
	</div>

	<div>
		<h2>Stats des users</h2>
	</div>
</section>

<style>
	.stats {
		width: 80%;
		display: flex;
		gap: 1rem;
	}
	.stats > div {
		flex: 1;
	}
	h2 {
		text-align: center;
	}
</style>
