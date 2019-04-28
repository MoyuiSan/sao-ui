const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    //...
    publicPath: './', //打包的默认路径
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'public/index.html',
            // 输出文件名
            filename: 'index.html'
        }
    },
    css: {
        extract: false
    }, //强制关联Css样式
    productionSourceMap: false,
    configureWebpack: {

        //警告 webpack 的性能提示
        performance: {
            hints: 'warning',
            //入口起点的最大体积
            maxEntrypointSize: 50000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
    // 压缩图片
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
    },
    lintOnSave: false,
    // chainWebpack: config => {
    //     config.module
    //         .rule('images')
    //         .use('url-loader')
    //         .loader('url-loader')
    //         .tap(options => Object.assign(options, {
    //             limit: 10240
    //         }))
    // }

    // configureWebpack: config => {
    //     if (progress.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|.\css/, //匹配文件名
    //                     threshold: 10240,//对超过10k的数据压缩
    //                     deleteOriginalAssets: false //不删除源文件
    //                 })
    //             ]
    //         }
    //     }
    // },

}