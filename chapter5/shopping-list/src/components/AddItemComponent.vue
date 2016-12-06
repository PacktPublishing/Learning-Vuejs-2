<template lang="jade">
  .input-group
    input.form-control(placeholder="add shopping list item", type="text", v-model="newItem", @keyup.13="addItem")
    span.input-group-btn
      button.btn.btn-default(type="button", @click="addItem") Add!
</template>

<script>
  export default {
    data() {
      return {
        newItem: ''
      }
    },
    props: ['items'],
    methods: {
      addItem() {
        var text;

        text = this.newItem.trim();
        if (text) {
          this.items.push({
            text: text,
            checked: false
          });
          this.newItem = "";
        }
      }
    }
  }
</script>

<style scoped>
</style>
