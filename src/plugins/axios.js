'use strict'

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
