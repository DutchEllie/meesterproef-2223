<script lang="ts">
	import Textarea from '$lib/Textarea.svelte';
	import Listinput from '$lib/Listinput.svelte';

	// onmount to get data from input
	
</script>

<h2>Selection criteria</h2>

<form>
	<div>
		<label for="criteria">Selection criteria for this challenge</label>
		<Textarea placeholder="What is your challenge criteria? ..." />
	</div>

	<div>
		<label for="required skills">Required skills for the challenge</label>
		<Listinput variant="none" inputType="text" />
	</div>
</form>

<style>
	h2 {
		font-size: 1.5em;
	}

	div {
		margin: 2em 1em;

		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	label {
		font-size: 1em;
	}
</style>
