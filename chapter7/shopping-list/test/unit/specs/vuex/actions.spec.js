import * as actions from 'src/vuex/actions'
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS, ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST } from 'src/vuex/mutation_types'

describe('actions.js', () => {
  var server, store, lists, successPut, successPost, successDelete;

  successDelete = {'delete': true}
  successPost = {'post': true}
  successPut = {'put': true}

  beforeEach(function () {
    //mock shopping lists
    lists = [{
      id: '1',
      title: 'Groceries'
    }, {
      id: '2',
      title: 'Clothes'
    }]

    //mock store dispatch method
    store = {
      dispatch: (method, data) => {},
      state: {
        shoppinglists: lists
      }
    }
    sinon.stub(store, 'dispatch')

    //mock server
    server = sinon.fakeServer.create()
    server.respondWith('GET', /shoppinglists/, xhr => {
      xhr.respond(200, {"Content-Type": "application/json"}, JSON.stringify(lists));
    })
    server.respondWith('POST', /shoppinglists/, xhr => {
      xhr.respond(200, {"Content-Type": "application/json"}, JSON.stringify(successPost))
    })
    server.respondWith('PUT', /shoppinglists/, xhr => {
      xhr.respond(200, {"Content-Type": "application/json"}, JSON.stringify(successPut))
    })
    server.respondWith('DELETE', /shoppinglists/, xhr => {
      xhr.respond(200, {"Content-Type": "application/json"}, JSON.stringify(successDelete))
    })
    server.autoRespond = true
  })

  afterEach(function () {
    //restore stubs and server mock
    store.dispatch.restore()
    server.restore()
  })

  describe('populateShoppingLists', () => {
    it('should call dispatch method with POPULATE_SHOPPING_LIST string parameter', done => {
      actions.populateShoppingLists(store).then(() => {
        expect(store.dispatch).to.have.been.calledWith(POPULATE_SHOPPING_LISTS, lists)
        done()
      }).catch(done)
    })
  })

  describe('changeTitle', () => {
    it('should call dispatch method with CHANGE_TITLE string and receive successPut response', (done) => {
      let title = 'new title'

      actions.changeTitle(store, title, '1').then((data) => {
        expect(store.dispatch).to.have.been.calledWith(CHANGE_TITLE, title, '1')
        expect(data.data).to.eql(successPut)
        done()
      }).catch(done)
    })
  })
})
