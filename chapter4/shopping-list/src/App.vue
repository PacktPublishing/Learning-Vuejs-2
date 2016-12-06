<template lang="jade">
  div#app.container
    ul.nav.nav-tabs(role="tablist")
      li(v-for="list in shoppinglists", role="presentation", v-bind:class='$index===0 ? "active" : ""')
        a(v-bind:href="'#' + list.id", v-bind:aria-controls="list.id", role="tab", data-toggle="tab") {{ list.title }}
    .tab-content
      .tab-pane(v-for="list in shoppinglists", role="tabpanel", v-bind:id="list.id", v-bind:class='$index===0 ? "active" : ""')
        shopping-list-component(v-bind:title="list.title", v-bind:items="list.items")
</template>

<script>
  import ShoppingListComponent from './components/ShoppingListComponent'

  export default {
    components: {
      ShoppingListComponent
    },
    data() {
      return {
        shoppinglists: [
          {
            id: "groceries",
            title: "Groceries",
            items: [{ text: "Bananas", checked: true }, { text: "Apples", checked: false }]
          },
          {
            id: "clothes",
            title: "Clothes",
            items: [{ text: "black dress", checked: false }, { text: "all stars", checked: false }]
          }
        ]
      }
    }
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
