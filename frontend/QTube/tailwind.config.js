/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'qt-black': '#0f0f0f',
        'qt-black-2': '#121212',
        'qt-black-3': '#222222',
        'qt-black-4': '#212121',
        'qt-black-5': '#00041e',
  
        'qt-gray': '#272727',
        'qt-gray-2': '#3f3f3f',
        'qt-gray-3': '#888888',
        'qt-gray-4': 'rgba(255, 255, 255, 0.2)',
        'qt-gray-5': '#aaaaaa',
        'qt-gray-6': 'hsl(0, 0%, 18.82%)',
        'qt-gray-7': '#d9d9d9',
        'qt-gray-8': '#aeaeae',
        'qt-gray-9': '#4d4d4d',
        'qt-gray-10': '#535353',
        'qt-gray-11': '#666666',
        'qt-gray-12': '#d0d0d0',
        'qt-gray-13': '#f1f1f1',
        'qt-gray-14': '#4f4f4f',
  
        'qt-blue': '#065fd4',
        'qt-blue-2': '#3ea6ff',
        'qt-blue-3': '#263850',
        'qt-blue-4': '#3c4c62',

        'qt-warning': '#ff4040',
      },
      screens: {
        '4sm': '400px',
        '3sm': '475px',
        '3lg': '875px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
