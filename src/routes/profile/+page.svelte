<svelte:head>
    <title>Your challenges</title> 
</svelte:head>

<script>
    import Article from '$lib/Article.svelte';
    let challenges = [
        {
            imgSrc: 'https://images.pexels.com/photos/13730872/pexels-photo-13730872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            peopleCount: 25,
            title: 'Web development',
            description: 'Within the AUAS program, people are only expected to create a safe online environment. Some people don\'t know what XXS vulnerability is. That\'s why this challenge has been added for people who need to make their applications more secure.',
            timeline: 'May 1, 2023 - June 30, 2023',
            organization: 'UAUS'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg',
            peopleCount: 30,
            title: 'Graphic design',
            description: 'The challenge is to create a new logo for our brand. We are looking for innovative and creative designs.',
            timeline: 'June 1, 2023 - July 31, 2023',
            organization: 'DesignCo'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
            peopleCount: 15,
            title: 'Mobile App Development',
            description: 'The challenge is to build a mobile app that helps users manage their time and tasks more effectively. We are looking for unique and user-friendly solutions.',
            timeline: 'July 1, 2023 - August 31, 2023',
            organization: 'AppDev'
        },
        {
            imgSrc: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg',
            peopleCount: 20,
            title: 'Data Science',
            description: 'The challenge is to use our provided dataset to build a machine learning model that can predict customer churn. We are looking for accurate and efficient solutions.',
            timeline: 'August 1, 2023 - September 30, 2023',
            organization: 'DataInc'
        }
    ];
</script>

<main>
    <section>
        <h1>Your challenges</h1>
        <p>View and update the current challenges you signed up for</p>
        <div>
            <button class="active">
                Active challenges
            </button><button>
                Finished challenges
            </button><button>
                Signed up
            </button>
        </div>
        {#each challenges as challenge (challenge.title)}
        <Article 
            imgSrc={challenge.imgSrc} 
            peopleCount={challenge.peopleCount} 
            title={challenge.title} 
            description={challenge.description} 
            timeline={challenge.timeline} 
            organization={challenge.organization}
        />
    {/each}
    </section>
    <aside>
        <div>
            <img src="" alt="">
            <button>Remove image</button> <!-- Remove image uitwerken -->
        </div>
        <h2>username</h2>
        <p>The Netherlands</p>
        <ul>
            <li>
                <p>Followers</p>
                <p>0</p>
            </li>
            <li>
                <p>Following</p>
                <p>0</p>
            </li>
            <li>
                <p>Project views</p>
                <p>0</p>
            </li>
        </ul>
        <nav>
            <a href="#">Portfolio</a>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a class="active" href="/profile">Your challenges</a>
            <a href="#">Sign out</a>
        </nav>
    </aside>
</main>

<style>

aside{
    order:-1;
}

*{
    transition:.2s;
}

a{
    color:black;
}
a.active{
    font-weight:700;
}
a:hover{
    transform:scale(1.05);
    font-weight:700;
}

main{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:0;
    max-width:75em;
    margin:0 auto;
}
main aside{
    border:1px solid rgb(196, 196, 196);
    display:block;
    height:calc(100dvh - 6em);
    flex:0 1 20em;
    overflow:hidden;
}
main aside div{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:.5em;
    position:relative;
    width:11em;
    margin:0 auto;
    padding:1em;
}
aside > p{
    text-align:center;
}
aside div img{
    border-radius:50%;
    width:8em;
    height:8em;
    background:yellow;
    border:inset 2px #ffeb004f;
}
aside div button{
    position:absolute;
    bottom:0em;
    right:2em;
    height:3em;
    width:3em;
    background:yellow;
    border-radius:50%;
    border:none;
    cursor:pointer;
    color:transparent;
    box-shadow: -2px -1px 6px 0px #00000024;
}
aside h2{
    text-align:center;

}
aside > ul{
    padding:1em;
}
aside > ul li{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:nowrap;
}
aside nav{
    display:flex;
    flex-direction:column;
    margin-top:1em;
    border-top:1px solid  rgb(196, 196, 196);
}
aside nav a{
    height:2.5em;
    display:flex;
    align-items:center;
    margin:0 auto;
    width:100%;
    text-align:left;
    border-bottom:1px solid  rgb(196, 196, 196);
    padding-left:1em;
}

main > section{
    flex:1 1 20em;
    padding:1em;
    display:flex;
    flex-wrap:wrap;
    align-items:start;
    align-content:start;
    gap:1.5em;
}

main section > h1{
    width:100%;
}

main section > p{
    margin-top:-1.25em;
}

main section > div{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-bottom:1em;
    gap:1em;
    width:100%;
}
main section > div button{
    padding:1em;
    border:none;
    border-bottom:.2em solid rgb(199, 199, 199);
    background:white;
}
main section > div button.active{
    border:.2em solid rgb(199, 199, 199);
    border-bottom:unset;
}


button:hover{
    font-weight:700;
    transform:scale(1.05);
    cursor:pointer;
    opacity: 1!important;
}

@media (max-width:792px){
    aside{
        flex:1 1 100%!important;
    }
}
</style>