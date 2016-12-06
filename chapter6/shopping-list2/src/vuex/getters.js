import _ from 'underscore'

export default {
  getLists: state => state.shoppinglists,
  getListById: (state, id) => {
    return _.findWhere(state.shoppinglists, { id: id })
  }
}
