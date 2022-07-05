/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderRadius: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
