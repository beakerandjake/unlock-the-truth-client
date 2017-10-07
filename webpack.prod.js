const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    output: {
        filename: '[name].[chunkhash].js'
    },
    // Use .map files for prod. 
    devtool: 'source-map',
    plugins: [
        // Minify the source and add source maps. 
        new UglifyJsPlugin({
            sourceMap: true
        }),
        // Use DefinePlugin to define env as production for our dependencies. 
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        rules: [{
            // HTML (minimize in prod)
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src'],
                    minimize: true
                }
            }
        }, {
            // STYLES (minimize in prod)
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }]
        }]
    }
});