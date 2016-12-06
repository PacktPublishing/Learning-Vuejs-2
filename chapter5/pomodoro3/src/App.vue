<template>
  <div id="app" class="container">
    <h2>
      <span>{{ 'Pomodoro' | uppercase | addspace }}</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component v-bind:isworking="isworking"></state-title-component>
    <countdown-component></countdown-component>
    <transition name="fade">
      <kittens-component v-show="!isworking"></kittens-component>
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
import store from './vuex/store'
import { mapGetters } from 'vuex'

export default {
  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
  },
  computed: mapGetters({
    isworking: 'isWorking'
  }),
  store
}
</script>

