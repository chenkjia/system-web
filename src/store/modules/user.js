import { getUserInfo } from '@/utils/auth'

const state = {
  fullname: '',
  avatar: ''
}

const mutations = {
  SET_FULLNAME: (state, fullname) => {
    state.fullname = fullname
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
