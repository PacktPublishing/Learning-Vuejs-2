<template>
  <input :value='msg' @keyup='changeMsg'>
</template>
<script>
  import getters from '../vuex/getters'
  import { handleMessageInputChanges } from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        msg: getters.getMessage
      },
      actions: {
        handleMessageInputChanges
      }
    },
    methods: {
      changeMsg(ev) {
        this.handleMessageInputChanges(ev.target.value, ev.keyCode === 13)
      }
    }
  }
</script>
