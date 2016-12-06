import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

export default {
  changeMessage ({ commit }, msg) {
    commit(CHANGE_MSG, msg)
  },
  incrementCounter ({ commit }) {
    commit(INCREMENT_COUNTER)
  },
  handleMessageInputChanges ({ commit }, event) {
    commit(CHANGE_MSG, event.target.value)
    if (event.keyCode === 13) {
      commit(INCREMENT_COUNTER)
    }
  }
}
