<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	const { form } = $props();
</script>

{#if form?.success}
	{(window.location.href = '/log-in')}
{:else}
	<h1>Déconnexion</h1>
	<form method="POST" action="?/logout" use:enhance>
		<p>Êtes-vous sûr de vouloir vous déconnecter ?</p>
		<Button text="Se déconnecter"></Button>
	</form>
{/if}

<style>
	form {
		text-align: center;
	}
</style>
