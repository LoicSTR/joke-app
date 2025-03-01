<script lang="ts">
	type ButtonProps = {
		text: string;
		action: () => void;
	};
	const { text, action }: ButtonProps = $props();
</script>

<button onclick={action}>
	{text}
</button>

<style>
	button {
		margin-top: 3rem;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		color: #fff;
		border: 0.2rem solid #fff;
		position: relative;
		box-shadow:
			0 0 4px #fff,
			inset 0 0 4px #fff,
			0 0 8px #fff,
			inset 0 0 8px #fff;
		transition: all 0.3s ease;
	}
	button:hover {
		scale: 1.1;
		background-color: #fff;
		color: #000;
	}
</style>
