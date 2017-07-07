import api from '../../api/hello'
import * as actionTypes from '../actionTypes'
import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  hello: 'world'
}

const getters = {
  [getterNames.helloWorld]: (state, getters) => (
    state.hello
  )
}

const actions = {
  async [actionTypes.HELLO_WORLD] ({ commit, getters, state }) {
    commit(mutationTypes.HELLO, await api.getWorld())
  }
}

const mutations = {
  [mutationTypes.HELLO] (state, world) {
    state.hello = world
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
