<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	const { form } = $props();
</script>

<section class="form-container">
	<Button text="Retourner à l'accueil" link="/"></Button>
	{#if form?.success}
		<p>Ta blague vient d'être ajouté !</p>
	{/if}
	<form action="?/validation" method="POST" use:enhance>
		<label>
			Intitulé de la blague
			<input type="text" name="joke" />
		</label>
		<label>
			Réponse de la blague
			<input type="text" name="answer" />
		</label>
		<label>
			Type de la blague
			<select name="type">
				<option value="global">Basique</option>
				<option value="dev">Geek</option>
				<option value="dark">Sombre</option>
			</select>
		</label>
		<button>Ajouter la blague</button>
	</form>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
