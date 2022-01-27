module.exports = {
  content: ["./layouts/**/*.{html,js}", "./public/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
