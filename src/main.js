import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/components.js'
import './assets/sass/main.sass'
import store from './store'

Vue.config.productionTip = true
// Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
