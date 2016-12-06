<template lang="jade">
  div#app.container
    h2
      span {{ 'Pomodoro' | uppercase | addspace }}
      controls-component
    state-title-component(v-bind:isworking='isworking')
    countdown-component
    kittens-component(v-show="!isworking" transition="fade")
</template>

<style scoped>
  /* always present */
  .expand-transition {
    transition: all .5s ease;
    overflow: hidden;
  }

  /* .expand-enter defines the starting state for entering */
  /* .expand-leave defines the ending state for leaving */
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }
</style>
<script>
import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import KittensComponent from './components/KittensComponent'
import StateTitleComponent from './components/StateTitleComponent'

window.data = {
  isworking: true
};

export default {
  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
  },
  data() {
    return window.data
  }
}
</script>
