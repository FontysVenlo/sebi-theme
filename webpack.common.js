const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'static'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
};