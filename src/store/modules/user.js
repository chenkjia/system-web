import { getUserInfo, getMenus } from '@/utils/auth'

const state = {
  fullname: '',
  avatar: '',
  menus: []
}

const mutations = {
  SET_FULLNAME: (state, fullname) => {
    state.fullname = fullname
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  }
}

const actions = {
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response
        if (!data) {
          reject(new Error('令牌过期，请重新登录'))
        }
        const { fullname, photo } = data.account
        commit('SET_FULLNAME', fullname)
        commit('SET_AVATAR', photo[0])
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getMenus ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getMenus().then(response => {
        const { data } = response.data
        if (!data) {
          reject(new Error('没获取到菜单'))
        }
        commit('SET_MENUS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
