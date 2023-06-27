<script lang="ts">
	export let options: string[];
</script>

<select id="options">
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<style>
	select {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px;
		gap: 16px;

		background: #f3f3f4;
        border: none;
		border-radius: 4px;
	}
</style>
