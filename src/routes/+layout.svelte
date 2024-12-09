<script lang="ts">
	import { page } from '$app/stores';
	const { children, data } = $props();
	const current = $derived($page.url.pathname);
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" class:current={current === '/'}>
					<svg
						width="800"
						height="756"
						viewBox="0 0 800 756"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M786.572 342.174L665.328 220.93V80.8733C665.328 55.549 644.807 35.0257 619.445 35.0257C594.142 35.0257 573.62 55.549 573.62 80.8733V129.224L483.345 38.945C438.712 -5.66403 361.109 -5.5849 316.578 39.0257L13.4228 342.174C-4.47316 360.106 -4.47316 389.12 13.4228 407.024C31.3267 424.951 60.3975 424.951 78.295 407.024L381.421 103.867C391.296 94.0441 408.701 94.0441 418.524 103.838L721.702 407.024C730.692 415.988 742.412 420.447 754.13 420.447C765.872 420.447 777.612 415.983 786.574 407.024C804.476 389.122 804.476 360.107 786.572 342.174Z"
							stroke="white"
						/>
						<path
							d="M415.926 190.897C407.118 182.095 392.857 182.095 384.076 190.897L117.42 457.474C113.21 461.682 110.823 467.428 110.823 473.424V667.855C110.823 713.48 147.817 750.472 193.44 750.472H325.461V546.014H474.511V750.472H606.535C652.156 750.472 689.149 713.48 689.149 667.857V473.424C689.149 467.428 686.784 461.682 682.553 457.474L415.926 190.897Z"
							stroke="white"
						/>
					</svg></a
				>
			</li>
			<li><a href="/jokes" class:current={current === '/jokes'}>Jokes</a></li>
			<li>
				<a href="/profil" class:current={current === '/profil'}
					>Collection ({data.collectionSize})</a
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
		gap: 2rem;
	}

	nav a {
		font-weight: 500;
		color: #fff;
		/* border: 0.2rem solid #fff; */
		border-radius: 2rem;
		padding: 0.5rem 1rem;
		transition: box-shadow 0.3s ease;
	}

	nav a svg {
		width: 5rem;
		height: 5rem;
		padding: 0.5rem;
		stroke-width: 0.3rem;
	}

	nav a:hover {
		box-shadow: 0 0 10px #2d2e2e;
	}

	nav a.current {
		background-color: #2d2e2e;
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
