<script lang="ts">
	import Buttons from "$lib/Buttons.svelte";
	export let type: 'speed' | 'extensive' | 'medals' = 'speed';

	export let title: string = 'Speed Review';
	export let description: string = "Be critical. We advice you to let a maximum of 20 designs pass.";
</script>

<article>
	<h2 class="title">
		{title}
	</h2>
	<slot />
</article>

<style>
	article {
		box-shadow: 0px 5px 11px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		background-color: white;
		padding: 3rem;

		display: grid;
		grid-template-rows: 4rem 1fr 1fr;
	}

	h2 {
		font-size: 1.1rem;
	}

	button {
		margin-top: 1rem;
		min-height: 4rem;
	}

	@media only screen and (max-width: 1000px) {
		article {
			padding: 2rem 1rem;
		}
	}
</style>
