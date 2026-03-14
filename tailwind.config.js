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
        },
        accent: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F39C12',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        dark: {
          DEFAULT: '#212F3C',
          light:   '#2C3E50',
          lighter: '#3D5166',
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
