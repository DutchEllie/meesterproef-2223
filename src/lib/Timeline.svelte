<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { IconSize } from '$lib/Icon';

	export let dates: {
		date: Date;
		icon: string | undefined;
		title: string;
	}[] = [];
	//export let highLightCurrentDate: boolean = true;
	export let spaceRelativeToTime: boolean = true;

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]

	dates = dates.sort((a, b) => {
		if (a.date.getTime() <= b.date.getTime()) {
			return -1;
		} else {
			return 1;
		}
	});

	let processedDates: {
		date: Date;
		icon: string | undefined;
		stage: 'done' | 'approaching' | 'future';
		distanceToNext: number;
		title: string;
		progress: number;
	}[] = [];

	// I hate this function, because I couldn't even write it myself without the help of Copilot..
	// I am a pathetic programmer. :(
	const getNearestNextDate = () => {
		let nextDateIndex = 0;

		for (let i = 0; i < dates.length; i++) {
			if (dates[i].date.getTime() > new Date().getTime()) {
				nextDateIndex = i;
				break;
			}
		}

		return nextDateIndex;
	};

	const getDistanceNumbas = () => {
		const relativeNumber = 100;
		let distances: number[] = [];

		for (let i = 0; i < dates.length - 1; i++) {
			const distance = dates[i].date.getTime() - dates[i + 1].date.getTime();
			distances.push(distance);
		}

		// console.log(distances.length);

		/*
		If you take all of the numbers and add them together, then you can
		calculate the relative factors/percentages of them.
		Adding this together makes 1 again, making them all relative.

		5, 9, 2  =  16

		5/16 = 0.3125
		9/16 = 0.5625
		2/16 = 0.125
					 -------- +
					 1.0000
		*/

		const totalDistance = distances.reduce((total, cur) => {
			return total + cur;
		});

		let relativeDistances: number[] = [];
		for (let i = 0; i < distances.length; i++) {
			let factor = (distances[i] / totalDistance) * relativeNumber;
			relativeDistances.push(factor);
		}

		return relativeDistances;
	};

	const nextDateIndex = getNearestNextDate();
	const relativeDistances = getDistanceNumbas();

	$: processedDates = dates.map((date, index) => {
		let stage: 'done' | 'approaching' | 'future' = 'future';
		let progress = 0;
		if (index != dates.length - 1) {
			/*
			Consider the following times:
				9 is the current date
				2 is the past date
				20 is the future date
			2 --- 9 --- 20

			9 - 2 = 7 		// pastDistance
			20 - 9 = 11		// futureDistance
			20 - 2 = 18		// totalDistance
			7 / 18 =  0.389 ( <- * 100 = current percentage of time done)
			11 / 18 = 0.611
						   ------ +
							  1.000
			*/
			const currentDate = new Date();
			const pastDistance = currentDate.getTime() - date.date.getTime();
			const futureDistance = dates[index + 1].date.getTime() - currentDate.getTime();
			progress = ( pastDistance / (pastDistance + futureDistance) ) * 100;
		}

		// distanceToNext is something, unless it is the last element in the array.
		let distanceToNext = 0;
		if (spaceRelativeToTime && index != dates.length - 1)
			distanceToNext = relativeDistances[index] > 10 ? relativeDistances[index] : 10;

		if (date.date.getTime() < new Date().getTime()) {
			stage = 'done';

		} else if (date.date.getTime() > new Date().getTime()) {
			stage = 'future';
			if (index == nextDateIndex) stage = 'approaching';
		}

		return {
			...date,
			stage,
			distanceToNext,
			progress
		};
	});
</script>

<div class="timeline">
	{#if dates}
		{#each processedDates as date}
			<div class="timeline-point-wrapper">
				<span class="{date.stage}">{date.title}</span>
				<div class="timeline-point circle color-{date.stage}">
					<Icon size={IconSize.SMALL} icon={date.icon != null ? date.icon : ''} />
				</div>
				<span>{date.date.getDate()} / {monthNames[date.date.getMonth()]}</span>
			</div>

			<!-- Kan possibly progress bar zijn (html element)-->
			<div
				class="timeline-line"
				style:--progress={date.progress}%
				style:flex-basis="{spaceRelativeToTime ? date.distanceToNext : '100'}%"
			/>
		{/each}
	{/if}
</div>

<style>
	.timeline {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.timeline-point-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 2rem;
		/* min-height: fit-content;
		justify-content: center; */
	}

	.timeline-point {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: blue;
		flex-shrink: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.timeline-point-wrapper > span {
		min-width: max-content;
		/* margin-bottom: 0.2rem; */
	}

	.timeline-line {
		width: 100%;
		height: 2px;
		/* margin-top: 0.9rem; */
		align-self: center;
		/* background-color: #3a3c43; */
		background: 
			linear-gradient(90deg, #21bde5 0 var(--progress), #3a3c43 0);
	}

	/* .timeline-line-progress {
		background: linear-gradient(90deg, blue 0 50%, red 0);
	} */

	.timeline-line:last-of-type {
		display: none;
	}

	/* .approaching {
		color: #21bde5;
		font-size: larger;

	} */

	.color-done {
		background-color: #21bde5;
	}

	.color-approaching {
		/* background-color: #21BDE5; */
		background-color: transparent;
		border: 2px solid #21bde5;
	}

	.color-future {
		background-color: #b8c0cc;
	}
</style>
