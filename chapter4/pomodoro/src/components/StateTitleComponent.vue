<template lang='jade'>
  h3 {{ isworking ? workingtitle : restingtitle }}
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        workingtitle: 'Work!',
        restingtitle: 'Rest!'
      }
    },
    props: ['isworking']
  }
</script>
