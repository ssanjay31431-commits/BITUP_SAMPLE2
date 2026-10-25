/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF6F0',
          200: '#F5EFE6',
          300: '#EFE8DD',
          400: '#E2D7C8',
          500: '#D5C4B0'
        },
        espresso: {
          DEFAULT: '#241E19',
          light: '#362F28',
          dark: '#171310',
          black: '#0D0A08'
        },
        brand: {
          red: '#DC2626',
          'red-dark': '#B91C1C',
          'red-soft': '#FEE2E2',
          gold: '#C68B59',
          'gold-light': '#E9C46A',
          amber: '#D97706',
          clay: '#A89988'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif']
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(36, 30, 25, 0.06), 0 1px 4px -1px rgba(36, 30, 25, 0.04)',
        'warm': '0 10px 30px -10px rgba(36, 30, 25, 0.1), 0 4px 12px -2px rgba(36, 30, 25, 0.05)',
        'warm-lg': '0 20px 40px -15px rgba(36, 30, 25, 0.15), 0 8px 20px -6px rgba(36, 30, 25, 0.08)',
        'warm-xl': '0 30px 60px -20px rgba(36, 30, 25, 0.22), 0 15px 30px -10px rgba(36, 30, 25, 0.12)',
        'glow-red': '0 10px 25px -5px rgba(220, 38, 38, 0.35)',
        'podium': 'inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 15px 35px -10px rgba(40, 35, 29, 0.12)'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
