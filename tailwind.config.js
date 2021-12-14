const {guessProductionMode} = require("@ngneat/tailwind");
const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#39A6A3",
        "secondary": "#FE2679",
        "secondary-darker": "#D1045F",
        "accent": "#DEEEEA",
        "accent-darker": "#8E9996",
        "background": "#231E23",
        "background-light": "#363536",
        "warning": "#F78812",
        "error": "#FF0000",
        "success": "#3E7C17",
        "light-text": colors.white
      },
      borderColor: {
        "primary": "#39A6A3",
        "secondary": "#FE2679",
        "secondary-darker": "#D1045F",
        "accent": "#DEEEEA",
        "accent-darker": "#8E9996",
        "background": "#231E23",
        "background-light": "#363536",
        "warning": "#F78812",
        "error": "#FF0000",
        "success": "#3E7C17",
        "light-text": colors.white
      },
      borderStyle: {
        'dashed': '3px dashed',
      },
      boxShadow: {
        'inner-strong': "inset 4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      zIndex: {
        9999999: "9999999"
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
      borderWidth: ['hover', 'active'],
      padding: ['hover', 'active'],
      borderStyle: ['hover', 'focus', 'active']
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
