<template lang='jade'>
  .well
    img(:src="catimgsrc")
</template>

<style scoped>
</style>

<script>
  export default {
    data() {
      return {
        catimgsrc: "http://thecatapi.com/api/images/get?size=med"
      }
    }
  }
</script>
