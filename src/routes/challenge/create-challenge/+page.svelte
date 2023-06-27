<script lang="ts">
    import Stapone from "./components/Stapone.svelte";
    import Staptwo from "./components/Staptwo.svelte";

    import Buttons from "$lib/Buttons.svelte";



</script>

<section>
    <div class="process-area">
        proces line
    </div>
    <h1>Create your challenge</h1>
    <div> 1
        <Stapone />
    </div>

    <div> 2
        <Staptwo />
    </div>
</section>

<!-- style:display = "none" -->

<style>
    section{
        width: 90%;
        padding-top: 1em;

        justify-self: center;

        border-bottom: solid .1em black;
    }

    h1{
        font-size: 2em;
    }

    .process-area{
        border: solid .1em black;
        text-align: center;
    }
</style>