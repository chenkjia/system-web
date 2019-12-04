import Vue from 'vue'
import Router from 'vue-router'
import { removeToken } from '@/utils/auth'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
    },
    {
      path: '/logout',
      redirect () {
        removeToken()
        return 'login'
      }
    },
    {
      path: '/',
      redirect: '/menus',
      component: () => import(/* webpackChunkName: "appFrame" */ '@/views/App/AppFrame'),
      children: [
        {
          path: '/menus',
          name: 'menus',
          component: () => import(/* webpackChunkName: "menus" */ '@/views/Menus')
        },
        {
          path: '/dictionaries',
          name: 'dictionaries',
          component: () => import(/* webpackChunkName: "menus" */ '@/views/Dictionaries')
        },
        {
          path: '/organizations',
          name: 'organizations',
          component: () => import(/* webpackChunkName: "organizations" */ '@/views/Organizations')
        },
        {
          path: '/accounts',
          name: 'accounts',
          component: () => import(/* webpackChunkName: "accounts" */ '@/views/Accounts')
        },
        {
          path: '/roles',
          name: 'roles',
          component: () => import(/* webpackChunkName: "roles" */ '@/views/Roles')
        },
        {
          path: '/logs',
          name: 'logs',
          component: () => import(/* webpackChunkName: "logs" */ '@/views/Logs')
        }]
    }
  ]
})