const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.jsx'
    ],

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loaders: ['babel-loader'],
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loaders: ['style-loader', 'css-loader']
            },
        ]
    },
    
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux",
    },
};