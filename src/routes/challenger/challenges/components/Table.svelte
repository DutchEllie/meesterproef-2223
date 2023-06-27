<script lang="ts">
	import { ChallengeStatus } from '$lib/challenge';
	import type { Challenge } from '$lib/challenge';
	import ChallengeBlock from '../../profiel/components/ChallengeBlock.svelte';
	import Status from './Status.svelte';

	export let challenges: Challenge[] = [];

	function emojiFromStatus(status: ChallengeStatus) {
		switch (status) {
			case ChallengeStatus.OPEN:
				return '🔓';
			case ChallengeStatus.CLOSED:
				return '🔒';
			case ChallengeStatus.PUBLISHED:
				return '📰';
			case ChallengeStatus.DRAFT:
				return '📝';
			case ChallengeStatus.FINISHED:
				return '🏁';
			case ChallengeStatus.HIDDEN:
				return '👻';
			default:
				return '🌎';
		}
	}
</script>

<div class="wrapper">
	<table>
		<tr>
			<th>Title</th>
			<th>Start Datum</th>
			<th>Eind Datum</th>
			<th>Status</th>
			<th>Creators</th>
			<th>Entries</th>
			<th />
		</tr>
		{#each challenges as challenge}
			<tr>
				<td class="title" title={challenge.title}
					>{emojiFromStatus(challenge.status)} {challenge.title}</td
				>
				<td>{challenge.start_date}</td>
				<td>{challenge.end_date}</td>
				<td><Status status={challenge.status} /></td>

				<td class={challenge.creators_last_week - challenge.creators > 0 ? 'matig' : 'minder-matig'}>{challenge.creators}</td>
				<td class={challenge.entries_last_week - challenge.entries > 0 ? 'matig' : 'minder-matig'}>{challenge.entries}</td>
				<!-- <td
					class={challenge.creators_last_week - challenge.creators > 0 ? 'matig' : 'minder-matig'}
				>
					{challenge.creators} | {(challenge.creators - challenge.creators_last_week).toFixed(
						0
					)}</td
				>
				<td
					>{challenge.entries} | {(challenge.entries - challenge.entries_last_week).toFixed(0)}</td
				> -->
				<td>
					<a href="/challenges/{challenge.id}">Bekijk</a>
				</td>
			</tr>
		{/each}
	</table>
</div>

<style>
	.wrapper {
		overflow-x: scroll;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.5rem;
		text-align: left;
		border: 1px solid var(--neutral-300);
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		max-width: 30em;
	}

	td.title {
		max-width: 25ch;
	}

	th > select {
		content: '';
		width: 100%;
		background-color: transparent;
		border: none;
		font: inherit;
	}

	tr:nth-child(even) {
		background-color: #ffffff;
	}

	th {
		background-color: rgba(255, 208, 39, 0.48);
		color: black;
	}

	.matig {
		/* background-color: #ffd0d0; */
		text-align: center;
		word-spacing: 100%;
		padding: 0px;
	}

	.minder-matig {
		/* background-color: #d2ffc2; */
		text-align: center;
		word-spacing: 100%;
		padding: 0px;
	}
</style>
