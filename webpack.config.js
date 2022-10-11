const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('eslint-webpack-plugin')
const NODE_ENV = require['nodeEnv']


module.exports = {
    entry: './src/index.js',
    mode: NODE_ENV,
    output: {
        filename: "main.js",
    },
    devtool: 'inline-source-map',
    devServer: {
        open:true,
        port:3001,
        hot:(NODE_ENV == "development") ? true : false
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new TerserWebpackPlugin(),
        new CssMinimizerWebpackPlugin(),
        new EslintWebpackPlugin(),
        new StylelintWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader']
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
}