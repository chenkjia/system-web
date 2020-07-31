import lodash from 'lodash'
import Element from 'element-ui'
// import pug from '../../node_modules/pug/lib/index'

import 'element-ui/lib/theme-chalk/index.css'
// import components from '@/plugins/components.js'
import CodeBlock from './components/CodeBlock.vue'
import {
  ButtonGroup,
  InfoRender,
  Dataform,
  Datatables,
  DatatablesPage,
  DoubleColumnLayout,
  ComparedForm
} from '@/components'
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(CodeBlock)
  Vue.use(Element)
  Vue.use(lodash)

  Vue.use(ButtonGroup)
  Vue.use(InfoRender)
  Vue.use(Dataform)
  Vue.use(Datatables)
  Vue.use(DatatablesPage)
  Vue.use(DoubleColumnLayout)
  Vue.use(ComparedForm)

  Object.defineProperty(Vue.prototype, '$fieldsFormat', { value: fieldsFormat })
  Object.defineProperty(Vue.prototype, '$fieldsGetRelation', { value: fieldsGetRelation })
}