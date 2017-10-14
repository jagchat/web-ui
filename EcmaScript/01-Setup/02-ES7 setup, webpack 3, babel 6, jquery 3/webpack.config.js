var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: path.resolve(__dirname, './src/app.js')
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'app.all.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: path.resolve(__dirname, "src"),
			loader: 'babel-loader',
			query: {
				presets: ['es2017']
			}
		}]
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".jsx", ".js"]
	},
	watch: false //optional
};