<script lang="ts">
	import DragenDropp from '$lib/DragenDropp.svelte';
	import Input from '$lib/Input.svelte';
	// let placeholder_Text = "write ..."
</script>

<h2>General information</h2>
<div>
	<label for="challenge_name">challenge name</label>
	<Input inputType="text" placeholder_Text="What is the name of your special challenge?" />
</div>

<div>
	<label for="challenge_cover">challenge cover</label>
	<DragenDropp DragType="image" />
</div>

<div>
	<label for="Short_description">Short description</label>
	<Input inputType="text" placeholder_Text="What is your challenge in short?" />
</div>

<style>
    h2{
        font-size: 1.5em;
    }

    div{
        margin: 1em;

        display: flex;
        flex-direction: column;
        gap: .5em;
    }
    label{
        font-size: 1em;
    }
</style>
