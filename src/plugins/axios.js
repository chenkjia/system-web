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

export function createSingle ({ url, data }) {
  return request({
    url,
    method: 'post',
    data
  })
}

export function updateSingle ({ url, params, data }) {
  return request({
    url,
    method: 'put',
    params,
    data
  })
}

export function deleteSingle ({ url, params }) {
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
    $createSingle: {
      get () {
        return createSingle
      }
    },
    $updateSingle: {
      get () {
        return updateSingle
      }
    },
    $deleteSingle: {
      get () {
        return deleteSingle
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
