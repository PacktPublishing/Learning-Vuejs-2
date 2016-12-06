//store.js
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'underscore'
import * as types from './mutation_types'

Vue.use(Vuex)

const state = {
  shoppinglists: [
    {
      id: 'groceries',
      title: 'Groceries',
      items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]
    },
    {
      id: 'clothes',
      title: 'Clothes',
      items: [{ text: 'black dress', checked: false }, { text: 'all stars', checked: false }]
    }
  ]
}

const mutations = {
  [types.CHANGE_TITLE](state, title, id) {
    findById(id).title = title
  }
}

function findById(id) {
  return _.findWhere(state.shoppinglists, { id: id })
}
export default new Vuex.Store({
  state,
  mutations
})
