'use strict'

import request from '@/utils/request'

export function get (props) {
  return request({
    method: 'get',
    ...props
  })
}

export function post (props) {
  return request({
    method: 'post',
    ...props
  })
}

export function put (props) {
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
