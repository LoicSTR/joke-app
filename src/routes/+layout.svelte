<script lang="ts">
	import { page } from '$app/stores';
	import house from '$lib/assets/house.svg';
	const { children, data } = $props();

	const current = $derived($page.url.pathname);

	let nbInMyCollection = $state('');

	$effect(() => {
		nbInMyCollection =
			data.myCollection && data.myCollection?.length > 0 ? `(${data.myCollection.length})` : '(0)';
	});
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" class:current={current === '/'}>
					<img src={house} alt="maison" />
				</a>
			</li>
			<li>
				<a href="/classement" class:current={current === '/classement'}>Classement</a>
			</li>
			{#if data.user}
				<li>
					<a href="/statistiques" class:current={current === '/statistiques'}>Statistiques </a>
				</li>
				<li>
					<a href="/collection" class:current={current === '/collection'}
						>Ma collection {nbInMyCollection}</a
					>
				</li>
			{/if}
		</ul>
	</nav>
	<div>
		{#if data.user}
			<p>{data.user.name} - <a href="/log-out">Déconnexion</a></p>
		{:else}
			<p><a href="/log-in">Connexion</a></p>
		{/if}
	</div>
</header>
<main>
	{@render children()}
</main>
<footer>
	<p>Présenté par Loïc Souêtre | ECV Bordeaux</p>
</footer>

<style>
	header {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;
		border-bottom: 1px solid #fff;
	}

	nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	nav a {
		font-weight: 500;
		color: #fff;
		padding: 0.5rem 1rem;
	}

	nav a img {
		width: 3.5rem;
		height: 3.5rem;
		padding: 0.5rem;
	}

	nav a.current {
		text-decoration: none;
	}

	footer {
		padding: 1rem;
	}
</style>
