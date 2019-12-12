import { pick } from 'lodash'
import { get } from '@/utils/axios'

const state = {
  relation: {}
}

const mutations = {
  SET_RELATION: (state, newRelation) => {
    state.relation = {
      ...state.relation,
      ...newRelation
    }
  }
}
const getRelationRequest = (relation) => {
  return new Promise((resolve, reject) => {
    get({
      url: 'relation',
      params: {
        relation: relation.join(',')
      }
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}

const actions = {
  getRelation: async ({ commit, state, dispatch }, relationList) => {
    // 把新的relation过滤出来
    const newRelationList = relationList.filter(value => !state.relation[value])
    // 向后端拿到新的relation然后更新到stroe里
    if (newRelationList.length) {
      const newRelation = await getRelationRequest(newRelationList)
      commit('SET_RELATION', newRelation)
    }
    // 筛选出功能需要的relation然后返回
    return pick(state.relation, relationList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
