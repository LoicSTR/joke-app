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
		<Button text="Se connecter"></Button>
	</form>
	<p>Si vous n'avez pas encore de compte, <a href="/sign-up">inscrivez-vous</a> !</p>
{/if}
