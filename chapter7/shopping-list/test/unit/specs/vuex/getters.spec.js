import * as getters from 'src/vuex/getters'

describe('getters.js', () => {
  var state, lists

  beforeEach(() => {
    lists = [{id: '1', title: 'groceries'}, {id: '2', title: 'clothes'}]
    state = {
      shoppinglists: lists
    }
  })

  describe('getLists', () => {
    it('should return lists', () => {
      expect(getters.getLists(state)).to.eql(lists)
    })
  })

  describe('getListById', () => {
    it('should return the shopping list object by its id', () => {
      expect(getters.getListById(state, '1')).to.eql({id: '1', title: 'groceries'})
    })

    it('should not return anything if the passed id is not in the list', () => {
      expect(getters.getListById(state, 'notexisting')).to.be.empty
    })
  })
})
