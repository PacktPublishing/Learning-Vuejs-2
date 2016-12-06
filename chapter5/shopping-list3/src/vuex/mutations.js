import _ from 'underscore'
import * as types from './mutation_types'

function findById (state, id) {
  return _.findWhere(state.shoppinglists, { id: id })
}

export default {
  [types.CHANGE_TITLE] (state, data) {
    findById(state, data.id).title = data.title
  }
}
