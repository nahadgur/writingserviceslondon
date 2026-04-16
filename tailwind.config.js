/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D46919',
          light:   '#e8943a',
          dark:    '#b05514',
          50:      '#fdf3e8',
          100:     '#f9ddb8',
          200:     '#f4c285',
          300:     '#eda652',
          400:     '#e8943a',
          500:     '#D46919',
          600:     '#b05514',
          700:     '#8c420f',
          800:     '#68310a',
          900:     '#441f06',
        },
        ink: {
          DEFAULT: '#1c1814',
          soft:    '#2e2820',
        },
        stone:     '#6a6058',
        dust:      '#a09080',
        parchment: {
          DEFAULT: '#faf7f3',
          2:       '#f5f0e8',
        },
        border: {
          DEFAULT: '#e2dbd0',
          soft:    '#ede8e0',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(42px,5vw,64px)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(32px,3.5vw,48px)', { lineHeight: '1.12' }],
        'display-md': ['clamp(22px,2.5vw,30px)', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
