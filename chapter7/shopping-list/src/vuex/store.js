//store.js
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'underscore'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  shoppinglists: []
}

export default new Vuex.Store({
  state,
  mutations
})
