<script lang="ts">
	type TypeToggleButtonProps = {
		isOn: boolean;
		typeName: string;
	};
	let { isOn = $bindable(), typeName }: TypeToggleButtonProps = $props();
</script>

<div class={typeName}>
	<p>{typeName}</p>
	<label class="switch">
		<input type="checkbox" bind:checked={isOn} />
		<span class="slider"></span>
	</label>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 24px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px solid #ccc;
		border-radius: 24px;
		transition: 0.4s;
		text-align: end;
		padding-right: 1rem;
	}

	.dev .slider {
		border-color: #0d6cba;
		box-shadow: 0 0 8px #0d6cba;
	}

	.blondes .slider {
		border-color: #ffd700;
		box-shadow: 0 0 8px #ffd700;
	}

	.dark .slider {
		border-color: #fff;
		box-shadow: 0 0 8px #fff;
	}

	.beauf .slider {
		border-color: #ed852f;
		box-shadow: 0 0 8px #ed852f;
	}

	.limit .slider {
		border-color: #ef2b1d;
		box-shadow: 0 0 8px #ef2b1d;
	}

	.global .slider {
		border-color: #46dac3;
		box-shadow: 0 0 8px #46dac3;
	}

	.slider::before {
		content: '';
		position: absolute;
		height: 18px;
		width: 18px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		border-radius: 50%;
		transition: 0.4s;
	}

	.dev input:checked + .slider {
		background-color: #0d6cba;
	}

	.blondes input:checked + .slider {
		background-color: #ffd700;
	}

	.dark input:checked + .slider {
		background-color: #280441;
	}

	.limit input:checked + .slider {
		background-color: #ef2b1d;
	}

	.beauf input:checked + .slider {
		background-color: #ed852f;
	}

	.global input:checked + .slider {
		background-color: #46dac3;
	}

	input:checked + .slider::before {
		transform: translateX(26px);
	}
</style>
