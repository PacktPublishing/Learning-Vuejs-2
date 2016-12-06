<template>
  <input :value="msg" @keyup="handleMessageInputChanges($event)" />
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      msg: 'getMessage'
    }),
    methods:  mapActions(['handleMessageInputChanges'])
  }
</script>
