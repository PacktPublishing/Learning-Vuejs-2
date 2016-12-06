<template lang='jade'>
  .well
    img(:src="catimgsrc")
</template>

<script>
  import { getTimestamp } from '../vuex/getters'

  export default {
    computed: {
      catimgsrc() {
        return 'http://thecatapi.com/api/images/get?size=med' + '&ts=' + this.timestamp
      }
    },
    vuex: {
      getters: {
        timestamp: getTimestamp
      }
    }
  }
</script>

<style scoped>
  .well {
    text-align: center;
  }
</style>
