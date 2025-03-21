<script lang="ts">
	import { page } from '$app/stores';
	import house from '$lib/assets/house.svg';
	const { children, data } = $props();
	const current = $derived($page.url.pathname);

	const nbInMyCollection =
		data.uniqueJokes && data.uniqueJokes.length > 0 ? '(' + data.uniqueJokes.length + ')' : '';
	$inspect(nbInMyCollection);
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
			<li>
				<a href="/statistiques" class:current={current === '/statistiques'}>Statistiques </a>
			</li>
			<li>
				<a href="/collection" class:current={current === '/collection'}
					>Ma collection {nbInMyCollection}</a
				>
			</li>
		</ul>
	</nav>
	{#if data.user}
		<div>
			<p>-- {data.user.name}</p>
		</div>
	{/if}
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
		display: flex;
		align-items: center;
		justify-content: center;
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
</style>
