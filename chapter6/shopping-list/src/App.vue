<template lang="jade">
  div#app.container
    ul.nav.nav-tabs(role='tablist')
      li(v-for='list in shoppinglists', role='presentation', :class='$index===0 ? "active" : ""')
        shopping-list-title-component(:id='list.id', :title='list.title')
      li
        a(href='#', @click='addShoppingList')
          i.glyphicon.glyphicon-plus-sign
    .tab-content
      .tab-pane(v-for='list in shoppinglists', role='tabpanel', :id='list.id', :class='$index===0 ? "active" : ""')
        shopping-list-component(:id='list.id', :title='list.title', :items='list.items')
</template>


<script>
  import ShoppingListComponent from './components/ShoppingListComponent'
  import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
  import store from './vuex/store'
  import { getLists } from './vuex/getters'
  import { createShoppingList, populateShoppingLists } from './vuex/actions'

  export default {
    components: {
      ShoppingListComponent,
      ShoppingListTitleComponent
    },
    vuex: {
      getters: {
        shoppinglists: getLists
      },
      actions: {
        createShoppingList, populateShoppingLists
      }
    },
    methods: {
      addShoppingList() {
        this.createShoppingList({title: 'New Shopping List', items: []});
      }
    },
    ready() {
      this.populateShoppingLists()
    },
    store
  }
</script>

<style scoped>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }

  .footer {
    font-size: 0.7em;
    margin-top: 40vh;
  }
</style>
