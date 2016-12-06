<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>the message was changed {{ counter }} times</div>
  </div>
</template>
<style>
</style>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      msg: 'getMessage',
      counter: 'getCounter'
    })
  }
</script>
