const path = require('path');
const webpack = require('webpack');
module.exports = function(env) {
    return {
        entry: {"index": './src/index.js'},
        devServer: {
            contentBase: path.join(__dirname, './dist'),
            port: 9000,
            compress: true,
            hot: true,
            overlay: true
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].js',
            publicPath: 'http://localhost:9000/'
        }
    };
};
