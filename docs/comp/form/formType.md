---
title: 表单类型
---

```
具体示例demo可查看项目中: @/views/Demo/Forms/index.vue
页面访问路径：/demo/forms
```
## 表单全局事件
- [ ] 1增加基础配置项 @/components/Dataform/plugins/base.js, 各表单组件全局默认属性隐射表：

- [ ] 2表单内组件联动、表单间联动：
3表单验证：
  
   - [x] 每个表单使用官方验证，官方文档：https://github.com/yiminghe/async-validator#length
   - [ ] 增加规则配置表，方便操作
  
- [x] 4防止表单重复提交：
	设置表单的buttonList参数：buttonList[n].action = true
	
- [ ] 5权限控制/单项权限控制

- [ ] 6.表单单项一对多的关系

------


## 传统表单 DataForm

### props 属性
基础属性参考[el-form](https://element.eleme.cn/#/zh-CN/component/form)，不采用el-form以下属性：

多行多列式的表单请使用[表格嵌套表单](#表格嵌套表单 TableForm)，在交互效果的角度上看更加整洁易操作。

| 参数          | 说明                                                         | 类型    | 可选值                 | 默认值 |
| ------------- | ------------------------------------------------------------ | ------- | ---------------------- | ------ |
| ✔labelVisable | 显示字段文本，使用该属性时，el-form的label-width属性失效，form-item会自动使用label做placeholder | Boolean | -                      | true   |
| ❌readOnly     | 表单是否只读，el-form支持的disabled属性，只允许整个表单(所有表单子组件、包括整个按钮组)禁止使用；经考虑如需使用该属性，请使用infoRender组件 | Boolean | true 只读 / false 可写 | false  |
| ✔dataInit     | 表单所有数值                                                 | Object  | -                      | {}     |
| ✔formFields   | 表单中所有字段的配置对象                                     | Array   | -                      | []     |
| ✔buttonList   | 表单按钮组                                                   | Array   | -                      | []     |
| ✔buttonAlign  | 按钮对齐方式                                                 | String  | left / right / center  | right  |

### slot

| 插槽类型/插槽名                    | 说明                                                       |      |
| ---------------------------------- | ---------------------------------------------------------- | ---- |
| ✔具名/字段名称(column[field].name) | 为了支持以下场景：不同的表单子组件，允许扩展为自定义的控件 |      |

### 方法

| 方法      | 说明                               | 返回值           |
| --------- | ---------------------------------- | ---------------- |
| getChange | 返回表单正在修改的字段值、字段名称 | value, fieldName |
| reset     | 重置所有修改                       | -                |

### 示例

::: demo 传统表单示例(Form/DemoDefault)
```vue
<Form-DemoDefault></Form-DemoDefault>
```

<<< docs/.vuepress/components/Form/DemoDefault.vue
:::


## 对比表单 CompareForm

### 需求

- [x] 体现原值与新值对比，二维表格展示，表单展示

- [x] 存在新值或已做新值修改，则高亮提醒，且不允许两个值内容一样，

- [x] 一键取消修改（单项取消、全部取消）

- [x] 单项字段表单验证规则

- [ ] 单项字段根据权限设置只读、可编辑

- [x] 整个表单权限控制

- [ ] onChange方法,返回所有修改项

### 效果

![1595215230773](~@assets/form/1595215230773.png)

### 属性

| 参数              | 说明                                                         | 类型    | 可选值     | 默认值                                                     |
| ----------------- | ------------------------------------------------------------ | ------- | ---------- | ---------------------------------------------------------- |
| readOnly          | 是否只读                                                     | Boolean | true/false | false                                                      |
| × highlightChange | 是否高亮显示修改差异                                         | Boolean | true/false | true                                                       |
| formFields        | 表单中所有字段的配置对象（从上到下排列）                     | Array   | -          | -                                                          |
| dataInit          | 表单所有数值                                                 | Object  | -          | -                                                          |
| buttonList        | 表单按钮组                                                   | Array   | -          | -                                                          |
| buttonAlign       | 按钮对齐方式,同传统表单                                      | String  |            |                                                            |
| *keyGroup*        | 原值、拟变更值关键字对象,用于方便适应后端传值字段格式差异；格式：{origin: {pre: '', append: ''}, change: {pre: '', append: ''}}<br />keyGroup.origin - 原值前缀、后缀关键字<br />keyGroup.change - 拟变更值前缀、后缀关键字 | Object  |            | origin: {pre: 'origin'}<br />change: {<br />pre: 'change'} |

### 方法

| 方法      | 说明                                                         | 返回值               |
| --------- | ------------------------------------------------------------ | -------------------- |
| onChange  | 返回已修改的数据项, 所有数据项                               | changeData，fullData |
| resetData | 重置所有修改, 使用form.resetData()<br />form: buttonGroup按钮组返回的funcProps参数 | -                    |


## 表格嵌套表单 TableForm

### 需求
   实现一维/二维表格多层嵌套表单效果，多行合并，多列合并
- ​	一维表格：传统上一维表格如el-table式，在这个表单中感觉没有太大意义。这里的一维表格如下图，图二/图一第一组所示
- ​	二维表格：传统意义上的二维表格，如下图图一第2、3组所示

### 效果图

<img src="~@assets/form/1594879264598.png" alt="1594879264598" style="zoom: 67%;">

<img src="~@assets/form/1594885100976.png" alt="1594885100976" style="zoom:67%;">

### 属性

| 参数       | 说明                                                         | 类型    | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------- | ------ | ------ |
| dataInit   | 默认表单传值                                                 | Object  | -      | -      |
| isColtotal | 是否开启当列合计                                             | Boolean | -      | false  |
| isRowtotal | 是否开启当行合计                                             | Boolean | -      | false  |
| columns    | 表单中所有字段的配置对象(必填)                               | Object  | -      | -      |
| buttonList | 按钮组（同传统表单）                                         | Array   | -      | -      |
| group      | 表格中呈现的分组形式，一般为多行为一组,详细属性查看tableform-group属性 | Array   | -      | -      |

group属性

| 参数          | 说明                                                         | 类型   | 可选值   | 默认值     |
| ------------- | ------------------------------------------------------------ | ------ | -------- | ---------- |
| label         | 分组标题（必填）                                             | String | -        | 分组1....n |
| labelPosition | 分组标题显示位置                                             | String | top,left | left       |
| tableList     | 分组内表格配置说明，不同维度表格设置不同，详细查看tableList属性 | Array  |          |            |

tableList 属性

| 参数      | 说明                                                         | 类型    | 可选值        | 默认值   |
| --------- | ------------------------------------------------------------ | ------- | ------------- | -------- |
| rowList   | 行标题（二维表格需要配置），如配置则不显示                   | String  | -             | 行1....n |
| fieldList | 表格字段列，接收一个二维数组，如：[[a, b], [c, d]]，字段字典解释必须存在columns属性中 | Array   | -             | -        |
| inline    | 是否呈行内显示                                               | Boolean | true   /false | true     |
| rowSpan   | 对应字段行合并的行数（待定是否在columns中配置）仅在inline为true时有效，<br />如A字段跨2行：rowSpan: {A : 2} | Object  | -             | -        |
| colSpan   | 对应字段列合并的列数（待定是否在columns中配置）仅在inline为true时有效，配置方法同上 | Object  | -             | -        |

### 方法

| 方法     | 说明                   | 返回值            |
| -------- | ---------------------- | ----------------- |
| reset    | 重置所有修改           | -                 |


## 键盘高度融合示例

### 需求
（优先级低，待确定）1.根据键盘enter键自动切换到下一项同表单内输入内容（多行切换）；2.多表单间键盘切换

### 效果图

![1594879048288](~@assets/form/1594879048288.png)