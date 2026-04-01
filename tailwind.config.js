module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // important for Tailwind v2
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        10: '10px',
        12: '12px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}