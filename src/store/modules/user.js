import { getUserInfo } from '@/utils/auth'

const state = {
  accountId: '',
  fullname: '',
  avatar: '',
  menus: []
}

const mutations = {
  SET_ACCOUNTID: (state, accountId) => {
    state.accountId = accountId
  },
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
  getInfo ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response
        if (!data) {
          reject(new Error('令牌过期，请重新登录'))
        }
        const { fullname, photo, _id } = data.account
        commit('SET_ACCOUNTID', _id)
        commit('SET_FULLNAME', fullname)
        commit('SET_AVATAR', photo[0])
        commit('SET_MENUS', data.menus)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  delAccount ({ commit }) {
    commit('SET_ACCOUNTID', '')
    commit('SET_FULLNAME', '')
    commit('SET_AVATAR', '')
    commit('SET_MENUS', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
