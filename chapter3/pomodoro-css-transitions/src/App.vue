<template>
  <div id="app" class="container">
    <h2>
      <span>Pomodoro</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component></state-title-component>
    <countdown-component></countdown-component>
    <transition name="fade">
      <kittens-component v-if="kittens"></kittens-component>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>

<script>
import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import KittensComponent from './components/KittensComponent'
import StateTitleComponent from './components/StateTitleComponent'
window.data = {kittens: true}
export default {
  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
  },
  data () {
    return window.data
  }
}
</script>
