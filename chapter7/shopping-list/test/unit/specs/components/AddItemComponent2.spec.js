import Vue from 'vue'
import AddItemComponent from 'src/components/AddItemComponent'

describe('AddItemComponent.vue', () => {
  var component;

  beforeEach(() => {
    component = new Vue(AddItemComponent).$mount()
  })

  describe('addItem', () => {
    it('should add item to the items array', () => {
      component.items = []
      component.newItem = 'hello'
      component.updateList = () => {}
      sinon.spy(component, 'updateList')
      component.addItem()
      expect(component.updateList).to.have.been.called
      component.updateList.restore()
      expect(component.items).to.eql([
        {text: 'hello', checked: false}
      ])
    })
  })
})
