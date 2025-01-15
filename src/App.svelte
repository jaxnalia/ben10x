<script>
  import { onMount } from 'svelte';
  import Hero from './lib/Hero.svelte';
  import Features from './lib/Features.svelte';
  import HalftoneBackground from './lib/HalftoneBackground.svelte';
  import AlternatingContent from './lib/AlternatingContent.svelte';
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<HalftoneBackground />

<main class="min-h-screen font-ben10 tracking-widest">
  {#if mounted}
    <Hero />
    <Features />
    <AlternatingContent />
  {/if}
</main>