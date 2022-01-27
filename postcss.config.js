const path = require('path');

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js'),),
    ]
};