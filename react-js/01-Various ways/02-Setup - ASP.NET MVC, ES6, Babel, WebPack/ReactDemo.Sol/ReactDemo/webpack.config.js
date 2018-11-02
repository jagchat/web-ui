var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: ['./Scripts/app/app.jsx'],
    output: {
        path: './build',
        filename: 'app.js',
        sourceMapFilename: 'app.js.map'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            include: path.resolve(__dirname, "Scripts/app"),
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
    },
    watch: false
};