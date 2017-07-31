const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './../src'),
    entry: {
        app: './index.js'
    },
    module: {
    loaders: [
        {
        loader: "babel-loader",

        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, "./../src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        query: {
            plugins: ['transform-runtime'],
            presets: ['es2017', 'react', 'stage-0'],
        }
        },
    ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        modules: [
            'node_modules'
        ]
    }
};