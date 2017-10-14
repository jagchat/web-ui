var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: ['./es6-src/app.js'],
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
        ],		
		loaders:[{
			test: /\.js$/,
			include: path.resolve(__dirname, "es6-src"),
			loader: 'babel-loader',
			query:{
				presets: ['es2015']
			}
		}]
	}
};
