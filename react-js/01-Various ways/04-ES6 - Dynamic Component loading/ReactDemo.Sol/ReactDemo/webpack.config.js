var path = require('path');
var webpack = require('webpack');
//var PluginTransformClassProperties = require("babel-plugin-transform-class-properties");

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './Scripts/app/app.jsx'
    },
    output: {
        path: './build',
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: '[name].js',
        sourceMapFilename: '[name].js.map'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            include: path.resolve(__dirname, "Scripts/app"),
            loader: 'babel-loader',
            query: {
                presets: [{ plugins: ['transform-class-properties']},'es2015', 'react', 'stage-0']
            }
        }]
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"],
        root: [path.resolve('./Scripts/app')]
    },
    watch: false
};