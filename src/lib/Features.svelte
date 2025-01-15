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


  const features = [
    {
      icon: '🟩',
      title: '10X Programmed',
      description: 'Powered by mysterious Alien Technology™, unlock your 10x potential.',
      color: 'omnitrix'
    },
    {
      icon: '💧',
      title: '100% Initial LP',
      description: 'Entire supply goes to the liquidity pool at launch enabling fair distribution.',
      color: 'alien'
    },
    {
      icon: '😹',
      title: 'Memeology',
      description: 'Join the community, and make BEN10X the coin to hold.',
      color: 'energy'
    }
  ];
</script>

<section class="py-20 px-4 bg-watch/95">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-16 tracking-widest" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
      <span class="text-omnitrix">Alien</span> Technology™
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each features as feature, i}
        <div 
          use:useIntersectionObserver
          on:intersection={(e) => handleIntersection(e, i)}
        >
          {#if visibleItems.has(i)}
            <div 
              class="bg-watch/50 p-6 rounded-lg border transition-colors"
              class:text-omnitrix={feature.color === 'omnitrix'}
              class:text-alien={feature.color === 'alien'}
              class:text-energy={feature.color === 'energy'}
              class:border-omnitrix={feature.color === 'omnitrix'}
              class:border-alien={feature.color === 'alien'}
              class:border-energy={feature.color === 'energy'}
              in:fly={{ y: 50, duration: 1000, delay: 400 * (i + 1) }}
            >
              <div class="text-current text-4xl mb-4">{feature.icon}</div>
              <h3 class="text-xl font-bold mb-2 text-hero tracking-widest">{feature.title}</h3>
              <p class="text-gray-400">{feature.description}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>