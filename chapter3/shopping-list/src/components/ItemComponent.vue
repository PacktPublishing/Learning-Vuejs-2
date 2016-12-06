<template>
  <li :class="{ 'removed': item.checked }">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item.checked"> {{ item.text }}
      </label>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['item']
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
