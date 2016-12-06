<template lang="jade">
div
  h2 {{ title }}
  add-item-component(:items='items')
  items-component(:items='items')
  .footer
    hr
    em Change the title of your shopping list here
    input(v-model="title")
</template>

<script>
  import AddItemComponent from './AddItemComponent'
  import ItemsComponent from './ItemsComponent'
  import ChangeTitleComponent from './ChangeTitleComponent'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    props: ['title', 'items']
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 40vh;
  }
</style>
