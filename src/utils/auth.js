import { get, put } from '@/utils/axios'

export const getToken = () => {
  return localStorage.getItem('token')
}

export const setToken = (token) => {
  return localStorage.setItem('token', token)
}

export const removeToken = () => {
  return localStorage.removeItem('token')
}

export const getUserInfo = () => {
  return get({
    url: 'userInfo'
  })
}

export const changeShortcuts = (shortcuts) => {
  return put({
    url: 'shortcuts',
    data: {
      shortcuts
    }
  })
}
