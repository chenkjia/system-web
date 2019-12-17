export default {
  path: 'system',
  component: {
    template: '<router-view/>'
  },
  children: [{
    path: 'menus',
    name: 'menus',
    component: () => import(/* webpackChunkName: "system-menus" */ '@/views/System/Menus')
  }, {
    path: 'dictionaries',
    name: 'dictionaries',
    component: () => import(/* webpackChunkName: "system-dictionaries" */ '@/views/System/Dictionaries')
  }, {
    path: 'organizations',
    name: 'organizations',
    component: () => import(/* webpackChunkName: "system-organizations" */ '@/views/System/Organizations')
  }, {
    path: 'accounts',
    name: 'accounts',
    component: () => import(/* webpackChunkName: "system-accounts" */ '@/views/System/Accounts')
  }, {
    path: 'roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "system-roles" */ '@/views/System/Roles')
  }, {
    path: 'logs',
    name: 'logs',
    component: () => import(/* webpackChunkName: "system-logs" */ '@/views/System/Logs')
  }]
}
