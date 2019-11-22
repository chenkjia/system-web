
import Vue from 'vue'
import request from '@/utils/request'
import encryption from './encryption'
import {
  get,
  create,
  update,
  remove
} from './axios'

Plugin.install = function (Vue, options) {
  Vue.axios = request
  window.axios = request
  Object.defineProperties(Vue.prototype, {
    $md5: {
      get () {
        return encryption
      }
    },
    $axios: {
      get () {
        return request
      }
    },
    $get: {
      get () {
        return get
      }
    },
    $create: {
      get () {
        return create
      }
    },
    $update: {
      get () {
        return update
      }
    },
    $remove: {
      get () {
        return remove
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
