<script>

</script>

<main>
    <section class="featured-challenges">

        <div class="header-container">
            <h1>Featured challenges</h1>
            <p>Join the featured challenges</p>
        </div>

        <div class="grid-container">
            <div class="div1">
                <div class="top">
                    <span>knopje1</span>
                    <span>knopje2</span>
                    <img src="" alt="whatever">
                </div>
                <div class="bottom">
                    <h2>Immersive details</h2>
                    <span>Asics</span>
                    <p>How to create your bla bla</p>
                    <div class="buttons">
                        <button>Enroll</button>
                        <button>More information</button>
                    </div>
                    <time>24-08-2001</time>
                </div>
            </div>
            <div class="div2">
                <span>knopje1</span>
                <span>knopje2</span>
                <img src="" alt="whatever">
                <div>
                    <h2>Immersive details</h2>
                    <span>Asics</span>
                    <p>How to create your bla bla</p>
                    <button>Enroll</button>
                    <button>More information</button>
                    <time>24-08-2001</time>
                </div>
            </div>
            <div class="div3">
                <span>knopje1</span>
                <span>knopje2</span>
                <img src="" alt="whatever">
                <div>
                    <h2>Immersive details</h2>
                    <span>Asics</span>
                    <p>How to create your bla bla</p>
                    <button>Enroll</button>
                    <button>More information</button>
                    <time>24-08-2001</time>
                </div>
            </div>
            <div class="div4">
                <span>knopje1</span>
                <span>knopje2</span>
                <img src="" alt="whatever">
                <div>
                    <h2>Immersive details</h2>
                    <span>Asics</span>
                    <p>How to create your bla bla</p>
                    <button>Enroll</button>
                    <button>More information</button>
                    <time>24-08-2001</time>
                </div>
            </div>
            <div class="div5">
                <span>knopje1</span>
                <span>knopje2</span>
                <img src="" alt="whatever">
                <div>
                    <h2>Immersive details</h2>
                    <span>Asics</span>
                    <p>How to create your bla bla</p>
                    <button>Enroll</button>
                    <button>More information</button>
                    <time>24-08-2001</time>
                </div>
            </div>
        </div>
    </section>

    <section class="challenge-container">
        <h1>All Challenges</h1>
        <button>All categories <i class="fa-sharp fa-light fa-user">User</i></button>
        <input type="search" placeholder="Input entry">

        <div class="all-challenges">
        <div class="div6">
            <span>knopje1</span>
            <span>knopje2</span>
            <img src="" alt="">
        </div>

        <div class="div7">
            <span>knopje1</span>
            <span>knopje2</span>
            <img src="" alt="">
        </div>

        <div class="div8">
            <span>knopje1</span>
            <span>knopje2</span>
            <img src="" alt="">
        </div>

        <div class="div9">
            <span>knopje1</span>
            <span>knopje2</span>
            <img src="" alt="">
        </div>

        <div class="div10">
            <span>knopje1</span>
            <span>knopje2</span>
            <img src="" alt="">
        </div>
        <div class="div11">
            <span>knopje1</span>
            <span>knopje2</span>
            <img src="" alt="">
        </div>
        </div>
        <button>Load More Challenges</button>
    </section>
</main>

<style>

    main {
        padding: 3em;
    }

    .featured-challenges {
        width: 100%;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1em;
        grid-row-gap: 1em;
    }

    .grid-container > div {
        height: 12em;
        border: 1px solid black;
        background: cornflowerblue;
    }

    .div1 {
        grid-area: 1 / 1 / 2 / 5;
    }


    .div2 {
        grid-area: 1 / 5 / 2 / 7;

    }

    .div3 {
        grid-area: 2 / 1 / 3 / 3;

    }

    .div4 {
        grid-area: 2 / 3 / 3 / 5;

    }

    .div5 {
        grid-area: 2 / 5 / 3 / 7;

    }


    .all-challenges {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }

    .all-challenges > div {
        height: 12em;
        border: 1px solid black;
        background: cornflowerblue;
    }

    .div6 {
        grid-area: 1 / 1 / 2 / 3;
    }

    .div7 {
        grid-area: 1 / 3 / 2 / 5;
    }

    .div8 {
        grid-area: 1 / 5 / 2 / 7;
    }

    .div9 {
        grid-area: 2 / 1 / 3 / 3;
    }

    .div10 {
        grid-area: 2 / 3 / 3 / 5;
    }

    .div11 {
        grid-area: 2 / 5 / 3 / 7;
    }
</style>