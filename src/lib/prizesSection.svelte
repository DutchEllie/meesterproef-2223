<script>

</script>

<section class="prizes">
    <div>
        <img class="projectImage" src="https://placehold.co/600x400" alt=""/>
        <ul>
            <li>
                <div>
                    <img src="/medal.svg" alt=""/>
                </div>
                <div>
                    <span>First place</span>
                    <h2>Cooperate with us</h2>
                </div>
            </li>
            <li>
                <div>
                    <img src="/medal.svg" alt=""/>
                </div>
                <div>
                    <span>Second place</span>
                    <h2>Asics Air Max</h2>
                </div>
            </li>
            <li>
                <div>
                    <img src="/medal.svg" alt=""/>
                </div>
                <div>
                    <span>Third place</span>
                    <h2>Asics voucher</h2>
                </div>
            </li>
        </ul>
    </div>
</section>

<style>
    .prizes {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 3em;
    }

    .prizes > div {
        display: flex;
        gap: 2em;
    }

    .prizes div ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .prizes div ul li {
        display: grid;
        grid-template-columns: .1fr 1fr;
        gap: 1em;
    }

    .prizes div ul li div:first-of-type {
        background-image: url('/klodder.svg');
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
    }

    .prizes div ul li div:first-of-type {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }

    .prizes div ul li div:last-of-type {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        align-self: center;
    }

    .prizes div ul li:nth-of-type(2) div:last-of-type h2 {
        font-size: 1.3em;
    }

    .prizes div ul li:nth-of-type(3) div:last-of-type h2 {
        font-size: 1em;
    }

    .prizes div ul li:nth-of-type(1) div:first-of-type {
        width: 7em;
    }

    .prizes div ul li:nth-of-type(2) div:first-of-type {
        width: 6em;
    }

    .prizes div ul li:nth-of-type(3) div:first-of-type {
        width: 5em;
    }

    .prizes div ul li div:first-of-type {
        display: flex;
        justify-content: flex-end;
    }

    .prizes div ul li:nth-of-type(1) div img {
        width: 100%;
    }

    .prizes div ul li:nth-of-type(2) div img {
        width: 75%;
    }

    .prizes div ul li:nth-of-type(3) div img {
        width: 50%;
    }

    @media (max-width: 60em) { 
        .prizes {
            width: 100%;
            padding: 1em;
        }

        .prizes div {
            flex-direction: column;
            flex-wrap: wrap;
        }

        .prizes div > .projectImage {
            margin: 0 auto;
            margin-top: 1em;
            width: 90%;
        }

        .prizes div ul li:not(:first-of-type) {
            margin-top: 1em;
        }

        .prizes div ul li:nth-of-type(1) > div:first-of-type {
            margin-right: 0em;
        }

        .prizes div ul li:nth-of-type(2) > div:first-of-type {
            margin-right: 1em;
        }

        .prizes div ul li:nth-of-type(3) > div:first-of-type {
            margin-right: 2em;
        }

        .prizes div ul li div:first-of-type {
            align-items: flex-end;
        }
    }
</style>