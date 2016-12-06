import * as types from './mutation_types'

export default {
  [types.START] (state) {
    state.started = true
    state.paused = false
    state.stopped = false
  },
  [types.PAUSE] (state) {
    state.paused = true
    state.started = true
    state.stopped = false
  },
  [types.STOP] (state) {
    state.stopped = true
    state.paused = false
    state.started = false
  }
}
