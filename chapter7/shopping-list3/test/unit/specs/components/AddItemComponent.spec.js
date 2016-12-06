import Vue from 'vue'
import AddItemComponent from 'src/components/AddItemComponent'
import store from 'src/vuex/store'

describe('AddItemComponent.vue', () => {
  describe('initialization', () => {
    it('should initialize the component with empty string newItem', () => {
      expect(AddItemComponent.data()).to.eql({
        newItem: ''
      })
    })
  })

  describe('addItem', () => {
    var component

    beforeEach(() => {
      var vm = new Vue({
        template: '<add-item-component :items="items" :id="id" ref="additemcomponent">' +
        '</add-item-component>',
        components: {
          AddItemComponent
        },
        data () {
          return {
            items: [],
            id: 'niceId'
          }
        },
        store
      }).$mount()

      component = vm.$refs.additemcomponent
    })

    it('should call $emit method', () => {
      let newItem = 'Learning Vue JS'
      // stub $emit method
      sinon.stub(component, '$emit')
      // stub store's dispatch mthod
      sinon.stub(store, 'dispatch')
      // set a new item
      component.newItem = newItem
      component.addItem()
      // newItem should be reset
      expect(component.newItem).to.eql('')
      // $emit should be called with custom event 'add' and a newItem value
      expect(component.$emit).to.have.been.calledWith('add', newItem)
      // dispatch should be called with updateList and the id of the list
      expect(store.dispatch).to.have.been.calledWith('updateList', 'niceId')
      store.dispatch.restore()
      component.$emit.restore()
    })
  })
})
