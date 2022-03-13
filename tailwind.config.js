const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: "jit",
    content: ["./app/**/*.{js,jsx}"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        }
      }
    },
    variants: {},
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio')
    ]
  };