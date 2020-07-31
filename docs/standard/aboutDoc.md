---
title: 使用vuepress搭配组件写文档
sidebarDepth: 4
---
## 快速入门

下文中，关于两个概念先说明一下：

	- 应用级: 项目中的vue应用，狭义点说就是指我们src中开发的组件等...
	- 文档级:  狭义点说就是/docs里的全部，只作用于/docs系统中

文档持续更新，需要以代码为准。如有更好方案，请多多分享~

### 目录结构

/docs/文件夹为文档系统，其他目录结构参考[官方](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

<img src="~@assets/standard/aboutDoc/1596179999642.png" alt="1596179999642" style="zoom: 80%;" />

```
|   README.md
|+--.vuepress
|   |   config.js       // 配置文件
|   |   enhanceApp.js   // 应用级引用设置
|   |   nav.js          // 导航栏设置
|   |   plugins.js      // 插件设置
|   |		\---assets			// 此路径下放附件
|   |   |   |   logo.png
|   |   |   \---form     // 表单类文档的图片
|   |   \---components	// 此路径下存放各组件demo
|   |   |   |   CodeBlock.vue // 代码块装载器，用于修饰.md中显示代码和示例
|   |   |   \---Form     // 表单类文档相关的demo
|   |   |           DemoDefault.vue
|   |   |           fields.js
|   |   |           
|   |   \---styles			// 此路径下存放样式
+---comp								// 导航栏-组件类文档
|   |   README.md
|   |   
|   \---form            //表单类文档md文件
|   \---table           // 表格文档md文件
|           
\---standard            // 导航栏-规则类文档
        README.md
```

### 快速开发

```
// npm i 进入项目把该装的包装了之后 
yarn docs:dev 跑起来
```

1. 在/.vuepress/components 建立自己对应的组件demo文件
2. 在/comp中写入对应的markdown文档说明，也可使用其他markdown可视化友好的工具直接写md文档，如：typora、有道云笔记，但是有些格式问题，比如不能写h1
3. 如何使用应用中开发好的组件，查看[下文](###4.使用src/component中已经开发好的组件写demo)，请开发能共同使用方便查看的文档~
4. 以下行为都需要重新npm run docs:dev （如果有发现能解决该问题的分享一下~）
  - 任何修改/.vuepress/config.js 
  - 任何增加、删除、重命名文件夹/文件
  - 修改.md文件的层级关系等触发侧边栏层级关系的刷新

   

### 学习vuepress

1. 官网： https://vuepress.vuejs.org/ 

2. 大佬系列博客：

   https://kebingzao.com/2019/12/22/air-ui-9/ 

    https://kebingzao.com/2019/12/26/air-ui-10/ 

    https://kebingzao.com/2020/01/02/air-ui-11/ 

3. 扒拉github上各种业界有名无名的组件库、插件的代码

4. 扒拉各种学习视频



## 踩坑之路

### 热更新问题

热更新有问题，修改后虽然触发webpack热更新，但是界面效果无变化

根据github上issue修改，部分情况可热更新到，如文字调整；
config.js会热更新失败，需要重启项目

![1596002934973](~@assets/standard/aboutDoc/1596002934973.png)

 https://github.com/vuejs/vuepress/issues/221 

<img src="~@assets/standard/aboutDoc/1596015993654.png" alt="1596015993654" style="zoom: 67%;" />

### 自动生成侧边栏

``` js
// .vuepress/config.js
1.直接配置sidebar：auto  
	会有一些h2、h3之类的标题无法显示
2.手动配置
  写法规范问题，不规范会不显示, 推荐写法：
	sidebar: {
    '/standard/': [{
      title: '开发规范',
      collapsable: true,
      children: [
        '',
      ]
    }],
    '/comp/': [{
      title: '前端组件说明',
      collapsable: true,
      children: [
        '',
        'table',
        'form'
      ]
    }]
  }
 组件越来越多的情况，每一个文档都需要手动配置，非常不友善。
3.自动生成
   两种方式，这里直接使用第(2)种插件方式
		1)- 使用node自动获取md文件，再自动生成到sidebar对象
		2)- 使用插件vuepress-plugin-auto-sidebar  ✔
				使用该组件，侧边栏的修改需要重启才看到效果，不是最好方案
```

```
由于h1在vuepress中可以用
---
title: 替代,
sidebarDepth: 4 // 侧边栏层级关系除了在/.vuepress/config.js 配置全局的sidebarDepth
也可以在局部配置，优先级更高
---

```

### 侧边栏排序问题

### 图片加载问题

  中文路径问题（最好请不要使用中文路径）： https://segmentfault.com/a/1190000022275001/ 

- [x] 使用快捷方式，配置alias

  ```js
  1.配置
  // .vuepress/config.js
  const path = require('path')
  module.exports = {
    	configureWebpack: {
        resolve: {
          alias: {
          	// @assets -> /docs/.vuepress/assets/...  
            '@assets': path.resolve(__dirname, './assets')
          }
        }
      }
  }
  2.使用，注意需要加‘~’在@assets前面，表示用webpack加载
  ![1595215230773](~@assets/form/1595215230773.png)
  
  ```

- [ ] 图片放大（TODO）

  

### 使用src/component中已经开发好的组件写demo

1）在.vuepress/components文件目录下（请不要自己再添加新的目录）写入对应的组件demo，官方已说明``docs/.vuepress/components: 该目录中的 Vue 组件将会被自动注册为全局组件。``[详细目录结构查看](https://vuepress.vuejs.org/zh/guide/directory-structure.html)
2）写demo

​	![1596160521872](~@assets/standard/aboutDoc/1596160521872.png)

当在form.md使用DemoBase时会出现异常，重启后依然失效：
[官方说明](https://vuepress.vuejs.org/zh/guide/using-vue.html#escaping), **有文件夹嵌套时，要在引用的名称中间加上“-”**

```js
::: tip
参考https://kebingzao.com/2019/12/22/air-ui-9/上说的，关于目录路径及目录名称说明，
这边要注意一个细节就是查找 form-demo-base 对应的 vue 文件的时候, vuepress 会先将 form-demo-base 字符串按照中划线-分成三个单词 form, demo, base, 接下来的检索模式就是去找 .vuepress/components/ 目录下：

		先优先在该目录下找 form 目录下的 demo 目录下的 base.vue
		如果找不到，再找 form 目录下的 demo-base.vue
		如果再找不到，最后找 form-demo-base.vue
		
如果三个文件都存在，就优先找第一种情况。后面两种情况忽略。所以我们可以知道他是通过目录结构是检索 vue 例子的，跟你 vue demo 里面的 name 属性没有关系，事实上在本例中，如果把例子中的 export 中的 name 属性去掉，也是没有影响的。 vuepress 照样可以找到对应的 vue 文件。之所以我们把它加进去是为了后续要在其他demo中进行引用组件时候，那时候就需要根据 name 属性了。也就是说，需要被引用到才需要写name，具体可以自己试试。
:::
```
写好form的某个demo，如form类型我们分为传统表单、对比表单、表格表单，那么我们会建立demo-base、demo-compare、demo-tableform 这3个vue文件的demo，写法完全跟在项目里写其他组件一样，可以直接引用到@/components里的其他组件（如果有其他项目里的第三方插件、全局指令如`` 常用的this.$message``.`` this.$loading``或其他需要全局定义的组件，需要在 /.vuepress/enhanceApp.js 中配置，或单项在demo中引用，[参考文档]( https://kebingzao.com/2019/12/26/air-ui-10/ )）。

在写好demo后发现页面显示效果不是我们要的可以操作的demo，[详细说明]( [https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6](https://vuepress.vuejs.org/zh/guide/using-vue.html#浏览器的-api-访问限制) )。

![1596161281493](~@assets/standard/aboutDoc/1596161281493.png)

为了在文档中明显区别代码块与其他文字部分，直接用插件：[vuepress-plugin-demo-container](https://docs.chenjianhui.site/vuepress-plugin-demo-container/zh/)，也可以使用CodeBlock组件（已开发但仅限/docs内使用的组件）包裹展示(自定义布局，支持更多展示效果)。

3) 在说明文档.md中引用写好的demo。这里使用vuepress-plugin-demo-container,使用其中支持的slot，写法如下：

```js
::: demo xxxxx备注信息（注意前面的demo不能丢不能改，是slot-key来着）
​``` vue
放入你写的demo组件（/.vuepress/components/xxx.vue）
​```
// 用<<< 的方式直接引入vue的代码, 在这里我尝试使用"~@"或“@”等webpack配置alias的写法，都失效，如果你成功了告诉我，分享一下~
<<< docs/.vuepress/components/xxx.vue 

:::
```



![1596175297128](~@assets/standard/aboutDoc/1596175297128.png)

最后效果：

![1596175275049](~@assets/standard/aboutDoc/1596175275049.png)


### 使用项目中的webpack配置

1）由于项目使用vue-cli3.0脚手架生成，webpack配置部分vue已经帮我们配置好，在vue.config.js上可以获取到我们额外配置的webpack信息，我们可以直接通过`` ../../node_modules/@vue/cli-service/webpack.config.js``获取到解析后的完整webpack配置信息。这里需要考虑到我们引入的项目中组件，用到一些webpack配置直接引用到文档系统中，如alias
2）在.vuepress/config.js里的[配置configureWebpack或chainWebpack](https://vuepress.vuejs.org/zh/config/#configurewebpack)

### 如何自动生成并同步 `.vue`api

​	[vuese](https://github.com/vuese/vuese)

​	[markdown-it-vuese]( https://github.com/BuptStEve/markdown-it-vuese )

### 部署

1）使用指令```yarn docs:build```打包整个文档系统， 之后在/.vuepress/目录下生成/dist文件夹

2）可以直接在本地开启文档服务供其他人使用，如果不需要则跳过这个步骤：

```
使用http-server发布
1.npm i http-server -g 
2.http-server ./docs/.vuepress/dist -p ${随便不被占用的端口号}
```

之后会提示成功
![1596186219794](~@assets/standard/aboutDoc/1596186219794.png)

3）部署到公司gitlab，[官方说明](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)



### 支持pug

项目中的应用是使用pug模板，那么vue-cli3配置时已经装有pug和pug-plugin-loader，所以需要直接调用/node-modules/里的包即可，无需再npm安装

### 

## 关于优化

### 防止文档系统对原应用级的打包影响

### 当文档系统越来越重，如何不会越俎代庖，影响应用级操作

### 图片等静态文件优化




