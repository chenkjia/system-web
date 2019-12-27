export default {
  path: 'datatables',
  component: {
    template: '<router-view/>'
  },
  children: [{
    path: 'nestedField',
    name: 'nestedField',
    component: () => import(/* webpackChunkName: "demo-datatables-nestedField" */ '@/views/Demo/Datatables/NestedField')
  }, {
    path: 'normal',
    name: 'normal',
    component: () => import(/* webpackChunkName: "demo-datatables-normal" */ '@/views/Demo/Datatables/Normal')
  }, {
    path: 'resource',
    name: 'resource',
    component: () => import(/* webpackChunkName: "demo-datatables-resource" */ '@/views/Demo/Datatables/Resource')
  }, {
    path: 'serverSide',
    name: 'serverSide',
    component: () => import(/* webpackChunkName: "demo-datatables-serverSide" */ '@/views/Demo/Datatables/ServerSide')
  }, {
    path: 'treeNormal',
    name: 'treeNormal',
    component: () => import(/* webpackChunkName: "demo-datatables-treeNormal" */ '@/views/Demo/Datatables/TreeNormal')
  }, {
    path: 'treeResource',
    name: 'treeResource',
    component: () => import(/* webpackChunkName: "demo-datatables-treeResource" */ '@/views/Demo/Datatables/TreeResource')
  }, {
    path: 'treeServerSide',
    name: 'treeServerSide',
    component: () => import(/* webpackChunkName: "demo-datatables-treeServerSide" */ '@/views/Demo/Datatables/TreeServerSide')
  }]
}
