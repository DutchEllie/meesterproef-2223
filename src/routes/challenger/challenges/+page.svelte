<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores'

	import Icon from '$lib/Icon.svelte';

	import { ChallengeStatus } from '$lib/challenge';
	import type { Challenge } from '$lib/challenge';

	import Table from './components/Table.svelte';
	import MobileCard from './components/MobileCard.svelte';

	const numChallenges = 2;

	const currentHour = new Date().getHours();

	var introText = 'Goedemorgen';

	if (currentHour >= 12 && currentHour < 18) {
		introText = 'Goedemiddag';
	} else if (currentHour >= 18 && currentHour < 24) {
		introText = 'Goedenavond';
	} else if (currentHour >= 0 && currentHour < 6) {
		introText = 'Welterusten';
	}

	const challenges: Challenge[] = [
		{
			id: '1',
			title: 'How to create an immersive experience for Retail?',
			description: 'Description 1',
			image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			start_date: '02-07-2023',
			end_date: '05-08-2023',
			status: ChallengeStatus.OPEN,
			creators: 256,
			entries: 12,
			creators_last_week: 220,
			entries_last_week: 0
		},
		{
			id: '2',
			title: 'Crowd Storming',
			description: 'Description 2',
			image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			start_date: '01-07-2023',
			end_date: '07-08-2023',
			status: ChallengeStatus.CLOSED,
			creators: 256,
			entries: 200,
			creators_last_week: 220,
			entries_last_week: 0
		},
		{
			id: '3',
			title: 'Active VR meeting room',
			description: 'Description 3',
			image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			start_date: '27-06-2023',
			end_date: '30-07-2023',
			status: ChallengeStatus.PUBLISHED,
			creators: 256,
			entries: 82,
			creators_last_week: 220,
			entries_last_week: 0
		},
		{
			id: '4',
			title: 'Fix XSS vulnerability',
			description: 'Description 4',
			image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			start_date: '20-06-2023',
			end_date: '10-07-2023',
			status: ChallengeStatus.DRAFT,
			creators: 256,
			entries: 12,
			creators_last_week: 220,
			entries_last_week: 0
		},
		{
			id: '5',
			title: 'Wireframes',
			description: 'Description 5',
			image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			start_date: '20-06-2023',
			end_date: '10-07-2023',
			status: ChallengeStatus.FINISHED,
			creators: 256,
			entries: 12,
			creators_last_week: 220,
			entries_last_week: 0
		},
		{
			id: '6',
			title: 'Creative AR kids service',
			description: 'Description 6',
			image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
			start_date: '29-05-2023',
			end_date: '30-06-2023',
			status: ChallengeStatus.HIDDEN,
			creators: 256,
			entries: 12,
			creators_last_week: 220,
			entries_last_week: 0
		}
	];

	var filteredChallenges: Challenge[] = challenges;
	var selectedStatus: string;

	async function statusFilter() {
		if (selectedStatus === 'ALL') filteredChallenges = challenges;
		else if (selectedStatus) {
			filteredChallenges = challenges.filter((challenge) => challenge.status === selectedStatus);
		}
	}

	var table: boolean = numChallenges > 10 ? true : false;

	async function handleViewToggle(e: Event) {
		e.preventDefault();
		table = !table;
	}

</script>

<main>
	<h1>{introText}, Asics</h1>
	<div class="breadcrumb-container">
		<span class="breadcrumb">Dashboard</span>
	</div>
	
	<div class="bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo">
		<h2 class="the-wtf-can-i-do-here-label">Bekijk hier jouw challenges en bekijk hun details</h2>

		<div>			
			<select
					bind:value={selectedStatus}
					on:change={(e) => {
						statusFilter();
					}}
				>
					<option value="ALL">Filter</option>
					{#each Object.values(ChallengeStatus) as status}
						<option value={status}>{status.toLowerCase()}</option>
					{/each}
			</select>
			
			{#if table}
				<button class="view-type-button" on:click={handleViewToggle}>
					<Icon icon="card-view" />
				</button>
			{:else}
				<button class="view-type-button" on:click={handleViewToggle}>
					<Icon icon="table-view" />
				</button>
			{/if}
		</div>
	</div>

	{#if table}
		<div class="div-table-table-div">
			<Table challenges={filteredChallenges}/>
		</div>
	{:else}
		<section class="mobile-cards-section">
			{#each filteredChallenges as challenge}
			<a href="/challenge/{challenge.id}">
			<MobileCard status={challenge.status} background={challenge.image} title={challenge.title} creators={challenge.creators} entries={challenge.entries} trend={challenge.creators - challenge.creators_last_week}/>
			</a>
			{/each}
		</section>
	{/if}
</main>

<style>

	.the-wtf-can-i-do-here-label {
		color: var(--primary-800);
		margin-bottom: 2px;
	}

	main {
		width: 100vw;
		padding: 1rem calc(calc(91 / 16) * 1rem);
	}

	.view-type-button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		aspect-ratio: 1;
	}

	.view-type-button:hover {
		background-color: var(--neutral-200);
	}

	select {
		margin: 0;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		
		position: relative;
		background-color: var(--neutral-200);
		border: 1px solid var(--neutral-900);
		border-radius: 4px;
		width: fit-content;
		cursor: pointer;
		padding: 0 0 0 1em;
	}

	.breadcrumb {
		color: var(--neutral-700);
	}

	.breadcrumb:not(:last-of-type):after {
		content: '>';
		margin: 0rem 0.25rem;
	}

	.div-table-table-div {
		display: grid;
		width: 100%;
		grid-column: 2/16;
	}

	h2 {
		font-size: 1rem;
	}

	button {
		appearance: none;
		border: none;
		background-color: transparent;
		height: fit-content;
		width: fit-content;
		padding: 0px;

		cursor: pointer;
		aspect-ratio: 1;
		height: 100%;
		border-radius: 6px;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo {
		width: 100%;
		margin: 2rem 0rem 1rem 0rem;
		height: 2.5rem;
		/* align vertically */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > div {
		display: flex;
		gap: 2rem;
		height: 100%;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > div > input {
		background-color: var(--neutral-200);
		width: 21rem;
		padding: 0rem 0.7rem;
		border: 1px solid var(--neutral-900);
		height: 100%;
	}

	.bar-boven-de-tabel-die-de-zoekbalk-bevat-enzo > div > input::placeholder {
		color: var(--neutral-900);
	}

	.mobile-cards-section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
		grid-gap: 32px;
	}

	.mobile-cards-section a {
		color: inherit;
		transition: all 0.2s ease-in-out;
	}

	.mobile-cards-section a:hover {
		text-decoration: none;
		transform: scale(1.025);
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}

	/* tablet size */
	@media only screen and (max-width: 1024px) {
		main {
			padding: 0 calc(calc(91 / 16) * 0.5rem);
		}
	}

	@media only screen and (max-width: 768px) {

		main {
			padding: 0 calc(calc(91 / 16) * 0.25rem);
		}
	}
</style>