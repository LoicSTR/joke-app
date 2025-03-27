<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';

	const { form } = $props();
	$inspect(form);
</script>

<h1>Inscription</h1>
{#if form?.success}
	{(window.location.href = '/log-in')}
{/if}

<form action="?/register" method="POST" use:enhance>
	<label class:error={form?.field === 'name_register'}>
		Prénom (ou pseudonyme)
		<input type="text" name="name_register" value={form?.name} />
		{#if form?.message && form?.field === 'name_register'}
			<p class="error-message">{form.message}</p>
		{/if}
	</label>
	<label class:error={form?.field === 'userName_register'}>
		Nom d'utilisateur
		<input type="text" name="userName_register" value={form?.userName} />
		{#if form?.message && form?.field === 'userName_register'}
			<p class="error-message">{form.message}</p>
		{/if}
	</label>
	<label class:error={form?.field === 'password_register'}>
		Mot de passe
		<input type="password" name="password_register" />
		{#if form?.message && form?.field === 'password_register'}
			<p class="error-message">{form.message}</p>
		{/if}
	</label>
	<label class:error={form?.field === 'confirmPassword_register'}>
		Confirmation du mot de passe
		<input type="password" name="confirmPassword_register" />
		{#if form?.message && form?.field === 'confirmPassword_register'}
			<p class="error-message">{form.message}</p>
		{/if}
	</label>
	<label class:error={form?.field === 'humourLevel'}>
		Niveau d'humour
		<input type="range" name="humourLevel" min="0" max="10" value="5" />
		{#if form?.message && form?.field === 'humourLevel'}
			<p class="error-message">{form.message}</p>
		{/if}
	</label>
	<Button text="S'inscrire"></Button>
	<p>Si vous avez déjà un compte, <a href="/log-in">connectez-vous</a></p>
</form>

<style>
	.error-message {
		color: red;
		font-style: italic;
	}

	.error input {
		border: solid 1px red;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 22rem;
	}

	label {
		display: flex;
		flex-direction: column;
	}

	input {
		margin-top: 0.25rem;
	}

	input[type='range'] {
		padding: 0;
		outline: none;
		box-sizing: border-box;
		cursor: pointer;
		accent-color: red;
	}
</style>
