const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: './src/app/app.module.js'
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
        // Ensure modules always have same Id.
        new webpack.HashedModuleIdsPlugin(),
        // Treat anything from node_modules as vendor. 
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({
                resource
            }) => /node_modules/.test(resource),
        }),
        // Extract webpack runtime. f
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        // Add bundle analysis
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        })
    ],
    module: {
        rules: [{
            // LINTING
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
        }, {
            // BABEL JS
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                    // Auto annotate angular components
                    loader: 'ng-annotate-loader',
                    options: {
                        singleQuotes: true
                    }
                },
                {
                    // Transpile to es5
                    loader: 'babel-loader'
                }
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