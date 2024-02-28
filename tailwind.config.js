/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#894efe',
        even: '#14141f',
        odd: '#1f1f37',
        icon: '#894FFF',
        'dark-even': '#ffffff', // ライトモードの偶数セクションの背景色
        'dark-odd': '#f0f0f0', // ライトモードの奇数セクションの背景色
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};
