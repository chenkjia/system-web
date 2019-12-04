
import Vue from 'vue'
import request from '@/utils/request'
import encryption from '@/utils/encryption'
import {
  get,
  post,
  put,
  remove
} from '@/utils/axios'

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
    $post: {
      get () {
        return post
      }
    },
    $put: {
      get () {
        return put
      }
    },
    $create: {
      get () {
        return post
      }
    },
    $update: {
      get () {
        return put
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
