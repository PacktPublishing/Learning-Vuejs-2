<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <input :value="title" @input="onInput({ title: $event.target.value, id: id })"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['title', 'id'],
    methods: mapActions({
      onInput: 'changeTitle'
    })
  }
</script>

<style scoped>
</style>