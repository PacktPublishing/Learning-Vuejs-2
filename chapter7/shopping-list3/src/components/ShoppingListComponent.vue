<template>
  <div>
    <h2>{{ title }}</h2>
    <add-item-component :id="id" @add="addItem"></add-item-component>
    <items-component :items="items" :id="id"></items-component>
    <div class="footer">
      <hr />
      <change-title-component :title="title" :id="id"></change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from './AddItemComponent'
  import ItemsComponent from './ItemsComponent'
  import ChangeTitleComponent from './ChangeTitleComponent'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    props: ['id', 'title', 'items'],
    methods: {
      addItem (text) {
        this.items.push({
          text: text,
          checked: false
        })
      }
    }
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>