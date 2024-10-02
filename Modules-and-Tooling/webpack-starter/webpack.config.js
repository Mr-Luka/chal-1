const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // path that we are using for output is this 'dist' folder
        filename: 'bundle.js' // this is the name of the file that will be generated
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack App',
          filename: 'index.html',
          template: './src/index.html',
        })
    ]
}