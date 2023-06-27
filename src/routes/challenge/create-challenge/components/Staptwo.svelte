<script lang="ts">
	import DragenDropp from '$lib/DragenDropp.svelte';
	import Select from '$lib/Select.svelte';
    import Textarea from '$lib/Textarea.svelte';

    import Listinput from '$lib/Listinput.svelte';

    let options = ['Beginner', 'Intermediate', 'Advanced'];

</script>

<h2>challenge Details</h2>
<div>
	<label for="challenge_description">Challenge long description</label>
    <Textarea placeholder="What is your challenge?" />
</div>

<div>
	<label for="challenge_cover">Skills after the challenge:</label>
	<Listinput />
</div>

<div>
	<label for="challenge_cover">Prices</label>
	<Listinput />
</div>

<div>
	<label for="challenge_cover">Required skill level</label>
    <Select options={options} />
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
