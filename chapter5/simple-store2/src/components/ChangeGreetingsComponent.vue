<template>
  <input :value="msg" @keyup="changeMsg">
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      msg: 'getMessage'
    }),
    methods: {
      changeMsg(ev) {
        this.$store.commit('changeMessage', ev.target.value)
      }
    }
  }
</script>
