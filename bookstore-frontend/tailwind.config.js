/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [],
}

