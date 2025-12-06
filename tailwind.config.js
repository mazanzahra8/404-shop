/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'persian': ['IranYekanWeb', 'tahoma']
      },
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        primary: {
          DEFAULT: '#fdcb0a',
          50: '#fffae7',
          100: '#feefb3',
          200: '#fee78e',
          300: '#fedc5b',
          400: '#fdd53b',
          500: '#fdcb0a',
          600: '#e6b909',
          700: '#b49007',
          800: '#8b7006',
          900: '#6a5504',
        },
        'body-color':'#F8FBFC'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

