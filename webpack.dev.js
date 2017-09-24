const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        filename: '[name].bundle.js'
    },
    // Use cheap source maps for dev. 
    devtool: 'inline-source-map',
    // Use dev server and serve out of dist folder. 
    devServer: {
        contentBase: './dist',
    },
});