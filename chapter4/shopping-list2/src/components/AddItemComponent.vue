<template>
  <div class="input-group">
    <input type="text" v-model="newItem" placeholder="add shopping list item" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-default" type="button">Add!</button>
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newItem: ''
      }
    }
  }
</script>

<style scoped>
</style>
