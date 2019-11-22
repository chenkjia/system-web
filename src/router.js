import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'menus'
    },
    {
      path: '/login',
      redirect: 'menus'
    },
    {
      path: '/menus',
      name: 'menus',
      component: () => import(/* webpackChunkName: "menus" */ './views/Menus')
    },
    {
      path: '/organizations',
      name: 'organizations',
      component: () => import(/* webpackChunkName: "organizations" */ './views/Organizations')
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import(/* webpackChunkName: "accounts" */ './views/Accounts')
    },
    {
      path: '/roles',
      name: 'roles',
      component: () => import(/* webpackChunkName: "roles" */ './views/Roles')
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import(/* webpackChunkName: "logs" */ './views/Logs')
    }
  ]
})
