import { getUserInfo, changeShortcuts } from '@/utils/auth'

const state = {
  accountId: '',
  fullname: '',
  avatar: '',
  menus: [],
  shortcuts: []
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
  },
  SET_SHORTCUTS: (state, shortcuts) => {
    state.shortcuts = shortcuts
  }
}

const actions = {
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response
        if (!data) {
          reject(new Error('令牌过期，请重新登录'))
        }
        const { _id, fullname, photo, shortcuts } = data.account
        commit('SET_ACCOUNTID', _id)
        commit('SET_FULLNAME', fullname)
        commit('SET_AVATAR', photo[0])
        commit('SET_MENUS', data.menus)
        commit('SET_SHORTCUTS', shortcuts || [])
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  changeShortcuts ({ commit, state }, shortcut) {
    const newShortcuts = state.shortcuts.includes(shortcut)
      ? state.shortcuts.filter(item => item !== shortcut)
      : [...state.shortcuts, shortcut]
    changeShortcuts(newShortcuts).then(res => {
      if (res.code === 0) {
        commit('SET_SHORTCUTS', newShortcuts)
      }
    })
  },
  delAccount ({ commit }) {
    commit('SET_ACCOUNTID', '')
    commit('SET_FULLNAME', '')
    commit('SET_AVATAR', '')
    commit('SET_MENUS', [])
    commit('SET_SHORTCUTS', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
