import mutations from 'src/vuex/mutations'
import { ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST, POPULATE_SHOPPING_LISTS, CHANGE_TITLE } from 'src/vuex/mutation_types'

describe('mutations.js', () => {
  var state

  beforeEach(() => {
    state = {
      shoppinglists: []
    }
  })

  describe('ADD_SHOPPING_LIST', () => {
    it('should add item to the shopping list array and increase its length', () => {
      mutations[ADD_SHOPPING_LIST](state, {id: '1'})
      expect(state.shoppinglists).to.eql([{id: '1'}])
      expect(state.shoppinglists).to.have.length(1)
    })

    it('should not add the item if item is empty', () => {
      mutations[ADD_SHOPPING_LIST](state)
      expect(state.shoppinglists).to.have.length(0)
    })
  })

  describe('DELETE_SHOPPING_LIST', () => {
    it('should remove item from the shopping list array', () => {
      state.shoppinglists = [{id : '1'}, {id: '2'}, {id: 3}]
      mutations[DELETE_SHOPPING_LIST](state, '1')
      expect(state.shoppinglists).to.eql([{id: '2'}, {id: 3}])
    })
  })

  describe('POPULATE_SHOPPING_LISTS', () => {
    it('should assign to the value of shopping lists the given property', () => {
      mutations[POPULATE_SHOPPING_LISTS](state, [{id: '1'}])
      expect(state.shoppinglists).to.eql([{id : '1'}])
    })
  })

  describe('CHANGE_TITLE', () => {
    it('should change the title of the given list', () => {
      let title = 'learning vue.js'
      state.shoppinglists = [{ id : '1', title: 'groceries' }, { id : '2', title: 'clothes' }]
      mutations[CHANGE_TITLE](state, title, '1')
      expect(state.shoppinglists).to.eql([{ id : '1', title: title }, { id : '2', title: 'clothes' }])
    })
  })
})

