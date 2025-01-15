<script>
    import { fade, fly } from 'svelte/transition';
    import { useIntersectionObserver } from './utils/intersectionObserver.js';
  
    let visibleItems = new Set();

    function handleIntersection(event, index) {
    const entry = event.detail;
    if (entry.isIntersecting) {
        visibleItems.add(index);
        visibleItems = visibleItems; // Trigger reactivity
    }
    }
  
    const content = [
      {
        title: "Master the Memeology",
        description: "BEN10X is more than just a coin - it's the most powerful plot device in all of crypto. With it, BEN10X can transform even the most depressed chart into 10x gains. Learn to harness its power and protect the chain from evil forces.",
        image: "../static/ben10x.jpg"
      },
      {
        title: "Activate Alien Technology",
        description: "Utilize never before seen fully untested alien 10x trading software stolen just moments ago from Area 51.",
        image: "../static/ben10x.png"
      },
      {
        title: "Team Up with Friends",
        description: "You're never alone in the fight against evil. Team up with Gwen, Kevin, and other allies who bring their own unique abilities to the table. Together, you'll face challenges that no single hero could overcome alone.",
        image: "https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ben10/team.webp"
      }
    ];
  </script>
  <div class="bg-watch/80">
    <div class="top-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-black/30"></div>
  <section class="py-20 px-4">
    
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-16 tracking-widest" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
        <span class="text-omnitrix">10x</span> Potential
      </h2>
      
      <div class="space-y-24">
        {#each content as item, i}
          <div 
            use:useIntersectionObserver
            on:intersection={(e) => handleIntersection(e, i)}
          >
            {#if visibleItems.has(i)}
              <div 
                class="flex flex-col {i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center"
                in:fly={{ y: 50, duration: 1000, delay: 800 * (i + 1) }}
              >
                <div class="flex-1">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    class="rounded-lg shadow-lg border border-omnitrix/20 w-full aspect-square object-cover"
                  />
                </div>
                <div class="flex-1 space-y-4">
                  <h3 class="text-3xl text-hero tracking-widest">{item.title}</h3>
                  <p class="text-gray-400 leading-relaxed">{item.description}</p>
                  <button class="bg-omnitrix text-hero px-6 py-2 rounded-full hover:bg-omnitrix/80 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>