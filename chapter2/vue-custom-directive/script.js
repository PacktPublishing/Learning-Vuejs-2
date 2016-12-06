Vue.directive('square', function (el, binding) {
  el.innerHTML = Math.pow(binding.value, 2);
});

new Vue({
  el: '#app',
  data: { item: 42 }
});