<script lang="ts">
    import { ChallengeStatus } from '$lib/challenge';
    import { IconSize } from '$lib/Icon';

    import Icon from '$lib/Icon.svelte';
    import Status from './Status.svelte';

    export let background: string = "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    export let title: string = "XSS Vulnerability";
    export let status: ChallengeStatus = ChallengeStatus.OPEN;
    export let creators: number = 0;
    export let entries: number = 0;
    export let trend: number = 0;

    let totalEntriesPercentage = entries / creators * 100;
</script>

<article style="background-image: url({background})">
    <div class="content">
        <div class="info">
            <span class="tag"><Icon size={IconSize.SMALL} icon="profile" /> {creators}</span>
            <span class="tag"><Icon size={IconSize.SMALL} icon="trend"/> {trend}</span>
        </div>
        <h1>{title}</h1>
        <Status status={status} />
        <div class="bar" style="--percentage: {totalEntriesPercentage}%">
            <div class="loader">
                Handed in products: {entries}
                <span class="percentage">{totalEntriesPercentage}%</span>
            </div>
            <span class="total">78 <Icon size={IconSize.SMALL} icon="document" /></span>
        </div>
    </div>
</article>

<style>
    article {
        box-sizing: border-box;
        position: relative;

        border-radius: 6px;
        border: 1px solid var(--neutral-400);
        width: 100%;
        aspect-ratio: 37/23;
        padding: 21px;
        padding-bottom: 0;

        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    article:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgb(255, 255, 255, .5) 80%);
    }
    
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 100%;
    }

    .info {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: auto;
        font-size: 14px;
    }

    .info .tag {
        box-sizing: border-box;
        display: flex;
        gap: 8px;
        align-items: center;
        background-color: var(--neutral-100);
        box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
        border-radius: 12px;
        padding: 12px;
        overflow: hidden;
    }

    h1 {
        color: var(--neutral-100);
        margin-bottom: 12px;
        font-size: clamp(16px, 4vw, 24px);
    }

    .bar {
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 32px;
        width: calc(100% + 42px);
        left: -21px;
        background: var(--neutral-100);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: var(--neutral-900);
        margin-top: 21px;
        font-size: 14px;
        
        white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
    }

    .bar .loader {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        width: var(--percentage, 0);
        padding: 0 12px;
        background-color: var(--primary-300);
        color: var(--primary-900);

        overflow: hidden;
    }

    .bar .loader .percentage {
        margin-left: auto;
    }

    .total {
        display: flex;
        align-items: center;
        margin-right: 8px;
    }
</style>