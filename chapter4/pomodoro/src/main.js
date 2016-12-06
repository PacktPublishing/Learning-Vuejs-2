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

Vue.transition('fade', {
  css: false,
  enter: function (el, done) {
    // element is already inserted into the DOM
    // call done when animation finishes.
    $(el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000, done)
  },
  enterCancelled: function (el) {
    $(el).stop()
  },
  leave: function (el, done) {
    // same as enter
    $(el).animate({ opacity: 0 }, 1000, done)
  },
  leaveCancelled: function (el) {
    $(el).stop()
  }
})

new Vue({
  el: 'body',
  components: { App }
})
