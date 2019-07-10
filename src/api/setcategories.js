import request from '@/utils/request'

export function getInfo (params) {
  return request({
    url: '/setcategories',
    method: 'get',
    params
  })
}
