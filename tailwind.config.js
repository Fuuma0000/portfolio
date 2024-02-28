/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#894efe',
        even: '#D0F5FD',
        odd: '#f9f9f9',
        icon: '#894FFF',
        'dark-even': '#14141f',
        'dark-odd': '#1f1f37',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
