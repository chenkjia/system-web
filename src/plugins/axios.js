'use strict'

import Vue from 'vue'
import md5 from 'md5'
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

export function $md5 (data) {
  return md5(data + 'dXiN666')
}

Plugin.install = function (Vue, options) {
  Vue.axios = request
  window.axios = request
  Object.defineProperties(Vue.prototype, {
    $md5: {
      get () {
        return $md5
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
