<script lang="ts">
	import TeamUsers from '../feedback/components/TeamUsers.svelte';
	import Usercard from '../feedback/components/Usercard.svelte';
	import Buttons from '$lib/Buttons.svelte';
	import Winners from './components/Winners.svelte';
	import UploadedWork from '$lib/uploadedWork.svelte';

	function scroll() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
	
</script>

<section>
	<div class="titel">
		<h2>Entry project</h2>
		<p>Extensive review</p>
	</div>

	<div class="previous">
        <Buttons variant="left"/>
        </div>
        <div class="next">	
        <Buttons variant="right"/>
        </div>

	<div class="container">
		<div class="datacontainer">
			<div class="usercard">
				<Usercard />
			</div>

			<div class="medales">
				<Winners />
			</div>

			<div class="members">
				<h3>Team members:</h3>
				<ul>
					<TeamUsers />
				</ul>
			</div>
		</div>

		<div class="werkreview">
			<UploadedWork />
		</div>
	</div>

    <div>	
        <Buttons variant="up" handleClick={scroll}/>
    </div>
	  
	  <!-- <button on:click={() => toast.push('Hello world!')}>SHOW TOAST</button> -->

</section>

<style>
	section {
		justify-self: center;
		width: 90%;
		height: fit-content;
		padding-top: 1em;
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
	}

	.titel {
		align-self: center;
		text-align: center;
		grid-area: 1/1/2/-1;
	}

	.titel p {
		color: var(--theme-secondary);
	}

	.previous,
	.next {
		--size: 5em;
		width: var(--size);
		height: var(--size);
	}

	.previous {
		grid-area: 1/1/2/-1;
		justify-self: end;
	}

	.next {
		grid-area: 1/1/2/-1;
		justify-self: start;
	}

	.members {
		padding: 1em;
		border: solid 0.5px var(--black);
		border-radius: 0.5em;
	}

	.members h3 {
		margin-bottom: 0.5em;
	}

	.members ul {
		display: flex;
		flex-direction: column;
	}

	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1em;
	}

	.datacontainer {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.werkreview {
		border: solid 0.1em var(--black);
	}

	@media (min-width: 1200px) {
		section {
			width: 100%;
			grid-template-columns: 6em 30em 1fr 6em;
			grid-template-rows: 6em auto;

			padding: 0;
		}
		.titel {
			grid-area: 1/2/2/-2;
			text-align: unset;
		}

		.previous {
			grid-area: 2/1/3/2;
			position: fixed;
		}

		.next {
			grid-area: 2/4/3/-1;
			position: fixed;
		}

		.container {
			width: 100%;
			grid-column: 2/4;
			grid-row-start: 2;

			grid-template-columns: 30em 1fr;
			gap: 1em;
		}

		.werkreview {
			border: solid 0.1em var(--black);
		}
	}
</style>
