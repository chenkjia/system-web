import Vue from 'vue'
import Router from 'vue-router'
import { getToken, removeToken, getUserInfo } from '@/utils/auth'
Vue.use(Router)
const router = new Router({
  mode: 'history',
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
      beforeEnter: (to, from, next) => {
        // 第一次load页面的时候使用token获取登录账户信息
        getUserInfo()
        next()
      },
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

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  // 每次跳转判断是否有token如果没有则跳转到登录页
  if (getToken() || to.name === 'login') {
    next()
  } else {
    router.push('login')
  }
})

export default router
