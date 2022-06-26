// module.exports = {
//   mode: 'jit',
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         transparent: 'transparent',
//       current: 'currentColor',
//       'white': '#ffffff',
//       'Paint_Dark': {
//         100: '#980F5A',
//         200: '#750550',
//         300: '#570530',
//         400: '#4C0027',
//         101: '#041C32',
//         201: '#04293A',
//         301: '#04293A',
//         401: '#041C32',
//         000: '#EADEDE',
//         },
//         'Paint_Light': {
//           102: '#FEE3EC',
//           202: '#F47C7C',
//           302: '#F999B7',
//           402: '#F2789F',
//           103: '#FFF323',
//           203: '#FFCA03',
//           303: '#FF5403',
//           403: '#F90716',
//           500: '#000000',
//           },
//       }
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
      
        'Paint_Dark': {
          900: '#4C0027',
          800: '#570530',
          700: '#750550',
          600: '#980F5A',
          400: '#1B2430',
          300: '#51557E',
          200: '#816797',
          100: '#D6D5A8',
        },
        'Paint_Light':{
          900: '#FD5D5D',
          800: '#FF8080',
          700: '#FFF7BC',
          600: '#C0EDA6',
          400: '#00FFAB',
          300: '#14C38E',
          200: '#B8F1B0',
          100: '#E3FCBF',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
};
