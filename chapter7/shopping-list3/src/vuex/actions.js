import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS, ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST } from './mutation_types'
import api from '../api'
import getters from './getters'

export default {
  populateShoppingLists: ({ commit }) => {
    return api.fetchShoppingLists().then(response => {
      commit(POPULATE_SHOPPING_LISTS, response.data)
    })
  },
  changeTitle: (store, data) => {
    store.commit(CHANGE_TITLE, data)
    return store.dispatch('updateList', data.id)
  },
  updateList: (store, id) => {
    let shoppingList = getters.getListById(store.state, id)

    return api.updateShoppingList(shoppingList)
  },
  createShoppingList: (store, shoppinglist) => {
    return api.addNewShoppingList(shoppinglist).then(() => {
      store.dispatch('populateShoppingLists')
    }, () => {
      store.commit(ADD_SHOPPING_LIST, shoppinglist)
    })
  },
  deleteShoppingList: (store, id) => {
    return api.deleteShoppingList(id).then(() => {
      store.dispatch('populateShoppingLists')
    }, () => {
      store.commit(DELETE_SHOPPING_LIST, id)
    })
  }
}

