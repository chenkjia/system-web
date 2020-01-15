var compiler = require('vue-template-compiler')
var fs = require('fs')
var { exec } = require('child_process')

exports.handlers = {
  // 利用 vue-template-compiler 编译 vue 模板
  beforeParse: function (e) {
    if (/\.vue$/.test(e.filename)) {
      var output = compiler.parseComponent(e.source)
      e.source = output.script ? output.script.content : ''
    }
  },
  processingComplete: function ({ sourcefiles, doclets }) {
    const packageData = fs.readFileSync('./package.json')
    const { name, version } = JSON.parse(packageData)
    // eslint-disable-next-line no-path-concat
    const url = __dirname + `/doc/${name}/${version}/index.html`
    setTimeout(() => {
      if (!fs.existsSync(url)) return console.log(`请手动打开${url}`)
      switch (process.platform) {
        // win系统使用
        case 'win32': exec(`start ${url}`); break
        // mac系统使用
        case 'darwin':
        default: exec(`open ${url}`)
      }
      console.log(`可查看文档：${url}`)
    }, 500)
  }
}
