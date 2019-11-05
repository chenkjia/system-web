'use strict'

import Vue from 'vue'
import request from '@/utils/request'

export function get (props) {
  return request({
    method: 'get',
    ...props
  })
}

export function create (props) {
  return request({
    method: 'post',
    ...props
  })
}

export function update (props) {
  return request({
    method: 'put',
    ...props
  })
}

export function remove (props) {
  return request({
    method: 'delete',
    ...props
  })
}

Plugin.install = function (Vue, options) {
  Vue.axios = request
  window.axios = request
  Object.defineProperties(Vue.prototype, {
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
