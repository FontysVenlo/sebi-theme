const path = require('path');

module.exports = {
  content: [path.resolve(__dirname, 'layouts/**/*.{html,js}'), "./public/**/*.html", path.resolve(__dirname, 'assets/**/*.{ts,js}')],
  safelist: [
    'code-copy'
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
