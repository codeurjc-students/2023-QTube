/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "qt-black": "#0F0F0F",
        "qt-black-2": "#121212",
        "qt-black-3": "#222222",
  
        "qt-gray": "#272727",
        "qt-gray-2": "#3F3F3F",
        "qt-gray-3": "#888888",
        "qt-gray-4": "rgba(255, 255, 255, 0.2)",
        "qt-gray-5": "#AAAAAA",
  
        "qt-blue": "#065FD4",
      },
      screens: {
        "xs": "375px",  
      },
      containers: {
        "4xs": "100px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require("tailwindcss-animated"),
  ],
}