<script lang="ts">
	import type { Participant } from '$lib/participants';
	import type { Challenge } from '$lib/challenge';
	import { IconSize } from '$lib/Icon';
	import { ChallengeStatus } from '$lib/challenge';
	import Buttons from '$lib/Buttons.svelte';
	import EntriesPie from './components/EntriesPie.svelte';
	import Timeline from '$lib/Timeline.svelte';
	import Icon from '$lib/Icon.svelte';
	import ReviewCard from './components/ReviewCard.svelte';
	import ParticipantTable from './components/ParticipantTable.svelte';

	const challenge: Challenge = {
		id: '1',
		title: 'How to create an immersive experience for Retail?',
		description:
			'In this exciting event, we invite innovators, designers, and retail enthusiasts to showcase their creative ideas on transforming the traditional retail landscape into an immersive and unforgettable journey for customers. Participants will be tasked with leveraging cutting-edge technologies, such as augmented reality, virtual reality, interactive displays, and personalized experiences, to craft an engaging retail environment that captivates and delights shoppers.',
		image: '/Hero.jpg',
		start_date: '2023-06-02',
		end_date: '2023-08-05',
		status: ChallengeStatus.OPEN,
		creators: 256,
		entries: 12,
		creators_last_week: 220,
		entries_last_week: 0
	};

	const participants: Participant[] = [
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Safouane',
			creatorhandle: '@Safou',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'John',
			creatorhandle: '@JohnDoe',
			status: 'registered',
			submitDate: new Date(),
			yesno: false,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Emily',
			creatorhandle: '@EmilySmith',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 4
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'David',
			creatorhandle: '@DavidJohnson',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Olivia',
			creatorhandle: '@OliviaBrown',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: false,
			feedback: 2
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Michael',
			creatorhandle: '@MichaelWilson',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Sophia',
			creatorhandle: '@SophiaTaylor',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: true,
			feedback: 5
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Daniel',
			creatorhandle: '@DanielAnderson',
			status: 'registered',
			submitDate: new Date(),
			yesno: true,
			feedback: undefined
		},
		{
			profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
			creator: 'Mia',
			creatorhandle: '@MiaThomas',
			status: 'handed-in',
			submitDate: new Date(),
			yesno: false,
			feedback: 3
		}
	];
</script>

<div class="wrapper">
	<div class="tyfus">
		<img src={challenge.image} alt="hero or something" />
	</div>

	<div class="bovenste-stukje">
		<div class="challenge-information">
			<span class="the-wtf-can-i-do-here-label"
				>Dit is er tot dusver gebeurd met jouw challenge:</span
			>
			<h1>{challenge.title}</h1>
			<div class="timeline-wrapper">
				<h2>Project Timeline</h2>
				<Timeline
					dates={[
						{
							date: new Date(challenge.start_date),
							icon: 'trend',
							title: 'Start'
						},
						{
							date: new Date('2023-06-30'),
							icon: 'trend',
							title: 'Deadline'
						},
						{
							date: new Date('2023-07-20'),
							icon: 'trend',
							title: 'Evaluation'
						},
						{
							date: new Date(challenge.end_date),
							icon: 'trend',
							title: 'Winners'
						}
					]}
					spaceRelativeToTime={true}
				/>
			</div>
			<Buttons variant="primary" size="small" hasIcon
				>View Challenge <Icon icon="eye" size={IconSize.SMALL} /></Buttons
			>
			<Buttons variant="primary" size="small" hasIcon
				>Edit <Icon icon="edit" size={IconSize.SMALL} /></Buttons
			>
		</div>
		<div class="challenge-diagrams">
			<EntriesPie />
		</div>
	</div>

	<div class="review-buttons-wrappertje">
		<ReviewCard title="Speed Review">
			<p>Be critical. We advice you to let a maximum of 20 designs pass.</p>
			<Buttons variant="start-yellow">Speed review</Buttons>
		</ReviewCard>

		<ReviewCard title="Extensive Review">
			<p>You give extensive feedback to everyone about their work.</p>
			<Buttons variant="start-blue">Extensive review</Buttons>
		</ReviewCard>

		<ReviewCard title="Give Medals">
			<p>When you are done with reviewing all the designs, you can give medals to the bests.</p>
			<Buttons variant="start-grey">Give medals</Buttons>
		</ReviewCard>
	</div>

	<div class="participants-wrapper">
		<ParticipantTable {participants} />
	</div>
</div>

<style>
	* {
		max-width: 100vw;
	}

	.the-wtf-can-i-do-here-label {
		color: var(--primary-800);
		margin-bottom: 2px;
	}

	.tyfus {
		grid-column: 1/3;
	}

	.wrapper {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;
		padding: 0 2rem 3rem 2rem;
		/* background-color: #d6d6d6; */
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.bovenste-stukje {
		grid-column: 1/3;
		background-color: var(--neutral-200);
		padding: 48px 0;
		display: flex;
	}

	.bovenste-stukje h1 {
		font-weight: 100;
		margin-bottom: 16px;
	}

	.bovenste-stukje .challenge-information {
		width: 50%;
		padding: 0 2rem;
	}

	.bovenste-stukje .challenge-diagrams {
		width: 50%;
	}

	.wrapper > *:not(.bovenste-stukje) {
		grid-column: 1/3;
	}

	.wrapper > *:not(.tyfus):not(.bovenste-stukje) {
		margin-top: 64px;
	}

	.timeline-wrapper > h2 {
		margin-left: -0.5rem;
		margin-bottom: 0.75rem;
	}

	.review-buttons-wrappertje {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 1rem;
	}

	.participants-wrapper {
		overflow-x: scroll;
		overscroll-behavior-x: contain;
	}

	@media only screen and (min-width: 624px) {
		.review-buttons-wrappertje {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr;
			gap: 1rem;
		}

		.wrapper {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
			margin: 0rem 4rem;
		}
	}
</style>
