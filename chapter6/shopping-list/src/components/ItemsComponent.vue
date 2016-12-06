<template lang="jade">
  item-component(v-for="item in items", :item="item", :id="id")
</template>

<script>
  import ItemComponent from './ItemComponent'

  export default {
    props: ['items', 'id'],
    components: {
      ItemComponent
    }
  }
</script>

<style scoped>
</style>
