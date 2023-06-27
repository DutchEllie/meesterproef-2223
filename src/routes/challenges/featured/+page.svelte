<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    import FeaturedOverviewChallenges from '$lib/featuredOverviewChallenges.svelte';
</script>

<main>
    <FeaturedOverviewChallenges />
</main>

<style>
    h2 {
        max-width: 1200px;
    }
</style>
