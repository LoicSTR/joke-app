<script lang="ts">
	type JokeProps = {
		id: number;
		joke: string;
		answer: string;
		type: string;
	};
	const { id, joke, answer, type }: JokeProps = $props();
</script>

<div class="joke {type}">
	<h2>{joke}</h2>
	<p class="answer">{answer}</p>
	<div class="blur"></div>
	<div class="blur-2"></div>
</div>

<style>
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

	.joke.beauf {
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 8px #ed852f,
			inset 0 0 8px #ed852f,
			0 0 16px #ed852f,
			inset 0 0 16px #ed852f;
	}

	.joke.beauf .blur,
	.joke.beauf .blur-2 {
		background: radial-gradient(#ed852f, #000000);
	}

	.joke.blondes {
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 8px #ffd700,
			inset 0 0 8px #ffd700,
			0 0 16px #ffd700,
			inset 0 0 16px #ffd700;
	}

	.joke.blondes .blur,
	.joke.blondes .blur-2 {
		background: radial-gradient(#ffd700, #000000);
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

	.joke.limit {
		box-shadow:
			0 0 8px #fff,
			inset 0 0 8px #fff,
			0 0 8px #ef2b1d,
			inset 0 0 8px #ef2b1d,
			0 0 16px #ef2b1d,
			inset 0 0 16px #ef2b1d;
	}

	.joke.limit .blur,
	.joke.limit .blur-2 {
		background: radial-gradient(#ef2b1d, #000000);
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
</style>
