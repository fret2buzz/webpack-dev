const path = require('path');

module.exports = function(env) {
    return {
        entry: {"index": './src/index.js'},
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].js',
            publicPath: 'http://localhost:9000/'
        },
        devServer: {
            contentBase: path.join(__dirname, './dist'),
            port: 9000,
            compress: true,
            hot: true,
            overlay: true,
            inline: true
        }
    };
};
