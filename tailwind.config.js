const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        danger: colors.red["700"],
        'danger-hover': colors.red["600"],
        'danger-focus': colors.red["800"],
        primary: colors.orange["400"],
        'primary-hover': colors.orange["300"],
        'primary-focus': colors.orange["500"],
        success: colors.green["600"],
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      width: {
        100: '25rem',
        150: '38rem',
        200: '50rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ]
}
