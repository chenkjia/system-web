import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'setcategories'
    },
    {
      path: '/setcategories',
      name: 'setcategories',
      component: () => import(/* webpackChunkName: "setcategories" */ './views/Setcategories.vue')
    }
  ]
})
