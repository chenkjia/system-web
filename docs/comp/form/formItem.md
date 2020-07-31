---
title: 表单控件
---

## input 输入框

选型： el-input

建议：
无法直接配置使用文档中表示带slot的实现：带输入建议；复合型输入框；slot版带 icon 的输入框；
不允许使用：自定义模板，远程搜索（由其他方式实现）

同时从昆明客户营销系统中获取到的需求点有：
1.所有输入框过滤英文括号、两端空格  -- （只支持限制空格）
2.表单自动聚焦，使用enter自动切换到下个输入框（业务需求，不属于组件构建范围，忽略）
3.全局不提示输入的历史记录(业务需求，不属于组件构建范围，忽略)

组件属性：[常规属性及方法](https://element.eleme.cn/#/zh-CN/component/input)

| 参数    | 说明           | 类型   | 可选值 | 默认值 |
| ------- | -------------- | ------ | ------ | ------ |
| prepend | 输入框前置内容 | String | -      | -      |
| append  | 输入框后置内容 | String | -      | -      |



## inputNumber  计数器

选型：el-inputNumber 直接使用
组件属性：[常规属性及方法](https://element.eleme.cn/#/zh-CN/component/input-number)

## inputNumberRange 计数范围选择器

除[el-inputNumber常规属性及方法](https://element.eleme.cn/#/zh-CN/component/input-number)外，补充的属性

| 参数       | 说明                                                         | 类型    | 可选值     | 默认值 |
| ---------- | ------------------------------------------------------------ | ------- | ---------- | ------ |
| isRange    | 启用数值范围，true：出现开始-结束计数器；false：默认单个计数器 | Boolean | true/false | false  |
| splitTitle | 计数器间文本                                                 | String  | -          | —      |
| minNumber  | 计数器范围最小值                                             | Number  | -          | -      |
| maxNumber  | 计数器范围最大值                                             | Number  | -          | -      |

## select 选择器

选型：el-select , 需要包装，为支持选项辅助信息显示、分组功能

组件属性：[常规属性及方法](https://element.eleme.cn/#/zh-CN/component/select)

| 参数     | 说明                                                         | 类型     | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------ | -------- | ------ | ------ |
| ✔subtext | 选项说明，一般居右显示，支持文字（el-select自定义模板的阉割版本） | Function | -      | -      |
|          |                                                              |          |        |        |
|          |                                                              |          |        |        |

option接受的数据json格式：

```
[{
 label: '',
 value: '',
 subtext: 'xxxx', // 返回配置选项说明，限字符串类型
 group: '' // 如需分组显示，返回group属性，值为分组名称（String）
}]
```

配置说明

```
// 选项说明配置: 
   方法1:使用form.subtext参数；
		form: {
			subtext: (option) => {return option.xxx}
		}
	 方法2: relation返回的option数据中设置subtext/icon 见上[option接受的数据json格式]
```



## switch 开关

选型：el-switch，直接使用
组件属性：[常规属性及方法](https://element.eleme.cn/#/zh-CN/component/switch)

## checkbox 复选框组

选型: el-checkbox-group , 直接使用
组件属性：[常规属性及方法](https://element.eleme.cn/#/zh-CN/component/checkbox)

## radio 单选组

选型：el-radio-rgoup ，直接使用
组件属性：[常规属性及方法](https://element.eleme.cn/#/zh-CN/component/radio)

## cascader 级联

选型：el-cascader，需要包装
与后端对接json格式固定为以下，如需要修改参数格式

```js
[{
  value: xxx,
  label: 'xxx',
  children: [{}...]
}]
```

属性说明：

| 参数        | 说明               | 类型   | 可选值 | 默认值 |
| ----------- | ------------------ | ------ | ------ | ------ |
| lazyloadUrl | 动态加载的请求接口 | String | -      | -      |
|             |                    |        |        |        |
|             |                    |        |        |        |
|             |                    |        |        |        |


## time 时间选择器

选型：el-time-picker ，直接使用

## date 日期选择器

选型：el-date-picker， 需要包装
日期格式统一为时间戳格式且不允许修改

| 参数          | 说明                                                         | 类型      | 可选值             | 默认值 |
| ------------- | ------------------------------------------------------------ | --------- | ------------------ | ------ |
| pickerOptions | 时间限制设置器，详细可看el-dateTimePicker的Picker Options方法 | Object    | -                  | -      |
| endOfValue    | 由于element的default-time只限范围选择使用，需要兼容需要限制传该月（年）最后一秒/该月（年）最后一秒的情况 | String    | month/year/date    | -      |
| startOfValue  | 上同，与endOfValue二选一                                     | String    | month/year/date    | -      |
| max           | 最大日期                                                     | Timestamp | now/不传/timestamp | -      |
| min           | 最小日期                                                     | TimeStamp | now/不传/timestamp | -      |

## dateTimeRange 日期时间范围选择器

选型：el-dateTime-picker， 需要包装

日期格式统一为时间戳格式且不允许修改

| 参数          | 说明                                                         | 类型      | 可选值             | 默认值 |
| ------------- | ------------------------------------------------------------ | --------- | ------------------ | ------ |
| pickerOptions | 时间限制设置器，详细可看el-dateTimePicker的Picker Options方法 | Object    | -                  | -      |
| max           | 最大日期时间                                                 | Timestamp | now/不传/timestamp | -      |
| min           | 最小日期时间                                                 | Timestamp | now/不传/timestamp | -      |
|               |                                                              |           |                    |        |

## upload 上传

选型：el-upload，需要包装，[el-upload常规属性](https://element.eleme.cn/#/zh-CN/component/upload)
| 参数        | 说明                           | 类型   | 可选值     | 默认值   |
| ----------- | ------------------------------ | ------ | ---------- | -------- |
| uploadTip   | 显示在上传按钮底部上传信息提示 | String | -          | -        |
| uploadText  | 上传按钮文字                   | String | -          | 点击上传 |
| uploadStyle | 上传按钮风格                   | String | button/img | button   |
|             |                                |        |            |          |
|             |                                |        |            |          |

## tree 树形控件

选型：el-tree
## addon 辅助

选型：无

需求：基于单个表单子元素做的辅助信息，如：前/后置按钮、底部辅助信息提示等；不与已存在前后置方法的组件冲突（如：input）

| 参数   | 说明     | 类型                              | 可选值 | 默认值 |
| ------ | -------- | --------------------------------- | ------ | ------ |
| left   | 左侧辅助 | Array ([addonItem,addonItem....]) | -      |        |
| right  | 右侧辅助 | Array ([addonItem,addonItem....]) |        |        |
| top    | 上       | Array ([addonItem,addonItem....]) |        |        |
| bottom | 下       | Array ([addonItem,addonItem....]) |        |        |

addonItem属性
| 参数  | 说明                                                         | 类型   | 可选值           | 默认值 |
| ----- | ------------------------------------------------------------ | ------ | ---------------- | ------ |
| type  | 辅助类型，如果type=button时，除以下属性外，可使用[ButtonGroup组件属性](##按钮组 ButtonGroup) | String | button/text/标签 | text   |
| value | 辅助信息，限制type=text时候使用                              | Any    | -                | -      |
| style | 辅助样式                                                     | Object | -                | -      |
|       |                                                              |        |                  |        |

## text 纯文本/多媒体展示

文本/多媒体只读功能；待infoRender处理完



## highscan 对接高拍仪获取信息

选型：硬件基于深圳松田高拍仪设备，如果硬件重新选型，该组件需要重新设计
需求：1.获取身份证扫描信息、身份证图片、人像；
			2.身份证扫描后信息自动填入表单对应信息项；
			3.条形码扫描（待定）

| 参数            | 说明                                                         | 类型    | 可选值                   | 默认值 |
| --------------- | ------------------------------------------------------------ | ------- | ------------------------ | ------ |
| multUpload      | 支持多种上传方式，true时该组件为附属组件，上传后的内容返回到父组件 | Boolean | -                        | false  |
| multAction      | 是否进行高拍仪多项操作，true - 多项操作，弹窗效果展示，false-只默认进行1项操作 | Boolean |                          | true   |
| scanType        | 扫描类型，<br/>二代身份证信息：IDCARDMESG；二代身份证图像：IDCARDIMG; 图像：IMG；全部（图像+扫描身份证图像）- 传' '<br />当scanType传空串时，即表示高拍仪允许操作所有类型，此时multAction属性失效 | String  |                          | 全部   |
| imgSize         | 图像限制内存大小                                             | String  |                          |        |
| isSaveLocalPics | 是否上传后保存本地图片                                       | Boolean | true:保存，false：不保存 | false  |
| IDImageStyle    | 表示二代证图像类型，1-头像，2-正面，3-反面，4-垂直合成双面身份证（正反），5-垂直合成双面身份证（反正），6-水平合成双面身份证（正反），7-水平合成双面身份证（反正） | String  |                          | ‘5’    |
|                 |                                                              |         |                          |        |

## 地图定位

选型：高德地图

## 按钮组 ButtonGroup

ButtonGroup为数组，由n个el-button组成，属性如下：
| 参数       | 说明                                          | 类型   | 可选值 | 默认值 |
| ---------- | --------------------------------------------- | ------ | ------ | ------ |
| data       | 赋值给按钮操作的参数（button/table/form对象） | Object |        |        |
| buttonList | 按钮组，由buttonItem(el-button)组成数组       | Array  |        |        |
| formName   | 指定表单ref名称，用于表单验证                 | String |        |        |

buttonItem属性：[el-button属性说明](https://element.eleme.cn/#/zh-CN/component/button)，

| 参数   | 说明                                                         | 类型     | 可选值     | 默认值 |
| ------ | ------------------------------------------------------------ | -------- | ---------- | ------ |
| label  | 按钮名称                                                     | String   | -          | -      |
| func   | 按钮执行回调操作，回调参数参考下文解释                       | Function | -          | -      |
| name   | 按钮主键属性，不传则会导致部分按钮功能失效,且无法动态更改按钮属性【必填】 | String   | -          | -      |
| action | 是否带异步请求操作，为了防止频触导致重复请求，请设置为true，按钮自动补充loading，在func执行结束后需要设置button.loading = false | Boolean  | true/false | false  |

func函数参数解释如下：

| 参数   | 说明                     | 类型   | 可选值 | 默认值 |
| ------ | ------------------------ | ------ | ------ | ------ |
| data   | 表单数据                 | Object | -      | -      |
| refs   | 按钮组存在的父类表单对象 | Object | -      | -      |
| button | 当前按钮对象             | Object | -      | -      |

配置说明：
```js
buttonList: [{
 	label: '按钮名称',
 	name: 'submit', // 按钮主键，必传
 	size: '按钮尺寸',
  action: true, // 采用异步请求，点击防重复触发
 	...el-button的属性,
 	func: (funcProps) => {
 		funcProps属性为按钮回调参数，包括data,refs,button
    ....do something....
    funcProps.button.loading = false // 关闭loading (action为true时，按钮自动加上loading，但无法确定func是否结束，所以loading需要在外部关闭)
 	}
}]
```