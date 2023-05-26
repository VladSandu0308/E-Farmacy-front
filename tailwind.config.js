/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      extend: {
        colors: {
          primary: '#67aaf9',
          secondary: '#f4f1de',
          textMain: '#000',
        },
        gridTemplateRows: {
          '12': 'repeat(12, minmax(0, 1fr))',
          '9': 'repeat(9, minmax(0, 1fr))',
        },
        gridRow: {
          'span-13': 'span 13 / span 13',
          'span-10': 'span 10 / span 10',
          'span-8': 'span 8 / span 8',
          'span-7': 'span 7 / span 7',
        },
      },
    },
plugins: [require("tw-elements/dist/plugin.cjs")],
}

