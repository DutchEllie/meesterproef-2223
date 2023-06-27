<script lang="ts">
    
</script>

<section class="challenge-info">
    <article>
        <ul>
            <li class="active">Detail challenge</li>
            <li>Selection criteria</li>
            <li>Resources</li>
        </ul>
        <h2>About the Immersive Retail Experience Challenge</h2>
        <p>Are you interested in the exciting world of web development? Whether you're a beginner or have some experience, it's crucial to be aware of the potential risks that can lurk in the shadows of the internet. One such risk is known as XSS (Cross-Site Scripting) vulnerability..</p>
    </article>
    <aside>
        <ul>
            <li>
                <div>
                    <img src="/skill.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Skill level</h3>
                    <h4>Intermediate</h4>
                </div>
            </li>

            <li>
                <div>
                    <img src="/deadline.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Deadline</h3>
                    <h4>17-07-2023</h4>
                </div>
            </li>

            <li>
                <div>
                    <img src="/price.svg" alt=""/>
                </div>
                <div class="wrapper">
                    <h3>Price</h3>
                    <h4>Paid internship at ASICS</h4>
                </div>
            </li>
        </ul>
    </aside>
    <article>
        <h2>Skills you’ll have mastered after the challenge</h2>
        <ul>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>UX design</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Communication</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Coding</p>
            </li>
            <li>
                <img src="/klodder.svg" alt=""/>
                <p>Presenting</p>
            </li>
        </ul>
    </article>
</section>

<style>
    .challenge-info {
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding-top: 4em;
        width: 80%;
    }

    .challenge-info article:first-of-type {
        flex: 50%;
    }

    .challenge-info article:first-of-type p {
        margin-top: .5em;
        width: 90%;
    }

    .challenge-info article:last-of-type {
        width: 100%;
        margin-bottom: 5em;
    }

    .challenge-info article:last-of-type h2 {
        width: 14em;
    }

    .challenge-info article:last-of-type ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: .4em;
        width: 25em;
    }

    .challenge-info article:last-of-type ul li {
        display: flex;
        width: 10em;
        margin-top: 1em;
        align-items: center;
        margin-right: 2em;
    }

    .challenge-info article:last-of-type ul li img {
        width: 1.5em;
        margin-right: 1em;
    }

    .challenge-info article:first-of-type > ul {
        display: flex;
        margin-left: 1em;
        gap: 3em;
    }

    .challenge-info article:first-of-type > ul li {
        margin-bottom: 1em;
        cursor: pointer;
    }

    .challenge-info article:first-of-type > ul li.active {
        border-top: 3px solid var(--black);
        border-left: 3px solid var(--black);
        border-right: 3px solid var(--black);
        padding-top: .5em;
        padding-left: 1em;
        padding-right: 1em;
    }

    .challenge-info article:first-of-type > ul li:not(.active) {
        padding-bottom: .5em;
        border-bottom: 3px solid var(--black);
    }

    .challenge-info aside {
        display: flex;
        flex: 50%;
        justify-content: center;
    }

    .challenge-info aside > ul li {
        margin-top: .5em;
        display: flex;
    }

    .challenge-info aside > ul li:not(:last-of-type) {
        margin-bottom: 1.5em;
    }

    .challenge-info aside ul li .wrapper h3 {
        font-weight: bold;
    }

    .challenge-info aside ul li .wrapper h4 {
        font-weight: normal;
    }

    .challenge-info aside ul li > div:nth-of-type(1) {
        margin-right: .5em;
        background-image: url('/klodder.svg');
        background-repeat: no-repeat;
    }

    @media (max-width: 60em) { 
        .challenge-info {
            margin: 0;
            flex-direction: row;
            padding-top: 1em;
            width: 100%;
        }

        .challenge-info article:first-of-type,
        .challenge-info article:last-of-type {
            width: unset;
            flex: 100%;
        }

        .challenge-info article:first-of-type > ul {
            margin-left: .5em;
            gap: 1em;
        }

        .challenge-info article:last-of-type > ul {
            margin-left: .8em;
        }

        .challenge-info article:first-of-type > ul {
            justify-content: flex-start;
        }

        .challenge-info aside {
            justify-content: flex-start;
            width: unset;
            flex: 50%;
            margin: 1em;
        }

        .challenge-info article:first-of-type h2 {
            width: 14em;
        }

        .challenge-info article:first-of-type p {
            width: 23em;
        }

        
        .challenge-info article:first-of-type p,
        .challenge-info article:last-of-type p {
            margin-left: .7em;
        }

        .challenge-info article:first-of-type h2,
        .challenge-info article:last-of-type h2 {
            margin-left: .5em;
        }
    }
</style>