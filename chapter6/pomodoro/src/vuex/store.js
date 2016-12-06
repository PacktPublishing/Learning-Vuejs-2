//store.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import { WORKING_TIME } from '../config'

Vue.use(Vuex)

const state = {
  started: false,
  paused: false,
  stopped: false,
  isWorking: true,
  counter: WORKING_TIME,
  interval: null,
  timestamp: 0,
  soundEnabled: true
}

export default new Vuex.Store({
  state,
  mutations
})
