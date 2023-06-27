<script lang="ts">
	import { ChallengeStatus } from '$lib/challenge';

	export let status: ChallengeStatus = ChallengeStatus.OPEN;
</script>

<span class="status status-{status}">
	<span class="dot" />
	{status.toLowerCase()}
</span>

<style>
	* {
		--open-bg: #c9fbde;
		--open-text: #1d6743;
		--closed-bg: #FFE1DB;
		--closed-text: #690C0C;
		--published-bg: #FFF1C7;
		--published-text: #8F5E0A;
		--draft-bg: #EDEEF2;
		--draft-text: #474A57;
		--finished-bg: #E6EAFF;
		--finished-text: #021B97;
		--hidden-bg: #FFCFF4;
		--hidden-text: #870079;
	}

	.status {
		box-sizing: border-box;
		display: inline-flex;
		border-radius: 100px;
		padding: 1px 0.75em 3px 0.5em;
		align-items: center;
		text-transform: capitalize;
	}

	.status-OPEN {
		background-color: var(--open-bg);
		color: var(--open-text);
	}

	.status-OPEN > .dot {
		background-color: var(--open-text);
	}

	.status-CLOSED {
		background-color: var(--closed-bg);
		color: var(--closed-text);
	}

	.status-CLOSED > .dot {
		background-color: var(--closed-text);
	}

	.status-PUBLISHED {
		background-color: var(--published-bg);
		color: var(--published-text);
	}

	.status-PUBLISHED > .dot {
		background-color: var(--published-text);
	}

	.status-DRAFT {
		background-color: var(--draft-bg);
		color: var(--draft-text);
	}

	.status-DRAFT > .dot {
		background-color: var(--draft-text);
	}

	.status-FINISHED {
		background-color: var(--finished-bg);
		color: var(--finished-text);
	}

	.status-FINISHED > .dot {
		background-color: var(--finished-text);
	}

	.status-HIDDEN {
		background-color: var(--hidden-bg);
		color: var(--hidden-text);
	}

	.status-HIDDEN > .dot {
		background-color: var(--hidden-text);
	}

	.dot {
		width: 0.6em;
		height: 0.6em;
		border-radius: 9999px;
		background-color: white;
		margin-right: 0.3em;
	}
</style>
