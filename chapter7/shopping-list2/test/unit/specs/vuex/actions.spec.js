import actions from 'src/vuex/actions'
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from 'src/vuex/mutation_types'

describe('actions.js', () => {
  var server, store, lists, successPut, successPost, successDelete

  successDelete = {'delete': true}
  successPost = {'post': true}
  successPut = {'put': true}

  beforeEach(() => {
    // mock shopping lists
    lists = [{
      id: '1',
      title: 'Groceries'
    }, {
      id: '2',
      title: 'Clothes'
    }]

    // mock store commit and dispatch methods
    store = {
      commit: (method, data) => {},
      dispatch: () => {
        return Promise.resolve()
      },
      state: {
        shoppinglists: lists
      }
    }
    sinon.stub(store, 'commit')

    // mock server
    server = sinon.fakeServer.create()
    server.respondWith('GET', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(lists))
    })
    server.respondWith('POST', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(successPost))
    })
    server.respondWith('PUT', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(successPut))
    })
    server.respondWith('DELETE', /shoppinglists/, xhr => {
      xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(successDelete))
    })
    server.autoRespond = true
  })

  afterEach(() => {
    // restore stubs and server mock
    store.commit.restore()
    server.restore()
  })

  describe('populateShoppingLists', () => {
    it('should call commit method with POPULATE_SHOPPING_LIST string parameter', done => {
      actions.populateShoppingLists(store).then(() => {
        expect(store.commit).to.have.been.calledWith(POPULATE_SHOPPING_LISTS, lists)
        done()
      }).catch(done)
    })
  })

  describe('changeTitle', () => {
    it('should call commit method with CHANGE_TITLE string', (done) => {
      let title = 'new title'

      actions.changeTitle(store, {title: title, id: '1'}).then(() => {
        expect(store.commit).to.have.been.calledWith(CHANGE_TITLE, {title: title, id: '1'})
        done()
      }).catch(done)
    })
  })

  describe('updateList', () => {
    it('should return successful PUT response', (done) => {
      actions.updateList(store, '1').then((data) => {
        expect(data.data).to.eql(successPut)
        done()
      }).catch(done)
    })
  })
})

