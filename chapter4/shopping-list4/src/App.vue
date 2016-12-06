<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" role="presentation">
        <a :href="'#' + list.id" :aria-controls="list.id" role="tab" data-toggle="tab">{{ list.title }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div :class= "index===0 ? 'active' : ''" v-for="(list, index) in shoppinglists" class="tab-pane" role="tabpanel" :id="list.id">
        <shopping-list-component :title="list.title" :items="list.items"></shopping-list-component>
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