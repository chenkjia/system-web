import datatablesRouter from './datatables.js'

export default {
  path: 'demo',
  component: {
    template: '<router-view/>'
  },
  children: [datatablesRouter]
}
