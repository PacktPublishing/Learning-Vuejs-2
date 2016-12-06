<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-bind:class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-bind:class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" v-bind:id="list.id">
        <shopping-list-component v-bind:title="list.title" v-bind:items="list.items"></shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ShoppingListComponent from './components/ShoppingListComponent'

  export default {
    components: {
      ShoppingListComponent
    },
    data () {
      return {
        shoppinglists: [
          {
            id: 'groceries',
            title: 'Groceries',
            items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]
          },
          {
            id: 'clothes',
            title: 'Clothes',
            items: [{ text: 'black dress', checked: false }, { text: 'all stars', checked: false }]
          }
        ]
      }
    }
  }
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>