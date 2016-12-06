import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */

/**
 * Adds left 0 to the number if it is lower than 10
 *
 * @param {number} value
 * @returns {string}
 */
Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }

  return '0' + value;
})
/**
 * Returns an uppercased version of the given string
 *
 * @param {string} value
 * @returns {string}
 */
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})
/**
 * Adds a space from the right side of the given string
 *
 * @param {string} value
 * @returns {string}
 */
Vue.filter('addspace', (value) => {
  return value + ' ';
})

new Vue({
  el: 'body',
  components: { App }
})
