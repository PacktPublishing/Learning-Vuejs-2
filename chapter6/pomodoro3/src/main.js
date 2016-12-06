import Vue from 'vue'
import App from './App'
import VueNoiseGeneratorPlugin from './plugins/VueNoiseGeneratorPlugin'

Vue.use(VueNoiseGeneratorPlugin)

Vue.filter('uppercase', (key) => {
  return key.toUpperCase()
})

Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})

Vue.filter('addspace', (value) => {
  return value + ' '
})

/* eslint-disable no-new */
new Vue({
  el: 'app',
  components: { App }
})
