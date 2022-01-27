const path = require('path');

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss/nesting'),
        require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js'),),
    ]
};