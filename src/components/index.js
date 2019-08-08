
import ButtonGroupComponent from './ButtonGroup'
import DataformComponent from './Dataform'
import DatatablesComponent from './Datatables'
import DatatablesPageComponent from './DatatablesPage'

export const ButtonGroup = {
  install: (Vue) => Vue.component('ButtonGroup', ButtonGroupComponent)
}

export const Dataform = {
  install: (Vue) => Vue.component('Dataform', DataformComponent)
}

export const Datatables = {
  install: (Vue) => Vue.component('Datatables', DatatablesComponent)
}

export const DatatablesPage = {
  install: (Vue) => Vue.component('DatatablesPage', DatatablesPageComponent)
}
