/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moss-green': '#2E4036',
        'moss-dark': '#1f2c25',
        'moss-light': '#3e5549',
        'clay': '#CC5833',
        'clay-hover': '#b84a28',
        'cream': '#F2F0E9',
        'cream-card': '#FAF8F3',
        'charcoal': '#1A1A1A',
        'charcoal-card': '#242424',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        telemetry: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
}
