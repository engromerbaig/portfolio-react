// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },

      colors:{
        'theme-blue': '#3B82F6',
        'theme-dark': '#232323',
        'theme-light': '#FFFFF0',


      },

      boxShadow: {
        'hero-image': '33px 40px 0px 9px #000000',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
