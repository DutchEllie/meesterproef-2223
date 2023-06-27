<script lang="ts">
	import { onMount } from 'svelte';

	let droppedFiles: File[] = [];
	let inputRef: HTMLInputElement;

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		const files = Array.from(event.dataTransfer?.files || []);
		droppedFiles = files;
	}

	function handleInputChange(event: Event) {
		const files = Array.from((event.target as HTMLInputElement).files || []);
		droppedFiles = files;
	}

	onMount(() => {
		inputRef = document.getElementById('file-input') as HTMLInputElement;
	});

	export let DragType: 'image' | 'zip';
</script>

<div class="drop-area" on:dragover={handleDragOver} on:drop={handleDrop}>
	{#if DragType === 'image'}
		<img src="/image-icon.svg" alt="svg icon" />
	{:else if DragType === 'zip'}
		<img src="/folder-icon.svg" alt="svg icon" />
	{/if}
	<div>
		<p>Drag and drop images, or</p>
		<input class="file-input" type="file" on:change={handleInputChange} multiple />
		<button class="browse-button" on:click={() => inputRef.click()}>Browse</button>
	</div>

	<div>
		<p>Max 6MB each (12MB for video's)</p>

		<ul>
			<li>aspect ratio 16:9</li>
			<li>Recommended size 1024x576</li>
		</ul>
	</div>
</div>

{#if droppedFiles.length > 0}
	<ul class="file-list">
		{#each droppedFiles as file}
			<li>{file.name}</li>
		{/each}
	</ul>
{/if}

<style>
	.drop-area {
		width: 100%;
		/* height: 20em; */
		border: dashed 0.1em rgba(128, 128, 128, 0.39);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		transition: border-color 0.3s ease;
		position: relative;
		overflow: hidden;
        padding: 1em;
	}

    @media (min-width: 1050px){
	@supports (aspect-ratio: 16/9) {
		.drop-area {
			height: 20em;
			/* aspect-ratio: 16/9; */
            padding: 0;
		}
	}
    }

	.drop-area:hover {
		border-color: #555;
	}

	.file-input {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;

		cursor: pointer;
	}

	.browse-button {
		appearance: none;
		-webkit-appearance: none;

		background-color: transparent;
		border: none;
		padding: 0 0.5em;
		color: var(--blue-button);
		font-size: 1em;
		font-weight: bold;

		position: relative;
		z-index: 2;
	}

	.drop-area:hover .browse-button {
		text-decoration: underline;
	}

	.file-list {
		margin-top: 16px;
		list-style: none;
		padding: 0;
	}

	.file-list li {
		margin-bottom: 8px;
		font-size: 14px;
		color: #333;

		display: flex;
		align-items: center;
	}

	.file-list li::before {
		content: '';
		width: 1.5em;
		height: 1.5em;
		display: inline-block;
		background-image: url(/image-icon.svg);
		background-size: cover;
		background-repeat: no-repeat;
		margin-right: 4px;
	}

	.drop-area div {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.drop-area div:last-of-type {
		color: #6e6e6e;

		align-items: center;

		display: flex;
		flex-direction: column;
		gap: 2em;
	}

	.drop-area div:last-of-type ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2em;
	}

	.drop-area div:last-of-type ul li {
		color: #6e6e6e;
		list-style: inside;
	}

</style>
