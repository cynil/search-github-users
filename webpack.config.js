var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, './app'),
        publicPath: '/app/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/, 
                loader: 'style!css!sass'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}