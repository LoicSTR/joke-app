<script lang="ts">
	import { collection } from '$lib/collection.svelte.js';
	import { page } from '$app/stores';
	const { children, data } = $props();
	const current = $derived($page.url.pathname);
	import house from '$lib/assets/house.svg';
	import smiley from '$lib/assets/smiley.svg';
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
					>Collection ({collection.ids.length})</a
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

	.good {
		position: relative;
		overflow: hidden;
		box-shadow:
			0 0 4px #fff,
			inset 0 0 4px #fff,
			0 0 8px #7ac74f,
			inset 0 0 8px #7ac74f,
			0 0 16px #7ac74f,
			inset 0 0 16px #7ac74f;
		transition: box-shadow 0.3s ease;
	}
	.good:hover {
		scale: 1.1;
		rotate: 10deg;
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 16px #7ac74f,
			inset 0 0 16px #7ac74f,
			0 0 32px #7ac74f,
			inset 0 0 32px #7ac74f;
	}
</style>
