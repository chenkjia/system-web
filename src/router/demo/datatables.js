export default {
  path: 'datatables',
  component: {
    template: '<router-view/>'
  },
  children: [{
    path: 'nestedField',
    name: 'nestedField',
    component: () => import(/* webpackChunkName: "demo-datatables-nestedField" */ '@/views/Demo/Datatables/NestedField')
  }]
}
