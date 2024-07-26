/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "7%",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'contact-image': "url('/assets/image15.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "auto",
          scrollbarColor : "rgb(31 29 29) white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "12px"  // Increase the scrollbar width here
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(55 10 05)",
            borderRadius: "10px",
            border: "3px solid white"
          }
        }
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    }
  ],
}

