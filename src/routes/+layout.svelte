<script lang="ts">
	import { page } from '$app/stores';
	import house from '$lib/assets/house.svg';
	const { children, data } = $props();
	const current = $derived($page.url.pathname);
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/statistiques" class:current={current === '/statistiques'}>Statistiques </a>
			</li>
			<li>
				<a href="/" class:current={current === '/'}>
					<img src={house} alt="maison" />
				</a>
			</li>
			<li>
				<a href="/collection" class:current={current === '/collection'}
					>Collection ({data.uniqueJokes.length})</a
				>
			</li>
		</ul>
	</nav>
</header>
<main>
	{@render children()}
</main>

<style>
	header {
		position: fixed;
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
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
		transition: box-shadow 0.3s ease;
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
