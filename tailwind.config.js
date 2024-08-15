module.exports = {
  mod: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // colors: {},
    extend: {
      colors: {
        primary: {
          300: '#ffd284',
          500: '#ffcc71',
          700: '#feb638',
        },
        secondary: '#00b1d2',
        main: '#718096',
        background: '#fff',
        header: '#0d0106',
        footer: '#808080',
        link: '#00b1d2',
        accent: '#2d3748',
      },
    },
  },
  variants: {
    display: [
      'children',
      'default',
      'children-first',
      'children-last',
      'children-odd',
      'children-even',
      'children-not-first',
      'children-not-last',
      'children-hover',
      'hover',
      'children-focus',
      'focus',
      'children-focus-within',
      'focus-within',
      'children-active',
      'active',
      'children-visited',
      'visited',
      'children-disabled',
      'disabled',
      'responsive',
    ],
  },
  plugins: [require('tailwindcss-children')],
}