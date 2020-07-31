---
title: 文档管理调研报告
sidebarDepth: 4
---

## 研究方向

jsdoc[https://github.com/jsdoc/jsdoc]

docute[https://docute.org/zh/]

docusaurus[https://docusaurus.io/docs/en/installation]

vuepress[https://github.com/vuejs/vuepress]

docsify[https://docsify.js.org/]

vuedoc markdown[https://gitlab.com/vuedoc/md]

codepen[https://codepen.io/] 

vuep[ https://cinwell.com/vuep/#/ ] （如何与本项目中封装的组件结合使用）

storybook[ https://storybook.js.org/ ]


 ## 研究目标
1.部署到gitlab：可编译成html然后放到我们的GitlabPages直接阅读

2.能看效果：编写时可植入组件demo，使开发都能在写文档的过程中补充必要的demo，供阅读者参考

3.可创建方便阅读的分类

4.可进行全文搜索 

5.允许在线测试（codepen，jsFiddle，JSRUN.NET之类），直接体验代码效果

6.图文并茂的组件文档说明

7.完美兼容md文件（方便已存在的旧文档无需重新编写）

8.在线文档系统是否更可取（省略代码编写、文档配置、构建、发布的过程，利用在线文档可视化，方便多方协同编写、多设备查看，如：石墨/confluence）


## 选型对比

标志性几大文档库对比，Gitbook 越发趋向商业化，忽略，最后选择vuepress，下面是对比以及使用感受

| 对比类型\插件名                                              | jsdoc                                      | vuepress👑                                                    | docsify                                                      | @storybook/vue                                               |
| ------------------------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| github start                                                 | 10.9k                                      | 17.1k                                                        | 14.5k                                                        | 51.2k                                                        |
| 部署到gitlab                                                 | ✔                                          | ✔                                                            | ✔                                                            | ✔                                                            |
| 直接植入已开发的vue组件                                      | -                                          | 默认支持在.vuepress中加入demo组件，可以直接引用src/components中开发的应用组件 | 默认也可以直接在md里写vue。也可使用vuep(在线编辑和预览效果的 Vue 组件)集成；<br />但是调用自主开发的组件难度大 | 直接引用src/components项目中开发的vue组件，直接在页面显示代码，和演示效果；允许webpack配置 |
| 可创建方便阅读的分类，自动生成侧边栏                         | -                                          | 自动、手动生成侧边栏\顶部导航栏；                            | 自动、手动生成侧边栏、顶部导航栏                             | 自动生成                                                     |
| 可进行全文搜索                                               | -                                          | 1.使用插件：vuepress-plugin-fulltext-searchvuepress-plugin-flexsearch；@vuepress/plugin-search2集成第三方免费搜索服务 algolia | ✔                                                            | ✔                                                            |
| 允许在线测试（codepen，jsFiddle，JSRUN.NET之类），直接体验代码效果 | -                                          | ✔                                                            | ✔                                                            | 可以使用插件@storybook/addon-knobs，可视化组件的配置信息，@storybook/addon-storysource查看源码，无需进到项目去查 |
| 完美兼容md文件                                               | -                                          | ✔                                                            | ✔                                                            | @storybook/addon-docs，@storybook/addon-notes默认列出所有的props和events，不需要额外配置，允许支持markdown语法 |
| seo支持                                                      | -                                          | ✔                                                            | seo不友好，但内部使用无需顾虑                                | -                                                            |
| 第三方支持                                                   | -                                          | 多                                                           | 较少                                                         | 丰富的插件支持                                               |
| 允许测试                                                     | -                                          | -                                                            | -                                                            | 允许视觉回溯测试                                             |
| 使用感受                                                     | 在代码里写注释而生成文档，无法满足更多需求 | 需要启动本地服务器预览效果；允许评论；不支持h1标签; 配置较多，装的插件相对于storybook少的多多； | 需要启动本地服务器预览效果；配置少，轻量，运行时才将md文件转为html文件，只能简单的写文档，较难调用到项目中自开发的vue组件做demo演示 | 多语言支持（包括ts），组件驱动开发，由下至上，从底层组件开始一步步构建界面,隔离开发环境展示组件，无需运行项目,无需关心组件的依赖和要求。。。。但是项目中使用pug和vue-cli3，需要装很多冗余的插件，如pug-loader、@babel/core、babel-preset-vue。。。每一个支持pug、element等项目所需都要先装插件......在其他空余时候可以再研究，这个会功能更强大 |

## 使用方法

### docsify 测试
![1595835812220](~@assets/standard/compareDoc/1595835812220.png)

### storybook测试

启动命令：yarn storybook ，如果端口冲突，直接修改-p 6006 。启动成功示意图：

![1595835891626](~@assets/standard/compareDoc/1595835891626.png)



1.第三方库引用问题，src/component中组件的引用问题

### vuepress 测试

相关问题查看使用文档-《踩坑之路-vuepress》

## 参考文献

\- https://segmentfault.com/a/1190000018971294
\- https://github.com/vuepressjs/awesome-vuepress
\- https://github.com/dream2023/vue-run-sfc
\- https://github.com/docstrap/docstrap
\- https://github.com/ccqgithub/jsdoc-vuedoc 

vuepress

​	https://www.sofineday.com/categories/?category=vuepress 
​	第三方插件支持：https://vuepress.vuejs.org/zh/plugin/

docsify

​	https://github.com/docsifyjs/awesome-docsify#showcase 
​	https://hooray.github.io/posts/ed9dc49e/ 

storybook

​	https://github.com/tuchk4/storybook-readme 
​	https://www.jianshu.com/p/578c77f2312d 

​	 https://zhuanlan.zhihu.com/p/148296971 
​	https://segmentfault.com/a/1190000022532514 
​	 https://www.jianshu.com/p/9cb75ae50515 
​	插件支持：
​			https://storybook.js.org/addons/

​			https://github.com/storybookjs/storybook/blob/master/ADDONS_SUPPORT.md）

## 工具推荐

中文的markdown工具有Typora，cmdMarkdown，有道云笔记等等