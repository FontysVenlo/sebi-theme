module.exports = {
  content: ["./layouts/**/*.{html,js}", "./public/**/*.html", "./assets/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
