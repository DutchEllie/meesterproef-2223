<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import PastChallenges from '$lib/pastChallenges.svelte';
	import WinnerScoreboard from '$lib/winnerScoreboard.svelte';
	import SubmittedChallenges from '$lib/submittedChallenges.svelte';
</script>

<main>
	<WinnerScoreboard />
	<PastChallenges />
	<SubmittedChallenges />
</main>

<style>
	h2 {
		max-width: 1200px;
	}
</style>
