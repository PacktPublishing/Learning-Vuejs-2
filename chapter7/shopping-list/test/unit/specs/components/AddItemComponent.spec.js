import Vue from 'vue'
import AddItemComponent from 'src/components/AddItemComponent'
import store from 'src/vuex/store'

describe('AddItemComponent.vue', () => {
  var vm, addItemComponent;

  beforeEach(() => {
    vm = new Vue({
      template: '<add-item-component :items="items" :id="id" v-ref:add-item-component>' +
      '</add-item-component>',
      components: {
        AddItemComponent
      },
      data() {
        return {
          items: [],
          id: 'niceId'
        }
      },
      store
    }).$mount();

    addItemComponent = vm.$refs.addItemComponent;
  })

  describe('AddItemComponent.vue', () => {
    it('should add item to the items array', () => {
      sinon.stub(addItemComponent, 'updateList')
      addItemComponent.$set('newItem', 'hello');
      addItemComponent.addItem();
      expect(addItemComponent.updateList).to.have.been.called
      addItemComponent.updateList.restore()
      expect(addItemComponent.items).to.eql([
        {text: 'hello', checked: false}
      ])
    })
  })
})
