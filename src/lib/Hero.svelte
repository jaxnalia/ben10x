<script>
  import { fade, fly } from 'svelte/transition';
  import { useIntersectionObserver } from './utils/intersectionObserver.js';

  let isVisible = false;

  function handleIntersection(event) {
    const entry = event.detail;
    if (entry.isIntersecting) {
      isVisible = true;
    }
  }
</script>

<section 
  class="relative h-screen flex items-center justify-center overflow-hidden"
  use:useIntersectionObserver
  on:intersection={handleIntersection}
>
  <div class="absolute inset-0 bg-watch/80"></div>
  
  {#if isVisible}
    <div class="relative z-10 text-center px-4" in:fade={{ duration: 1000, delay: 200 }}>
      <div class="mb-8">
        <div class="text-6xl font-bold mb-4" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
          <!-- <span class="text-omnitrix">Ben 10</span> -->
          <!-- <span class="text-hero">Universe</span> -->
          <img src="https://raw.githubusercontent.com/jaxnalia/ben10x/refs/heads/main/static/ben10x-title.png" alt="Ben10x">
        </div>
        <p class="max-sm:text-sm text-xl text-gray-300 max-w-2xl mx-auto" in:fly={{ y: 50, duration: 1000, delay: 600 }}>
          CA: 0xEb0E7214ADcBe1dB345712372a5D27301D14139E
        </p>
      </div>
      
      <div class="space-x-4" in:fly={{ y: 50, duration: 1000, delay: 800 }}>
        <button class="bg-omnitrix text-hero px-8 py-3 rounded-full hover:bg-omnitrix/80 transition-colors">
          Chart
        </button>
        <button class="border-2 border-alien text-alien px-8 py-3 rounded-full hover:bg-alien hover:text-hero transition-colors">
          Telegram
        </button>
      </div>
    </div>
  {/if}

  <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/25 to-transparent"></div>
</section>