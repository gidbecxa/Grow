/** @type {import('tailwindcss').Config} */ 
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    ".layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/landingpage**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '900px',
      lg: '1250px',
      xl: '1440px',
    },
    extend: {
      
    },
  },
  plugins: [],
}