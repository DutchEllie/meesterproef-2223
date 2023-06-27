<script lang="ts">
    export let title = '';
    export let subtitle = '';
    export let description = '';
    export let link = '#';
    export let image = '';
    export let totalItems = 0;

    export let currentIndex = 0;
  
    const next = () => {
        if(currentIndex < totalItems - 1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
    }
  
    const previous = () => {
        if(currentIndex > 0){
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
    }
  </script>
<section class="heroItem">
    <div>
        <h3>{title}</h3>
        <span>{subtitle}</span>
        <p>{description}</p>
        <a href={link}>More about the challenges in {title}</a>
    </div>
    <img src={image} alt={title}>
    <button class="previous" on:click={previous}>
        <img src="/arrow-left.svg" alt="">
    </button>
    <button class="next" on:click={next}>
        <img src="/arrow-left.svg" alt="">
    </button>
</section>
  
  <style>



section.heroItem > button{
    position:absolute;
    background:transparent;
    border:none;
    background-image:url("/blobForArrow.png");
    background-size: cover;
}
section.heroItem > button img{
    width:6em;
    transform:scale(.7)
}
button.previous{
    left:2em;
}
button.next{
    right:2em;
    transform:rotate(180deg);
}

section.heroItem{
    display: flex;
    min-width:100dvw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    position:relative;
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
    text-align: left;
}
.heroItem{
    width:100vw;
}
section.heroItem > img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter:brightness(0.8);
}
section.heroItem *{
    color:white;
}
section.heroItem button, section.heroItem h3{
    width:max-content;
}
section.heroItem span:first-of-type{
    order:-1;
    margin-bottom: .5em;
}

section.heroItem div{
    display:flex;
    flex-direction: column;
    width:30em;
}

section.heroItem div p{
    margin-top:1em;
}

section.heroItem div a{
    background:#21BDE5;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: 600;
    font-size:.8em;
    width:max-content;
    margin-top:.5em;
}
h3{
    background:black;
    padding: 1em 2em;
    text-align: left;
    max-width:15em;
}
  </style>