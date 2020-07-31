---
home: true
heroImage: /assets/logo.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
sidebar: auto
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

在根目录下建立version.json

```
{
  "env": "dev",
  "version": "1.0.0",
  "subversion": 0
}
```
查看项目组件文档，如文档无变化请删除doc文档再执行命令
```
yarn doc
```

E2E测试
```
官网参考lhttps://docs.cypress.io/api/api/table-of-contents.html
文档结构
├── tests
│   └── e2e
│       ├── plugins // 配置测试文件保存的地方
│       │   └── index.js
│       ├── specs // 写测试的地方
│       │   └── test.js
│       └── support // 写自定义命令的地方
│           ├── commands.js
│           └── index.js

```