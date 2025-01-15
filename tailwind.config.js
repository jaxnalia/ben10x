/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  safelist: [
    'text-omnitrix',
    'text-alien',
    'text-energy',
    'border-omnitrix',
    'border-alien',
    'border-energy',
    'border-watch',
    'bg-watch',
    'bg-hero',
    'bg-alien',
    'bg-energy',
    'bg-omnitrix',
    'hover:bg-watch',
    'hover:bg-hero',
    'hover:bg-alien',
    'hover:bg-energy',
    'hover:bg-omnitrix',
    'hover:text-watch',
    'hover:text-hero',
    'hover:text-alien',
    'hover:text-energy',
    'hover:text-omnitrix',

  ],
  theme: {
    extend: {
      colors: {
        'omnitrix': '#40AF3C',
        'watch': '#1A1A1A',
        'hero': '#FFFFFF',
        'alien': '#147AAB',
        'energy': '#FF3131'
      },
      fontFamily: {
        'badaboom': ['Badaboom BB', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}