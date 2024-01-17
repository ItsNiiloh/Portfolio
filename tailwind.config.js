/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'text': '#0b1a15',
        'background': '#676767',
        'primary': '#44d3a3',
        'secondary': '#81ebc7',
        'accent': '#53f0bb',
      },
},
  },
  plugins: [],
}

