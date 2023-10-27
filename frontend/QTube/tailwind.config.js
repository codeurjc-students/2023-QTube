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
  
        "qt-blue": "#065FD4",
        "qt-blue-2": "#3EA6FF",
        "qt-blue-3": "#263850",
        "qt-blue-4": "#3C4C62",
      },
      screens: {
        "2xs": "375px",
        "xs": "425px",
        "3sm": "475px",
        "2sm": "500px",  
      },
      spacing: {
        "drawer-x": ".875em",
        "drawer-y": ".578em",
      },
      containers: {
        "nxs": "78px",
        "1.5xs": "550px",
        "2md": "850px",
        "2lg": "1075px",
        "3lg": "1190px",
      },
      width: {
        "nxs": "78px",
        "drawer": "225px",
      }
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
}
