
import ButtonGroupComponent from './ButtonGroup'
import DataformComponent from './Dataform'
import DatatablesComponent from './Datatables'
import DatatablesPageComponent from './DatatablesPage'
import InfoRenderComponent from './InfoRender'
import DoubleColumnLayoutComponent from './DoubleColumnLayout'
import ComparedFormComponent from './ComparedForm'

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

export const InfoRender = {
  install: (Vue) => Vue.component('InfoRender', InfoRenderComponent)
}

export const DoubleColumnLayout = {
  install: (Vue) => Vue.component('DoubleColumnLayout', DoubleColumnLayoutComponent)
}
export const ComparedForm = {
  install: (Vue) => Vue.component('ComparedForm', ComparedFormComponent)
}
