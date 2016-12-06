<template lang="jade">
  div
    em Change the title of your shopping list here
    input(v-model='title' @keyup='tryChangeTitle')
</template>

<script>
  import { changeTitle } from '../vuex/actions'

  export default {
    vuex: {
      actions: {
        changeTitle
      }
    },
    methods: {
      tryChangeTitle() {
        this.changeTitle(this.title, this.id)
      }
    },
    props: ['id', 'title']
  }
</script>
