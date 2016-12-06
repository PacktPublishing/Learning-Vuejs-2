<template>
  <a :href="href" :aria-controls="id" role="tab" data-toggle="tab">{{ title }}</a>
</template>
<script>
  export default{
    props: ['id', 'title'],
    computed: {
      href () {
        return '#' + this.id
      }
    }
  }
</script>