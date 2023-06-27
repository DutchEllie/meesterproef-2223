<script>

</script>


<section class="boxed">
    <h2>Top 3 challenges of the week</h2>
    <p>Doe mee aan de top 3 wekelijkse challenges!</p>
    {#each Array(3) as _, i}
    <article>
      <figure>
        <img src="https://picsum.photos/200/300" alt="">
        <figcaption>
          <div>
            <img src="/person-244.svg" alt="">
            <p>250</p>
          </div>
          <button><img src="/heart-492.svg" alt=""></button>
        </figcaption>
      </figure>
      <div>
        <h3>test</h3>
        <p>bedrijfsnaam</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam optio ut eaque itaque vel? Incidunt a vero qui voluptate dolorem, temporibus iusto voluptatum modi excepturi praesentium autem ut similique reprehenderit unde voluptatem saepe nemo, deleniti omnis minus laboriosam laudantium nam.</p>
        <a href="#">Meer informatie</a>
        <a href="#">Deelnemen</a>
        <em>deadline: <span></span></em>
      </div>
    </article>
  {/each}
  <svg width="1750" height="1084" viewBox="0 0 1750 1084" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M108.111 110.214C119.149 102.555 133.787 97.5365 139.759 95.4903C168.901 85.5011 193.772 86.0086 204.676 86.1751C304.088 87.695 286.147 83.2562 323.001 84.1102C323.79 84.129 351.7 85.1198 407.527 87.1015C454.418 88.7664 454.718 88.7825 457.306 88.7369C500.138 87.9743 513.132 81.9861 537.912 89.1128C547.633 91.9082 561.746 95.9656 572.545 107.77C586.786 123.339 586.196 142.818 585.895 164.504C585.466 195.533 575.254 201.76 574.489 237.729C574.048 258.524 577.439 257.418 577.147 279.241C576.735 309.804 576.411 334.079 559.854 350.553C536.365 373.926 493.801 368.075 485.984 366.883C439.365 365.825 401.762 366.63 376.877 367.497C304.251 370.024 259.101 372.64 259.101 372.64C211.374 375.403 187.914 377.578 156.228 368.051C141.207 363.534 123.041 357.868 107.53 343.174C98.1094 334.251 85.1792 317.747 79.4441 262.732C73.6331 206.967 66.5518 139.048 108.111 110.214Z" fill="#FFE84B"/>
    <path d="M1110.16 589.022C1135.36 523.822 1181.32 515.856 1201.16 520.022C1317.16 451.022 1442.66 469.522 1499.16 482.022C1555.66 494.522 1533.66 567.022 1499.16 617.022C1464.66 667.022 1499.16 651.522 1480.16 717.522C1461.16 783.522 1496.16 746.022 1499.16 837.022C1502.16 928.022 1445.66 902.522 1386.16 880.522C1326.66 858.522 1295.16 880.522 1235.66 934.022C1176.16 987.522 1176.16 993.522 1110.16 1000.02C1044.16 1006.52 1044.16 971.522 1066.16 880.522C1088.16 789.522 1091.16 783.522 1110.16 746.022C1129.16 708.522 1078.66 670.522 1110.16 589.022Z" fill="#FFE84B"/>
    <path d="M315.238 792.272C312.225 734.733 313.631 730.774 339.348 724.703C351.403 708.866 407.257 683 484.207 683C561.157 683 512.937 703.06 502.49 792.272C492.042 881.485 466.124 857.73 368.079 899.433C270.033 941.136 318.252 849.812 315.238 792.272Z" fill="#FFE84B"/>
    </svg>
</section>

<style>
    .boxed > h2, .boxed > p{
        width:100%;
    }
    .boxed{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        flex-direction: row;
        gap:1em;
        position:relative;
    }
    .boxed article{
        flex: 1 1 15em;
        display:flex;
        flex-direction:column;
        box-shadow: 0px 0.4px 8px rgba(0, 0, 0, 0.1);
        background:white;
    }
    article figure > img{
        background:gray;
        height:100%;
        width:100%;
        object-fit:cover;
    }
    article figure{
        position:relative;
        height:12em;
        order:-1;
    }
    figcaption{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;

    }
    figcaption div,figcaption button{
        position:absolute;
        top:1em;
        height:3em;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:no-wrap;
        background:white;
    }
    figcaption button{
        right:1em;
        width:3em;
    }

    figcaption img{
        background:white;
    }
    figcaption div img{
        height:1.2em;
        width:1.2em;
    }

    figcaption div{
        left:.8em;
        top:.8em;
        width:5em;
        gap:.5em;
    }
    figcaption div p{
        display:flex;
        flex-wrap:wrap;
        font-size:.8em;
    }

    article div{
        padding:.5em;
    }
    h3+p {
    padding-bottom: 1em;
    font-size:.8em;
    color:#6E98FF;
    }
    h3{
        font-size:1.6em;
    }
    div > a:first-of-type, div > a:last-of-type{
        color:black;
        text-transform: uppercase;
        padding:1em;
        display:flex;
        width:100%;
        margin-top:1em;
justify-content: center;    }
    div > a:first-of-type{
        background:white;
        border:.2em solid #FFEB66
    }
    div > a:last-of-type{
        background:#FFEB66;
    }
    article div em{
        width:100%;
        display:flex;
        justify-content: center;
        margin-top:.5em;
    }
    input, fieldset, button {
    border: none;
}
img{
    width:100%;
    aspect-ratio:1/1;
    height:2em;
}
section > svg{
    position:absolute;
    top:0;
    left:-14em;
    width:120%;
    height:100%;
    z-index:-1;
}
@media (max-width:820px){
    section > svg{
        top: 1em!important;
    left: 0em!important;
    width: 100%!important;
    height: 100%!important;
    }
    section{
        /* overflow:hidden; */
    }
}
</style>