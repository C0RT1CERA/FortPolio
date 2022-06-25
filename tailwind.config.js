module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
Externals
      'Paint_Dark': {
        100: '#980F5A',
        200: '#750550',
        300: '#570530',
        400: '#4C0027',
        101: '#041C32',
        201: '#04293A',
        301: '#04293A',
        401: '#041C32',
        000: '#EADEDE',
        },
        'Paint_Light': {
          102: '#FEE3EC',
          202: '#F47C7C',
          302: '#F999B7',
          402: '#F2789F',
          103: '#FFF323',
          203: '#FFCA03',
          303: '#FF5403',
          403: '#F90716',
          500: '#000000',
          },
main
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
