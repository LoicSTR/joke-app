<script lang="ts">
	type typeButtonProps = {
		text: string;
		className: string;
		isActive: boolean;
		activateButton: () => void;
	};
	const { text, className, isActive = false, activateButton }: typeButtonProps = $props();
</script>

<button
	onclick={() => {
		activateButton();
	}}
	class={`type ${className} ${isActive ? 'active' : ''}`}
>
	{text}
</button>

<style>
	.type {
		border: 0.1rem solid #fff;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		color: #fff;
	}

	.type:hover {
		background: #fff;
		color: #000;
	}

	.type.dark {
		border-color: #280441;
	}

	.type.dark:hover {
		background: #280441;
		color: #fff;
	}

	.type.dev {
		border-color: #0d6cba;
	}

	.type.dev:hover {
		background: #0d6cba;
		color: #fff;
	}

	.type.global {
		border-color: #46dac3;
	}

	.type.global:hover {
		background: #46dac3;
	}

	.active {
		background: #fff;
		color: #000;
	}

	.global.active {
		background: #46dac3;
		color: #fff;
	}

	.dev.active {
		background: #0d6cba;
		color: #fff;
	}
	.dark.active {
		background: #280441;
		color: #fff;
	}
</style>
