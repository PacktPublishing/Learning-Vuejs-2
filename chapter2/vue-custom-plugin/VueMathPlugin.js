export default {
  install: function (Vue) {
    Vue.directive('square', function (el, binding) {
      el.innerHTML = Math.pow(binding.value, 2);
    });
    Vue.directive('sqrt', function (el, binding) {
      el.innerHTML = Math.sqrt(binding.value);
    });
  }
};
