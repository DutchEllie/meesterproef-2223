<script lang="ts">
    export let placeholder:string;
</script>

<textarea name="textarea" id="textarea" cols="30" rows="5" placeholder={placeholder}></textarea>

<style>
    textarea{
        padding: .5em;
        font-size: 1em;
    }
</style>