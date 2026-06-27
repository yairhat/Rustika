/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        'gold-lt': '#e8c97a',
        carbon: '#111111',
        surface: '#1a1a1a',
        'surface-2': '#222222',
        'site-text': '#f0ece4',
        muted: '#888880',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        garamond: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      borderRadius: {
        site: '6px',
      },
    },
  },
  plugins: [],
};
