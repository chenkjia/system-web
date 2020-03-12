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