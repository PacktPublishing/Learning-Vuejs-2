import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

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
      items: [{ text: 'black dress', checked: false }, { text: 'all-stars', checked: false }]
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
