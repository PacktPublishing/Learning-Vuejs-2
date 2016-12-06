<template>
  <show-greetings-component></show-greetings-component>
  <change-greetings-component></change-greetings-component>
</template>

<script>
import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
import store from './vuex/store'

export default {
  components: {ShowGreetingsComponent, ChangeGreetingsComponent},
  store
}
</script>
