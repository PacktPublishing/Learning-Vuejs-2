import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

const ShoppingListsResource = Vue.resource('http://localhost:3000/' + 'shoppinglists{/id}')

export default {
  fetchShoppingLists: () => {
    return ShoppingListsResource.get()
  },
  addNewShoppingList: (data) => {
    return ShoppingListsResource.save(data)
  },
  updateShoppingList: (data) => {
    return ShoppingListsResource.update({id: data.id}, data)
  },
  deleteShoppingList: (id) => {
    return ShoppingListsResource.remove({id: id})
  }
}
