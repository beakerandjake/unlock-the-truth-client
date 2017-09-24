const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
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