/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef5e7',
          100: '#fde8c3',
          200: '#fbd89b',
          300: '#f9c873',
          400: '#f7ba55',
          500: '#f5ac37',
          600: '#f39c31',
          700: '#f08829',
          800: '#ee7521',
          900: '#eb5413',
        },
        secondary: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
      },
      fontFamily: {
        marathi: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
