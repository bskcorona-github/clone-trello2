/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "mainBackgroundColor":'#0D1117',
        "columunBackgroundColor":'#161C22'
      }
    },
  },
  plugins: [],
}

