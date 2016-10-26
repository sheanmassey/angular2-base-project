var webpack = require("webpack");

module.exports = {
    entry: './src/boot',
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
    ]
};
