<template lang='jade'>
  button(title='start' @click='start', :disabled='isStarted && !isPaused')
    i.glyphicon.glyphicon-play
  button(title='pause' @click='pause', :disabled='!isStarted || isPaused')
    i.glyphicon.glyphicon-pause
  button(title='stop' @click='stop', :disabled='!isStarted')
    i.glyphicon.glyphicon-stop
</template>

<script>
  import { start, pause, stop } from '../vuex/actions'
  import { isStarted, isStopped, isPaused } from '../vuex/getters'
  export default {
    vuex: {
      getters: {
        isStarted, isStopped, isPaused
      },
      actions: {
        start, pause, stop
      }
    }
  }
</script>

<style scoped>
  button:disabled i {
    color: gray;
  }
</style>
