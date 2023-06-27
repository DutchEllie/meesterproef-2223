<script lang="ts">
	import type { Participant } from '$lib/participants';

	import Buttons from '$lib/Buttons.svelte';

	export let participants: Participant[] = [];
	const pageSize: number = 10;

	let activeSortMode: 'status' | 'yesno' = 'status';

	// Descending is handed-in first
	let statusSort: 'ascending' | 'descending' = 'descending';
	let yesnoSort: 'ascending' | 'descending' = 'descending';
	let feedbackSort: 'ascending' | 'descending' = 'descending';

	let shownParticipants: Participant[] = participants.slice(0, pageSize);
	let currentPage: number = 1;
	let totalPages: number = Math.ceil(participants.length / pageSize);
	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
			shownParticipants = participants.slice((currentPage - 1) * pageSize, currentPage * pageSize);
		}
	}

	function previousPage() {
		if (currentPage > 1) {
			currentPage--;
			shownParticipants = participants.slice((currentPage - 1) * pageSize, currentPage * pageSize);
		}
	}

	function recalculateShownParticipants() {
		totalPages = Math.ceil(participants.length / pageSize);
		if (currentPage > totalPages) {
			currentPage = totalPages;
		}
		shownParticipants = participants.slice((currentPage - 1) * pageSize, currentPage * pageSize);
	}
	
	function sortStatus() {
		// Change statusSort
		if (statusSort == 'ascending') {
			statusSort = 'descending';
		} else {
			statusSort = 'ascending';
		}

		// Ascending is registered first
		if (statusSort == 'ascending') {
			participants = participants.sort((a, b) => {
				if (a.status == 'registered' && b.status == 'handed-in') {
					return -1;
				} else if (a.status == 'handed-in' && b.status == 'registered') {
					return 1;
				} else {
					return 0;
				}
			});
		} else {
			participants = participants.sort((a, b) => {
				if (a.status == 'registered' && b.status == 'handed-in') {
					return 1;
				} else if (a.status == 'handed-in' && b.status == 'registered') {
					return -1;
				} else {
					return 0;
				}
			});
		}

		recalculateShownParticipants();
	}

	function sortYesno() {
		// Change yesnoSort
		if (yesnoSort == 'ascending') {
			yesnoSort = 'descending';
		} else {
			yesnoSort = 'ascending';
		}

		// Ascending is yes first
		if (yesnoSort == 'ascending') {
			participants = participants.sort((a, b) => {
				if (a.yesno && !b.yesno) {
					return -1;
				} else if (!a.yesno && b.yesno) {
					return 1;
				} else {
					return 0;
				}
			});
		} else {
			participants = participants.sort((a, b) => {
				if (a.yesno && !b.yesno) {
					return 1;
				} else if (!a.yesno && b.yesno) {
					return -1;
				} else {
					return 0;
				}
			});
		}

		recalculateShownParticipants();
	}

	function sortFeedback() {
		// Change feedbackSort
		if (feedbackSort == 'ascending') {
			feedbackSort = 'descending';
		} else {
			feedbackSort = 'ascending';
		}

		if (feedbackSort == 'ascending') {
			participants = participants.sort((a, b) => {
				if (a.feedback && b.feedback) return a.feedback - b.feedback;
				else if (a.feedback) return -1;
				else if (b.feedback) return 1;
				else return 0;
			});
		} else {
			participants = participants.sort((a, b) => {
				if (a.feedback && b.feedback) return b.feedback - a.feedback;
				else if (a.feedback) return 1;
				else if (b.feedback) return -1;
				else return 0;
			});
		}

		participants = participants.sort((a, b) => {
			if (a.feedback == undefined && b.feedback == undefined) return 0;
			else if (a.feedback == undefined) return 1;
			else if (b.feedback == undefined) return -1;
			else return 0;
		})

		recalculateShownParticipants();
	}
</script>

<article>
	<h2>Challenge Participants ({participants.length})</h2>
	<table>
		<tr>
			<th>Creator</th>
			<th class="sortable status-sort" on:click={sortStatus}>
				Status
				<div class="status-sort-triangle">
					{#if statusSort == 'ascending'}
						&triangle;
					{:else}
						&triangledown;
					{/if}
				</div>
			</th>
			<th>Submit Date</th>
			<th class="sortable yesno-sort" on:click={sortYesno}>
				Yes/No
				<div>
					{#if yesnoSort == 'ascending'}
						&triangle;
					{:else}
						&triangledown;
					{/if}
				</div>
			</th>
			<th class="sortable" on:click={sortFeedback}>
				Feedback
				<div>
					{#if feedbackSort == 'ascending'}
						&triangle;
					{:else}
						&triangledown;
					{/if}
				</div>
			</th>
			<th>&nbsp;</th>
		</tr>
		{#each shownParticipants as participant}
			<tr>
				<td>
					<div class="creator-td">
						<img class="profile-img" src={participant.profilePicture} alt="" />
						<div class="creator">
							{participant.creator}
							<span class="handle">
								{participant.creatorhandle}
							</span>
						</div>
					</div>
				</td>
				<td class="status-td">
					{#if participant.status == 'handed-in'}
						Handed in
					{:else}
						Registered
					{/if}
				</td>
				<td class="submitdate-td">
					{participant.submitDate}
				</td>
				<td class="yesno-td">
					{#if participant.yesno}
						True
					{:else}
						False
					{/if}
				</td>
				<td class="feedback-td">
					{#if participant.feedback == 1}
						★☆☆☆☆
					{:else if participant.feedback == 2}
						★★☆☆☆
					{:else if participant.feedback == 3}
						★★★☆☆
					{:else if participant.feedback == 4}
						★★★★☆
					{:else if participant.feedback == 5}
						★★★★★
					{:else}
						N/A
					{/if}
				</td>
				<!-- <td class="feedback-td">{participant.feedback}</td> -->
				<td class="viewbutton-td">
					<Buttons variant="primary" size="medium">VIEW</Buttons>
				</td>
			</tr>
		{/each}
	</table>
	<section class="pager">
		Page: {currentPage} / {totalPages}
		<div class="buttons">
			<Buttons variant="start-grey" size="small" handleClick={previousPage}>&lt</Buttons>
			<Buttons variant="start-grey" size="small" handleClick={nextPage}>&gt;</Buttons>
		</div>
	</section>
</article>

<style>
	table {
		margin-top: 2rem;
		width: 100%;
		text-align: center;
	}

	tr:first-child {
		border-top: 1px solid var(--neutral-900);
	}

	tr:first-child th {
		padding: 16px 0;
	}

	table,
	th,
	td {
		border-collapse: collapse;
		border-bottom: 1px solid;
	}

	th,
	td {
		padding: 0.75rem 1rem;
	}

	.creator-td {
		display: flex;
		align-items: center;
	}

	.profile-img {
		height: 3rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		margin-right: 8px;
	}

	.handle {
		display: block;
		font-size: 0.8rem;
	}

	.pager {
		display: flex;
		justify-content: end;
		align-items: center;
		gap: 1rem;
		margin-top: 1rem;
	}

	.buttons {
		display: flex;
		gap: 4px;
	}

	.sortable {
		cursor: pointer;
		/* display: flex;
		flex-direction: row; */
		min-width: max-content;
	}

	.sortable > div {
		margin-left: 3px;
		display: inline;
	}
</style>
