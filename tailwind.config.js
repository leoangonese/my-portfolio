module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: '#fe5900',
        primary: '#6c63ff'
      },
      backgroundImage: {
        'hero-dark': "url('/assets/figures/home-dark.png')",
        'hero-white': "url('/assets/figures/home-white.png')",
        'hero': "url('/assets/figures/hero.png')",
      },
    },
  },
  plugins: [],
}
