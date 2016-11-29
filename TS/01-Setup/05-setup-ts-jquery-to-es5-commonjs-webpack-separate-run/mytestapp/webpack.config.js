var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: ['./es5-src/app.js'],
	output: {
		path: './build',
		filename: 'app.js'
	},
	module:{
		preLoaders: [
            {
                test:   /\.js$/,
                loader: 'source-map-loader'
            }
        ]
	}
};