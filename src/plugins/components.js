import Vue from 'vue'
import {
  Icon,
  Button,
  Dialog,
  MessageBox,
  Container,
  Header,
  Aside,
  Main,
  Upload,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input
} from 'element-ui'

import {
  ButtonGroup,
  Dataform,
  Datatables,
  DatatablesPage
} from '@/components'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

Vue.use(Icon)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(MessageBox)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.use(ButtonGroup)
Vue.use(Dataform)
Vue.use(Datatables)
Vue.use(DatatablesPage)
