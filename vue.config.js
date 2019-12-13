const version = require('./version.json')

module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'moment': 'moment'
    }
  },
  // chainWebpack: process.env.NODE_ENV === 'production' ? config => {
  //   config
  //     .plugin('webpack-bundle-analyzer')
  //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // } : () => {},
  pluginOptions: {
    dll: {
      entry: ['vue', 'vue-router', 'vuex', 'axios']
      // entry: {
      //   vue: ['vue', 'vue-router'],
      //   request: ['axios', '@/utils/request']
      // }
      // open: 'auto',
      // inject: true
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      },
      '/files': {
        target: 'http://localhost:3000'
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      version: `${version.env}-V${version.version}.${version.subversion}`,
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
  // productionSourceMap: false
}
