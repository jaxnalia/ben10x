<script>
    import { onMount } from 'svelte';
    
    let canvas;
    let ctx;
    
    onMount(() => {
      if (!canvas) return;
      
      ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      drawHalftoneVignette();
      
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawHalftoneVignette();
      });
    });
    
    function drawHalftoneVignette() {
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.max(width, height);
      
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(0, 0, width, height);
      
      // Increased dot size and decreased spacing for more visibility
      const dotSize = 6;
      const spacing = 16;
      
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const normalizedDistance = Math.min(distance / (maxRadius * 0.8), 1);
          
          const size = dotSize * (1 - normalizedDistance * 0.8); // Reduced fade-out effect
          if (size > 0) {
            // Increased contrast with lighter dots
            ctx.fillStyle = '#3A3A3A';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      
      // Reduced vignette opacity
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, maxRadius * 0.8
      );
      gradient.addColorStop(0, 'rgba(26, 26, 26, 0)');
      gradient.addColorStop(1, 'rgba(26, 26, 26, 0.6)'); // Reduced opacity
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
  </script>
  
  <canvas
    bind:this={canvas}
    class="fixed inset-0 w-full h-full -z-10 opacity-80"
  />