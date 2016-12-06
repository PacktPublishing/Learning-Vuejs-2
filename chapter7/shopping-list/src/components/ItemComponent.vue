<template lang="jade">
  li(v-bind:class='{ "removed": item.checked }')
    input(v-model='item.checked', type='checkbox')
    span {{ item.text }}
</template>

<script>
  import { updateList } from '../vuex/actions'
  export default {
    vuex: {
      actions: {
        updateList
      }
    },
    props: ['id', 'item'],
    watch: {
      'item.checked': function () {
        this.updateList(this.id)
      }
    }
  }
</script>

<style scoped>
  .removed {
    color: gray;
  }

  .removed span {
    text-decoration: line-through;
  }

  li {
    list-style-type: none;
  }

  li span {
    margin-left: 5px;
  }
</style>
