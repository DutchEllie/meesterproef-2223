<script lang="ts">
    export let participantData: {
        name: string;
        userTag: string;
        icon: string | undefined;
        skills: string[];
        submissionDate: Date;
        country: string;
        statistics: {
            likes: number;
            views: number;
        };
    }[] = [
        {
            name: 'Safouane',
            userTag: '@safouane',
            icon: '/man1.jpg',
            skills: [ 'PHP', 'Laravel', 'C+-', 'JavaScript'],
            submissionDate: new Date('2023-06-01'),
            country: 'Netherlands',
            statistics: {
                likes: 10,
                views: 100,
            },
        },
        {
            name: 'Jesse',
            userTag: '@jessr',
            icon: '/man1.jpg',
            skills: ['UX design', 'Communication', 'HTML', 'CSS', 'JavaScript'],
            submissionDate: new Date('2023-03-02'),
            country: 'Sweden',
            statistics: {
                likes: 64,
                views: 210,
            },
        },
        {
            name: 'Ting',
            userTag: '@IntingTing',
            icon: '/man1.jpg',
            skills: ['UX design', 'HTML', 'CSS', 'JavaScript'],
            submissionDate: new Date('2023-12-02'),
            country: 'Germany',
            statistics: {
                likes: 14,
                views: 310,
            },
        },
        {
            name: 'Bram',
            userTag: '@casper',
            icon: '/man1.jpg',
            skills: ['UX design', 'JavaScript'],
            submissionDate: new Date('2023-04-01'),
            country: 'South Africa',
            statistics: {
                likes: 104,
                views: 560,
            },
        },
    ];
</script>

<section class="participantData">
    <div class="title-block">
        <h2>Challenge participants</h2>
        <input type="text" placeholder="Find challenge participants" />
    </div>
    <section>
        <h3>Creator</h3>
        <h3>Type</h3>
        <h3>Submission date</h3>
        <h3>Country</h3>
        <h3>Statistics</h3>
    </section>
    {#if participantData}
        {#each participantData as user}
            <section class="participant-block">
                <div class="user-block">
                    <img src={user.icon} alt="" />
                    <h3>{user.name}</h3>
                    <span>{user.userTag}</span>
                </div>
                <ul class="skills-block">
                    {#each user.skills as skill}
                        <li>{skill}</li>
                    {/each}
                </ul>
                <div>
                    <p>{user.submissionDate}</p>
                </div>
                <p>{user.country}</p>
                <div class="statistics-block">
                    <p>Likes: {user.statistics.likes}</p>
                    <p>Views: {user.statistics.views}</p>
                </div>
            </section>
        {/each}
    {/if}
</section>

<style>
    :root {
        --skill-color: #BAE4E8;
    }

    .participantData {
        margin: 0 auto;
        margin-top: 4em;
        margin-bottom: 4em;
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .participantData .title-block {
        display: flex;
        justify-content: space-between;
    }

    .participantData .title-block input {
        position: relative;
        display: block;
        padding: .5em;
        width: 18em;
    }

    .participantData section:first-of-type {
        display: grid;
        border-top: 2px solid black;
        margin-top: 2em;
        padding-top: 1em;
        padding-bottom: 1em;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .participantData .participant-block {
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        border: 2px solid black;
        box-sizing: border-box;
        padding: 1em;
        padding-left: 0;
    }

    .participantData .participant-block .user-block {
        display: grid;
        grid-template-columns: auto 2fr;
        align-items: center;
    }

    .participantData .participant-block .user-block img {
        border-radius: 100%;
        margin: .5em;
        width: 4em;
        grid-row: 1 / span 2;
    }

    .participantData .participant-block .user-block h3 {
        grid-row: 1 / 2;
    }

    .participantData .participant-block:not(:last-of-type) {
        border-bottom: none;
    }

    .participantData .participant-block .skills-block {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .participantData .participant-block .skills-block li {
        background-color: var(--skill-color);
        padding: .5em;
        margin: .1em;
    }
    
</style>