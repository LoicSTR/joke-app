<script lang="ts">
	import { enhance } from '$app/forms';
	const { form } = $props();
	import { redirect } from '@sveltejs/kit';

	if (form?.success) throw redirect(302, '/');
</script>

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
	<button>Se connecter</button>
</form>
<p>Si vous n'avez pas encore de compte, <a href="/sign-up">inscrivez-vous</a> !</p>
