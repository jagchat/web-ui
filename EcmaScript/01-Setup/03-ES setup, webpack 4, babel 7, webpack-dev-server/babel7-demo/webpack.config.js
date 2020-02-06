// Imports: Dependencies
const path = require('path');

// Webpack Configuration
const config = {
    mode: 'development',
    // Entry
    entry: ['./src/app.js'],
    // Output
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    // Loaders
    module: {
        rules: [
            // JavaScript Files
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    // Plugins
    plugins: [],

    // OPTIONAL
    // Development Tools (Map Errors To Source File)
    devtool: 'source-map',
    devServer: {
        writeToDisk: true,
        port: 8080
    }
};
// Exports
module.exports = config;