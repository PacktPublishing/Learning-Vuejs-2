<template>
  <h1>{{ msg }}</h1>
  <div>the message was changed {{ counter }} times</div>
</template>
<style>
</style>
<script>
  import getters from '../vuex/getters'

  export default {
    vuex: {
      getters: {
        msg: getters.getMessage,
        counter: getters.getCounter
      }
    }
  }
</script>
