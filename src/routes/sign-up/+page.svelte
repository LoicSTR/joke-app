<script lang="ts">
	import { enhance } from '$app/forms';

	const { form } = $props();
	$inspect(form);
</script>

<h2>Inscription</h2>
{#if form?.success}
	{(window.location.href = '/')}
{/if}

<form action="?/register" method="POST" use:enhance>
	<label class:error={form?.field === 'name_register'}>
		Prénom (ou pseudonyme)
		<input type="text" name="name_register" value={form?.name} />
	</label>
	<label class:error={form?.field === 'userName_register'}>
		Nom d'utilisateur
		<input type="text" name="userName_register" value={form?.userName} />
	</label>
	<label class:error={form?.field === 'password_register'}>
		Mot de passe
		<input type="password" name="password_register" />
	</label>
	<label class:error={form?.field === 'confirmPassword_register'}>
		Confirmation du mot de passe
		<input type="password" name="confirmPassword_register" />
	</label>
	<label class:error={form?.field === 'humourLevel'}>
		Niveau humour
		<input type="range" name="humourLevel" min="0" max="10" value="5" />
	</label>
	<button>S'inscrire</button>
</form>
