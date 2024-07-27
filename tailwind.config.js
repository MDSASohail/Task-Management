/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blueBG:"#5f33e1",
        selectBG:"#eee9ff",
        titleColor:"#aeacb6",
        wholeBG:"##fcfdfe"
      }
    },
  },
  plugins: [],
}