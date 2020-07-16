import datatablesRouter from './datatables.js'
import formsRouter from './forms.js'

export default {
  path: 'demo',
  component: {
    template: '<router-view/>'
  },
  children: [
    datatablesRouter,
    formsRouter
  ]
}
