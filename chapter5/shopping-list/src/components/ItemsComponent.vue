<template lang="jade">
  item-component(v-for="item in items", :item="item")
</template>

<script>
  import ItemComponent from './ItemComponent'

  export default {
    props: ['items'],
    components: {
      ItemComponent
    }
  }
</script>

<style scoped>
</style>
