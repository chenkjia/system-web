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
      path: '/sets',
      name: 'sets',
      component: () => import(/* webpackChunkName: "sets" */ './views/Sets.vue')
    },
    {
      path: '/setcategories',
      name: 'setcategories',
      component: () => import(/* webpackChunkName: "setcategories" */ './views/Setcategories.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
