export default {
  path: 'forms',
  component: {
    template: '<router-view/>'
  },
  children: [{
    path: '/',
    name: 'DefaultForm',
    component: () => import(/* webpackChunkName: "demo-Forms-DefaultForm" */ '@/views/Demo/Forms')
  }]
}
