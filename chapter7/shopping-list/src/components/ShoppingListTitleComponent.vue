<template lang="jade">
  a(:href='href', :aria-controls='id', role="tab", data-toggle='tab') {{ title }}
   i.glyphicon.glyphicon-remove(@click='delete')
</template>
<script>
  import { deleteShoppingList } from '../vuex/actions'

  export default{
    props: ['id', 'title'],
    computed: {
      href: function () {
        return '#' + this.id;
      }
    },
    vuex: {
      actions: {
        deleteShoppingList
      }
    },
    methods: {
      delete() {
        this.deleteShoppingList(this.id)
      }
    }
  }
</script>
<style scoped>
  i {
    font-size: x-small;
    padding-left: 3px;
    cursor: pointer;
  }
</style>
