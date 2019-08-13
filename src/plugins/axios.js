'use strict'

import Vue from 'vue'
import request from '@/utils/request'

export function getList ({ url, params }) {
  return request({
    url,
    method: 'get',
    params
  })
}

export function createOne ({ url, data }) {
  return request({
    url,
    method: 'post',
    data
  })
}

export function updateOne ({ url, params, data }) {
  return request({
    url,
    method: 'put',
    params,
    data
  })
}

export function deleteOne ({ url, params }) {
  return request({
    url,
    method: 'delete',
    params
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
    $getList: {
      get () {
        return getList
      }
    },
    $createOne: {
      get () {
        return createOne
      }
    },
    $updateOne: {
      get () {
        return updateOne
      }
    },
    $deleteOne: {
      get () {
        return deleteOne
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
