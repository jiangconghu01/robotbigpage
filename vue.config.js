const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
// console.log(process.env.NODE_ENV)
const proxyUrl = 'http://192.168.1.21:9900/'
// const proxyUrl = 'http://192.168.0.101:8080/'
module.exports = {
  //   publicPath: process.env.NODE_ENV === 'production' ? '/robot/dist/' : '',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  css: {
    // 是否开启 CSS source maps
    sourceMap: true
  },
  chainWebpack: (config) => {
    // 修复HMR
    config.resolve.symlinks(true)
    // vue默认@指向src目录
    config.resolve.alias.set('@', path.resolve('src'))
  },
  transpileDependencies: ['@jiaminghi/data-view'],
  devServer: {
    compress: true,
    hot: true,
    // host: '0.0.0.0',
    port: 9005,
    proxy: {
      '/login': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false
        // pathRewrite: { '^/cpms/mnpl': '' }
      },
      '/eas-robot/targetData/': {
        target: proxyUrl,
        changeOrigin: true,
        secure: false
        // pathRewrite: { '^/cpms/mnpl': '' }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/assets/scss/common.scss')]
    }
  }
}
