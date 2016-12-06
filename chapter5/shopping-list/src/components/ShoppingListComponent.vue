<template lang="jade">
div
  h2 {{ title }}
  add-item-component(:items='items')
  items-component(:items='items')
  .footer
    hr
    change-title-component(:title='title', :id='id')
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
    props: ['id', 'title', 'items']
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>
