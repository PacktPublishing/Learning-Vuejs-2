import _ from 'underscore'

export function getLists(state) {
  return state.shoppinglists
}
export function getListById(state, id) {
  return _.findWhere(state.shoppinglists, {id: id})
}
