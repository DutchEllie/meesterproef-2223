<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import Buttons from "$lib/Buttons.svelte";

	export let placeholder_Text = 'Enter item...';

	let inputValue: string = '';
	let itemList: string[] = [];

	const dispatch = createEventDispatcher();

	function addItem() {
		if (inputValue) {
			itemList = [...itemList, inputValue];
			inputValue = '';
		}
	}

	function removeItem(index: number) {
		itemList = itemList.filter((_, i) => i !== index);
	}
</script>

<div class="input-list">
	<input type="text" class="input" placeholder={placeholder_Text} bind:value={inputValue} />
	<button class="button" on:click={addItem}> + </button>
</div>

<ul class="item-list">
	{#each itemList as item, i (itemList)}
		<li class="item">
			<span>{item}</span>
			<button class="remove-button" on:click={() => removeItem(i)}> x </button>
		</li>
	{/each}
</ul>

<style>
	.input-list {
		display: flex;
		align-items: center;
		margin-bottom: 1em;
	}

	.input {
		padding: 0.5em;
		font-size: 1em;
		border: solid 0.1em rgba(128, 128, 128, 0.39);
		flex: 1;
	}

	.button {
		padding: 0.5em;
		font-size: 1em;
		border: solid 0.1em rgba(128, 128, 128, 0.39);
		background-color: #ddd;
		cursor: pointer;
	}

	.item-list {
		list-style-type: none;
		padding: 0;
	}

	.item {
		display: flex;
		align-items: center;
        justify-content: space-between;
		margin-bottom: 0.5em;

        background-color: var(--neutral-200);
	}

	.remove-button {
		padding: 0.3em;
		font-size: 0.8em;
		border: none;
		background-color: transparent;
		color: red;
		cursor: pointer;
	}
</style>
