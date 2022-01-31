module.exports = {
  content: ["./layouts/**/*.{html,js}", "./public/**/*.html", "./assets/**/*.js"],
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
