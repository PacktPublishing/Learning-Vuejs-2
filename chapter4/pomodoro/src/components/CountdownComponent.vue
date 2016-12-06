<template lang='jade'>
  .well
    .pomodoro-timer
      span {{ min | leftpad }}:{{ sec | leftpad }}
</template>

<style scoped>
</style>

<script>
  export default {
    data () {
      return {
        min: 1,
        sec: 5
      }
    }
  }
</script>
