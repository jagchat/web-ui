var path = require('path');
var webpack = require('webpack');
module.exports = {
	devtool: 'source-map',
	entry: ['./ts-src/app.ts'],
	output: {
		path: './build',
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			include: path.resolve(__dirname, "ts-src"),
			loader: 'babel-loader?presets[]=es2015!ts-loader'
		}]
	},
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
	},
	watch: true
}