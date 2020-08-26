// const vueConfig = require('../../node_modules/@vue/cli-service/webpack.config.js')
const path = require('path')
const navConf = require('./nav.js')
const pluginConf = require('./plugins.js')
// import pugPlainLoader from '../../node_modules/pug-plain-loader'
module.exports = {
  title: 'Hello 前端',
  description: 'Just playing around',
  // base: '/wwis-admin-web/',
  head: [
    ['link', { ref: 'icon', href: './assets/logo.png' }]
  ],
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    docsDir: 'docs',
    nav: navConf,
    smoothScroll: true,
  },
  // markdown: {
  //   lineNumbers: true
  // },
  configureWebpack (config, isServer) {
    return {
      module: {
        rules: [
          {
            test: /\.pug$/,
            use: 'pug-plain-loader',
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../../src'),
          '@assets': path.resolve(__dirname, './assets'),
          '@vuepressComp': path.resolve(__dirname, 'docs/.vuepress/components/')
        }
      }
    }
  }
}
