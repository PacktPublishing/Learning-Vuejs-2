<template lang="jade">
  .input-group
    input.form-control(placeholder="add shopping list item", type="text", v-model="newItem", @keyup.13="addItem")
    span.input-group-btn
      button.btn.btn-default(type="button", @click="addItem") Add!
</template>

<script>
  import { updateList } from '../vuex/actions'
  export default {
    vuex: {
      actions: {
        updateList
      }
    },
    data() {
      return {
        newItem: ''
      }
    },
    props: ['items', 'id'],
    methods: {
      addItem() {
        var text;

        text = this.newItem.trim();
        if (text) {
          this.items.push({
            text: text,
            checked: false
          });
          this.updateList(this.id)
          this.newItem = "";
        }
      }
    }
  }
</script>

<style scoped>
</style>
