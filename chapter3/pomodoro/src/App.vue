<template>
  <div id="app" class="container">
    <h2>
      <span>Pomodoro</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component></state-title-component>
    <countdown-component></countdown-component>
    <kittens-component></kittens-component>
  </div>
</template>

<style scoped>
</style>

<script>
import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import KittensComponent from './components/KittensComponent'
import StateTitleComponent from './components/StateTitleComponent'

export default {
  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent
  }
}
</script>
