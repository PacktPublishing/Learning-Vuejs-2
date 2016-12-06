import * as types from './mutation_types'
import _ from 'underscore'
import { getListById } from './getters'

export default {
  [types.CHANGE_TITLE](state, title, id) {
    getListById(state, id).title = title
  },
  [types.ADD_SHOPPING_LIST](state, newList) {
    if (_.isObject(newList)) {
      state.shoppinglists.push(newList)
    }
  },
  [types.POPULATE_SHOPPING_LISTS](state, lists) {
    state.shoppinglists = lists
  },
  [types.DELETE_SHOPPING_LIST](state, id) {
    state.shoppinglists = _.reject(state.shoppinglists, (list) => {
      return list.id === id;
    });
  }
}
