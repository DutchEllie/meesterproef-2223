<script>
      import { onMount } from 'svelte';
    import HeroItem from './HeroItem.svelte';
	import { slide, fade } from 'svelte/transition';
    
    let items = [
      {
        title: "Asics is cool",
        subtitle: "Asics",
        description: "Help us find the right visual language for the natural beauty player’s tradespeople to showcase their product.",
        link: "#",
        image: "https://images.unsplash.com/photo-1465859674575-26d1bbca2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8CXwyfHJyfGltZXN8MXx8fHwxNjM0OTM5NzIy&ixlib=rb-1.2.1&q=80&w=1080"
      },
      {
        title: "Adidas in action",
        subtitle: "Adidas",
        description: "The perfect blend of performance and style in modern sports fashion.",
        link: "#",
        image: "https://images.unsplash.com/photo-1682695799561-033f55f75b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      },
      {
        title: "Nike's innovation",
        subtitle: "Nike",
        description: "Our approach to innovation is centered on the athlete's voice, and pushing the edges of what can be.",
        link: "#",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      }
    ];

    let currentIndex = 0;

    onMount(() => {
      const intervalId = setInterval(() => {
        currentIndex =  (currentIndex + 1) % items.length;
      }, 5000);
      
      // Zorg ervoor dat je de interval cleart als de component wordt vernietigd
      return () => clearInterval(intervalId);
    });

  </script>
<section class="hero">
  <h2>Check out what's new</h2>
  {#each items as item, i}
    {#if currentIndex == i}
    {#if currentIndex == items.length -1}
    <div transition:fade>
      <HeroItem 
      title={item.title} 
      subtitle={item.subtitle} 
      description={item.description} 
      link={item.link} 
      image={item.image} 
      totalItems={items.length} 
      bind:currentIndex={currentIndex}
      />
    </div>
    {:else}
    <div transition:slide={{axis: "x"}}>
      <HeroItem 
      title={item.title} 
      subtitle={item.subtitle} 
      description={item.description} 
      link={item.link} 
      image={item.image} 
      totalItems={items.length} 
      bind:currentIndex={currentIndex}
      />
    </div>
    {/if}
    {/if}
  {/each}
</section>
<style>
    section.hero{
    position:relative;
    width: 100vw;
    height:37.5em;
    overflow-x:scroll;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
}
section.hero > h2 {
    position: absolute;
    left: -999999em;
}
section.hero::-webkit-scrollbar {
    display: none;
}

.hero div{
  display:flex;
}
</style>