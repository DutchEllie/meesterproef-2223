<script>
    export let imgSrc;
    export let peopleCount;
    export let title;
    export let description;
    export let timeline;
    export let organization;
</script>

<article>
    <figure>
        <img src={imgSrc} alt="">
        <figcaption>
            <div>
                <span>
                    <img src="" alt="">
                </span>
                <span>
                    <img src="" alt="">
                </span>
                <span>
                    <img src="" alt="">
                </span>
                <p>{peopleCount} people already uploaded their work</p>
            </div>
        </figcaption>
    </figure>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{timeline}</p>
        <div>
            <button>Add your journey</button>
            <span>or</span>
            <button>Miss your chance of winning</button>
        </div>
        <h3>{organization}</h3>
    </div>
</article>

<style>
   article{
    margin-bottom:1em;
    flex:1 1 22em;
    display:flex;
    flex-direction: column;
    position: relative;
    box-shadow:0px 0.4px 8px rgba(0, 0, 0, 0.1);
    overflow:hidden;
}

article:after{
content:'';
position:absolute;
top:-42em;
right:-6em;
height:250%;
width:3%;
background:rgba(255,255,255,.5);
backdrop-filter:blur(1px);
transform:rotate3d(0,0,1,135deg);
transition:0s;
}

article:hover:after{
    transform:translate(-35em,35em) rotate3d(0,0,1,135deg);
    transition:1s;
}

article > div{
    padding:1em;
    display:flex;
    flex-direction:column;
    gap:.5em;
}
article figure{
    height:12em;
    background:red;
    order:-1;
    position:relative;
}
article > figure > img{
    height:100%;
    width:100%;
    object-fit:cover;
}
article figure figcaption{
    position:absolute;
    bottom:0;
    width:100%;
}

article figure figcaption div{
    display:flex;
    height:3em;
    align-items:center;
    background:rgb(0 0 0 /.4);
    color:white;
}
article figure figcaption div span{
    height:60%;
    aspect-ratio:1/1;
    border-radius:50%;
    background:yellow;
    border:inset 2px #ffeb004f;
}
article figure figcaption div span:first-of-type{
    margin-left:.6em;
}
article figure figcaption div span:nth-of-type(n+2){
margin-left:-.5em;
}

article figure figcaption div p{
    margin-left:.5em;
    font-size:.8em;
}

.grid-container > div{
    height:12em;
    border: 1px solid rgb(199, 199, 199);
    background:red;
}

div > div{
    display:flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    gap:.5em;
}

div > div button{
    height:4em;
    padding:0 1em;
    border:none;
    background:yellow;
    flex:1 1 10em;
}
div > div button:last-of-type{
    background:transparent;
    opacity:.5;
    transition:.1s;
}
div > div button:last-of-type:hover{
    position:relative;
    color: white;
}
div > div button:last-of-type:hover::after{
    content:"Stop with the challenge";
    transition:0s;
    position:absolute;
    transition:0s;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:grid;
    place-content: center;
    color:red;
    border:.1em inset red;
    transform:scale(0.95);
}

div div span{
    position:relative;
}
div div span::before, div div span::after{
    position:absolute;
    height:40%;
    width:.1em;
    top:0;
    left:.25em;
    content:"|";    
}
div div span::before{
    top:-1em;
}
div div span::after{
    top:1em;
}
h3{
    position:absolute;
    top:1em;
    right:1em;
    padding: .5em 3em;
    background:white;
    font-size:1em;
    color:#6E98FF;
}

button:hover{
    font-weight:700;
    transform:scale(1.05);
    cursor:pointer;
    opacity: 1!important;
}
</style>