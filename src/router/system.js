export default {
  path: 'system',
  component: {
    template: '<router-view/>'
  },
  children: [{
    path: 'menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "system-menu" */ '@/views/System/Menu')
  }, {
    path: 'dictionary',
    name: 'dictionary',
    component: () => import(/* webpackChunkName: "system-dictionary" */ '@/views/System/Dictionary')
  }, {
    path: 'organization',
    name: 'organization',
    component: () => import(/* webpackChunkName: "system-organization" */ '@/views/System/Organization')
  }, {
    path: 'account',
    name: 'account',
    component: () => import(/* webpackChunkName: "system-account" */ '@/views/System/Account')
  }, {
    path: 'role',
    name: 'role',
    component: () => import(/* webpackChunkName: "system-role" */ '@/views/System/Role')
  }, {
    path: 'log',
    name: 'log',
    component: () => import(/* webpackChunkName: "system-log" */ '@/views/System/Log')
  }]
}
