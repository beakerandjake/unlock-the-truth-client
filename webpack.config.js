const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // DEV ONLY
    devtool: 'inline-source-map',
    // DEV ONLY
    devServer: {
        contentBase: './dist',
        },
    plugins: [
        // Clean the dist folder 
        new CleanWebpackPlugin(['dist']),
        // Generate the html file with the latest script tags. 
        new HtmlWebpackPlugin({
            title: "HTML"
        })
    ],
    module: {
        rules: [{
            // STYLES
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            // IMAGES
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            // FONTS
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: 'file-loader'
        }]
    }
};