<script lang="ts">
	type JokeProps = {
		currentJoke: {
			id: number;
			joke: string;
			answer: string;
			type: string;
			likes: number;
			author?: string;
		} | null;
		addToCollection: (id: number) => void;
		reloadJoke: () => void;
	};
	const { currentJoke, addToCollection, reloadJoke }: JokeProps = $props();

	import like from '$lib/assets/like.svg';
	import eye from '$lib/assets/eye.svg';
	import BadButton from './BadButton.svelte';
	import GoodButton from './GoodButton.svelte';
</script>

<section>
	{#if currentJoke}
		<BadButton {reloadJoke} />
		<div class="joke {currentJoke.type}">
			<p class="joke__text">{currentJoke.joke}</p>
			<div class="answer__container">
				<div class="answer__eye">
					<img src={eye} alt="oeil" />
				</div>
				<div class="answer__glass"></div>
				<p class="answer__text">{currentJoke.answer}</p>
			</div>
			<div class="bottom__container">
				{#if currentJoke.author}
					<div class="author__container">Proposé par {currentJoke.author}</div>
				{/if}
				<div class="like__container">
					<img src={like} alt="coeur" />
					<span>{currentJoke.likes}</span>
				</div>
			</div>
			<div class="blur"></div>
			<div class="blur-2"></div>
		</div>
		<GoodButton addToCollection={() => addToCollection(currentJoke.id)} {reloadJoke} />
	{/if}
</section>

<style>
	section {
		display: flex;
		align-items: center;
		gap: 5rem;
		margin-top: 5rem;
	}
	.answer__container {
		position: relative;
	}
	.answer__glass,
	.answer__eye {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.answer__glass {
		background: rgba(255, 255, 255, 0.06);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		opacity: 1;
		transition: all 0.2s ease-in-out;
		z-index: 20;
	}
	.answer__eye {
		z-index: 30;
		padding: 0.5rem;
		opacity: 1;
		transition: all 0.2s ease-in-out;
	}
	.answer__eye img {
		max-width: 2rem;
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
	.answer__container:hover .answer__glass {
		opacity: 0;
	}
	.answer__container:hover .answer__eye {
		opacity: 0;
	}
	.answer__text {
		font-size: 1.25rem;
		position: relative;
		z-index: 1;
		padding: 0.25rem 1rem;
	}
	.joke__text {
		font-size: 1.5rem;
		font-weight: 700;
	}
	.joke {
		position: relative;
		width: 40rem;
		height: auto;
		aspect-ratio: 3/2;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 3rem;
		border-radius: 1rem;
		border: 0.2rem solid #fff;
		overflow: hidden;
	}

	.joke .blur {
		position: absolute;
		bottom: -2rem;
		left: -2rem;
		width: 40%;
		height: auto;
		aspect-ratio: 1/1;
		border-radius: 50%;
		filter: blur(7rem);
		z-index: -1;
	}

	.joke .blur-2 {
		position: absolute;
		top: -1rem;
		right: -1rem;
		width: 20%;
		height: auto;
		aspect-ratio: 1/1;
		border-radius: 50%;
		filter: blur(5rem);
		z-index: -1;
	}

	.joke.dark {
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 8px #280441,
			inset 0 0 8px #280441,
			0 0 16px #280441,
			inset 0 0 16px #280441;
	}

	.joke.dark .blur,
	.joke.dark .blur-2 {
		background: radial-gradient(#280441, #000000);
	}

	.joke.dev {
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 8px #0d6cba,
			inset 0 0 8px #0d6cba,
			0 0 16px #0d6cba,
			inset 0 0 16px #0d6cba;
	}

	.joke.dev .blur,
	.joke.dev .blur-2 {
		background: radial-gradient(#0d6cba, #000000);
	}

	.joke.global {
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 16px #46dac3,
			inset 0 0 16px #46dac3,
			0 0 32px #46dac3,
			inset 0 0 32px #46dac3;
	}

	.joke.global .blur,
	.joke.global .blur-2 {
		background: radial-gradient(#46dac3, #000000);
	}

	.bottom__container {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 2rem;
		display: flex;
		justify-content: end;
	}

	.author__container {
		font-style: italic;
		flex: 1;
		text-align: start;
	}

	.like__container {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.like__container img {
		width: 2rem;
		height: 2rem;
		padding: 0.25rem;
	}
</style>
