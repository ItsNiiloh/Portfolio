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
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(18, 18, 18, 18)), url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

      },
},
  },
  plugins: [],
}

