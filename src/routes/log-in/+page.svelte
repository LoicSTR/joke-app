<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	const { data, form } = $props();
</script>

{#if form?.success}
	<p>Bienvenue {data.user?.name}</p>
	<Button text="Accéder au site" link="/"></Button>
{:else}
	<h1>Connexion</h1>

	<form action="?/login" method="POST" use:enhance>
		<p>Pour accéder au contenu du site, veuillez-vous connecter</p>
		<label class:error={form?.field === 'name_login'}>
			Nom d'utilisateur
			<input type="text" name="name_login" />
		</label>
		<label class:error={form?.field === 'password_login'}>
			Mot de passe
			<input type="password" name="password_login" />
		</label>
		{#if form?.message}
			<p class="error-message">{form.message}</p>
		{/if}
		<Button text="Se connecter"></Button>
		<p>Si vous n'avez pas encore de compte, <a href="/sign-up">inscrivez-vous</a> !</p>
	</form>
{/if}

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
</style>
