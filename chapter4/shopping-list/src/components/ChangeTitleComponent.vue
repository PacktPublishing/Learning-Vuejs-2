<template lang="jade">
  em Change the title of your shopping list here
  input(v-model="title")
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
</style>
