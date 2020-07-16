import Vue from 'vue'
import { fieldsFormat, fieldsGetRelation } from '@/utils/fieldsFormat'

import {
  ButtonGroup,
  InfoRender,
  Dataform,
  Datatables,
  DatatablesPage,
  DoubleColumnLayout
} from '@/components'

Vue.use(ButtonGroup)
Vue.use(InfoRender)
Vue.use(Dataform)
Vue.use(Datatables)
Vue.use(DatatablesPage)
Vue.use(DoubleColumnLayout)

Object.defineProperty(Vue.prototype, '$fieldsFormat', { value: fieldsFormat })
Object.defineProperty(Vue.prototype, '$fieldsGetRelation', { value: fieldsGetRelation })
