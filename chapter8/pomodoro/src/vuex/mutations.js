import * as types from './mutation_types'
import _ from 'underscore'
import { WORKING_TIME, RESTING_TIME, KITTEN_TIME } from '../config'
import Vue from 'vue'

function togglePomodoro (state, toggle) {
  if (_.isBoolean(toggle) === false) {
    toggle = !state.isWorking
  }
  state.isWorking = toggle
  if (state.isWorking) {
    Vue.noise.start()
  } else {
    Vue.noise.pause()
  }
  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME
}

function tick (state) {
  if (state.counter === 0) {
    togglePomodoro(state)
  }
  state.counter--
  if (state.counter % KITTEN_TIME === 0) {
    state.timestamp = new Date().getTime()
  }
}

export default {
  [types.START] (state) {
    state.started = true
    state.paused = false
    state.stopped = false
    state.interval = setInterval(() => tick(state), 1000)
    if (state.isWorking && state.soundEnabled) {
      Vue.noise.start()
    }
  },
  [types.PAUSE] (state) {
    state.paused = true
    state.started = true
    state.stopped = false
    clearInterval(state.interval)
    Vue.noise.pause()
  },
  [types.STOP] (state) {
    state.stopped = true
    state.paused = false
    state.started = false
    togglePomodoro(state, true)
    Vue.noise.stop()
  },
  [types.TOGGLE_SOUND] (state) {
    state.soundEnabled = !state.soundEnabled
    if (state.soundEnabled) {
      Vue.noise.start()
    } else {
      Vue.noise.pause()
    }
  }
}
