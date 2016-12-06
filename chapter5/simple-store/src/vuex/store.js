import Vue from 'vue'
import Vuex from 'vuex'
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

Vue.use(Vuex)

const state = {
  message: 'Hello Vue!',
  counter: 0
}

const mutations = {
  [CHANGE_MSG](state, msg) {
    state.message = msg
  },
  [INCREMENT_COUNTER](state) {
    state.counter ++;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
