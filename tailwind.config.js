/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "serif"], 
        archivo: ["Archivo", "serif"],
      },
      colors: {
        lightGrey: "#E0E0E0", 
        orange: "#ff4f00",  
        darkOrange:"#f34723",
        softOrange:"#ffaa66",
        softRed:"#ffe6e5",
        red:"#df0000",
        steelblue:"#4682B4",
        aliceblue:"#F0F8FF"
      },
      backgroundImage: {
        'highSpeedTrain': "url('./assets/images/highSpeedTrain.jpg')", 
      },
    },
  },
  plugins: [],
}
