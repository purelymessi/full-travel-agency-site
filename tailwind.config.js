const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" ,"./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Nunito"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

