<script lang="ts">
	const { data } = $props();
	$inspect(data.collection);

	const collection = Object.entries(data.collection);

	let nbLikes = $state(0);
	let maxLength = 0;
	let index = $state(0);
	let name = '';

	collection.forEach(([n, likes], i) => {
		nbLikes += likes.length;
		if (likes.length > maxLength) {
			maxLength = likes.length;
			index = i;
			name = n;
		}
	});
</script>

<h1>Statistiques</h1>

<section>
	<div>
		<h2>Statistiques des blagues</h2>
		<div>Nombre de blagues likées : {data.uniqueJokes.length}</div>
		<div>Nombre total de likes : {nbLikes}</div>
		<div>Type de blague le plus liké :</div>
	</div>
	<div>
		<h2>Statistiques des utilisateurs</h2>
		<div>Plus gros blagueurs : {name}</div>
	</div>
</section>

<style>
	section {
		display: flex;
		gap: 2rem;
	}

	section > div {
		padding: 1rem;
		border: solid 1px #fff;
	}
</style>
