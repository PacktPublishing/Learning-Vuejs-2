<template>
  <div class="well">
    <div class="pomodoro-timer">
      <span>{{ min | leftpad }}:{{ sec | leftpad }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      min: 'getMinutes',
      sec: 'getSeconds'
    })
  }
</script>
