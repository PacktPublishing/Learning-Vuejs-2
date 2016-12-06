var data = {
  items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
  title: 'My Shopping List',
  newItem: ''
};

new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem: function () {
      var text;

      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = '';
      }
    }
  }
});
