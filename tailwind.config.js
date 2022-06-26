let defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'axiforma': ['axiforma', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        background: 'rgb(20 22 26 / 1)',
        secondary: '#1b1e24'
      }
    },
  },
  plugins: [],
}