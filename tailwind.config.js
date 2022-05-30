module.exports = {
  purge: [
   './components/**/*.{vue,js}',
   './layouts/**/*.vue',
   './pages/**/*.vue',
   './plugins/**/*.{js,ts}',
   './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#FEFEFE',
        dark: '#363636',
      },
      fontFamily: {
        display: ['Libre Caslon Display', 'serif'],
        body: ['Quicksand', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
