/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'monospace'],
        bebasNeue: ['Bebas-Neue', 'sans-serif'],
      },
      colors: {
        button: '#FEBF00',       // Primary button color
        header: '#BD1F17B2',     // Secondary button color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

