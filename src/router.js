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
      path: '/menus',
      name: 'menus',
      component: () => import(/* webpackChunkName: "menus" */ './views/Menus.vue')
    },
    {
      path: '/organizations',
      name: 'organizations',
      component: () => import(/* webpackChunkName: "organizations" */ './views/Organizations.vue')
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import(/* webpackChunkName: "accounts" */ './views/Accounts.vue')
    },
    {
      path: '/roles',
      name: 'roles',
      component: () => import(/* webpackChunkName: "roles" */ './views/Roles.vue')
    },
    {
      path: '/logs',
      name: 'logs',
      component: () => import(/* webpackChunkName: "logs" */ './views/Logs.vue')
    }
  ]
})
