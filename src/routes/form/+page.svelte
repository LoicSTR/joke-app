<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	const { form, data } = $props();
</script>

<section class="form-container">
	<form action="?/validation&user={data.user?.name}" method="POST" use:enhance>
		<Button text="Retourner à l'accueil" link="/"></Button>
		<label class:error={form?.field === 'joke'}>
			Intitulé de la blague
			<textarea name="joke"></textarea>
			{#if form?.message && form?.field === 'joke'}
				<p class="error-message">{form.message}</p>
			{/if}
		</label>
		<label class:error={form?.field === 'answer'}>
			Réponse de la blague
			<textarea name="answer"></textarea>
			{#if form?.message && form?.field === 'answer'}
				<p class="error-message">{form.message}</p>
			{/if}
		</label>
		<label class:error={form?.field === 'type'}>
			Type de la blague
			<select name="type">
				<option value="global">Basique</option>
				<option value="dev">Geek</option>
				<option value="dark">Sombre</option>
			</select>
			{#if form?.message && form?.field === 'type'}
				<p class="error-message">{form.message}</p>
			{/if}
		</label>
		<Button text="Ajouter la blague"></Button>
		{#if form?.success}
			<p>Ta blague vient d'être ajouté !</p>
		{/if}
	</form>
</section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 22rem;
	}

	.error-message {
		color: red;
		font-style: italic;
	}

	.error textarea,
	.error select {
		border: solid 1px red;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	textarea,
	select {
		margin-top: 0.25rem;
	}
</style>
