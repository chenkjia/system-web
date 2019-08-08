import request from '@/utils/request'

export function getList (url, params) {
  return request({
    url,
    method: 'get',
    params
  })
}

export function createSingle (url, params) {
  return request({
    url,
    method: 'post',
    params
  })
}

export function updateSingle (url, params) {
  return request({
    url,
    method: 'put',
    params
  })
}

export function deleteSingle (url, params) {
  return request({
    url,
    method: 'delete',
    params
  })
}
