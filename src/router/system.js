export default {
  path: 'system',
  component: {
    template: '<router-view/>'
  },
  // component: () => import(/* webpackChunkName: "appFrame" */ '@/views/App/AppFrame'),
  children: [{
    path: 'menus',
    name: 'menus',
    component: () => import(/* webpackChunkName: "menus" */ '@/views/System/Menus')
  }, {
    path: 'dictionaries',
    name: 'dictionaries',
    component: () => import(/* webpackChunkName: "dictionaries" */ '@/views/System/Dictionaries')
  }, {
    path: 'organizations',
    name: 'organizations',
    component: () => import(/* webpackChunkName: "organizations" */ '@/views/System/Organizations')
  }, {
    path: 'accounts',
    name: 'accounts',
    component: () => import(/* webpackChunkName: "accounts" */ '@/views/System/Accounts')
  }, {
    path: 'roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ '@/views/System/Roles')
  }, {
    path: 'logs',
    name: 'logs',
    component: () => import(/* webpackChunkName: "logs" */ '@/views/System/Logs')
  }]
}
