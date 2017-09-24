const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/index.js',
        vendor: [
            'lodash'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // Clean the dist folder 
        new CleanWebpackPlugin(['dist']),
        // Generate the html file with the latest script tags. 
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    module: {
        rules: [{
            // BABEL JS
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
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