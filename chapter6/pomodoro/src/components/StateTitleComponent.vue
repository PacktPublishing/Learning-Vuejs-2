<template lang='jade'>
  h3 {{ isworking ? workingtitle : restingtitle }}
</template>

<script>
  import { isWorking } from '../vuex/getters'

  export default {
    data () {
      return {
        workingtitle: 'Work!',
        restingtitle: 'Rest!'
      }
    },
    vuex: {
      getters: {
        isworking: isWorking
      }
    }
  }
</script>

<style scoped>
</style>

