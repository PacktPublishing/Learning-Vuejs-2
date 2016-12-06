<template lang='jade'>
  button(title='start' @click='start', :disabled='isStarted && !isPaused')
    i.glyphicon.glyphicon-play
  button(title='pause' @click='pause', :disabled='!isStarted || isPaused')
    i.glyphicon.glyphicon-pause
  button(title='stop' @click='stop', :disabled='!isStarted')
    i.glyphicon.glyphicon-stop
  i.toggle-volume.glyphicon(v-show='isStarted && !isPaused && isWorking', :class="{ 'glyphicon-volume-off': isSoundEnabled, 'glyphicon-volume-up': !isSoundEnabled }", @click='toggleSound')
</template>

<script>
  import { start, pause, stop, toggleSound } from '../vuex/actions'
  import { isStarted, isStopped, isPaused, isWorking, isSoundEnabled } from '../vuex/getters'
  export default {
    vuex: {
      getters: {
        isStarted, isStopped, isPaused, isWorking, isSoundEnabled
      },
      actions: {
        start, pause, stop, toggleSound
      }
    }
  }
</script>

<style scoped>
  button:disabled i {
    color: gray;
  }
  .toggle-volume {
    float: right;
    cursor: pointer;
  }
</style>
