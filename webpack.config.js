const path = require('path');

const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require( 'html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: path.join(__dirname, 'src/main.js'),  // 这里应用程序开始执行

    output: {
        path: path.join(__dirname, 'dist'), // 所有输出文件的目标路径
        filename: '[name].[hash:6].js', // 「入口分块(entry chunk)」的文件名模板
        pathinfo: true, // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息。
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },
        ]
    },

    devServer: {
        host: 'localhost',
        port: 8001,
        open: false,
        hot: true,
        noInfo: false,
        contentBase: path.join(__dirname, "public"),
        overlay: {
            errors: true,
            warnings: false,
        }
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            },
        }),
        new VueLoaderPlugin(), // vue
        new BundleAnalyzerPlugin(), // 打包分析
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'public'),
                to: path.join(__dirname, 'dist'),
            }
        ]), // 打包引入静态资源
        new CleanWebpackPlugin(), // 清理 dist
        new HtmlWebpackPlugin({
            filename: 'index.html',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true// 压缩内联css
            },
            hash: true,
            template: path.join(__dirname, 'public/index.html'),
            inject: true,
          }),
    ],
};

module.exports = config;