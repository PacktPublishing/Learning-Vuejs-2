<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <shopping-list-title-component :id="list.id" :title="list.title"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class="index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :id="list.id" :title="list.title" :items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ShoppingListComponent from './components/ShoppingListComponent'
  import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
  import store from './vuex/store'
  import { mapGetters, mapActions } from 'vuex'
  import _ from 'underscore'

  export default {
    components: {
      ShoppingListComponent,
      ShoppingListTitleComponent
    },
    computed: mapGetters({
      shoppinglists: 'getLists'
    }),
    methods: _.extend({}, mapActions(['populateShoppingLists', 'createShoppingList']), {
      addShoppingList () {
        let list = {
          title: 'New Shopping List',
          items: []
        }

        this.createShoppingList(list)
      }
    }),
    store,
    mounted () {
      this.populateShoppingLists()
    }
  }
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>

this.$store.commit('CHANGE_MSG', newMsg);