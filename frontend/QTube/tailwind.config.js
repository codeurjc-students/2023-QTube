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
        "qt-black-4": "#212121",
        "qt-black-5": "#00041E",
  
        "qt-gray": "#272727",
        "qt-gray-2": "#3F3F3F",
        "qt-gray-3": "#888888",
        "qt-gray-4": "rgba(255, 255, 255, 0.2)",
        "qt-gray-5": "#AAAAAA",
        "qt-gray-6": "hsl(0, 0%, 18.82%)",
        "qt-gray-7": "#D9D9D9",
        "qt-gray-8": "#AEAEAE",
        "qt-gray-9": "#4D4D4D",
        "qt-gray-10": "#535353",
        "qt-gray-11": "#666666",
        "qt-gray-12": "#D0D0D0",
        "qt-gray-13": "#f1f1f1",
  
        "qt-blue": "#065FD4",
        "qt-blue-2": "#3EA6FF",
        "qt-blue-3": "#263850",
        "qt-blue-4": "#3C4C62",

        "qt-red": "#FF0000",
      },
      screens: {
        "3sm": "475px",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
