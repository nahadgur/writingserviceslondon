/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FEF3E2',
          100: '#FDE4B8',
          200: '#FBD28A',
          300: '#F9BC5A',
          400: '#F7A832',
          500: '#E67E22',
          600: '#D4691A',
          700: '#B85514',
          800: '#9A430F',
          900: '#7A320B',
          950: '#5A2508',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
