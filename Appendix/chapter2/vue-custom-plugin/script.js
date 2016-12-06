import Vue from 'vue/dist/vue.js';
import VueMathPlugin from './VueMathPlugin.js';

Vue.use(VueMathPlugin);

new Vue({
  el: '#app',
  data: { item: 49 }
});