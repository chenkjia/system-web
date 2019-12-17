import Vue from 'vue'
import Router from 'vue-router'
import { getToken, removeToken } from '@/utils/auth'

import store from '@/store/'

import systemRouter from './system'
import demoRouter from './demo'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
    },
    {
      path: '/401',
      name: '401',
      component: () => import(/* webpackChunkName: "401" */ '@/views/ErrorPage/401')
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/ErrorPage/404')
    },
    {
      path: '/logout',
      redirect () {
        removeToken()
        store.dispatch('tagsView/delAllViews')
        store.dispatch('user/delAccount')
        return 'login'
      }
    },
    {
      path: '/',
      beforeEnter: async (to, from, next) => {
        if (store.getters.accountId === '') {
          await store.dispatch('user/getInfo')
        }
        const menusPath = store.getters.menus.map(({ url }) => url)
        if (!menusPath.length) {
          next('401')
          return
        }
        if (menusPath.includes(to.path)) {
          next()
          return
        }
        next(menusPath[0])
      },
      component: () => import(/* webpackChunkName: "appFrame" */ '@/views/App/AppFrame'),
      children: [
        systemRouter,
        demoRouter
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const routerList = ['login', '401', '404']
  // 每次跳转判断是否有token如果没有则跳转到登录页
  if (getToken() || routerList.includes(to.name)) {
    next()
  } else {
    router.push('login')
  }
})

export default router
