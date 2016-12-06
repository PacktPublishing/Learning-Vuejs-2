<template>
  <div id="app" class="container">
    <h2>{{ title }}</h2>
    <add-item-component></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component></change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from './components/AddItemComponent'
  import ItemsComponent from './components/ItemsComponent'
  import ChangeTitleComponent from './components/ChangeTitleComponent'

  export default {
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    data () {
      return {
        items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }]
      }
    }
  }
</script>