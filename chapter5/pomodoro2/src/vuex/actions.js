import * as types from './mutation_types'

export default {
  start: ({ commit }) => {
    commit(types.START)
  },
  pause: ({ commit }) => {
    commit(types.PAUSE)
  },
  stop: ({ commit }) => {
    commit(types.STOP)
  }
}

